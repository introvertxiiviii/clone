Shery.mouseFollower();
//Parameters are optional.
//   skew: true,
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   duration: 1,
// });

Shery.makeMagnet(".op");
Shery.hoverWithMediaCircle(".hvr", {
  videos: ["./img/video1.mp4", "./img/video2.mp4", "./img/video3.mp4"],
});

gsap.to(".featureLeftelem", {
  scrollTrigger: {
    trigger: "#featureImages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});

let sections = document.querySelectorAll(".featureLeftelem");

Shery.imageEffect(".featureRightimage", {
  style: 5,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});
