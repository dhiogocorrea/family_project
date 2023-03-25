export const title = () => {
  return "Desbravadores do Triângulo Mineiro";
};

export const subtitle = () => {
  return "A epopéia da família Carneiro, Flávio e Honório no Oeste Mineiro.";
};

export const cardBgColor = () => {
  return "#A9C5A8";
};

export const families = () => {
  let p1 = 1;
  let p2 = 720;
  let p3 = 1;
  let p4 = 125;
  return [
    {
      key: 1,
      title: "Carneiro - livro 1",
      description:
        "Descendentes de portugueses da região Filgueiras, do norte de Portugal que se fixaram em São José Del Rei (atual Tiradentes) em Minas Gerais. ",
      image:
        "https://carneiro-flavio-honorio.s3.amazonaws.com/brasao_carneiro.jpg",
      pdfUrl: `https://carneiro-flavio-honorio.s3.amazonaws.com/GENEALOGIA+DE+FAM%C3%8DLIAS+-+Fam%C3%ADlia+Carneiro+livros+1+e+2.pdf#page=${p1}`,
    },
    {
      key: 2,
      title: "Carneiro - livro 2",
      description:
        "Descendentes de portugueses da região Filgueiras, do norte de Portugal que se fixaram em São José Del Rei (atual Tiradentes) em Minas Gerais. ",
      image:
        "https://carneiro-flavio-honorio.s3.amazonaws.com/brasao_carneiro.jpg",
      pdfUrl: `https://carneiro-flavio-honorio.s3.amazonaws.com/GENEALOGIA+DE+FAM%C3%8DLIAS+-+Fam%C3%ADlia+Carneiro+livros+1+e+2.pdf#page=${p2}`,
    },
    {
      key: 3,
      title: "Flávio",
      description:
        "Originários de Ilha Graciosa, Arquipélago dos Açores, Portugal, após breve passagem por Rio Grande do Sul (RS), fixaram-se em São José Del Rey (MG), atual Tiradentes. ",
      image:
        "https://carneiro-flavio-honorio.s3.amazonaws.com/brasao_flavio.png",
      pdfUrl: `https://carneiro-flavio-honorio.s3.amazonaws.com/Fam%C3%ADlias+Fl%C3%A1vio+e+Hon%C3%B3rio.pdf#page=${p3}`,
    },
    {
      key: 4,
      title: "Honório",
      description:
        "Desconhece-se a origem dessa família. Tem-se notícias em um documento do censo de 1831 de que fixaram residência em Desemboque, o berço do Triângulo Mineiro.",
      image:
        "https://carneiro-flavio-honorio.s3.amazonaws.com/brasao_honorio.jpg",
      pdfUrl: `https://carneiro-flavio-honorio.s3.amazonaws.com/Fam%C3%ADlias+Fl%C3%A1vio+e+Hon%C3%B3rio.pdf#page=${p4}`,
    },
  ];
};

export const formsUrl = () => {
  return "https://forms.gle/ShBVAUTwErb5ujnx6";
};
