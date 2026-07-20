import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/marketing/reveal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — MultiVision Strategies" },
      {
        name: "description",
        content:
          "How MultiVision Strategies collects, uses and protects personal data submitted through this website.",
      },
      { property: "og:title", content: "Privacy — MultiVision Strategies" },
      {
        property: "og:description",
        content: "Our approach to data privacy and confidentiality.",
      },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
      <Reveal>
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-electric">
          Legal
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Privacy notice
        </h1>
        <div className="prose prose-invert mt-10 max-w-none text-sm text-muted-foreground [&_h2]:mt-10 [&_h2]:text-foreground [&_h2]:text-lg [&_h2]:font-semibold">
          <h2>Data we collect</h2>
          <p>
            When you contact us through this website, we collect the information
            you submit in the contact form (name, email, company, phone,
            subject, and message) along with a timestamp.
          </p>
          <h2>How we use it</h2>
          <p>
            We use this information only to respond to your enquiry and to
            follow up on any resulting engagement. We do not sell, rent, or
            share your personal data with third parties for marketing purposes.
          </p>
          <h2>Retention</h2>
          <p>
            Enquiries are retained for as long as needed to serve the client
            relationship or comply with our legal obligations, and are then
            securely deleted.
          </p>
          <h2>Your rights</h2>
          <p>
            You may request access to, correction of, or deletion of your
            personal data at any time by writing to{" "}
            <a
              href="mailto:management@multivisionstrategies.com"
              className="text-foreground underline"
            >
              management@multivisionstrategies.com
            </a>
            .
          </p>
        </div>
      </Reveal>
    </div>
  );
}
