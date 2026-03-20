
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
});
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  if (links) links.classList.toggle('mobile-open');
}
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => document.querySelector('.nav-links')?.classList.remove('mobile-open'));
});

const CALC_DATA = {"EA": {"code": "EA", "title": "Energieausweis", "rate": 100, "hours_total": 4.5, "min": 405, "max": 495, "packages": [{"nr": 1, "desc": "Datenaufnahme & Bestandsanalyse", "hours": 2.0}, {"nr": 2, "desc": "Berechnung Energiebedarf / -verbrauch", "hours": 1.5}, {"nr": 3, "desc": "Ausstellung / dena-Registrierung Energieausweis", "hours": 0.5}, {"nr": 4, "desc": "Übergabe & Erläuterung", "hours": 0.5}]}, "iSFP": {"code": "iSFP", "title": "Individueller Sanierungsfahrplan", "rate": 120, "hours_total": 13.0, "min": 1404, "max": 1716, "packages": [{"nr": 1, "desc": "Aufnahme Gebäudezustand & Bestandsdaten", "hours": 2.5}, {"nr": 2, "desc": "Energetische Bestandsbewertung", "hours": 2.5}, {"nr": 3, "desc": "Lüftungskonzept nach DIN 1946-6", "hours": 1.0}, {"nr": 4, "desc": "Maßnahmenentwicklung & Sanierungsfahrplan", "hours": 3.5}, {"nr": 5, "desc": "Förderrecherche & Förderstrategie", "hours": 1.0}, {"nr": 6, "desc": "Energieausweis (optional integriert)", "hours": 0.5}, {"nr": 7, "desc": "Beratungsgespräch & Dokumentation", "hours": 2.0}]}, "SB": {"code": "SB", "title": "Energetische Sanierungsbegleitung", "rate": 130, "hours_total": 28.5, "min": 3334, "max": 4076, "packages": [{"nr": 1, "desc": "Vorbereitung & Ausschreibungsunterstützung", "hours": 4.0}, {"nr": 2, "desc": "Baubegleitung & Qualitätskontrolle", "hours": 10.0}, {"nr": 3, "desc": "Blower-Door-Test (Luftdichtheit)", "hours": 2.5}, {"nr": 4, "desc": "Thermografie-Analyse", "hours": 2.5}, {"nr": 5, "desc": "Fördermittel-Antragstellung", "hours": 2.5}, {"nr": 6, "desc": "Schlussabnahme & Dokumentation", "hours": 2.0}, {"nr": 7, "desc": "Projektmanagement", "hours": 5.0}]}, "EW": {"code": "EW", "title": "Heizungsberatung & Erneuerbare Wärme", "rate": 120, "hours_total": 11.5, "min": 1242, "max": 1518, "packages": [{"nr": 1, "desc": "Bedarfsanalyse Wärme & Warmwasser", "hours": 1.0}, {"nr": 2, "desc": "Heizlastberechnung nach EN 12831", "hours": 2.5}, {"nr": 3, "desc": "Technologievergleich", "hours": 1.5}, {"nr": 4, "desc": "Auslegung Heizsystem", "hours": 1.5}, {"nr": 5, "desc": "Fördercheck BEG & Antragstellung", "hours": 2.0}, {"nr": 6, "desc": "Wirtschaftlichkeitsvergleich", "hours": 1.5}, {"nr": 7, "desc": "Konzeptbericht & Dokumentation", "hours": 1.5}]}, "PV": {"code": "PV", "title": "PV-Planung & Wirtschaftlichkeit", "rate": 120, "hours_total": 10.5, "min": 1134, "max": 1386, "packages": [{"nr": 1, "desc": "Standort- & Dachflächenanalyse", "hours": 1.5}, {"nr": 2, "desc": "Ertragsberechnung & Systemauslegung", "hours": 3.0}, {"nr": 3, "desc": "Wirtschaftlichkeitsberechnung", "hours": 1.5}, {"nr": 4, "desc": "Wallbox & E-Mobility (optional)", "hours": 1.0}, {"nr": 5, "desc": "Netzanschluss & Genehmigungsberatung", "hours": 1.0}, {"nr": 6, "desc": "Angebots- / Installateurauswahl", "hours": 1.5}, {"nr": 7, "desc": "Dokumentation & Abschlussbericht", "hours": 1.0}]}, "NB": {"code": "NB", "title": "Energetische Neubaubegleitung", "rate": 130, "hours_total": 26.0, "min": 3042, "max": 3718, "packages": [{"nr": 1, "desc": "Energetisches Konzept & GEG-Nachweis", "hours": 5.0}, {"nr": 2, "desc": "Beratung Haustechnik & Dämmung", "hours": 2.5}, {"nr": 3, "desc": "KfW-Effizienzhaus-Begleitung", "hours": 2.5}, {"nr": 4, "desc": "Luftdichtheitskonzept", "hours": 2.0}, {"nr": 5, "desc": "Baubegleitung & Qualitätskontrolle", "hours": 10.0}, {"nr": 6, "desc": "Blower-Door-Test & Nachweis", "hours": 2.5}, {"nr": 7, "desc": "Schluss-Energieausweis & Dokumentation", "hours": 1.5}]}, "TG": {"code": "TG", "title": "Thermografiebericht", "rate": 100, "hours_total": 6.5, "min": 585, "max": 715, "packages": [{"nr": 1, "desc": "Vorbesprechung & Terminplanung", "hours": 0.5}, {"nr": 2, "desc": "Vor-Ort-Begehung mit Wärmebildkamera", "hours": 2.5}, {"nr": 3, "desc": "Feuchtemessung (optional)", "hours": 0.5}, {"nr": 4, "desc": "Auswertung & Analyse der Thermogramme", "hours": 1.5}, {"nr": 5, "desc": "Schlussbericht & Maßnahmenempfehlungen", "hours": 1.5}]}, "LK": {"code": "LK", "title": "Lüftungskonzept nach DIN 1946-6", "rate": 100, "hours_total": 3.5, "min": 315, "max": 385, "packages": [{"nr": 1, "desc": "Gebäudedatenaufnahme", "hours": 1.0}, {"nr": 2, "desc": "Luftvolumenstrom-Berechnung", "hours": 1.0}, {"nr": 3, "desc": "Lüftungssystemempfehlung", "hours": 0.5}, {"nr": 4, "desc": "Schutzmaßnahmennachweis", "hours": 0.5}, {"nr": 5, "desc": "Schriftliches Konzept & Übergabe", "hours": 0.5}]}, "HL": {"code": "HL", "title": "Heizlastberechnung nach EN 12831", "rate": 100, "hours_total": 4.25, "min": 382, "max": 468, "packages": [{"nr": 1, "desc": "Gebäudeaufnahme & U-Wert-Ermittlung", "hours": 1.5}, {"nr": 2, "desc": "Norm-Außentemperatur & Klimadaten", "hours": 0.25}, {"nr": 3, "desc": "Heizlastberechnung Gebäude & Räume", "hours": 1.5}, {"nr": 4, "desc": "Auslegungsempfehlung Wärmeerzeuger", "hours": 0.5}, {"nr": 5, "desc": "Dokumentation & Übergabe", "hours": 0.5}]}, "KB": {"code": "KB", "title": "Energetische Kaufberatung", "rate": 120, "hours_total": 7.0, "min": 756, "max": 924, "packages": [{"nr": 1, "desc": "Vorgespräch & Unterlagenprüfung", "hours": 0.5}, {"nr": 2, "desc": "Energieausweis (Bedarfsausweis)", "hours": 2.0}, {"nr": 3, "desc": "Thermografie-Begehung", "hours": 2.5}, {"nr": 4, "desc": "Sanierungs-Kurzgutachten", "hours": 1.5}, {"nr": 5, "desc": "Übergabegespräch & Entscheidungshilfe", "hours": 0.5}]}};
function fmtEuro(v){ return v.toLocaleString('de-DE') + ' €'; }
function renderCalculator(code){
  const mount = document.getElementById('calcMount');
  if(!mount || !CALC_DATA[code]) return;
  const s = CALC_DATA[code];
  const rows = s.packages.map(ap => `<div class="ap-row"><span>${String(ap.nr).padStart(2,'0')} · ${ap.desc}</span><strong>${String(ap.hours).replace('.',',')} h</strong></div>`).join('');
  mount.innerHTML = `
    <div class="calculator-layout">
      <div class="calculator-side">
        <div class="eyebrow">Kostenrechner</div>
        <h2>Was kostet meine Leistung?</h2>
        <p class="section-intro">Die Werte basieren auf den hinterlegten Standard-Arbeitspaketen und Stundensätzen aus Ihrem Angebotsgenerator. Für die Website zeige ich daraus bewusst eine Spanne von ±10 % als Orientierungswert.</p>
        <div class="svc-pills calc-pills">
          ${Object.values(CALC_DATA).map(item => `<button class="svc-pill ${item.code===code?'active':''}" data-code="${item.code}"><span class="pill-code">${item.code}</span><span class="pill-name">${item.title}</span></button>`).join('')}
        </div>
      </div>
      <div class="calculator-result-card">
        <div class="result-header">
          <div class="result-title">${s.title}</div>
          <div class="result-note">Standardumfang laut Angebotsgenerator</div>
        </div>
        <div class="result-rows">
          <div class="result-row"><div class="result-row-label">Stundensatz</div><div class="result-row-value">${fmtEuro(s.rate)} / h</div></div>
          <div class="result-row"><div class="result-row-label">Standardstunden gesamt</div><div class="result-row-value">${String(s.hours_total).replace('.',',')} h</div></div>
          <div class="result-row"><div class="result-row-label">Orientierungsspanne</div><div class="result-row-value main">${fmtEuro(s.min)} – ${fmtEuro(s.max)}</div></div>
        </div>
        <div class="price-note">Die Spanne bildet einen normalen Projektkorridor von ±10 % auf Basis des Standardumfangs ab. Zusatzleistungen, fehlende Unterlagen, Sonderfälle oder größere Objekte können den Aufwand verändern.</div>
      </div>
    </div>
    <div class="calculator-packages box">
      <h3>Hinterlegte Arbeitspakete</h3>
      <div class="ap-list">${rows}</div>
      <div class="price-meta">
        <div><strong>Produktkürzel:</strong> ${s.code}</div>
        <div><strong>Basiswert:</strong> ${fmtEuro(Math.round(s.rate * s.hours_total))}</div>
      </div>
    </div>`;
  document.querySelectorAll('.calc-pills .svc-pill').forEach(btn => btn.addEventListener('click', () => renderCalculator(btn.dataset.code)));
}
if(document.getElementById('calcMount')) renderCalculator('EA');
