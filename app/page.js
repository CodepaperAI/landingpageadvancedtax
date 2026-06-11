import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  Check,
  CircleDollarSign,
  Clock3,
  FileCheck2,
  MessageCircle,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  X,
} from "lucide-react";
import AnchorStabilizer from "./components/AnchorStabilizer";
import ConsultationForm from "./components/ConsultationForm";

const logo =
  "/assets/advancedtax-logo.svg";
const heroImage = "/assets/hero-office.jpg";
const teamImage = "/assets/tax-documents.jpg";
const reportsImage = "/assets/accounting-reports.jpg";

const industryItems = [
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

const heroQuestions = [
  "Behind on BAS or tax returns?",
  "ATO debt keeping you awake at night?",
  "Bookkeeping not up to date?",
  "Not sure where your cash is going?",
  "Need payroll and super sorted properly?",
  "Need financials for a bank or loan application?",
];

const heroCredentials = [
  "20+ Years Industry Experience",
  "Business Tax & Growth Specialists",
  "Offices in Parramatta & Liverpool",
  "Australia-Wide Online Service",
  "Tax, Accounting & Lending Under One Roof",
];

const risks = [
  "Cash flow confusion",
  "Missed tax deductions",
  "Payroll errors",
  "BAS & GST mistakes",
  "Expensive penalties",
  "Poor business decisions",
];

const services = [
  {
    icon: ReceiptText,
    title: "Tax Returns & Tax Planning",
    copy: "Plan ahead, reduce surprises, and maximise available deductions legally.",
  },
  {
    icon: FileCheck2,
    title: "BAS & GST Compliance",
    copy: "Stay on top of BAS, GST reporting, and lodgements with ATO-compliant support.",
  },
  {
    icon: ShieldCheck,
    title: "ATO Debt & Payment Arrangements",
    copy: "Get practical help understanding your options and managing ATO pressure.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Advisory Services",
    copy: "Make clearer business decisions with practical financial guidance.",
  },
  {
    icon: BarChart3,
    title: "Cash Flow Forecasting",
    copy: "Understand where cash is going and plan ahead with better visibility.",
  },
  {
    icon: BookOpenCheck,
    title: "Business Structure Advice",
    copy: "Review your setup and choose structures that support your next stage.",
  },
  {
    icon: CircleDollarSign,
    title: "Finance & Loan Application Support",
    copy: "Prepare reliable financial information for banks, brokers, and lenders.",
  },
  {
    icon: Banknote,
    title: "SMSF Administration",
    copy: "Keep SMSF records, compliance, and administration moving with confidence.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Payroll & Superannuation",
    copy: "Keep employees paid correctly while staying compliant with super and STP.",
  },
  {
    icon: Sparkles,
    title: "Research & Development (R&D) Tax Incentives",
    copy: "Identify and prepare eligible R&D tax incentive opportunities properly.",
  },
];

const benefits = [
  {
    icon: Clock3,
    title: "Save Valuable Time",
    copy: "Stop spending hours on admin and bookkeeping every week.",
  },
  {
    icon: Sparkles,
    title: "Reduce Stress",
    copy: "No more worrying about tax deadlines, payroll, or compliance issues.",
  },
  {
    icon: CircleDollarSign,
    title: "Know Your Numbers",
    copy: "Get clarity on cash flow, profits, and business performance.",
  },
  {
    icon: ShieldCheck,
    title: "Avoid Costly Mistakes",
    copy: "Professional oversight helps reduce errors and penalties.",
  },
  {
    icon: TrendingUp,
    title: "Grow with Confidence",
    copy: "Make better financial decisions with expert guidance and support.",
  },
  {
    icon: Banknote,
    title: "Transparent Pricing",
    copy: "Simple, clear pricing with no hidden surprises.",
  },
];

const partnerProof = [
  "Personalised support",
  "Clear communication",
  "Fast turnaround times",
  "Practical financial advice",
  "Solutions tailored to your business stage",
];

const steps = [
  {
    title: "Book a Free Consultation",
    copy: "We learn about your business, challenges, and accounting needs.",
  },
  {
    title: "We Set Everything Up",
    copy: "Our team reviews your current systems and organises your accounting processes.",
  },
  {
    title: "We Manage Your Accounting",
    copy: "From bookkeeping to BAS and payroll, we handle the financial work for you.",
  },
  {
    title: "You Focus on Growth",
    copy: "Spend more time running your business while we keep your finances on track.",
  },
];

const testimonials = [
  {
    quote:
      "We approached the team when we were struggling with overdue tax obligations and increasing pressure from the ATO. They provided clear advice, helped us understand our options and guided us through the process professionally. Their support gave us confidence and allowed us to focus on running the business again.",
    author: "Jaggy Kehal",
    business: "Jaggy & Sons",
  },
  {
    quote:
      "The team goes beyond preparing tax returns. They take the time to understand our business, explain the financial implications of key decisions and provide practical guidance throughout the year. Their proactive approach has helped us make better business decisions and plan for growth.",
    author: "Neil Raweri",
    business: "Advanced Century Technologies Pty Ltd",
  },
  {
    quote:
      "We needed reliable accountants who were responsive, knowledgeable and genuinely interested in our success. Whether it was tax planning, financial reporting, dealing with the ATO or preparing information for finance applications, the service has always been professional and timely. We highly recommend them to any business owner looking for trusted accounting support.",
    author: "Siva Velayuthan",
    business: "Techants Solutions Pty Ltd",
  },
];

const faqs = [
  {
    q: "Do you only work with small businesses?",
    a: "Yes, our services are tailored specifically for Australian small businesses, sole traders, startups, and growing companies.",
  },
  {
    q: "Can you help if my bookkeeping is behind?",
    a: "Absolutely. We can help organise overdue bookkeeping, BAS, and financial records.",
  },
  {
    q: "Do you offer ongoing monthly support?",
    a: "Yes. We provide ongoing accounting and bookkeeping support based on your business needs.",
  },
  {
    q: "Can you work with my existing accounting software?",
    a: "Yes. We support modern cloud accounting platforms and can help optimise your setup.",
  },
  {
    q: "How much do your services cost?",
    a: "Pricing depends on your business size and requirements. We offer transparent pricing with no hidden fees.",
  },
  {
    q: "How do I get started?",
    a: "Simply book a free consultation and our team will guide you through the next steps.",
  },
];

function SectionHeading({ eyebrow, title, copy, align = "left" }) {
  return (
    <div className={`section-heading ${align === "center" ? "center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}

function CheckList({ items, variant = "default" }) {
  return (
    <ul className={`check-list ${variant}`}>
      {items.map((item) => (
        <li key={item}>
          <span>
            <Check size={16} strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <AnchorStabilizer />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="utility-bar">
          <div className="container utility-inner">
            <span>Registered tax professionals for Australian businesses</span>
            <a href="tel:0297340777">02 9734 0777</a>
          </div>
        </div>
        <nav className="nav-shell" aria-label="Primary navigation">
          <div className="container nav-inner">
            <a className="brand" href="#top" aria-label="AdvancedTax home">
              <img src={logo} alt="AdvancedTax" />
            </a>
            <div className="desktop-nav">
              <a href="#problem">Problem</a>
              <a href="#services">Services</a>
              <a href="#benefits">Benefits</a>
              <a href="#process">How it works</a>
              <a href="#faq">FAQ</a>
            </div>
            <a className="button button-dark nav-cta" href="#consultation">
              Book consultation
            </a>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="hero-section" id="top">
          <div className="hero-bg">
            <img src={heroImage} alt="Advisory meeting in a premium office" />
          </div>
          <div className="hero-scrim" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Small business accounting support</p>
              <h1>Accounting Made Simple for Small Businesses</h1>
              <p className="hero-lede">
                Get your family time back!
              </p>
              <p className="hero-body">
                We help business owners get back on track with tax,
                accounting, business tax advice, SMSF, BAS, bookkeeping,
                payroll, ATO matters and compliance, so they can focus on
                running and scaling their business.
              </p>
              <div className="hero-actions">
                <a className="button button-gold" href="#consultation">
                  Book Your Free Consultation
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <aside className="hero-panel" aria-label="AdvancedTax trust summary">
              <div className="panel-topline">
                <BadgeCheck size={20} />
                Why businesses choose AdvancedTax
              </div>
              <ul className="credential-list">
                {heroCredentials.map((credential) => (
                  <li key={credential}>
                    <Check size={16} strokeWidth={3} />
                    <span>{credential}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="trust-bar" aria-label="Trust signals">
          <div className="container trust-grid">
            <p>Trusted by Australian businesses across:</p>
            <div>
              {industryItems.map((item) => (
                <span key={item}>
                  <Check size={15} strokeWidth={3} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="problem-section section-pad" id="problem">
          <div className="container split-grid">
            <SectionHeading
              eyebrow="The problem"
              title="Running a Business Is Already Hard Enough."
              copy="You didn’t start your business to spend nights managing spreadsheets, chasing receipts, or stressing about BAS deadlines."
            />
            <div className="problem-content">
              <div className="problem-card">
                <h3>We can help if:</h3>
                <div className="tag-grid">
                  {heroQuestions.map((question) => (
                    <span key={question}>{question}</span>
                  ))}
                </div>
              </div>
              <div className="risk-card">
                <h3>When your books aren’t properly managed, it can lead to:</h3>
                <ul>
                  {risks.map((risk) => (
                    <li key={risk}>
                      <X size={15} strokeWidth={3} />
                      {risk}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="solution-line">
                That’s where AdvancedTax comes in. We simplify your finances so
                you can focus on running and growing your business with
                confidence.
              </p>
            </div>
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="container">
            <div className="section-with-action">
              <SectionHeading
                eyebrow="Our solution"
                title="Complete Small Business Accounting Support All In One Place"
                copy="Whether you're a sole trader, startup, tradie, consultant, cafe owner, retailer, or growing business, we help keep your finances clean, compliant, and under control."
              />
              <a className="text-link" href="#consultation">
                Start with a free consultation
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="service-layout">
              <div className="service-image">
                <img
                  src={reportsImage}
                  alt="Financial reports and accounting documents"
                />
                <div className="image-caption">
                  Accurate records, clean reporting, and fewer deadline
                  surprises.
                </div>
              </div>
              <div className="service-grid">
                {services.map(({ icon: Icon, title, copy }, index) => (
                  <article className="service-card" key={title}>
                    <div className="service-card-top">
                      <div className="icon-box">
                        <Icon size={22} />
                      </div>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="benefits-section section-pad" id="benefits">
          <div className="container">
            <SectionHeading
              eyebrow="Benefits"
              title="Why Small Businesses Choose AdvancedTax"
              align="center"
            />
            <div className="benefit-grid">
              {benefits.map(({ icon: Icon, title, copy }) => (
                <article className="benefit-item" key={title}>
                  <Icon size={24} />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="why-section section-pad" id="why-us">
          <div className="container why-grid">
            <div className="why-image">
              <img src={teamImage} alt="Accounting documents and tax paperwork" />
            </div>
            <div className="why-copy">
              <SectionHeading
                eyebrow="Why us"
                title="More Than Just Accountants. We’re Your Business Support Partner"
                copy="At AdvancedTax, we understand the challenges small businesses face because we work with them every day. We focus on building long-term relationships, not just lodging tax returns."
              />
              <CheckList items={partnerProof} />
              <p className="why-note">
                We help simplify the financial side of your business so you can
                focus on growth.
              </p>
            </div>
          </div>
        </section>

        <section className="process-section section-pad" id="process">
          <div className="container process-grid">
            <div className="process-intro">
              <SectionHeading
                eyebrow="How it works"
                title="Getting Started Is Easy"
                copy="A quieter, clearer path from first conversation to ongoing support."
              />
            </div>
            <div className="steps">
              {steps.map((step, index) => (
                <article className="step" key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="proof-section section-pad">
          <div className="container">
            <SectionHeading
              eyebrow="Social proof"
              title="Helping Small Businesses Stay Financially Confident"
              align="center"
            />
            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <figure className="testimonial" key={item.quote}>
                  <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
                  <figcaption>
                    {item.author}
                    <span>{item.business}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-section section-pad" id="faq">
          <div className="container faq-grid">
            <div>
              <SectionHeading
                eyebrow="FAQs"
                title="Frequently Asked Questions"
                copy="Clear answers before the first call, so you know what to expect."
              />
              <div className="faq-callout">
                <MessageCircle size={22} />
                Have something specific on your books? Bring it to the free
                consultation.
              </div>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.q}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container cta-grid">
            <div>
              <p className="eyebrow">Book your free consultation today</p>
              <h2>Stop Stressing About Your Business Finances</h2>
              <p>
                Let AdvancedTax handle the accounting while you focus on growing
                your business.
              </p>
              <CheckList
                items={[
                  "Save Time",
                  "Stay Compliant",
                  "Gain Financial Clarity",
                  "Grow with Confidence",
                ]}
                variant="cta"
              />
            </div>
            <div className="cta-panel" id="consultation">
              <ConsultationForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <img src={logo} alt="AdvancedTax" />
            <p>
              Accounting, taxation, BAS, payroll and advisory support for
              Australian small businesses.
            </p>
          </div>
          <div>
            <span>Contact</span>
            <a href="tel:0297340777">02 9734 0777</a>
            <a href="mailto:accountants@advancedtax.com.au">
              accountants@advancedtax.com.au
            </a>
            <a href="#consultation">Book consultation</a>
          </div>
        </div>
      </footer>
    </>
  );
}
