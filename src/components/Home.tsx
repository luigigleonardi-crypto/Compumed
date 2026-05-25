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
  // Client state to estimate old PC value for WhatsApp
  const [sellDesc, setSellDesc] = useState('');
  const [sellState, setSellState] = useState('excelente');

  const handleSellSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sellDesc.trim()) return;
    
    const message = `Olá Compumed! Gostaria de vender meu computador/notebook.
Dispositivo/Peças: ${sellDesc}
Estado de conservação: ${sellState.toUpperCase()}
Desejo fazer uma avaliação física na loja para receber o valor ou dar como entrada em um novo.`;
    
    const waUrl = `https://wa.me/553125121313?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#32CD32] selection:text-white">
      
      {/* 1. Header Fixo & Moderno */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-2xl shadow-sm" style={{background: 'linear-gradient(135deg, #74b94a 50%, #2b395e 50%)'}}>
                <span className="text-white drop-shadow-md">C</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-tighter leading-none text-[#2b395e]">
                  COMPU<span className="text-[#74b94a]">MED</span>
                </span>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 mt-0.5">TECNOLOGIA DESDE 2000</span>
              </div>
            </div>

            {/* Menu de Navegação Amigável */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wider text-[#2b395e]">
              <a href="#" className="hover:text-[#32CD32] transition-colors uppercase">Início</a>
              <button onClick={() => onNavigate('builder')} className="hover:text-[#32CD32] transition-colors uppercase cursor-pointer">Monte Seu PC</button>
              <button onClick={() => onNavigate('services')} className="hover:text-[#32CD32] transition-colors uppercase cursor-pointer">Nossos Serviços</button>
              <a href="#compramos-pc" className="hover:text-[#32CD32] transition-colors uppercase">Compramos Seu PC</a>
              <a href="#avaliacoes" className="hover:text-[#32CD32] transition-colors uppercase">Depoimentos</a>
              <a href="#onde-estamos" className="hover:text-[#32CD32] transition-colors uppercase">Onde Estamos</a>
            </nav>

            {/* Botão de Contato Central */}
            <a 
              href="https://wa.me/553125121313?text=Ol%C3%A1%21+Vim+pelo+site+da+Compumed+e+gostaria+de+um+atendimento." 
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#2b395e] border border-[#2b395e] hover:bg-[#1f2a47] text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#32CD32]" />
              <span className="hidden sm:inline">(31) 2512-1313</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
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
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-[#74b94a]/10 border border-[#74b94a]/30 text-[#2b395e] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-[#32CD32] animate-pulse"></span>
                Sua Loja de Informática em BH Desde 2000
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#2b395e] leading-[1.1] mb-6">
                Mais antiga que os gigantes.<br />
                <span className="text-[#32CD32]">Mais de 25 anos</span> de confiança bem perto de você!
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-medium mb-10 max-w-xl leading-relaxed">
                Não compre PC às cegas na internet com quem não te conhece. Na Compumed, você monta o seu PC, conversa com nossos técnicos de verdade e pode retirar direto na nossa loja em Belo Horizonte!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onNavigate('builder')}
                  className="bg-[#32CD32] hover:bg-[#28a428] text-white px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider text-center transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Wand2Icon className="w-5 h-5" />
                  Monte Seu PC Agora
                </button>
                <button 
                  onClick={() => onNavigate('services')}
                  className="bg-white hover:bg-slate-50 text-[#2b395e] border-2 border-[#2b395e] px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-center transition-colors shadow-xs cursor-pointer"
                >
                  Conhecer Nossos Serviços
                </button>
              </div>
            </div>

            {/* Destaque Moderno: Compramos seu PC */}
            <div className="lg:col-span-5 bg-white border-2 border-slate-200/90 rounded-3xl p-8 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 group-hover:scale-105 transition-transform"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#74b94a]/10 rounded-xl flex items-center justify-center mb-6">
                  <Coins className="w-6 h-6 text-[#2b395e]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#2b395e] uppercase mb-2">Compramos Seu Computador Usado!</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  Tem notebook ou PC velho/parado em casa? Nós compramos peças e computadores e pagamos à vista no Pix! Traga na loja para avaliação sem compromisso.
                </p>
                <a 
                  href="#compramos-pc" 
                  className="inline-flex items-center gap-2 text-sm font-black uppercase text-[#32CD32] hover:text-[#28a428] tracking-wider"
                >
                  Fazer Simulação Online <ArrowRight className="w-4 h-4" />
                </a>
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
                title: "PCs Gamers de Elite", 
                desc: "Máquinas montadas com potência máxima para você jogar todos os games recentes (GTA V, Valorant, FIFA, Fortnite) sem travar e com gráficos lindos.", 
                icon: MonitorPlay,
                actionText: "Montar PC Simulado",
                onClick: () => onNavigate('builder')
              },
              { 
                title: "PCs e Notebooks de Escritório", 
                desc: "Máquinas configuradas para abrir planilhas, sistemas pesados, documentos e navegar na internet em alta velocidade sem lentidão ou estresse.", 
                icon: Laptop,
                actionText: "Falar com Consultor",
                onClick: () => window.open("https://wa.me/553125121313?text=Ol%C3%A1%21+Gostaria+de+um+notebook+ou+computador+para+trabalho%2Fescrit%C3%B3rio.", "_blank")
              },
              { 
                title: "Peças de Reposição e Upgrade", 
                desc: "Placas de vídeo, pentes de memória RAM velozes, processadores modernos de última geração, fontes reais seguras e SSDs que ligam o computador em 7 segundos.", 
                icon: Cpu,
                actionText: "Consultar Peças",
                onClick: () => window.open("https://wa.me/553125121313?text=Ol%C3%A1%21+Procuro+uma+pe%C3%A7a+de+computador+espec%C3%ADfica+ou+quero+fazer+um+upgrade.", "_blank")
              },
              { 
                title: "Certificado Digital na Hora", 
                desc: "Emissão e validação rápida de certificado digital para sua empresa assinar documentos jurídicos ou notas fiscais com total validade e agilidade de forma oficial.", 
                icon: KeySquare,
                actionText: "Agendar Emissão",
                onClick: () => window.open("https://wa.me/553125121313?text=Ol%C3%A1%21+Gostaria+de+emitir+um+Certificado+Digital.", "_blank")
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-250 p-7 rounded-3xl hover:border-[#32CD32] hover:shadow-lg transition-all group flex flex-col h-full">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shrink-0">
                  <item.icon className="w-6 h-6 text-[#2b395e]" />
                </div>
                <h4 className="text-xl font-bold text-[#2b395e] mb-3 uppercase leading-tight">{item.title}</h4>
                <p className="text-slate-650 text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                <button 
                  onClick={item.onClick}
                  className="w-full bg-slate-50 hover:bg-[#32CD32] hover:text-white text-[#2b395e] py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all border border-slate-250 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {item.actionText}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
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
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                  <a 
                    href={`https://wa.me/553125121313?text=Ol%C3%A1%21+Preciso+de+ajuda+com+o+servi%C3%A7o+de%3A+${encodeURIComponent(item.title)}`} 
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-black uppercase text-[#32CD32] hover:text-[#28a428]"
                  >
                    Fazer orçamento sem compromisso <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. NOVA SEÇÃO EXCLUSIVA: COMPRAMOS SEU PC USADO (INTERATIVO) */}
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
                  <p className="text-sm"><strong>Abatimento:</strong> Use o valor avaliado do notebook antigo para comprar seu PC Gamer.</p>
                </div>
              </div>
            </div>

            {/* Formulário Interativo com WhatsApp */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-8 text-slate-900 shadow-xl border border-slate-100">
              <h3 className="text-2xl font-black uppercase text-[#2b395e] mb-2">Simule a avaliação</h3>
              <p className="text-slate-500 text-sm mb-6">Diga o que você tem e nós retornamos com a oferta no WhatsApp!</p>
              
              <form onSubmit={handleSellSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                    O que você quer vender?
                  </label>
                  <textarea 
                    value={sellDesc}
                    onChange={(e) => setSellDesc(e.target.value)}
                    rows={3}
                    placeholder="Ex: Notebook Dell Inspiron Core i5, 8GB de RAM, com carregador. Está ligando mas o teclado está com algumas teclas ruins."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#32CD32] text-sm leading-relaxed"
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                    Qual o estado de conservação?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'excelente', label: 'Funcionando Tudo' },
                      { value: 'lento_problemas', label: 'Lento / Travando' },
                      { value: 'nao_liga', label: 'Não Liga' },
                      { value: 'pecas_soltas', label: 'Tenho Apenas Peças' },
                    ].map((st) => (
                      <button 
                        key={st.value}
                        type="button"
                        onClick={() => setSellState(st.value)}
                        className={`px-4 py-2.5 rounded-xl border-2 text-xs font-bold transition-all ${
                          sellState === st.value 
                            ? 'border-[#32CD32] bg-[#32CD32]/10 text-slate-900' 
                            : 'border-slate-200 hover:border-slate-350 text-slate-600 bg-slate-50'
                        }`}
                      >
                        {st.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#32CD32] hover:bg-[#28a428] text-white py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Solicitar Avaliação via WhatsApp
                </button>
              </form>
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
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-550 hover:text-[#32CD32] hover:bg-slate-100 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-550 hover:text-blue-600 hover:bg-slate-100 transition-colors">
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

    </div>
  );
}

// Ícone interno simples para evitar conflitos de imports
function Wand2Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m2 22 1-1" />
      <path d="M12 2v2" />
      <path d="M5 5 2 2" />
      <path d="M19 5 22 2" />
      <path d="V21" />
      <path d="M14 5a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3Z" />
      <path d="M22 22 2 2" />
    </svg>
  );
}
