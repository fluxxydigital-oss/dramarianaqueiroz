import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Instagram, Heart, Scale, Users, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useInView } from "@/hooks/useInView";

/**
 * Design: Elegância Contemporânea com Gradientes Sutis
 * Paleta: Azul-marinho (#1A365D) + Roxo-cinzento (#7C6B8F) + Coral (#E8847B)
 * Tipografia: Cormorant Garamond (títulos) + Poppins (corpo)
 */

function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="sobre" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031048628/T7WXWMr2Ty8jpv2apaA9qA/accessibility-illustration-KAdBUCLH6CxDYagezgsETX.webp"
              alt="Inclusão e Acessibilidade"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-block bg-[#E8847B] bg-opacity-10 text-[#E8847B] px-4 py-2 rounded-full text-sm font-semibold">
              Sobre Mim
            </div>
            <h2 className="text-4xl font-bold text-[#1A365D]">
              Advocacia com Humanidade
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Sou uma advogada dedicada a defender os direitos das pessoas com Transtorno do Espectro Autista (TEA) e Deficiência. Minha missão é tornar a justiça acessível e compreensível para todos, independentemente de suas limitações.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Com uma abordagem humanitária e simples, ajudo meus clientes a conquistar seus direitos sem complicações desnecessárias. Acredito que a advocacia deve ser um instrumento de inclusão e empoderamento.
            </p>
            <div className="pt-4 space-y-3">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-[#E8847B] mt-1 flex-shrink-0" />
                <span className="text-gray-700">Especializada em Direito das Pessoas com TEA e Deficiência</span>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-[#E8847B] mt-1 flex-shrink-0" />
                <span className="text-gray-700">Atendimento humanitário e acolhedor</span>
              </div>
              <div className="flex items-start gap-3">
                <Scale className="w-5 h-5 text-[#E8847B] mt-1 flex-shrink-0" />
                <span className="text-gray-700">Defesa rigorosa dos seus direitos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-[#F8F7FB] to-[#E8E4EF]" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block bg-[#E8847B] bg-opacity-10 text-[#E8847B] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Serviços
          </div>
          <h2 className="text-4xl font-bold text-[#1A365D] mb-4">
            Como Posso Ajudar Você
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Ofereço uma gama completa de serviços jurídicos especializados para pessoas com TEA e Deficiência
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          {[
            {
              title: "Consultoria Jurídica",
              description: "Orientação especializada sobre seus direitos e as melhores estratégias para protegê-los.",
              icon: "⚖️"
            },
            {
              title: "Benefícios Previdenciários",
              description: "Auxílio na solicitação e defesa de benefícios como auxílio-doença, aposentadoria e BPC.",
              icon: "💼"
            },
            {
              title: "Inclusão e Acessibilidade",
              description: "Ações para garantir seus direitos de inclusão em educação, trabalho e espaços públicos.",
              icon: "🤝"
            },
            {
              title: "Representação Processual",
              description: "Defesa rigorosa em processos judiciais relacionados aos seus direitos.",
              icon: "📋"
            },
            {
              title: "Documentação e Registro",
              description: "Auxílio com documentação oficial e registro de deficiência quando necessário.",
              icon: "📄"
            },
            {
              title: "Mediação e Negociação",
              description: "Resolução de conflitos de forma humanitária e eficiente.",
              icon: "🕊️"
            }
          ].map((service, index) => (
            <Card key={index} className="bg-white border border-[#D4C5DD] hover:shadow-lg transition-all duration-300 p-6">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#1A365D] mb-3">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 bg-gradient-to-r from-[#1A365D] to-[#7C6B8F] text-white relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031048628/T7WXWMr2Ty8jpv2apaA9qA/consultation-background-WBtGugLKT5ooetH9mhsAnT.webp"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className={`container mx-auto px-4 relative z-10 text-center transition-all duration-1000 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-4xl font-bold mb-6">
          Pronto para Conquistar Seus Direitos?
        </h2>
        <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
          Agende uma consulta conosco e descubra como podemos ajudar você a alcançar seus objetivos jurídicos.
        </p>
        <a
          href="https://wa.me/5521992436191?text=Olá%20Dra.%20Mariana,%20gostaria%20de%20agendar%20uma%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#E8847B] hover:bg-[#D97068] text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg"
        >
          Agendar Consulta Agora
        </a>
      </div>
    </section>
  );
}

function ContactSection() {
  const { ref, isInView } = useInView();
  const { ref: ref2, isInView: isInView2 } = useInView();

  return (
    <section id="contato" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block bg-[#E8847B] bg-opacity-10 text-[#E8847B] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Contato
          </div>
          <h2 className="text-4xl font-bold text-[#1A365D] mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Estou aqui para responder suas dúvidas e ajudar você
          </p>
        </div>

        <div ref={ref2} className={`grid md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 ${isInView2 ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          {/* WhatsApp */}
          <a
            href="https://wa.me/5521992436191"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F8F7FB] border border-[#D4C5DD] rounded-lg p-6 md:p-8 text-center hover:shadow-lg transition-all duration-300 hover:border-[#E8847B]"
          >
            <Phone className="w-12 h-12 text-[#E8847B] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#1A365D] mb-2">WhatsApp</h3>
            <p className="text-gray-700 mb-4">(21) 99243-6191</p>
            <span className="text-[#E8847B] font-semibold hover:underline">Enviar mensagem</span>
          </a>

          {/* Email */}
          <a
            href="mailto:adv.marianamqueiroz@gmail.com"
            className="bg-[#F8F7FB] border border-[#D4C5DD] rounded-lg p-6 md:p-8 text-center hover:shadow-lg transition-all duration-300 hover:border-[#E8847B]"
          >
            <Mail className="w-12 h-12 text-[#E8847B] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#1A365D] mb-2">Email</h3>
            <p className="text-gray-700 mb-4 break-all">adv.marianamqueiroz@gmail.com</p>
            <span className="text-[#E8847B] font-semibold hover:underline">Enviar email</span>
          </a>

          {/* Location */}
          <a
            href="https://maps.google.com/?q=R.+Barão+de+Mesquita,+314,+Tijuca,+Rio+de+Janeiro"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F8F7FB] border border-[#D4C5DD] rounded-lg p-6 md:p-8 text-center hover:shadow-lg transition-all duration-300 hover:border-[#E8847B]"
          >
            <MapPin className="w-12 h-12 text-[#E8847B] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#1A365D] mb-2">Localização</h3>
            <p className="text-gray-700 mb-4">Tijuca, Rio de Janeiro - RJ</p>
            <span className="text-[#E8847B] font-semibold hover:underline">Ver no mapa</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="text-center mt-16 pt-8 border-t border-[#D4C5DD]">
          <p className="text-gray-700 mb-6">Siga-me nas redes sociais</p>
          <a
            href="https://www.instagram.com/marianaadvqueiroz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1A365D] to-[#E8847B] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
            @marianaadvqueiroz
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#1A365D]">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Logo Dra. Mariana Queiroz"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollToSection("sobre")} className="text-[#1A365D] hover:text-[#E8847B] transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection("servicos")} className="text-[#1A365D] hover:text-[#E8847B] transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection("contato")} className="text-[#1A365D] hover:text-[#E8847B] transition-colors">
              Contato
            </button>
            <a href="https://www.instagram.com/marianaadvqueiroz/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 text-[#E8847B] hover:text-[#1A365D] transition-colors" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#D4C5DD] p-4 space-y-3">
            <button onClick={() => scrollToSection("sobre")} className="block w-full text-left text-[#1A365D] hover:text-[#E8847B] py-2">
              Sobre
            </button>
            <button onClick={() => scrollToSection("servicos")} className="block w-full text-left text-[#1A365D] hover:text-[#E8847B] py-2">
              Serviços
            </button>
            <button onClick={() => scrollToSection("contato")} className="block w-full text-left text-[#1A365D] hover:text-[#E8847B] py-2">
              Contato
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A365D] via-[#2D4A7B] to-[#7C6B8F] text-white py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8847B] opacity-10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8847B] opacity-10 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="inline-block bg-[#E8847B] bg-opacity-20 text-[#E8847B] px-4 py-2 rounded-full text-sm font-semibold">
                Advocacia Especializada
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Seus Direitos, Nossa Missão
              </h1>
              <p className="text-lg text-gray-100 leading-relaxed">
                Advogada especialista em Direito das Pessoas com Transtorno do Espectro Autista e Deficiência. Ajudamos você a conquistar seus direitos de forma humanitária e simples.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://wa.me/5521992436191?text=Olá%20Dra.%20Mariana,%20gostaria%20de%20agendar%20uma%20consulta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#E8847B] hover:bg-[#D97068] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg"
                >
                  Agendar Consulta
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1A365D] px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Saiba Mais
                </button>
              </div>
            </div>

            {/* Hero Photo */}
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#E8847B] opacity-20 rounded-full blur-2xl"></div>
                <img
                  src="/hero.png"
                  alt="Dra. Mariana Queiroz - Advogada Especializada"
                  className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover border-4 border-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* CTA Section */}
      <CTASection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-[#1A365D] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/logo.png"
                  alt="Logo Dra. Mariana Queiroz"
                  className="h-8 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-gray-300 text-sm">Advocacia especializada em Direito das Pessoas com TEA e Deficiência.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#E8847B]">Menu</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><button onClick={() => scrollToSection("sobre")} className="hover:text-[#E8847B] transition-colors">Sobre</button></li>
                <li><button onClick={() => scrollToSection("servicos")} className="hover:text-[#E8847B] transition-colors">Serviços</button></li>
                <li><button onClick={() => scrollToSection("contato")} className="hover:text-[#E8847B] transition-colors">Contato</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#E8847B]">Contato</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="https://wa.me/5521992436191" target="_blank" rel="noopener noreferrer" className="hover:text-[#E8847B] transition-colors">(21) 99243-6191</a></li>
                <li><a href="mailto:adv.marianamqueiroz@gmail.com" className="hover:text-[#E8847B] transition-colors break-all">adv.marianamqueiroz@gmail.com</a></li>
                <li className="text-gray-400">Tijuca, Rio de Janeiro</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#E8847B]">Redes Sociais</h4>
              <a href="https://www.instagram.com/marianaadvqueiroz/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-300 hover:text-[#E8847B] transition-colors">
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Dra. Mariana Queiroz - Advocacia Especializada. Todos os direitos reservados.</p>
            <p className="mt-2">OAB/RJ - Especialista em Direito das Pessoas com TEA e Deficiência</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
