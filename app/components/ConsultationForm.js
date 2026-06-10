"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  businessType: "",
  service: "",
  message: "",
};

const industryOptions = [
  "Trades & Construction",
  "Retail & E-commerce",
  "Hospitality & Cafés",
  "Professional Services",
  "Consultants & Contractors",
  "Medical & Healthcare",
  "Property Investors & Developers",
  "Transport & Logistics",
  "Franchise Businesses",
  "Self-Managed Super Funds",
];

export default function ConsultationForm() {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(form.email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }

      setForm(initialForm);
      router.push("/thank-you");
    } catch (submissionError) {
      setStatus("error");
      setError(submissionError.message);
    }
  }

  return (
    <form className="consultation-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <p>Free consultation</p>
        <h3>Tell us what you need help with</h3>
        <span>No obligation. Clear next steps after the first conversation.</span>
      </div>

      <div className="form-grid">
        <label>
          Full name
          <input
            name="name"
            value={form.name}
            onChange={updateField}
            autoComplete="name"
            required
            placeholder="Your name"
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            value={form.phone}
            onChange={updateField}
            autoComplete="tel"
            required
            placeholder="Your phone number"
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={updateField}
            autoComplete="email"
            required
            placeholder="you@business.com.au"
          />
        </label>

        <label>
          Industry
          <select
            name="businessType"
            value={form.businessType}
            onChange={updateField}
            required
          >
            <option value="">Select one</option>
            {industryOptions.map((industry) => (
              <option key={industry}>{industry}</option>
            ))}
          </select>
        </label>

        <label className="full">
          What do you need help with?
          <select name="service" value={form.service} onChange={updateField} required>
            <option value="">Choose a service</option>
            <option>Bookkeeping</option>
            <option>BAS preparation and lodgement</option>
            <option>Payroll and superannuation</option>
            <option>Tax returns and tax planning</option>
            <option>Cash flow and reporting</option>
            <option>Cloud accounting setup</option>
            <option>Not sure yet</option>
          </select>
        </label>

        <label className="full">
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={updateField}
            rows={4}
            placeholder="Tell us about your business, deadlines, or accounting concerns."
          />
        </label>
      </div>

      <button
        className="button button-gold form-submit"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Submit Enquiry"}
        <ArrowRight size={18} />
      </button>

      {status === "error" ? <p className="form-status error">{error}</p> : null}
    </form>
  );
}
