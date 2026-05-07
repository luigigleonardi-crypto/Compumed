import React, { useState } from 'react';
import { 
  ArrowLeft,
  Cpu,
  MonitorPlay,
  HardDrive,
  MemoryStick,
  Server,
  Settings2,
  CheckCircle2,
  HelpCircle,
  Wand2,
  PhoneCall,
  MapPin
} from 'lucide-react';
import { parts, predefinedBuilds, PartCategory, Part } from '../data/parts';

interface BuilderProps {
  onNavigate: (page: 'home' | 'builder') => void;
}

type Mode = 'selection' | 'manual' | 'suggested';
type SuggestedCategory = keyof typeof predefinedBuilds;

export default function Builder({ onNavigate }: BuilderProps) {
  const [mode, setMode] = useState<Mode>('selection');
  const [suggestedCategory, setSuggestedCategory] = useState<SuggestedCategory | null>(null);

  // AI State
  const [aiInput, setAiInput] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [aiResult, setAiResult] = useState<{name: string, price: number, desc: string, specs: string} | null>(null);

  const handleAISearch = async () => {
    if (!aiInput.trim()) return;
    setIsSearching(true);
    setAiResult(null);
    setSuggestedCategory(null);
    
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (apiKey && apiKey !== 'undefined' && apiKey !== 'null') {
        const { GoogleGenAI } = await import('@google/genai');
        const ai = new GoogleGenAI({ apiKey });
        const res = await ai.models.generateContent({
           model: 'gemini-2.5-flash',
           contents: `System: Você é especialista em hardware. O usuário quer montar um PC e dirá o que precisa rodar. Responda APENAS com um JSON no formato {"name": "Sua Categoria Ideal", "price": 4500, "desc": "Explicação em português e sem juridiquês de por que as peças são adequadas.", "specs": "Processador X, 16GB RAM, SSD Y, Videocard Z"}. O preço é estimado em BRL na média de mercado.\nUser: ${aiInput}`,
           config: { responseMimeType: 'application/json' }
        });
        const data = JSON.parse(res.text || '{}');
        setAiResult(data);
      } else {
        // Fallback for previews without API key injected correctly
        setTimeout(() => {
          setAiResult({
              name: 'PC Personalizado Sugerido',
              price: 4500,
              desc: 'Configuração ideal montada com base na sua solicitação.',
              specs: 'Intel Core i5 / AMD Ryzen 5, 16GB RAM, 1TB SSD NVMe, Placa de vídeo adequada.'
          });
          setIsSearching(false);
        }, 1500);
        return;
      }
    } catch(e) {
      setAiResult({
          name: 'PC Custo Benefício',
          price: 3500,
          desc: 'Esta é uma recomendação padrão do nosso estoque.',
          specs: 'Ryzen 5 4600G (Vídeo Integrado), 16GB RAM, 500GB SSD'
      });
    }
    setIsSearching(false);
  };

  // Manual Build State
  const [selectedParts, setSelectedParts] = useState<Record<PartCategory, Part | null>>({
    cpu: null,
    motherboard: null,
    ram: null,
    storage: null,
    gpu: null
  });

  const partsArray = Object.values(selectedParts) as (Part | null)[];
  const manualTotal: number = partsArray.reduce((sum: number, part: Part | null) => sum + (part?.price || 0), 0);

  const handleSelectPart = (category: PartCategory, part: Part) => {
    setSelectedParts(prev => {
      const nextParts = { ...prev, [category]: part };
      // Logic constraint: If cpu changes, clear motherboard if socket doesn't match
      if (category === 'cpu' && prev.motherboard && prev.motherboard.socket !== part.socket) {
        nextParts.motherboard = null;
      }
      return nextParts;
    });
  };

  const getFilteredParts = (category: PartCategory) => {
    const allCategoryParts = parts.filter(p => p.category === category);
    
    // Filter motherboards by selected CPU socket
    if (category === 'motherboard' && selectedParts.cpu) {
      return allCategoryParts.filter(p => p.socket === selectedParts.cpu?.socket);
    }
    
    return allCategoryParts;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#32CD32] selection:text-white pb-24">
      {/* Visual Clean Header for Builder */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-[#001f3f] hover:text-[#32CD32] font-bold text-sm uppercase tracking-wider"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para o Começo
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
          
          <div className="w-[88px]"></div> {/* Spacer code to balance header */}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 pt-12">
        {mode === 'selection' && (
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-900 mb-4">
              Como você quer montar seu PC?
            </h1>
            <p className="text-slate-600 mb-12 text-lg">Escolha o jeito mais fácil para você.</p>

            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <button 
                onClick={() => setMode('suggested')}
                className="bg-white border-2 border-slate-200 hover:border-[#001f3f] rounded-3xl p-8 flex flex-col items-center gap-4 text-center group transition-all shadow-sm hover:shadow-md w-full"
              >
                <div className="w-20 h-20 rounded-full bg-[#001f3f]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Wand2 className="w-10 h-10 text-[#001f3f]" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 uppercase">Me Ajuda a Escolher</h2>
                <p className="text-slate-600">Nós perguntamos o uso e mostramos as melhores opções prontas.</p>
              </button>

              <button 
                onClick={() => setMode('manual')}
                className="bg-white border-2 border-slate-200 hover:border-[#32CD32] rounded-3xl p-8 flex flex-col items-center gap-4 text-center group transition-all shadow-sm hover:shadow-md w-full"
              >
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Settings2 className="w-10 h-10 text-[#32CD32]" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 uppercase">Eu Escolho Tudo</h2>
                <p className="text-slate-600">Você escolhe peça por peça e nós avisamos se funciona junto.</p>
              </button>
            </div>
          </div>
        )}

        {mode === 'suggested' && !suggestedCategory && !aiResult && !isSearching && (
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto">
            <button onClick={() => setMode('selection')} className="text-slate-500 hover:text-slate-900 font-bold text-sm uppercase mb-8 flex items-center justify-center gap-2 mx-auto">
              <ArrowLeft className="w-4 h-4" /> Trocar Modo
            </button>
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#001f3f] mb-8">
              O que você quer fazer?
            </h1>
            
            <div className="flex flex-col gap-4">
              <button onClick={() => { setAiResult(null); setSuggestedCategory('internet_jogar'); }} className="bg-white border-2 border-slate-200 hover:border-[#32CD32] rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition-all w-full">
                <h3 className="text-xl font-bold text-slate-900 uppercase mb-2">Quero jogar FIFA 26 (FC 26) e Estudar</h3>
                <p className="text-slate-600">Um PC para quem quer o jogo rodando liso e abrir muitas abas de estudo ao mesmo tempo.</p>
              </button>
              <button onClick={() => { setAiResult(null); setSuggestedCategory('trabalho_pesado'); }} className="bg-white border-2 border-slate-200 hover:border-[#001f3f] rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition-all w-full">
                <h3 className="text-xl font-bold text-slate-900 uppercase mb-2">Trabalho Pesado (After Effects e Engenharia/AutoCAD)</h3>
                <p className="text-slate-600">Máquina potente para quem faz vídeos e desenhos de prédios ou peças. Não espera o computador pensar, ele faz na hora.</p>
              </button>
            </div>

            <div className="bg-slate-100 p-6 rounded-2xl text-left border border-slate-200 mt-8">
              <h3 className="text-xl font-bold text-slate-900 uppercase mb-2">Não achou o que queria?</h3>
              <p className="text-slate-600 mb-4">Escreva o jogo ou programa que você precisa usar e nós buscamos os requisitos mínimos e mostramos a configuração ideal.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="text" 
                  value={aiInput}
                  onChange={e => setAiInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleAISearch()}
                  placeholder="Ex: Quero rodar Valorant e editar vídeos"
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:border-[#32CD32]"
                />
                <button 
                  onClick={handleAISearch}
                  className="bg-[#32CD32] hover:bg-[#28a428] text-white px-6 py-3 rounded-xl font-bold transition-colors uppercase whitespace-nowrap"
                >
                  Buscar Peças
                </button>
              </div>
            </div>
          </div>
        )}

        {mode === 'suggested' && isSearching && (
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto py-20">
             <div className="w-16 h-16 border-4 border-slate-200 border-t-[#32CD32] rounded-full animate-spin mx-auto mb-6"></div>
             <h2 className="text-2xl font-black text-[#001f3f] uppercase mb-4">Buscando Requisitos...</h2>
             <p className="text-slate-600 text-lg">Aguarde enquanto verificamos as peças ideais para rodar o que você precisa.</p>
          </div>
        )}

        {mode === 'suggested' && aiResult && !isSearching && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-12">
              <button onClick={() => setAiResult(null)} className="text-slate-500 hover:text-slate-900 font-bold text-sm uppercase mb-8 flex items-center justify-center gap-2 mx-auto">
                <ArrowLeft className="w-4 h-4" /> Buscar outro uso
              </button>
              <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#001f3f] mb-4">
                Configuração Escolhida
              </h1>
              <p className="text-slate-600 text-lg">Essa é a máquina ideal baseada nos requisitos do que você quer rodar.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="col-span-full md:col-span-1 border border-[#32CD32]/50 bg-green-50/30 rounded-3xl p-8 flex flex-col justify-center shadow-sm">
                 <h2 className="text-2xl font-black uppercase text-slate-900 mb-4">Sua Necessidade</h2>
                 <p className="text-[#001f3f] font-medium leading-relaxed">
                   "{aiInput}"
                 </p>
                 <div className="mt-4 p-4 bg-white/50 rounded-xl">
                   <p className="text-sm font-bold text-slate-800 uppercase mb-1">Por que escolhemos isso?</p>
                   <p className="text-slate-700 text-sm">{aiResult.desc}</p>
                 </div>
              </div>
              <div className="col-span-full md:col-span-1 bg-white border-2 border-[#001f3f] rounded-3xl overflow-hidden shadow-md flex flex-col transition-all">
                <div className="p-6 bg-[#001f3f] text-white text-center">
                  <h3 className="text-xl font-black uppercase tracking-wider">{aiResult.name}</h3>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-3xl font-bold text-[#001f3f] text-center mb-6">
                    Aprox. R$ {aiResult.price.toFixed(2).replace('.', ',')}
                  </p>
                  
                  <div className="bg-slate-50 p-4 rounded-xl mb-6">
                    <p className="text-sm text-slate-800 font-bold whitespace-pre-wrap text-center">
                      {aiResult.specs}
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <a href={`https://wa.me/553125121313?text=Ol%C3%A1%21+Queria+comprar+um+computador+para+rodar+${encodeURIComponent(aiInput)}.+Voc%C3%AAs+podem+me+mandar+um+or%C3%A7amento+preciso%3F`} target="_blank" rel="noreferrer" className="w-full bg-[#32CD32] hover:bg-[#28a428] text-white py-4 rounded-xl font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2">
                      Fazer Orçamento Exato <CheckCircle2 className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {mode === 'suggested' && suggestedCategory && !aiResult && !isSearching && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-12">
              <button onClick={() => setSuggestedCategory(null)} className="text-slate-500 hover:text-slate-900 font-bold text-sm uppercase mb-8 flex items-center justify-center gap-2 mx-auto">
                <ArrowLeft className="w-4 h-4" /> Escolher outro uso
              </button>
              <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#001f3f] mb-4">
                Montamos a opção perfeita
              </h1>
              <p className="text-slate-600 text-lg">Aqui está a máquina que funciona perfeitamente para o que você quer.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="col-span-full md:col-span-1 border border-[#32CD32]/50 bg-green-50/30 rounded-3xl p-8 flex flex-col justify-center shadow-sm">
                 <h2 className="text-2xl font-black uppercase text-slate-900 mb-4">Opção Sugerida</h2>
                 {suggestedCategory === 'trabalho_pesado' && (
                   <p className="text-[#001f3f] font-medium leading-relaxed">
                     Dica: Programas de engenharia precisam de muita força, nós escolhemos as peças que aguentam o tranco.
                   </p>
                 )}
                 {suggestedCategory === 'internet_jogar' && (
                   <p className="text-[#001f3f] font-medium leading-relaxed">
                     Dica: O equilíbrio certo de velocidade e qualidade de imagem, sem gastar com o que você não vai usar.
                   </p>
                 )}
              </div>
              {predefinedBuilds[suggestedCategory].map((build, i) => (
                <div key={i} className="col-span-full md:col-span-1 bg-white border-2 border-[#001f3f] rounded-3xl overflow-hidden shadow-md flex flex-col transition-all">
                  <div className="p-6 bg-[#001f3f] text-white text-center">
                    <h3 className="text-xl font-black uppercase tracking-wider">{build.name}</h3>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-3xl font-bold text-[#001f3f] text-center mb-6">
                      R$ {build.price.toFixed(2).replace('.', ',')}
                    </p>
                    <p className="font-semibold text-slate-700 text-center mb-6 leading-relaxed">
                      "{build.desc}"
                    </p>
                    <div className="bg-slate-50 p-4 rounded-xl mb-6">
                      <p className="text-sm text-slate-800 leading-relaxed font-bold text-center">
                        {build.specs}
                      </p>
                    </div>
                    
                    <div className="mt-auto">
                      <a href={`https://wa.me/553125121313?text=Ol%C3%A1%21+Quero+comprar+a+op%C3%A7%C3%A3o+pronta%3A+${encodeURIComponent(build.name)}`} target="_blank" rel="noreferrer" className="w-full bg-[#32CD32] hover:bg-[#28a428] text-white py-4 rounded-xl font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2">
                        Chamar no WhatsApp <CheckCircle2 className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <CheckoutBanner />
          </div>
        )}

        {mode === 'manual' && (
          <div className="flex flex-col lg:flex-row gap-8 items-start animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex-1 w-full flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <button onClick={() => setMode('selection')} className="text-slate-500 hover:text-slate-900">
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <div>
                  <h1 className="text-3xl font-black uppercase tracking-tight text-slate-900">Escolha as peças</h1>
                  <p className="text-slate-600">Nossa inteligência só mostra o que funciona junto.</p>
                </div>
              </div>

              {/* Categorias */}
              <CategorySelector 
                title="1. Processador" 
                description="O cérebro do computador. Quanto melhor, mais rápido ele pensa."
                icon={Cpu}
                parts={getFilteredParts('cpu')}
                selectedPart={selectedParts.cpu}
                onSelect={(part) => handleSelectPart('cpu', part)}
              />

              <CategorySelector 
                title="2. Placa-Mãe" 
                description="A base onde tudo se conecta."
                icon={Server}
                disabled={!selectedParts.cpu}
                disabledReason="Escolha o Processador primeiro para vermos quais Placas-Mãe são compatíveis."
                parts={getFilteredParts('motherboard')}
                selectedPart={selectedParts.motherboard}
                onSelect={(part) => handleSelectPart('motherboard', part)}
              />

              <CategorySelector 
                title="3. Memória RAM" 
                description="Ajuda a abrir muitas coisas ao mesmo tempo sem ficar lento."
                icon={MemoryStick}
                parts={getFilteredParts('ram')}
                selectedPart={selectedParts.ram}
                onSelect={(part) => handleSelectPart('ram', part)}
              />

              <CategorySelector 
                title="4. SSD / HD" 
                description="O que faz o computador ligar em 10 segundos."
                icon={HardDrive}
                parts={getFilteredParts('storage')}
                selectedPart={selectedParts.storage}
                onSelect={(part) => handleSelectPart('storage', part)}
              />

              <CategorySelector 
                title="5. Placa de Vídeo" 
                description="O que faz o desenho do jogo ficar bonito."
                icon={MonitorPlay}
                parts={getFilteredParts('gpu')}
                selectedPart={selectedParts.gpu}
                onSelect={(part) => handleSelectPart('gpu', part)}
              />
              
              <CategorySelector 
                title="6. Fonte de Energia" 
                description="O coração que dá energia para tudo não queimar."
                icon={Settings2}
                disabled={true}
                disabledReason="A fonte será escolhida pelos técnicos no final da montagem para garantir energia de sobra!"
                parts={[]}
                selectedPart={null}
                onSelect={() => {}}
              />

              <CheckoutBanner />
            </div>

            {/* Sidebar with Total */}
            <div className="w-full lg:w-80 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm sticky top-28">
              <h3 className="text-lg font-black uppercase text-slate-900 mb-6">Seu Computador</h3>
              
              <div className="space-y-4 mb-6 text-sm text-slate-600">
                <SummaryItem name={selectedParts.cpu?.name} placeholder="Sem Processador" />
                <SummaryItem name={selectedParts.motherboard?.name} placeholder="Sem Placa-Mãe" />
                <SummaryItem name={selectedParts.ram?.name} placeholder="Sem RAM" />
                <SummaryItem name={selectedParts.storage?.name} placeholder="Sem SSD/HD" />
                <SummaryItem name={selectedParts.gpu?.name} placeholder="Sem Placa de Vídeo" />
              </div>

              <div className="border-t border-slate-200 pt-6 mb-6">
                <div className="flex justify-between items-end">
                  <span className="font-bold text-slate-500 uppercase">Total Estimado</span>
                  <span className="text-2xl lg:text-3xl font-black text-[#001f3f]">
                    R$ {manualTotal.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              <a 
                href={`https://wa.me/553125121313?text=Ol%C3%A1%21+Quero+comprar+uma+m%C3%A1quina+customizada+por+R%24+${manualTotal.toFixed(2).replace('.', ',')}`}
                target="_blank"
                rel="noreferrer"
                className={`w-full bg-[#32CD32] hover:bg-[#28a428] text-white py-4 rounded-xl font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 ${(!selectedParts.cpu || !selectedParts.motherboard || !selectedParts.ram || !selectedParts.storage) ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
              >
                Chamar no WhatsApp
              </a>
              
              {(!selectedParts.cpu || !selectedParts.motherboard || !selectedParts.ram || !selectedParts.storage) && (
                <p className="text-center text-xs text-slate-500 mt-4 leading-relaxed">
                  Escolha pelo menos Processador, Placa-Mãe, RAM e SSD para finalizar.
                </p>
              )}
            </div>

          </div>
        )}

      </main>

      {/* Floating Bottom Bar for Mobile - Manual Mode */}
      {mode === 'manual' && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase">Total Estimado</p>
            <p className="text-xl font-black text-[#001f3f]">R$ {manualTotal.toFixed(2).replace('.', ',')}</p>
          </div>
          <a
            href={`https://wa.me/553125121313?text=Ol%C3%A1%21+Quero+comprar+uma+m%C3%A1quina+customizada+por+R%24+${manualTotal.toFixed(2).replace('.', ',')}`}
            target="_blank"
            rel="noreferrer"
            className={`bg-[#32CD32] hover:bg-[#28a428] text-white px-6 py-3 rounded-xl font-bold uppercase tracking-wider shadow-md transition-colors ${(!selectedParts.cpu || !selectedParts.motherboard || !selectedParts.ram || !selectedParts.storage) ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
          >
            WhatsApp
          </a>
        </div>
      )}
      
      {/* Footer information for Builder */}
      <footer className="mt-20 pt-8 border-t border-slate-200 text-center text-slate-500 text-sm pb-8">
        <p className="flex items-center justify-center gap-2 mb-2">
          <MapPin className="w-4 h-4" /> Lembre-se: Montamos para você em nossa loja física.
        </p>
        <p>Rua Guanabara, 433, BH - MG | (31) 2512-1313</p>
      </footer>
    </div>
  );
}

// Helper Components

function CategorySelector({ 
  title, description, icon: Icon, parts, selectedPart, onSelect, disabled, disabledReason 
}: { 
  title: string, description: string, icon: any, parts: Part[], selectedPart: Part | null, onSelect: (p: Part) => void, disabled?: boolean, disabledReason?: string 
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
      <div className="flex gap-4 items-start mb-6 border-b border-slate-100 pb-6">
        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-black uppercase text-slate-900">{title}</h3>
          <p className="text-slate-600 text-sm mt-1">{description}</p>
        </div>
      </div>
      
      {disabled ? (
        <div className="bg-slate-50 p-6 rounded-xl flex items-center gap-3 text-slate-500">
          <HelpCircle className="w-5 h-5 shrink-0" />
          <p className="text-sm font-medium">{disabledReason}</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {parts.map(p => (
            <button 
              key={p.id}
              onClick={() => onSelect(p)}
              className={`text-left p-4 rounded-2xl border-2 transition-all flex flex-col ${
                selectedPart?.id === p.id 
                  ? 'border-[#32CD32] bg-green-50 shadow-sm' 
                  : 'border-slate-100 hover:border-blue-300 bg-white'
              }`}
            >
              <div className="flex justify-between items-start gap-4 mb-2">
                <span className={`font-bold ${selectedPart?.id === p.id ? 'text-green-800' : 'text-slate-800'}`}>{p.name}</span>
                {selectedPart?.id === p.id && <CheckCircle2 className="w-5 h-5 text-[#32CD32] shrink-0" />}
              </div>
              <div className="flex gap-2 items-center mt-2">
                <span className={`text-sm font-black mt-auto ${selectedPart?.id === p.id ? 'text-[#32CD32]' : 'text-slate-500'}`}>
                  R$ {p.price.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function SummaryItem({ name, placeholder }: { name?: string, placeholder: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${name ? 'bg-[#32CD32]' : 'bg-slate-300'}`}></div>
      <span className={name ? 'text-slate-900 font-medium' : 'text-slate-400 italic'}>
        {name || placeholder}
      </span>
    </div>
  );
}

function CheckoutBanner() {
  return (
    <div className="mt-12 bg-[#001f3f]/5 border border-[#001f3f]/10 rounded-2xl p-6 sm:p-8 flex items-start sm:items-center gap-6 flex-col sm:flex-row">
      <div className="w-16 h-16 bg-[#001f3f] rounded-full flex items-center justify-center shrink-0 shadow-lg">
        <PhoneCall className="w-8 h-8 text-white" />
      </div>
      <div>
        <h4 className="text-lg font-black uppercase text-slate-900 mb-2">Diferencial Humano</h4>
        <p className="text-slate-700 leading-relaxed max-w-xl">
          Diferente de sites de fora, aqui você monta na internet e pode vir buscar na loja ou pedir para um de nossos técnicos revisar tudo antes de você pagar.
        </p>
      </div>
    </div>
  );
}
