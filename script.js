let h5Timer = document.querySelector(".line1-part1 h5");
let grow = 0;

let tl = gsap.timeline();
tl.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
});

tl.from(".line1-part1 ", {
  opacity: 0,
  onStart: function () {
    setInterval(function () {
      if (grow < 100) {
        h5Timer.innerHTML = grow++;
      } else {
        h5Timer.innerHTML = grow;
      }
    }, 33);
  },
});
tl.to(".line h2",{
  animationName : "anime",
  opacity : 1
})

tl.to("#loader", {
  opacity: 0,
  duration: 0.5,
  delay: 3,
});

tl.to("#page1", {
  delay: 0.2,
  y: 1600,
  opacity: 0,
  duration: 0.5,
  ease:Power4
});

tl.to("#loader" , {
  display : "none"
})