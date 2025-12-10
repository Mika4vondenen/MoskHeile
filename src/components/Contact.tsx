import { Mail, Phone, MapPin, Send, Clock, Loader2, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase'; // Das hier hat gefehlt!

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      // JETZT senden wir wirklich an Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            created_at: new Date().toISOString(),
          }
        ]);

      if (error) throw error;

      setStatus({ type: 'success', message: 'Nachricht erfolgreich gesendet!' });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Fehler:', error);
      setStatus({ type: 'error', message: 'Fehler beim Senden.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#f59e0b] mb-3 sm:mb-4 uppercase tracking-widest text-sm">Kontakt aufnehmen</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 bg-[#171717] text-white focus:border-[#f59e0b] outline-none text-sm sm:text-base" placeholder="Ihr Name" disabled={isSubmitting} />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">E-Mail *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 bg-[#171717] text-white focus:border-[#f59e0b] outline-none text-sm sm:text-base" placeholder="ihre@email.de" disabled={isSubmitting} />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">Telefon</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 bg-[#171717] text-white focus:border-[#f59e0b] outline-none text-sm sm:text-base" placeholder="Optional" disabled={isSubmitting} />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">Nachricht *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 bg-[#171717] text-white focus:border-[#f59e0b] outline-none resize-none text-sm sm:text-base" placeholder="Ihre Nachricht..." disabled={isSubmitting}></textarea>
              </div>

              {status.message && (
                <div className={`p-3 sm:p-4 rounded-lg text-sm sm:text-base ${status.type === 'success' ? 'bg-green-900/50 text-green-200' : 'bg-red-900/50 text-red-200'}`}>
                  {status.message}
                </div>
              )}

              <button type="submit" disabled={isSubmitting} className="group w-full bg-[#f59e0b] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg hover:bg-[#ffc61a] transition-all flex items-center justify-center gap-2 sm:gap-3 disabled:opacity-50">
                {isSubmitting ? <><Loader2 className="animate-spin" size={18} /> Wird gesendet...</> : <>Nachricht senden <Send className="group-hover:translate-x-1 transition-transform" size={18} /></>}
              </button>
            </form>
          </div>

          <div>
             <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#f59e0b] mb-6 sm:mb-8">KONTAKTINFORMATIONEN</h3>
             <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-[#f59e0b] w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"><Mail className="text-[#0A1F44]" size={20} /></div>
                  <div><h4 className="font-semibold text-gray-300 mb-1 text-sm sm:text-base">E-MAIL</h4><a href="mailto:d.mamon@moskunlimited.be" className="text-gray-400 hover:text-[#f59e0b] text-xs sm:text-sm break-all">d.mamon@moskunlimited.be</a></div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-[#f59e0b] w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"><Phone className="text-[#0A1F44]" size={20} /></div>
                  <div><h4 className="font-semibold text-gray-300 mb-1 text-sm sm:text-base">TELEFON</h4><a href="tel:+49176476972299" className="text-gray-400 hover:text-[#f59e0b] text-xs sm:text-sm">(+49) 0176 4769 7299</a></div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-[#f59e0b] w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"><MessageCircle className="text-[#0A1F44]" size={20} /></div>
                  <div><h4 className="font-semibold text-gray-300 mb-1 text-sm sm:text-base">WHATSAPP</h4><a href="https://wa.me/4917647697299" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#f59e0b] text-xs sm:text-sm">Chat starten</a></div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-[#f59e0b] w-10 sm:w-12 h-10 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0"><MapPin className="text-[#0A1F44]" size={20} /></div>
                  <div><h4 className="font-semibold text-gray-300 mb-1 text-sm sm:text-base">STANDORT</h4><p className="text-gray-400 text-xs sm:text-sm">BELGIEN<br />Weissenbrücke 2. 4770 Amel</p></div>
                </div>
             </div>
             <div className="bg-black p-6 sm:p-8 rounded-xl">
               <h4 className="text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-4">Starten wir Ihr Projekt.</h4>
               <p className="text-white mb-4 sm:mb-6 text-sm sm:text-base">Ob Portrait-, Produkt- oder Eventfotografie, Videoproduktion jeglicher Art oder Bearbeitung von Videomaterial.</p>
               <div className="flex items-center gap-2 text-[#FFB400] font-semibold text-sm sm:text-base"><Clock size={18} /><span>Antwort innerhalb von 48 Stunden</span></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}