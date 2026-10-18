import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import type { Faq } from "../../data/faqs";

export default function Accordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${base}-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold text-navy"
              >
                {item.q}
                <ChevronDown size={20} aria-hidden className={`shrink-0 text-spark-dark transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
            </h3>
            
              {isOpen && (
                <div
                  id={`${base}-${i}`}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 leading-relaxed text-muted">{item.a}</p>
                </div>
              )}
            
          </div>
        );
      })}
    </div>
  );
}
