import { Phone, Mail, MapPin, Zap } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-foreground text-background py-24 pb-12 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-4 gap-16 mb-20">
        <div className="lg:col-span-2 space-y-8">
          <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            href="#" 
            className="inline-block"
          >
            <img src={logo} alt="4S Plumbing" className="h-16 w-auto brightness-0 invert" />
          </motion.a>
          <p className="text-background/40 font-bold uppercase text-xs tracking-[0.2em] leading-relaxed max-w-sm">
            Forged in Chicago. Since 2014, 4S Plumbing & Sewer has delivered the absolute highest standard in industrial and residential mechanical services. Licensed. Mastered. Reliable.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-secondary font-black text-2xl tracking-tighter">055</span>
              <span className="text-[8px] font-black uppercase tracking-[0.2em] text-background/20">Master License</span>
            </div>
            <div className="h-8 w-px bg-background/10" />
            <div className="flex flex-col">
              <span className="text-secondary font-black text-2xl tracking-tighter">24/7</span>
              <span className="text-[8px] font-black uppercase tracking-[0.2em] text-background/20">Deployment</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-background/20 mb-8">Navigation</h4>
          <nav className="space-y-4">
            {["Services", "About", "Reviews", "Contact"].map((l) => (
              <button
                key={l}
                onClick={() => document.querySelector(`#${l.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })}
                className="block text-sm font-black uppercase tracking-widest text-background/60 hover:text-secondary transition-colors"
              >
                {l}
              </button>
            ))}
          </nav>
        </div>

        <div className="space-y-8">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-background/20 mb-8">Comms Check</h4>
          <div className="space-y-6">
            <a href="tel:7733533050" className="group block">
              <span className="text-[9px] font-black uppercase tracking-widest text-background/30 block mb-1">HQ Main</span>
              <span className="text-xl font-black group-hover:text-secondary transition-colors">(773) 353-3050</span>
            </a>
            <a href="tel:3124206081" className="group block">
              <span className="text-[9px] font-black uppercase tracking-widest text-background/30 block mb-1">Backup Dispatch</span>
              <span className="text-xl font-black group-hover:text-secondary transition-colors">(312) 420-6081</span>
            </a>
            <div className="pt-4 opacity-40">
              <MapPin className="w-5 h-5 mb-2" />
              <p className="text-xs font-bold leading-relaxed uppercase tracking-widest">
                6807 W. Irving Park Rd.<br />Chicago, IL 60634
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-background/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-background/20">
          © 2026 4S Plumbing Companies, Inc. // Precision Mechanical Division
        </p>
        <div className="flex items-center gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-background/20">
          <a href="#" className="hover:text-secondary transition-colors">Privacy Ops</a>
          <a href="#" className="hover:text-secondary transition-colors">Terms of Serv</a>
          <span className="flex items-center gap-2">
            <Zap className="w-3 h-3" /> System: Stable
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
