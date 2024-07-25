// let showMoreBtn = document.querySelector('.showBtn');
// let hideText = document.querySelector('.hideText');

// showMoreBtn.addEventListener('click' , () => {
//     if(hideText.classList.toggle('showText')){
//         showMoreBtn.innerHTML = "Show Less"
//     }else{
//         showMoreBtn.innerHTML = "Show More"

//     }
// })

let showMoreBtn = document.querySelector('.showBtn');
// console.log(showMoreBtn);
let hideText = document.querySelector('.hideText');
console.log(hideText);
showMoreBtn.addEventListener('click', () => {
//     console.log(hideText.classList);
    if(hideText.classList.toggle('showText')){
                 showMoreBtn.innerHTML = "Show Less"
            }else{
                 showMoreBtn.innerHTML = "Show More"
           }
} )