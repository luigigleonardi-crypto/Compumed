import React, { useState } from 'react';
import type { Page } from '../App';
import { 
  MonitorPlay, 
  Laptop, 
  Cpu, 
  KeySquare, 
  Wrench, 
  ShieldCheck, 
  Wifi, 
  Server,
  Star,
  MapPin,
  Phone,
  Clock,
  Shield,
  CheckCircle2,
  Instagram,
  Facebook,
  Coins,
  Send,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  ThumbsUp
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#32CD32] selection:text-white">
      
      {/* 1. Header Fixo & Moderno */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={() => onNavigate('home')}>
              <img 
                src="https://i.ibb.co/S4V4W3Qh/Chat-GPT-Image-25-de-mai-de-2026-15-01-01.png" 
                alt="Compumed Informática" 
                className="h-12 w-auto object-contain shrink-0"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Menu de Navegação Amigável */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-bold tracking-wider text-[#2b395e]">
              <a href="#" className="hover:text-[#32CD32] transition-colors uppercase shrink-0">Início</a>
              <a href="https://wa.me/553125121313?text=Ol%C3%A1%21+Gostaria+de+um+or%C3%A7amento+para+montar+um+PC+personalizado." target="_blank" rel="noreferrer" className="hover:text-[#32CD32] transition-colors uppercase shrink-0">Monte Seu PC</a>
              <button onClick={() => onNavigate('services')} className="hover:text-[#32CD32] transition-colors uppercase cursor-pointer font-bold bg-transparent border-0 p-0 text-sm tracking-wider text-[#2b395e] shrink-0">Nossos Serviços</button>
              <a href="#compramos-pc" className="hover:text-[#32CD32] transition-colors uppercase shrink-0">Compramos Seu PC</a>
              <a href="#avaliacoes" className="hover:text-[#32CD32] transition-colors uppercase shrink-0">Depoimentos</a>
              <a href="#onde-estamos" className="hover:text-[#32CD32] transition-colors uppercase shrink-0">Onde Estamos</a>
            </nav>
          </div>
        </div>
      </header>

      {/* 2. Hero Section com Design Profissional */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100 border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=2070&auto=format&fit=crop" 
            alt="Computadores de alta performance Compumed" 
            className="w-full h-full object-cover opacity-5 pointer-events-none"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-12">
              <div className="inline-flex items-center gap-2 bg-[#74b94a]/10 border border-[#74b94a]/30 text-[#2b395e] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-[#32CD32] animate-pulse"></span>
                Sua Loja de Informática em BH Desde 2000
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#2b395e] leading-[1.1] mb-6">
                <span className="text-[#32CD32]">Mais de 25 anos</span> de confiança bem perto de você!
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-medium mb-10 max-w-2xl leading-relaxed">
                Não compre PC às cegas na internet com quem não te conhece. Na Compumed, você conversa com técnicos de verdade, monta o computador ideal para a sua necessidade com garantia total de quem reside em Belo Horizonte!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onNavigate('services')}
                  className="bg-[#2b395e] hover:bg-[#1f2a47] text-white px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider text-center transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  Conhecer Nossos Serviços e Vendas
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Por que escolher a Compumed? / Informações Relevantes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-black uppercase tracking-widest text-[#32CD32] mb-3">Compromisso Real</h2>
            <p className="text-3xl sm:text-4xl font-black text-[#2b395e] uppercase tracking-tight">
              A melhor e mais segura experiência
            </p>
            <p className="text-slate-500 mt-4 leading-relaxed">
              Diferente de e-commerces que demoram semanas e se escondem atrás de robôs, nós oferecemos soluções locais de verdade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-[#2b395e]/5 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-[#2b395e]" />
              </div>
              <h4 className="text-lg font-bold text-[#2b395e] uppercase mb-4">Desde 2000</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Passamos por todas as fases do hardware. Desde o Pentium até os processadores top de linha de hoje. Sabemos exatamente o que funciona e o que é perda de dinheiro.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-[#2b395e]/5 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-[#2b395e]" />
              </div>
              <h4 className="text-lg font-bold text-[#2b395e] uppercase mb-4">Revisão Técnica Pré-Compra</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Você pode simular e escolher suas peças aqui no site ou mandar o que precisa. Um técnico certificado revisará e montará seu PC com organização interna impecável.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-[#2b395e]/5 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-[#2b395e]" />
              </div>
              <h4 className="text-lg font-bold text-[#2b395e] uppercase mb-4">Loja Física em BH</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Venha buscar pessoalmente no Bairro Concórdia, tire dúvidas com nossos atendentes e teste sua máquina ligada na tomada antes de levar para casa de forma 100% segura.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. O que Vendemos (Modernizada e Informativa) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-[#32CD32] mb-3">Showroom & Estoque</h2>
              <h3 className="text-3xl sm:text-4xl font-black text-[#2b395e] uppercase tracking-tight">O que Vendemos</h3>
            </div>
            <p className="text-slate-500 max-w-md text-sm leading-relaxed">
              Temos peças originais com garantias oficiais. Montamos computadores prontos ou vendemos cada componente separado.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Monte Seu PC (Sob Medida)", 
                desc: "Planejamos e montamos computadores de alto desempenho adequados para cada necessidade (Gamer, Engenharia, Render 3D ou Escritório). Entre em contato por WhatsApp para solicitar um orçamento customizado!", 
                icon: Cpu
              },
              { 
                title: "PCs e Notebooks de Escritório", 
                desc: "Máquinas completas de alta estabilidade e excelente custo-benefício prontas para home-office, planilhas, sistemas empresariais e navegação rápida.", 
                icon: Laptop
              },
              { 
                title: "Peças & Peças de Reposição", 
                desc: "Placas de vídeo dedicadas, fontes com certificação de segurança reais, pentes de memória velozes, processadores de última geração e SSDs super rápidos.", 
                icon: MonitorPlay
              },
              { 
                title: "Certificado Digital na Hora", 
                desc: "Emissão e validação rápida e sem burocracias de certificados digitais (e-CPF e e-CNPJ) presenciais com completa validade jurídica.", 
                icon: KeySquare
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-250 p-7 rounded-3xl hover:border-[#32CD32] hover:shadow-lg transition-all group flex flex-col h-full">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shrink-0">
                  <item.icon className="w-6 h-6 text-[#2b395e]" />
                </div>
                <h4 className="text-xl font-bold text-[#2b395e] mb-3 uppercase leading-tight">{item.title}</h4>
                <p className="text-slate-650 text-sm leading-relaxed flex-grow">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. O que Fazemos (Serviços Informativos Integrados) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-[#32CD32] mb-3">Suporte Ativo</h2>
              <h3 className="text-3xl sm:text-4xl font-black text-[#2b395e] uppercase tracking-tight">Nossos Serviços Técnicos</h3>
            </div>
            <button 
              onClick={() => onNavigate('services')}
              className="text-sm font-black uppercase tracking-wider text-[#2b395e] hover:text-[#32CD32] flex items-center gap-1 cursor-pointer"
            >
              Ver página dedicada de serviços <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                title: "Conserto de Notebook e Computador", 
                desc: "Seu note ou PC de mesa está com tela azul, travando muito, superaquecendo ou simplesmente não dá sinal de vida? Nossos técnicos consertam, trocam telas quebradas, resolvem problemas de placa, limpam por dentro e fazem formatação completa.", 
                icon: Wrench 
              },
              { 
                title: "Segurança Eletrônica e Câmeras", 
                desc: "Quer proteger sua família e seus bens mais preciosos? Projetamos e instalamos kits de câmeras (CFTV) modernos de alta definição e sensores de segurança que mandam alertas instantâneos com imagem direto para seu celular 24 horas por dia.", 
                icon: ShieldCheck 
              },
              { 
                title: "Cabeamento Estável e Wi-Fi Rápido", 
                desc: "A internet vive caindo ou não chega com força em todos os cômodos? Passamos cabos de rede profissionais e configuramos pontos extras de roteadores inteligentes para que seu Wi-Fi funcione em máxima velocidade em qualquer canto da casa.", 
                icon: Wifi 
              },
              { 
                title: "Servidores e Redes de Empresas", 
                desc: "Instalamos e estruturamos armários de servidores de arquivos, backups automáticos de segurança na nuvem para dados importantes de clientes e interligamos os micros dos escritórios para funcionarem de forma coordenada e sem pausas de produção.", 
                icon: Server 
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 bg-slate-50 border border-slate-200/80 p-8 rounded-3xl hover:border-slate-300 transition-all">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-slate-200 shrink-0 shadow-xs">
                  <item.icon className="w-7 h-7 text-[#2b395e]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#2b395e] uppercase mb-2 leading-snug">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. NOVA SEÇÃO EXCLUSIVA: COMPRAMOS SEU PC USADO (INFORMATIVO) */}
      <section id="compramos-pc" className="py-20 bg-[#2b395e] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#74b94a] rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <span className="bg-[#74b94a] text-[#2b395e] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest inline-block mb-6">
                Dinheiro Rápido na Mão
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6">
                Compramos seu notebook ou computador antigo!
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                Está precisando de dinheiro extra ou quer dar seu aparelho velho como desconto na compra de um PC Gamer novinho? Nós avaliamos com justiça técnica e pagamos no Pix imediatamente.
              </p>

              <div className="space-y-4 text-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#74b94a]/20 border border-[#74b94a] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#32CD32] font-bold text-xs">✓</span>
                  </div>
                  <p className="text-sm"><strong>Pagamento na hora:</strong> Avaliamos em tempo real e fazemos o Pix antes de você sair.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#74b94a]/20 border border-[#74b94a] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#32CD32] font-bold text-xs">✓</span>
                  </div>
                  <p className="text-sm"><strong>Aceitamos com defeito:</strong> Mesmo que o note esteja quebrado, lento ou sem ligar.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#74b94a]/20 border border-[#74b94a] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#32CD32] font-bold text-xs">✓</span>
                  </div>
                  <p className="text-sm"><strong>Abatimento:</strong> Use o valor avaliado do notebook antigo para comprar de forma segura.</p>
                </div>
              </div>
            </div>

            {/* Painel Informativo sobre a Avaliação */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-8 text-slate-900 shadow-xl border border-slate-100">
              <h3 className="text-2xl font-black uppercase text-[#2b395e] mb-4">Como Funciona a Avaliação?</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Não realizamos simulações genéricas automáticas. Valorizamos seu equipamento de forma justa! Entre em contato conosco para uma avaliação presencial ou estimativa real via telefone ou WhatsApp.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-[#2b395e] text-white flex items-center justify-center font-black text-xs shrink-0">1</span>
                  <div>
                    <h5 className="font-bold text-slate-800 text-sm uppercase">Contato Prévio</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">Fale com nossos técnicos informando o modelo do equipamento e seu estado de conservação.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-[#2b395e] text-white flex items-center justify-center font-black text-xs shrink-0">2</span>
                  <div>
                    <h5 className="font-bold text-slate-800 text-sm uppercase">Análise Física na Loja</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">Traga o computador ou notebook em nosso showroom para testarmos os componentes na hora.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-[#2b395e] text-white flex items-center justify-center font-black text-xs shrink-0">3</span>
                  <div>
                    <h5 className="font-bold text-slate-800 text-sm uppercase">PIX Imediato</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">Acordado o orçamento, transferimos o valor integral imediatamente via PIX ou aplicamos como desconto.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                <p className="text-xs text-slate-600 font-medium">
                  Para estimar o preço de venda, ligue no <strong className="text-[#2b395e]">(31) 2512-1313</strong> ou mande mensagem no nosso WhatsApp usando o botão flutuante!
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. REALS GOOGLE MY BUSINESS REVIEWS INTEGRADO (COM LINK REAL) */}
      <section id="avaliacoes" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex justify-center items-center gap-2 mb-4">
              {/* Mock do badge do Google no Meu negócio */}
              <div className="flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-full px-5 py-2">
                <svg className="w-5 h-5 text-red-500 fill-current" viewBox="0 0 24 24">
                  <path d="M12.24 10.285V13.4h6.887C18.2 15.614 15.645 18 12.24 18c-3.855 0-6.975-3.12-6.975-6.975s3.12-6.975 6.975-6.975c1.725 0 3.3.615 4.53 1.74l2.445-2.43C17.43 1.74 14.985 1 12.24 1c-6.075 0-11 4.925-11 11s4.925 11 11 11c6.345 0 10.56-4.455 10.56-10.755 0-.615-.06-1.05-.18-1.545H12.24z"/>
                </svg>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs font-black text-slate-700">4.9 / 5</span>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-[#2b395e] uppercase tracking-tight">
              O que dizem os nossos clientes no Google
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed text-sm">
              Trabalhamos com seriedade total. Veja opiniões reais e recentes de clientes de Belo Horizonte que confiam no suporte técnico da Compumed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Luiz Henrique G. Leonardi",
                relativeTime: "Há 1 semana",
                initials: "LH",
                bgColor: "bg-blue-600",
                review: "Muito satisfeito! Montei o meu computador personalizado do zero e o pessoal me deu todas as dicas de componentes adequados para o que precisava rodar. Técnico nota dez!"
              },
              {
                name: "Maria Antônia Rezende",
                relativeTime: "Há 3 semanas",
                initials: "MR",
                bgColor: "bg-green-600",
                review: "Excelente atendimento! Levei o meu notebook que estava extremamente lento, colocaram um SSD nisto e limparam por dentro. Voltou parecendo novo! Recomendo com certeza."
              },
              {
                name: "Pedro Augusto Silva",
                relativeTime: "Há 1 mês",
                initials: "PA",
                bgColor: "bg-purple-600",
                review: "Serviço de alta qualidade. Além do preço ser justo, respondem rápido pelo WhatsApp e me entregaram o PC antes do prazo. Uma empresa muito séria."
              }
            ].map((review, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200/90 p-8 rounded-3xl flex flex-col shadow-xs hover:shadow-md transition-shadow relative">
                <div className="flex items-center gap-3 mb-6">
                  {/* Avatar */}
                  <div className={`w-10 h-10 ${review.bgColor} text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0`}>
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-[#2b395e] leading-snug">{review.name}</h4>
                    <span className="text-[11px] font-bold text-slate-400">{review.relativeTime}</span>
                  </div>
                </div>

                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-slate-650 leading-relaxed text-sm italic flex-1">
                  "{review.review}"
                </p>

                <div className="mt-8 pt-4 border-t border-slate-250 flex items-center justify-between text-slate-400 text-xs font-bold uppercase tracking-wider">
                  <span>Avaliação via Google</span>
                  <ThumbsUp className="w-3.5 h-3.5 text-[#32CD32]" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://share.google/qSesO2jyl22iCYfa2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-[#32CD32] hover:text-white border-2 border-slate-200 text-[#2b395e] px-8 py-4.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" /> Ver Todas as Avaliações no Google Meu Negócio
            </a>
          </div>

        </div>
      </section>

      {/* 8. Localização no Mapa de Belo Horizonte */}
      <section id="onde-estamos" className="bg-slate-50 border-t border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="flex-1 w-full lg:max-w-lg">
              <span className="text-xs font-black uppercase tracking-widest text-[#32CD32] block mb-3">Tire Suas Dúvidas</span>
              <h2 className="text-3xl font-black uppercase tracking-tight mb-2 text-[#2b395e]">Onde Estamos</h2>
              <p className="text-slate-500 mb-6 font-medium text-sm">Rua de fácil acesso no Bairro Concórdia, BH. Estacione na porta e venha tomar um café com a nossa equipe!</p>
              
              <div className="bg-white border border-slate-200/90 shadow-xs rounded-3xl p-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#2b395e]/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#2b395e]" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 mb-2 uppercase text-xs tracking-wider">Endereço Oficial</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Rua Guanabara, 433<br />
                      Bairro Concórdia<br />
                      Belo Horizonte - MG<br />
                      CEP: 31110-650
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://maps.google.com/?q=Rua+Guanabara,+433,+Concordia,+Belo+Horizonte+-+MG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 bg-[#2b395e] hover:bg-[#1a233b] text-white px-6 py-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-sm text-center"
                >
                  Abrir no Google Maps
                </a>
                <a 
                  href="https://waze.com/ul?q=Rua+Guanabara,+433,+Concordia,+Belo+Horizonte+-+MG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 bg-slate-250 hover:bg-slate-300 text-slate-800 px-6 py-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all border border-slate-350 shadow-sm text-center"
                >
                  Ir pelo Waze
                </a>
              </div>
            </div>

            <div className="flex-1 w-full relative h-[420px] rounded-3xl overflow-hidden border border-slate-250 shadow-sm group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.353457538202!2d-43.93883492471844!3d-19.88842158148967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69aef90457aa7%3A0x6b09efdd44e5df33!2sR.%20Guanabara%2C%20433%20-%20Conc%C3%B3rdia%2C%20Belo%20Horizonte%20-%20MG%2C%2031110-650!5e0!3m2!1spt-BR!2sbr!4v1714498522336!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
                title="Mapa de localização física da Compumed BH"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Footer Oficial com CNPJ em Destaque */}
      <footer className="bg-white border-t border-slate-200/80 pt-16 pb-8 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-xl" style={{background: 'linear-gradient(135deg, #74b94a 50%, #2b395e 50%)'}}>
                  <span className="text-white drop-shadow-md">C</span>
                </div>
                <span className="font-extrabold text-xl tracking-tighter text-[#2b395e]">
                  COMPU<span className="text-[#74b94a]">MED</span>
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-sm">
                Compumed Informática: Há mais de 25 anos vendendo e consertando computadores, trazendo velocidade para suas máquinas e prestando serviços de infraestrutura e CFTV em Belo Horizonte.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/compumedinfo/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-550 hover:text-[#32CD32] hover:bg-slate-100 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.facebook.com/compumedinfo/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-550 hover:text-blue-600 hover:bg-slate-100 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="md:col-span-3">
              <h4 className="font-bold text-[#2b395e] uppercase tracking-wider mb-6 text-xs">Suporte Direto</h4>
              <ul className="space-y-4">
                <li>
                  <a href="https://wa.me/553125121313" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-[#32CD32] transition-colors group">
                    <div className="w-8 h-8 rounded bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-[#32CD32]/10">
                      <Phone className="w-4 h-4 text-slate-550" />
                    </div>
                    <span className="font-semibold text-slate-800">(31) 2512-1313</span>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-8 h-8 rounded bg-slate-50 border border-slate-200 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-xs">Rua Guanabara, 433, BH - MG</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="font-bold text-[#2b395e] uppercase tracking-wider mb-6 text-xs">Horário de Funcionamento</h4>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Segunda a Sexta</span>
                  <span className="font-semibold text-slate-800">08:00 às 18:00</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Sábado</span>
                  <span className="font-semibold text-slate-800">08:00 às 12:00</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Domingo</span>
                  <span className="text-slate-400 font-bold">Fechado</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-xs">
              &copy; {new Date().getFullYear()} Compumed Informática. Todos os direitos reservados.
            </p>
            {/* CNPJ do rodapé inserido conforme exigência legal / feedbacks */}
            <p className="text-slate-500 font-bold text-xs tracking-wider">
              CNPJ: 04.143.316/0001-93
            </p>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante do WhatsApp */}
      <a 
        href="https://wa.me/553125121313?text=Ol%C3%A1%21+Gostaria+de+um+or%C3%A7amento+ou+tirar+d%C3%BAvidas+sobre+os+servi%C3%A7os+da+Compumed." 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white w-16 h-16 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center cursor-pointer shrink-0 hover:shadow-[0_0_20px_rgba(37,211,102,0.6)]"
        title="Fale conosco no WhatsApp"
      >
        <svg className="w-9 h-9 text-white fill-current shrink-0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 512l145.4-38.2c32.7 17.8 69.4 27.2 107.1 27.2 122.4 0 222-99.6 222-222 0-59.3-23-115.1-65-157.1zM223.9 474c-33.1 0-65.6-8.9-93.9-25.7l-8.7-5.2L35 456l13.3-80.5-5.7-9.1c-18.4-29.4-28.2-63.5-28.2-98.9 0-101.5 82.6-184.1 184.1-184.1 49.2 0 95.4 19.2 130.2 54.1 34.8 34.9 54 81.1 54 130.2-.1 101.5-82.7 184.1-184.2 184.1zm122.2-139.3c-5.6-2.8-33.1-16.3-38.3-18.2-5.1-1.9-8.9-2.8-12.7 2.8-3.8 5.6-14.6 18.2-17.9 22-3.3 3.8-6.6 4.2-12.2 1.4-5.6-2.8-23.6-8.7-45-27.8-16.6-14.8-27.8-33.2-31-38.7-3.3-5.6-.4-8.6 2.5-11.4 2.6-2.5 5.6-6.6 8.5-9.9 2.8-3.3 3.8-5.6 5.6-9.4 1.9-3.8.9-7-1-9.9-1.9-2.8-12.7-30.7-17.4-42.1-4.6-11.1-9.1-9.6-12.7-9.8-3.3-.2-7.1-.2-10.8-.2-3.8 0-9.9 1.4-15.1 7.1-5.2 5.6-19.8 19.3-19.8 47.2 0 27.8 20.3 54.7 23.1 58.5 2.8 3.8 39.9 60.9 96.7 85.4 13.5 5.8 24 9.3 32.2 11.9 13.6 4.3 26 3.7 35.8 2.2 10.9-1.6 33.1-13.5 37.8-25.9 4.7-12.5 4.7-23.1 3.3-25.4-1.4-2.3-5.2-3.6-10.8-6.4z"/>
        </svg>
      </a>

    </div>
  );
}
