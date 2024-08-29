const tl = gsap.timeline();

tl.to(".box", { duration: 1, x: 100 })
  .to(".box", { duration: 1, y: 100 })
  .to(".box", { duration: 1, rotation: 360 })
  .to(".box", { duration: 1, scale: 1.5 });