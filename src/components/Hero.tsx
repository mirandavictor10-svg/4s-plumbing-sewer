import { useRef } from "react";
import { Phone, CalendarCheck, Star, Shield, Clock, DollarSign, Zap, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const trustBadges = [
  { icon: Star, label: "HomeAdvisor Approved" },
  { icon: Shield, label: "Master Licensed" },
  { icon: Clock, label: "24/7 Emergency" },
  { icon: DollarSign, label: "Honest Pricing" },
];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll within this specific 150vh section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scrollytelling Animations:
  // Overlays fade in aggressively on scroll
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  
  // Content slides up and fades in
  const contentOpacity = useTransform(scrollYProgress, [0.05, 0.35], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0, 0.35], [50, 0]);
  
  // The 'scroll down' indicator fades out immediately
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // The container is 150vh so the user has to scroll 50vh to get past it
    <section ref={containerRef} className="relative h-[150vh] bg-slate-950">
      
      {/* Sticky container holds everything in view for the 150vh duration */}
      <div className="sticky top-0 h-[100vh] w-full overflow-hidden flex items-center justify-center">
        
        {/* Full-Screen Video Background (Always behind) */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/videos/hero-placeholder.jpg"
          >
            <source src="/videos/hero-transition.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Scroll Indicator (Only visible at the very top) */}
        <motion.div 
          style={{ opacity: indicatorOpacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/70"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-bold">Scroll to Engage</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.div>

        {/* Dynamic Overlays (Fade in on scroll) */}
        <motion.div 
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 z-10 pointer-events-none"
        >
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-transparent" />
        </motion.div>

        {/* Hero Content (Slides up and fades in on scroll) */}
        <motion.div 
          style={{ opacity: contentOpacity, y: contentY }}
          className="max-w-7xl mx-auto px-6 relative z-20 w-full font-sans flex flex-col items-center xl:items-start text-center xl:text-left mt-20 lg:mt-0"
        >
          <div className="max-w-4xl">
            {/* Industrial Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 backdrop-blur-md px-4 py-1.5 rounded-full mb-8">
              <Zap className="w-3.5 h-3.5 text-secondary animate-pulse" />
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white">Chicago's Industrial Standard</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter text-white mb-8 font-black drop-shadow-2xl">
              Master Plumbing <br className="hidden xl:block" />
              <span className="text-secondary italic">Precision</span> Engineering.
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-200 mb-10 max-w-2xl leading-relaxed font-medium drop-shadow-lg mx-auto xl:mx-0">
              We don't just fix leaks; we rebuild infrastructure. Licensed experts delivering 24/7 industrial-grade plumbing solutions across Chicago in under 45 minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4 mb-16">
              <a
                href="tel:7733533050"
                className="group flex flex-1 w-full sm:flex-none sm:w-auto items-center justify-center gap-3 bg-secondary text-secondary-foreground px-8 py-5 rounded-2xl text-lg font-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-secondary/40 border border-secondary/50"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" /> 
                (773) 353-3050
              </a>
              <button
                onClick={scrollToContact}
                className="flex flex-1 w-full sm:flex-none sm:w-auto items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-5 rounded-2xl text-lg font-bold hover:bg-white/20 hover:border-white/40 transition-all shadow-xl"
              >
                <CalendarCheck className="w-5 h-5" /> Book Online
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center xl:justify-start gap-3">
              {trustBadges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 bg-slate-900/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-200 shadow-lg"
                >
                  <b.icon className="w-3.5 h-3.5 text-secondary" />
                  {b.label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
