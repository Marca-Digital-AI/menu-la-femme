// Dados do menu La Femme Sabores
// Fonte comida: menu-refeicoes-la-femme-2026-07-01.pdf (menu actualizado do cliente)
// Fonte bebidas: menu impresso anterior (secção de bebidas, sem actualização mais recente)
const MENU_DATA = [
  {
    id: "sopas",
    label: "Sopas",
    icon: "🥣",
    items: [
      { name: "Sopa de Legumes", desc: "Legumes em cubos, puré de batata e abóbora", price: "2.500 Kz" },
      { name: "Sopa à Pescadora", desc: "Peixe em cubo, legumes em cubos", price: "2.500 Kz" },
      { name: "Caldo Verde", desc: "Puré de batata, couve juliana e tiras de chouriço", price: "2.500 Kz" },
      { name: "Creme de Abóbora", desc: "Puré de abóbora e cenoura", price: "2.500 Kz" },
      { name: "Sopa da Pedra", desc: "Puré de feijão, legumes em cubos, sispes e tiras de chouriço", price: "3.000 Kz" },
      { name: "Caldo de Peixe", desc: "Peixe fresco, peixe seco, batata doce, mandioca e farinha", price: "8.500 Kz" }
    ]
  },
  {
    id: "entradas",
    label: "Entradas & Petiscos",
    icon: "🍢",
    items: [
      { name: "Canapés La Femme", desc: "Azeitonas, torradas, molho tártaro, frango desfiado e carne moída", price: "3.500 Kz" },
      { name: "Ceviche de Peixe Branco", desc: "Cubos de peixe, sumo de limão, cebola laminada e frutas em cubos", price: "7.500 Kz" },
      { name: "Choco Crocante La Femme", desc: "Tiras de choco com especiarias", price: "9.650 Kz", signature: true },
      { name: "Mix de Salgados", desc: "Coxinhas, pastéis de massa e croquetes", price: "6.000 Kz" },
      { name: "Camarão ao Alho", desc: "Camarões salteados ao cheiro verde", price: "12.500 Kz" },
      { name: "Camarão Frito", desc: "", price: "10.250 Kz" },
      { name: "Pica-Pau de Novilho", desc: "Carne em cubos, picles, azeitonas e molho madeira", price: "8.900 Kz" },
      { name: "Pica-Pau do Mar", desc: "Frutos do mar em cubos, picles e cheiro verde", price: "9.900 Kz" },
      { name: "Couvert de Quitutes da Terra", desc: "Bombó frito ou assado, gimguba torrada, banana pão ou batata", price: "3.000 Kz" },
      { name: "Salada de Polvo", desc: "", price: "7.690 Kz" },
      { name: "Nogueth ao Molho Tártaro", desc: "Peito de frango em cubos e cheiro verde", price: "7.000 Kz" },
      { name: "Joaquinzinho", desc: "Carapinha, molho escabeche, picante e cheiro verde", price: "4.000 Kz" },
      { name: "Dobradinha La Femme", desc: "Feijão branco, azeitonas, legumes em cubos e torradas", price: "6.000 Kz" },
      { name: "Frango à Passarinho", desc: "Frango em cubos, picles, cheiro verde e molho coquetel", price: "6.900 Kz" },
      { name: "Asinhas Panadas ao Molho Coquetel", desc: "Farinha panko e asinhas crocantes", price: "7.000 Kz" },
      { name: "Chouriço Caseiro", desc: "Torradas e molho do chefe", price: "7.500 Kz" },
      { name: "Moelas La Femme", desc: "Legumes em cubos, torradas e azeitonas", price: "5.000 Kz" },
      { name: "Tiras de Porco", desc: "Picles, lombos de porco, azeitonas, molho coquetel e torradas", price: "7.800 Kz" }
    ]
  },
  {
    id: "fastfood",
    label: "Fast Food",
    icon: "🍔",
    items: [
      { name: "Hambúrguer La Femme", desc: "Bacon, molho madeira, fiambre, ovo, queijo, salada mista, duas carnes, legumes e batatas fritas", price: "10.000 Kz" },
      { name: "Prego no Pão", desc: "Pão baguete, bife vazia, ovo e batatas fritas", price: "7.000 Kz" },
      { name: "Sandes Mista à Sabores", desc: "Pão baguete, ovo, frango desfiado e molhos à escolha do cliente", price: "6.000 Kz" }
    ]
  },
  {
    id: "carnes",
    label: "Carnes",
    icon: "🥩",
    items: [
      { name: "Frango Grelhado", desc: "Meio frango, vinagrete, batata frita e picles", price: "9.000 Kz" },
      { name: "Entrecosto Grelhado", desc: "Arroz à grega, batata frita e molho madeira", price: "12.000 Kz" },
      { name: "Grelhada Mista 1 Pax", desc: "Coxa de frango, entrecosto, linguiça, batatas fritas, feijão preto, ananás, laranja e vinagrete", price: "15.500 Kz" },
      { name: "Grelhada Mista 2 Pax", desc: "Meio frango, bife vazia, febras, entrecosto, linguiça, chouriço, batatas fritas, feijão preto, ananás, laranja, vinagrete e arroz", price: "30.500 Kz" },
      { name: "Grelhada Mista La Femme", desc: "Picanha, meio frango, bife de vazia, febras, linguiça, chouriço, batatas fritas, feijão preto, ananás, laranja, vinagrete e arroz", price: "50.000 Kz", signature: true },
      { name: "Medalhão de Vazia", desc: "Vazia, arroz à grega, mandioca cremosa e molho de vinho tinto", price: "16.900 Kz" },
      { name: "Bife à La Femme", desc: "Medalhão de lombo, batatas fritas, molho madeira e tomate confeitado", price: "15.000 Kz" },
      { name: "Bitoque", desc: "Carne vazia, arroz branco, salada mista, batatas fritas e ovo", price: "13.500 Kz" },
      { name: "Prego no Prato", desc: "Bife, ovo e batatas fritas", price: "12.500 Kz" },
      { name: "Picanha", desc: "Batatas fritas, banana, farofa, ananás, laranja, feijão preto e arroz", price: "17.900 Kz", signature: true },
      { name: "Estrogonoff de Carne", desc: "Tiras de carne, cogumelos, natas, arroz e cheiro verde", price: "14.700 Kz" },
      { name: "Estrogonoff de Frango", desc: "Tiras de frango, cogumelos, natas, arroz e cheiro verde", price: "13.000 Kz" },
      { name: "Entrecosto Selado ao Molho de Leite de Coco", desc: "Arroz pupilo, molho de alho e batata à padeiro", price: "12.800 Kz" },
      { name: "Tiras de Carne", desc: "Maminha, funge, molho de tomate e quizaca", price: "12.500 Kz" },
      { name: "Tiras de Porco Nacional", desc: "Carne de porco nacional, funge, molho de tomate e couve refogada", price: "12.500 Kz" }
    ]
  },
  {
    id: "peixes",
    label: "Peixes & Mariscos",
    icon: "🐟",
    items: [
      { name: "Medalhão de Atum ao Molho de Espinafre", desc: "Batata salteada e esparregado de espinafre", price: "10.000 Kz" },
      { name: "Tranché de Legumes com Arroz de Risotto", desc: "Lombo de corvina, arroz e salada mista", price: "14.000 Kz" },
      { name: "Cozido de Garoupa", desc: "Batata nacional, legumes em cubos e ovos", price: "17.000 Kz" },
      { name: "Corvina", desc: "Posta de corvina, legumes em cubos, leite de coco e cheiro verde", price: "13.500 Kz" },
      { name: "Peixe Grelhado com Legumes Salteados", desc: "Peixe linguado, batata doce e cheiro verde", price: "13.500 Kz" },
      { name: "Choco Grelhado", desc: "Batata ao murro, legumes em cubos e molho de alho", price: "15.500 Kz" },
      { name: "Garoupa Grelhada", desc: "Posta, ou consultar a cozinha — batata doce cozida, legumes salteados e molho de alho", price: "17.000 Kz" },
      { name: "Arroz de Mariscos", desc: "Caranguejo, camarão, peixe corvina, lagosta, mexilhões, arroz, legumes em rodelas e cheiro verde", price: "50.000 Kz", signature: true },
      { name: "Lagosta Grelhada", desc: "Molho de alho, batata doce à lapiseira e legumes em cubos", price: "18.000 Kz" },
      { name: "Bacalhau à Lagareiro", desc: "Batatas em cubos, cebolada, molho de alho e cheiro verde", price: "35.000 Kz", signature: true }
    ]
  },
  {
    id: "nacionais",
    label: "Pratos Nacionais",
    icon: "🍲",
    items: [
      { name: "Peito Alto", desc: "Carne de vaca, feijão de óleo de palma e funge", price: "13.000 Kz" },
      { name: "Calulu de Carne Seca", desc: "Feijão de óleo de palma, funge e kizaca", price: "14.000 Kz" },
      { name: "Muamba de Galinha Nacional", desc: "Galinha, funge e couve refogada", price: "12.000 Kz" },
      { name: "Macayabo", desc: "Fumbua, catato, molho de beringela e chicuanga", price: "10.000 Kz" },
      { name: "Calulu de Peixe Fresco e Seco", desc: "Peixe corvina fresco e seco, funge e feijão de óleo de palma", price: "12.000 Kz" },
      { name: "Mufete La Femme", desc: "Peixe chopa ou carapau, batata doce, mandioca, banana pão, vinagrete, farinha musseque e feijão de óleo de palma", price: "10.000 Kz", signature: true }
    ]
  },
  {
    id: "guarnicoes",
    label: "Guarnições",
    icon: "🍚",
    items: [
      { name: "Arroz Branco", desc: "", price: "2.700 Kz" },
      { name: "Arroz de Feijão", desc: "", price: "2.700 Kz" },
      { name: "Arroz Pupilo", desc: "", price: "2.800 Kz" },
      { name: "Feijão Preto", desc: "", price: "2.700 Kz" },
      { name: "Feijão de Óleo de Palma", desc: "", price: "2.700 Kz" },
      { name: "Legumes Salteados", desc: "", price: "2.700 Kz" },
      { name: "Salada Mista", desc: "", price: "2.700 Kz" },
      { name: "Batatas Fritas", desc: "", price: "2.700 Kz" },
      { name: "Batata Doce Cozida", desc: "", price: "2.700 Kz" },
      { name: "Funge", desc: "", price: "2.500 Kz" },
      { name: "Couve Frita", desc: "", price: "2.000 Kz" }
    ]
  },
  {
    id: "sobremesas",
    label: "Sobremesas",
    icon: "🍰",
    items: [
      { name: "Arroz Doce", desc: "Arroz, leite em pó, canela e raspa de limão", price: "3.000 Kz" },
      { name: "Mousse de Limão", desc: "Natas, leite, limão e segredo da casa", price: "3.000 Kz" },
      { name: "Mousse La Femme", desc: "Múcua, natas e segredo da casa", price: "3.000 Kz", signature: true },
      { name: "Mousse de Chocolate", desc: "Natas, leite, chocolate e segredo da casa", price: "3.000 Kz" },
      { name: "Bolo", desc: "", price: "5.000 Kz" },
      { name: "Petit Gâteau", desc: "", price: "9.000 Kz" },
      { name: "Couvert de Doces de Kitutes", desc: "Pé de moleque, quejada, miconde, paçoca de ginguba e gengibre", price: "5.000 Kz" },
      { name: "Gelado de Chocolate", desc: "", price: "3.000 Kz" },
      { name: "Gelado de Baunilha", desc: "", price: "3.000 Kz" },
      { name: "Gelado de Morango", desc: "", price: "3.000 Kz" }
    ]
  },
  {
    id: "infantil",
    label: "Menu Infantil",
    icon: "🧒",
    items: [
      { name: "Bifinho de Novilho", desc: "Bife de lombo, natas, cogumelos, molho madeira e arroz branco", price: "9.000 Kz" },
      { name: "Estrogonofe de Frango", desc: "Tiras de frango, cogumelos, natas, arroz e cheiro verde", price: "9.000 Kz" },
      { name: "Bifana com Batata Chips", desc: "Bife de porco, batata doce e arroz agrego", price: "9.000 Kz" },
      { name: "Bolonhesa La Femme", desc: "Carne moída, queijo mussarela e massa esparguete", price: "9.900 Kz" },
      { name: "Hambúrguer no Prato", desc: "", price: "8.900 Kz" },
      { name: "Mini Hambúrguer de Novilho", desc: "Uma carne, queijo, molho madeira e batata palha", price: "7.000 Kz" },
      { name: "Mini Hambúrguer de Frango", desc: "Frango, queijo, batata palha e molho branco", price: "7.000 Kz" }
    ]
  },
  {
    id: "bebidas-sem-alcool",
    label: "Águas & Refrigerantes",
    icon: "🥤",
    items: [
      { name: "Água 0,5 L", desc: "", price: "700 Kz" },
      { name: "Água 1,5 L", desc: "", price: "1.200 Kz" },
      { name: "Água das Pedras", desc: "", price: "2.000 Kz" },
      { name: "Água Castello", desc: "", price: "2.000 Kz" },
      { name: "Água Tónica", desc: "", price: "1.300 Kz" },
      { name: "Pepsi / Pepsi Zero / Seven Up / Mirinda", desc: "", price: "1.000 Kz" },
      { name: "Coca-Cola / Coca-Cola Zero", desc: "", price: "1.300 Kz" },
      { name: "Fanta / Sprite", desc: "", price: "1.300 Kz" },
      { name: "Sumo Natural — Limão / Múcua / Melancia", desc: "", price: "5.800 Kz" },
      { name: "Sumo Natural — Laranja", desc: "", price: "6.750 Kz" },
      { name: "Sumo Natural — Ananás", desc: "", price: "6.000 Kz" },
      { name: "Sumo Natural — Maracujá", desc: "", price: "7.100 Kz" },
      { name: "Sumo Tropical", desc: "", price: "7.500 Kz" },
      { name: "Café Expresso", desc: "", price: "1.300 Kz" },
      { name: "Chá", desc: "", price: "1.000 Kz" },
      { name: "Chá da Casa", desc: "", price: "1.500 Kz" }
    ]
  },
  {
    id: "cervejas",
    label: "Cervejas",
    icon: "🍺",
    items: [
      { name: "Eka / Cuca / Nocal (lata)", desc: "", price: "1.700 Kz" },
      { name: "Booster Cider / Manga / Morango (lata)", desc: "", price: "1.700 Kz" },
      { name: "Fino Eka / Fino Cuca (pressão)", desc: "", price: "1.200 Kz" },
      { name: "Lambreta (pressão)", desc: "", price: "750 Kz" },
      { name: "Caneca (pressão)", desc: "", price: "2.000 Kz" },
      { name: "Panaché (pressão)", desc: "", price: "1.850 Kz" },
      { name: "Red Bull", desc: "", price: "2.500 Kz" },
      { name: "Speed", desc: "", price: "1.500 Kz" }
    ]
  },
  {
    id: "cocktails",
    label: "Cocktails & Sangrias",
    icon: "🍹",
    items: [
      { name: "Daiquiri", desc: "", price: "5.600 Kz" },
      { name: "Margarita", desc: "", price: "5.000 Kz" },
      { name: "Mojito", desc: "", price: "7.100 Kz" },
      { name: "Caipirinha / Caipiblack / Caipiroska", desc: "", price: "7.000 Kz" },
      { name: "Gin Tónico", desc: "", price: "7.000 Kz" },
      { name: "Aperol Spritz", desc: "", price: "7.000 Kz" },
      { name: "Whiskey Sour", desc: "", price: "7.000 Kz" },
      { name: "Tropical La Femme", desc: "", price: "11.200 Kz", signature: true },
      { name: "Sangria Tinta / Branca", desc: "", price: "24.200 Kz" },
      { name: "Sangria Espumante", desc: "", price: "23.500 Kz" },
      { name: "Sangria La Femme", desc: "", price: "28.900 Kz", signature: true }
    ]
  },
  {
    id: "destilados",
    label: "Destilados",
    icon: "🥃",
    items: [
      { name: "Gordon Dry / Gordon Pink", desc: "Gin", price: "7.000 Kz" },
      { name: "Bombay Sapphire", desc: "Gin", price: "9.000 Kz" },
      { name: "Bulldog", desc: "Gin", price: "9.600 Kz" },
      { name: "Hendricks", desc: "Gin", price: "10.000 Kz" },
      { name: "Tanqueray Dry / Beefeater", desc: "Gin", price: "10.000 Kz" },
      { name: "Red Label", desc: "Whisky", price: "6.300 Kz" },
      { name: "Jameson", desc: "Whisky", price: "7.200 Kz" },
      { name: "Chivas Regal 12 anos", desc: "Whisky", price: "7.600 Kz" },
      { name: "Black Label", desc: "Whisky", price: "8.900 Kz" },
      { name: "Jameson Black Barrel", desc: "Whisky", price: "9.200 Kz" },
      { name: "Jack Daniel's", desc: "Whisky", price: "9.500 Kz" },
      { name: "Vodka Skyy / Absolut", desc: "", price: "6.000 Kz" },
      { name: "Tequila Olmeca", desc: "", price: "6.000 Kz" },
      { name: "Chapéu de Palha", desc: "Cachaça", price: "6.000 Kz" },
      { name: "1920 / Macieira", desc: "Brandy", price: "6.500 Kz" },
      { name: "Remy Martinin", desc: "Conhaque", price: "9.150 Kz" },
      { name: "Courvoisier VS", desc: "Conhaque", price: "10.500 Kz" },
      { name: "Hennessy", desc: "Conhaque", price: "15.100 Kz" }
    ]
  },
  {
    id: "vinhos",
    label: "Vinhos & Espumantes",
    icon: "🍷",
    items: [
      { name: "Casal Garcia", desc: "Tinto, branco ou verde", price: "20.000 Kz" },
      { name: "Altano", desc: "Tinto ou branco", price: "20.300 Kz" },
      { name: "Paulo Lauriano Colheita / Clássico", desc: "Tinto ou branco", price: "19.500 – 22.600 Kz" },
      { name: "Pacheca Terroir / Superior", desc: "Tinto ou branco", price: "26.800 – 34.500 Kz" },
      { name: "Marques de Borba", desc: "Tinto ou branco", price: "25.000 – 28.300 Kz" },
      { name: "Duas Quintas", desc: "Tinto ou branco", price: "55.000 Kz" },
      { name: "Mateus Rosé", desc: "", price: "25.000 Kz" },
      { name: "Lemos Rosé", desc: "", price: "42.700 Kz" },
      { name: "Muralhas de Monção", desc: "Verde", price: "36.000 Kz" },
      { name: "J.C. Le Roux", desc: "Espumante", price: "19.900 Kz" },
      { name: "Lambrusco Chiarli (rosso)", desc: "Espumante", price: "30.000 Kz" },
      { name: "Cabriz Brut", desc: "Espumante", price: "38.000 Kz" },
      { name: "Moet & Chandon Brut / Nectar", desc: "Champanhe", price: "180.000 – 200.000 Kz" }
    ]
  }
];

const RESTAURANT_INFO = {
  name: "La Femme Sabores",
  tagline: "Sabor autêntico. Momento inesquecível.",
  phone1: "+244 975 627 807",
  phone2: "+244 975 627 713",
  address: "Rua do BFA, sentido Kifica, terceira travessa rua dos Generais",
  social: {
    instagram: "https://instagram.com/lafemmesabores",
    facebook: "https://facebook.com/lafemmesabores"
  }
};
