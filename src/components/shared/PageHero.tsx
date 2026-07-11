import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  backgroundImage?: string;       // path to background image
  title: React.ReactNode;         // <h1> content or React node
  subtitle?: React.ReactNode;     // optional subtitle under h1
  badgeText?: React.ReactNode;    // optional top badge (e.g., "FORMATION")
  breadcrumbs?: BreadcrumbItem[];
  priority?: boolean;            // Next.js Image priority
}

export function PageHero({
  backgroundImage,
  title,
  subtitle,
  badgeText,
  breadcrumbs,
  priority = false,
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 sm:pb-20 bg-brand-navy text-white border-b border-slate-800 overflow-hidden">
      {/* Background Image if provided */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt={typeof title === "string" ? title : "Hero Banner"}
            fill
            priority={priority}
            className="object-cover object-center opacity-30"
          />
          {/* Gradient covering the lower part of the hero */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent" />
        </div>
      )}

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5 select-none pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-left">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-8">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              if (isLast) {
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-300"
                  >
                    {idx === 0 && <ArrowLeft className="size-3.5" />}
                    {crumb.label}
                  </span>
                );
              }
              return (
                <Link
                  key={idx}
                  href={crumb.href || "/"}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-300 hover:text-white transition-colors mr-2"
                >
                  {idx === 0 && <ArrowLeft className="size-3.5" />}
                  {crumb.label}
                  <span className="text-slate-500 mx-1">/</span>
                </Link>
              );
            })}
          </div>
        )}

        {/* Badge */}
        {badgeText && (
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-lime bg-brand-lime/10 px-3 py-1 rounded-full border border-brand-lime/20">
              {badgeText}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
