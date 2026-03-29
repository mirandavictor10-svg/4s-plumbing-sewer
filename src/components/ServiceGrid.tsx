import { Wrench, Droplets, Flame, Camera, GaugeCircle, Snowflake, Wind, ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Wrench, title: "Emergency Plumbing", badge: "Critical Dispatch", desc: "Burst pipe at 2 AM? We're already on the way. Heavy-duty response for residential and industrial failures." },
  { icon: Droplets, title: "Advanced Drain Care", badge: "Precision Clearing", desc: "Stubborn clogs, slow drains, and recurring blockages cleared with industrial-grade hydro-jetting technology." },
  { icon: Flame, title: "High-Efficiency Heating", badge: "All Major Systems", desc: "Surgical repair and installation for traditional tanks and next-gen tankless systems. Priority hot water restoration." },
  { icon: Camera, title: "Sewer Infrastructure", badge: "HD Analytics", desc: "HD camera inspections, structural lining, main line overhaul, and full PDP compliance with digital reporting." },
  { icon: GaugeCircle, title: "Gas Line Engineering", badge: "Certified Ops", desc: "Gas leak detection, infrastructure pressure testing, and master-level gas line installations by licensed engineers." },
  { icon: Snowflake, title: "Winterize & Thaw", badge: "Chicago Ready", desc: "Precision thawing, frozen pipe reinforcement, and emergency repair for brutal Chicagoland winters." },
  { icon: Wind, title: "HVAC Climate Control", badge: "Year-Round", desc: "High-performance air quality solutions, heating repair, and AC systems maintenance by master-trained technicians." },
];

const ServiceGrid = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding bg-muted/30 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 space-y-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-1.5 rounded-full"
          >
            <Zap className="w-3 h-3 text-secondary" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Industrial Grade Solutions</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground mb-4">What We Solve.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium opacity-70">
            From midnight emergencies to complex industrial infrastructure — we deliver precision plumbing, sewer, and HVAC ops.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative bg-background border border-foreground/5 rounded-[2rem] p-10 hover:border-secondary/30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] transition-all duration-500 cursor-pointer overflow-hidden"
              onClick={scrollToContact}
            >
              {/* Animated Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 group-hover:bg-secondary/10 transition-colors blur-3xl -mr-10 -mt-10" />
              
              <div className="flex items-center justify-between mb-10">
                <div className="p-4 rounded-2xl bg-muted/50 text-foreground/80 group-hover:bg-secondary group-hover:text-background transition-all duration-500">
                  <s.icon className="w-8 h-8 group-hover:rotate-6 transition-transform" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-secondary bg-secondary/10 px-3 py-1.5 rounded-lg border border-secondary/20">
                  {s.badge}
                </span>
              </div>

              <h3 className="text-2xl font-black text-foreground mb-4 leading-tight uppercase tracking-tight">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed font-medium opacity-70">{s.desc}</p>
              
              <div className="flex items-center gap-3 text-secondary text-xs font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                Commence Dispatch <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Text Accent */}
      <div className="absolute bottom-0 left-0 text-[15vw] font-black text-foreground/[0.02] leading-none pointer-events-none select-none tracking-tighter transform translate-y-1/2 -translate-x-10">
        4S PLUMBING
      </div>
    </section>
  );
};

export default ServiceGrid;
