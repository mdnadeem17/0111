import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  Phone, Mail, MapPin, Clock, Sparkles, Stethoscope, Smile, ShieldCheck,
  Award, GraduationCap, ChevronRight, Calendar, ArrowRight, MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import receptionImg from "@/assets/clinic/reception.jpg";
import heroImg from "@/assets/clinic-hero.jpg";
import doctorImg from "@/assets/doctor.jpg";
import logoImg from "@/assets/clinic/logo.png";
import { ClinicTour } from "@/components/ClinicTour";

export const Route = createFileRoute("/")({
  component: Index,
});

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

const services = [
  { icon: Stethoscope, title: "Fixed Prosthodontics", desc: "High-quality crowns, bridges and implants crafted for durability and a natural appearance." },
  { icon: ShieldCheck, title: "General Dental Checkup", desc: "Comprehensive oral examinations to detect and treat issues early — the foundation of healthy teeth." },
  { icon: Sparkles, title: "Maxillofacial Prosthetics", desc: "Customised prostheses that restore oral and facial structure for complex conditions." },
  { icon: Smile, title: "Oral Surgery", desc: "From extractions to cyst removal — surgical precision with full patient comfort." },
];

const expertise = [
  "Scaling & Polishing", "Teeth Whitening (Pola Office & Zoom)", "Tooth Restoration & Build-up",
  "Root Canal Treatment", "Paediatric Dentistry", "Extractions & Impactions",
  "Ceramic Crowns (Metal & Metal-Free)", "Veneers & Laminates", "Dental Implants",
  "Braces — Wire & Self-Ligating", "Invisible Aligners", "Tooth Jewellery",
];

