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
    detail: " <p>Hi! Finally! I (almost--) finished building my blog.</p> <p>This may not be a real blog since the website is built on GitHub, and GitHub is only to host static pages. But I am still feeling good because it is the first website I built for myself. Now let's take a look at what I have done on this project. </p> <p> First of all, the website is built by ReactJS. The landing page is a template provided by Jacobo Martínez on Gatsby. So I pulled the whole template from his GitHub. It did save me a lot of initial work. (Big thanks for this wonderful template! I linked his GitHub page down in the footer of this website.) </p> <p> The blog is built on React. Since I cannot deploy the backend on GitHub Pages, everything has to be static. So all these words you are reading, all the tags are all put inside as arrays in a 'warehouse', which is the mock.js. Thus you will notice that when you click on any of the articles, the page will not be refreshed. Everything here is JavaScript. </p> <p> The blog pages is divided into three sections. Each of them is displayed as a grid. You might have noticed that the the second section is the aggregation of the first and third section, but displayed in a different way. I also put a paginate function down below, but since I currently do not have a lot of articles, I decided to save it for later use. </p> <p> The popup window is built as a component and hid by default until you click any of the articles. Then it will pass the title, tags, and the content as an array right into the Popup component to be displayed, then the window pops up. </p> <p> That's how I built my blog. I hope you enjoy browsing my blog. </p> <br/><p>Wentao</p><img src='https://i.ibb.co/jwRh2d3/post1.jpg' alt='post1' border='0'>"
  }, {
    title: 'About Me',
    date: '2021-5-18',
    categories: ['daily', 'life'],
    link: '#',
    image: 'first_diary.jpeg',
    description: "Let me tell you who I am and what I love.",
    detail: "<p>Hello there! I am glad that you opened this page.</p><p>My name is Wentao. People usually call me Luke. I was born and raised in China. I love music. I started playing piano since I was an extremely naughty boy, and I have a good sense of pitch. </p> <p> I have a good sense of pitch, and I play piano and guitar. My previous college experience was a blast. I formed a music club, and every weekend at 7 pm, we would take out our equipment and hold shows on the campus. We gradually built a fan base, and luckily, I gained a lot of friendships with them. We even helped two of our alumni proposed. </p> <img src='https://i.ibb.co/tb54KhX/10240057-4-D99-4-FDA-BC33-6-A2-BFA740826.jpg' alt='10240057-4-D99-4-FDA-BC33-6-A2-BFA740826' border='0'> <p> After finishing my last degree in Hydraulic Engineering, I realized that being a hydraulic engineer was not my goal. After taking two jobs in completely non-engineering fields and doing a lot of research, I finally decided to start a new student career in the IT industry because I am always technologically savvy, and I wished to make full use of my gift. </p> <img src='https://i.ibb.co/FbvVcmj/4-E1792-AD-BEDB-417-C-B13-D-4-EC1363815-DD.jpg' alt='4-E1792-AD-BEDB-417-C-B13-D-4-EC1363815-DD' border='0'> <p> I love exploring new surroundings and making new friends. Travelling built my humility and taught me how meaningful it is to understand and respect people from different cultures and backgrounds. To me, there won't be a better choice than studying Computer Science in Canada and exposing myself to such a multicultural society. I'm joyful, grateful, and amaze by how beautiful the country is and how friendly people are to each other. </p> <img src='https://i.ibb.co/W396q59/C0340876-4313-4-B58-9-EC5-98-E2456183-F6.jpg' alt='C0340876-4313-4-B58-9-EC5-98-E2456183-F6' border='0'> <p> My short-term goal is to finish my program at Algonquin College. And my long-term? Becoming a professional full-stack or OOP developer and making contributions to open-source communities may just be the first step. Next? For now, I can't be sure. But I always dream big. </p> <img src='https://i.ibb.co/8MwvBMh/80926160-263-D-448-C-B89-C-A2-FBDF262-F79.jpg' alt='80926160-263-D-448-C-B89-C-A2-FBDF262-F79' border='0'> "
  }, {
    title: 'How I set up my awesome zoom video background',
    date: '2021-5-20',
    categories: ['geek', 'fun'],
    link: '#',
    image: 'post3.gif',
    description: "This is the tutorial on how to set up your customized video background to make you stand out!",
    detail: "<p>Since I have set up my customized video background, I got a lot of good feedback from my classmates and professors. Because it is not just a normal video, but it is a special background with my name on it. </p><img src='https://i.ibb.co/xgztB5P/Ezgif-com-gif-maker.gif' alt='Ezgif.com-gif-maker' border='0'><p>First, go find some videos online. They are not supposed to be too long, so it's recommended to go for those videos specially made for zoom use. Their are quite a lot of options. You can go to <a href='https://www.wibbitz.com/blog/free-virtual-backgrounds-for-zoom-video-background/' target='_blank'>Wibbitz</a>，<a href='https://mixkit.co/free-stock-video/zoom-virtual-background/' target='_blank'>Mixkit</a> or <a href='https://coverr.co/stock-video-footage/zoom-virtual-backgrounds' target='_blank'>Coverr</a>. </p> <p>If you just need a regular video background without your name in the corner, there are only need two steps to set up.Then, go to zoom app settings-Background and add the video as virtual background. (This may not apply to all users if you do not have a physical green screen. It all depends on your systems and hardware. See here for detail) </p> <p>To set up a customized video background, you can go to many websites. I personally recommend wave.video, which is where my background came from. </p> <p>It might take you up to 30 minutes to get it done, but trust me, it worth the effort. </p> <p>If you are editing the template in Wave.video, you can change your name, job title, font size and anything else. Then go to publish(Top right corner), click Render. </p> <p>After the video is prepared., you will need to download it to your computer. Please note that you will need to upgrade your account to download your customized video. It is always best to support the website. But if you are new to here and just wish to try it for the first time, an optional way is to share it to your youtube channel for free. Then you manage to download it from your channel. </p> <p>So that's all you need to know to get started with your special video background! Good luck! </p><img src='https://i.ibb.co/qnsZxWf/post3.jpg' alt='post3' border='0'>"
  }, {
    title: 'Story Of My Keto Diet: Ultimate Low-Carb & High-Fat',
    date: '2021-5-25',
    categories: ['daily', 'life'],
    link: '#',
    image: 'post4-keto.jpg',
    description: "My keto experience for the past 15 months. ",
    detail: "<p>First of all, I know this topic is always controversial but not as much as politics. Here I am just to share my personal experience and feelings for your reference. </p> <p>I have been doing keto since Feb 22, 2020. It all started with my frustration about my belly fat, and before knowing this kind of diet, I had been doing cardio for 9 months, trying to lose some weight. I did make 20 pounds of weight loss, but then I stuck at the point and could not keep moving on. </p> <img src='https://i.ibb.co/nR2qSb5/D84-E58-AF-9202-417-E-A39-D-D799-AA0580-F1.jpg' alt='D84-E58-AF-9202-417-E-A39-D-D799-AA0580-F1' border='0'> <figcaption>Keto Cookies I made</figcaption> <p>Then I started doing keto. Honestly, in the beginning, it was a little uncomfortable because you have to cut down almost 95 percent of the carb supply. Still, the bad feeling did not last long. My body fat dropped to 12% with two months, and I was extremely satisfied. </p> <p>Doing keto gave me a better and healthier body and made me realize that we, as humankind, are genuinely not supposed to eat that large amount of carbs every day, from rice, noodles, bread to ice cream, coke/7-up, and Reese Peanut Butter cups. (Peanuts and butter are ok, but they put a lot of sugar into it) This is too much for our body. </p> <p>While comparing to a high carb diet, keto seems nuts: with around 75% of the energy provided by fat, 20% by protein, and 5% by carbs, you have to eat many fats. </p> <p>So why am I doing this even after I have reached my ideal weight? Here is why: </p> <p><strong>1. I always love greasy food.</strong> Now I can eat keto ice cream, keto bread, and butter, pork as much as I want WITHOUT worrying about gaining weight. This is the biggest reason. Don’t worry about being carb-deprived. You have tons of choices for protein and carbs! </p> <img src='https://i.ibb.co/54XCDBC/FF67-A9-F7-C8-FE-48-A4-B8-CB-03-D34-E14695-A.jpg' alt='FF67-A9-F7-C8-FE-48-A4-B8-CB-03-D34-E14695-A' border='0'> <figcaption>Keto BBQ! yeeeeh! </figcaption> <p><strong>2. Keto makes people more energetic.</strong> You will not feel hungry and become anxious quickly, and not feeling sleepy after meals because you are no longer controlled by the blood sugar variations. You are in charge of your body now. And since you do not easily get hungry, you get to choose when to eat or even not eat. </p> <p><strong>3. You have nothing to worry about.</strong>Technically, we can do keto forever without worrying about long-term side effects. Carbs are causing a lot of problems today, especially diabetes and obesity, and they are destroying our skin through a natural process called glycation. Our ancestors did not consume a lot of carbs, and they survived well. They died earlier because of the dangerous environment and zero medical care, not because of no carbs to eat. </p> <p>So keto or not keto? No matter what, I respect your choice. You can always try or switch to different diets. If you have any questions regarding keto, you can always reach me at <a href='mailto:wentaoluk@gmail.com'>wentaoluk@gmail.com</a>. I would love to help you out.</p>"
  }
]

