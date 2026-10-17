import { MEDIA, img } from "../../data/media";

export default function PhotoFrame({ name, w = 900, h = 700, eager = false, className = "" }: { name: keyof typeof MEDIA; w?: number; h?: number; eager?: boolean; className?: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-mist ${className}`} style={{ aspectRatio: `${w} / ${h}` }}>
      <img
        src={img(name, w, h)}
        alt={MEDIA[name].alt}
        width={w}
        height={h}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        style={{ objectPosition: MEDIA[name].pos }}
        className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
    </div>
  );
}
