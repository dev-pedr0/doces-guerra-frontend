export interface Feedback {
  id: string | number;
  authorName: string;
  comment: string;
  rating: number;
}

export const feedbacks: Feedback[] = [
  {
    id: '1',
    authorName: 'Ana Silva',
    comment: 'Os doces são simplesmente maravilhosos! O bolo de cenoura com brigadeiro é o meu favorito. Atendimento excelente e entrega super rápida. Recomendo muito!',
    rating: 5,
  },
  {
    id: '2',
    authorName: 'João Oliveira',
    comment: 'Pedi alguns brigadeiros para uma festa e todos adoraram. São frescos, saborosos e a apresentação é impecável. Com certeza pedirei novamente.',
    rating: 4,
  },
  {
    id: '3',
    authorName: 'Mariana Costa',
    comment: 'Recebi um bolo de presente e fiquei impressionada com a qualidade. O sabor é caseiro e a massa super macia. Nota 10!',
    rating: 5,
  },
  {
    id: '4',
    authorName: 'Pedro Almeida',
    comment: 'Experimentei os cookies e gostei bastante. São crocantes por fora e macios por dentro. A entrega foi um pouco demorada, mas valeu a pena pela qualidade.',
    rating: 3,
  },
  {
    id: '5',
    authorName: 'Sofia Pereira',
    comment: 'Os doces finos são uma obra de arte! Perfeitos para eventos especiais. Recomendo o camafeu de nozes.',
    rating: 5,
  },
];