export const OtherPosts = [
  {
    title: 'My Other Posts(Yet to finish)',
    date: '2021-5-15',
    categories: ['daily', 'life'],
    link: '#',
    image: 'first_diary.jpeg',
    description: "This is the description of the posts",
    detail: "This is the detail"
  }, {
    title: 'My Other Posts With Longer title(Yet to finish)',
    date: '2021-5-15',
    categories: ['daily', 'life'],
    link: '#',
    image: 'second_day.jpeg',
    description: "This is the description of the posts",
    detail: "This is the detail"
  }, {
    title: 'My Other Posts with long title(Yet to finish)',
    date: '2021-5-15',
    categories: ['daily', 'life'],
    link: '#',
    image: 'first_diary.jpeg',
    description: "This is the description of the posts",
    detail: "This is the detail"
  }, {
    title: 'My Other Posts(Yet to finish)',
    date: '2021-5-15',
    categories: ['daily', 'life'],
    link: '#',
    image: 'first_diary.jpeg',
    description: "This is the description of the posts",
    detail: "This is the detail"
  }, {
    title: 'My Other Posts(Yet to finish)',
    date: '2021-5-15',
    categories: ['daily', 'life'],
    link: '#',
    image: 'first_diary.jpeg',
    description: "This is the description of the posts",
    detail: "This is the detail"
  },
]