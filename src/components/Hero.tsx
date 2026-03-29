import { useRef } from "react";
import { Phone, CalendarCheck, Star, Shield, Clock, DollarSign, Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const trustBadges = [
  { icon: Star, label: "HomeAdvisor Approved" },
  { icon: Shield, label: "Master Licensed" },
  { icon: Clock, label: "24/7 Emergency" },
  { icon: DollarSign, label: "Honest Pricing" },
];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scroll animations for precision engineering feel
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  
  // Mask animation: Expanding circle or industrial rectangle
  const maskSize = useTransform(scrollYProgress, [0, 0.4], ["inset(15% round 2rem)", "inset(0% round 0rem)"]);
  const videoBlur = useTransform(scrollYProgress, [0, 0.2], ["blur(10px)", "blur(0px)"]);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-background">
      {/* Dynamic Background Element */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_rgba(var(--secondary-rgb),0.15),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full font-sans">
        <motion.div style={{ y: y1, opacity }}>
          {/* Industrial Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 px-4 py-1.5 rounded-full mb-8"
          >
            <Zap className="w-3.5 h-3.5 text-secondary animate-pulse" />
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-secondary">Chicago's Industrial Standard</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tighter text-foreground mb-8 font-black">
            Master Plumbing <br />
            <span className="text-secondary italic">Precision</span> Engineering.
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed font-normal">
            We don't just fix leaks; we rebuild infrastructure. Licensed experts delivering 24/7 industrial-grade plumbing solutions across Chicago in under 45 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-14">
            <a
              href="tel:7733533050"
              className="group flex items-center justify-center gap-3 bg-secondary text-secondary-foreground px-10 py-5 rounded-2xl text-xl font-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-secondary/30"
            >
              <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" /> 
              (773) 353-3050
            </a>
            <button
              onClick={scrollToContact}
              className="flex items-center justify-center gap-3 border-2 border-foreground/10 text-foreground px-10 py-5 rounded-2xl text-xl font-bold hover:bg-foreground/5 transition-all"
            >
              <CalendarCheck className="w-6 h-6" /> Book Online
            </button>
          </div>

          <div className="flex flex-wrap gap-4">
            {trustBadges.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2.5 bg-muted/50 backdrop-blur-sm border border-foreground/5 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-muted-foreground"
              >
                <b.icon className="w-4 h-4 text-secondary" />
                {b.label}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="relative h-[600px] lg:h-[700px] w-full"
          style={{ y: y2, scale }}
        >
          {/* Scroll-Driven Video Mask */}
          <motion.div
            className="absolute inset-0 z-10 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.2)]"
            style={{ 
              clipPath: maskSize,
              filter: videoBlur
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover scale-110"
              poster="/videos/hero-placeholder.jpg"
            >
              <source src="/videos/hero-transition.mp4" type="video/mp4" />
            </video>
            
            {/* Elegant Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Floating Stats Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute -bottom-6 -right-6 md:right-4 z-20 bg-background/80 backdrop-blur-2xl border border-foreground/10 px-8 py-5 rounded-[2rem] shadow-2xl space-y-1"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-secondary" />
              <span className="text-3xl font-black text-foreground">47</span>
              <span className="text-xs font-bold uppercase tracking-tighter text-muted-foreground pt-2">min avg</span>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-secondary opacity-70">Rapid Industrial Response</p>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/5 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
