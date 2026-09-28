// Dados do menu La Femme Sabores
// Fonte comida (actual): "Menu la femme atualizado (Preços e Pratos actualizados) (1).pdf" (2026-09-28)
//   — lista do cliente: 29 pratos removidos, 14 descrições corrigidas, 2 adicionados
// Fonte pizzas/massas: Menu la femme atualizado PIZZA.pdf
// Fonte pequeno-almoço: Menu Pequeno Almoço.pdf
// Fonte bebidas: NOVO MENU DE BEBIDAS.pdf
// Nota: a categoria "massas" foi removida (todos os pratos saíram).
const MENU_DATA = [
  {
    id: "sopas",
    label: "Sopas",
    items: [
      { name: "Sopa da Pedra", desc: "Puré de feijão, sispe, chouriço, cenoura e couve", price: "3.500,00kz" },
      { name: "Caldo Verde", desc: "Puré de batata, couve juliana e tiras de chouriço", price: "10.000,00kz" },
      { name: "Caldo de Peixe", desc: "Peixe fresco, peixe seco, batata doce, mandioca e farinha", price: "10.000,00kz" }
    ]
  },
  {
    id: "entradas",
    label: "Entradas & Petiscos",
    items: [
      { name: "Choco Frito La Femme", desc: "Tiras de choco com especiarias", price: "9.650,00kz", signature: true },
      { name: "Mexilhão a Bulhão Pato", desc: "Mexilhões preparados ao molho bulhão pato", price: "6.000,00kz" },
      { name: "Camarão ao Alho", desc: "Camarões salteados ao cheiro verde", price: "12.500,00kz" },
      { name: "Camarão Frito", desc: "", price: "10.250 Kz" },
      { name: "Pica-Pau de Novilho", desc: "Carne em cubos, picles, azeitonas e molho madeira", price: "8.900 Kz" },
      { name: "Pica-Pau Terra e Mar", desc: "Frutos do mar em cubos, picles e cheiro verde", price: "9.900 Kz" },
      { name: "Couvet de Quitutes da Terra", desc: "Bombó frito ou assado, gimguba torrada, banana pão ou batata", price: "3.500 Kz" },
      { name: "Amenjoas La Femme", desc: "Amêijoas na sua própria casca com molho especial", price: "10.000,00kz" },
      { name: "Salada de Polvo", desc: "", price: "7.690 Kz" },
      { name: "Chouriço Caseiro", desc: "Torradas e molho do chefe", price: "7.500 Kz" },
      { name: "Gambas ao Alho", desc: "Gambas salteadas com alho e azeite", price: "19.500,00kz" },
      { name: "Asinhas Panadas", desc: "", price: "7.000 Kz" }
    ]
  },
  {
    id: "fastfood",
    label: "Fast Food",
    items: [
      { name: "Hambúrguer La Femme", desc: "Bacon, molho madeira, fiambre, ovo, queijo, salada mista, duas carnes, legumes e batatas fritas", price: "10.000 Kz" },
      { name: "Prego no Pão", desc: "Pão baguete, bife vazia, ovo e batatas fritas", price: "7.000 Kz" },
      { name: "Sandes Mista a Sabores", desc: "Pão baguete, ovo, frango desfiado e molhos à escolha do cliente", price: "6.000 Kz" },
      { name: "Mix de Salgados", desc: "Coxinhas, pastéis de massa e croquetes", price: "6.000 Kz" },
      { name: "Chamuças (3)", desc: "", price: "8.500 Kz" }
    ]
  },
  {
    id: "pizzas",
    label: "Pizzas",
    items: [
      { name: "Pizza Portuguesa", desc: "Carne moída, molho de tomate, ovo, milho doce, azeitona, queijo mozarela e oregão", sizes: [{ label: "Familiar", price: "16.500 Kz" }, { label: "Média", price: "11.200 Kz" }, { label: "Individual", price: "8.000 Kz" }] },
      { name: "Pizza de Frango", desc: "Frango, molho de tomate, azeitonas, queijo mozarela, oregão e milho doce", sizes: [{ label: "Familiar", price: "17.500 Kz" }, { label: "Média", price: "11.200 Kz" }, { label: "Individual", price: "8.000 Kz" }] },
      { name: "Pizza de Atum", desc: "Atum, molho de tomate, cebolas, azeitonas, queijo mozarela e oregão", sizes: [{ label: "Familiar", price: "16.500 Kz" }, { label: "Média", price: "11.200 Kz" }, { label: "Individual", price: "8.000 Kz" }] },
      { name: "Pizza Vegetariana", desc: "Molho de tomate, cebola, pimentos, tomate, cogumelos, azeitonas, oregão, queijo mozarela e milho doce", sizes: [{ label: "Familiar", price: "16.500 Kz" }, { label: "Média", price: "11.200 Kz" }, { label: "Individual", price: "8.000 Kz" }] },
      { name: "Pizza La Femme", desc: "Fiambre, frango, bacon, ovo, tomate, cebola, azeitonas, queijo, milho doce, molho de tomate e oregão", sizes: [{ label: "Familiar", price: "16.500 Kz" }, { label: "Média", price: "11.200 Kz" }, { label: "Individual", price: "8.000 Kz" }], signature: true },
      { name: "Pizza 4 Estações", desc: "Carne moída, frango, fiambre, atum, cogumelos, pimentos, azeitonas, queijo, milho doce, cebola, mozarela, oregão e molho de tomate", sizes: [{ label: "Familiar", price: "19.750 Kz" }, { label: "Média", price: "12.800 Kz" }, { label: "Individual", price: "9.000 Kz" }] },
      { name: "Pizza de Camarão", desc: "Camarão, queijo mozarela, molho de camarão, azeitona e oregão", sizes: [{ label: "Familiar", price: "24.900 Kz" }, { label: "Média", price: "16.600 Kz" }, { label: "Individual", price: "12.500 Kz" }] },
      { name: "Pizza Catato", desc: "Catato, molho de tomate, cebola, coentros, queijo mozarela, azeitona, milho doce e oregão", sizes: [{ label: "Familiar", price: "18.000 Kz" }, { label: "Média", price: "12.000 Kz" }, { label: "Individual", price: "8.000 Kz" }] },
      { name: "Pizza Havai", desc: "Fiambre, molho de tomate, bacon, ananás, queijo mozarela, milho doce, azeitona e oregão", sizes: [{ label: "Familiar", price: "18.000 Kz" }, { label: "Média", price: "12.000 Kz" }, { label: "Individual", price: "8.000 Kz" }] },
      { name: "Pizza de Fiambre", desc: "Fiambre, molho de tomate, queijo mozarela e oregão", sizes: [{ label: "Familiar", price: "17.500 Kz" }, { label: "Média", price: "11.800 Kz" }, { label: "Individual", price: "8.000 Kz" }] },
      { name: "Pizza Peperone", desc: "Chouriço, molho de tomate, azeitonas e queijo mozarela", sizes: [{ label: "Familiar", price: "17.500 Kz" }, { label: "Média", price: "11.800 Kz" }, { label: "Individual", price: "8.000 Kz" }] },
      { name: "Pizza Margherita", desc: "Molho de tomate, queijo mozarela, azeitona e oregão", sizes: [{ label: "Familiar", price: "16.000 Kz" }, { label: "Média", price: "10.800 Kz" }, { label: "Individual", price: "7.850 Kz" }] },
      { name: "Extra — Queijo", desc: "", price: "2.500 Kz" },
      { name: "Extra — Chouriço", desc: "", price: "2.000 Kz" },
      { name: "Extra — Fiambre", desc: "", price: "2.000 Kz" },
      { name: "Extra — Frango", desc: "", price: "2.000 Kz" },
      { name: "Extra — Carne Moída", desc: "", price: "2.000 Kz" },
      { name: "Extra — Catato", desc: "", price: "2.000 Kz" },
      { name: "Extra — Atum", desc: "", price: "2.000 Kz" },
      { name: "Extra — Camarão", desc: "", price: "2.000 Kz" },
      { name: "Extra — Cogumelo", desc: "", price: "1.500 Kz" }
    ]
  },
  {
    id: "carnes",
    label: "Carnes",
    items: [
      { name: "Frango Inteiro c/Arroz", desc: "Cenoura, salada mista e batatas fritas", price: "18.000,00kz" },
      { name: "Frango Grelhado", desc: "Meio frango, batata frita e salada algarvia", price: "9.000 Kz" },
      { name: "Grelhada Mista 2 Pax", desc: "Meio frango, bife da vazia, febras, linguiça, chouriço, batatas fritas e feijão preto", price: "30.500 Kz" },
      { name: "Grelhada Mista La Femme", desc: "Meio frango, bife da vazia, febras, linguiça, chouriço, batatas fritas, feijão preto, vazia e picanha", price: "50.000 Kz", signature: true },
      { name: "Bife à La Femme", desc: "Arroz e batatas fritas", price: "15.500,00kz" },
      { name: "Bife a Permiguiana c/Esparguete Salteados", desc: "Peito de frango panado e granitado c/molho de tomate", price: "14.500,00kz" },
      { name: "Bitoque", desc: "Bife da vazia, arroz branco, salada mista e ovo", price: "13.500 Kz" },
      { name: "Estrogonoff de Frango", desc: "Peito de frango aos cubos, leite, cogumelos, natas, batatas fritas e arroz", price: "13.000 Kz" },
      { name: "Bife de Lombo Grelhado", desc: "Batatas fritas e legumes salteados", price: "18.000,00kz" },
      { name: "Tiras de Porco Nacional", desc: "Carne de porco nacional, funge, molho de tomate e couve frita", price: "12.500 Kz" },
      { name: "Tiras de Carne de Vitelino", desc: "Funge à escolha, molho de tomate e kizaca", price: "12.500 Kz" }
    ]
  },
  {
    id: "peixes",
    label: "Peixes & Mariscos",
    items: [
      { name: "Muqueca de Peixe c/Arroz", desc: "Peixe corvina ou garopa, leite de coco, óleo de palma, pimentos, cebola e alho", price: "18.000,00kz" },
      { name: "Filete de Atum c/Arroz Malandrinho", desc: "Feijão e salada", price: "18.000,00kz" },
      { name: "Cozido de Peixe", desc: "Garopa ou corvina", price: "17.000 Kz" },
      { name: "Linguado", desc: "Legumes e batata", price: "13.500,00kz" },
      { name: "Choco Grelhado", desc: "Salada e batata", price: "15.500 Kz" },
      { name: "Arroz de Mariscos", desc: "Frutos do mar", price: "50.000 Kz", signature: true },
      { name: "Lagosta Grelhada", desc: "Salada e batata frita", price: "20.000,00kz" },
      { name: "Bacalhau à Lagareiro", desc: "Batata murro c/legumes", price: "35.000 Kz", signature: true },
      { name: "Risoto c/Gambas", desc: "", price: "20.000,00kz" },
      { name: "Peixe Grelhado", desc: "", price: "13.500 Kz" },
      { name: "Bacalhau c/Natas", desc: "", price: "18.500,00kz" },
      { name: "Esparguete c/Gambas", desc: "", price: "20.000,00kz" }
    ]
  },
  {
    id: "nacionais",
    label: "Pratos Nacionais",
    items: [
      { name: "Peito Alto", desc: "Carne de vaca, feijão de óleo de palma e funge", price: "13.000 Kz" },
      { name: "Calulu de Carne Seca", desc: "Feijão de óleo de palma, funge e kizaca", price: "14.000 Kz" },
      { name: "Muamba de Galinha Nacional", desc: "Galinha, funge e couve refogada", price: "12.000 Kz" },
      { name: "Macayabo", desc: "Fumbua, catato, molho de beringela e chicuanga", price: "12.000,00kz" },
      { name: "Calulu de Peixe Fresco e Seco", desc: "Peixe corvina fresco e seco, funge e feijão de óleo de palma", price: "12.000 Kz" },
      { name: "Mufete La Femme", desc: "Peixe chopa ou carapau, batata doce, mandioca, banana pão, vinagrete, farinha musseque e feijão de óleo de palma", price: "10.000 Kz", signature: true },
      { name: "Cabidela", desc: "", price: "12.000,00kz" }
    ]
  },
  {
    id: "guarnicoes",
    label: "Guarnições",
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
    items: [
      { name: "Mousse de Mucua", desc: "Natas, leite, múcua e segredos da casa", price: "3.000,00kz", signature: true },
      { name: "Mousse de Limão", desc: "Natas, leite, limão e segredos da casa", price: "3.000,00kz" },
      { name: "Bolo La Femme (Mine)", desc: "Bolo caseiro especial da casa", price: "4.500,00kz" },
      { name: "Petit Gâteau", desc: "", price: "9.000 Kz" },
      { name: "Gelado", desc: "Chocolate, baunilha, morango", price: "3.000,00kz" }
    ]
  },
  {
    id: "infantil",
    label: "Menu Infantil",
    items: [
      { name: "Bifinho de Novilho", desc: "Bife de lombo, natas, cogumelos, molho madeira e arroz branco", price: "9.000 Kz" },
      { name: "Estrogonofe de Frango", desc: "Tiras de frango, cogumelos, natas, arroz e cheiro verde", price: "9.000 Kz" },
      { name: "Bifana com Batata Chips", desc: "Bife de porco, batata doce e arroz de cenoura", price: "9.000 Kz" },
      { name: "Bolonhesa La Femme", desc: "Carne moída, queijo musarela e massa esparguete", price: "10.000,00kz" },
      { name: "Massa Carbonara", desc: "Massa com molho carbonara especial", price: "13.000,00kz" },
      { name: "Massa Vegetariana", desc: "Massa com legumes frescos", price: "10.000,00kz" },
      { name: "Hambúrguer no Prato", desc: "", price: "8.900 Kz" },
      { name: "Mini Hambúrguer de Novilho", desc: "Uma carne, queijo, molho madeira e batata palha", price: "7.000 Kz" }
    ]
  },
  {
    id: "pequeno-almoco-frios",
    label: "Pequeno-Almoço — Frios",
    items: [
      { name: "Creme de Beterraba", desc: "Beetroot Cream", price: "2.000 Kz" },
      { name: "Creme de Abóbora", desc: "Pumpkin Cream", price: "2.000 Kz" },
      { name: "Frutas Laminadas", desc: "Sliced Fruits", price: "1.500 Kz" },
      { name: "Cesto de Pães", desc: "Bread Basket", price: "1.500 Kz" },
      { name: "Café", desc: "Coffee", price: "1.500 Kz" },
      { name: "Chá", desc: "Tea", price: "1.500 Kz" },
      { name: "Galão", desc: "Latte", price: "1.500 Kz" },
      { name: "Leite Quente com Chocolate", desc: "Hot Milk with Chocolate", price: "1.500 Kz" },
      { name: "Fiambre Laminado", desc: "Sliced Ham", price: "1.500 Kz" },
      { name: "Queijo Laminado", desc: "Sliced Cheese", price: "1.500 Kz" },
      { name: "Torradas ou Tostas", desc: "Toast or Toasties", price: "1.500 Kz" },
      { name: "Panquecas com Mel", desc: "Pancakes with Honey", price: "1.500 Kz" },
      { name: "Bolo Simples", desc: "Simple Cake", price: "1.500 Kz" }
    ]
  },
  {
    id: "pequeno-almoco-quentes",
    label: "Pequeno-Almoço — Pratos Quentes",
    items: [
      { name: "Omelete", desc: "Omelette", price: "1.500 Kz" },
      { name: "Ovos Estrelados", desc: "Fried Eggs", price: "1.500 Kz" },
      { name: "Chouriço Sebolado", desc: "Sautéed Chorizo", price: "1.500 Kz" },
      { name: "Ovos Mexidos", desc: "Scrambled Eggs", price: "1.500 Kz" },
      { name: "Bruschetta", desc: "", price: "1.500 Kz" },
      { name: "Bacon Assado", desc: "Roasted Bacon", price: "1.500 Kz" },
      { name: "Salsicha à Moda do Chefe", desc: "Sausage Chef's Style", price: "1.500 Kz" }
    ]
  },
  {
    id: "agua-refrigerantes",
    label: "Águas & Refrigerantes",
    items: [
      { name: "Água Chela 1,5L", desc: "", price: "1.200 Kz" },
      { name: "Água Chela 0,5L", desc: "", price: "700 Kz" },
      { name: "Água das Pedras", desc: "", price: "2.000 Kz" },
      { name: "Água Castelo", desc: "", price: "2.000 Kz" },
      { name: "Água Tónica", desc: "", price: "1.300 Kz" },
      { name: "Coca-Cola", desc: "", price: "1.300 Kz" },
      { name: "Coca-Cola Zero", desc: "", price: "1.300 Kz" },
      { name: "Pepsi Cola", desc: "", price: "750 Kz" },
      { name: "Pepsi Cola Zero", desc: "", price: "750 Kz" },
      { name: "Seven Up", desc: "", price: "750 Kz" },
      { name: "Mirinda", desc: "", price: "750 Kz" },
      { name: "Fanta", desc: "", price: "1.300 Kz" },
      { name: "Sprite", desc: "", price: "1.300 Kz" },
      { name: "Sumol", desc: "", price: "1.300 Kz" }
    ]
  },
  {
    id: "cafe-cha",
    label: "Café & Chá",
    items: [
      { name: "Galão", desc: "", price: "2.000 Kz" },
      { name: "Café Expresso", desc: "", price: "1.300 Kz" },
      { name: "Chá", desc: "", price: "1.000 Kz" },
      { name: "Capuchino", desc: "", price: "2.500 Kz" },
      { name: "Chá da Casa", desc: "Gengibre ou limão", price: "1.300 Kz" },
      { name: "Meia de Leite", desc: "", price: "2.000 Kz" }
    ]
  },
  {
    id: "sumos-energeticos",
    label: "Sumos Naturais & Energéticos",
    items: [
      { name: "Limonada", desc: "", price: "4.500 Kz" },
      { name: "Múcua", desc: "", price: "2.500 Kz" },
      { name: "Laranja", desc: "", price: "5.500 Kz" },
      { name: "Ananás", desc: "", price: "5.000 Kz" },
      { name: "Gajaja", desc: "", price: "5.500 Kz" },
      { name: "Pitaia", desc: "", price: "4.500 Kz" },
      { name: "Sumo Tropical", desc: "", price: "7.500 Kz" },
      { name: "Frozen", desc: "", price: "4.000 Kz" },
      { name: "Melancia", desc: "", price: "5.500 Kz" },
      { name: "Red Bull", desc: "", price: "2.500 Kz" },
      { name: "Speed", desc: "", price: "1.500 Kz" }
    ]
  },
  {
    id: "cocktails",
    label: "Cocktails & Sangrias",
    items: [
      { name: "Daiquiri", desc: "Rum, suco de maracujá ou lima e xarope de açúcar", price: "5.500 Kz" },
      { name: "Margarita", desc: "Tequila, suco de lima, frutos vermelhos ou maracujá, licor de laranja e xarope de açúcar", price: "5.500 Kz" },
      { name: "Mojito", desc: "Rum, suco de lima, frutos vermelhos ou maracujá, xarope de açúcar, hortelã e água com gás", price: "5.500 Kz" },
      { name: "Caipirinha", desc: "Cachaça, suco de lima, frutos vermelhos ou maracujá, lima e xarope de açúcar", price: "5.500 Kz" },
      { name: "Caipirosca", desc: "Vodka, suco de lima, frutos vermelhos ou maracujá, lima e xarope de açúcar", price: "5.500 Kz" },
      { name: "Caipiblack", desc: "Cachaça, suco de limão, lima, xarope de açúcar e vodka preta", price: "5.500 Kz" },
      { name: "Gin Tónico", desc: "Limão, laranja, pepino ou frutos vermelhos, gin, pau de canela, hibisco, anis, pimenta em grão, cravo da índia, alecrim e água tónica", price: "7.000 Kz" },
      { name: "Aperol Spritz", desc: "Aperol, suco de laranja, prosecco ou água com gás", price: "5.500 Kz" },
      { name: "Sanguíneo", desc: "Maçã, beterraba, cenoura, xarope de açúcar e gelo em cubo", price: "5.000 Kz" },
      { name: "Whiskey Sour", desc: "Whiskey, suco de limão, xarope de açúcar e clara de ovo", price: "5.500 Kz" },
      { name: "Mint Julep", desc: "Whiskey, hortelã e xarope de açúcar", price: "5.000 Kz" },
      { name: "Moscow Mule", desc: "Vodka, suco de limão e ginger ale", price: "6.000 Kz" },
      { name: "Piña Colada", desc: "Rum, suco de ananás, leite condensado e xarope de açúcar", price: "6.000 Kz" },
      { name: "Paradise", desc: "Rum, suco de laranja, xarope de açúcar, groselha e blue curaçao", price: "6.000 Kz" },
      { name: "Lagoa Azul", desc: "Suco de limão, xarope de açúcar, blue curaçao, vodka e sprite", price: "5.500 Kz" },
      { name: "Corona", desc: "Suco de lima, vodka e Corona", price: "5.500 Kz" },
      { name: "Frozen de Maracujá", desc: "Maracujá, xarope de açúcar e gelo em cubo", price: "6.000 Kz" },
      { name: "Frozen de Frutos Vermelhos", desc: "Frutos vermelhos, xarope de açúcar e gelo em cubo", price: "6.000 Kz" },
      { name: "Cuba Libre", desc: "Rum, suco de limão, coca-cola e gelo em cubo", price: "5.000 Kz" },
      { name: "Dry Martini", desc: "Gin, vermute e azeitonas", price: "5.500 Kz" },
      { name: "Tropical La Femme", desc: "Pitaia, ananás, maracujá, laranja, limão, xarope de açúcar e gelo em cubo", price: "7.500 Kz", signature: true },
      { name: "Sangria Tinta", desc: "", price: "12.500 Kz" },
      { name: "Sangria Branca", desc: "", price: "15.500 Kz" },
      { name: "Sangria Espumante", desc: "", price: "15.500 Kz" },
      { name: "Sangria La Femme", desc: "", price: "17.000 Kz", signature: true }
    ]
  },
  {
    id: "cervejas",
    label: "Cervejas",
    items: [
      { name: "Fino Eka", desc: "Pressão", price: "1.200 Kz" },
      { name: "Fino Cuca", desc: "Pressão", price: "1.200 Kz" },
      { name: "Lambreta", desc: "Pressão", price: "700 Kz" },
      { name: "Long Drink", desc: "Pressão", price: "750 Kz" },
      { name: "Panaché", desc: "Pressão", price: "1.850 Kz" },
      { name: "Caneca", desc: "Pressão", price: "2.000 Kz" },
      { name: "Eka", desc: "Lata", price: "1.500 Kz" },
      { name: "Cuca", desc: "Lata", price: "1.500 Kz" },
      { name: "Nocal", desc: "Lata", price: "1.500 Kz" },
      { name: "Booster Cider", desc: "Lata", price: "1.500 Kz" },
      { name: "Booster Manga", desc: "Lata", price: "1.500 Kz" },
      { name: "Booster Morango", desc: "Lata", price: "1.500 Kz" },
      { name: "Heineken", desc: "Lata", price: "2.500 Kz" },
      { name: "Heineken", desc: "Garrafa", price: "1.800 Kz" }
    ]
  },
  {
    id: "destilados",
    label: "Destilados",
    items: [
      { name: "Bombay Sapphire", desc: "Gin", price: "5.500 Kz" },
      { name: "Bulldog", desc: "Gin", price: "6.000 Kz" },
      { name: "Gordon Dry", desc: "Gin", price: "5.000 Kz" },
      { name: "Gordon Pink", desc: "Gin", price: "4.500 Kz" },
      { name: "Hendrick's", desc: "Gin", price: "5.500 Kz" },
      { name: "Tanqueray", desc: "Gin", price: "5.800 Kz" },
      { name: "Beefeater", desc: "Gin", price: "6.800 Kz" },
      { name: "Chapéu de Palha", desc: "Cachaça", price: "5.000 Kz" },
      { name: "Capuca (Água do Chefe)", desc: "Cachaça", price: "2.000 Kz" },
      { name: "Bagaceira S. Domingos", desc: "Água Ardente", price: "5.000 Kz" },
      { name: "CRF", desc: "Água Ardente", price: "5.500 Kz" },
      { name: "Cacharamba", desc: "Água Ardente", price: "5.500 Kz" },
      { name: "1920", desc: "Brandy", price: "5.800 Kz" },
      { name: "Macieira", desc: "Brandy", price: "5.800 Kz" },
      { name: "Jameson", desc: "Whisky", price: "5.500 Kz" },
      { name: "Red Label", desc: "Whisky", price: "4.500 Kz" },
      { name: "Black Label", desc: "Whisky", price: "5.800 Kz" },
      { name: "Chivas Regal 12 Anos", desc: "Whisky", price: "6.000 Kz" },
      { name: "Jameson Black Barrel", desc: "Whisky", price: "6.000 Kz" },
      { name: "Jack Daniel's", desc: "Whisky", price: "10.000 Kz" },
      { name: "Chivas", desc: "Whisky", price: "5.800 Kz" },
      { name: "Olmeca", desc: "Tequila", price: "5.500 Kz" },
      { name: "Bacardi", desc: "Rum", price: "4.000 Kz" },
      { name: "Havana Club", desc: "Rum", price: "3.000 Kz" },
      { name: "Malibu", desc: "Rum", price: "3.000 Kz" },
      { name: "Triple Sec", desc: "Licor", price: "5.000 Kz" },
      { name: "Blue Curaçao", desc: "Licor", price: "5.000 Kz" },
      { name: "Amarula", desc: "Licor", price: "5.000 Kz" },
      { name: "Limoncello", desc: "Licor", price: "5.500 Kz" },
      { name: "Skyy", desc: "Vodka", price: "5.000 Kz" },
      { name: "Absolut", desc: "Vodka", price: "5.500 Kz" },
      { name: "Escap Chocolate", desc: "Vodka", price: "3.000 Kz" },
      { name: "Escap Original", desc: "Vodka", price: "3.000 Kz" },
      { name: "Courvoisier VS", desc: "Conhaque", price: "10.500 Kz" },
      { name: "Hennessy", desc: "Conhaque", price: "10.500 Kz" },
      { name: "Rémy Martin", desc: "Conhaque", price: "5.800 Kz" },
      { name: "Campari", desc: "Vermute", price: "6.500 Kz" },
      { name: "Martini Rosso", desc: "Vermute", price: "5.800 Kz" },
      { name: "Martini Branco", desc: "Vermute", price: "5.800 Kz" }
    ]
  },
  {
    id: "vinhos",
    label: "Vinhos",
    items: [
      { name: "Piriquita", desc: "Tinto", price: "20.500 Kz" },
      { name: "Casal Garcia", desc: "Tinto", price: "20.000 Kz" },
      { name: "Duas Quintas", desc: "Tinto", price: "35.000 Kz" },
      { name: "Alandra", desc: "Tinto", price: "17.000 Kz" },
      { name: "Paulo Lauriano", desc: "Tinto", price: "21.950 Kz" },
      { name: "Marquês de Borba", desc: "Tinto", price: "28.500 Kz" },
      { name: "Alabastro", desc: "Tinto", price: "18.800 Kz" },
      { name: "Segredos de S. Miguel", desc: "Tinto", price: "19.800 Kz" },
      { name: "Mariana Rocim", desc: "Tinto", price: "19.600 Kz" },
      { name: "Cartuxa", desc: "Tinto", price: "22.500 Kz" },
      { name: "Porca de Murça", desc: "Tinto", price: "25.000 Kz" },
      { name: "Monte Velho", desc: "Tinto", price: "18.600 Kz" },
      { name: "Esteva", desc: "Tinto", price: "18.900 Kz" },
      { name: "Esporão", desc: "Tinto", price: "47.500 Kz" },
      { name: "Marquês de Borba Reserva", desc: "Tinto", price: "70.000 Kz" },
      { name: "Duas Quintas Reserva", desc: "Tinto", price: "45.000 Kz" },
      { name: "Quinta Cabriz", desc: "Tinto", price: "18.950 Kz" },
      { name: "Paulo Lauriano Clássico", desc: "Branco", price: "19.600 Kz" },
      { name: "Marquês de Borba", desc: "Branco", price: "22.000 Kz" },
      { name: "Duas Quintas", desc: "Branco", price: "35.000 Kz" },
      { name: "Planalto", desc: "Branco", price: "24.000 Kz" },
      { name: "Esporão Reserva", desc: "Branco", price: "36.950 Kz" },
      { name: "Silk & Spice", desc: "Branco", price: "25.800 Kz" },
      { name: "Mariana Rocim", desc: "Branco", price: "21.950 Kz" },
      { name: "Monte Velho", desc: "Branco", price: "15.950 Kz" },
      { name: "Segredos de S. Miguel", desc: "Branco", price: "18.950 Kz" },
      { name: "Mossaras", desc: "Verde", price: "15.800 Kz" },
      { name: "Casal Garcia", desc: "Verde", price: "19.800 Kz" },
      { name: "Gazela", desc: "Verde", price: "15.950 Kz" },
      { name: "Gatão", desc: "Verde", price: "15.800 Kz" },
      { name: "Segredos de S. Miguel", desc: "Rosé", price: "15.500 Kz" },
      { name: "Mateus Rosé", desc: "Rosé", price: "35.500 Kz" },
      { name: "Mariana Rosé", desc: "Rosé", price: "22.950 Kz" }
    ]
  },
  {
    id: "espumantes-champanhe",
    label: "Champanhe & Espumantes",
    items: [
      { name: "Cabriz Brut", desc: "Espumante", price: "30.000 Kz" },
      { name: "Lambrusco Chiarli (Rosso)", desc: "Espumante", price: "30.000 Kz" },
      { name: "JC Le Roux", desc: "Espumante", price: "19.900 Kz" },
      { name: "Moscato", desc: "Espumante", price: "18.500 Kz" },
      { name: "Krone", desc: "Espumante", price: "50.000 Kz" },
      { name: "Champanhe Infantil", desc: "Sumo de uva espumante", price: "18.500 Kz" },
      { name: "Moët & Chandon Brut", desc: "Champanhe", price: "180.000 Kz" },
      { name: "Moët & Chandon Nectar", desc: "Champanhe", price: "200.000 Kz" },
      { name: "Moët & Chandon Ice", desc: "Champanhe", price: "175.000 Kz" },
      { name: "Moët & Chandon Impérial", desc: "Champanhe", price: "135.000 Kz" }
    ]
  }
];

const RESTAURANT_INFO = {
  name: "La Femme Sabores",
  tagline: "Sabor autêntico. Momento inesquecível.",
  phone1: "+244 975 627 807",
  phone2: "+244 975 627 713",
  address: "Benfica, rua do BFA Quinta Travessa, Rua da Pista, junto ao Centro Materno Infantil do Areal",
  social: {
    instagram: "https://instagram.com/lafemmesabores",
    facebook: "https://facebook.com/lafemmesabores"
  }
};
