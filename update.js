const fs = require('fs');
const file = './src/data/translations.js';
let content = fs.readFileSync(file, 'utf8');

// The English translations already match the requested text for services. 
// We just need to append the ports and oil terminals info into translations.js

const portsDataEn = [
  { name: "Benghazi Port", coords: "Latitude 32°07’N, Longitude 20°03’E", code: "LYBEN", quays: "18", area: "500,000 square meters", activities: "General cargo, containers, bulk cargo", img: "/aerial-view-container-cargo-ship-sea_335224-735.webp" },
  { name: "Misurata Port", coords: "Latitude 32°13’N, Longitude 15°03’E", code: "LYMRA", draft: "10.50 meters for general cargo, 14.50 meters for quay (H.B.I)", quays: "20", length: "4000 meters", area: "190 hectares", activities: "General cargo, containers, bulk cargo, oil", img: "/blog-cargoships.jpg.jpeg" },
  { name: "Tripoli Port", coords: "Latitude 32°54’N, Longitude 13°10’E", code: "LYTIP", draft: "9.50 meters", quays: "27", area: "6,131,205 square meters", activities: "General cargo, bulk cargo, containers, passengers, livestock, general services, oil terminal", img: "/WSC_11.jpg.jpeg" },
  { name: "Tobruk Port", loc: "Tobruk is situated in eastern Libya, near the Egyptian border.", overview: "The port handles mainly general cargo and crude oil The oil terminal of Marsa al Hariga has two jetties on the S shore of the bay.", traffic: "Approximately 120 ships visit the port annually.", loadLine: "Summer.", draft: "Harbour: draught 8.3m. Marsa El Hariga: Max LOA 335m, draught 18.2m", img: "/0000.png" },
  { name: "Derna Port", coords: "Latitude 32°25’N, Longitude 22°42’E", code: "LYDNF", draft: "9 meters", quays: "6", area: "250,000 square meters", activities: "General cargo, containers", img: "/1.jpg.jpeg" },
  { name: "Zuwara Port", coords: "Latitude 32°55’N, Longitude 12°07’E", code: "LYZUA", draft: "4.5 meters", quays: "4", activities: "General cargo and petrochemical products.", img: "/0000 (1).png" },
  { name: "Khoms Port", coords: "Latitude 32°41’N, Longitude 14°15’E", code: "LYKHO", draft: "10.50 meters", quays: "5", area: "108,000 square meters", activities: "General cargo and containers", img: "/tanker.jpg.jpeg" }
];

const oilTerminalsEn = [
  { name: "Abu Kamash Oil Terminal", coords: "LATITUDE 33°05’N LONGITUDE 11°49’E", code: "LYKAM", draft: "7.5 meters", berths: "1 berth", img: "/Egypt_Libya_-Oil-Supply_.webp" },
  { name: "Bouri Oil Terminal", coords: "LATITUDE 33°54’N LONGITUDE 12°39’E", code: "LYBOU", draft: "25 meters", berths: "1 berth", activities: "Crude Oil Loading", img: "/WhatsApp Image 2026-05-21 at 12.36.37 PM.jpeg" },
  { name: "Alsidra Oil Terminal", coords: "LATITUDE 33°38’N LONGITUDE 18°22’E", code: "LYESI", draft: "18 meters", berths: "1 berth", activities: "Crude Oil Loading", img: "/WhatsApp Image 2026-05-21 at 12.36.54 PM.jpeg" },
  { name: "Ras Lanuf Oil Terminal", coords: "LATITUDE 33°38’N LONGITUDE 18°22’E", code: "LYESI", draft: "18 meters", berths: "1 berth", activities: "Crude Oil Loading", img: "/WhatsApp Image 2026-05-21 at 12.37.09 PM.jpeg" },
  { name: "Ras Lanuf Port", coords: "LATITUDE 33°38’N LONGITUDE 18°22’E", code: "LYESI", draft: "18 meters", berths: "1 berth", activities: "Crude Oil Loading", img: "/WhatsApp Image 2026-05-21 at 12.37.27 PM.jpeg" },
  { name: "Marsa Al Brega Port", coords: "LATITUDE 33°38’N LONGITUDE 18°22’E", code: "LYESI", draft: "18 meters", berths: "1 berth", activities: "Crude Oil Loading", img: "/AdobeStock_92375225-1170x585-1.jpg.jpeg" },
  { name: "Zueitina Oil Terminal", coords: "LATITUDE 30°50’N LONGITUDE 20°00’E", code: "LYZAW", draft: "17 meters", activities: "Crude Oil and Gas Loading", berths: "2 berths", img: "/servlet (2).jpeg" }
];

const portsDataAr = portsDataEn; // Just a placeholder, we can copy the same object but the keys would be uniform
const oilTerminalsAr = oilTerminalsEn;

// We need to inject `list: ${JSON.stringify(portsDataEn, null, 2)}` into ports object
content = content.replace(/details: \{[^}]+\}/g, (match) => {
  return `${match},\n        list: ${JSON.stringify(portsDataEn)},\n        terminals: ${JSON.stringify(oilTerminalsEn)}`;
});
content = content.replace(/ports: \{/, 'ports: {');

fs.writeFileSync(file, content);
