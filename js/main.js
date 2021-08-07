const hero = document.getElementById("hero");
const heroNavBtn = document.querySelector(".hero-link");
const works = document.getElementById("works");
const worksNavBtn = document.querySelector(".works-link");
const projects = document.getElementById("projects");
const projectsNavBtn = document.querySelector(".projects-link");
const video = document.getElementById("video");
const videoNavBtn = document.querySelector(".video-link");
const footer = document.getElementById("footer");
const footerNavBtn = document.querySelector(".footer-link");

const navList = document.querySelector(".header__nav-list");
navList.addEventListener("click", (e) => {
  const linksAndSections = [
    {
      section: hero,
      link: "hero-link",
    },
    {
      section: works,
      link: "works-link",
    },
    {
      section: projects,
      link: "projects-link",
    },
    {
      section: video,
      link: "video-link",
    },
    {
      section: footer,
      link: "footer-link",
    },
  ];
  linksAndSections.map((item) => {
    if (e.target.classList.contains(item.link)) {
      window.scrollTo({
        top: item.section.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

function setActiveLink(btn) {
  const linkButtons = [
    heroNavBtn,
    worksNavBtn,
    projectsNavBtn,
    videoNavBtn,
    footerNavBtn,
  ];
  linkButtons.map((btn) => {
    btn.classList.remove("active");
  });
  btn.classList.add("active");
}
function watchScroll() {
  if (window.pageYOffset >= footer.offsetTop) {
    setActiveLink(footerNavBtn);
  } else if (window.pageYOffset >= video.offsetTop) {
    setActiveLink(videoNavBtn);
  } else if (window.pageYOffset >= projects.offsetTop) {
    setActiveLink(projectsNavBtn);
  } else if (window.pageYOffset >= works.offsetTop) {
    setActiveLink(worksNavBtn);
  } else if (window.pageYOffset >= hero.offsetTop) {
    setActiveLink(heroNavBtn);
  }
}
window.addEventListener("scroll", watchScroll);
