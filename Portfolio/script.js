const splash = document.querySelector(`#particles-js`);
const content = document.querySelector(`.content`);
// content.classList.add("hidden");
setTimeout(() => {
  splash.classList.add("hidden");
  content.classList.remove("hidden");
  gsap.registerPlugin(ScrollTrigger);
  var ww = window.innerWidth;
  var wh = window.innerHeight;

  let st = ["top center", "top 90%", "top 70%", "top 100%"];
  let ed = ["18% 80%", "+=110%", "+=100%", "+=100%"];

  ScrollTrigger.matchMedia({
    "(min-width: 768px)": function () {
      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".education-familiar",
          start: st[2],
          end: ed[2],
          // toggleActions: "restart reverse restart restart",
        },
      });

      tl2.from(
        ".interests",
        {
          duration: 0.5,
          scale: 0,
          ease: "bounce.easeOut",
        },
        0
      );
    },
    all: function () {
      // for section1
      let tl = gsap.timeline({
        duration: 1,
        scrollTrigger: {
          trigger: ".nav-link",
          start: st[0],
          end: ed[0],
          // toggleActions: "restart reverse restart restart",
        },
      });
      tl.from(
        ".intro-name",
        {
          opacity: 0,
          y: 50,
          ease: "none",
        },
        0
      ).from(
        ".img-fluid",
        {
          opacity: 0,
          x: "10vw",
          ease: "easeIn",
        },
        0
      );
      // for section2

      let tl1 = gsap.timeline({
        duration: 1,
        scrollTrigger: {
          trigger: ".skills-box",
          start: st[1],
          end: ed[1],
          // toggleActions: "restart reverse restart restart",
        },
      });
      tl1
        .from(
          ".skills-box",
          {
            opacity: 0,
            x: "10vw",
            ease: "easeIn",
          },
          0
        )
        .from(".progress-bar", {
          width: 0,
          autoAlpha: 0,
          ease: "easeIn",
        });

      gsap.from(".lets-talk, .social", {
        duration: 0.3,
        scale: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".lets-talk",
          start: st[3],
          end: ed[3],
          // toggleActions: "restart reverse restart restart",
        },
      });
    },
  });

  if (ww <= 768) {
    ed[0] = "20% 100%";
  }
}, 3500);

// gsap
