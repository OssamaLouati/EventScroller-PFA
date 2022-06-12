import ph from '../images/e1.webp'
import ph2 from '../images/e2.jpg'
import ph3 from '../images/e3.webp'
import ph4 from '../images/e4.webp'
import ph5 from '../images/e5.webp'
import ph6 from '../images/e6.webp'

export const categoryList = [
  {
    id: 1,
    value: 'virtual',
    label: ' 💻 Virtual',
  },
  {
    id: 2,
    value: 'live',
    label: '🧑‍🤝‍🧑 Live ',
  },
];

export const ratingList = [
  {
    id: 1,
    value: '1',
    label: '1🌟',
  },
  {
    id: 2,
    value: '2',
    label: '2🌟',
  },
  {
    id: 3,
    value: '3',
    label: '3🌟',
  },
  {
    id: 4,
    value: '4',
    label: '4🌟',
  },
  {
    id: 5,
    value: '5',
    label: '5🌟',
  },
];



export const dataList = [
  {
    id: 2,
    title: 'Forum EMI-Entreprises - XXVIIIème édition',
    serviceTime: '06 MAY',
    category: 'live',
    cuisine: 'forums',
    localisation:'rabat',
    rating: 4,
    price: 0,
    coverSrc: ph,
  },
  {
    id: 1,
    title: 'Expopharma 2022',
    serviceTime: '09 MAY',
    localisation:'casablanca',
    category: 'virtual',
    cuisine: 'conferences',
    rating: 5,
    price: 200,
    coverSrc: ph2,
  },
  {
    id: 3,
    title: 'Concert de SARO (Hip-Hop/Rap/R B) / (Electro)',
    serviceTime: '17 MAY',
    category: 'virtual',
    localisation:'fes',
    cuisine: 'music',
    rating: 3,
    price: 500,
    coverSrc: ph3,
  },
  {
    id: 4,
    title: 'Transahara 2023',
    serviceTime: '04/08 MAY',
    category: 'live',
    cuisine: 'music',
    localisation:'casablanca',
    rating: 1,
    price: 200,
    coverSrc: ph4,
  },
  {
    id: 5,
    title: 'Redouane Bougheraba à RABAT',
    serviceTime: '04/08 MAY',
    category: 'virtual',
    cuisine: 'music',
    localisation:'fes',
    rating: 5,
    price: 100,
    coverSrc: ph5,
  },
 
  {
    id: 6,
    title: 'Stage national MMA',
    serviceTime: '20 MAY',
    category: 'live',
    cuisine: 'conferences',
    localisation:'rabat',
    rating: 5,
    price: 350,
    coverSrc: ph6,
  },

];
