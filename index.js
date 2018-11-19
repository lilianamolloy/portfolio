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