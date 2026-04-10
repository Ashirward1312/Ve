import React, { useMemo, useState } from "react";

import h1Img from "./Images/h1.jpg";
import h2 from "./Images/h2.jpg";
import h3 from "./Images/h3.jpg";
import logo from "./Images/bb.png";

/* ================= Helpers ================= */
function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
function scrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const navMain = [
  { label: "Home", id: "home" },
  { label: "Results", id: "results" },
  { label: "Problem", id: "problem" },
  { label: "How it works", id: "how" },
  { label: "Services", id: "services" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
];

export default function HeroPage({ logoSrc = logo }) {
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    clinicName: "",
    website: "",
    suburbCity: "",
    email: "",
    phone: "",
  });

  const submitHint = useMemo(() => {
    if (!sent)
      return "No spam. No lock-in. We'll send your audit report within 24 business hours.";
    return "Thanks. Your request has been received. Check your inbox soon.";
  }, [sent]);

  const onNav = (item) => {
    setMenuOpen(false);
    scrollToId(item.id);
  };

  /* ================= Data ================= */
  const results = [
    {
      tone: "teal",
      icon: <IconSpark className="w-5 h-5" />,
      value: "+47%",
      label: "New patient inquiries",
      note: "within first 60 days",
    },
    {
      tone: "sky",
      icon: <IconMapPin className="w-5 h-5" />,
      value: "#1",
      label: "Google Maps ranking",
      note: "achieved in 8–12 weeks",
    },
    {
      tone: "indigo",
      icon: <IconTrendUp className="w-5 h-5" />,
      value: "3.8×",
      label: "Return on ad spend",
      note: "average across campaigns",
    },
  ];

  const problems = [
    {
      tone: "teal",
      idx: "01",
      icon: <IconMapPin className="w-5 h-5" />,
      title: "Weak Google Maps visibility",
      desc: "Most patients pick from the top 3 Maps results in their suburb.",
    },
    {
      tone: "sky",
      idx: "02",
      icon: <IconBolt className="w-5 h-5" />,
      title: "Website isn't converting",
      desc: "Slow pages and unclear CTAs reduce bookings. We fix it.",
    },
    {
      tone: "indigo",
      idx: "03",
      icon: <IconTarget className="w-5 h-5" />,
      title: "Ads waste budget",
      desc: "Poor targeting and no tracking kills ROAS. We rebuild properly.",
    },
  ];

  const steps = [
    {
      step: "STEP 01",
      title: "Free clinic audit",
      desc: "Maps ranking, website speed, GBP, competitors — suburb-specific.",
    },
    {
      step: "STEP 02",
      title: "Custom strategy",
      desc: "A 90-day plan focused on high-intent local keywords.",
    },
    {
      step: "STEP 03",
      title: "Launch & optimise",
      desc: "Local SEO + GBP + Ads + tracking + weekly updates.",
    },
    {
      step: "STEP 04",
      title: "Scale what works",
      desc: "Monthly strategy calls to double down on winners.",
    },
  ];

  const services = [
    {
      variant: "teal",
      icon: <IconMapPin className="w-6 h-6" />,
      title: "Local SEO & Google Maps",
      desc: 'Top 3 Maps for "dentist [suburb]" searches.',
      price: "From AUD $1,200/mo",
      cta: "Get SEO plan →",
    },
    {
      variant: "sky",
      icon: <IconTarget className="w-6 h-6" />,
      title: "Google Ads for Dentists",
      desc: "High-value procedure campaigns + tracking.",
      price: "From AUD $800/mo",
      cta: "Get ads setup →",
    },
    {
      variant: "indigo",
      icon: <IconGlobe className="w-6 h-6" />,
      title: "Website Rebuild",
      desc: "Fast, mobile-first, SEO-ready websites.",
      price: "From AUD $2,500 one-off",
      cta: "Request quote →",
    },
    {
      variant: "amber",
      icon: <IconBot className="w-6 h-6" />,
      title: "AI Lead Capture",
      desc: "Qualifies enquiries 24/7.",
      price: "From AUD $500/mo add-on",
      cta: "Enable chatbot →",
    },
    {
      variant: "emerald",
      icon: <IconFunnel className="w-6 h-6" />,
      title: "Lead Gen Funnels",
      desc: "Meta ads + follow-ups to convert.",
      price: "From AUD $1,500/mo",
      cta: "Build funnel →",
    },
    {
      variant: "violet",
      icon: <IconStar className="w-6 h-6" />,
      title: "Reputation Management",
      desc: "More reviews → more trust → more bookings.",
      price: "Included in packages",
      cta: "Start reviews →",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "$1,200",
      note: "AUD / month",
      featured: false,
      features: [
        "Local SEO (up to 15 keywords)",
        "Google Business Profile optimisation",
        "Monthly performance report",
        "Review request setup",
        "Email support",
      ],
    },
    {
      name: "Growth",
      price: "$2,000",
      note: "AUD / month",
      featured: true,
      badge: "Most popular",
      features: [
        "Everything in Starter",
        "Google Ads management (up to $2k spend)",
        "Conversion landing page",
        "Monthly strategy call",
        "Competitor dashboard",
        "Priority support",
      ],
    },
    {
      name: "Scale",
      price: "$3,500",
      note: "AUD / month",
      featured: false,
      features: [
        "Everything in Growth",
        "Meta Ads",
        "AI chatbot",
        "High-value procedure campaigns",
        "Weekly reporting calls",
        "Multi-location support",
      ],
    },
  ];

  const whyItems = [
    {
      icon: <IconTooth className="w-5 h-5" />,
      title: "Dental-focused",
      desc: "Not generic marketing — dental patient behavior first.",
    },
    {
      icon: <IconMapPin className="w-5 h-5" />,
      title: "Local suburb strategy",
      desc: "Maps + local keywords + trust signals.",
    },
    {
      icon: <IconShield className="w-5 h-5" />,
      title: "90-day guarantee",
      desc: "If no progress, we work free next month.",
    },
    {
      icon: <IconUnlock className="w-5 h-5" />,
      title: "No lock-in",
      desc: "Month-to-month. Stay because results.",
    },
  ];

  const faqs = [
    {
      q: "How long does it take to see results from SEO?",
      a: "Most clinics see improvements within 8–12 weeks.",
    },
    {
      q: "Do you follow AHPRA advertising guidelines?",
      a: "Yes — messaging aligned with AU health advertising requirements.",
    },
    {
      q: "What is the minimum contract length?",
      a: "No lock-in. Month-to-month for the first 3 months.",
    },
    {
      q: "Can you manage our existing Google Ads account?",
      a: "Yes — we audit, rebuild targeting and improve conversions.",
    },
    {
      q: "Do you support multi-location clinics?",
      a: "Yes — multi-location support available.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* ================= HEADER ================= */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
          <div className="rounded-2xl border border-slate-200 bg-white/85 backdrop-blur-xl shadow-sm">
            <div className="h-14 px-4 sm:px-6 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => {
                  scrollToId("home");
                  setMenuOpen(false);
                }}
                className="flex items-center gap-3"
                aria-label="Home"
              >
                <img
                  src={logoSrc}
                  alt="Brand"
                  className="h-9 w-9 rounded-xl object-cover border border-slate-200"
                />
                <div className="leading-tight text-left">
                  <div className="text-sm font-semibold text-slate-900">
                    Ventoria Global
                  </div>
                </div>
              </button>

              <nav className="hidden lg:flex items-center gap-1">
                {navMain.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => onNav(item)}
                    className="px-3 py-2 rounded-xl text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollToId("audit")}
                  className="hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-white bg-slate-900 hover:bg-slate-800 transition shadow-sm"
                >
                  Free Audit <IconArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setMenuOpen((v) => !v)}
                  className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition"
                  aria-label="Open menu"
                >
                  {menuOpen ? (
                    <span className="text-2xl leading-none">×</span>
                  ) : (
                    <span className="text-lg leading-none">≡</span>
                  )}
                </button>
              </div>
            </div>

            {menuOpen && (
              <div className="lg:hidden border-t border-slate-200 px-4 pb-4 pt-3">
                <div className="grid gap-2">
                  {navMain.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => onNav(item)}
                      className="w-full text-left rounded-xl px-4 py-3 text-sm text-slate-700 border border-slate-200 bg-white hover:bg-slate-50 transition"
                    >
                      {item.label}
                    </button>
                  ))}

                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      scrollToId("audit");
                    }}
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm text-white bg-slate-900 hover:bg-slate-800 transition shadow-sm"
                  >
                    Free Audit <IconArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section id="home" className="scroll-mt-24 pt-24 sm:pt-28 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700">
              <span className="h-2 w-2 rounded-full bg-teal-600" />
              For dental practices in Sydney, Melbourne &amp; Brisbane
            </div>

            <h1 className="mt-5 text-4xl md:text-5xl leading-[1.05] font-semibold tracking-tight text-slate-900">
              More patients.
              <br />
              <span className="text-slate-900">Less guessing.</span>
              <br />
              <span className="text-teal-700">Guaranteed.</span>
            </h1>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-xl">
              We help independent dental clinics improve local search visibility,
              increase bookings, and stop paying for marketing that doesn’t work.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => scrollToId("audit")}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm text-white bg-slate-900 hover:bg-slate-800 transition shadow-sm"
              >
                Get your free clinic audit <IconArrowRight className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => scrollToId("pricing")}
                className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm text-slate-900 border border-slate-200 bg-white hover:bg-slate-50 transition"
              >
                View pricing
              </button>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
              <IconCheckCircle className="w-5 h-5 text-teal-700" />
              No lock-in contracts. Cancel anytime.
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Chip>90-day guarantee</Chip>
              <Chip>Local Maps focus</Chip>
              <Chip>Weekly reporting</Chip>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-7">
                <ImageCardClean
                  img={h1Img}
                  height="h-[380px] md:h-[470px]"
                  label="Local SEO + Maps"
                  hover="hover:shadow-md hover:-translate-y-1"
                  priority
                />
              </div>

              <div className="col-span-12 md:col-span-5 grid gap-4">
                <ImageCardClean
                  img={h2}
                  height="h-[225px]"
                  label="Website conversion"
                  hover="hover:shadow-md hover:-translate-y-1 hover:rotate-[0.4deg]"
                />
                <ImageCardClean
                  img={h3}
                  height="h-[225px]"
                  label="Ads + tracking"
                  hover="hover:shadow-md hover:-translate-y-1 hover:translate-x-0.5"
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <KpiClean title="+47%" sub="Inquiries" />
              <KpiClean title="#1" sub="Maps" />
              <KpiClean title="3.8×" sub="ROAS" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section
        id="results"
        className="scroll-mt-24 py-16 bg-white md:min-h-[92vh] flex items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Real results"
            title="Simple metrics. Real growth."
            desc="We measure success in new patients and bookings — not impressions."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {results.map((r) => (
              <ResultPremiumCard key={r.label} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROBLEM ================= */}
      <section
        id="problem"
        className="scroll-mt-24 py-16 bg-slate-50 md:min-h-[92vh] flex items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="The problem"
            title="Most clinics lose patients online every day"
            desc='When someone searches "dentist near me", you must show up first.'
          />

          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((p) => (
              <ProblemPremiumCard key={p.idx} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW ================= */}
      <section
        id="how"
        className="scroll-mt-24 py-20 bg-white md:min-h-[92vh] flex items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="How it works"
            title="A system built for local patient growth"
            desc="Four steps. 90 days. Measurable progress."
          />

          <div className="grid md:grid-cols-4 gap-6 items-stretch">
            {steps.map((s) => (
              <CardUnderline key={s.step}>
                <div className="text-xs inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700">
                  {s.step}
                </div>
                <div className="mt-5 text-slate-900 font-semibold text-lg">
                  {s.title}
                </div>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </CardUnderline>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section
        id="services"
        className="scroll-mt-24 py-20 bg-slate-950 md:min-h-[92vh] flex items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Services"
            title="Everything you need — no fluff"
            desc="Dental-specific, local-first, conversion focused."
            dark
          />

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCardCleanDark
                key={s.title}
                {...s}
                onCta={() => scrollToId("audit")}
              />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => scrollToId("audit")}
              className="rounded-xl px-5 py-3 text-sm font-medium text-slate-950 bg-teal-400 hover:bg-teal-300 transition shadow-sm"
            >
              Get your free audit →
            </button>
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section
        id="pricing"
        className="scroll-mt-24 py-16 bg-slate-50 md:min-h-[92vh] flex items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Pricing"
            title="Transparent packages"
            desc="No lock-in contracts. Simple monthly plans."
          />

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {plans.map((p) => (
              <PriceCardClean
                key={p.name}
                {...p}
                onCta={() => scrollToId("audit")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= AUDIT (Contact block added in left empty area) ================= */}
      <section
        id="audit"
        className="scroll-mt-24 py-16 bg-white md:min-h-[92vh] flex items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Free audit"
            title="See what your clinic is missing"
            desc="Maps position, website speed, competitor gaps — within 24 hours."
          />

          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            {/* LEFT */}
            <PanelClean className="h-full p-7 sm:p-8">
              <div className="flex-1">
                <AuditItem
                  title="Google Maps position check"
                  desc='Where you rank vs. competitors for "[dentist] [suburb]"'
                />
                <AuditItem
                  title="Website speed & mobile score"
                  desc="We show your PageSpeed score + improvements."
                />
                <AuditItem
                  title="Google Business Profile gaps"
                  desc="Missing categories/photos/posts costing visibility."
                />
                <AuditItem
                  title="Top keyword opportunities"
                  desc="3–5 high-intent searches to target next."
                />
              </div>

              {/* ✅ Bottom area fills empty space */}
              <div className="mt-6 grid gap-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                  <div className="font-medium">
                    Takes 60 seconds. Results within 24 hours.
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    Prefer to talk? Use the contact details below.
                  </div>
                </div>

                <ContactMini />
              </div>
            </PanelClean>

            {/* RIGHT (Form) */}
            <PanelClean
              as="form"
              className="h-full p-7 sm:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="First name"
                  value={form.firstName}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, firstName: e.target.value }))
                  }
                  placeholder="Dr. James"
                  required
                />
                <Field
                  label="Clinic name"
                  value={form.clinicName}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, clinicName: e.target.value }))
                  }
                  placeholder="Smile Dental Surry Hills"
                  required
                />
              </div>

              <div className="mt-4">
                <Field
                  label="Clinic website"
                  value={form.website}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, website: e.target.value }))
                  }
                  placeholder="www.yourclinicdomain.com.au"
                  required
                />
              </div>

              <div className="mt-4">
                <Field
                  label="Suburb & city"
                  value={form.suburbCity}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, suburbCity: e.target.value }))
                  }
                  placeholder="e.g. Surry Hills, Sydney"
                  required
                />
              </div>

              <div className="mt-4">
                <Field
                  type="email"
                  label="Email address"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  placeholder="info@yourclinic.com"
                  required
                />
              </div>

              <div className="mt-4">
                <Field
                  type="tel"
                  label="Phone (optional)"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, phone: e.target.value }))
                  }
                  placeholder="+61 04..."
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className={`mt-6 w-full rounded-xl px-4 py-3 text-sm text-white transition shadow-sm ${
                  sent
                    ? "bg-teal-700 opacity-90 cursor-not-allowed"
                    : "bg-slate-900 hover:bg-slate-800"
                }`}
              >
                {sent ? "Request received ✓" : "Send me my free audit →"}
              </button>

              <p className="mt-3 text-center text-sm text-slate-600">
                {submitHint}
              </p>
            </PanelClean>
          </div>
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section
        id="why"
        className="scroll-mt-24 py-16 bg-slate-50 md:min-h-[92vh] flex items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionTitle
              eyebrow="Why us"
              title="Built for dental. Different by design."
              desc="Focus on local visibility + bookings."
              align="left"
            />

            <div className="grid sm:grid-cols-2 gap-6 mt-6 items-stretch">
              {whyItems.map((w) => (
                <WhyCardClean key={w.title} {...w} />
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <ImageCardClean
              img={h2}
              height="h-[260px]"
              label="Before: low conversions"
              hover="hover:shadow-md hover:-translate-y-1"
            />
            <ImageCardClean
              img={h3}
              height="h-[260px]"
              label="After: booked appointments"
              hover="hover:shadow-md hover:-translate-y-1"
            />
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section
        id="faq"
        className="scroll-mt-24 py-16 bg-white md:min-h-[92vh] flex items-center"
      >
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="FAQ"
            title="Common questions"
            desc="Short answers to what clinics ask most."
          />

          <div className="space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-slate-900 font-medium">
                  {item.q}
                  <span className="transition-transform group-open:rotate-180">
                    <IconChevronDown className="w-5 h-5 text-slate-500" />
                  </span>
                </summary>
                <p className="mt-3 text-slate-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-950 text-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src={logoSrc}
                alt="Brand"
                className="h-9 w-9 rounded-xl object-cover border border-white/10"
              />
              <div>
                <div className="font-semibold text-white">Ventoria Global</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="hover:text-white transition">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-sm text-slate-400">
            © {new Date().getFullYear()} Ventoria Global. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Scroll top */}
      <button
        type="button"
        onClick={scrollTop}
        className="fixed bottom-6 right-6 h-11 w-11 rounded-xl border border-slate-200 bg-white shadow-sm hover:bg-slate-50 transition grid place-items-center"
        aria-label="Scroll to top"
      >
        <IconArrowUp className="w-5 h-5 text-slate-900" />
      </button>

      <style>{`details summary::-webkit-details-marker{display:none;}`}</style>
    </div>
  );
}

