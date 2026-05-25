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
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xl" style={{background: 'linear-gradient(135deg, #74b94a 50%, #2b395e 50%)'}}>
              <span className="text-white drop-shadow-md">C</span>
            </div>
            <span className="font-extrabold text-xl tracking-tighter hidden sm:block text-[#2b395e]">
              COMPU<span className="text-[#74b94a]">MED</span>
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
              <p className="mt-1 font-semibold">E-mail: contato@compumedbh.com.br | Tel: (31) 2512-1313</p>
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
        className="fixed bottom-6 right-6 z-55 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center cursor-pointer"
        title="Fale conosco no WhatsApp"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.446L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.864.001-2.637-1.03-5.117-2.905-6.993C16.555 1.87 14.1 1.83 11.465 1.83a9.851 9.851 0 0 0-9.861 9.871c.001 1.637.495 3.238 1.439 4.816l-1.031 3.766 3.864-1.013zM18.8 15.65c-.3-.15-1.784-.88-2.062-.981-.278-.1-.482-.15-.683.15-.201.3-.778.981-.954 1.18-.176.2-.352.225-.653.075-.301-.15-1.271-.468-2.42-1.494-.894-.798-1.5-.18-1.67-.478-.17-.3-.018-.46.13-.61.137-.137.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.683-1.649-.936-2.258-.246-.59-.497-.51-.683-.519-.176-.01-.377-.01-.578-.01-.201 0-.528.075-.804.375-.276.3-1.055 1.03-1.055 2.512s1.08 2.91 1.231 3.11c.15.2 2.124 3.243 5.147 4.545.719.31 1.28.497 1.716.636.722.23 1.378.197 1.9.119.58-.088 1.784-.73 2.036-1.436.252-.705.252-1.31.176-1.436-.076-.126-.277-.201-.578-.351z"/>
        </svg>
      </a>
    </div>
  );
}
