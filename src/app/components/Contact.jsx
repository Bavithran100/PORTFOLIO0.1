import { useState } from "react";
import { Mail, MapPin, Phone, Send, FileText } from "lucide-react";
import emailjs from "@emailjs/browser";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_4r0rk3c", // ✅ EmailJS Service ID
        "template_g2qn9p8", // ✅ EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "9wM6YDgq2Ep_j2omc" // ✅ EmailJS Public Key
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
      value: "India",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-32 bg-[#0a0a0f] relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-violet-600/10 rounded-full blur-[150px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">
              Get In Touch
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Have a project in mind? Let's collaborate and create something
              amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="glassmorphism p-10 rounded-2xl border border-white/10">
              <h3 className="text-3xl text-white mb-8">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/20 rounded-lg"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/20 rounded-lg"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/20 rounded-lg resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white rounded-lg shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:shadow-[0_0_40px_rgba(0,212,255,0.5)] transition-all"
                >
                  <Send size={20} className="mr-2" />
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="glassmorphism p-10 rounded-2xl border border-white/10">
                <h3 className="text-3xl text-white mb-8">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-start gap-4 group hover:translate-x-2 transition-transform"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-shadow flex-shrink-0">
                        <info.icon size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">
                          {info.label}
                        </div>
                        <div className="text-white group-hover:text-cyan-400 transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="glassmorphism p-10 rounded-2xl border border-white/10">
                <h3 className="text-2xl text-white mb-4">Availability</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Currently available for freelance projects and full-time
                  opportunities.
                </p>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                  <span className="text-green-400">Available for work</span>
                </div>
                <Button
                  onClick={() => window.open("#", "_blank")}
                  className="w-full bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all"
                >
                  <FileText size={18} className="mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-white/10 text-center">
            <p className="text-gray-400">
              (c) 2026 Alex Rivera. Crafted with passion and cutting-edge tech.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
