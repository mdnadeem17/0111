import { Sparkles, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import reception from "@/assets/clinic/reception.jpg";
import operatory1 from "@/assets/clinic/operatory-1.jpg";
import operatory2 from "@/assets/clinic/operatory-2.jpg";
import surgery from "@/assets/clinic/surgery-room.jpg";
import consult from "@/assets/clinic/consultation.jpg";
import procedure from "@/assets/clinic/procedure.jpg";

type Tile = {
  src: string;
  title: string;
  caption: string;
  span: string; // tailwind grid span classes
  ratio: string;
};

const tiles: Tile[] = [
  { src: reception, title: "Reception & Waiting Lounge", caption: "A serene, light-filled entryway designed to put every patient at ease.", span: "md:col-span-7 md:row-span-2", ratio: "4/3" },
  { src: operatory1, title: "Primary Operatory", caption: "Marble-finished suite equipped with modern dental chair, UV sterilisation and intra-oral imaging.", span: "md:col-span-5", ratio: "4/3" },
  { src: operatory2, title: "Consultation Suite II", caption: "Dedicated diagnostic bay with HD monitor for transparent, image-guided treatment planning.", span: "md:col-span-5", ratio: "4/3" },
  { src: surgery, title: "Minor Surgery Room", caption: "Sterile, fully isolated theatre for implant and oral surgical procedures.", span: "md:col-span-6", ratio: "16/10" },
  { src: consult, title: "Personalised Care", caption: "One-on-one consultations with meticulous attention to each clinical detail.", span: "md:col-span-6", ratio: "16/10" },
  { src: procedure, title: "Surgical Precision", caption: "Advanced equipment and trained staff supporting every procedure end-to-end.", span: "md:col-span-12", ratio: "21/9" },
];

function TourTile({ tile, index }: { tile: Tile; index: number }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`group relative overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-card transition-all hover:shadow-elegant ${tile.span}`}
    >
      <div className="relative h-full w-full overflow-hidden" style={{ aspectRatio: tile.ratio }}>
        <img
          src={tile.src}
          alt={tile.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
        />
        {/* light sweep */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-1000 ease-out group-hover:translate-x-full group-hover:opacity-100" />
        {/* gradient veil */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-80" />
        {/* caption */}
        <figcaption className="absolute inset-x-0 bottom-0 p-8 text-background">
          <div className="flex items-end justify-between gap-6">
            <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
              <h3 className="font-display text-2xl font-bold leading-tight">
                {tile.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-background/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {tile.caption}
              </p>
            </div>
            <motion.div 
              whileHover={{ rotate: -45, scale: 1.1 }}
              className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 backdrop-blur-xl ring-1 ring-white/20"
            >
              <ArrowUpRight className="h-5 w-5 text-background" />
            </motion.div>
          </div>
        </figcaption>
      </div>
    </motion.figure>
  );
}

export function ClinicTour() {
  return (
    <section id="clinic-tour" className="lighting-bg relative overflow-hidden border-y border-border/60 bg-background py-24 lg:py-40">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary-glow" /> Clinic Hub
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-8 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
          >
            A calm space,<br />
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text italic text-transparent">engineered for care.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl"
          >
            Experience a healing environment that merges clinical precision with hospitality. Every operatory is a private oasis in Nagarbhavi.
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-12">
          {tiles.map((t, i) => (
            <TourTile key={t.title} tile={t} index={i} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-14 grid gap-8 rounded-[3rem] border border-border/50 bg-muted/30 p-10 backdrop-blur-3xl sm:grid-cols-3"
        >
          {[
            ["Sterilised", "AERB & KSDC certified protocols across all suites"],
            ["Advanced", "Intra-oral lasers & 3D digital imaging"],
            ["Boutique", "Private consultation zones for each patient"],
          ].map(([t, s]) => (
            <div key={t} className="flex items-start gap-4">
              <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary shadow-[0_0_20px_oklch(var(--primary)/0.5)]" />
              <div>
                <div className="font-display text-xl font-bold">{t}</div>
                <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{s}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
