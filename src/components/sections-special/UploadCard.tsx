"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { UploadCloud, Folder, ChevronDown } from "lucide-react";
import SmartBadge from "@/components/ui/SmartBadge";
import { useRecaptcha } from "@/hooks/useRecaptcha";

// Standalone special section. Does not import any site primitives or site Container.
// Fixed sizing: width 1200px, height 400px. Own styling only.

export default function UploadCard() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [drag, setDrag] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { executeRecaptcha } = useRecaptcha();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!fileName) {
      alert('Palun valige fail enne saatmist.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData from form
      const formData = new FormData(e.currentTarget);
      
      // Skip reCAPTCHA for debugging
      // const recaptchaToken = await executeRecaptcha('upload_form');
      // formData.append('recaptcha_token', recaptchaToken);
      
      // Add the file to form data if available
      if (inputRef.current?.files?.[0]) {
        formData.append('metsakava_file', inputRef.current.files[0]);
      }
      
      // Submit to test PHP endpoint
      const response = await fetch('/api/upload-test.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        // Reset form on success
        setFileName(null);
        if (inputRef.current) {
          inputRef.current.value = '';
        }
        e.currentTarget.reset();
      } else {
        alert(result.error || 'Vormi saatmisel tekkis viga. Palun proovige uuesti.');
      }
      
    } catch (error) {
      console.error('Vormi saatmine ebaõnnestus:', error);
      alert('Vormi saatmisel tekkis viga. Palun proovige uuesti.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const faqs = [
    {
      q: "Mida teha kui mul pole metsamajandamiskava?",
      a: "Kui kava puudub, saame alustada ligikaudse hinnanguga kinnistu põhiteabele ja avalikele andmetele tuginedes. Soovitame siiski kava tellida, sest see täpsustab varu, kasvukohad ja piirangud ning võimaldab teha siduva pakkumise. Vajadusel aitame kava tellimise korraldamisel.",
    },
    {
      q: "Kuidas metsakava tellida saab?",
      a: "Kava koostab litsentseeritud metsakonsultant. Töö algab välitööde ja mõõtmistega, mille järel koostatakse eraldiste kirjeldused ja majandamissoovitused. Tellimiseks saatke meile kinnistu andmed – anname hinnapakkumise ja koordineerime tööde aja. Valmis kava kantakse metsaregistrisse.",
    },
    {
      q: "Miks teil metsakava tarvis on?",
      a: "Kava annab täpse ülevaate tagavarast, kasvukohatüübist ja raieõigustest – see on hinnangu ja planeerimise alus. Ilma kavata on ebakindlus suurem ning pakkumine jääb indikatiivseks. Kava aitab planeerida raietöid ja hinnata metsa väärtust objektiivselt.",
    },
    {
      q: "Kas pakkumise küsimine on siduv?",
      a: "Pakkumise küsimine ei ole siduv. Saate selle rahulikult läbi vaadata ja otsustada, kas soovite edasi liikuda. Kui otsustate jätkata, täpsustame tingimused ja vormistame kokkuleppe. Enne allkirjastamist kohustusi ei teki.",
    },
  ];
  
  return (
    <section data-scope="sections-special-upload-card" className="py-16 sm:py-24 md:py-28">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <div className="mb-6 text-center">
          <SmartBadge label="Metsakava alusel täpsem hind" className="-mt-4" />
          <h2 className="mt-5 font-adcreative font-semibold text-3xl text-slate-900 sm:text-4xl">
            Metsa hindamine metsakava alusel
          </h2>
          <p className="mt-4 mb-[50px] px-0 sm:px-10 md:px-[140px] text-[1.1rem] leading-7 text-slate-700 sm:text-[1.24rem]">
            Saatke meile oma kinnistu metsakava ning teeme teile kohe metsamajandamiskavas leitavate andmete põhjal täpse metsa hindamise koos meiepoolse pakkumisega
          </p>
        </div>
      </div>
      
      
      <div className="relative mx-auto w-full max-w-[1200px] px-4">
        {/* Responsive grid: stack on mobile, 70/30 on md+ */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 md:[grid-template-columns:0.7fr_0.3fr]">
          {/* RIGHT on desktop: Upload card (placed first on mobile for visibility) */}
          <div className="order-2 md:order-2 rounded-xl bg-white/90 ring-1 ring-emerald-900/10 shadow-[0_12px_30px_rgba(0,0,0,0.12)] md:h-[660px]" style={{ backgroundImage: "linear-gradient(180deg, rgba(16,185,129,0.01) 0%, rgba(16,185,129,0.01) 100%)" }}>
            <div className="flex h-full w-full flex-col items-center justify-start px-4 py-4 text-center">
              <div className="mt-[4px] text-[24px] font-semibold text-emerald-900">Arvuta metsa täpne hind</div>
              <div className="mt-2 mb-[20px] max-w-[300px] text-[12px] leading-5 text-slate-700">
                Laadige üles kinnistu metsakava ning jätke meile oma andmed, et saaksime teha teile kohe võimalikult täpse metsamaa hindamise.
              </div>
              
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="mt-3 inline-flex w-full max-w-[300px] items-center justify-center rounded-[12px] border border-emerald-200 bg-white px-3 py-2 text-[13px] font-semibold text-emerald-700 transition-colors hover:bg-emerald-600 hover:text-white"
              >
                Vali metsakava fail arvutist <Folder className="ml-2 h-4 w-4" />
              </button>
              <div
                onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
                onDragEnter={(e) => { e.preventDefault(); setDrag(true); }}
                onDragLeave={() => setDrag(false)}
                onDrop={(e) => { e.preventDefault(); setDrag(false); const f = e.dataTransfer.files?.[0]; if (f) setFileName(f.name); }}
                className={`mt-3 flex h-[162px] w-full max-w-[295px] flex-col items-center justify-center rounded-[12px] border-2 border-dashed ${drag ? "border-emerald-600 bg-emerald-50/70" : "border-emerald-200"}`}
                style={{ backgroundImage: "url('/metsakava-uleslaadimine-vali-fail-taustapilt.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
              >
                <UploadCloud className="h-8 w-8 text-emerald-600" />
                <div className="mt-2 text-[12px] font-semibold text-slate-600">Või lohistage metsakava fail siia</div>
                {fileName ? (
                  <div className="mt-1 line-clamp-1 max-w-[240px] text-[11px] text-emerald-700">{fileName}</div>
                ) : null}
              </div>
              <input
                ref={inputRef}
                type="file"
                accept="application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword,image/*"
                className="hidden"
                onChange={(e) => { const f = e.target.files?.[0]; if (f) setFileName(f.name); }}
              />
              <form onSubmit={handleSubmit} className="mt-[20px] w-full max-w-[300px] text-center pb-[15px]">
                <div className="mt-[8px] text-[18px] font-normal text-emerald-900">Teie kontaktandmed</div>
                <div className="mt-[15px] space-y-2 text-left">
                <input
                  type="text"
                  name="name"
                  placeholder="Teie nimi*"
                  required
                  className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-[14px] font-medium outline-none ring-emerald-300/40 placeholder-slate-500 focus:ring-4"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Teie email*"
                  required
                  className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-[14px] font-medium outline-none ring-emerald-300/40 placeholder-slate-500 focus:ring-4"
                />
                <textarea
                  rows={2}
                  name="message"
                  placeholder="Lisainfo"
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-[14px] font-medium outline-none ring-emerald-300/40 placeholder-slate-500 focus:ring-4"
                />
                </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`mt-3 w-full rounded-[12px] px-4 py-2.5 text-[14px] font-semibold text-white transition-colors ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-emerald-500 hover:bg-emerald-600'
                }`}
              >
                {isSubmitting ? 'Saatmine...' : 'Arvuta metsamaa täpne hind'}
              </button>
                <div className="mt-2 flex items-center justify-center text-[12px] font-medium text-slate-600">
                  <span className="mr-1">🔒</span>
                  <span className="relative group cursor-help">
                    Teie andmed on kaitstud
                    <span className="pointer-events-none absolute left-full top-0 z-10 hidden w-[300px] pl-2 group-hover:block">
                      <span className="block rounded-[10px] border border-emerald-200" style={{ background: "rgba(16,185,129,0.03)" }}>
                        <div className="px-3 py-3 text-[12px] leading-5 text-slate-700">
                          Kasutame teie poolt meiega jagatud andmeid ning metsakavaga seotud faile ainult teile pakkumise tegemiseks.
                        </div>
                      </span>
                    </span>
                  </span>
                </div>
              </form>
            </div>
          </div>
          {/* LEFT on desktop: Steps card */}
          <div className="order-1 md:order-1 self-start rounded-xl bg-white/80 ring-1 ring-emerald-900/10 shadow-[0_12px_30px_rgba(0,0,0,0.12)] md:h-[330px]">
            <div className="h-full w-full" style={{ display: "grid", gridTemplateRows: "auto 1fr" }}>
              {/* Top 80%: three centered steps with equal spacing */}
              <div className="px-6 py-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 items-start justify-items-center gap-6 mt-[-18px]">
                  {/* Step 1 */}
                  <div className="relative flex w-full flex-col items-center text-center">
                    <div className="w-full mt-0 h-[130px] flex items-end justify-center">
                      <div className="relative top-[15px]">
                        <Image src="/metsa-hind-lae-arvutist-ules-metsakava.svg" alt="Metsakava üles laadimine" width={143} height={143} />
                      </div>
                    </div>
                    <div className="w-full px-[15%] mt-[45px]">
                      <div className="mx-auto text-[19px] font-semibold text-black whitespace-nowrap">Lae üles metsakava</div>
                      <div className="mx-auto mt-[6px] text-[13.2px] leading-5 text-slate-600">Valige arvutist metsakava fail või lohistage fail vasakule aknasse</div>
                    </div>
                  </div>
                  {/* Step 2 */}
                  <div className="relative flex w-full flex-col items-center text-center">
                    <div className="w-full mt-0 h-[130px] flex items-end justify-center">
                      <div className="relative top-[13px]">
                        <Image src="/metsa-hindamise-pakkumise-koostamine-svg.svg" alt="Metsa hindamise pakkumise koostamine" width={130} height={130} />
                      </div>
                    </div>
                    <div className="w-full px-[15%] mt-[45px]">
                      <div className="mx-auto text-[19px] font-semibold text-black whitespace-nowrap">Hindame kinnistu</div>
                      <div className="mx-auto mt-[6px] text-[13.2px] leading-5 text-slate-600">Meie spetsialist hindab teie kinnistu metsakava andmete põhjal</div>
                    </div>
                  </div>
                  {/* Step 3 */}
                  <div className="relative flex w-full flex-col items-center text-center">
                    <div className="w-full mt-0 h-[130px] flex items-end justify-center">
                      <Image src="/metsa-hind-pakkumine-eposti-svg.svg" alt="Pakkumine e-posti teel" width={124} height={124} />
                    </div>
                    <div className="w-full px-[15%] mt-[45px]">
                      <div className="mx-auto text-[19px] font-semibold text-black whitespace-nowrap">Saadame pakkumise</div>
                      <div className="mx-auto mt-[6px] text-[13.2px] leading-5 text-slate-600">Saadame teile täpse pakkumise juba järgmisel päeval</div>
                    </div>
                  </div>
                </div>
              </div>
              
            
            </div>
          {/* Below content (text + FAQ) */}
          <div className="hidden md:block order-3 px-4 md:px-6 md:ml-[40px] mt-[15px] md:col-span-1">
            <h3 className="mt-[45px] text-[20px] font-semibold text-emerald-900">Metsamajandamiskava</h3>
            <p className="mt-2 text-[14px] leading-6 text-slate-700">Metsamajandamiskava on ametlik dokument, mis kirjeldab kinnistu metsa hetkeolukorda ja planeerib selle majandamist tavaliselt järgmiseks 10 aastaks. See sisaldab eraldiste kaarti ja kirjeldusi, pindalasid, puuliike ja vanuseklasse, tagavara ja boniteeti, kasvukohatüüpe, hooldus- ja uuendustöid, samuti piiranguid ja elupaiku.</p>
            <div className="mt-4 space-y-2">
              {faqs.map((item, idx) => (
                <div key={idx} className="select-none">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="flex w-full items-center justify-between rounded-[8px] px-2 py-1 text-[13px] font-semibold text-emerald-700 underline hover:text-emerald-800"
                    aria-expanded={openFaq === idx}
                    aria-controls={`faq-panel-${idx}`}
                  >
                    <span className="pr-3 text-left">{item.q}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : "rotate-0"}`} />
                  </button>
                  <div
                    id={`faq-panel-${idx}`}
                    className="overflow-hidden transition-[max-height,opacity] duration-300 ease-out"
                    style={{ maxHeight: openFaq === idx ? 500 : 0, opacity: openFaq === idx ? 1 : 0 }}
                  >
                    <div className="mt-2 rounded-[10px] border border-emerald-100 bg-emerald-500/10 px-3 py-3">
                      <div className="mt-1 text-[13px] leading-5 text-slate-700">{item.a}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>

    </section>
  );
}


