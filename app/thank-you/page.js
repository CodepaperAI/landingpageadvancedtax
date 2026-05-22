import Link from "next/link";
import { ArrowLeft, CalendarCheck2, CheckCircle2, Phone } from "lucide-react";

export const metadata = {
  title: "Thank You | AdvancedTax",
  description: "Your AdvancedTax consultation enquiry has been received.",
};

export default function ThankYouPage() {
  return (
    <main className="thank-you-page">
      <section className="thank-you-shell">
        <div className="thank-you-brand">
          <span>Advanced</span>
          <strong>Accounting</strong>
          <em>Taxation & Business Services</em>
        </div>

        <div className="thank-you-card">
          <div className="thank-you-icon">
            <CheckCircle2 size={34} />
          </div>
          <p className="eyebrow">Enquiry received</p>
          <h1>Thank you for booking your free consultation.</h1>
          <p>
            Your details have been sent to the AdvancedTax team. We'll review
            your enquiry and contact you shortly to talk through your business,
            deadlines, and accounting needs.
          </p>

          <div className="thank-you-next">
            <div>
              <CalendarCheck2 size={22} />
              <span>Keep an eye on your phone and email for the next steps.</span>
            </div>
            <div>
              <Phone size={22} />
              <span>Need urgent help? Call 02 9734 0777.</span>
            </div>
          </div>

          <Link className="button button-gold" href="/">
            <ArrowLeft size={18} />
            Back to landing page
          </Link>
        </div>
      </section>
    </main>
  );
}