/* ================= Premium Results Card ================= */
function ResultPremiumCard({ tone = "teal", icon, value, label, note }) {
  const toneTop =
    {
      teal: "from-teal-50 to-white",
      sky: "from-sky-50 to-white",
      indigo: "from-indigo-50 to-white",
    }[tone] || "from-slate-50 to-white";

  const toneIcon =
    {
      teal: "text-teal-700 border-teal-200 bg-teal-50/60",
      sky: "text-sky-700 border-sky-200 bg-sky-50/60",
      indigo: "text-indigo-700 border-indigo-200 bg-indigo-50/60",
    }[tone] || "text-slate-700 border-slate-200 bg-slate-50/60";

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_12px_35px_-30px_rgba(15,23,42,0.22)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_-45px_rgba(15,23,42,0.25)]">
      <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${toneTop}`} />
      <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/60" />

      <div className="relative">
        <div
          className={`h-11 w-11 rounded-xl border grid place-items-center ${toneIcon} transition-transform duration-200 group-hover:scale-[1.05]`}
        >
          {icon}
        </div>

        <div className="mt-5 text-3xl font-semibold text-slate-900">{value}</div>
        <div className="mt-1 text-slate-900 font-medium">{label}</div>
        <div className="mt-2 text-sm text-slate-600">{note}</div>

        <div className="mt-6 h-[2px] w-full bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full w-0 bg-slate-900/50 group-hover:w-full transition-all duration-500" />
        </div>
      </div>
    </div>
  );
}

/* ================= Premium Problem Card ================= */
function ProblemPremiumCard({ tone = "teal", idx, icon, title, desc }) {
  const toneBar =
    {
      teal: "bg-teal-600/80",
      sky: "bg-sky-600/80",
      indigo: "bg-indigo-600/80",
    }[tone] || "bg-slate-600/80";

  const toneBadge =
    {
      teal: "border-teal-200 bg-teal-50 text-teal-800",
      sky: "border-sky-200 bg-sky-50 text-sky-800",
      indigo: "border-indigo-200 bg-indigo-50 text-indigo-800",
    }[tone] || "border-slate-200 bg-slate-50 text-slate-800";

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_12px_35px_-30px_rgba(15,23,42,0.18)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_-45px_rgba(15,23,42,0.22)]">
      <div className={`absolute left-0 top-0 h-full w-1 ${toneBar}`} />
      <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/60" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="h-11 w-11 rounded-xl border border-slate-200 bg-white grid place-items-center text-slate-800 transition-transform duration-200 group-hover:scale-[1.05] group-hover:-rotate-1">
            {icon}
          </div>
          <div className={`text-xs rounded-full border px-3 py-1 ${toneBadge}`}>
            {idx}
          </div>
        </div>

        <div className="mt-5 text-lg font-semibold text-slate-900">{title}</div>
        <p className="mt-3 text-slate-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

/* ================= Basic UI Components ================= */
function SectionTitle({ eyebrow, title, desc, align = "center", dark = false }) {
  const cls = align === "left" ? "text-left" : "text-center";
  return (
    <div className={`${cls} max-w-3xl ${align === "left" ? "" : "mx-auto"} mb-10`}>
      <div
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs ${
          dark
            ? "border-white/10 bg-white/5 text-slate-200"
            : "border-slate-200 bg-white text-slate-700"
        }`}
      >
        <span className={`h-2 w-2 rounded-full ${dark ? "bg-teal-400" : "bg-teal-700"}`} />
        {eyebrow}
      </div>

      <h2 className={`mt-5 text-3xl md:text-4xl font-semibold tracking-tight ${dark ? "text-white" : "text-slate-900"}`}>
        {title}
      </h2>

      <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>
        {desc}
      </p>
    </div>
  );
}

