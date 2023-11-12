// -------------------------------------------------------------------------------------------------------------------------------
//*  -------------------------------------------------    Project List   -------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------

const projects = [
  {
    "title": "GoogleForm Clone",
    "img_url": "./src/imgs/project/google-form-clone.gif",
    "github": "https://github.com/siddhant-deshmukh/GoogleFormClone-frontend",
    "url": null,
    "description": "This is a clone of Google Form. One can create form, share it and take responses from others. Have OAuth based authentication from Google and Github.",
    "tech_used": ["MERN", "Redux"]
  },
  {
    "title": "Twitter Clone",
    "img_url": "./src/imgs/project/twitter.png",
    "github": "https://github.com/siddhant-deshmukh/twitter-clone-using-nextjs",
    "url": null,
    "description": "Basic clone of twitter. Implimented SSR using NextJS. Uses azure services Azure Blob, Azure Cosmosdb for MongoDB. State management and frontend caching using React Query.",
    "tech_used": ["Next.js", "MongoDB", "Azure", "TailwindCSS", "React Query"]
  },
  {
    "title": "Form App",
    "img_url": "./src/imgs/project/google-form-clone.gif",
    "github": "https://github.com/siddhant-deshmukh/form-app-golang-postgres",
    "url": null,
    "description": "One can create form, share it and take responses from others. Have a very functional UI, Focus has been given on scalability and secuirty of the application.",
    "tech_used": ["Go", "PostgreSQL", "Gin", "React", "Redux"]
  },
  {
    "title": "Instagram Clone",
    "img_url": "./src/imgs/project/insta-clone.gif",
    "github": "https://github.com/siddhant-deshmukh/firebase-insta",
    "url": "Instagram Clone made using a BaaS Firebase. Responsive UI with Dark Mode. Uses firebase services for authentication, database and file storage. Scalable and Secure.",
    "description": "Website for HR / companies to take resume and basic information from applicants. Uses AWS S3 to store resumes.",
    "tech_used": ["Firebase", "React"]
  },
  {
    "title": "Transport Hub",
    "img_url": "./src/imgs/project/transport-hub.gif",
    "github": "https://github.com/siddhant-deshmukh/TranportHub",
    "url": null,
    "description": "Have chat functionality. JWT token based custom authentication.",
    "tech_used": ["JWT", "BcrypthJS", "MERN"]
  },
  {
    "title": "Card Printers",
    "img_url": "./src/imgs/project/card-printers.gif",
    "github": "https://github.com/siddhant-deshmukh/card-printers",
    "url": null,
    "description": "Beautiful, static, responsive website.",
    "tech_used": ["HTML", "CSS"]
  },
  {
    "title": "YourHR",
    "img_url": "",
    "github": "https://github.com/siddhant-deshmukh/YourHR",
    "url": null,
    "description": "Website for HR / companies to take resume and basic information from applicants. Uses AWS S3 to store resumes.",
    "tech_used": ["AWS-s3", "MERN", "JWT", "BcryptJS"]
  },
]

// ${project.tech_used.slice(0,3).map((tech)=>`<span class="bg-b py-1 px-3 rounded-md">${tech}</span>`).join(" ")}
// ${(project.img_url)?project.img_url:'./src/imgs/default.png'}
// ${project.description.split(".").slice(0,-1).map((line)=>`<li class="pl-1">&#x2022; ${line}</li>`).join(" ")}
const projectsComponents = projects.map((project) => {
  return `<div class="flex flex-col max-w-full h-[450px] border-2  rounded-lg shadow-md">
    <div class="relative overflow-hidden w-full h-[50%]">
      <div class="absolute flex bottom-0 right-0 text-sm text-white space-x-1">
        ${project.tech_used.slice(0, 3).map((tech) => `<span class="bg-b py-1 px-3 rounded-md">${tech}</span>`).join(" ")}
      </div>
      <img class="w-full h-fit" src=${(project.img_url) ? project.img_url : './src/imgs/default.png'} />
    </div>
    <div class="p-3 text-left h-[40%]  w-full max-h-full truncate">
      <div class="flex w-full justify-between items-center">
        <h1 class="text-lg truncate ... overflow-hidden font-bold">${project.title}</h1>
        <a href=${project.github} target="_blank">
          <img class="w-6 h-6 bg-black rounded-full" src="./src/imgs/github.svg"/>
        </a>
      </div>
      
      <ul class="space-y-1">
        ${project.description.split(".").slice(0, -1).map((line) => `<li class="pl-1 whitespace-normal">&#x2022; ${line}</li>`).join(" ")}
      </ul>
    </div>
  </div>`
})

function addProjectComponents(projectsComponents) {
  const projectsContainer = document.querySelector("#projects-list")
  projectsComponents.forEach(pro => {
    const li = document.createElement("li")
    // console.log(pro)
    li.innerHTML = pro
    projectsContainer.appendChild(li)
  })
}

addProjectComponents(projectsComponents)

const projectFilterBtns = document.querySelectorAll('.project-filter')
// console.log(projectFilterBtnconsole.logs)
projectFilterBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(btn.value, btn)
  })
})


// -------------------------------------------------------------------------------------------------------------------------------
//*  -------------------------------------------------    Smooth transitions on scroll  -------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    }
    // else {
    //   entry.target.classList.remove('show')
    // }
  })
})

const tempHiddenElements = document.querySelectorAll('.temp-hidden')
tempHiddenElements.forEach((ele) => observer.observe(ele))



// -------------------------------------------------------------------------------------------------------------------------------
//*  -------------------------------------------------    Smooth transitions of navbar  -------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
const mainNavBar = document.querySelector('#main-nav-bar')
const tempNavBar = document.querySelector('#temp-nav-bar')

const navObserver = new IntersectionObserver((entries) => {
  // console.log(entries)
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      tempNavBar.classList.add('temp-hide-nav')
      tempNavBar.classList.remove('show-nav')
      mainNavBar.classList.add('show-nav')
      mainNavBar.classList.remove('temp-hide-nav')
    } else {
      tempNavBar.classList.remove('temp-hide-nav')
      tempNavBar.classList.add('show-nav')
      mainNavBar.classList.remove('show-nav')
      mainNavBar.classList.add('temp-hide-nav')
    }
  })
}, { rootMargin: '50px' })

const projectSection = document.querySelector('#temp-nav-bar')
navObserver.observe(projectSection)


// *--------------------------------------------------------------------------------------------------------------------------

var cube = document.querySelector('.cube');
// var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

// function changeSide() {
//   var checkedRadio = radioGroup.querySelector(':checked');
//   var showClass = 'show-' + checkedRadio.value;
//   if ( currentClass ) {
//     cube.classList.remove( currentClass );
//   }
//   cube.classList.add( showClass );
//   currentClass = showClass;
// }
// // set initial side
// changeSide();

const sides = ['front', 'bottom',  'back',  'right', 'left', 'top']
var index = 0
setInterval(() => {
  console.log(sides[index], index)
  var showClass = 'show-' + sides[index];

  if (currentClass) {
    cube.classList.remove(currentClass);
  }
  cube.classList.add(showClass);
  currentClass = showClass;

  index += 1
  if (index > 5) {
    index = 0
  }
}, 2000)
// radioGroup.addEventListener( 'change', changeSide );

