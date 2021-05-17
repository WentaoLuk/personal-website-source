import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Wentao Lu - Computer Science Student at Algonquin',
  lang: 'en',
  description: 'Welcome to my website',
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1Y8KYP_US0Nnmx8-sTWBAfLw8rjh42GWN/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Shopping Website PHP Project',
    info: 'Our first website project at school. The website provides categories, filters, and comparison capabilities.',
    info2: 'It is designed with HTML, CSS and JavaScript using PHP and MySQL databases as the backend.',
    url: 'https://drive.google.com/drive/folders/1-_rtpeupFQIjDmZhpdtQ3pvDpkhPDFs-?usp=sharing',
    repo: 'https://github.com/WentaoLuk/shopping-website-project/tree/master/code', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Photo Gallery With Upload Function Using PHP.',
    info: 'School Assignment: A photo gallery page with upload function. New pictures will be displayed on the top.',
    info2: 'Once uploaded, the picutures will be stored into image folders.',
    url: 'https://github.com/WentaoLuk/gallery-app',
    repo: 'https://github.com/WentaoLuk/gallery-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Survey App with JSON to Store results',
    info: 'The App verifies the input and store the result into JSON file as array set using PHP.',
    info2: 'All the results will be displayed on the result page.',
    url: 'https://github.com/WentaoLuk/survey-app',
    repo: 'https://github.com/WentaoLuk/survey-app', // if no repo, the button will not show up
  }, {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'Calculator App using Javascript',
    info: 'The calculator App has basic calculating functions',
    info2: 'If the equation has an issue with it (E.g.: “10++5”), it should replace the content inside the textbox with “Error”. Following that, if a number or operator is then clicked, it should then replace “Error” with whatever number or operator is clicked.',
    url: 'https://github.com/WentaoLuk/calculator-app',
    repo: 'https://github.com/WentaoLuk/calculator-app', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '', // call to action text for the contact section
  btn: 'Contact me!', // text inside the button
  email: 'lu000168@algonquinlive.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/WenTaoLuk',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://github.com/WentaoLuk',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/wentao-lu-0078b7201/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/WentaoLuk',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};



export const RegularPosts = [
  {
    title: 'How I Made My Blog Work',
    date: '2021-5-17',
    categories: ['geek', 'study'],
    link: '#',
    image: 'post1.jpeg',
    description: "Briefly introduce my blog and how I built it.",
    detail: " <p>Hi! Finally! I (almost--) finished building my blog.</p> <p>This may not be a real blog since the website is built on GitHub, and GitHub is only to host static pages. But I am still feeling good because it is the first website I built for myself. Now let's take a look at what I have done on this project. </p> <p> First of all, the website is built by ReactJS. The landing page is a template provided by Jacobo Martínez on Gatsby. So I pulled the whole template from his GitHub. It did save me a lot of initial work. (Big thanks for this wonderful template! I linked his GitHub page down in the footer of this website.) </p> <p> The blog is built on React. Since I cannot deploy the backend on GitHub Pages, everything has to be static. So all these words you are reading, all the tags are all put inside as arrays in a 'warehouse', which is the mock.js. Thus you will notice that when you click on any of the articles, the page will not be refreshed. Everything here is JavaScript. </p> <p> The blog pages is divided into three sections. Each of them is displayed as a grid. You might have noticed that the the second section is the aggregation of the first and third section, but displayed in a different way. I also put a paginate function down below, but since I currently do not have a lot of articles, I decided to save it for later use. </p> <p> The popup window is built as a component and hid by default until you click any of the articles. Then it will pass the title, tags, and the content as an array right into the Popup component to be displayed, then the window pops up. </p> <p> That's how I built my blog. I hope you enjoy browsing my blog. </p> <br/><p>Wentao</p>"
  }, {
    title: 'My Second Diary2',
    date: '2021-5-15',
    categories: ['daily', 'life'],
    link: '#',
    image: 'first_diary.jpeg',
    description: "This is the description of the posts",
    detail: "This is the detail"
  }, {
    title: 'My Third Diary3',
    date: '2021-5-15',
    categories: ['daily', 'life'],
    link: '#',
    image: 'first_diary.jpeg',
    description: "This is the description of the posts",
    detail: "This is the detail"
  }, {
    title: 'My Fourth Diary4',
    date: '2021-5-15',
    categories: ['daily', 'life'],
    link: '#',
    image: 'first_diary.jpeg',
    description: "This is the description of the posts",
    detail: "This is the detail"
  }
]

export const OtherPosts = [
  {
    title: 'My Other Posts',
    date: '2021-5-15',
    categories: ['daily', 'life'],
    link: '#',
    image: 'first_diary.jpeg',
    description: "This is the description of the posts",
    detail: "This is the detail"
  }, {
    title: 'My Other Posts With Longer title',
    date: '2021-5-15',
    categories: ['daily', 'life'],
    link: '#',
    image: 'second_day.jpeg',
    description: "This is the description of the posts",
    detail: "This is the detail"
  }, {
    title: 'My Other Posts with long title',
    date: '2021-5-15',
    categories: ['daily', 'life'],
    link: '#',
    image: 'first_diary.jpeg',
    description: "This is the description of the posts",
    detail: "This is the detail"
  }, {
    title: 'My Other Posts',
    date: '2021-5-15',
    categories: ['daily', 'life'],
    link: '#',
    image: 'first_diary.jpeg',
    description: "This is the description of the posts",
    detail: "This is the detail"
  }, {
    title: 'My Other Posts',
    date: '2021-5-15',
    categories: ['daily', 'life'],
    link: '#',
    image: 'first_diary.jpeg',
    description: "This is the description of the posts",
    detail: "This is the detail"
  },
]