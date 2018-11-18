const nav = document.querySelector('nav')
// const div = document.querySelectorAll('.link')
const link = document.querySelectorAll('a')


// lineThrough(e){
//     for (let i=5; i < link.length; i++) {
//         if (e.target.innerText === link[i].innerText) {
//             console.log(e.target)
//             e.target.classList.add = 'click'
//         } 
//     }  
// }



nav.addEventListener('click', function(e) {
    for (let i = 5; i <link.length; i++) {
        if (e.target.innerText === link[i].innerText) {
            console.log(e.target)
            // console.log(e.target.classList)
        }
    }
})
