import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle2, XCircle } from "lucide-react";

// Get these three values from your EmailJS dashboard (emailjs.com):
// Account > Email Services  -> SERVICE_ID
// Email Templates            -> TEMPLATE_ID
// Account > General          -> PUBLIC_KEY
const SERVICE_ID = "service_bflcj6g";
const TEMPLATE_ID = "template_mjdccco";
const PUBLIC_KEY = "MByGmhjqkP1qVjbNC";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  useEffect(() => {
    if (status === "sent" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const inputStyle = {
    borderColor: "var(--border)",
    color: "var(--foreground)",
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="w-full max-w-2xl text-center">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
          Contact Me
        </h2>

        <p className="text-foreground/70 mb-12">
          Let's collaborate on something great
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 text-left"
        >
          {/* Name */}
          <div>
            <label className="text-sm" style={{ color: "var(--foreground)", opacity: 0.7 }}>
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full mt-2 p-3 rounded-xl bg-transparent border outline-none focus:border-2"
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm" style={{ color: "var(--foreground)", opacity: 0.7 }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@email.com"
              className="w-full mt-2 p-3 rounded-xl bg-transparent border outline-none"
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm" style={{ color: "var(--foreground)", opacity: 0.7 }}>
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Write your message..."
              className="w-full mt-2 p-3 rounded-xl bg-transparent border outline-none"
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
            />
          </div>

          {/* Send button */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn btn-primary w-full disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-sm text-foreground/50">
          I usually reply within a few hours
        </p>
      </div>

      {/* Toast popup */}
      {(status === "sent" || status === "error") && (
        <div
          className="fixed bottom-6 right-6 flex items-center gap-2 text-sm px-4 py-3 rounded-xl shadow-lg z-50"
          style={{
            backgroundColor: "var(--card-bg)",
            border: `1px solid ${status === "sent" ? "#16a34a" : "#e24b4a"}`,
            color: status === "sent" ? "#16a34a" : "#e24b4a",
            animation: "fade-in 0.3s ease-out",
          }}
        >
          {status === "sent" ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
          {status === "sent"
            ? "Message sent — thanks for reaching out!"
            : "Something went wrong. Try again, or email me directly."}
        </div>
      )}
    </section>
  );
};