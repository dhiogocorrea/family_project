export const title = () => {
  return 'Desbravadores do Triângulo Mineiro';
};

export const subtitle = () => {
  return 'A epopéia da família Carneiro, Flávio e Honório no Oeste Mineiro.';
};

export const cardBgColor = () => {
  return '#A9C5A8';
};

export const families = () => {
  let p1 = 1;
  let p2 = 674;
  let p3 = 801;
  return [
    {
      key: 1,
      title: 'Carneiro',
      description:
        'Descendentes de portugueses da região Filgueiras, do norte de Portugal que se fixaram em São José Del Rei (atual Tiradentes) em Minas Gerais. ',
      image: 'https://carneiro-flavio-honorio.s3.amazonaws.com/brasao_carneiro.jpg',
      pdfUrl: `https://carneiro-flavio-honorio.s3.amazonaws.com/Fam%C3%ADlias+Carneiro%2C+Fl%C3%A1vio+e+Hon%C3%B3rio.pdf#page=${p1}`,
    },
    {
      key: 2,
      title: 'Flávio',
      description:
        'Originários de Ilha Graciosa, Arquipélago dos Açores, Portugal, após breve passagem por Rio Grande do Sul (RS), fixaram-se em São José Del Rey (MG), atual Tiradentes. ',
      image: 'https://carneiro-flavio-honorio.s3.amazonaws.com/brasao_flavio.png',
      pdfUrl: `https://carneiro-flavio-honorio.s3.amazonaws.com/Fam%C3%ADlias+Carneiro%2C+Fl%C3%A1vio+e+Hon%C3%B3rio.pdf#page=${p2}`,
    },
    {
      key: 3,
      title: 'Honório',
      description:
        'Desconhece-se suas origens mas fixaram-se em Dores de Santa Juliana, distrito de Araxá, em meados do século XIX. ',
      image: 'https://carneiro-flavio-honorio.s3.amazonaws.com/brasao_honorio.jpg',
      pdfUrl: `https://carneiro-flavio-honorio.s3.amazonaws.com/Fam%C3%ADlias+Carneiro%2C+Fl%C3%A1vio+e+Hon%C3%B3rio.pdf#page=${p3}`,
    },
  ];
};

export const formsUrl = () => {
  return 'https://forms.gle/ShBVAUTwErb5ujnx6';
};
