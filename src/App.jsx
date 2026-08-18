import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedServices from './components/FeaturedServices';
import ProductShowcase from './components/ProductShowcase';
import SectionHeading from './components/SectionHeading';
import Button from './components/Button';
import { businessInfo } from './data/businessInfo';
import { faqs } from './data/faqs';
import { getWhatsAppLink } from './utils/whatsapp';

function App() {
  const [openFaqId, setOpenFaqId] = useState(faqs[0]?.id ?? null);
  const primaryWhatsAppUrl = getWhatsAppLink('Hello M.&.G Integrated Biz Hub, I have an inquiry.');

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: businessInfo.name,
    url: 'https://m-g-integrated-biz-hub.vercel.app',
    description:
      'M.&.G Integrated Biz Hub in Kuje, Abuja provides IT and digital services, computer and phone support, JAMB/WAEC CBT practice, POS services, fashion and sewing, farm products, and general merchandise.',
    email: businessInfo.contact.email,
    telephone: businessInfo.contact.allPhones,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Dafara Junction, Beside Dafara Mosque',
      addressLocality: 'Kuje',
      addressRegion: 'Abuja',
      addressCountry: 'NG',
    },
    areaServed: 'Kuje, Abuja, Nigeria',
    openingHours: ['Mo-Sa 08:00-18:00'],
    priceRange: 'N/A',
  };

  const toggleFaq = (faqId) => {
    setOpenFaqId((current) => (current === faqId ? null : faqId));
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <div className="min-h-screen flex flex-col bg-[var(--color-brand-bg)] text-[var(--color-brand-slate)] font-sans antialiased">
        <Navbar />

        <main className="flex-grow">
          {/* Stage 3A: Hero Section */}
          <HeroSection />

          <ServicesSection />
          <WhyChooseUs />
          <FeaturedServices />

          <ProductShowcase />

          <section id="faq" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
            <SectionHeading
              badgeText="Got Questions?"
              title="Frequently Asked Questions"
              subtitle="Verified answers to common inquiries about our Kuje business operations."
            />
            <div className="mt-8 space-y-4 max-w-3xl">
              {faqs.map((faq) => {
                const isExpanded = openFaqId === faq.id;
                const answerId = `faq-answer-${faq.id}`;

                return (
                  <div key={faq.id} className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 p-4 sm:p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-emerald)] focus-visible:ring-inset"
                      aria-expanded={isExpanded}
                      aria-controls={answerId}
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <span className="text-base sm:text-lg font-bold text-[var(--color-brand-slate)]">{faq.question}</span>
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-bold text-slate-700">
                        {isExpanded ? '−' : '+'}
                      </span>
                    </button>
                    {isExpanded && (
                      <div id={answerId} className="border-t border-slate-200 bg-slate-50 p-4 sm:p-5">
                        <p className="text-[0.95rem] leading-7 text-slate-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          <section id="contact" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <SectionHeading
              badgeText="Find Us"
              title="Location &amp; Contact"
              subtitle="Visit our hub in Kuje or reach out via phone, email, or WhatsApp."
            />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4 shadow-sm">
                <h3 className="text-xl font-bold text-[var(--color-brand-slate)]">Hub Address</h3>
                <p className="text-[0.95rem] leading-7 text-slate-700">{businessInfo.location.address}</p>
                <h4 className="text-base font-bold text-[var(--color-brand-emerald)]">Business Hours</h4>
                <p className="text-[0.95rem] leading-7 text-slate-600">{businessInfo.hours.summary}</p>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4 shadow-sm">
                <h3 className="text-xl font-bold text-[var(--color-brand-slate)]">Direct Contacts</h3>
                <ul className="space-y-3 text-[0.95rem] text-slate-700">
                  <li>
                    <strong>Primary WhatsApp:</strong>{' '}
                    <a href={`tel:${businessInfo.contact.primaryWhatsApp}`} className="text-[var(--color-brand-emerald)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-emerald)] rounded-sm">{businessInfo.contact.primaryWhatsApp}</a>
                  </li>
                  <li>
                    <strong>Other Phones:</strong>{' '}
                    {businessInfo.contact.secondaryPhones.map((phone, index) => (
                      <span key={phone}>
                        {index > 0 && ', '}
                        <a href={`tel:${phone}`} className="text-[var(--color-brand-emerald)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-emerald)] rounded-sm">{phone}</a>
                      </span>
                    ))}
                  </li>
                  <li>
                    <strong>Email:</strong>{' '}
                    <a href={`mailto:${businessInfo.contact.email.replace('&', '%26')}`} className="text-[var(--color-brand-emerald)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-emerald)] rounded-sm">{businessInfo.contact.email}</a>
                  </li>
                </ul>
                <div className="pt-2">
                  <Button href={primaryWhatsAppUrl} variant="whatsapp" size="md" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    Message on WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppFAB />
      </div>
    </>
  );
}

export default App;