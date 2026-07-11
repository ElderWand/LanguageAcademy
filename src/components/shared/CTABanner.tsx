import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TestModalTrigger } from "@/components/client/TestModalTrigger";

interface CTABannerProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;    // for client-side actions
  href?: string;                 // for link-based CTAs
  variant?: "emerald" | "navy";  // background style
}

export function CTABanner({
  title,
  description,
  buttonText,
  onButtonClick,
  href,
  variant = "navy",
}: CTABannerProps) {
  const bgClass = variant === "emerald" 
    ? "bg-brand-emerald border-brand-emerald-dark" 
    : "bg-brand-navy border-slate-800";

  return (
    <section className="mt-20 max-w-7xl mx-auto px-6 mb-12">
      <div className={`${bgClass} text-white p-8 sm:p-12 md:p-16 rounded-[2.5rem] relative overflow-hidden shadow-lg border text-center animate-fade-in-up`}>
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-5 select-none pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
        
        <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
            {title}
          </h3>
          
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-semibold max-w-xl mx-auto">
            {description}
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            {href ? (
              <Link href={href} className="w-full sm:w-auto">
                <Button
                  className="w-full bg-brand-lime text-brand-navy hover:bg-brand-lime-dark border-none font-bold rounded-full px-8 py-6 text-xs shadow-md transition-all duration-300 cursor-pointer"
                >
                  {buttonText}
                </Button>
              </Link>
            ) : onButtonClick ? (
              <Button
                onClick={onButtonClick}
                className="w-full sm:w-auto bg-brand-lime text-brand-navy hover:bg-brand-lime-dark border-none font-bold rounded-full px-8 py-6 text-xs shadow-md transition-all duration-300 cursor-pointer"
              >
                {buttonText}
              </Button>
            ) : (
              <TestModalTrigger className="w-full sm:w-auto">
                <Button
                  className="w-full bg-brand-lime text-brand-navy hover:bg-brand-lime-dark border-none font-bold rounded-full px-8 py-6 text-xs shadow-md transition-all duration-300 cursor-pointer"
                >
                  {buttonText}
                </Button>
              </TestModalTrigger>
            )}

            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full bg-white/5 text-white border-white/20 hover:bg-white/10 hover:border-white/30 font-bold rounded-full px-8 py-6 text-xs transition-all duration-300 cursor-pointer"
              >
                Parler à un conseiller
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
