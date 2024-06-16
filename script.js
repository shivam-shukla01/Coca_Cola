var tl = gsap.timeline({scrollTrigger:{
    trigger: ".part-2",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
}})

tl.to("#coca", {
    top: "100%",
    left: "2%"
},'animation')
tl.to("#ice-peace1", {
    top: "162%",
    left: "70%"
},'animation')
tl.to("#ice-peace2", {
    top: "150%",
    left: "10%"
},'animation')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".part-3",
    start: "0% 95%",
    end: "50% 40%",
    scrub: true,
}})

tl2.to("#coca", {
    top: "185%",
    left: "30%",
    
})


