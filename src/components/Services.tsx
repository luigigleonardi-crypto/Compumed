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
              src="https://i.ibb.co/4g9hcgbk/Chat-GPT-Image-27-de-mai-de-2026-11-52-33-removebg-preview.png" 
              alt="Compumed Informática" 
              className="h-20 sm:h-24 md:h-28 w-auto object-contain shrink-0 drop-shadow-xl"
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
        className="fixed bottom-8 right-8 z-50 transition-transform hover:scale-110 flex items-center justify-center cursor-pointer shrink-0 drop-shadow-2xl"
        title="Fale conosco no WhatsApp"
      >
        <img 
          src="https://i.ibb.co/1GS0FRQn/1000-F-406690707-s-Va-PZSv-Cjn-JFKu-Vd-Nzqsp3m6-Drl2-K572-removebg-preview.png"
          alt="WhatsApp Compumed" 
          className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_4px_12px_rgba(37,211,102,0.4)]"
          referrerPolicy="no-referrer"
        />
      </a>
    </div>
  );
}
