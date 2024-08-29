gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
  scrollTrigger: ".box", // Trigger animation when .box comes into view
  x: 500,
  duration: 3,
  backgroundColor: "red"
});
