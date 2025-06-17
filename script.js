const soggetti = [
    "Dio", "Gesù", "Cristo", "Madonna", "Spirito Santo",
    "San Pietro", "San Paolo", "San Gennaro", "San Giuseppe",
    "Sant’Antonio", "San Francesco", "Santa Maria", "Santa Chiara",
    "Trinità", "Papa", "Messia", "Signore"
];

const oggetti = [
    "Microsoft", "Google", "Kinder", "Kinder bueno", "GPT", "AI", "PowerPoint", "Microsoft Word", "PDF",
    "iPhone", "WiFi", "Router", "Mouse", "Webcam", "Cloud", "Bluetooth", "Auricolare",
    "Smartwatch", "SSD", "USB-C", "Cavo HDMI", "Stampante", "Tastiera",
    "Minecraft", "Crafting Table", "Joystick", "Meccanico", "Ingegnere", "Programmatore",
    "Panettiere", "Bagnino", "Barista", "Corriere", "Tatuatore", "Magazziniere", "Cameriere",
    "YouTuber", "Social Media Manager", "Forno Elettrico", "Carta Igienica", "Tram di Milano", "Boia", "Pixelato",
    "Casse Bluetooth", "Cucchiaio Sporco", "Bidet Intelligente",
    "Cane", "Maial@", "Asin@", "Pavone", "Gatto", "Piatto", "Tazza", "Tram",
    "Cucchiaio", "Letto", "Doccia", "Sedia", "Frigorifero", "Cuscino", "Armadio", "Tavolo",
    "Zaino", "Libro", "Matita", "Cimice", "Ragno", "Formica", "Neve", "Fumo", "Nebbia",
    "Vento", "Fulmine", "Tuono", "Fango", "Erba", "Sabbia", "Terra", "Sasso", "Cemento",
    "Vite", "Chiodo", "Martello", "Scala", "Corda", "Specchio", "Orologio", "Quadro",
    "Pannello", "Secchio", "Serpente", "Muro", "Porta", "Finestra", "Tappeto", "Coperta",
    "Lavatrice", "Forno", "Bidet", "Cesso", "Lavandino", "Cassa", "Minestra",
    "Tiramisù", "Polpette", "Biscotto", "Caramella", "Crostata", "Pane", "Pizza", "Cicoria",
    "Insegna", "Semaforo", "Panchina", "Fontana", "Campanello", "Campana", "Statua",
    "Manichino", "Corriere", "Panettiere", "Barista", "Bagnino", "Tatuatore", "Magazziniere",
    "Programmatore", "Vigile", "Parrucchiere", "Pescatore", "Benzinaio", "Falegname",
    "Idraulico", "Giardiniere", "Muratore", "Camionista", "Spazzino", "Fabbro", "Contadino",
    "Postino", "Dinosauro", "Mummia", "Fantasma", "Cavaliere", "Merda",
    "Strega", "Vampiro", "Zombi", "Scheletro", "Alieno", "Robot", "Omino", "Bue", "Capra", "Pallone da Basket",
    "Puffo", "Yogurt alla Fragola", "Cavatappi", "Scatola di Cartone", "Maniglia", "Bottiglia d’Acqua",
    "Zebra", "Telecomando", "Macchina Fotografica", "Pannello Solare", "Biscottiera", "Limone",
    "Cacciavite", "Trivella", "Palo della Luce", "Semolino", "Spray Igienizzante", "Tenda da Campeggio",
    "Disco Volante", "Borsa Frigo", "Bancomat", "Cintura di Sicurezza", "Carrello della Spesa", "Proiettore",
    "AutoCAD", "Terremoto", "Sigma", "Chad", "Burundi", "Atmosfera", "Pianeta", "Gigante", "Trattore", "Televisione",
    "Polpettone", "Stagista", "Costumista", "Comunista", "Fascista", "Omosessuale", "Tendone", "Bastard@", "Dev-C++",
    "Volkswagen", "Schifos@", "fa schifo", "Ladr@", "Coglion@", "Maledett@", "Stronz@", "Cubo di Rubik",
    "Libro Scolastico", "Lurid@", "Sporc@", "Poster", "Torta di Fragole", "Congelat@", "Lampadario",
    "Sparacarote", "Tapparella", "Mensola", "Tigre", "Bisonte", "Dinosauro", "Milano", "Amsterdam", "Termosifone",
    "Albero di Natale", "Inutile", "Puzzolente", "Interruttore", "Post-it", "Gnomo", "Libreria", "Insetto",
    "Cavalluccio Marino", "Scaldabagno", "Vasca da Bagno", "Cuscino Termico", "Palloncino Bucato", "Pescepalla",
    "Cacciavite Esagonale", "Telo da Mare", "Infradito", "Rincoglionit@", "Addormentat@", "Addormentat@", "Scatenat@",
    "Strascatenat@", "Etichettatrice", "Fastidios@", "Sfulminat@", "Strasfulminat@", "Cretin@", "Spray Antizanzare",
    "Salvadanaio", "Idrossido di Sodio", "Idrossido di Potassio", "Cinese", "Montanar@", "Sparacazzate", "Agricoltore",
    "Raccolta Differenziata", "Toro", "LGBTQIA+", "Amazon Prime", "Testa di Cazzo", "Portatelefono", "Obes@",
    "Straobes@", "Straciccion@", "Ciccion@", "Organizer di Cavi", "Porc@", "Valigia", "Quercia", "Barcone",
    "Figura Retorica", "Equazione di 2° Grado", "Equazione", "Scatolone", "Cassetta Porta Attrezzi", "Carta di Credito",
    "Carta di Debito", "Contactless", "Bancomat", "Carta Regalo", "Vaso da Fiori", "Marciapiede", "Spalafieno",
    "Cavallo", "Ippopotamo", "Posta Elettronica", "Appendiabiti", "Cappotto", "Portaombrelli", "Ignorante", "Pistacchio",
    "Fibra Ottica", "Sistema Solare", "Cassetto", "Password", "Foglio Protocollo", "Foglio A4", "Cartuccia per Stampanti",
    "Stran@", "Strastran@", "Data Center", "Database", "Autostrada", "Ricettario", "Sparamelanzane", "Tornado",
    "Troglodita", "Trigliceridi", "Colesterolo", "Fosfolipide", "Melone", "Vacca", "Straporc@", "Straboia",
    "Stramerda", "Straschifos@", "Straladr@", "Stracane", "Stratosferic@", "Pterodattilo", "Rinoceronte", "Elefante",
    "Automobile", "Macchina da Curire", "Macchina da Scrivere", "Stracretin@", "Stramaledett@", "Strastronz@",
    "Strabastard@", "Strasporc@", "Stralurid@", "Strafastidios@", "Strarincoglionit@", "Rompipalle", "Strarompipalle",
    "Ferro da Stiro", "Regione Veneto", "Venet@", "Ventilatore", "Pantofola", "Stracchino", "Prosciutto",
    "Prosciutto Cotto", "Prosciutto Crudo", "Speck", "Lampada a LED", "Rai 1", "Rai 2",
    "Cubo di Rubik", "Software di Editing", "Compressore ad’Aria", "Stampante 3D", "Casco da Minatore", "Scanner Laser",
    "Estintore", "Amplificatore WiFi", "Cuscino Cervicale", "Barattolo di Nutella", "Sveglia Digitale", "Termometro",
    "Motosega Elettrica", "Lente di Ingrandimento", "Tablet Rotto", "Tastiera Meccanica", "Simulatore di Volo",
    "Lava Pavimenti Automatico", "Controller PS5", "Luce LED RGB", "Occhiali VR", "Termometro a Infrarossi",
    "Piastra per Capelli", "Auricolari Bluetooth", "Zaino Antifurto", "Calcolatrice Scientifica", "Bidone Aspiratutto"
];

// Genera bestemmia
function generaBestemmia() {
    const soggetto = soggetti[Math.floor(Math.random() * soggetti.length)];
    const oggetto = oggetti[Math.floor(Math.random() * oggetti.length)];
    document.getElementById("bestemmia").textContent = `${soggetto} ${oggetto}`;
}

// Contatore bestemmie
const combinazioni = soggetti.length * oggetti.length;
document.getElementById("contatore").textContent = `${combinazioni}`;