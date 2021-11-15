//1
let myH1 = document.querySelector('h1');

myH1.addEventListener('click', () => {
    myH1.classList.add('text-blue')
})

//2
let myH3 = document.querySelector('h3')

myH3.addEventListener('dblclick', () => {
    myH3.classList.add('text-error')
})

//3 
let firstP = document.querySelector('p')
firstP.addEventListener('click', () => {
    firstP.classList.toggle('text-style')
})

//4
// let span = Array.from(document.querySelectorAll('p')[1].children)
// console.log(span);

// span.forEach(el => {
//     el.addEventListener('click', () => {
//         el.classList.toggle('bolder-red')
//     })
// });

let p1 = document.querySelectorAll("p")[1];
let span2 = p1.querySelectorAll("span")
span2.forEach(el => {
    el.addEventListener("click",() => {
        el.setAttribute("class","bolder");
    })
});

//5
let mySpan2 = Array.from(document.querySelectorAll('p')[2].children)

console.log(mySpan2);

mySpan2.forEach(el => {
    el.addEventListener('click', () => {
        mySpan2.forEach(el => {
            el.classList.remove('bolder-red')
        });
        el.classList.add('bolder-red')
    })
});