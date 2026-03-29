import { Star, Quote, Zap } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  { name: "Nicole M.", location: "ORD DISTRICT", text: "Responsive follow-up, professional service, flexible scheduling. Highly recommend!" },
  { name: "Kevin F.", location: "DOWNTOWN HUB", text: "Excellent service and honest dealing, going well beyond expectations." },
  { name: "Mustafa S.", location: "WEST RADIUS", text: "Best plumbing service in Chicago with competitive pricing." },
  { name: "Cyndi S.", location: "NORTH SECTOR", text: "Responsive owner involvement, skilled workforce, great management." },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="section-padding bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-1.5 rounded-full">
            <Zap className="w-3 h-3 text-secondary" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Service Logs</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-none">
            Field <br /><span className="text-secondary italic">Intelligence.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-foreground/5 rounded-[2rem] p-10 relative group hover:border-secondary transition-all"
            >
              <Quote className="w-10 h-10 text-foreground/5 absolute top-8 right-8 group-hover:text-secondary group-hover:opacity-10 transition-all" />
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-sm font-bold text-foreground leading-relaxed uppercase tracking-widest mb-8 opacity-60">
                "{r.text}"
              </p>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-foreground">{r.name}</p>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-secondary">{r.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/20">
            Aggregate Satisfaction Score: 98.4% // All Systems Optimal
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
