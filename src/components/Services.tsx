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
            <img 
              src="https://i.ibb.co/S4V4W3Qh/Chat-GPT-Image-25-de-mai-de-2026-15-01-01.png" 
              alt="Compumed Informática" 
              className="h-10 w-auto object-contain shrink-0"
              referrerPolicy="no-referrer"
            />
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
        <svg className="w-9 h-9 text-white fill-current shrink-0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 512l145.4-38.2c32.7 17.8 69.4 27.2 107.1 27.2 122.4 0 222-99.6 222-222 0-59.3-23-115.1-65-157.1zM223.9 474c-33.1 0-65.6-8.9-93.9-25.7l-8.7-5.2L35 456l13.3-80.5-5.7-9.1c-18.4-29.4-28.2-63.5-28.2-98.9 0-101.5 82.6-184.1 184.1-184.1 49.2 0 95.4 19.2 130.2 54.1 34.8 34.9 54 81.1 54 130.2-.1 101.5-82.7 184.1-184.2 184.1zm122.2-139.3c-5.6-2.8-33.1-16.3-38.3-18.2-5.1-1.9-8.9-2.8-12.7 2.8-3.8 5.6-14.6 18.2-17.9 22-3.3 3.8-6.6 4.2-12.2 1.4-5.6-2.8-23.6-8.7-45-27.8-16.6-14.8-27.8-33.2-31-38.7-3.3-5.6-.4-8.6 2.5-11.4 2.6-2.5 5.6-6.6 8.5-9.9 2.8-3.3 3.8-5.6 5.6-9.4 1.9-3.8.9-7-1-9.9-1.9-2.8-12.7-30.7-17.4-42.1-4.6-11.1-9.1-9.6-12.7-9.8-3.3-.2-7.1-.2-10.8-.2-3.8 0-9.9 1.4-15.1 7.1-5.2 5.6-19.8 19.3-19.8 47.2 0 27.8 20.3 54.7 23.1 58.5 2.8 3.8 39.9 60.9 96.7 85.4 13.5 5.8 24 9.3 32.2 11.9 13.6 4.3 26 3.7 35.8 2.2 10.9-1.6 33.1-13.5 37.8-25.9 4.7-12.5 4.7-23.1 3.3-25.4-1.4-2.3-5.2-3.6-10.8-6.4z"/>
        </svg>
      </a>
    </div>
  );
}
