export interface NavLink {
  label: string;
  href: string;
}

export const APP_LINKS = {
  whatsapp: 'https://wa.me/5511972552959',
  email: 'mailto:nutri.leticiafregona@gmail.com',
  instagram: 'https://instagram.com/nutri.leticiafregona',
  linkedin: 'https://www.linkedin.com/in/leticiafhmoraes',
  contactEmail: 'nutri.leticiafregona@gmail.com',
  contactPhone: '+55 11 97255-2959',
  navLinks: [
    { label: 'Início', href: '#top' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Trajetória', href: '#trajetoria' },
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#cta-final' }
  ]
};
