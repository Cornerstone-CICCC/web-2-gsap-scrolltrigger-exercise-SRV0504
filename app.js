gsap.registerPlugin(ScrollTrigger);

gsap.from(".line-one span", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".line-one",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

gsap.to(".sun", {
  y: -50,
  rotation: 180,
  scale: 0.8,
  duration: 2,
  scrollTrigger: {
    trigger: ".line-one",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

gsap.from(".line-two span", {
  scale: 0,
  opacity: 0,
  duration: 1,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".line-two",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

gsap.from(".line-three span", {
  y: -100,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".line-three",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

gsap.to(".line-three", {
  backgroundPositionX: "0%",
  duration: 2,
  scrollTrigger: {
    trigger: ".line-three",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

gsap.from(".moon", {
  y: -100,
  opacity: 0,
  scale: 0.5,
  duration: 2,
  scrollTrigger: {
    trigger: ".line-three",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});