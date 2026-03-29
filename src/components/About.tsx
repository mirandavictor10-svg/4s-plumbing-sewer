import { Award, CheckCircle, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Precision Ops", value: "10+", sub: "Years Experience" },
  { label: "Successful Units", value: "1K+", sub: "Projects Deployed" },
  { label: "Elite Workforce", value: "25+", sub: "Master Certified" },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-1.5 rounded-full">
              <Zap className="w-3 h-3 text-secondary" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Service Pedigree</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-none">
              Mechanical <br /><span className="text-secondary italic">Excellence.</span>
            </h2>
            <div className="space-y-6 text-xl text-muted-foreground font-medium opacity-80 leading-relaxed">
              <p>
                Led by <span className="text-foreground font-black">William V. Taylor III</span>, 4S Plumbing & Sewer represents the pinnacle of Chicago's mechanical infrastructure service. 
              </p>
              <p>
                We don't just fix pipes; we engineer solutions. Every technician in our elite 25-man squad is background-checked, precision-trained, and master-certified to handle the most complex industrial and residential failures.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              {["Licensed Master Plumbers", "OSHA Certified", "Bonded & Insured"].map((tag) => (
                <div key={tag} className="flex items-center gap-2 px-4 py-2 bg-background border border-foreground/5 rounded-xl text-[10px] font-black uppercase tracking-widest text-foreground/40">
                  <CheckCircle className="w-3 h-3 text-secondary" />
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-background border border-foreground/5 p-10 rounded-[2rem] hover:border-secondary transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Award className="w-20 h-20" />
                </div>
                <div className="relative z-10">
                  <div className="text-5xl font-black text-secondary tracking-tighter mb-2">{s.value}</div>
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-foreground mb-1">{s.label}</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground opacity-50">{s.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
