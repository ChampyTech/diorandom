// Lista divinità maschili da bestemmiare
const divinitaMaschili = [
    "Dio", "Gesù", "Cristo", "Spirito Santo", "Zeus", "San Pietro", "San Paolo", "San Gennaro", "San Giuseppe",
    "Sant'Antonio", "San Francesco", "Il Papa", "Il Messia", "Signore", "Il Vaticano", "San Pio", "Maometto", "Allah",
];

// Lista divinità femminili da bestemmiare
const divinitaFemminili = [
    "Madonna", "Santa Maria", "Santa Chiara", "Trinità", "Radio Maria", "Maria", "Città del Vaticano",
];

// Lista aggettivi maschili da attribuire alle divinità
const aggettiviMaschili = [
    "Kinder Bueno", "GPT", "AI", "PowerPoint", "Microsoft Word", "PDF", "Onto", "Vento", "Fulmine", "Tuono",
    "WiFi", "Router", "Mouse", "Webcam", "Cloud", "Bluetooth", "Auricolare", "Google Classroom",
    "Smartwatch", "SSD", "USB-C", "Cavo HDMI", "Stampante", "Tastiera", "Pittore",
    "Minecraft", "Crafting Table", "Joystick", "Meccanico", "Ingegnere", "Programmatore",
    "Panettiere", "Bagnino", "Barista", "Corriere", "Tatuatore", "Magazziniere", "Cameriere", "Corriera",
    "YouTuber", "Social Media Manager", "Forno Elettrico", "Carta Igienica", "Tram di Milano", "Boia",
    "Casse Bluetooth", "Cucchiaio Sporco", "Bidet Intelligente", "Pixelato", "Gatto", "Piatto", "Tazza", "Tram",
    "Cucchiaio", "Letto", "Doccia", "Sedia", "Frigorifero", "Cuscino", "Armadio", "Tavolo", "Fumo", "Nebbia",
    "Zaino", "Libro", "Matita", "Cimice", "Ragno", "Formica", "Neve", "Sabbia", "Terra", "Fango", "Erba",
    "Pannello", "Secchio", "Serpente", "Muro", "Porta", "Finestra", "Tappeto", "Coperta", "Sasso", "Cemento",
    "Lavatrice", "Forno", "Bidet", "Cesso", "Lavandino", "Cassa", "Minestra", "Cane", "Maiale", "Asino", "Pavone",
    "Tiramisù", "Polpette", "Biscotto", "Caramella", "Crostata", "Pane", "Pizza", "Cicoria",
    "Insegna", "Semaforo", "Panchina", "Fontana", "Campanello", "Campana", "Statua", "Manichino",
    "Vigile", "Parrucchiere", "Pescatore", "Benzinaio", "Falegname", "Camionista", "Spazzino", "Fabbro", "Contadino",
    "Postino", "Dinosauro", "Mummia", "Fantasma", "Cavaliere", "Merda", "Idraulico", "Giardiniere", "Muratore",
    "Strega", "Vampiro", "Zombi", "Scheletro", "Alieno", "Robot", "Omino", "Bue", "Capra", "Pallone da Basket",
    "Puffo", "Yogurt alla Fragola", "Cavatappi", "Scatola di Cartone", "Maniglia", "Bottiglia d'Acqua",
    "Zebra", "Telecomando", "Macchina Fotografica", "Pannello Solare", "Biscottiera", "Limone",
    "Cacciavite", "Trivella", "Palo della Luce", "Semolino", "Spray Igienizzante", "Tenda da Campeggio",
    "Disco Volante", "Borsa Frigo", "Bancomat", "Cintura di Sicurezza", "Carrello della Spesa", "Proiettore",
    "AutoCAD", "Terremoto", "Sigma", "Chad", "Burundi", "Atmosfera", "Pianeta", "Gigante", "Trattore", "Televisione",
    "Polpettone", "Stagista", "Costumista", "Comunista", "Omosessuale", "Tendone", "Bastardo",
    "Volkswagen", "Schifoso", "fa schifo", "Ladro", "Coglione", "Maledetto", "Stronzo", "Cubo di Rubik",
    "Libro Scolastico", "Lurido", "Sporco", "Poster", "Torta di Fragole", "Congelato", "Lampadario",
    "Sparacarote", "Tapparella", "Mensola", "Bisonte", "Dinosauro", "Milano", "Amsterdam", "Termosifone",
    "Albero di Natale", "Inutile", "Puzzolente", "Interruttore", "Post-it", "Gnomo", "Libreria", "Insetto",
    "Cavalluccio Marino", "Scaldabagno", "Vasca da Bagno", "Cuscino Termico", "Palloncino Bucato", "Pescepalla",
    "Cacciavite Esagonale", "Telo da Mare", "Infradito", "Rincoglionito", "Addormentato", "Scatenato",
    "Strascatenato", "Etichettatrice", "Fastidioso", "Sfulminato", "Strasfulminato", "Cretino", "Spray Antizanzare",
    "Salvadanaio", "Idrossido di Sodio", "Idrossido di Potassio", "Cinese", "Montanaro", "Sparacazzate", "Agricoltore",
    "Toro", "LGBTQIA+", "Amazon Prime", "Testa di Cazzo", "Portatelefono", "Obeso", "Stramerda",
    "Straobeso", "Straciccione", "Ciccione", "Organizer di Cavi", "Porco", "Valigia", "Quercia", "Barcone",
    "Figura Retorica", "Equazione di 2° Grado", "Equazione", "Scatolone", "Cassetta Porta Attrezzi", "Carta di Credito",
    "Carta di Debito", "Contactless", "Bancomat", "Carta Regalo", "Vaso da Fiori", "Marciapiede", "Spalafieno",
    "Cavallo", "Posta Elettronica", "Appendiabiti", "Cappotto", "Portaombrelli", "Ignorante", "Pistacchio",
    "Fibra Ottica", "Sistema Solare", "Cassetto", "Password", "Foglio Protocollo", "Foglio A4", "Cartuccia per Stampanti",
    "Strano", "Strastrano", "Data Center", "Database", "Autostrada", "Sparamelanzane", "Tornado", "Spalaletame",
    "Troglodita", "Trigliceridi", "Colesterolo", "Fosfolipide", "Melone", "Straporco", "Straboia",
    "Stramerda", "Straschifoso", "Straladro", "Stracane", "Stratosferico", "Pterodattilo", "Rinoceronte", "Elefante",
    "Automobile", "Macchina da Curire", "Macchina da Scrivere", "Stracretino", "Stramaledetto", "Strastronzo",
    "Strabastardo", "Strasporco", "Stralurido", "Strafastidioso", "Strarincoglionito", "Rompipalle", "Strarompipalle",
    "Ferro da Stiro", "Regione Veneto", "Veneto", "Ventilatore", "Pantofola", "Stracchino", "Prosciutto",
    "Prosciutto Cotto", "Prosciutto Crudo", "Speck", "Lampada a LED", "Rai 1", "Rai 2", "Merdina",
    "Software di Editing", "Compressore ad'Aria", "Stampante 3D", "Casco da Minatore", "Scanner Laser",
    "Estintore", "Amplificatore WiFi", "Cuscino Cervicale", "Barattolo di Nutella", "Sveglia Digitale", "Termometro",
    "Motosega Elettrica", "Lente di Ingrandimento", "Tablet Rotto", "Tastiera Meccanica", "Simulatore di Volo",
    "Lava Pavimenti Automatico", "Controller PS5", "Luce LED RGB", "Occhiali VR", "Termometro a Infrarossi",
    "Piastra per Capelli", "Auricolari Bluetooth", "Zaino Antifurto", "Calcolatrice Scientifica", "Bidone Aspiratutto",
    "Rettangolare", "Ottaedro", "Proiezione Ortogonale", "Quadrato", "Triangolare", "Circolare", "Cubico", "Strabico",
    "Assonometria Isometrica", "Assonometria Cavaliera", "Assonometria Monometrica", "Pentagonale", "Pentagono",
    "Rettangolo", "Esagono", "Esagonale", "Ottagono", "Ottagonale", "Diedro", "Triedro", "Poliedro", "OGM", "Dodecagonale",
    "Decagonale", "Ettagonale", "Ettagono", "Emisfero Boreale", "Emisfero Australe", "Vietnamita",
    "Pakistano", "Azerbaijano", "Tajikistano", "Turkmenistano", "Afghanistano", "Uzbekistano", "Kazakhstano", "Kyrgyzstano",
    "Insetticida", "Tappetino da Yoga", "Lava Mani Automatico", "Asciugatore per Animali", "Tavoletta Grafica",
    "Speaker Smart", "Tenda Antivento", "Pannello LED Solare", "Barbecue Elettrico", "Contapassi Digitale",
    "Monitor Curvo", "Poltrona Massaggiante", "Ventilatore a Torre", "Spremiagrumi Elettrico", "Mouse Ergonomico",
    "Piantana LED", "Sottobicchiere Riscaldante", "Stampante Termica", "Box VR", "Drone con Telecamera",
    "Luce Notturna a Sensore", "Bottiglia Termica", "Mini Frigo USB", "Cornice Digitale", "Guanti Touchscreen",
    "Powerbank Solare", "Orologio Proiettore", "Supporto per Laptop", "Tagliere Intelligente", "Kit di Saldatura",
    "Termosmart", "Secchio a Pedale", "Contenitore Sottovuoto", "Multipresa Intelligente", "Cavo HDMI Flessibile",
    "Robot Aspirapolvere", "Fornello a Induzione", "Pad Riscaldante", "Umidificatore Portatile", "Specchio con LED",
    "Organizer da Scrivania", "Mini Videoproiettore", "Bilancia da Cucina", "Spazzolino Elettrico", "Forbici a Batteria",
    "Stampante per Etichette", "Torcia Dinamo", "Casco VR", "Friggitrice ad Aria", "Timer Magnetico", "Gancio da Porta",
    "Scatola Porta Cavi", "Pannello Fonoassorbente", "Lampada Antizanzare", "Pattumiera Intelligente",
    "Tritatutto Elettrico", "Poggiapolsi Ergonomico", "Pompa per Bici Elettrica", "Macchina per Popcorn",
    "Diffusore di Oli Essenziali", "Tappeto Antiscivolo", "Maniglia Intelligente", "Barra Magnetica",
    "Macchina per Bubble Tea", "Dispenser per Sapone", "Mini Lavatrice", "Lavapavimenti a Vapore",
    "Portaoggetti per Doccia", "Occhiali Intelligenti", "Radiolina Portatile", "Termocamera", "Lurido",
    "Cuscino Riscaldabile", "Mini Scaldapiedi", "Friggitrice Senza Olio", "Scaldapiedi", "5G Ultra Fold", "5G",
    "Wireless", "Sistema di Raffreddamento", "Conduzione Naturale", "Ombrellone", "eBook", "Email", "Costaricense",
    "Precipitevolissimevolmente", "Supercalifragilistichespiralidoso", "Mary Poppins", "Cieco", "Segmento",
    "Banconota", "Moneta Metallica", "American Express", "Mastercard", "VISA", "Rai Sport", "Lurido Bastardo",
    "DOP", "Motore a Benzina", "Motore Diesel", "Motore 4 Tempi", "Motore 2 Tempi", "IGP", "DOP", "Centrale Elettrica",
    "Atomo Biatomico Omonucleare", "Centrale Nucleare", "Nucleare", "Centrale Idroelettrica", "Pala Eolica",
    "Centrale Eolica", "Salame", "Mortadella", "McBoia", "McPorco", "McSchifoso", "McLadro", "Gran Crispy McBacon",
    "Insegnante", "Professore", "Bidone dell'Immondizia", "Obliteratrice", "Lavastoviglie", "Crostata", "Ministro",
    "Caricatore", "Cannone", "Scuola Superiore", "Scuola Media", "Incastrato", "di Colore", "Torta Bicolore",
    "Ricarica Wireless", "Colla Stick", "Contapillole Digitale", "Tagliaunghie Laser", "Cuscino Antistress",
    "Cappello con Ventilatore", "Spazzola per Gatti", "Portachiavi GPS", "Cucchiaio Elettronico", "Apriscatole Robotico",
    "Portabicchieri da Auto", "Caricatore Wireless", "Penne 10 Colori", "Mini Aspirabriciole", "Calza Termica",
    "Forno Solare", "Pettine a Vibrazione", "Zerbino Interattivo", "Tenda a Scomparsa", "Piantana Multifunzione",
    "Tappetino Musicale", "Cintura Massaggiante", "Cubo Magnetico", "Portatovaglioli Intelligente", "Lama da Cucina Giroscopica",
    "Specchio da Borsetta LED", "Bicchiere Automescolante", "Tritaghiaccio Portatile", "Rasoio USB", "Luce da Lettura",
    "Taglierina Rotante", "Raffreddatore per Laptop", "Sedile Riscaldato", "Zaino Solare", "Cuffiette a Conduzione Ossea",
    "Stampante Portatile", "Macina Pepe Automatico", "Proiettore Galassia", "Porta Scarpe da Porta", "Termometro da Cucina",
    "Lente Macro per Smartphone", "Mini Idropulitrice", "Cavo 3 in 1", "Timer da Cucina Magnetico", "Luce da Bicicletta",
    "Campanello Smart", "Forchetta Pieghevole", "Asciugacapelli Silenzioso", "Lavagna Digitale", "Organizer da Valigia",
    "Lampada Lava", "Asciugamani Elettrico", "Spremi Tubetto", "Portadocumenti Magnetico", "Bracciolo Organizzatore",
    "Tavolo Regolabile", "Palla Antistress", "Occhiali Anti Luce Blu", "Tastiera Laser", "Rilevatore di Movimento",
    "Borsa Pieghevole", "Timer a Sabbia LED", "Scolapasta Intelligente", "Pistola per Colla a Caldo", "Termometro da Frigo",
    "Bilancia per Valigie", "Gancio per Borse", "Fischietto Ultrasuoni", "Mini Ventilatore USB",
    "Tazza Cambia Colore", "Cintura Portasoldi", "Pattumiera da Scrivania", "Contenitore per Snack", "Gancio per Sedili Auto",
    "Supporto per Cellulare", "Mini Frullatore", "Porta Tablet da Letto", "Mascherina con LED", "Lucchetto Smart",
    "Pettine per Barba", "Scolabottiglie", "Tazza con Altoparlante", "Telo Antipioggia", "Cuffie per Dormire",
    "Piastra Waffle", "Coperchio Universale", "Pulitore per Occhiali", "Set per SushI", "Tronchesine USB", "Diffusore Auto",
    "Scaldacollo USB", "Stazione Meteo Portatile", "Mini Vaporella", "Tappo per Bottiglie", "Adesivo Antiscivolo",
    "Cuscinetto per Mouse", "Pennarelli Sbiadenti", "Lente per Libro", "Gancio Appenditutto", "Pettine Anti Zanzare",
    "Supporto Anti Rollover", "Barra LED per Armadio", "Faccia da Merda", "Faccia da Culo", "Panettone", "Pandoro",
    "Chiave Inglese", "Pistone", "Cuscinetto a Sfere", "Frizione", "Albero Motore", "Rondella Dentata", "Mammut",
    "Canaglia", "Cancaro", "Cancaroso", "Reazione Chimica", "Furgoncino dei Gelati", "Camioncino dei Gelati", "Deodorante",
    "Kane/Kagna", "Vakka", "Vaticano", "Porko", "Straporko", "Kretino", "Strakretino",
    "Attestato di Partecipazione", "Burrocacao alla Menta", "Erba Aromatica", "Kankaro", "Strakankaro", "Stracancaro",
    "Kankaroso", "Strakankaroso", "Vatikano", "Previsione del Meteo", "Tempo Meteorologico", "Skifoso", "Straskifoso",
    "Guardrail", "Merdoso", "Scanato", "Incubatrice", "Costituzione Italiana", "Costituzione Americana", "Bengalese",
    "Indiano", "DNA", "Visual Studio Code", "Nicaraguense", "Antiguo-Barbudano", "Cubano", "Atroce", "Bruciato", "Suino",
    "T-shirt", "T-rex", "Canestro", "Chihuahua", "Scimmia", "Avocado", "Gorilla", "Orangotango", "Pallavolista", "Bruschetta",
    "Cristoforo Colombo", "Homo Sapiens", "Australopiteco", "Bassotto", "Cocomero Marcio", "Anguria andata a Male",
    "Tagliatelle al Cinghiale", "Cinghiale", "Orso", "Pellerossa", "Postamat", "Carta Fedeltà", "NaCl", "Rotaia",
    "Gruppo Vacanze", "Swiffer", "Penna Scarica", "Penna Usata", "Pezzente", "Cover per Telefoni", "HTML", "CSS", "Alighieri",
    "Petrarca", "Boccaccio", "Tasso", "Leopardi", "Manzoni", "Pascoli", "Ungaretti", "Montale", "D'Annunzio", "Foscolo",
    "Carducci", "Cavolfiore", "Melanzana", "Pomodoro", "Cetriolo", "Finocchio", "Peperone", "Carota", "Zucchina", "Lattuga",
    "Radicchio", "Rucola", "Bietola", "Cipolla", "Aglio", "Broccolo", "Fagiolino", "Asparago", "Porro", "Sedano",
    "Rapa", "Zucca", "Barbabietola", "Cachi", "Mango", "Papaya", "Avocado", "Banana", "Fragola", "Anguria", "Melone", "Ciliegia",
    "Mela", "Pera", "Pesca", "Nettarina", "Albicocca", "Uva", "Ananas", "Kiwi", "Limone", "Mandarino", "Arancia", "Pompelmo",
    "Fico", "Melagrana", "Lampone", "Mirtillo", "Ribes", "More", "Tamarindo", "Carambola", "Litchi", "Noce", "Nocciola",
    "Mandorla", "Cocco", "Castagna", "Coccodrillo", "Pipistrello", "Alligatore", "Tirannosauro", "Paguro", "Canguro", "Cammello",
    "Ippopotamo", "Ornitorinco", "Fenicottero", "Pinguino", "Koala", "Giraffa", "Leone", "Tigre", "Lupo", "Volpe", "Scimmia",
    "Pantera", "Aquila", "Condor", "Falco", "Civetta", "Gufo", "Serpente", "Tartaruga", "Topo", "Ratto", "Talpa", "Castoro",
    "Scoiattolo", "Formichiere", "Bradipo", "Delfino", "Balena", "Squalo", "Medusa", "Polpo", "Calamaro", "Granchio",
    "Gambero", "Aragosta", "Riccio", "Stella Marina", "Cavalluccio Marino", "Corvo", "Cornacchia", "Gabbiano",
    "Piccione", "Passero", "Canarino", "Pappagallo", "Struzzo", "Emù", "Tacchino", "Gallina", "Gallo", "Anatra",
    "Oca", "Cigno", "Mosca", "Zanzara", "Ape", "Vespa", "Farfalla", "Cicala", "Coleottero", "Scarabeo", "Cavalletta",
    "Libellula", "Ragno", "Scorpione", "Lumaca", "Chiocciola", "Verme", "Larva", "Camaleonte", "Iguana", "Drago Barbuto",
    "Lucertola", "Gecko", "Salamandra", "Tritone", "Rospo", "Rana", "Anfisbena", "Colibrì", "Mangusta", "Tapiro", "Antenato",
    "Cervo", "Alce", "Gru", "Bufalo", "Antilope", "Gnu", "Lama", "Pecora", "Maiale", "Mucca", "Cavallo",
    "Asino", "Criceto", "Porcospino", "Toporagno", "Scoiattolo Volante", "Furetto", "Lontra", "Castoro", "Ghiro",
    "Mandrillo", "Macaco", "Bonobo", "Gorilla", "Scimpanzé", "e i 7 nani", "Scarico", "Discarica", "Pattumiera",
    "Acque Reflue", "Affluente", "Clown", "Orologio da Polso", "Orologio da Parete", "Sito Web", "Ventilatore Tascabile",
    "Liceo Scientifico", "Liceo Linguistico", "ITIS", "IPSIA", "Istituto Comprensivo Statale", "Statale", "Governo",
    "Frigorifero Tascabile", "Sbronzo", "Porchetta", "Ubriaco", "Astemio", "Materasso Gonfiabile", "Materasso",
    "Pistola ad'Acqua", "Tostiera", "Bicicletta", "Confezionato", "Industriale", "Allevamento Intensivo",
    "Cotoletta alla Bolognese", "Spaghetti alla Carbonara", "Pasta all'Amatriciana", "Pasticcio di Carne",
    "Polvere", "Cuscino Poggiapiedi", "Poggiapiedi", "Sparabestemmie", "COVID-19", "Ignorante", "Disabile", "Sottomarino",
    "Acquatico", "Pikachu", "Goku", "Aereo", "Aeroplano", "Cancello Automatico", "4 tempi", "2 tempi", "Portafiori",
    "Bicarbonato di Sodio", "Zuccherato", "Zuccherificio", "Panificio", "Cotto a Vapore", "Pizza Bianca", "nel Cesso", "Cesso",
    "Bestia", "Mercante", "Ebete", "Smerigliatrice", "Impestato", "Stupido", "Cagnolino", "Marcio", "Porcello",
];

