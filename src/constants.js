// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import jwt from './assets/tech_logo/jwt.svg';
import spotify from './assets/work_logo/2025-05-26.png';

// Experience Section Logo's


// Project Section Logo's
import movierecLogo from './assets/work_logo/movie_rec.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import iiituna from './assets/education_logo/iiitunalogo.jpeg';
import logo from './assets/education_logo/LOGO12TH.jpeg';
import chatapp from './assets/work_logo/chatapp.png';
import Render from './assets/tech_logo/Render.png';
import currency from './assets/work_logo/currency.png';
import password from './assets/work_logo/password.png';
import rock from './assets/work_logo/rock1.png'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      {name: 'JWT', logo: jwt},
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Render', logo: Render },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

 
  export const education = [
  
    {
      id: 1,
      img: iiituna,
      school: "IIIT Una, Himachal Pradesh",
      date: "Aug 2023 - Aug 2027",
      grade: "7.26 CGPA (Current)",
      desc: "Pursuing a rigorous curriculum in core computer science subjects such as Data Structures, Algorithms, Operating Systems, Computer Networks, and Database Management Systems. Actively involved in coding competitions, technical clubs, and open-source contributions.                              Passionate about problem-solving, software engineering, and exploring emerging technologies like AI, ML, and Cloud Computing.",
      degree: "Bachelor of Technology (B.Tech) in CSE",
    },
    {
      id: 2,
      img: logo,
      school: "Government Senior Secondary School, Tinwari, Jodhpur",
      date: "June 2021 - March 2022",
      grade: "92.6%",
      desc: "Achieved academic excellence with a strong foundation in Physics, Chemistry, and Mathematics.       Demonstrated consistent performance and dedication throughout the academic year.        Developed self-discipline and a growth mindset through independent learning in a rural government school setting.",
      degree: "RBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: logo,
      school: "Hari Om Bal Niketan Secondary School, Cherai, Tinwari, Jodhpur",
      date: "june 2019 - March 2020",
      grade: "93%",
      desc: "Performed consistently well across all subjects, especially in Mathematics and Science. Laid the groundwork for a strong academic and technical journey. Recognized for academic discipline and a strong learning attitude from an early age. ",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "ChatEase",
      description:
        "ChatEase is a full-stack real-time chat application built with modern web technologies to enable secure, responsive, and feature-rich communication between users. It supports private messaging, user authentication, and dynamic UI updates — making it a seamless and engaging messaging experience.",
      image: chatapp,
      tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB (Mongoose)", "JWT (JSON Web Tokens)", "Cookies",   "Socket.io", "Axios", "CORS", "bcrypt"],
      github: "https://github.com/Magraj71/EaseChat",
      webapp: "https://ease-chat.vercel.app/",
    },
    {
      id: 1,
      title: "🎵 Spotify Clone (Frontend)",
      description:
        "Developed a responsive and interactive Spotify Clone using modern frontend technologies. This application replicates core functionalities of the Spotify web player, providing a smooth and intuitive music streaming experience.",
      image: spotify,
      tags: ["React.js", "HTML5 "," CSS3", "JavaScript (ES6+)", "React Hooks & Context API", "Audio API", "CSS"],
      github: "https://github.com/Magraj71/Spotify-clone-frontend-",
      webapp: "https://spotify-clone-frontend-zeta-six.vercel.app/",
    },
    {
      id: 2,
      title: "🎬 Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Magraj71/Movie_Recommendation",
      webapp: "https://movie-recommendation-sand.vercel.app/",
    },
    
    {
      id: 7,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/Magraj71/Search_Image",
      webapp: "https://search-image-gamma.vercel.app/",
    },
    {
      id: 8,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/Magraj71/Image_background_Remover",
      webapp: "https://image-background-remover-red.vercel.app/",
    },
    {
      id: 3,
      title: "💱 Currency Converter App",
      description:
        "A real-time currency conversion web application that helps users convert values between different international currencies quickly and accurately. Designed with a clean and responsive interface, the app fetches the latest exchange rates using a reliable currency API and performs instant conversions based on user input.",
      image: currency,
      tags: ["React JS", "Axios", "Tailwind CSS", "Currency API "],
      github: "https://github.com/Magraj71/CurrencyConvertor",
      webapp: "https://currency-convertor-chi-nine.vercel.app/",
    },
     {
      id: 4,
      title: "🔐 Password Generator",
      description:
        "A secure and customizable password generator built with React. This application enables users to create strong, random passwords based on selected criteria such as length, inclusion of uppercase/lowercase letters, numbers, and special characters.",
      image: password,
      tags: ["React.js", "JavaScript ", "Clipboard API","Tailwind CSS ", " HTML"],
      github: "https://github.com/Magraj71/Password_Generator_React_P1",
      webapp: "https://password-generator-react-p1.vercel.app/",
    },
     {
      id: 5,
      title: "✊✋✌️ Rock Paper Scissors Game",
      description:
        "A simple and fun Rock Paper Scissors game developed using vanilla HTML, CSS, and JavaScript. This browser-based game lets users play against the computer, which makes random choices each round. The game displays the outcome instantly and updates the score in real time.",
      image: rock,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Magraj71/RocPaperSegior",
      webapp: "https://roc-paper-segior.vercel.app/",
    },
  ];  
 