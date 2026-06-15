import { createElement, useState } from "react";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Github,
  Linkedin,
  LoaderCircle,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  XCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { ScrollReveal } from "./ScrollReveal";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "bavithran.n2024ece@sece.ac.in",
    href: "mailto:bavithran.n2024ece@sece.ac.in",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 93447 43117",
    href: "tel:+919344743117",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Coimbatore, India",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Bavithran Natarajan",
    href: "https://www.linkedin.com/in/bavithran-n-04b74b333/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@Bavithran100",
    href: "https://github.com/Bavithran100",
  },
];

const currentFocus = [
  {
    label: "Learning",
    topics: ["System Design", "Distributed Systems", "Operating Systems", "Networking"],
  },
  {
    label: "Building",
    topics: ["Backend Applications", "AI-Powered Projects"],
  },
];

const conversationTopics = [
  "Spring Boot",
  "AI Engineering",
  "System Design",
  "Distributed Systems",
  "Computer Networks",
  "Operating Systems",
  "Research Projects",
  "Hackathons",
];

const opportunities = [
  "Software Engineering Internships",
  "Backend Engineering Opportunities",
  "Research Collaborations",
  "Hackathons",
  "Open Source Contributions",
];

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const updateField = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        "service_4r0rk3c",
        "template_g2qn9p8",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "9wM6YDgq2Ep_j2omc",
      );
      setFormData({ name: "", email: "", message: "" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-section relative overflow-hidden bg-black py-28 sm:py-32">
      <div
        className="absolute left-[8%] top-[12%] h-[30rem] w-[30rem] rounded-full bg-cyan-500/[0.045] blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[8%] right-[4%] h-[34rem] w-[34rem] rounded-full bg-violet-500/[0.05] blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.014)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.014)_1px,transparent_1px)] bg-[size:96px_96px] [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_88%,transparent)]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal className="mb-16 max-w-4xl sm:mb-20">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
              Contact
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
              Start an engineering
              <span className="block text-zinc-500">conversation.</span>
            </h2>
            <div className="mt-6 max-w-3xl space-y-3 text-base leading-7 text-zinc-400 sm:text-lg">
              <p>
                Interested in backend engineering, AI-powered applications, system design, or
                research-driven projects?
              </p>
              <p>
                I&apos;m always open to discussing technology, collaboration, internships,
                research opportunities, and interesting engineering challenges.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
            <ScrollReveal className="h-full">
              <article className="contact-card h-full p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="contact-label">01 / Contact Form</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                      Tell me what you&apos;re working on
                    </h3>
                  </div>
                  <div className="contact-icon">
                    <Send size={17} />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label htmlFor="name" className="contact-field-label">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(event) => updateField("name", event.target.value)}
                      required
                      disabled={status === "loading"}
                      className="contact-input"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="contact-field-label">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      required
                      disabled={status === "loading"}
                      className="contact-input"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="contact-field-label">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(event) => updateField("message", event.target.value)}
                      required
                      disabled={status === "loading"}
                      rows={6}
                      className="contact-input min-h-36 resize-none"
                      placeholder="Share the opportunity, project, or engineering challenge..."
                    />
                  </div>

                  {status === "success" && (
                    <div className="contact-status contact-status-success" role="status">
                      <CheckCircle2 size={17} />
                      Message sent successfully. I&apos;ll get back to you soon.
                    </div>
                  )}

                  {status === "error" && (
                    <div className="contact-status contact-status-error" role="alert">
                      <XCircle size={17} />
                      The message could not be sent. Please try again or email me directly.
                    </div>
                  )}

                  <button type="submit" disabled={status === "loading"} className="contact-submit group">
                    {status === "loading" ? (
                      <LoaderCircle size={17} className="animate-spin" />
                    ) : status === "success" ? (
                      <Check size={17} />
                    ) : (
                      <Send size={17} />
                    )}
                    {status === "loading"
                      ? "Sending Message..."
                      : status === "success"
                        ? "Conversation Started"
                        : "Start a Conversation"}
                    {status === "idle" && (
                      <ArrowUpRight
                        size={15}
                        className="ml-auto transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    )}
                  </button>
                </form>
              </article>
            </ScrollReveal>

            <div className="grid gap-5">
              <ScrollReveal delay={80}>
                <article className="contact-card p-6 sm:p-7">
                  <p className="contact-label">02 / Contact Information</p>
                  <div className="mt-6 grid gap-1">
                    {contactInfo.map(({ icon, label, value, href }) => {
                      const content = (
                        <>
                          <div className="contact-icon">{createElement(icon, { size: 16 })}</div>
                          <div className="min-w-0">
                            <p className="text-[10px] font-semibold tracking-[0.12em] text-zinc-600 uppercase">
                              {label}
                            </p>
                            <p className="mt-1 truncate text-sm text-zinc-300">{value}</p>
                          </div>
                          {href && <ArrowUpRight size={14} className="ml-auto text-zinc-700" />}
                        </>
                      );

                      return href ? (
                        <a
                          key={label}
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="contact-info-row group"
                        >
                          {content}
                        </a>
                      ) : (
                        <div key={label} className="contact-info-row">
                          {content}
                        </div>
                      );
                    })}
                  </div>
                </article>
              </ScrollReveal>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <ScrollReveal delay={140} className="h-full">
                  <article className="contact-card h-full p-6">
                    <p className="contact-label">03 / Current Focus</p>
                    <div className="mt-6 space-y-6">
                      {currentFocus.map(({ label, topics }) => (
                        <div key={label}>
                          <p className="text-xs font-semibold text-zinc-300">{label}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {topics.map((topic) => (
                              <span key={topic} className="contact-pill">
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>
                </ScrollReveal>

                <ScrollReveal delay={200} className="h-full">
                  <article className="contact-card h-full p-6">
                    <p className="contact-label">04 / Let&apos;s Talk About</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {conversationTopics.map((topic) => (
                        <span key={topic} className="contact-pill">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </article>
                </ScrollReveal>
              </div>
            </div>
          </div>

          <ScrollReveal className="mt-6">
            <article className="contact-availability-card">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <p className="contact-label text-emerald-300">Open To</p>
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
                  Opportunities to learn, build, and contribute
                </h3>
              </div>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {opportunities.map((opportunity) => (
                  <div key={opportunity} className="contact-opportunity">
                    <Sparkles size={13} />
                    {opportunity}
                  </div>
                ))}
              </div>
            </article>
          </ScrollReveal>

          <footer className="mt-20 border-t border-white/[0.07] pt-8 text-center text-xs leading-6 text-zinc-600">
            <p>Designed and developed by Bavithran Natarajan.</p>
            <p>Built with React, TypeScript, and Tailwind CSS.</p>
          </footer>
        </div>
      </div>
    </section>
  );
}