// Lista aggettivi femminili da attribuire alle divinità
const aggettiviFemminili = [
    "Kinder Bueno", "GPT", "AI", "PowerPoint", "Microsoft Word", "PDF", "Onta",
    "WiFi", "Router", "Mouse", "Webcam", "Cloud", "Bluetooth", "Auricolare", "Google Classroom",
    "Smartwatch", "SSD", "USB-C", "Cavo HDMI", "Stampante", "Tastiera", "Puttana",
    "Minecraft", "Crafting Table", "Joystick", "Meccanica", "Ingegnere", "Programmatrice", "Pittrice",
    "Panettiera", "Bagnina", "Barista", "Corriere", "Tatuatrice", "Magazziniera", "Cameriera", "Corriera",
    "YouTuber", "Social Media Manager", "Forno Elettrico", "Carta Igienica", "Tram di Milano", "Boia",
    "Casse Bluetooth", "Cucchiaio Sporco", "Bidet Intelligente", "Pixelata",
    "Cagna", "Maiala", "Asina", "Pavone", "Gatto", "Piatto", "Tazza", "Tram",
    "Cucchiaio", "Letto", "Doccia", "Sedia", "Frigorifero", "Cuscino", "Armadio", "Tavolo",
    "Zaino", "Libro", "Matita", "Cimice", "Ragno", "Formica", "Neve", "Fumo", "Nebbia",
    "Vento", "Fulmine", "Tuono", "Fango", "Erba", "Sabbia", "Terra", "Sasso", "Cemento",
    "Pannello", "Secchio", "Serpente", "Muro", "Porta", "Finestra", "Tappeto", "Coperta",
    "Lavatrice", "Forno", "Bidet", "Cesso", "Lavandino", "Cassa", "Minestra",
    "Tiramisù", "Polpette", "Biscotto", "Caramella", "Crostata", "Pane", "Pizza", "Cicoria",
    "Insegna", "Semaforo", "Panchina", "Fontana", "Campanello", "Campana", "Statua", "Manichino",
    "Vigile", "Parrucchiera", "Pescatrice", "Benzinaia", "Falegname",
    "Idraulica", "Giardiniera", "Muratrice", "Camionista", "Spazzina", "Fabbro", "Contadina",
    "Postina", "Dinosauro", "Mummia", "Fantasma", "Cavaliera", "Merda", "Merdina",
    "Strega", "Vampiro", "Zombi", "Scheletro", "Alieno", "Robot", "Omino", "Bue", "Capra", "Pallone da Basket",
    "Puffo", "Yogurt alla Fragola", "Cavatappi", "Scatola di Cartone", "Maniglia", "Bottiglia d'Acqua",
    "Zebra", "Telecomando", "Macchina Fotografica", "Pannello Solare", "Biscottiera", "Limone",
    "Cacciavite", "Trivella", "Palo della Luce", "Semolino", "Spray Igienizzante", "Tenda da Campeggio",
    "Disco Volante", "Borsa Frigo", "Bancomat", "Cintura di Sicurezza", "Carrello della Spesa", "Proiettore",
    "AutoCAD", "Terremoto", "Sigma", "Chad", "Burundi", "Atmosfera", "Pianeta", "Gigante", "Trattore", "Televisione",
    "Polpettone", "Stagista", "Costumista", "Comunista", "Omosessuale", "Tendone", "Bastarda",
    "Volkswagen", "Schifosa", "fa schifo", "Ladra", "Cogliona", "Maledetta", "Stronza", "Cubo di Rubik",
    "Libro Scolastico", "Lurida", "Sporca", "Poster", "Torta di Fragole", "Congelata", "Lampadario",
    "Sparacarote", "Tapparella", "Mensola", "Bisonte", "Dinosauro", "Milano", "Amsterdam", "Termosifone",
    "Albero di Natale", "Inutile", "Puzzolente", "Interruttore", "Post-it", "Gnomo", "Libreria", "Insetto",
    "Cavalluccio Marino", "Scaldabagno", "Vasca da Bagno", "Cuscino Termico", "Palloncino Bucato", "Pescepalla",
    "Cacciavite Esagonale", "Telo da Mare", "Infradito", "Rincoglionita", "Addormentata", "Scatenata",
    "Strascatenata", "Etichettatrice", "Fastidiosa", "Sfulminata", "Strasfulminata", "Cretina", "Spray Antizanzare",
    "Salvadanaio", "Idrossido di Sodio", "Idrossido di Potassio", "Cinese", "Montanara", "Sparacazzate", "Agricoltore",
    "Toro", "LGBTQIA+", "Amazon Prime", "Testa di Cazzo", "Portatelefono", "Obesa", "Stramerda", "Vacca",
    "Straobesa", "Stracicciona", "Cicciona", "Organizer di Cavi", "Porca", "Valigia", "Quercia", "Barcone",
    "Figura Retorica", "Equazione di 2° Grado", "Equazione", "Scatolone", "Cassetta Porta Attrezzi", "Carta di Credito",
    "Carta di Debito", "Contactless", "Bancomat", "Carta Regalo", "Vaso da Fiori", "Marciapiede", "Spalafieno",
    "Cavallo", "Posta Elettronica", "Appendiabiti", "Cappotto", "Portaombrelli", "Ignorante", "Pistacchio",
    "Fibra Ottica", "Sistema Solare", "Cassetto", "Password", "Foglio Protocollo", "Foglio A4", "Cartuccia per Stampanti",
    "Strana", "Strastrana", "Data Center", "Database", "Autostrada", "Sparamelanzane", "Tornado", "Spalaletame",
    "Troglodita", "Trigliceridi", "Colesterolo", "Fosfolipide", "Melone", "Straporca", "Straboia",
    "Stramerda", "Straschifosa", "Straladra", "Stracagna", "Stratosferica", "Pterodattilo", "Rinoceronte", "Elefante",
    "Automobile", "Macchina da Curire", "Macchina da Scrivere", "Stracretina", "Stramaledetta", "Strastronza",
    "Strabastarda", "Strasporca", "Stralurida", "Strafastidiosa", "Strarincoglionita", "Rompipalle", "Strarompipalle",
    "Ferro da Stiro", "Regione Veneto", "Veneta", "Ventilatore", "Pantofola", "Stracchino", "Prosciutto",
    "Prosciutto Cotto", "Prosciutto Crudo", "Speck", "Lampada a LED", "Rai 1", "Rai 2", "Lurida",
    "Software di Editing", "Compressore ad'Aria", "Stampante 3D", "Casco da Minatore", "Scanner Laser",
    "Estintore", "Amplificatore WiFi", "Cuscino Cervicale", "Barattolo di Nutella", "Sveglia Digitale", "Termometro",
    "Motosega Elettrica", "Lente di Ingrandimento", "Tablet Rotto", "Tastiera Meccanica", "Simulatore di Volo",
    "Lava Pavimenti Automatico", "Controller PS5", "Luce LED RGB", "Occhiali VR", "Termometro a Infrarossi",
    "Piastra per Capelli", "Auricolari Bluetooth", "Zaino Antifurto", "Calcolatrice Scientifica", "Bidone Aspiratutto",
    "Rettangolare", "Ottaedro", "Proiezione Ortogonale", "Quadrato", "Triangolare", "Circolare", "Cubica", "Strabica",
    "Assonometria Isometrica", "Assonometria Cavaliera", "Assonometria Monometrica", "Pentagonale", "Pentagono",
    "Rettangolo", "Esagono", "Esagonale", "Ottagono", "Ottagonale", "Diedro", "Triedro", "Poliedro", "OGM", "Dodecagonale",
    "Decagonale", "Ettagonale", "Ettagono", "Emisfero Boreale", "Emisfero Australe", "Vietnamita",
    "Pakistana", "Azerbaijana", "Tajikistana", "Turkmenistana", "Afghanistana", "Uzbekistana", "Kazakhstana", "Kyrgyzstana",
    "Insetticida", "Tappetino da Yoga", "Lava Mani Automatico", "Asciugatore per Animali", "Tavoletta Grafica",
    "Speaker Smart", "Tenda Antivento", "Pannello LED Solare", "Barbecue Elettrico", "Contapassi Digitale",
    "Monitor Curvo", "Poltrona Massaggiante", "Ventilatore a Torre", "Spremiagrumi Elettrico", "Mouse Ergonomico",
    "Piantana LED", "Sottobicchiere Riscaldante", "Stampante Termica", "Box VR", "Drone con Telecamera",
    "Luce Notturna a Sensore", "Bottiglia Termica", "Mini Frigo USB", "Cornice Digitale", "Guanti Touchscreen",
    "Powerbank Solare", "Orologio Proiettore", "Supporto per Laptop", "Tagliere Intelligente", "Kit di Saldatura",
    "Termosmart", "Secchio a Pedale", "Contenitore Sottovuoto", "Multipresa Intelligente", "Cavo HDMI Flessibile",
    "Robot Aspirapolvere", "Fornello a Induzione", "Pad Riscaldante", "Umidificatore Portatile", "Specchio con LED",
    "Organizer da Scrivania", "Mini Videoproiettore", "Bilancia da Cucina", "Spazzolino Elettrico", "Forbici a Batteria",
    "Stampante per Etichette", "Torcia Dinamo", "Casco VR", "Friggitrice ad Aria", "Timer Magnetico", "Gancio da Porta",
    "Scatola Porta Cavi", "Pannello Fonoassorbente", "Lampada Antizanzare", "Pattumiera Intelligente",
    "Tritatutto Elettrico", "Poggiapolsi Ergonomico", "Pompa per Bici Elettrica", "Macchina per Popcorn",
    "Diffusore di Oli Essenziali", "Tappeto Antiscivolo", "Maniglia Intelligente", "Barra Magnetica",
    "Macchina per Bubble Tea", "Dispenser per Sapone", "Mini Lavatrice", "Lavapavimenti a Vapore",
    "Portaoggetti per Doccia", "Occhiali Intelligenti", "Radiolina Portatile", "Termocamera",
    "Cuscino Riscaldabile", "Mini Scaldapiedi", "Friggitrice Senza Olio", "Scaldapiedi", "5G Ultra Fold", "5G",
    "Wireless", "Sistema di Raffreddamento", "Conduzione Naturale", "Ombrellone", "eBook", "Email", "Costaricense",
    "Precipitevolissimevolmente", "Supercalifragilistichespiralidoso", "Mary Poppins", "Cieco", "Segmento",
    "Banconota", "Moneta Metallica", "American Express", "Mastercard", "VISA", "Rai Sport", "Lurida Bastarda",
    "DOP", "Motore a Benzina", "Motore Diesel", "Motore 4 Tempi", "Motore 2 Tempi", "IGP", "DOP", "Centrale Elettrica",
    "Atomo Biatomico Omonucleare", "Centrale Nucleare", "Nucleare", "Centrale Idroelettrica", "Pala Eolica",
    "Centrale Eolica", "Salame", "Mortadella", "McBoia", "McPorca", "McSchifosa", "McLadra", "Gran Crispy McBacon",
    "Insegnante", "Professore", "Bidone dell'Immondizia", "Obliteratrice", "Lavastoviglie", "Crostata", "Ministro",
    "Caricatore", "Cannone", "Scuola Superiore", "Scuola Media", "Incastrata", "di Colore", "Torta Bicolore",
    "Ricarica Wireless", "Colla Stick", "Contapillole Digitale", "Tagliaunghie Laser", "Cuscino Antistress",
    "Cappello con Ventilatore", "Spazzola per Gatti", "Portachiavi GPS", "Cucchiaio Elettronico", "Apriscatole Robotico",
    "Portabicchieri da Auto", "Caricatore Wireless", "Penne 10 Colori", "Mini Aspirabriciole", "Calza Termica",
    "Forno Solare", "Pettine a Vibrazione", "Zerbino Interattivo", "Tenda a Scomparsa", "Piantana Multifunzione",
    "Tappetino Musicale", "Cintura Massaggiante", "Cubo Magnetico", "Portatovaglioli Intelligente", "Lama da Cucina Giroscopica",
    "Specchio da Borsetta LED", "Bicchiere Automescolante", "Tritaghiaccio Portatile", "Rasoio USB", "Luce da Lettura",
    "Taglierina Rotante", "Raffreddatore per Laptop", "Sedile Riscaldato", "Zaino Solare", "Cuffiette a Conduzione Ossea",
    "Stampante Portatile", "Macina Pepe Automatico", "Proiettore Galassia", "Porta Scarpe da Porta", "Termometro da Cucina",
    "Lente Macro per Smartphone", "Mini Idropulitrice", "Cavo 3 in 1", "Timer da Cucina Magnetico", "Luce da Bicicletta",
    "Campanello Smart", "Forchetta Pieghevole", "Asciugacapelli Silenzioso", "Lavagna Digitale", "Organizer da Valigia",
    "Lampada Lava", "Asciugamani Elettrico", "Spremi Tubetto", "Portadocumenti Magnetico", "Bracciolo Organizzatore",
    "Tavolo Regolabile", "Palla Antistress", "Occhiali Anti Luce Blu", "Tastiera Laser", "Rilevatore di Movimento",
    "Borsa Pieghevole", "Timer a Sabbia LED", "Scolapasta Intelligente", "Pistola per Colla a Caldo", "Termometro da Frigo",
    "Bilancia per Valigie", "Gancio per Borse", "Fischietto Ultrasuoni", "Mini Ventilatore USB",
    "Tazza Cambia Colore", "Cintura Portasoldi", "Pattumiera da Scrivania", "Contenitore per Snack", "Gancio per Sedili Auto",
    "Supporto per Cellulare", "Mini Frullatore", "Porta Tablet da Letto", "Mascherina con LED", "Lucchetto Smart",
    "Pettine per Barba", "Scolabottiglie", "Tazza con Altoparlante", "Telo Antipioggia", "Cuffie per Dormire",
    "Piastra Waffle", "Coperchio Universale", "Pulitore per Occhiali", "Set per SushI", "Tronchesine USB", "Diffusore Auto",
    "Scaldacollo USB", "Stazione Meteo Portatile", "Mini Vaporella", "Tappo per Bottiglie", "Adesivo Antiscivolo",
    "Cuscinetto per Mouse", "Pennarelli Sbiadenti", "Lente per Libro", "Gancio Appenditutto", "Pettine Anti Zanzare",
    "Supporto Anti Rollover", "Barra LED per Armadio", "Faccia da Merda", "Faccia da Culo", "Panettone", "Pandoro",
    "Chiave Inglese", "Pistone", "Cuscinetto a Sfere", "Frizione", "Albero Motore", "Rondella Dentata", "Mammut",
    "Canaglia", "Cancara", "Cancarosa", "Reazione Chimica", "Furgoncino dei Gelati", "Camioncino dei Gelati",
    "Kane/Kagna", "Vakka", "Vaticana", "Porka", "Straporka", "Kretina", "Strakretina", "Deodorante",
    "Attestato di Partecipazione", "Burrocacao alla Menta", "Erba Aromatica", "Kankara", "Strakankara", "Stracancara",
    "Kankarosa", "Strakankarosa", "Vatikana", "Previsione del Meteo", "Tempo Meteorologico", "Skifosa", "Straskifosa",
    "Guardrail", "Merdosa", "Scanata", "Incubatrice", "Costituzione Italiana", "Costituzione Americana", "Bengalese",
    "Indiana", "DNA", "Visual Studio Code", "Nicaraguense", "Antiguo-Barbudana", "Cubana", "Atroce", "Bruciata", "Suina",
    "T-shirt", "T-rex", "Canestro", "Chihuahua", "Scimmia", "Avocado", "Gorilla", "Orangotango", "Pallavolista", "Bruschetta",
    "Cristoforo Colombo", "Homo Sapiens", "Australopiteco", "Bassotto", "Cocomero Marcio", "Anguria andata a Male",
    "Tagliatelle al Cinghiale", "Cinghiale", "Orso", "Pellerossa", "Postamat", "Carta Fedeltà", "NaCl", "Rotaia",
    "Gruppo Vacanze", "Swiffer", "Penna Scarica", "Penna Usata", "Pezzente", "Cover per Telefoni", "HTML", "CSS", "Alighieri",
    "Petrarca", "Boccaccio", "Tasso", "Leopardi", "Manzoni", "Pascoli", "Ungaretti", "Montale", "D'Annunzio", "Foscolo",
    "Carducci", "Cavolfiore", "Melanzana", "Pomodoro", "Cetriolo", "Finocchio", "Peperone", "Carota", "Zucchina", "Lattuga",
    "Radicchio", "Rucola", "Bietola", "Cipolla", "Aglio", "Broccolo", "Fagiolino", "Asparago", "Porro", "Sedano",
    "Rapa", "Zucca", "Barbabietola", "Cachi", "Mango", "Papaya", "Avocado", "Banana", "Fragola", "Anguria", "Melone", "Ciliegia",
    "Mela", "Pera", "Pesca", "Nettarina", "Albicocca", "Uva", "Ananas", "Kiwi", "Limone", "Mandarino", "Arancia", "Pompelmo",
    "Fico", "Melagrana", "Lampone", "Mirtillo", "Ribes", "More", "Tamarindo", "Carambola", "Litchi", "Noce", "Nocciola",
    "Mandorla", "Cocco", "Castagna", "Coccodrillo", "Pipistrello", "Alligatore", "Tirannosauro", "Paguro", "Canguro", "Cammello",
    "Ippopotamo", "Ornitorinco", "Fenicottero", "Pinguino", "Koala", "Giraffa", "Leone", "Tigre", "Lupo", "Volpe", "Scimmia",
    "Pantera", "Aquila", "Condor", "Falco", "Civetta", "Gufo", "Serpente", "Tartaruga", "Topo", "Ratto", "Talpa", "Castoro",
    "Scoiattolo", "Formichiere", "Bradipo", "Delfino", "Balena", "Squalo", "Medusa", "Polpo", "Calamaro", "Granchio",
    "Gambero", "Aragosta", "Riccio", "Stella Marina", "Cavalluccio Marino", "Corvo", "Cornacchia", "Gabbiano",
    "Piccione", "Passero", "Canarino", "Pappagallo", "Struzzo", "Emù", "Tacchino", "Gallina", "Gallo", "Anatra",
    "Oca", "Cigno", "Mosca", "Zanzara", "Ape", "Vespa", "Farfalla", "Cicala", "Coleottero", "Scarabeo", "Cavalletta",
    "Libellula", "Ragno", "Scorpione", "Lumaca", "Chiocciola", "Verme", "Larva", "Camaleonte", "Iguana", "Drago Barbuto",
    "Lucertola", "Gecko", "Salamandra", "Tritone", "Rospo", "Rana", "Anfisbena", "Colibrì", "Mangusta", "Tapiro", "Antenato",
    "Cervo", "Alce", "Gru", "Bufalo", "Antilope", "Gnu", "Lama", "Pecora", "Maiale", "Mucca", "Cavallo",
    "Asino", "Criceto", "Porcospino", "Toporagno", "Scoiattolo Volante", "Furetto", "Lontra", "Castoro", "Ghiro",
    "Mandrillo", "Macaco", "Bonobo", "Gorilla", "Scimpanzé", "e i 7 nani", "Scarica", "Discarica", "Pattumiera",
    "Acque Reflue", "Affluente", "Clown", "Orologio da Polso", "Orologio da Parete", "Sito Web", "Ventilatore Tascabile",
    "Liceo Scientifico", "Liceo Linguistico", "ITIS", "IPSIA", "Istituto Comprensivo Statale", "Statale", "Governo",
    "Frigorifero Tascabile", "Sbronza", "Porchetta", "Ubriaca", "Astemia", "Materasso Gonfiabile", "Materasso",
    "Pistola ad'Acqua", "Tostiera", "Bicicletta", "Confezionata", "Industriale", "Allevamento Intensivo",
    "Cotoletta alla Bolognese", "Spaghetti alla Carbonara", "Pasta all'Amatriciana", "Pasticcio di Carne",
    "Polvere", "Cuscino Poggiapiedi", "Poggiapiedi", "Sparabestemmie", "COVID-19", "Ignorante", "Disabile", "Sottomarina",
    "Acquatica", "Pikachu", "Goku", "Aereo", "Aeroplano", "Cancello Automatico", "4 tempi", "2 tempi", "Portafiori",
    "Bicarbonato di Sodio", "Zuccherata", "Zuccherificio", "Panificio", "Cotta a Vapore", "Pizza Bianca", "nel Cesso", "Cesso",
    "Bestia", "Mercante", "Ebete", "Smerigliatrice", "Impestata", "Stupida", "Cagnolina", "Marcia", "Porcella",
];

