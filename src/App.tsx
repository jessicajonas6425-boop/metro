import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  ShieldAlert, 
  Clock, 
  CheckCircle2, 
  Wifi, 
  Network, 
  Smartphone, 
  Trophy, 
  ArrowRight,
  Monitor,
  Gamepad2,
  Headset,
  X,
  AlertTriangle
} from 'lucide-react';

const WHATSAPP_NUMBER = "554184431535";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20vi%20o%20site%20da%20MetroNet%20e%20quero%20assinar%20um%20plano!`;

const PLANS = [
  {
    id: 'plan-500',
    speed: '500 MEGAS',
    price: '119,90',
    features: ['Internet Fibra Óptica', 'TV INCLUSA GRÁTIS', 'Conexão Estabilíssima', 'Suporte Especializado'],
    color: 'from-[#8cc63f] to-[#6a9e2d]',
    tag: 'OFERTA DE HOJE',
    extra: 'Nos 3 primeiros meses'
  },
  {
    id: 'plan-750',
    speed: '750 MEGAS',
    price: '129,90',
    features: ['Internet Fibra Óptica', 'TV INCLUSA GRÁTIS', 'Ideal para Streaming', 'Ultra Velocidade'],
    color: 'from-[#8cc63f] to-[#4c7e1c]',
    tag: 'MAIS PROCURADO',
    popular: true,
    extra: 'Nos 3 primeiros meses'
  },
  {
    id: 'plan-900',
    speed: '900 MEGAS',
    price: '149,90',
    features: ['Internet Fibra Óptica', 'TV INCLUSA GRÁTIS', 'Gamer Experience', 'Wi-Fi de Alta Performance'],
    color: 'from-[#8cc63f] to-[#3a5e15]',
    tag: 'ULTRA PERFORMANCE',
    extra: 'Nos 3 primeiros meses'
  },
  {
    id: 'plan-tel',
    speed: 'FONE ILIMITADO',
    price: '39,90',
    features: ['Ligações para todo Brasil', 'Portabilidade Oi/Vivo/Tim', 'Suporte 24/7', 'Sem taxa de instalação'],
    color: 'from-gray-700 to-gray-900',
    tag: 'PORTABILIDADE GRÁTIS',
    extra: 'Preço Fixo Mensal'
  }
];

// Custom theme colors for tailwind
const BRAND_GREEN = "#8cc63f";
const BRAND_BLUE = "#0047BB";
const BRAND_DARK_BLUE = "#002b5c";

// --- Components ---

const WhatsAppReview = ({ name, message, time, img }: { name: string, message: string, time: string, img: string }) => (
  <div className="bg-[#e5ddd5] p-4 rounded-3xl w-full max-w-sm shadow-2xl border-4 border-[#075e54] overflow-hidden">
    <div className="bg-[#075e54] p-3 -m-4 mb-4 flex items-center justify-between text-white">
      <div className="flex items-center gap-2">
        <img src={img} className="w-8 h-8 rounded-full border border-white" alt={name} />
        <div>
          <p className="text-[10px] font-black leading-none">{name}</p>
          <p className="text-[8px] opacity-70">visto por último hoje às {time}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-4 h-4 rounded-full border border-white/20" />
        <div className="w-4 h-4 rounded-full border border-white/20" />
      </div>
    </div>
    <div className="space-y-2">
      <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm relative max-w-[90%]">
        <p className="text-sm text-gray-800 font-medium leading-tight">{message}</p>
        <div className="flex justify-end items-center gap-1 mt-1">
          <span className="text-[8px] text-gray-400">{time}</span>
          <div className="flex">
            <CheckCircle2 size={10} className="text-blue-500" />
            <CheckCircle2 size={10} className="text-blue-500 -ml-1" />
          </div>
        </div>
        <div className="absolute top-0 -left-2 w-2 h-2 bg-white [clip-path:polygon(100%_0,0_0,100%_100%)]" />
      </div>
    </div>
  </div>
);

const CountdownTimeOnly = () => {
  const [timeLeft, setTimeLeft] = useState(4800); // 1h 20m approximately

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <span>
      {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </span>
  );
};

const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState(257); // Random tight timer

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-[#0047BB] text-white py-4 px-6 relative z-[60] overflow-hidden border-b-4 border-[#8cc63f]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-[#8cc63f] p-2 rounded-lg animate-bounce">
            <Clock size={20} className="text-black" />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-widest opacity-80 leading-none mb-1">Oferta Exclusiva Pinhais/Piraquara</p>
            <p className="text-lg md:text-xl font-black italic tracking-tighter">FECHE AGORA E GANHE INSTALAÇÃO + 1 MÊS GRÁTIS!</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-black/30 px-6 py-2 rounded-2xl border border-white/10">
            <span className="text-xs font-bold uppercase opacity-60">Expira em:</span>
            <span className="text-2xl font-black tabular-nums text-[#8cc63f]">
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </span>
          </div>
          
          <a 
            href={WHATSAPP_LINK}
            className="bg-[#8cc63f] hover:bg-white text-black font-black py-3 px-8 rounded-xl text-sm transition-all hover:scale-105 shadow-[0_0_20px_rgba(140,198,63,0.4)] uppercase"
          >
            Aproveitar Agora!
          </a>
        </div>
      </div>
      
      {/* Animated background element */}
      <div className="absolute top-0 right-0 w-32 h-64 bg-white/5 skew-x-[45deg] -translate-y-1/2 animate-marquee-fast" />
    </div>
  );
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(257); // Random tight timer

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-[#8cc63f] text-black font-black text-lg md:text-xl px-4 py-2 rounded-full shadow-[0_0_20px_rgba(140,198,63,0.5)] flex items-center justify-center gap-2 border-2 border-black animate-pulse">
      <Clock size={20} />
      <span>PROMOÇÃO ACABA EM:</span>
      <span className="underline">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
};

const ScarewareAlert = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
    >
      <div className="bg-white border-8 border-red-600 rounded-3xl max-w-lg w-full overflow-hidden shadow-[0_0_100px_rgba(220,38,38,0.8)]">
        <div className="bg-red-600 text-white p-6 flex items-center gap-4">
          <ShieldAlert className="animate-bounce" size={48} />
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tighter leading-none">VULNERABILIDADE DETECTADA!</h2>
            <p className="text-xs font-bold opacity-80 mt-1">SISTEMA DE SEGURANÇA LOCAL</p>
          </div>
        </div>
        <div className="p-8 text-center">
          <p className="text-gray-900 text-2xl font-black mb-4 leading-tight">
            SUA INTERNET ESTÁ SENDO "ROUBADA" OU LIMITADA AGORA!
          </p>
          <div className="bg-gray-100 p-4 rounded-xl text-left border-l-8 border-red-600 mb-6">
            <p className="text-sm font-bold text-gray-700">
              <span className="text-red-600">⚠</span> Latência: 450ms (CRÍTICO)<br />
              <span className="text-red-600">⚠</span> Perda de Pacotes: 15%<br />
              <span className="text-red-600">⚠</span> Download Efetivo: Abaixo do contratado
            </p>
          </div>
          <p className="text-gray-600 font-bold mb-8">
            Não seja enganado. Proteja sua conexão e tenha velocidade real de verdade.
          </p>
          <a
            href={WHATSAPP_LINK}
            className="block w-full bg-green-500 hover:bg-green-600 text-white font-black py-5 px-8 rounded-2xl text-2xl transition-all shadow-2xl transform hover:scale-105 uppercase text-center"
          >
            Falar com Técnico agora!
          </a>
          <button 
            onClick={onClose}
            className="mt-6 text-gray-400 hover:text-red-600 text-xs font-bold uppercase tracking-widest transition-colors"
          >
            × Continuar com conexão lenta ×
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowAlert(true), 4000);
    const chatTimer = setTimeout(() => setShowChat(true), 12000);
    return () => {
      clearTimeout(timer);
      clearTimeout(chatTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#002b5c] font-sans selection:bg-[#8cc63f] overflow-x-hidden uppercase">
      
      <CountdownBanner />
      
      <AnimatePresence>
        {showAlert && <ScarewareAlert onClose={() => setShowAlert(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {showChat && (
          <motion.div 
            initial={{ y: 100, opacity: 0, x: 100 }}
            animate={{ y: 0, opacity: 1, x: 0 }}
            className="fixed bottom-6 right-6 z-50 w-80 bg-white rounded-3xl shadow-[0_10px_40px_rgba(140,198,63,0.4)] border-4 border-[#8cc63f] overflow-hidden"
          >
            <div className="bg-[#8cc63f] p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                   <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
                      <img src="https://i.pravatar.cc/100?img=26" className="rounded-full" alt="Vanessa" />
                   </div>
                   <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-300 border-2 border-[#8cc63f] rounded-full animate-pulse" />
                </div>
                <div>
                  <span className="text-sm font-black uppercase block leading-none">Vanessa</span>
                  <span className="text-[10px] font-bold opacity-80 uppercase tracking-widest">Consultora MetroNet</span>
                </div>
              </div>
              <button onClick={() => setShowChat(false)} className="hover:bg-black/10 p-1 rounded-full"><X size={18} /></button>
            </div>
            <div className="p-5 bg-gray-50 text-gray-900">
              <p className="text-sm text-gray-700 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm relative italic leading-relaxed">
                "Olá! Detectamos uma oferta exclusiva para o seu endereço em Pinhais. Posso liberar sua **instalação grátis** agora no WhatsApp?"
                <span className="absolute -bottom-2 left-6 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45" />
              </p>
              <a 
                href={WHATSAPP_LINK}
                className="w-full mt-5 bg-[#8cc63f] hover:bg-black text-black hover:text-white py-4 rounded-xl text-sm font-black transition-all flex items-center justify-center gap-2 shadow-lg uppercase tracking-tight text-center"
              >
                QUERO MEU DESCONTO AGORA! <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Sticky Bar --- */}
      <div className="bg-[#8cc63f] text-black py-3 text-center text-xs font-black sticky top-0 z-50 overflow-hidden border-b-2 border-black">
        <div className="animate-marquee whitespace-nowrap inline-block">
          ALERTA: INSTALAÇÃO GRÁTIS EM PINHAIS E PIRAQUARA APENAS HOJE! • METRONET FIBRA 100% ÓPTICA • TV INCLUSA EM TODOS OS PLANOS • 
          ALERTA: INSTALAÇÃO GRÁTIS EM PINHAIS E PIRAQUARA APENAS HOJE! • METRONET FIBRA 100% ÓPTICA • TV INCLUSA EM TODOS OS PLANOS • 
        </div>
      </div>

      {/* --- Header --- */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 relative z-40">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-[#0047BB] p-2.5 rounded-2xl shadow-[0_0_15px_rgba(0,71,187,0.3)]">
              <Wifi className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-black text-[#0047BB] tracking-tighter italic flex items-baseline">
                METR<span className="text-[#8cc63f] underline decoration-4 underline-offset-4">O</span>NET
              </h1>
              <p className="text-[10px] font-black text-[#0047BB]/80 uppercase tracking-[0.4em] leading-none mt-1">Fibra e TV</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block border-r border-gray-100 pr-6">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Central de Vendas</p>
              <p className="text-xl font-black text-[#0047BB]">(41) 8443-1535</p>
            </div>
            <a 
              href={WHATSAPP_LINK}
              className="bg-[#0047BB] hover:bg-[#8cc63f] text-white font-black py-4 px-8 rounded-2xl flex items-center gap-3 shadow-[0_0_25px_rgba(0,71,187,0.4)] transition-all hover:scale-105 active:scale-95 group"
            >
              <Smartphone size={20} className="group-hover:rotate-12 transition-transform" />
              EU QUERO FIBRA!
            </a>
          </div>
        </div>
      </header>

      {/* --- Promotion Highlight Alert --- */}
      <a 
        href={WHATSAPP_LINK}
        className="bg-[#facc15] border-b-4 border-black py-6 px-4 relative z-30 overflow-hidden shadow-2xl block hover:bg-[#ffe045] transition-colors cursor-pointer group"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 animate-pulse">
          <div className="flex items-center gap-4 flex-1 justify-center lg:justify-start">
            <AlertTriangle className="text-black shrink-0" size={40} />
            <h2 className="text-2xl md:text-5xl font-black text-black tracking-tighter text-center lg:text-left uppercase italic leading-none">
              Piraquara e Pinhais, só hoje!!!!!! <br className="md:hidden" />
              <span className="bg-black text-[#facc15] px-4 py-1 inline-block mt-2 md:mt-0">10 INSTALAÇOES GRÁTIS</span>
            </h2>
            <AlertTriangle className="text-black hidden md:block shrink-0" size={40} />
          </div>
          
          <div className="flex flex-col items-center">
            <p className="text-black font-black text-[10px] uppercase tracking-widest mb-1">A PROMOÇÃO ENCERRA EM:</p>
            <div className="bg-black text-[#facc15] px-6 py-2 rounded-2xl border-2 border-black font-black tabular-nums text-4xl shadow-xl flex items-center gap-3">
               <Clock size={28} />
               <CountdownTimeOnly />
            </div>
          </div>

          <div className="bg-black text-white px-8 py-5 rounded-3xl font-black text-xl italic flex items-center gap-3 group-hover:scale-105 transition-transform shadow-2xl shrink-0">
            QUERO AGORA <ArrowRight />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />
      </a>

      <main>
        {/* --- Hero Section --- */}
        <section className="relative py-24 lg:py-40 bg-gray-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0047BB]/5 to-transparent pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ x: -60, opacity: 0 }}
              transition={{ duration: 0.7 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-[#0047BB] text-white px-4 py-1.5 rounded-lg font-black text-xs uppercase tracking-tighter mb-8 skew-x-[-12deg]">
                LÍDER EM CONEXÃO RESIDENCIAL
              </div>
              <h2 className="text-6xl md:text-8xl font-black text-[#002b5c] leading-[0.85] tracking-tighter mb-8 uppercase italic text-center lg:text-left">
                INTERNET <br />
                <span className="text-[#0047BB] drop-shadow-[0_0_20px_rgba(0,71,187,0.2)]">+ TV GRÁTIS</span>
              </h2>
              <p className="text-xl text-gray-500 mb-10 max-w-lg mx-auto lg:mx-0 font-bold leading-relaxed text-center lg:text-left">
                Pare de sofrer com internet que cai. Mude para a MetroNet e tenha <span className="text-[#0047BB]">Estabilidade Total</span> para sua família navegar, assistir e jogar sem limites.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <a 
                  href="#planos"
                  className="bg-white border-2 border-[#0047BB] hover:bg-[#0047BB] text-[#0047BB] hover:text-white font-black py-6 px-12 rounded-2xl text-2xl shadow-xl transition-all transform hover:-translate-y-2 text-center"
                >
                  VER TODOS OS PLANOS
                </a>
                <div className="flex items-center gap-4 border-l border-gray-200 pl-6">
                  <div className="grid grid-cols-2 gap-1">
                     <div className="w-1.5 h-1.5 bg-[#0047BB] rounded-full animate-ping" />
                     <div className="w-1.5 h-1.5 bg-[#0047BB] rounded-full" />
                  </div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest leading-tight">
                    ATENDIMENTO ATIVO <br /> <span className="text-[#0047BB]">24 HORAS POR DIA</span>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-white border-2 border-[#0047BB]/10 rounded-[4rem] p-12 overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,71,187,0.15)]">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#0047BB]" />
                <div className="text-center">
                  <p className="text-[#0047BB] font-black text-lg uppercase tracking-widest mb-4">Plano Especial Pinhais</p>
                  <div className="text-[140px] font-black leading-none tracking-tighter text-[#002b5c] flex items-center justify-center -ml-4">
                    750
                  </div>
                  <p className="text-gray-400 font-black text-2xl -mt-4 uppercase tracking-[0.2em] italic">MEGAS + TV</p>
                  
                  <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#0047BB]/10 to-transparent" />
                  
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-gray-400 font-black text-sm uppercase">POR APENAS</span>
                    <div className="flex items-center gap-1">
                      <span className="text-[#0047BB] font-black text-2xl mt-2">R$</span>
                      <span className="text-8xl font-black text-[#002b5c] tracking-tighter">129</span>
                      <span className="text-3xl font-black text-[#0047BB]">,90</span>
                    </div>
                    <span className="bg-[#0047BB]/5 text-[#0047BB] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mt-2">
                       Fixos nos 3 primeiros meses
                    </span>
                  </div>
                  
                  <a 
                    href={WHATSAPP_LINK}
                    className="w-full mt-12 bg-[#0047BB] text-white font-black py-6 rounded-2xl text-xl hover:bg-[#8cc63f] hover:text-black transition-all block text-center shadow-lg"
                  >
                    CONTRATAR NO WHATSAPP
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <CountdownTimer />
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Commercial Ribon --- */}
        <div className="bg-white py-10 overflow-hidden border-y-8 border-[#8cc63f] rotate-[-1deg] scale-105 z-30 relative shadow-2xl">
          <div className="flex justify-around items-center gap-12 animate-marquee-fast whitespace-nowrap">
            {[1,2,3,4,5].map(i => (
              <p key={i} className="text-black font-black text-3xl uppercase tracking-tighter italic">
                VELOCIDADE GARANTIDA • INSTALAÇÃO EM 24H • TV GRÁTIS • SEM CONSULTA AO SPC • 
              </p>
            ))}
          </div>
        </div>

        {/* --- Plans Grid --- */}
        <section id="planos" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase italic text-[#002b5c]">ESCOLHA SUA VELOCIDADE</h3>
              <p className="text-gray-400 font-black text-lg max-w-2xl mx-auto uppercase tracking-widest leading-tight italic">
                 Planos desenhados para quem não aceita conexão de segunda categoria.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {PLANS.map((plan, idx) => (
                <motion.div
                  key={plan.id}
                  initial={{ y: 50, opacity: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col bg-white rounded-[3rem] border-2 transition-all hover:scale-[1.03] group ${plan.popular ? 'border-[#0047BB] shadow-[0_30px_60px_-15px_rgba(0,71,187,0.15)]' : 'border-gray-100 shadow-xl'}`}
                >
                  <div className={`h-3 bg-gradient-to-r ${plan.color} rounded-t-full`} />
                  
                  <div className="p-10 flex-1">
                    <span className="bg-gray-50 text-gray-400 font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-[0.2em] mb-8 inline-block italic">
                      {plan.tag}
                    </span>
                    <h4 className="text-5xl font-black tracking-tighter text-[#002b5c] mb-2 uppercase italic">{plan.speed}</h4>
                    {plan.id !== 'plan-tel' && (
                      <p className="text-[#0047BB] font-black text-xs uppercase tracking-widest mb-10 underline decoration-2 underline-offset-4">+ TV INCLUSA</p>
                    )}
                    {plan.id === 'plan-tel' && (
                      <div className="h-14 mb-2" /> // Spacer to keep alignment
                    )}
                    
                    <div className="space-y-5 mb-12">
                      {plan.features.map(feature => (
                        <div key={feature} className="flex items-center gap-3 text-gray-500 font-black text-xs uppercase tracking-tight">
                          <CheckCircle2 size={16} className="text-[#0047BB]" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <p className="text-gray-400 text-[10px] font-black uppercase mb-1">{plan.extra}</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-[#0047BB] font-black text-xl italic leading-none">R$</span>
                        <span className="text-7xl font-black text-[#002b5c] tracking-tighter leading-none">{plan.price.split(',')[0]}</span>
                        <span className="text-2xl font-black text-[#0047BB] leading-none">,{plan.price.split(',')[1]}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-10 pt-0">
                    <a 
                      href={WHATSAPP_LINK}
                      className={`w-full py-6 rounded-2xl font-black uppercase tracking-widest text-center block transition-all shadow-xl ${plan.popular ? 'bg-[#0047BB] text-white hover:bg-[#8cc63f] hover:text-black' : 'bg-gray-50 text-[#0047BB] hover:bg-[#0047BB] hover:text-white'}`}
                    >
                      CONTRATAR AGORA
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* --- Fixed Phone Add --- */}
            <div className="mt-20 bg-gray-50 rounded-[3rem] p-12 border-2 border-gray-100 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl overflow-hidden relative group">
               <div className="absolute inset-0 bg-[#0047BB]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="relative z-10 max-w-md text-[#002b5c]">
                 <h5 className="text-3xl font-black mb-4 uppercase italic leading-none tracking-tighter">TELEFONIA FIXA <br/> DO SEU JEITO!</h5>
                 <p className="text-gray-500 font-bold mb-8 italic">Qualidade, economia e chamadas ilimitadas. Portabilidade grátis da Oi e Vivo.</p>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-2xl border border-gray-200">
                       <p className="text-[10px] font-black text-[#0047BB] uppercase mb-1">Residencial</p>
                       <p className="text-2xl font-black tracking-tighter">R$ 29,90</p>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-gray-200">
                       <p className="text-[10px] font-black text-[#0047BB] uppercase mb-1">Empresarial</p>
                       <p className="text-2xl font-black tracking-tighter">R$ 39,90</p>
                    </div>
                 </div>
               </div>
               <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400" alt="phone" className="w-64 rounded-3xl rotate-3 shadow-2xl relative z-10" />
               <a href={WHATSAPP_LINK} className="relative z-10 bg-[#0047BB] text-white font-black py-8 px-12 rounded-3xl text-xl hover:scale-105 transition-transform shadow-2xl uppercase text-center">
                  Trazer meu número
               </a>
            </div>
          </div>
        </section>

        {/* --- Marketing Grid (Differentiators) --- */}
        <section className="py-24 bg-white text-[#002b5c]">
           <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              <div className="flex flex-col items-center">
                 <div className="w-20 h-20 bg-[#0047BB]/10 rounded-3xl flex items-center justify-center text-[#0047BB] mb-6 rotate-3">
                    <Zap size={40} />
                 </div>
                 <h6 className="font-black uppercase tracking-tighter mb-2 italic">ULTRA VELOCIDADE</h6>
                 <p className="text-xs font-bold text-gray-400 leading-relaxed uppercase">Navegue, assista e jogue sem travar.</p>
              </div>
              <div className="flex flex-col items-center border-l border-gray-100">
                 <div className="w-20 h-20 bg-[#0047BB]/10 rounded-3xl flex items-center justify-center text-[#0047BB] mb-6 -rotate-3">
                    <Network size={40} />
                 </div>
                 <h6 className="font-black uppercase tracking-tighter mb-2 italic">CONEXÃO ESTÁVEL</h6>
                 <p className="text-xs font-bold text-gray-400 leading-relaxed uppercase">Mais estabilidade para toda a família.</p>
              </div>
              <div className="flex flex-col items-center border-l border-gray-100">
                 <div className="w-20 h-20 bg-[#0047BB]/10 rounded-3xl flex items-center justify-center text-[#0047BB] mb-6 rotate-6">
                    <Headset size={40} />
                 </div>
                 <h6 className="font-black uppercase tracking-tighter mb-2 italic">SUPORTE RÁPIDO</h6>
                 <p className="text-xs font-bold text-gray-400 leading-relaxed uppercase">Atendimento ágil, humano e eficiente.</p>
              </div>
              <div className="flex flex-col items-center border-l border-gray-100">
                 <div className="w-20 h-20 bg-[#0047BB]/10 rounded-3xl flex items-center justify-center text-[#0047BB] mb-6 -rotate-6">
                    <Trophy size={40} />
                 </div>
                 <h6 className="font-black uppercase tracking-tighter mb-2 italic">CONECTANDO VOCÊ</h6>
                 <p className="text-xs font-bold text-gray-400 leading-relaxed uppercase">O que há de melhor em tecnologia fibra.</p>
              </div>
           </div>
        </section>

        {/* --- Testimonials / Social Proof (WhatsApp Style) --- */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-6xl font-black text-[#002b5c] tracking-tighter mb-4 uppercase italic">QUEM USA, RECOMENDA!</h3>
              <p className="text-[#0047BB] font-black uppercase tracking-widest text-sm">Prints reais de clientes satisfeitos em Pinhais</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
              <motion.div
                initial={{ rotate: -2, opacity: 0, y: 30 }}
                whileInView={{ rotate: -1, opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <WhatsAppReview 
                  name="Ricardo Silva" 
                  message="Instalaram hoje cedo! A internet é muito rápida, meu filho tá jogando sem lag nenhum. Valeu dms!" 
                  time="10:45" 
                  img="https://i.pravatar.cc/100?img=11"
                />
              </motion.div>
              
              <motion.div
                initial={{ rotate: 1, opacity: 0, y: 30 }}
                whileInView={{ rotate: 0, opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <WhatsAppReview 
                  name="Ana Paula Centro" 
                  message="Pedi a portabilidade do meu fixo e foi super tranquilo. Atendimento da Vanessa nota 10!" 
                  time="14:20" 
                  img="https://i.pravatar.cc/100?img=32"
                />
              </motion.div>

              <motion.div
                initial={{ rotate: 2, opacity: 0, y: 30 }}
                whileInView={{ rotate: 1, opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <WhatsAppReview 
                  name="Marcos Gamer" 
                  message="950 megas no speedtest agora kkkkk bizarro de rápido. Finalmente uma fibra de verdade aqui na rua." 
                  time="19:15" 
                  img="https://i.pravatar.cc/100?img=52"
                />
              </motion.div>

              <motion.div
                initial={{ rotate: -1, opacity: 0, y: 30 }}
                whileInView={{ rotate: -2, opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <WhatsAppReview 
                  name="Juliana Piraquara" 
                  message="Gente, a TV inclusa é ótima, tem canais de filmes e desenhos pros meus filhos. Internet nota 1000." 
                  time="09:30" 
                  img="https://i.pravatar.cc/100?img=44"
                />
              </motion.div>

              <motion.div
                initial={{ rotate: 2, opacity: 0, y: 30 }}
                whileInView={{ rotate: 1, opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <WhatsAppReview 
                  name="Carlos Eduardo" 
                  message="Minha empresa agora voa. Instalaram o plano de 900 megas e a gente não tem mais problema com reunião travando." 
                  time="11:55" 
                  img="https://i.pravatar.cc/100?img=60"
                />
              </motion.div>

              <motion.div
                initial={{ rotate: -2, opacity: 0, y: 30 }}
                whileInView={{ rotate: -1, opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <WhatsAppReview 
                  name="Sra. Fátima" 
                  message="O rapaz que veio instalar foi muito educado. Internet funciona na casa toda, estou muito contente." 
                  time="16:40" 
                  img="https://i.pravatar.cc/100?img=48"
                />
              </motion.div>
            </div>
            
            <div className="mt-16 flex justify-center">
              <a 
                href={WHATSAPP_LINK}
                className="bg-[#0047BB] text-white font-black py-4 px-12 rounded-2xl shadow-xl flex items-center gap-3 hover:scale-105 transition-transform uppercase"
              >
                <Smartphone size={24} /> Ver mais depoimentos no Whats
              </a>
            </div>
          </div>
        </section>

        {/* --- Final Banner Call (Venda Total) --- */}
        <section className="bg-[#0047BB] py-32 text-center text-white relative overflow-hidden px-6">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="max-w-5xl mx-auto relative z-10">
            <h2 className="text-6xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter uppercase italic">
              CONTRATE AGORA <br/> PELO WHATSAPP!
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
               <div className="bg-[#002b5c] p-8 rounded-[2rem] text-white grow max-w-md border border-white/10">
                  <p className="text-4xl font-black mb-2">(41) 8443-1535</p>
                  <p className="text-[#8cc63f] font-bold tracking-[0.3em] uppercase text-[10px]">Técnicos de prontidão agora</p>
               </div>
               <a 
                 href={WHATSAPP_LINK}
                 className="bg-white hover:bg-[#8cc63f] text-black font-black py-8 px-16 rounded-[2rem] text-3xl shadow-2xl transition-all border-4 border-[#002b5c] inline-flex items-center gap-4 group text-center"
               >
                 INICIAR CHAT <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
               </a>
            </div>
            <p className="mt-16 text-white font-black text-sm uppercase tracking-widest bg-white/10 inline-block py-2 px-6 rounded-full">
               ULTRAMELHOR • ULTRARRÁPIDO • ULTRACONECTADO
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 text-gray-400 py-20 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 text-left border-b border-gray-100 pb-16">
          <div className="col-span-2">
            <h1 className="text-3xl font-black tracking-tighter text-[#0047BB] italic mb-8">METRONET</h1>
            <p className="text-sm font-bold leading-relaxed max-w-sm text-gray-500">
              Conectando Pinhais e Piraquara com o que há de mais moderno em rede 100% Fibra Óptica. Internet Ilimitada, TV HD e Telefonia Digital.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-[#002b5c] font-black uppercase text-xs tracking-widest mb-6">Suporte</p>
            <a href="#" className="block hover:text-[#0047BB] font-bold transition-colors">Segunda via de Boleto</a>
            <a href="#" className="block hover:text-[#0047BB] font-bold transition-colors">Teste de Velocidade</a>
            <a href="#" className="block hover:text-[#0047BB] font-bold transition-colors">Política de Uso</a>
          </div>
          <div className="space-y-4">
            <p className="text-[#002b5c] font-black uppercase text-xs tracking-widest mb-6">Atendimento</p>
            <p className="text-[#0047BB] font-black text-xl">(41) 8443-1535</p>
            <p className="text-[10px] font-black uppercase">Rua Maringá, Pinhais - PR</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 text-[9px] font-black uppercase tracking-[0.4em] text-center italic text-gray-300">
          © {new Date().getFullYear()} MetroNet - Tecnologia de Ponta para sua Vida.
        </div>
      </footer>

      {/* --- Floating Bottom WhatsApp --- */}
      <div className="fixed bottom-8 left-8 z-50">
        <a 
          href={WHATSAPP_LINK}
          className="bg-[#8cc63f] text-black w-20 h-20 rounded-[2rem] shadow-[0_10px_30px_rgba(140,198,63,0.6)] flex items-center justify-center animate-bounce border-2 border-white hover:scale-110 transition-transform"
        >
          <Smartphone size={32} />
        </a>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-fast {
          animation: marquee 20s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
