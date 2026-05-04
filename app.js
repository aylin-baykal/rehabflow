import { useState } from "react";
import "./App.css";

/* =========================
   📦 TÜM REHAB VERİSİ
   ========================= */
const rehabData = {
  "Üst Ekstremite": {
    "Lenfödem (Kol)": {
      title: "Lenfödem Kol Egzersizleri",
      content: `
Lenfödem Nedir?

Lenf sistemi vücudumuzun aynı zamanda bağışıklık sistemidir. Lenfatik dolaşımın bozulması sonucu kolda şişlik, dolgunluk, ağrı ve hareket kısıtlılığı oluşabilir.

Kronik bir durumdur. Tedavi edilmezse sertleşme gelişebilir.

──────────────────────────────

EGZERSİZLER:

• Sırtüstü yatışta dirsek 90° → el iç/dış rotasyon
• Omuz 90° aç → kolu öne/arkaya hareket ettir
• Kolu yukarı kaldır indir
• Kolu yana aç kapat
• El bileği öne/arkaya hareket
• Parmak aç/kapa
• Omuz daireleri (oturma pozisyonu)
• Omuz yukarı kaldır 5 sn tut bırak

──────────────────────────────

GÜNLÜK ÖNERİLER:
• Ağır yük taşımayın
• Kesik ve yaralanmalardan kaçının
• Sauna kullanmayın
• Kompresyon çorabı kullanın
• Enfeksiyonlara dikkat edin
      `
    }
  },

  "Kardiyak Rehabilitasyon": {
    "Post-Kardiyak Cerrahi": {
      title: "Kardiyak Rehabilitasyon",
      content: `
Kalp cerrahisi sonrası rehabilitasyon:

AMAÇLAR:
• Nefes kapasitesini artırmak
• Ağrıyı azaltmak
• Kas gücünü geri kazandırmak

──────────────────────────────

SOLUNUM EGZERSİZLERİ:
• Diyafram nefesi
• Triflo kullanımı
• Burundan al ağızdan ver (2-4 sayımı)

POSTÜR:
• Omuzları yukarı kaldır 5 sn
• Omuzları geriye çevir

──────────────────────────────

DİKKAT:
• 6 hafta ağır yük kaldırma yok
• 4 hafta kol baş üstü kaldırma yok
      `
    }
  },

  "El ve El Bileği": {
    "Genel": {
      title: "El & El Bileği Egzersizleri",
      content: `
• El bileği öne/arkaya hareket
• Masa üzerinde germe egzersizi
• Parmak aç-kapa
• Lastik top sıkma
      `
    }
  },

  "Ofis": {
    "Ergonomi": {
      title: "Ofis Ergonomisi",
      content: `
• Monitör göz hizasında
• 90° dirsek açısı
• Bel destekli oturma
• 20 dakikada bir mola

──────────────────────────────

EGZERSİZLER:
• Boyun esnetme
• Omuz çevirme
• Göğüs açma
      `
    }
  },

  "Dirsek": {
    "Tenisçi Dirseği": {
      title: "Lateral Epikondilit",
      content: `
• El bileği germe 20 sn
• Ağırlıkla bilek kaldırma
• Lastik egzersizleri
      `
    }
  },

  "Diz": {
    "ACL": {
      title: "Ön Çapraz Bağ Ameliyatı",
      content: `
1. HAFTA:
• Diz sıkma egzersizi
• Topuk kaydırma
• Düz bacak kaldırma

2. HAFTA:
• Duvar squat (40°)
• Kalça güçlendirme

3. HAFTA:
• Step egzersizleri
      `
    }
  }
};

/* =========================
   🧠 APP
   ========================= */
function App() {
  const [userType, setUserType] = useState(null);
  const [region, setRegion] = useState(null);
  const [disease, setDisease] = useState(null);

  /* LOGIN */
  if (!userType) {
    return (
      <div className="container">
        <h1>RehabFlow</h1>
        <p>Rol seç</p>

        <button onClick={() => setUserType("hasta")}>
          Hasta
        </button>

        <button onClick={() => setUserType("fizyoterapist")}>
          Fizyoterapist
        </button>
      </div>
    );
  }

  /* FİZYOTERAPİST */
  if (userType === "fizyoterapist") {
    return (
      <div className="container">
        <h1>Fizyoterapist Paneli</h1>
        <p>Hasta program oluşturma alanı (v2)</p>

        <button onClick={() => setUserType(null)}>
          Çıkış
        </button>
      </div>
    );
  }

  /* HASTA */
  return (
    <div className="container">
      <h1>Hasta Paneli</h1>

      {/* BÖLGE */}
      {!region && (
        <>
          <h2>Bölge Seç</h2>

          {Object.keys(rehabData).map((r) => (
            <button key={r} onClick={() => setRegion(r)}>
              {r}
            </button>
          ))}

          <button onClick={() => setUserType(null)}>
            Geri
          </button>
        </>
      )}

      {/* HASTALIK */}
      {region && !disease && (
        <>
          <h2>{region}</h2>

          {Object.keys(rehabData[region]).map((d) => (
            <button key={d} onClick={() => setDisease(d)}>
              {d}
            </button>
          ))}

          <button onClick={() => setRegion(null)}>
            Geri
          </button>
        </>
      )}

      {/* İÇERİK */}
      {disease && (
        <>
          <h2>{rehabData[region][disease].title}</h2>

          <div className="card">
            <pre className="text">
              {rehabData[region][disease].content}
            </pre>
          </div>

          <button onClick={() => setDisease(null)}>
            Geri
          </button>
        </>
      )}
    </div>
  );
}

export default App;