function Chip({ children }) {
  return (
    <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700">
      {children}
    </div>
  );
}

function ImageCardClean({ img, height, label, hover = "", priority = false }) {
  return (
    <div
      className={[
        "group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm transition-transform duration-200",
        hover,
      ].join(" ")}
    >
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={label}
          className={`w-full ${height} object-cover transition duration-500 group-hover:scale-[1.04]`}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding={priority ? "sync" : "async"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-white/10 backdrop-blur px-3 py-1 text-xs text-white">
          {label}
        </div>
      </div>
    </div>
  );
}

function KpiClean({ title, sub }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm hover:shadow-md transition">
      <div className="text-lg md:text-xl font-semibold text-slate-900">{title}</div>
      <div className="text-xs text-slate-600 mt-1">{sub}</div>
    </div>
  );
}

function CardUnderline({ children }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {children}
      <div className="mt-6 h-[2px] w-full bg-slate-200 overflow-hidden rounded-full">
        <div className="h-full w-0 bg-teal-700 group-hover:w-full transition-all duration-500" />
      </div>
    </div>
  );
}

function PanelClean({ as: Tag = "div", children, className = "", ...props }) {
  return (
    <Tag
      className={[
        "rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </Tag>
  );
}

function AuditItem({ title, desc }) {
  return (
    <div className="flex items-start gap-3 py-2.5">
      <span className="mt-0.5 h-6 w-6 rounded-full bg-teal-50 border border-teal-200 grid place-items-center text-teal-800 text-[12px]">
        ✓
      </span>
      <div>
        <div className="text-slate-900 font-semibold">{title}</div>
        <div className="text-sm text-slate-600 leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, required, type = "text" }) {
  return (
    <label className="block">
      <span className="block text-sm text-slate-700 mb-2">{label}</span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-600 focus:ring-4 focus:ring-teal-50 transition"
      />
    </label>
  );
}

function WhyCardClean({ icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="h-11 w-11 rounded-xl border border-slate-200 bg-white grid place-items-center text-slate-800 transition-transform duration-200 group-hover:scale-[1.06]">
        {icon}
      </div>
      <div className="mt-4 text-slate-900 font-semibold">{title}</div>
      <div className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</div>
    </div>
  );
}

/* ================= Services Card (with colored CTA) ================= */
function ServiceCardCleanDark({
  icon,
  title,
  desc,
  price,
  cta,
  variant = "teal",
  onCta,
}) {
  const btnMap = {
    teal: "bg-teal-400 hover:bg-teal-300 text-slate-950",
    sky: "bg-sky-400 hover:bg-sky-300 text-slate-950",
    indigo: "bg-indigo-400 hover:bg-indigo-300 text-slate-950",
    amber: "bg-amber-300 hover:bg-amber-200 text-slate-950",
    emerald: "bg-emerald-400 hover:bg-emerald-300 text-slate-950",
    violet: "bg-violet-400 hover:bg-violet-300 text-slate-950",
  };

  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-7 shadow-sm transition hover:-translate-y-1 hover:bg-white/7">
      <div className="h-12 w-12 rounded-xl border border-white/10 bg-white/5 grid place-items-center text-white/90 transition-transform duration-200 group-hover:rotate-3">
        {icon}
      </div>

      <div className="mt-5 text-white font-semibold text-lg">{title}</div>
      <p className="mt-3 text-sm text-slate-300 leading-relaxed">{desc}</p>

      <div className="mt-6 inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
        {price}
      </div>

      <button
        type="button"
        onClick={onCta}
        className={[
          "mt-6 w-full rounded-xl px-4 py-3 text-sm font-semibold transition shadow-sm",
          "focus:outline-none focus:ring-4 focus:ring-white/10",
          btnMap[variant] || btnMap.teal,
        ].join(" ")}
      >
        {cta || "Get started →"}
      </button>
    </div>
  );
}

function PriceCardClean({ name, price, note, features, featured, badge, onCta }) {
  return (
    <div
      className={[
        "group rounded-2xl border bg-white p-7 shadow-sm transition",
        "hover:-translate-y-1 hover:shadow-md hover:scale-[1.01]",
        featured ? "border-teal-200 ring-2 ring-teal-50" : "border-slate-200",
      ].join(" ")}
    >
      {featured && (
        <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 border border-teal-200 px-3 py-1 text-xs text-teal-800">
          <IconStar className="w-4 h-4" />
          {badge}
        </div>
      )}

      <div className="mt-5 flex items-end justify-between gap-4">
        <div>
          <div className="text-slate-900 font-semibold text-lg">{name}</div>
          <div className="text-sm text-slate-600">{note}</div>
        </div>
        <div className="text-3xl font-semibold text-slate-900">{price}</div>
      </div>

      <div className="mt-6 space-y-2.5">
        {features.map((f) => (
          <div key={f} className="flex items-start gap-2 text-slate-700">
            <span className="mt-0.5 h-5 w-5 rounded-full bg-teal-50 border border-teal-200 grid place-items-center text-teal-800 text-[12px]">
              ✓
            </span>
            <span className="text-sm leading-relaxed">{f}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onCta}
        className={`mt-7 w-full rounded-xl px-4 py-3 text-sm text-white transition shadow-sm ${
          featured
            ? "bg-teal-700 hover:bg-teal-800"
            : "bg-slate-900 hover:bg-slate-800"
        }`}
      >
        Get started →
      </button>
    </div>
  );
}

/* ================= Contact block inside Audit (left panel) ================= */
function ContactMini() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="text-sm font-semibold text-slate-900">Contact</div>

      <div className="mt-3 space-y-2.5 text-sm text-slate-700">
        <a
          href="tel:+61466099308"
          className="flex items-start gap-2 hover:text-slate-900 transition"
        >
          <IconPhone className="mt-0.5 h-4 w-4 text-teal-700" />
          <span>+61 0466099308</span>
        </a>

        <a
          href="mailto:info@ventoriaglobal.com"
          className="flex items-start gap-2 hover:text-slate-900 transition"
        >
          <IconMail className="mt-0.5 h-4 w-4 text-teal-700" />
          <span>info@ventoriaglobal.com</span>
        </a>

        <div className="flex items-start gap-2">
          <IconLocation className="mt-0.5 h-4 w-4 text-teal-700" />
          <span className="leading-relaxed">
            LEVEL 1/457-459 ELIZABETH STREET, SURRY HILLS NSW 2010, AUSTRALIA
          </span>
        </div>
      </div>
    </div>
  );
}

/* ================= Icons ================= */
function IconArrowRight({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M13 7l5 5-5 5M18 12H6"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconArrowUp({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 5l-7 7M12 5l7 7M12 5v14"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconChevronDown({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconCheckCircle({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 22a10 10 0 110-20 10 10 0 010 20z"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <path
        d="M8.2 12.3l2.2 2.2 5.4-5.7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconMapPin({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M12 10.3a2.3 2.3 0 110-4.6 2.3 2.3 0 010 4.6z"
        stroke="currentColor"
        strokeWidth="2.2"
      />
    </svg>
  );
}
function IconTrendUp({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 14l4-4 3 3 6-6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16 7h4v4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M4 20h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
function IconSpark({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l1.3 5.5L19 9l-5.7 1.4L12 16l-1.3-5.6L5 9l5.7-1.5L12 2z"
        stroke="currentColor"
        strokeWidth="2.0"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconStar({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.8l2.7 6 6.5.6-4.9 4.3 1.5 6.4L12 16.8 6.2 20.1l1.5-6.4-4.9-4.3 6.5-.6L12 2.8z"
        stroke="currentColor"
        strokeWidth="2.0"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconBolt({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
        stroke="currentColor"
        strokeWidth="2.0"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconTarget({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21a9 9 0 110-18 9 9 0 010 18z" stroke="currentColor" strokeWidth="2.0" />
      <path d="M12 17a5 5 0 110-10 5 5 0 010 10z" stroke="currentColor" strokeWidth="2.0" />
      <path d="M12 12l7-7" stroke="currentColor" strokeWidth="2.0" strokeLinecap="round" />
    </svg>
  );
}
function IconGlobe({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21a9 9 0 110-18 9 9 0 010 18z" stroke="currentColor" strokeWidth="2.0" />
      <path d="M3 12h18" stroke="currentColor" strokeWidth="2.0" strokeLinecap="round" />
      <path d="M12 3c3 3.3 3 14.7 0 18" stroke="currentColor" strokeWidth="2.0" strokeLinecap="round" />
      <path d="M12 3c-3 3.3-3 14.7 0 18" stroke="currentColor" strokeWidth="2.0" strokeLinecap="round" />
    </svg>
  );
}
function IconBot({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3v3" stroke="currentColor" strokeWidth="2.0" strokeLinecap="round" />
      <path
        d="M8 9h8a4 4 0 014 4v3a5 5 0 01-5 5H9a5 5 0 01-5-5v-3a4 4 0 014-4z"
        stroke="currentColor"
        strokeWidth="2.0"
        strokeLinejoin="round"
      />
      <path d="M9.2 14.2h.01M14.8 14.2h.01" stroke="currentColor" strokeWidth="3.0" strokeLinecap="round" />
    </svg>
  );
}
function IconFunnel({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 5h18l-7 8v6l-4 2v-8L3 5z" stroke="currentColor" strokeWidth="2.0" strokeLinejoin="round" />
    </svg>
  );
}
function IconTooth({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8.2 3.8c1.2-.8 2.6-.8 3.8-.3 1.2-.5 2.6-.5 3.8.3 2.4 1.6 3.1 5 1.9 7.9-.8 2-1.4 3.8-1.6 5.5-.2 1.6-1.1 3-2.7 3-1.1 0-1.8-.7-2.2-1.8-.4 1.1-1.1 1.8-2.2 1.8-1.6 0-2.5-1.4-2.7-3-.2-1.7-.8-3.5-1.6-5.5-1.2-2.9-.5-6.3 1.9-7.9z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconShield({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l7 4v6c0 5-3.5 9.5-7 10-3.5-.5-7-5-7-10V6l7-4z"
        stroke="currentColor"
        strokeWidth="2.0"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconUnlock({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 11V8a5 5 0 019.7-2" stroke="currentColor" strokeWidth="2.0" strokeLinecap="round" />
      <path d="M7 11h10a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6a2 2 0 012-2z" stroke="currentColor" strokeWidth="2.0" strokeLinejoin="round" />
      <path d="M12 15v2" stroke="currentColor" strokeWidth="2.0" strokeLinecap="round" />
    </svg>
  );
}

/* Contact mini icons */
function IconPhone({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8.5 3.8l2.2 3.8c.3.6.2 1.3-.3 1.7l-1.4 1.2c1.2 2.3 3 4.1 5.3 5.3l1.2-1.4c.4-.5 1.1-.6 1.7-.3l3.8 2.2c.7.4.9 1.2.5 1.9-.8 1.4-2.3 2.3-4 2.3-7.2 0-13-5.8-13-13 0-1.7.9-3.2 2.3-4 .7-.4 1.5-.2 1.9.5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconMail({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.5 7.5h15v9h-15v-9z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M5 8l7 5 7-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
function IconLocation({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 10.2a2.2 2.2 0 110-4.4 2.2 2.2 0 010 4.4z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}