const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'SJ'
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Savjit Thoriya',
  role: 'Full Stack Web Developer',
  description:
    'Knowledgeable in front-end technologies like HTML/CSS, "React" as well as back-end development including technologies like JavaScript, Node.js, Express, SQL, MongoDB, TypeScript, Git etc. I enthusiastically follow the evolution of many technologies like BlockChain, AI, etc. If you share my curiosities than feel free to connect with me.',
  resume: 'https://drive.google.com/u/0/uc?id=1mhuurnSwcgU06ZZIeiYtGFC0EfLO7Xpd&export=download',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Koovs.com Clone',
    description:
      'I with the help of my team members cloned KOOVS.COM which is an online storefor western fashion.',
    stack: ['HTML/CSS', 'JavaScript', 'Bootstrap'],
    sourceCode: 'https://github.com/S-Thor/koovs.com/tree/master/Koovs.com',
    livePreview: 'https://thunderous-lollipop-31c370.netlify.app/',
  },
  {
    name: 'Overstock.com Clone',
    description:
      'I with the help of my team members cloned OVERSTOCK.COM which is an onlinefurniture store.',
    stack: ['HTML/CSS', 'JavaScript', 'Bootstrap'],
    sourceCode: 'https://github.com/S-Thor/Overstock_Project',
    livePreview: 'https://radiant-fairy-66db6d.netlify.app/',
  },
  // {
  //   name: 'Project 3',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'NodeJS',
  'ExpressJS',
  'Git',
  'TailwindCSS',
  'MongoDB',
  'NextJS',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'sahil.thoriya96@gmail.com',
}

const social = {
  github: "https://github.com/S-Thor",
  linkedin:"https://www.linkedin.com/in/savjit/",
  twitter:"https://twitter.com/Sunny_dev0",
  instagram:"#"
}

export { header, about, projects, skills, contact, social }
