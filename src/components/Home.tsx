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
  Facebook
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#32CD32] selection:text-white">
      
      {/* 1. Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-2xl" style={{background: 'linear-gradient(135deg, #74b94a 50%, #2b395e 50%)'}}>
                <span className="text-white drop-shadow-md">C</span>
              </div>
              <span className="font-extrabold text-2xl tracking-tighter hidden sm:block text-[#2b395e]">
                COMPU<span className="text-[#74b94a]">MED</span>
              </span>
            </div>

            {/* Menu */}
            <nav className="hidden md:flex gap-8 text-sm font-bold tracking-wide text-[#001f3f]">
              <a href="#" className="hover:text-[#32CD32] transition-colors uppercase">Início</a>
              <button onClick={() => onNavigate('builder')} className="hover:text-[#32CD32] transition-colors uppercase">Monte Seu PC</button>
              <button onClick={() => onNavigate('services')} className="hover:text-[#32CD32] transition-colors uppercase">Serviços</button>
              <a href="#onde-estamos" className="hover:text-[#32CD32] transition-colors uppercase">Onde Estamos</a>
            </nav>

            {/* CTA */}
            <a 
              href="tel:3125121313" 
              className="flex items-center gap-2 bg-[#001f3f] border border-[#001f3f] hover:bg-[#001a35] text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(31) 2512-1313</span>
              <span className="sm:hidden">Ligar</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1603481546238-487240415921?q=80&w=2070&auto=format&fit=crop" 
            alt="Gamer PC and Office Setup" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-[#001f3f] leading-[1.1] mb-6">
              Compumed:<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#32CD32] to-[#001f3f]">Desde 2000</span> cuidando da sua tecnologia.
            </h1>
            <p className="text-lg sm:text-xl text-slate-700 font-bold mb-10 max-w-xl leading-relaxed">
              Somos mais experientes que os gigantes da internet. Venha montar o seu PC e pegue direto na nossa loja, ou peça para um técnico revisar tudo antes de você pagar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('builder')}
                className="bg-[#32CD32] hover:bg-[#28a428] text-white px-8 py-4 rounded-lg font-black text-sm uppercase tracking-wider text-center transition-colors shadow-lg"
              >
                Monte Seu PC Agora
              </button>
              <button 
                onClick={() => onNavigate('services')}
                className="bg-white hover:bg-slate-50 text-[#001f3f] border-2 border-[#001f3f] px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider text-center transition-colors shadow-sm"
              >
                Ver Serviços
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Por que a Compumed? */}
      <section id="sobre" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Shield className="w-64 h-64 text-blue-600" />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[#001f3f]/10 border border-[#001f3f]/20 text-[#001f3f] px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                <Clock className="w-4 h-4" />
                Mais de 25 anos cuidando do seu PC
              </div>
              <p className="text-2xl sm:text-3xl text-slate-800 font-medium leading-normal mb-8">
                Somos mais antigos que o KaBuM! e estamos aqui pertinho de você em BH. Diferente de sites de fora, aqui você monta na internet e pode vir buscar na loja ou pedir para um de nossos técnicos revisar tudo antes de você pagar.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-6 h-6 text-[#32CD32]" />
                  <span className="font-semibold">Desde 2000</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <ShieldCheck className="w-6 h-6 text-[#32CD32]" />
                  <span className="font-semibold">Compra e Serviço Seguro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Products and Services */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div id="produtos" className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900">O que vendemos</h2>
              <div className="h-px bg-slate-300 flex-1"></div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "PCs Gamers", desc: "Máquinas muito rápidas para jogar tudo o que você gosta.", icon: MonitorPlay },
                { title: "PCs de Escritório", desc: "Notebooks e computadores para trabalhar sem travar.", icon: Laptop },
                { title: "Peças do Computador", desc: "Teclados, mouses, monitores e tudo para seu PC.", icon: Cpu },
                { title: "Fazemos seu Documento Digital (Certificado)", desc: "Faça seu documento digital aqui rápido e fácil.", icon: KeySquare },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 shadow-sm p-6 rounded-2xl hover:border-[#32CD32] hover:shadow-md transition-all group cursor-pointer" onClick={() => item.title === "PCs Gamers" ? onNavigate('builder') : null}>
                  <div className="w-12 h-12 bg-[#001f3f]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-[#001f3f]" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. Reviews */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4 text-[#32CD32]">Nota Máxima no Google!</h2>
            <p className="text-slate-500 uppercase tracking-widest text-sm font-bold">Veja o que nossos clientes dizem de nós em Belo Horizonte.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              "Melhor lugar da região para consertos e vendas",
              "Tive uma boa experiência com a compra de um computador.",
              "Pessoal atencioso, serviço de manutenção muito bom."
            ].map((review, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 p-8 rounded-2xl flex flex-col shadow-sm">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 font-medium text-lg italic flex-1">"{review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Location */}
      <section id="onde-estamos" className="bg-slate-50 border-t border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="flex-1 w-full lg:max-w-lg">
              <h2 className="text-3xl font-black uppercase tracking-tight mb-2 text-slate-900">Onde Estamos</h2>
              <p className="text-slate-600 mb-6 font-medium">Pode vir aqui tomar um café com a gente!</p>
              
              <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#001f3f]/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#001f3f]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 uppercase text-sm">Endereço</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Rua Guanabara, 433<br />
                      Concórdia<br />
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
                  className="inline-flex flex-1 items-center justify-center gap-2 bg-[#001f3f] hover:bg-[#001a35] text-white px-6 py-4 rounded-lg font-black text-sm uppercase tracking-wider transition-colors shadow-md text-center"
                >
                  Abrir no Google Maps
                </a>
                <a 
                  href="https://waze.com/ul?q=Rua+Guanabara,+433,+Concordia,+Belo+Horizonte+-+MG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 bg-[#32CD32] hover:bg-[#28a428] text-white px-6 py-4 rounded-lg font-black text-sm uppercase tracking-wider transition-colors shadow-md text-center"
                >
                  Ir pelo Waze
                </a>
              </div>
            </div>

            <div className="flex-1 w-full relative h-[400px] rounded-3xl overflow-hidden border border-slate-200 shadow-inner group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.353457538202!2d-43.93883492471844!3d-19.88842158148967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69aef90457aa7%3A0x6b09efdd44e5df33!2sR.%20Guanabara%2C%20433%20-%20Conc%C3%B3rdia%2C%20Belo%20Horizonte%20-%20MG%2C%2031110-650!5e0!3m2!1spt-BR!2sbr!4v1714498522336!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
                title="Mapa de localização da Compumed"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xl" style={{background: 'linear-gradient(135deg, #74b94a 50%, #2b395e 50%)'}}>
                  <span className="text-white drop-shadow-md">C</span>
                </div>
                <span className="font-extrabold text-xl tracking-tighter text-[#2b395e]">
                  COMPU<span className="text-[#74b94a]">MED</span>
                </span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Compumed Informática: Há mais de 25 anos vendendo e consertando computadores, e fazendo serviços de internet e câmeras. Qualidade e confiança para você e sua empresa.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#32CD32] hover:bg-slate-100 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:bg-slate-100 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-6 text-sm">Contato</h4>
              <ul className="space-y-4">
                <li>
                  <a href="tel:3125121313" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group">
                    <div className="w-8 h-8 rounded bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-200">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-slate-800">(31) 2512-1313</span>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-8 h-8 rounded bg-slate-50 border border-slate-200 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Rua Guanabara, 433, BH - MG</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-6 text-sm">Horário</h4>
              <ul className="space-y-3 text-sm text-slate-600">
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
                  <span className="text-slate-400">Fechado</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Compumed Informática. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
