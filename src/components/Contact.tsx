import React, { useEffect } from 'react';
import { ArrowLeft, MessageCircle, HelpCircle, Clock, ShieldCheck } from 'lucide-react';
import type { Page } from '../App';

interface ContactProps {
  onNavigate: (page: Page) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#32CD32] selection:text-white pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
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

      <main className="max-w-4xl mx-auto px-4 pt-16">
        <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500 mb-16">
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#001f3f] mb-6">
            Fale com a <span className="text-[#32CD32]">Compumed</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Esqueça os robôs e as respostas prontas. Na Compumed, você conversa diretamente com especialistas técnicos de verdade pelo WhatsApp.
          </p>

          <a 
            href="https://wa.me/553125121313?text=Ol%C3%A1%21+Gostaria+de+um+or%C3%A7amento+ou+tirar+d%C3%BAvidas+sobre+os+servi%C3%A7os+da+Compumed." 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex flex-col items-center gap-4 group"
          >
             <img 
              src="https://i.ibb.co/1GS0FRQn/1000-F-406690707-s-Va-PZSv-Cjn-JFKu-Vd-Nzqsp3m6-Drl2-K572-removebg-preview.png"
              alt="WhatsApp Compumed" 
              className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-[0_4px_12px_rgba(37,211,102,0.4)] transition-transform group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <span className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-black text-sm uppercase tracking-wider transition-all shadow-lg group-hover:bg-[#128C7E]">
              Iniciar Conversa no WhatsApp
            </span>
          </a>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
          <h2 className="text-2xl font-black text-[#001f3f] uppercase mb-8 text-center">Como funciona e o que você pode perguntar?</h2>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-[#74b94a]/10 flex items-center justify-center shrink-0">
                <HelpCircle className="w-6 h-6 text-[#32CD32]" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Dúvidas Técnicas</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Não sabe por que o seu PC não liga ou está lento? Nós ajudamos a identificar o possível problema e passamos as opções de conserto.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-[#74b94a]/10 flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-[#32CD32]" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Orçamentos e Preços</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Quer comprar um computador novo ou montar do seu jeito? Conte para nós a sua precisão (trabalho, jogos, estudos) e te enviamos as peças ideais e o valor.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-[#74b94a]/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#32CD32]" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Serviços Corporativos</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Precisa de cabeamento, CFTV ou servidores para a sua empresa? Agende uma visita ou converse pelo WhatsApp para alinharmos os detalhes.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-[#74b94a]/10 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-[#32CD32]" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Respostas Rápidas</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Nosso WhatsApp é focado em agilizar o seu atendimento. Sem filas de espera de Call Centers. Respeitamos o seu tempo.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
