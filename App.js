import { useState } from "react";
import "./App.css";

const data = {
  "Üst Ekstremite": {
    "Lenfödem (Kol)": `
Lenfödem Kol Egzersizleri

• Sırtüstü yatışta kolu kaldır
• El bileği fleksiyon / ekstansiyon
• Parmak aç-kapa
• Omuz mobilizasyonu
• Lenf drenajı destek hareketleri
`,

    "Omuz Problemleri": `
Omuz Rehabilitasyonu

• Pendulum egzersizleri
• Duvar yürütme
• Dış rotasyon
• Scapula stabilizasyon
`
  },

  "Alt Ekstremite": {
    "Ön Çapraz Bağ (ACL)": `
ACL Rehabilitasyonu

• Quadriceps set
• Straight leg raise
• Heel slide
• Kontrollü squat
`,

    "Menisküs": `
Menisküs Rehabilitasyonu

• ROM egzersizleri
• İzometrik kas aktivasyonu
• Düşük yük egzersizleri
`,

    "Diz Osteoartriti": `
Diz Osteoartriti

• Bisiklet
• Quadriceps güçlendirme
• Düşük impact yürüyüş
`
  },

  "Omurga": {
    "Boyun Ağrısı": `
Servikal Rehabilitasyon

• Chin tuck
• Boyun germe
• Postür düzeltme
`,

    "Bel Ağrısı": `
Lomber Rehabilitasyon

• Pelvic tilt
• Core stabilizasyon
• McKenzie extension
`
  },

  "Genel Rehabilitasyon": {
    "Kardiyak Rehabilitasyon": `
• Solunum egzersizleri
• Yavaş yürüyüş
• Postür egzersizleri
`,

    "Ofis Ergonomisi": `
• 90 derece oturuş
• Monitor eye level
• Saatlik mola
`
  }
};

export default function App() {
  const [step, setStep] = useState("region");
  const [region, setRegion] = useState(null);
  const [disease, setDisease] = useState(null);

  const reset = () => {
    setRegion(null);
    setDisease(null);
    setStep("region");
  };

  const selectRegion = (r) => {
    setRegion(r);
    setStep("disease");
  };

  const selectDisease = (d) => {
    setDisease(d);
    setStep("content");
  };

  return (
    <div className="container">

      <h1>RehabFlow</h1>
      <p>Fizyoterapi Egzersiz Sistemi</p>

      {/* BÖLGE */}
      {step === "region" && (
        <>
          <h2>Bölge Seç</h2>

          {Object.keys(data).map((r) => (
            <button key={r} onClick={() => selectRegion(r)}>
              {r}
            </button>
          ))}
        </>
      )}

      {/* HASTALIK */}
      {step === "disease" && (
        <>
          <h2>{region}</h2>

          {Object.keys(data[region]).map((d) => (
            <button key={d} onClick={() => selectDisease(d)}>
              {d}
            </button>
          ))}

          <button onClick={reset}>Geri</button>
        </>
      )}

      {/* İÇERİK */}
      {step === "content" && (
        <>
          <h2>{disease}</h2>

          <div className="card">
            <pre className="text">
              {data[region][disease]}
            </pre>
          </div>

          <button onClick={() => setStep("disease")}>
            Geri
          </button>
        </>
      )}

    </div>
  );
}
