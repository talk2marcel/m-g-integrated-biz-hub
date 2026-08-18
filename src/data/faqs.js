/**
 * Verified Frequently Asked Questions for M.&.G Integrated Biz Hub
 */

import { businessInfo } from './businessInfo';

export const faqs = [
  {
    id: 'faq-location',
    question: 'Where is M.&.G Integrated Biz Hub located?',
    answer: `We are located at ${businessInfo.location.address}.`,
  },
  {
    id: 'faq-hours',
    question: 'What are your official business operating hours?',
    answer: `${businessInfo.hours.weekdays}. We are closed on Sundays.`,
  },
  {
    id: 'faq-contact',
    question: 'How can I contact M.&.G Integrated Biz Hub directly?',
    answer: `You can reach us via WhatsApp or Phone at ${businessInfo.contact.primaryWhatsApp}, or via our secondary phone lines (${businessInfo.contact.secondaryPhones.join(', ')}), or email us at ${businessInfo.contact.email}.`,
  },
  {
    id: 'faq-services',
    question: 'What range of products and services do you offer?',
    answer: 'M.&.G Integrated Biz Hub offers IT & Technology services, Computer sales & accessories, AI & digital services, JAMB/WAEC CBT practice facilities, POS financial services, CoopSave cooperative thrift platform, phone repairs & accessories, fashion & sewing, farm & food products, and general merchandise.',
  },
  {
    id: 'faq-cbt-details',
    question: 'How do I register or participate in JAMB / WAEC CBT practice?',
    answer: 'You can visit our hub in Kuje during business hours or message us on WhatsApp to inquire about CBT practice session schedules and registration guidance. [Pricing and specific session timetable details to be confirmed].',
  },
  {
    id: 'faq-repair-pricing',
    question: 'What are the charges for phone repair or computer maintenance?',
    answer: 'Service charges depend on the specific hardware repair or software service required. Please visit our store or contact us on WhatsApp for an assessment and inquiry. [Specific service price list to be confirmed].',
  },
];

export default faqs;
