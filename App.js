import { useState } from "react";
import "./App.css";

/**
 * REHABFLOW CORE DATA STRUCTURE
 * (Şimdilik genişletilebilir iskelet)
 */
const rehabData = {
  "Üst Ekstremite": {
    "Lenfödem (Kol)": {
      title: "Lenfödem Kol Egzersizleri",
      content: `Lenfödem kol egzersizleri:

• Sırtüstü yatışta kolu 90° kaldır
• El bileği fleksiyon / ekstansiyon
• Parmak aç-kapa
• Omuz abduksiyon-adduksiyon

(Tüm broşür içeriği burada genişletilecek)`
    },

    "Omuz Ağrıları": {
      title: "Omuz Rehabilitasyonu",
      content: `• Pendulum egzersizleri
• Dış rotasyon
• İç rotasyon
• Duvar tırmanma`
    }
  },

  "Alt Ekstremite": {
    "Ön Çapraz Bağ (ACL)": {
      title: "ACL Ameliyatı Sonrası",
      content: `• Quad set
• Straight leg raise
• Heel slide
• Mini squat (ileri dönem)`
    },

    "Menisküs Yaralanması": {
      title: "Menisküs Rehabilitasyonu",
      content: `• Diz ROM egzersizleri
• İzometrik quadriceps
• Düşük yük kontrollü squat`
    },

    "Diz Osteoartriti": {
      title: "Diz Osteoartriti",
      content: `• Low impact egzersizler
• Bisiklet
• Quadriceps güçlendirme`
    }
  },

  "Omurga": {
    "Boyun Ağrısı": {
      title: "Servikal Rehabilitasyon",
      content: `• Chin tuck
• Boyun germe
• Postür düzeltme`
    },

    "Bel Ağrısı": {
      title: "Lomber Rehabilitasyon",
      content: `• Pelvic tilt
• McKenzie extension
• Core stabilizasyon`
    }
  },

  "Genel": {
    "Kardiyak Rehabilitasyon": {
      title: "Kardiyak Rehab",
      content: `• Nefes egzersizleri
• Yavaş yürüyüş
• Postür egzersizleri`
    },

    "Ofis Ergonomisi": {
      title: "Ergonomi",
      content: `• Monitor eye level
• 90 derece oturuş
• Saatlik mola`
    }
  }
};

export default function App() {
  const [region, setRegion] = useState(null);
  const [disease, setDisease] = useState(null);

  const reset = () => {
    setRegion(null);
    setDisease(null);
  };

  return (
    <div className="container">

      <h1>RehabFlow</h1>
      <p>Fizyoterapi Egzersiz Sistemi</p>

      {/* BÖLGE SEÇİMİ */}
      {!region && (
        <div>
          <h2>Bölge Seç</h2>

          {Object.keys(rehabData).map((r) => (
            <button key={r} onClick={() => setRegion(r)}>
              {r}
            </button>
          ))}
        </div>
      )}

      {/* HASTALIK SEÇİMİ */}
      {region && !disease && (
        <div>
          <h2>{region}</h2>

          {Object.keys(rehabData[region]).map((d) => (
            <button key={d} onClick={() => setDisease(d)}>
              {d}
            </button>
          ))}

          <button onClick={reset}>Geri</button>
        </div>
      )}

      {/* EGZERSİZ */}
      {region && disease && (
        <div>
          <h2>{rehabData[region][disease].title}</h2>

          <div className="card">
            <pre className="text">
              {rehabData[region][disease].content}
            </pre>
          </div>

          <button onClick={() => setDisease(null)}>Geri</button>
        </div>
      )}

    </div>
  );
}
