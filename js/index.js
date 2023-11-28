setTimeout(function() {
    const intro = document.getElementById("intro")
    intro.classList.add("go-up")
    TweenMax.from(".logo", 1, {
        opacity: 0,
        x: -20,
        ease: Expo.easeOut
    })
    TweenMax.staggerFrom("nav a", 1, {
        opacity: 0,
        x: -20,
        ease: Power3.easeOut
    }, 0.08)
    TweenMax.staggerFrom(".landing .text-center", 1, {
        opacity: 0,
        y: 100,
        ease: Power3.easeOut
    }, 0.08)
    TweenMax.from(".landing img", 1, {
        opacity: 0,
        delay: 0.1,
        y: 100,
        ease: Expo.easeOut
    })
    TweenMax.from(".landing button", 1, {
        opacity: 0,
        delay: 0.32,
        y: 100,
        ease: Expo.easeOut
    })
}, 0);

window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar() {
  const htmlElement = document.documentElement
  const percentOfScreenHeightScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight
  htmlElement.style.setProperty(
    "--scroll",
    percentOfScreenHeightScrolled * 100
  )
}

setScrollVar()

const expreiences = document.querySelectorAll(".experience")

expreiences.forEach(element => {
    element.addEventListener("click", function() {
      expreiences.forEach(element => {element.classList.remove("active")})
      element.classList.add("active")
      TweenMax.from(element, 1, {
        opacity: 0,
        y: 50,
        
    })
    });
});

const japanese = document.querySelectorAll(".japanese div")

japanese.forEach(element => {
    element.addEventListener("mouseover", function() {
      element.classList.add("text-blur")
      setTimeout(() => {
        console.log(element.textContent)
        element.textContent = japaneseWord[element.textContent]
        
        element.classList.remove("text-blur")
      } ,500)

    });
});

japanese.forEach(element => {
  element.addEventListener("mouseout", function() {
    element.classList.add("text-blur")
    setTimeout(() => {

      element.textContent = engToJap[element.textContent] ;
      element.classList.remove("text-blur")
    } ,500)

  });
});


const observer = new IntersectionObserver(entries => {
  for (let i = entries.length - 1; i >= 0; i--) {
    const entry = entries[i]
    if (entry.isIntersecting) {
      if (entry.target.dataset.imgToShow === "#img-8"){
        
        document.querySelector(".languages").classList.add("go-up")
        break
      }
      if (entry.target.dataset.imgToShow === "#img-7"){
        
        document.querySelector(".languages").classList.remove("go-up")
        
      }
      document.querySelectorAll("[data-img]").forEach(img => {
        img.classList.remove("lshow")
      })
      const img = document.querySelector(entry.target.dataset.imgToShow)
      img?.classList.add("lshow")

      break
    }
  }
})

document.querySelectorAll("[data-img-to-show]").forEach(section => {
  observer.observe(section)
})

const ScrollAnimationObserver = new IntersectionObserver(entries => {
  for (let i = entries.length - 1; i >= 0; i--) {
    const entry = entries[i]
    if (entry.isIntersecting) {
        entry.target.classList.add("show")
    observer.unobserve(entry.target);
    }
  }
})



document.querySelectorAll(".hidden").forEach(section => {
  ScrollAnimationObserver.observe(section)
})


const textarea = document.getElementById("message");
textarea.addEventListener("keyup", e =>{
  textarea.style.height = "36px";
  let scHeight = e.target.scrollHeight;
  console.log(scHeight)
  textarea.style.height = `${scHeight}px`;
})


const navbarToggler = document.querySelector(".navbar-toggler");
const links = document.querySelector(".links");
navbarToggler.addEventListener("click", () => {
    links.classList.add('nav-full-screen')
    document.querySelector("header").classList.add('sticky-top')
})
links.addEventListener("click", () => {
    links.classList.remove('nav-full-screen')
    document.querySelector("header").classList.remove('sticky-top')
})