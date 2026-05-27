import React from 'react';
import { 
  ArrowLeft,
  Wrench, 
  ShieldCheck, 
  Wifi, 
  Server,
  MapPin,
  Phone
} from 'lucide-react';
import type { Page } from '../App';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#32CD32] selection:text-white pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-[#001f3f] hover:text-[#32CD32] font-bold text-sm uppercase tracking-wider"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>

          {/* Logo Central */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <span className="font-extrabold text-2xl tracking-tighter text-white">
              COMPU<span className="text-[#32CD32]">MED</span>
            </span>
          </div>
          
          <div className="w-[88px]"></div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 pt-12">
        <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500 mb-16">
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#001f3f] mb-4">
            Nossos Serviços
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Além de montarmos o melhor computador para você, oferecemos uma série de soluções para a sua casa e a sua empresa. Nossos técnicos contam com mais de 25 anos de experiência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
          {[
            { 
              title: "Conserto de Notebook e Computador", 
              desc: "Seu computador está travando, não liga, ou está muito lento? Nós descobrimos o problema e arrumamos para você. Trocamos peças estragadas, formatamos e instalamos programas.", 
              icon: Wrench 
            },
            { 
              title: "Segurança Eletrônica (Câmeras)", 
              desc: "Instalamos câmeras de segurança e alarmes para que você possa ficar de olho na sua casa ou loja diretamente pelo seu celular 24 horas por dia.", 
              icon: ShieldCheck 
            },
            { 
              title: "Colocamos Internet e Cabos", 
              desc: "A internet não chega no quartinho dos fundos? Nós passamos cabos e colocamos roteadores para o Wi-Fi funcionar rápido em qualquer lugar da sua casa ou empresa.", 
              icon: Wifi 
            },
            { 
              title: "Servidores e Redes para Empresas", 
              desc: "Montamos a central do banco de dados da sua empresa. Interligamos os computadores dos funcionários para eles acessarem os arquivos e os sistemas juntos de forma rápida.", 
              icon: Server 
            },
          ].map((item, i) => (
            <div key={i} className="bg-white border-2 border-[#001f3f]/10 shadow-sm p-8 rounded-3xl hover:border-[#32CD32]/50 hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-[#001f3f]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8 text-[#001f3f]" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase leading-tight">{item.title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Contact floating CTA for mobile, inline for desktop */}
      <div className="max-w-3xl mx-auto px-4 mt-16 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
        <div className="bg-[#2b395e] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-black uppercase mb-4">Precisa de algum desses serviços?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">Converse com nossos especialistas agora mesmo e tire suas dúvidas. Orçamento sem compromisso.</p>
          <a 
            href="https://wa.me/553125121313?text=Ol%C3%A1%21+Queria+saber+mais+sobre+os+servi%C3%A7os+da+Compumed." 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-[#32CD32] hover:bg-[#28a428] text-white px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
          >
            <Phone className="w-5 h-5" />
            (31) 2512-1313 - Chamar no WhatsApp
          </a>
        </div>
      </div>

      <footer className="mt-20 pt-16 border-t border-slate-200 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8">
            <div className="text-slate-500 text-xs text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Compumed Informática. Todos os direitos reservados.</p>
              <p className="mt-1 font-semibold">Tel: (31) 2512-1313</p>
            </div>
            <p className="text-slate-500 font-bold text-xs tracking-wider text-center md:text-right">
              Rua Guanabara, 433, Concórdia, BH - MG | CNPJ: 04.143.316/0001-93
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
        <svg className="w-10 h-10 text-white fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.004 0C5.372 0 0 5.372 0 12.004c0 2.115.548 4.103 1.507 5.845L.055 24l6.305-1.654a11.947 11.947 0 005.644 1.417c6.63 0 12.004-5.373 12.004-12.004C24.008 5.372 18.634 0 12.004 0zm6.54 17.518c-.262.738-1.53 1.341-2.113 1.422-.501.07-1.127.106-1.85-.105-.466-.135-1.072-.315-1.857-.654-3.33-1.442-5.463-4.834-5.63-5.056-.164-.222-1.314-1.745-1.314-3.324 0-1.579.827-2.355 1.122-2.662.296-.307.643-.385.856-.385s.43.01.616.018c.19.008.44-.029.69.57.262.628.9 2.183.98 2.348.08.163.13.355.02.578-.11.222-.165.319-.33.513-.164.194-.344.332-.492.51-.164.198-.337.414-.145.744.192.33.856 1.412 1.83 2.278.963.858 1.776 1.124 2.1.13.167-.353.473-.393.73-.393zm1.18-1c-.132.354-2.146.908-2.146.908s-.167.042-.393.042c-.225 0-1.037-.156-1.037-.156-.83-.178-1.67-.487-2.34-.84a11.391 11.391 0 01-3.69-3.23 8.358 8.358 0 01-1.36-2.58A6.33 6.33 0 011.66 6.84c.05-1.13.56-1.92 1.05-2.42l.33-.31.32-.3.32-.3h1.36v.91c0 .22.13.88.24 1.15.11.27.42.94.52 1.15.11.22.11.44-.11.66l-.68.64s-.11.11 0 .33c.12.22.46.77.94 1.25.48.48 1.05.84 1.27.96.22.12.33 0 .33 0l.73-.85c.23-.22.45-.11.68 0s1.25.59 1.48.7c.23.11.23.33.23.44v1.07z" />
        </svg>
      </a>
    </div>
  );
}
