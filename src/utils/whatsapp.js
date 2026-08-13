/**
 * Utility functions for WhatsApp links and messaging.
 * Primary business WhatsApp: 08033400330 (Nigeria international format: 2348033400330)
 */

export const PRIMARY_WHATSAPP_NUMBER = '08033400330';
export const WHATSAPP_INTL_NUMBER = '2348033400330';

/**
 * Generates a wa.me URL with optional pre-filled message text.
 * @param {string} [message] - Optional message text to pre-fill.
 * @param {string} [phone] - Optional phone number override (defaults to primary).
 * @returns {string} - The encoded WhatsApp URL.
 */
export function getWhatsAppLink(message = '', phone = WHATSAPP_INTL_NUMBER) {
  const sanitizedPhone = phone.replace(/[^0-9]/g, '');
  if (!message || message.trim() === '') {
    return `https://wa.me/${sanitizedPhone}`;
  }
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${sanitizedPhone}?text=${encodedText}`;
}

/**
 * Formats a local phone number string for display.
 * @param {string} phone 
 * @returns {string}
 */
export function formatPhoneNumber(phone) {
  return phone || '';
}
