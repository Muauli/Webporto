"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TbBrandGmail } from "react-icons/tb";
import { ArrowRight, ArrowDown } from "lucide-react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Ganti dengan nilai dari EmailJS dashboard kamu
const EMAILJS_SERVICE_ID = "service_jpg1a9m";
const EMAILJS_TEMPLATE_ID = "template_mx8wtps";
const EMAILJS_PUBLIC_KEY = "uoO35mhNxvEvbkv9V";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0],
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-left",
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-left",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
      gsap.fromTo(
        ".contact-right",
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-right",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || "Portfolio Contact",
          message: form.message,
          to_email: "mroyaul@gmail.com",
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = (field: string) =>
    ({
      width: "100%",
      background: "transparent",
      border: "none",
      borderBottom: `1px solid ${
        focusedField === field ? "var(--accent)" : "#2a2a2a"
      }`,
      padding: "14px 0",
      fontSize: "15px",
      color: "#ffffff",
      outline: "none",
      transition: "border-color 0.3s",
      fontFamily: "var(--font-syne)",
    }) as React.CSSProperties;

  const labelStyle = {
    fontSize: "11px",
    letterSpacing: "2px",
    color: "var(--mid)",
    textTransform: "uppercase" as const,
    display: "block",
    marginBottom: "4px",
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-panel"
      style={{
        position: "relative",
        padding: "clamp(100px, 15vh, 160px) clamp(20px, 5vw, 80px)",
        minHeight: "100vh",
      }}
    >
      {/* Background */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--black)",
          opacity: bgOpacity,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "11px",
            letterSpacing: "3px",
            color: "var(--mid)",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          04 / Contact
        </motion.p>

        {/* Grid: kiri info, kanan form */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(48px, 8vw, 100px)",
            alignItems: "start",
          }}
        >
          {/* Kiri — info + social */}
          <div className="contact-left" style={{ opacity: 0 }}>
            <h2
              style={{
                fontFamily: "var(--font-dm-serif)",
                fontSize: "clamp(32px, 5vw, 60px)",
                letterSpacing: "-2px",
                color: "#ffffff",
                lineHeight: 1.05,
                marginBottom: "24px",
              }}
            >
              {"Let's build"}
              <br />
              something <em style={{ color: "var(--accent)" }}>great</em>
              <br />
              together.
            </h2>

            <p
              style={{
                fontSize: "15px",
                color: "#555",
                lineHeight: 1.8,
                marginBottom: "40px",
                maxWidth: "340px",
              }}
            >
              Open to full-time roles, freelance projects, and interesting
              collaborations. Drop a message and I&apos;ll get back to you
              within 24 hours.
            </p>

            {/* Contact info */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                marginBottom: "40px",
              }}
            >
              <p
                style={{
                  fontSize: "10px",
                  letterSpacing: "2px",
                  color: "var(--mid)",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                Find me here!
              </p>

              <div
                style={{ display: "flex", gap: "16px", alignItems: "center" }}
              >
                {[
                  {
                    icon: <FaGithub size={22} />,
                    href: "https://github.com/Muauli",
                    label: "GitHub",
                  },
                  {
                    icon: <FaLinkedin size={22} />,
                    href: "https://www.linkedin.com/in/muhammad-reza-aulia-397773362/",
                    label: "LinkedIn",
                  },
                  {
                    icon: <FaInstagram size={22} />,
                    href: "https://www.instagram.com/murezaaulia/",
                    label: "Instagram",
                  },
                  {
                    icon: <TbBrandGmail size={22} />,
                    href: "mailto:mroyaul@gmail.com",
                    label: "Email",
                  },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel="noopener noreferrer"
                    title={social.label}
                    whileHover={{ y: -4, scale: 1.15 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      width: "48px",
                      height: "48px",
                      border: "0.5px solid #2a2a2a",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#666",
                      textDecoration: "none",
                      transition:
                        "border-color 0.2s, color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent)";
                      e.currentTarget.style.color = "var(--accent)";
                      e.currentTarget.style.background =
                        "rgba(200,240,79,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#2a2a2a";
                      e.currentTarget.style.color = "#666";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              <div style={{ marginTop: "8px" }}>
                <p
                  style={{
                    fontSize: "10px",
                    letterSpacing: "2px",
                    color: "var(--mid)",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                  }}
                >
                  Email
                </p>
                <a
                  href="mailto:mroyaul@gmail.com"
                  style={{
                    fontSize: "14px",
                    color: "#aaa",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
                >
                  mroyaul@gmail.com
                </a>
              </div>

              <div>
                <p
                  style={{
                    fontSize: "10px",
                    letterSpacing: "2px",
                    color: "var(--mid)",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                  }}
                >
                  Location
                </p>
                <p style={{ fontSize: "14px", color: "#aaa" }}>
                  Depok, Indonesia
                </p>
              </div>
            </div>

            {/* Download CV button */}
            <a
              href="/Muhammad_Reza_Aulia-Resume.pdf"
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                border: "0.5px solid #2a2a2a",
                color: "#ffffff",
                padding: "14px 28px",
                borderRadius: "100px",
                fontSize: "13px",
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 0.3s",
                fontFamily: "var(--font-syne)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.color = "var(--black)";
                e.currentTarget.style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.borderColor = "#2a2a2a";
              }}
            >
              Download Resume <ArrowDown size={16} />
            </a>
          </div>

          {/* Kanan — form */}
          <div className="contact-right" style={{ opacity: 0 }}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "32px",
              }}
            >
              {/* Row: name + email */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "24px",
                }}
              >
                <div>
                  <label style={labelStyle}>Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Your name"
                    required
                    style={inputStyle("name")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="your@email.com"
                    required
                    style={inputStyle("email")}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label style={labelStyle}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="What's this about?"
                  style={inputStyle("subject")}
                />
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle}>Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  rows={5}
                  style={{
                    ...inputStyle("message"),
                    resize: "none",
                    borderBottom: `1px solid ${
                      focusedField === "message" ? "var(--accent)" : "#2a2a2a"
                    }`,
                  }}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background:
                    status === "success"
                      ? "#16a34a"
                      : status === "error"
                        ? "#dc2626"
                        : "var(--accent)",
                  color: "var(--black)",
                  border: "none",
                  padding: "16px 36px",
                  borderRadius: "100px",
                  fontSize: "14px",
                  fontWeight: 700,
                  cursor: status === "sending" ? "wait" : "pointer",
                  fontFamily: "var(--font-syne)",
                  letterSpacing: "0.3px",
                  transition: "background 0.3s",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  width: "fit-content",
                }}
              >
                {status === "idle" && "Send Message →"}
                {status === "sending" && "Sending..."}
                {status === "success" && "Message Sent ✓"}
                {status === "error" && "Failed — Try Again"}
              </motion.button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ fontSize: "13px", color: "#4ade80" }}
                >
                  Thanks! I&apos;ll get back to you within 24 hours.
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
