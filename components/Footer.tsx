import { MessageCircle, Linkedin, Twitter } from 'lucide-react';

const footerLinks = {
  Produit: [
    { label: 'Fonctionnalités', href: '#features' },
    { label: 'Cas d\'usage', href: '#use-cases' },
    { label: 'Tarifs', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  Solutions: [
    { label: 'Expérience Client (CX)', href: '#use-cases' },
    { label: 'Supply Chain', href: '#use-cases' },
    { label: 'E-commerce', href: '#use-cases' },
    { label: 'Services B2B', href: '#use-cases' },
  ],
  Entreprise: [
    { label: 'À propos', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Carrières', href: '#' },
    { label: 'Contact', href: '#demo' },
  ],
  Légal: [
    { label: 'Mentions légales', href: '#' },
    { label: 'Politique de confidentialité', href: '#' },
    { label: 'CGV', href: '#' },
    { label: 'RGPD', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-happi-dark text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-happi-blue to-happi-green rounded-lg flex items-center justify-center">
                <MessageCircle className="text-white" size={22} />
              </div>
              <span className="text-2xl font-bold">
                H'<span className="text-happi-blue">appi</span>
              </span>
            </a>
            <p className="text-gray-400 leading-relaxed mb-6">
              Des chatbots intelligents qui évoluent avec votre entreprise.
              L'IA doit augmenter l'humain, pas le remplacer.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-happi-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-happi-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} H'appi. Tous droits réservés.
            Made in France.
          </p>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span className="w-2 h-2 bg-happi-green rounded-full" />
            <span>Données hébergées en France - Conforme RGPD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
