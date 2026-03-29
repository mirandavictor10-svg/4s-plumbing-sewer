import { MapPin, Zap } from "lucide-react";
import { motion } from "framer-motion";

const areas = [
  "Irving Park", "Portage Park", "Dunning", "Belmont Cragin", "Montclare",
  "Elmwood Park", "River Grove", "Franklin Park", "Schiller Park",
  "Norridge", "Harwood Heights", "Greater Chicago Area",
];

const ServiceAreas = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-1.5 rounded-full">
            <Zap className="w-3 h-3 text-secondary" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Logistics Hub</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-none">
            Operational <br /><span className="text-secondary italic">Radius.</span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium opacity-60 uppercase tracking-widest">
            Primary Deployment zones across Chicago & Suburbs
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {areas.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05, borderColor: "var(--secondary)" }}
              className="bg-card border border-foreground/5 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-foreground/60 cursor-default transition-colors flex items-center gap-3"
            >
              <MapPin className="w-3 h-3 text-secondary" />
              {a}
            </motion.div>
          ))}
        </div>
        
        <div className="pt-12">
          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-foreground/10">
            Rapid Response Unit Status: Available // Coverage: 45 Miles
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
