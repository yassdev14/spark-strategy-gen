import { useI18n, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LangSwitch({ className }: { className?: string }) {
  const { lang, setLang, t } = useI18n();
  const options: Lang[] = ["fr", "en"];

  return (
    <div
      role="group"
      aria-label={t("nav.langSwitch")}
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-white/10 bg-white/5 p-0.5 text-[11px] font-semibold uppercase tracking-[0.14em]",
        className,
      )}
    >
      {options.map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            className={cn(
              "rounded-full px-2.5 py-1 transition-colors",
              active
                ? "bg-gradient-to-r from-iris to-electric text-white"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