function Index() {
  const [activeService, setActiveService] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
      {/* NAV */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 group">
            <motion.img 
              whileHover={{ rotate: 10, scale: 1.1 }}
              src={logoImg} 
              alt="Usha Dental Logo" 
              className="h-10 w-10 object-contain" 
            />
            <div className="leading-tight">
              <div className="font-display text-base font-semibold group-hover:text-primary transition-colors">Usha Dental</div>
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Clinic & Implant Centre</div>
            </div>
          </a>
          <div className="hidden items-center gap-10 text-sm font-medium md:flex">
            {["About", "Meet the Doctor", "Clinic", "Services", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="relative text-muted-foreground transition-colors hover:text-foreground group"
              >
                {item}
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" 
                />
              </a>
            ))}
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+919980609894" 
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-elegant hover:shadow-primary/30 transition-shadow"
            >
              <Phone className="h-4 w-4" /> Book Now
            </motion.a>
          </div>
        </nav>
      </motion.header>

      {/* HERO */}
      <section id="top" className="lighting-bg grain-overlay relative overflow-hidden px-6 pb-16 pt-12 lg:pb-24 lg:pt-20">
        {/* Background Dental Motif */}
        <div className="absolute inset-0 -z-0 h-full w-full pointer-events-none select-none overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={receptionImg} 
              alt="" 
              className="h-full w-full object-cover" 
              style={{ 
                maskImage: "radial-gradient(ellipse at 70% 40%, black, transparent 80%)",
                WebkitMaskImage: "radial-gradient(ellipse at 70% 40%, black, transparent 80%)",
                filter: "grayscale(20%) contrast(115%) mix-blend-mode-overlay"
              }}
            />
          </motion.div>
          
          {/* Pro Live Effect: Animated Teeth Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ 
              opacity: [0.03, 0.08, 0.03],
              scale: [1.2, 1.3, 1.2],
              rotate: [0, 3, -2, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-[-10%] h-[120%] w-[80%] flex items-center justify-end overflow-hidden mix-blend-screen"
            style={{ 
              maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
            }}
          >
            <img 
              src={logoImg} 
              alt="" 
              className="h-[120%] w-auto object-contain grayscale opacity-80 brightness-150 drop-shadow-[0_0_80px_rgba(var(--primary),0.8)] filter blur-[3px]" 
            />
          </motion.div>

          {/* Animated Lighting Orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 50, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1/4 -left-1/4 h-[800px] w-[800px] rounded-full bg-primary/20 blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, -50, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-primary-glow/20 blur-[100px]" 
          />
          <motion.div 
            animate={{ 
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[80px]" 
          />

          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/10" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 relative z-10">
          <div className="relative z-10">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
              Trusted in Bangalore since 2008
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-6 font-display text-5xl font-semibold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl xl:text-8xl"
            >
              Restoring smiles,<br/>
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text italic text-transparent">elevating lives.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl lg:text-2xl"
            >
              Experience world-class dental care where technology meets biological artistry. 
              Specializing in painless implants and aesthetic restoration.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground shadow-elegant transition-transform hover:-translate-y-1">
                <Calendar className="h-4 w-4" /> Book Appointment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur px-8 py-4 font-medium transition-all hover:bg-muted">
                Explore Services
              </a>
            </motion.div>

            <motion.dl 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-16 grid grid-cols-3 gap-8"
            >
              {[
                ["18+", "Years Exp"],
                ["10k+", "Smiles"],
                ["12+", "Specialties"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="text-glow font-display text-4xl font-bold text-primary">{n}</dt>
                  <dd className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{l}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 rounded-[3rem] bg-primary/20 blur-3xl" />
            <img
              src={heroImg}
              alt="Usha Dental Clinic Interior"
              className="relative aspect-[4/5] w-full rounded-[3rem] object-cover shadow-elegant"
            />
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-8 -left-8 glass-card flex items-center gap-4 rounded-3xl p-6 shadow-card"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-accent-foreground shadow-sm">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm font-bold">KSDC Registered</div>
                <div className="text-[11px] text-muted-foreground">Certified Clinical Excellence</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="lighting-bg relative z-10 border-y border-border/60 py-16 lg:py-24" style={{ background: "var(--gradient-soft)" }}>
        <div className="mx-auto grid max-w-7xl items-start gap-16 px-6 lg:grid-cols-5">
          <motion.div 
            {...fadeInUp}
            className="lg:col-span-2"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Our Ethos</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.1] md:text-5xl lg:text-6xl">
              Precision care,<br/>with a personal touch.
            </h2>
          </motion.div>
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="space-y-8 text-lg leading-relaxed text-muted-foreground lg:col-span-3 lg:text-xl"
          >
            <p>
              Usha Dental Clinic and Implant Centre stands as a beacon of advanced dentistry in Nagarbhavi, Bangalore. We believe in "Biological Dentistry" — preserving as much natural tooth structure as possible.
            </p>
            <p>
              Under the leadership of Dr. Prashanth L, our clinic has spent nearly two decades refining aesthetic and functional restoration techniques that prioritize long-term oral health over quick fixes.
            </p>
            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {[
                { t: "Gentle Care", s: "Comfort-first approach", i: Smile },
                { t: "Modern Tech", s: "Latest oral diagnostics", i: Sparkles },
                { t: "Ethical Art", s: "Evidence-based plans", i: ShieldCheck },
              ].map((item) => (
                <motion.div 
                  key={item.t} 
                  whileHover={{ y: -5 }}
                  className="glass-card rounded-2xl p-6 shadow-sm ring-1 ring-border/50"
                >
                  <item.i className="h-5 w-5 text-primary mb-3" />
                  <div className="font-display font-bold text-foreground">{item.t}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{item.s}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MEET THE DOCTOR */}
      <section id="meet-the-doctor" className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="group relative"
          >
            <div className="absolute -inset-4 rounded-[3.5rem] bg-accent/20 blur-3xl transition-opacity duration-500 group-hover:bg-accent/30" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3.5rem] bg-muted/20 shadow-elegant ring-1 ring-white/20">
              <img
                src={doctorImg}
                alt="Dr. Prashanth L - Chief Surgeon"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent pointer-events-none" />
              {/* Subtle sweeping light beam */}
              <motion.div 
                animate={{
                  x: ["-200%", "200%"]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 z-10 w-[50%] skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
                style={{ mixBlendMode: "overlay" }}
              />
            </div>
            <motion.div 
              whileHover={{ rotate: -5, scale: 1.05 }}
              className="absolute -right-4 -top-4 flex flex-col items-center rounded-2xl bg-primary px-4 py-3 text-primary-foreground shadow-2xl ring-2 ring-background"
            >
              <div className="font-display text-2xl font-bold leading-none">18+</div>
              <div className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.1em] opacity-80">Years Exp</div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary">Chief Surgeon</span>
            </div>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-glow md:text-5xl">Dr. Prashanth L</h2>
            <p className="mt-4 text-base font-bold italic tracking-wide text-muted-foreground">MDS (Oral & Maxillofacial Surgery) · BDS</p>

            <div className="mt-10 space-y-8 text-lg leading-relaxed text-muted-foreground lg:text-xl">
              <p>
                A master of his craft with nearly two decades of clinical mastery. Dr. Prashanth is renowned across Bangalore for his surgical precision in facial trauma, complex implants, and conservative restorations.
              </p>
              <p className="text-foreground/80 font-medium italic border-l-2 border-primary pl-6 py-1">
                "Biological dentistry isn't just a practice—it's a philosophy of preserving what nature built while restoring what life took away."
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {[
                { icon: GraduationCap, text: "MDS - MS Ramaiah Dental College" },
                { icon: Award, text: "Certified Oral & Maxillofacial Surgeon" },
                { icon: ShieldCheck, text: "Member - KSDC (Karnataka State Dental Council)" },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-foreground/80">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* RECEPTION & TOUR */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="clinic-tour" 
        className="pb-16 lg:pb-24"
      >
        <ClinicTour />
      </motion.section>

      {/* SERVICES */}
      <section id="services" className="border-y border-border/60 bg-muted/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div 
            {...fadeInUp}
            className="flex flex-col items-end justify-between gap-10 lg:flex-row"
          >
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Clinical Services</span>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.1] md:text-5xl lg:text-6xl">
                Advanced dental care,<br/>under one roof.
              </h2>
            </div>
            <p className="max-w-xs text-muted-foreground">Expert solutions for everything from root canals to full-mouth rehabilitation.</p>
          </motion.div>

          <div className="relative mt-20 overflow-hidden py-10 px-4">
            <motion.div 
              animate={{ x: `calc(-${activeService * 100}% - ${activeService * 1.5}rem)` }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="flex gap-6"
            >
              {services.map(({ icon: Icon, title, desc }, idx) => (
                <motion.article 
                  key={title} 
                  initial={{ opacity: 0.5, scale: 0.9 }}
                  animate={{ 
                    opacity: activeService === idx ? 1 : 0.4,
                    scale: activeService === idx ? 1 : 0.95,
                  }}
                  className="group glass-card relative flex min-w-full flex-col rounded-[2.5rem] p-8 shadow-sm transition-all hover:ring-2 hover:ring-primary/20 md:min-w-[450px] lg:min-w-[400px] lg:p-12"
                >
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-3xl font-semibold">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  <div className="mt-8 flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-primary">
                    Specialized Treatment <ArrowRight className="h-3 w-3" />
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* Pagination Dots */}
            <div className="mt-10 flex justify-center gap-3">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveService(idx)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    activeService === idx ? "w-8 bg-primary" : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE LIST */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-5">
          <motion.div {...fadeInUp} className="lg:col-span-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Our Expertise</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight lg:text-5xl">
              Treatments tailored<br/>to your unique smile.
            </h2>
            <p className="mt-8 text-lg text-muted-foreground">
              We focus on "Slow Dentistry" — giving each procedure the time and precision it deserves for lifelong success.
            </p>
          </motion.div>
          <motion.ul 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2 lg:col-span-3"
          >
            {expertise.map(item => (
              <motion.li 
                key={item} 
                variants={fadeInUp}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 rounded-2xl border border-border/50 bg-card p-5 shadow-sm transition-colors hover:border-primary/40 hover:bg-muted/30"
              >
                <div className="h-2 w-2 rounded-full bg-primary-glow" />
                <span className="text-[13px] font-bold tracking-tight text-foreground/80">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* CONTACT & BOOKING */}
      <section id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative mx-auto max-w-7xl px-6 py-16 text-primary-foreground lg:py-24"
        >
          <div className="grid gap-20 lg:grid-cols-2">
            <div>
              <motion.h2 
                {...fadeInUp}
                className="font-display text-5xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl shadow-primary/20 text-glow"
              >
                Start your smile journey today.
              </motion.h2>
              <motion.p 
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="mt-8 max-w-md text-lg text-primary-foreground/80 lg:text-xl"
              >
                Take the first step towards a healthier, more confident life. Our experts are ready to listen.
              </motion.p>
              <div className="mt-12 flex flex-wrap gap-6">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+919980609894" 
                  className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-sm font-bold text-primary shadow-2xl transition-all"
                >
                  <Phone className="h-5 w-5" /> +91 99806 09894
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:contact@ushadental.com" 
                  className="group inline-flex items-center gap-3 rounded-full border-2 border-white/20 px-10 py-5 text-sm font-bold hover:bg-white/10"
                >
                  <Mail className="h-5 w-5" /> Email us
                </motion.a>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="grid gap-2 rounded-[3.5rem] bg-white/10 p-10 backdrop-blur-2xl ring-1 ring-white/20 shadow-2xl"
            >
              {[
                { i: MapPin, l: "Clinic Hub", v: "Deepa Complex, Outer Ring Road, Nagarbhavi 2nd Stage, Bangalore" },
                { i: Clock, l: "Our Timings", v: "Mon – Sat: 10 AM – 8 PM · Sun: By Appt Only" },
                { i: Phone, l: "Direct Line", v: "+91 99806 09894" },
                { i: Mail, l: "Booking Desk", v: "info@ushadentalclinic.com" },
              ].map((item) => (
                <div key={item.l} className="flex gap-6 py-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors rounded-2xl px-4 -mx-4">
                  <div className="mt-1 grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/20">
                    <item.i className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60">{item.l}</div>
                    <div className="mt-1.5 text-sm font-medium leading-relaxed">{item.v}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Usha Dental Logo" className="h-10 w-10 object-contain" />
            <div className="leading-tight">
              <div className="font-display font-bold">Usha Dental</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground text-glow text-primary">Est. 2008</div>
            </div>
          </div>
          <div className="flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Nagarbhavi</a>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTIONS */}
      <div className="fixed bottom-6 left-6 md:left-auto md:right-6 z-[100] flex flex-col items-start md:items-end gap-4 pointer-events-none">
        {/* Book Now Button */}
        <motion.a 
          href="tel:+919980609894"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="pointer-events-auto group relative flex items-center gap-3 rounded-full bg-primary px-6 py-4 text-sm font-bold text-primary-foreground shadow-2xl hover:bg-primary/90 transition-all"
        >
          <Calendar className="h-5 w-5" />
          <span className="relative">Book</span>
        </motion.a>

        {/* WhatsApp Button */}
        <motion.a 
          href="https://wa.me/919980609894"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="pointer-events-auto group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl"
        >
          <MessageCircle className="relative h-8 w-8 fill-current" />
        </motion.a>
      </div>
    </div>
  );
}