// Lista prefissi maschili da attribuire alle divinità
const prefissiMaschili = [
    "Porco", "Mannaggia a", "Maledetto", "Ladro", "Schifoso", "Boia", "Fastidioso", "Merda", "Bastardo",
    "Coglione", "Stronzo", "Lurido", "Sporco", "Rincoglionito", "Addormentato", "Scatenato", "Lurido",
    "Fastidioso", "Sfulminato", "Cretino", "Ciccione", "Stramerda", "Straporco", "Stramaiale", "Bestia",
    "Porcello",
];

// Lista prefissi femminili da attribuire alle divinità
const prefissiFemminili = [
    "Porca", "Mannaggia alla", "Maledetta", "Ladra", "Schifosa", "Boia", "Fastidiosa", "Merda", "Bastarda",
    "Cogliona", "Stronza", "Lurida", "Sporca", "Rincoglionita", "Addormentata", "Scatenata", "Lurida",
    "Fastidiosa", "Sfulminata", "Cretina", "Cicciona", "Stramerda", "Quella Vacca della", "Vacca",
    "Straporca", "Stramaiala", "Puttana", "Bestia", "Porcella", "Puttana la", "Porcella la", "Vacca la",
];

// Genera bestemmia
function generaBestemmia() {
    function getRandom(arr) { return arr[Math.floor(Math.random() * arr.length)] };

    const isMaschile = Math.random() < 0.5;

    const divinita = isMaschile ? getRandom(divinitaMaschili) : getRandom(divinitaFemminili);
    const aggettivo1 = isMaschile ? getRandom(aggettiviMaschili) : getRandom(aggettiviFemminili);
    const aggettivo2 = isMaschile ? getRandom(aggettiviMaschili) : getRandom(aggettiviFemminili);
    const prefisso = isMaschile ? getRandom(prefissiMaschili) : getRandom(prefissiFemminili);

    const formato = Math.floor(Math.random() * 5);

    let frase = "";

    switch (formato) {
        case 0: // divinità + aggettivo
            frase = `${divinita} ${aggettivo1}`;
            break;
        case 1: // divinità + aggettivo1 + aggettivo2
            frase = `${divinita} ${aggettivo1} ${aggettivo2}`;
            break;
        case 2: // prefisso + divinità + aggettivo1
            frase = `${prefisso} ${divinita} ${aggettivo1}`;
            break;
        case 3: // prefisso + divinità + aggettivo1 + aggettivo2
            frase = `${prefisso} ${divinita} ${aggettivo1} ${aggettivo2}`;
            break;
        case 4: // prefisso + divinità
            frase = `${prefisso} ${divinita}`;
            break;
    };

    document.getElementById("bestemmia").textContent = frase;
}

