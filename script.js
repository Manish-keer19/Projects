
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});




// function time() {
//   console.log("time start now ")
//   let a = 0;
//   setInterval(function () {
//     console.log("time will work ")

//     a = a + Math.floor(Math.random() * 10);
//     if (a < 100) {
//       document.querySelector("h1").innerHTML = a + "%";

//     }
//     else {
//       a = 100;
//       // console.log(a);
//       document.querySelector("h1").innerHTML = a + "%";
//     }
//   }, 300);

// }

// let tl = gsap.timeline();

// tl.to("#loader h1", {
//   onComplete: time, // time() function ko onComplete handler mein call karo
// })

// console.log("ruko");

// tl.to("#loader", {
//   top: "-100vh",
//   duration: 1.2,

// })





function mousekomove(xscale, yscale) {

  window.addEventListener("mousemove", (details) => {

    let circle = document.querySelector("#minicircle");
    circle.style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(${xscale},${yscale})`;

  });
}


function firstpage_anim() {
  let tl = gsap.timeline();
  tl.from("#nav", {
    y: -10,
    opacity: 0,
    duration: .9,
    ease: Expo.inOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.inOut,
      duration: 1.2,
      delay: -1,
      stagger: .2,
    })

    .from("#homefooter", {
      y: -10,
      opacity: 0,
      duration: 2,
      delay: -1,
      ease: Expo.InOut,
    })
}
function circlechaptakaro() {

  var timeout;
  let yscale = 1;
  let xscale = 1;

  let xprev = 0;
  let yprev = 0;
  window.addEventListener("mousemove", (detail) => {
    clearTimeout(timeout);

    yscale = gsap.utils.clamp(.8, 1.2, detail.clientY - yprev);
    xscale = gsap.utils.clamp(.8, 1.2, detail.clientX - xprev);
    xprev = detail.clientX;
    yprev = detail.clientY;

    mousekomove(xscale, yscale);

    timeout = setTimeout(() => {
      document.querySelector("#minicircle").style.transform = `transition( ${detail.clientX} , ${detail.clientY}) scale(1,1)`;
    }, 100);

  })
}

function imgrender() {

  document.querySelectorAll(".elem").forEach((elem) => {


    let rottate = 0;
    let diffro = 0;
    elem.addEventListener("mousemove", (dets) => {
      // console.log(elem.getBoundingClientRect())
      let diff = dets.clientY - elem.getBoundingClientRect().top-90;
      // console.log(diff)
      diffro = rottate - dets.clientX;
      rottate = dets.clientX
      console.log(diffro)

      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power4.inOut,
        top:diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffro),
        

      });
    });

    elem.addEventListener("mouseleave", (dets) => {

      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power4.inOut,

      });
    });

  });

}




firstpage_anim();
imgrender();
mousekomove();
circlechaptakaro();



