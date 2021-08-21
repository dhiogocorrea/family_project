export const title = () => {
  return 'Trajetórias de família';
};

export const subtitle = () => {
  return 'Entender nossas origens e imaginar que um dia poderemos percorrer as ruas que nossos antepassados viveram, são sonhos, que com certeza um dia poderemos conquistar.';
};

export const cardBgColor = () => {
  return '#d4af37';
};

export const families = () => {
  let p1 = 50;
  let p2 = 82;
  let p3 = 157;
  return [
    {
      key: 1,
      title: 'Velludo',
      description: 'Vindos da ilha da madeira, chegaram ao Brasil em 28/10/1888.',
      image: 'https://velludo-cicci-correa.s3.us-east-1.amazonaws.com/brasao_velludo.jpg',
      pdfUrl: `https://velludo-cicci-correa.s3.amazonaws.com/Genealogia+das+Fam%C3%ADlias+Velludo+Cicci+e+Corr%C3%AAa.pdf#page=${p1}`,
    },
    {
      key: 2,
      title: 'Cicci',
      description: 'Salvatore e Carmela chegaram no Brasil em 16/08/1896, vindos de Pettorano Sul Gizio, Itália.',
      image: 'https://velludo-cicci-correa.s3.us-east-1.amazonaws.com/cicci_brasao.png',
      pdfUrl: `https://velludo-cicci-correa.s3.amazonaws.com/Genealogia+das+Fam%C3%ADlias+Velludo+Cicci+e+Corr%C3%AAa.pdf#page=${p2}`,
    },
    {
      key: 3,
      title: 'Corrêa',
      description: 'A família veio de Coimbra, das freguesias de São Pedro de Alva e Lousã, em Portugal.',
      image: 'https://velludo-cicci-correa.s3.us-east-1.amazonaws.com/brasao_correa.jpg',
      pdfUrl: `https://velludo-cicci-correa.s3.amazonaws.com/Genealogia+das+Fam%C3%ADlias+Velludo+Cicci+e+Corr%C3%AAa.pdf#page=${p3}`,
    },
  ];
};

export const formsUrl = () => {
  return 'https://forms.gle/ShBVAUTwErb5ujnx6';
};
