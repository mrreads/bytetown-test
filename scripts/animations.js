import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let trigger1 = gsap.timeline({
    scrollTrigger: { 
        start: "100px top", // 100px
        end: "500px bottom",
        scrub: 2,
    }
});
let trigger2 = gsap.timeline({
    scrollTrigger: { 
        start: "200px top", // 200px
        end: "500px bottom",
        scrub: 1,
    }
});
let trigger3 = gsap.timeline({
    scrollTrigger: { 
        start: "300px top", // 300px
        end: "500px bottom",
        scrub: 1,
    }
});

trigger1.to(".content-first", {
    y: -800,
});
trigger2.to(".content-second", {
    y: -800,
})
trigger3.to(".content-third", {
    y: -800,
});