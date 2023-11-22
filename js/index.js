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
}, 2000);

window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar() {
  const htmlElement = document.documentElement
  const percentOfScreenHeightScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight
  console.log(percentOfScreenHeightScrolled * 100)
  htmlElement.style.setProperty(
    "--scroll",
    percentOfScreenHeightScrolled * 100
  )
}

setScrollVar()