// Contatore bestemmie
let bestemmieTotali =
    // divinità + aggettivo
    divinitaMaschili.length * aggettiviMaschili.length +
    divinitaFemminili.length * aggettiviFemminili.length +
    // divinità + aggettivo1 + aggettivo2
    divinitaMaschili.length * aggettiviMaschili.length * aggettiviMaschili.length +
    divinitaFemminili.length * aggettiviFemminili.length * aggettiviFemminili.length +
    // prefisso + divinità + aggettivo
    prefissiMaschili.length * divinitaMaschili.length * aggettiviMaschili.length +
    prefissiFemminili.length * divinitaFemminili.length * aggettiviFemminili.length +
    // prefisso + divinità + aggettivo1 + aggettivo2
    prefissiMaschili.length * divinitaMaschili.length * aggettiviMaschili.length * aggettiviMaschili.length +
    prefissiFemminili.length * divinitaFemminili.length * aggettiviFemminili.length * aggettiviFemminili.length +
    // prefisso + divinità
    prefissiMaschili.length * divinitaMaschili.length +
    prefissiFemminili.length * divinitaFemminili.length;

// Informazioni approfondite
document.getElementById("bestemmieTotali").textContent = bestemmieTotali.toLocaleString("it-IT");
document.getElementById("divinitaTotali").textContent = (divinitaMaschili.length + divinitaFemminili.length).toLocaleString("it-IT");
document.getElementById("divinitaMaschili").textContent = divinitaMaschili.length.toLocaleString("it-IT");
document.getElementById("divinitaFemminili").textContent = divinitaFemminili.length.toLocaleString("it-IT");
document.getElementById("aggettiviTotali").textContent = (aggettiviMaschili.length + aggettiviFemminili.length).toLocaleString("it-IT");
document.getElementById("aggettiviMaschili").textContent = aggettiviMaschili.length.toLocaleString("it-IT");
document.getElementById("aggettiviFemminili").textContent = aggettiviFemminili.length.toLocaleString("it-IT");
document.getElementById("prefissiTotali").textContent = (prefissiMaschili.length + prefissiFemminili.length).toLocaleString("it-IT");
document.getElementById("prefissiMaschili").textContent = prefissiMaschili.length.toLocaleString("it-IT");
document.getElementById("prefissiFemminili").textContent = prefissiFemminili.length.toLocaleString("it-IT");