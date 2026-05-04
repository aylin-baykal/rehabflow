function login(type) {
    document.getElementById("home").style.display = "none";

    if(type === "hasta") {
        showHasta();
    } else {
        showFizyoterapist();
    }
}

function showHasta() {
    document.getElementById("panel").innerHTML = `
        <div class="card">
            <h2>Hasta Paneli</h2>

            <p>Bölge seç:</p>

            <button onclick="hastalik('Omuz')">Omuz</button>
            <button onclick="hastalik('Diz')">Diz</button>
            <button onclick="hastalik('Boyun')">Boyun</button>

            <div id="result"></div>
        </div>
    `;
}

function showFizyoterapist() {
    document.getElementById("panel").innerHTML = `
        <div class="card">
            <h2>Fizyoterapist Paneli</h2>
            <p>Burada hasta için program oluşturulacak.</p>
        </div>
    `;
}

function hastalik(bolge) {

    let data = "";

    if(bolge === "Omuz") {
        data = "Lenfödem Kol Egzersizleri";
    }

    if(bolge === "Diz") {
        data = "Ön Çapraz Bağ Egzersizleri";
    }

    if(bolge === "Boyun") {
        data = "Ofis Ergonomisi Egzersizleri";
    }

    document.getElementById("result").innerHTML =
        `<h3>Seçilen Program:</h3><p>${data}</p>`;
}
