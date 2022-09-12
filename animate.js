let tl = new TimelineMax({
    paused : true,
})

tl.to('.panel', 1.5,  { scaleY: 1, height: '100vh', ease: "expo.out" })
tl.to('#illustration', 1,  { y: 0, opacity: 1, ease: "back.out(1.7)" }, 2)
tl.to('.box', 1,  { scale: 1, opacity: 1, ease: "back.out(1.7)" })
tl.to('p', 1,  { opacity: 1, ease: "back.out(1.7)" }, "-=2.5")

document.getElementById('cta').addEventListener('click', function() {
    tl.reversed(!tl.reversed())

    if(tl.reversed())
        tl.reversed()
    else
        tl.play()
})

document.getElementById('pause').addEventListener('click', function(){
    if(tl.paused())
        tl.play()
    else
        tl.pause()
        tl.paused(true)
})