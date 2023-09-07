const routerConfig = [
  {
    id: 'home',
    name: 'Главная',
    path: '/',
    icon: 'home'
  },
  {
    id: 'theory',
    name: 'Теория',
    path: '/theory',
    icon: 'book-open'
  },
  {
    id: 'practice',
    name: 'Практика',
    path: '/practice',
    icon: 'code'
  },
  {
    id: 'test',
    name: 'Тест',
    path: '/quiz',
    icon: 'laptop-code'
  },
];

const languagesConfig = [
  {
    id: '01',
    name: 'HTML',
    path: '/html',
    icon: 'brands/html5'
  },
  {
    id: '02',
    name: 'CSS',
    path: '/css',
    icon: 'brands/css3-alt'
  },
  {
    id: '03',
    name: 'Javascript',
    path: '/javascript',
    icon: 'brands/js-square'
  },
  {
    id: '04',
    name: 'React',
    path: '/react',
    icon: 'brands/react'
  },
  {
    id: '05',
    name: 'Vue',
    path: '/vue',
    icon: 'brands/vuejs'
  },
];

const navLinkTypes = [
  {
    path: 'https://learn.javascript.ru/',
    icon: 'jsr'
  },
  {
    path: 'https://developer.mozilla.org/',
    icon: 'mdn'
  },
  {
    path: 'https://medium.com/',
    icon: 'med'
  },
  {
    path: 'https://habr.com/',
    icon: 'hab'
  },
];

const quizSelectItems = [
  {
    id: "quiz-theory",
    value: "theory",
    name: "Theory"
  },
  {
    id: "quiz-practice",
    value: "practice",
    name: "Practice"
  },
  {
    id: "quiz-both",
    value: "theory,practice",
    name: "Both"
  },
]

export {
  routerConfig,
  languagesConfig,
  navLinkTypes,
  quizSelectItems
};
