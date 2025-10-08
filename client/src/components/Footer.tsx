import { Heart, Mail, Instagram, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Our Story", href: "#story" },
    { label: "RSVP", href: "#rsvp" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-script text-3xl text-primary mb-4">Y & A</h3>
            <p className="text-muted-foreground leading-relaxed">
              Join us as we celebrate our love and commitment to each other on our special day.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-serif text-lg font-bold text-foreground mb-4">Stay Connected</h4>
            <div className="space-y-4">
              <a
                href="mailto:wedding@example.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="footer-email"
              >
                <Mail className="w-5 h-5" />
                <span>wedding@example.com</span>
              </a>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted hover-elevate flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted hover-elevate flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center space-y-2">
          <p className="text-muted-foreground">
            © {currentYear} Yemisi & Abisoye. All rights reserved.
          </p>
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-primary fill-current" /> for our special day
          </p>
        </div>
      </div>
    </footer>
  );
}
