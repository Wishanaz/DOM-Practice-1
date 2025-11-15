let elem = document.querySelectorAll(".elem");

elem.forEach(function(val){
    val.addEventListener("mouseenter", function(){
        val.childNodes[3].style.opacity = 1;
    })

    val.addEventListener("mouseleave", function(){
        val.childNodes[3].style.opacity = 0;
    })

    val.addEventListener("mousemove", function(dets){
        const rect = val.getBoundingClientRect();
        val.childNodes[3].style.left = (dets.clientX - rect.left - val.childNodes[3].offsetWidth / 2) + "px";
        val.childNodes[3].style.top = (dets.clientY - rect.top - val.childNodes[3].offsetHeight / 2) + "px";
    })
})


// ARRAY OF OBJECTS
// var btn = document.querySelector('button')
// var h1 = document.querySelector('h1')
// let arr = [
//     {
//         team:'CSK',
//         primary: 'yellow',
//         secondary: 'blue'
//     },
//     {
//         team:'MI',
//         primary: 'blue',
//         secondary: 'gold'
//     },
//     {
//         team:'RCB',
//         primary: 'red',
//         secondary: 'black'
//     }
// ]

// // console.log(arr[1]);
// // console.log(arr[2].team); //value  mil jaegi

// // let a = Math.random()*arr.length;
// // let b = Math.floor(a)
// // console.log(arr[b]);

// btn.addEventListener('click', function(){
//     let num = Math.floor(Math.random()*arr.length)
//     h1.innerHTML = arr[num].team
//     h1.style.color = arr[num].primary
//     body.style.backgroundColor = arr[num].secondary
// })

