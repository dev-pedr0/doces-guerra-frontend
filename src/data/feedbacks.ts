export interface Feedback {
  id: string | number;
  authorName: string;
  comment: string;
  rating: number;
}

export const feedbacks: Feedback[] = [
  {
    id: '1',
    authorName: 'Raiana',
    comment: 'Me lembro do ovo de colher que foi uma das sete maravilhas do mundo. Doce na medida certa, bem recheado e a embalagem de muito bom gosto, chega dava pena de comer. Comi por 3 dias com pena de terminar mas também pq veio em quantidade generosa, difícil não viciar... Tenho lembrança do cheiro de chocolate suave e me lembro que fiquei de mandar uma foto pra você mas comi uma parte antes de lembrar 🤭 a foto foi com um pedaço já no meu estômago e me lembro de estar muito feliz 💛',
    rating: 5,
  },
  {
    id: '2',
    authorName: 'Brenda',
    comment: 'Os doces são impecáveis, e os ingredientes de altíssima qualidade. O atendimento também foi super atencioso. Virei cliente fiel !',
    rating: 5,
  },
  {
    id: '3',
    authorName: 'Grazielle',
    comment: 'Tudo delicioso, não tem como escolher só um, mas em especial os doces zero lactose',
    rating: 5,
  },
  {
    id: '4',
    authorName: 'Ester',
    comment: 'Amei todos os docinhos de copo zero lactose, nem imaginei q iria ficar perfeito assim',
    rating: 5,
  },
];
