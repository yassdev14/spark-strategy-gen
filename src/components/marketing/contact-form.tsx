import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email.").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  subject: z
    .string()
    .trim()
    .min(1, "Please add a subject.")
    .max(200),
  message: z
    .string()
    .trim()
    .min(10, "Please share a little more (min. 10 chars).")
    .max(2000),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof FormState;
        if (!fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company || null,
      phone: parsed.data.phone || null,
      subject: parsed.data.subject,
      message: parsed.data.message,
      source: "website_contact_form",
    });
    setSubmitting(false);

    if (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again or email us directly.");
      return;
    }

    toast.success("Thanks — a partner will reply within two business days.");
    setValues(initial);
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-white/10 bg-card/40 p-6 sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.name} required>
          <Input
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            autoComplete="name"
            required
            maxLength={100}
          />
        </Field>
        <Field label="Work email" error={errors.email} required>
          <Input
            type="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            autoComplete="email"
            required
            maxLength={255}
          />
        </Field>
        <Field label="Company" error={errors.company}>
          <Input
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
            autoComplete="organization"
            maxLength={120}
          />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <Input
            type="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            autoComplete="tel"
            maxLength={40}
          />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Subject" error={errors.subject} required>
          <Input
            value={values.subject}
            onChange={(e) => update("subject", e.target.value)}
            required
            maxLength={200}
          />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="How can we help?" error={errors.message} required>
          <Textarea
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            rows={6}
            required
            maxLength={2000}
          />
        </Field>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          By submitting, you agree to be contacted about your enquiry.
        </p>
        <Button
          type="submit"
          size="lg"
          variant="brand"
          disabled={submitting}
        >
          {submitting ? (
            <>
              <Loader2 className="size-4 animate-spin" /> Sending
            </>
          ) : (
            <>
              Send message <Send className="size-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
        {required ? <span className="ml-0.5 text-electric">*</span> : null}
      </Label>
      {children}
      {error ? (
        <p className="text-xs text-destructive">{error}</p>
      ) : null}
    </div>
  );
}
