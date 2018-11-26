// const nav = document.querySelector('nav')
// // const div = document.querySelectorAll('.link')
// const link = document.querySelectorAll('a')


// lineThrough(e){
//     for (let i=5; i < link.length; i++) {
//         if (e.target.innerText === link[i].innerText) {
//             console.log(e.target)
//             e.target.classList.add = 'click'
//         } 
//     }  
// }



// nav.addEventListener('click', function(e) {
//     for (let i = 5; i <link.length; i++) {
//         if (e.target.innerText === link[i].innerText) {
//             console.log(e.target)
//             // console.log(e.target.classList)
//         }
//     }
// })

// const portfolio = document.querySelector('#portfolio')
const title = document.querySelector('#portfolioh2')
const title2 = document.querySelector('#contacth2')

addEventListener('scroll', addAnimation)
addEventListener('scroll', contactAnimation)

function addAnimation(e) {
    if (window.scrollY >= 500 && window.scrollY <= 1200) {
        title.classList.add('portfolio-animation')
    } else {
        title.classList.remove('portfolio-animation')
    }
}

function contactAnimation(e) {
    if (window.scrollY >= 2200) {
        title2.classList.add('contact-animation')
    } else {
        title2.classList.remove('contact-animation')
    }
}

// Carousel

let bannerStatus = 1
const bannerTimer = 4000

window.onload = function() {
    bannerLoop()
}

let startBannerLoop = setInterval(function(){
    bannerLoop()
}, bannerTimer)

document.querySelector('#main-banner').onmouseenter = function() {
    clearInterval(startBannerLoop)
}

document.querySelector('#main-banner').addEventListener('mouseleave', function() {
    startBannerLoop = setInterval(function(){
        bannerLoop()
    }, bannerTimer)
})

let leftCounter = 0
document.querySelector('#imgbanbtn-prev').addEventListener('click', function() {
    if(leftCounter === 0) {
        if (bannerStatus === 1) {
            bannerStatus = 2
        }
        else if (bannerStatus === 2) {
            bannerStatus = 3
        }
        else if (bannerStatus === 3) {
            bannerStatus = 1
        }
        bannerLoopLeft()
        leftCounter += 1
    } else {
        bannerLoopLeft()
    }
    rightCounter = 0
    // if (bannerStatus === 1) {
    //     bannerStatus = 2
    // }
    // else if (bannerStatus === 2) {
    //     bannerStatus = 3
    // }
    // else if (bannerStatus === 3) {
    //     bannerStatus = 1
    // }
    // bannerLoop()
    
})

let initialCounter = 1
let rightCounter = 0
document.querySelector('#imgbanbtn-nxt').addEventListener('click', function() {
    if (initialCounter === 1) {
        bannerLoop()  
        initialCounter += 1  
    }
    else if(rightCounter === 0) {
        if (bannerStatus === 1) {
            bannerStatus = 3
        }
        else if (bannerStatus === 2) {
            bannerStatus = 1
        }
        else if (bannerStatus === 3) {
            bannerStatus = 2
        }
        bannerLoop()
        rightCounter += 1
    } 
    else {
        bannerLoop()
    }
    leftCounter = 0
    // bannerLoop()
})

function bannerLoop() {
    if (bannerStatus === 1) {
        document.querySelector('#imgban2').style.opacity = '0'
        setTimeout(function(){
            document.querySelector('#imgban1').style.right = '0px'
            document.querySelector('#imgban1').style.zIndex = '-100%'
            document.querySelector('#imgban2').style.right = '-1000px'
            document.querySelector('#imgban2').style.zIndex = '1500'
            document.querySelector('#imgban3').style.right = '200%'
            document.querySelector('#imgban3').style.zIndex = '500'
        }, 500)
        setTimeout(function(){
            document.querySelector('#imgban2').style.opacity = '1'
        }, 1000)
        bannerStatus = 2
    }
    else if (bannerStatus === 2) {
        document.querySelector('#imgban3').style.opacity = '0'
        setTimeout(function(){
            document.querySelector('#imgban2').style.right = '0px'
            document.querySelector('#imgban2').style.zIndex = '1000'
            document.querySelector('#imgban3').style.right = '-100%'
            document.querySelector('#imgban3').style.zIndex = '1500'
            document.querySelector('#imgban1').style.right = '200%'
            document.querySelector('#imgban1').style.zIndex = '500'
        }, 500)
        setTimeout(function(){
            document.querySelector('#imgban3').style.opacity = '1'
        }, 1000)
        bannerStatus = 3
    }
    else if (bannerStatus === 3) {
        document.querySelector('#imgban1').style.opacity = '0'
        setTimeout(function(){
            document.querySelector('#imgban3').style.right = '0px'
            document.querySelector('#imgban3').style.zIndex = '1000'
            document.querySelector('#imgban1').style.right = '-100%'
            document.querySelector('#imgban1').style.zIndex = '1500'
            document.querySelector('#imgban2').style.right = '200%'
            document.querySelector('#imgban2').style.zIndex = '500'
        }, 500)
        setTimeout(function(){
            document.querySelector('#imgban1').style.opacity = '1'
        }, 1000)
        bannerStatus = 1
    }
}

function bannerLoopLeft() {
    if (bannerStatus === 1) {
        document.querySelector('#imgban3').style.opacity = '0'
        setTimeout(function(){
            document.querySelector('#imgban1').style.right = '0px'
            document.querySelector('#imgban1').style.zIndex = '-100%'
            document.querySelector('#imgban2').style.right = '-1000px'
            document.querySelector('#imgban2').style.zIndex = '1500'
            document.querySelector('#imgban3').style.right = '200%'
            document.querySelector('#imgban3').style.zIndex = '500'
        }, 500)
        setTimeout(function(){
            document.querySelector('#imgban3').style.opacity = '1'
        }, 1000)
        bannerStatus = 3
    }
    else if (bannerStatus === 2) {
        document.querySelector('#imgban1').style.opacity = '0'
        setTimeout(function(){
            document.querySelector('#imgban2').style.right = '0px'
            document.querySelector('#imgban2').style.zIndex = '1000'
            document.querySelector('#imgban3').style.right = '-100%'
            document.querySelector('#imgban3').style.zIndex = '1500'
            document.querySelector('#imgban1').style.right = '200%'
            document.querySelector('#imgban1').style.zIndex = '500'
        }, 500)
        setTimeout(function(){
            document.querySelector('#imgban1').style.opacity = '1'
        }, 1000)
        bannerStatus = 1
    }
    else if (bannerStatus === 3) {
        document.querySelector('#imgban2').style.opacity = '0'
        setTimeout(function(){
            document.querySelector('#imgban3').style.right = '0px'
            document.querySelector('#imgban3').style.zIndex = '1000'
            document.querySelector('#imgban1').style.right = '-100%'
            document.querySelector('#imgban1').style.zIndex = '1500'
            document.querySelector('#imgban2').style.right = '200%'
            document.querySelector('#imgban2').style.zIndex = '500'
        }, 500)
        setTimeout(function(){
            document.querySelector('#imgban2').style.opacity = '1'
        }, 1000)
        bannerStatus = 2
    }
}