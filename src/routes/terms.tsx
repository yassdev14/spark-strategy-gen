import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/marketing/reveal";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms — MultiVision Strategies" },
      {
        name: "description",
        content:
          "Terms of use governing your interaction with the MultiVision Strategies website.",
      },
      { property: "og:title", content: "Terms — MultiVision Strategies" },
      {
        property: "og:description",
        content: "Terms of use for this website.",
      },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
      <Reveal>
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-electric">
          Legal
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Terms of use
        </h1>
        <div className="prose prose-invert mt-10 max-w-none text-sm text-muted-foreground [&_h2]:mt-10 [&_h2]:text-foreground [&_h2]:text-lg [&_h2]:font-semibold">
          <h2>Website content</h2>
          <p>
            The content on this website is provided for general information
            about MultiVision Strategies and does not constitute professional
            advice.
          </p>
          <h2>Intellectual property</h2>
          <p>
            All text, graphics, and brand marks on this website are the
            property of MultiVision Strategies and may not be reproduced
            without prior written consent.
          </p>
          <h2>Contact</h2>
          <p>
            For any question about these terms, please contact{" "}
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
