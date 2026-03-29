import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Zap } from "lucide-react";
import { motion } from "framer-motion";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Transmission failure. Call (773) 353-3050 immediately.");
      }
    } catch {
      setError("Network interruption. Re-attempting via phone is recommended.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Info side */}
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-1.5 rounded-full"
              >
                <Zap className="w-3 h-3 text-secondary" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Operational HQ</span>
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-none">
                Direct <br /><span className="text-secondary italic">Deployment.</span>
              </h2>
              <p className="text-xl text-muted-foreground font-medium opacity-70 max-w-md">
                Don't wait for a callback that never comes. Our industrial dispatch is standing by 24/7/365.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <motion.a 
                whileHover={{ x: 5 }}
                href="tel:7733533050" 
                className="group space-y-3"
              >
                <div className="w-14 h-14 rounded-2xl bg-foreground text-background flex items-center justify-center group-hover:bg-secondary transition-colors duration-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Primary Line</h4>
                  <p className="text-xl font-black text-foreground group-hover:text-secondary transition-colors leading-tight">(773) 353-3050</p>
                </div>
              </motion.a>

              <motion.a 
                whileHover={{ x: 5 }}
                href="tel:3124206081" 
                className="group space-y-3"
              >
                <div className="w-14 h-14 rounded-2xl bg-foreground/5 text-foreground flex items-center justify-center group-hover:bg-secondary group-hover:text-background transition-colors duration-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Secondary Line</h4>
                  <p className="text-xl font-black text-foreground group-hover:text-secondary transition-colors leading-tight">(312) 420-6081</p>
                </div>
              </motion.a>

              <div className="group space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-foreground/5 text-foreground flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Location</h4>
                  <p className="text-sm font-black text-foreground opacity-80 leading-snug">6807 W. Irving Park Rd.<br />Chicago, IL 60634</p>
                </div>
              </div>

              <div className="group space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-foreground/5 text-success flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-success">Status: Open</h4>
                  <p className="text-sm font-black text-foreground opacity-80 leading-snug">24/7/365 Service<br />All Holidays Included</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-card border border-foreground/5 rounded-[3rem] p-10 lg:p-14 shadow-2xl relative"
          >
            {submitted ? (
              <div className="text-center py-20 space-y-6">
                <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                  <Send className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-4xl font-black tracking-tighter text-foreground uppercase">Target Locked</h3>
                <p className="text-muted-foreground font-medium uppercase text-xs tracking-[0.2em]">Our team will initiate contact within 15 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="OPERATOR NAME"
                      className="w-full px-6 py-4 rounded-2xl border-2 border-foreground/5 bg-background text-foreground font-black uppercase tracking-widest placeholder:text-foreground/10 focus:border-secondary transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 ml-1">Dispatch Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="(XXX) XXX-XXXX"
                      className="w-full px-6 py-4 rounded-2xl border-2 border-foreground/5 bg-background text-foreground font-black uppercase tracking-widest placeholder:text-foreground/10 focus:border-secondary transition-all outline-none"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 ml-1">Select Operation Type</label>
                  <select name="service" className="w-full px-6 py-4 rounded-2xl border-2 border-foreground/5 bg-background text-foreground font-black uppercase tracking-widest focus:border-secondary transition-all outline-none appearance-none cursor-pointer">
                    <option>Sewer & Drain Ops</option>
                    <option>Emergency Plumbing</option>
                    <option>Infrastructure Repair</option>
                    <option>HVAC Logistics</option>
                    <option>Gas Line Engineering</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 ml-1">Situation Intel</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="DESCRIBE THE BREACH..."
                    className="w-full px-6 py-4 rounded-2xl border-2 border-foreground/5 bg-background text-foreground font-black uppercase tracking-widest placeholder:text-foreground/10 focus:border-secondary transition-all outline-none resize-none"
                  />
                </div>

                {error && (
                  <p className="text-[10px] text-destructive font-black uppercase tracking-widest text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-foreground text-background py-6 rounded-2xl text-xs font-black uppercase tracking-[0.3em] hover:bg-secondary hover:text-background active:scale-[0.98] transition-all shadow-2xl disabled:opacity-50"
                >
                  {loading ? "TRANSMITTING..." : "Initiate Priority Request"}
                </button>
                
                <p className="text-[9px] text-muted-foreground text-center font-black uppercase tracking-[0.2em] opacity-40">
                  Secured Request Line // Est. Contact: 47 Min
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
