import { useState } from "react";
import { rehabData } from "./data";

export default function App() {
  const [role, setRole] = useState(null);
  const [region, setRegion] = useState(null);
  const [disease, setDisease] = useState(null);

  return (
    <div className="container">

      <h1>RehabFlow</h1>
      <p>Fizyoterapi Egzersiz Sistemi</p>

      {/* ROLE SELECTION */}
      {!role && (
        <div>
          <h2>Kim kullanıyor?</h2>
          <button onClick={() => setRole("hasta")}>Hasta</button>
          <button onClick={() => setRole("fizyoterapist")}>Fizyoterapist</button>
        </div>
      )}

      {/* REGION SELECTION */}
      {role && !region && (
        <div>
          <h2>Bölge Seç</h2>

          {Object.keys(rehabData).map((r) => (
            <button key={r} onClick={() => setRegion(r)}>
              {r}
            </button>
          ))}

          <button onClick={() => setRole(null)}>Geri</button>
        </div>
      )}

      {/* DISEASE SELECTION */}
      {region && !disease && (
        <div>
          <h2>{region}</h2>

          {Object.keys(rehabData[region]).map((d) => (
            <button key={d} onClick={() => setDisease(d)}>
              {d}
            </button>
          ))}

          <button onClick={() => setRegion(null)}>Geri</button>
        </div>
      )}

      {/* CONTENT */}
      {disease && (
        <div className="card">

          <h2>{rehabData[region][disease].title}</h2>

          <pre className="text">
            {rehabData[region][disease].content}
          </pre>

          <button onClick={() => setDisease(null)}>Geri</button>
        </div>
      )}

    </div>
  );
}
