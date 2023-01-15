import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

let trigger1 = gsap.timeline({
    scrollTrigger: { 
        start: "0px top", // 100px
        end: "400px top",
        scrub: 1.5,
    }
});
let trigger2 = gsap.timeline({
    scrollTrigger: { 
        start: "100px top", // 200px
        end: "300px top",
        scrub: 2,
    }
});
let trigger3 = gsap.timeline({
    scrollTrigger: { 
        start: "200px top", // 300px
        end: "400px top",
        scrub: 2.5,
    }
});

trigger1.to(".content-first", {
    y: -800,
});
trigger2.to(".content-second", {
    y: -600,
})
trigger3.to(".content-third", {
    y: -600,
});