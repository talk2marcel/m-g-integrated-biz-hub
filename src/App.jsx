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
  const primaryWhatsAppUrl = getWhatsAppLink('Hello M.&.G Integrated Biz Hub, I have an inquiry.');

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-brand-bg)] text-[var(--color-brand-slate)] font-sans antialiased">
      <Navbar />

      <main className="flex-grow">
        {/* Stage 3A: Hero Section */}
        <HeroSection />

        <ServicesSection />
        <WhyChooseUs />
        <FeaturedServices />

        <ProductShowcase />

        {/* 6. FAQ Section Skeleton */}
        <section id="faq" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
          <SectionHeading
            badgeText="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Verified answers to common inquiries about our Kuje business operations."
          />
          <div className="mt-8 space-y-4 max-w-3xl">
            {faqs.map((faq) => (
              <div key={faq.id} className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                <h3 className="font-bold text-sm text-[var(--color-brand-slate)]">{faq.question}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Location & Contact Section Skeleton */}
        <section id="contact" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <SectionHeading
            badgeText="Find Us"
            title="Location &amp; Contact"
            subtitle="Visit our hub in Kuje or reach out via phone, email, or WhatsApp."
          />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl border border-slate-200 space-y-4">
              <h3 className="font-bold text-lg text-[var(--color-brand-slate)]">Hub Address</h3>
              <p className="text-sm text-slate-700">{businessInfo.location.address}</p>
              <h4 className="font-bold text-sm text-[var(--color-brand-emerald)]">Business Hours</h4>
              <p className="text-xs text-slate-600">{businessInfo.hours.summary}</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200 space-y-4">
              <h3 className="font-bold text-lg text-[var(--color-brand-slate)]">Direct Contacts</h3>
              <ul className="text-sm space-y-2 text-slate-700">
                <li><strong>Primary WhatsApp:</strong> {businessInfo.contact.primaryWhatsApp}</li>
                <li><strong>Other Phones:</strong> {businessInfo.contact.secondaryPhones.join(', ')}</li>
                <li><strong>Email:</strong> {businessInfo.contact.email}</li>
              </ul>
              <div className="pt-2">
                <Button href={primaryWhatsAppUrl} variant="whatsapp" size="sm" target="_blank" rel="noopener noreferrer">
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
  );
}

export default App;