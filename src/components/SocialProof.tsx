import { Star, Shield, Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const partners = [
  { icon: Star, label: "4.9 Google Rating", sub: "120+ Real Reviews" },
  { icon: Shield, label: "Master Licensed", sub: "Bonded & Insured" },
  { icon: Award, label: "Top Rated Chicago", sub: "HomeAdvisor Elite" },
  { icon: CheckCircle2, label: "Emergency Squad", sub: "On-Call 24/7" },
];

const SocialProof = () => {
  return (
    <section className="bg-foreground py-16 border-y border-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-12 lg:gap-8 mb-10">
          {partners.map((p, i) => (
            <motion.div 
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 group"
            >
              <div className="bg-background/10 p-3 rounded-2xl group-hover:bg-secondary/20 transition-colors">
                <p.icon className="w-6 h-6 text-secondary" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-background font-black text-sm uppercase tracking-widest">{p.label}</h4>
                <p className="text-background/40 text-[10px] font-bold uppercase tracking-[0.2em]">{p.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="pt-10 border-t border-background/5 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-background/40 font-black text-[10px] uppercase tracking-[0.4em] mx-auto max-w-2xl px-4"
          >
            "The absolute highest standard in Chicago. Precision, speed, and industrial-grade reliability."
            <span className="text-secondary ml-4">— Better Business Bureau Accredited</span>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
