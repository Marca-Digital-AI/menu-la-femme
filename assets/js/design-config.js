// Configuração visual do clone La Femme Signature.
// O catálogo continua isolado em menu-data.js.
const SIGNATURE_CONFIG = {
  universes: [
    {
      id: "comida",
      label: "Comida",
      categories: ["sopas", "entradas", "fastfood", "pizzas", "massas", "carnes", "peixes", "nacionais", "guarnicoes", "sobremesas", "infantil"]
    },
    {
      id: "bebidas",
      label: "Bebidas",
      categories: ["agua-refrigerantes", "cafe-cha", "sumos-energeticos", "cocktails", "cervejas", "destilados", "vinhos", "espumantes-champanhe"]
    },
    {
      id: "pequeno-almoco",
      label: "Pequeno-Almoço",
      categories: ["pequeno-almoco-frios", "pequeno-almoco-quentes"]
    }
  ],
  highlights: {
    entradas: {
      image: "assets/img/signature/hero-camarao.jpg",
      eyebrow: "Selecção da cozinha",
      caption: "Sabores para abrir o apetite"
    },
    carnes: {
      image: "assets/img/signature/carnes-grelhadas.jpg",
      eyebrow: "Destaque da categoria",
      caption: "Grelhados generosos, preparados para partilhar"
    },
    peixes: {
      image: "assets/img/signature/peixes-mariscos.jpg",
      eyebrow: "Selecção da cozinha",
      caption: "Peixe fresco e sabores do mar"
    },
    nacionais: {
      image: "assets/img/signature/pratos-nacionais.jpg",
      eyebrow: "Sabores de Angola",
      caption: "A tradição servida à mesa"
    },
    guarnicoes: {
      image: "assets/img/signature/guarnicoes.jpg",
      eyebrow: "Para acompanhar",
      caption: "Combinações que completam a experiência"
    },
    infantil: {
      image: "assets/img/signature/selecao-chef.jpg",
      eyebrow: "Selecção da cozinha",
      caption: "Pratos reconfortantes para toda a família"
    }
  }
};
