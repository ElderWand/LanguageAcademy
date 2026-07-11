import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface LanguageCardProps {
  image: string;
  imageAlt: string;
  title: React.ReactNode;
  description: React.ReactNode;
  href: string;
  courseBadge: React.ReactNode;
  levelsText: React.ReactNode;
  exploreText: React.ReactNode;
}

export function LanguageCard({
  image,
  imageAlt,
  title,
  description,
  href,
  courseBadge,
  levelsText,
  exploreText,
}: LanguageCardProps) {
  return (
    <div 
      className="relative rounded-[32px] overflow-hidden aspect-square transition-all duration-500 hover:shadow-xl group bg-brand-navy border border-slate-100 focus-within:ring-2 focus-within:ring-brand-lime outline-none"
      tabIndex={0}
    >
      {/* Flag Background */}
      <Image 
        src={image} 
        alt={imageAlt} 
        fill 
        sizes="(max-width: 768px) 100vw, 25vw"
        className="object-cover transition-all duration-500 group-hover:scale-105 saturate-100 brightness-90 md:saturate-[35%] md:group-hover:saturate-100 md:contrast-[1.15] md:group-hover:contrast-100 md:brightness-[0.65] md:group-hover:brightness-90 group-focus-within:scale-105 group-focus-within:brightness-90 group-focus-within:saturate-100"
      />

      {/* Glass Block */}
      <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md border border-white/10 rounded-2xl p-4 transition-all duration-500 ease-in-out z-20">
        <span className="text-[9px] font-bold uppercase tracking-widest text-brand-lime block">
          {courseBadge}
        </span>
        <h3 className="text-lg font-extrabold text-white mt-0.5">{title}</h3>

        {/* Collapsible Details */}
        <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-[220px] group-hover:opacity-100 group-hover:mt-3 group-focus-within:max-h-[220px] group-focus-within:opacity-100 group-focus-within:mt-3">
          <div className="border-t border-white/10 pt-2.5">
            <span className="text-[9px] text-brand-lime/90 font-bold uppercase tracking-wider block mb-1.5">
              {levelsText}
            </span>
            <p className="text-[11px] text-slate-300 leading-relaxed font-medium">
              {description}
            </p>
            <Link 
              href={href} 
              className="text-xs font-bold text-brand-lime hover:text-white transition-colors inline-flex items-center gap-1 mt-3 outline-none focus:underline"
            >
              {exploreText} <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
