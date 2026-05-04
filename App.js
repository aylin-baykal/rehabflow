import { useState } from "react";

export default function App() {
  const [step, setStep] = useState("home");
  const [region, setRegion] = useState(null);

  const data = {
    Omuz: "Omuz egzersizleri çalışıyor",
    Diz: "Diz egzersizleri çalışıyor",
    Boyun: "Boyun egzersizleri çalışıyor"
  };

  return (
    <div style={{
      fontFamily: "Arial",
      textAlign: "center",
      paddingTop: "40px"
    }}>

      <h1>RehabFlow</h1>

      {/* HOME */}
      {step === "home" && (
        <button onClick={() => setStep("regions")}>
          Başla
        </button>
      )}

      {/* REGION */}
      {step === "regions" && (
        <>
          <h2>Bölge Seç</h2>

          {Object.keys(data).map((r) => (
            <button
              key={r}
              onClick={() => {
                setRegion(r);
                setStep("detail");
              }}
              style={{ display: "block", margin: "10px auto" }}
            >
              {r}
            </button>
          ))}

          <button onClick={() => setStep("home")}>
            Geri
          </button>
        </>
      )}

      {/* DETAIL */}
      {step === "detail" && (
        <>
          <h2>{region}</h2>
          <p>{data[region]}</p>

          <button onClick={() => setStep("regions")}>
            Geri
          </button>
        </>
      )}

    </div>
  );
}
