// const x = document.querySelector(".bg");
// var color = ["turquoise", "peachpuff", "#e0a942","black"];
// function change(){
//         for (y = 0; y < 6; y++) {
//          x. style. color = color[Math. floor(Math. random() * 6)];   
//          x.style.transition ='0.3s';
//     }
// }
// setInterval(() => {
//     change()
// },200);


const head = document.querySelector(".head");
var color = [" turquoise", "peachpuff","#e0a942","black"];
function changeColor(){
        for (y = 0; y < 6; y++) {
         head. style. color = color[Math. floor(Math. random() * 6)];   
         x.style.transition ='0.3s';
    }
}
setInterval(() => {
    changeColor()
},300);

const testimonials = document.querySelector('.testimonials');
const input = document.querySelectorAll('input[name="testimonial"]');
let current = 0;

function showTestimonial(index) {
  var number =  input[index].checked = true;
  number.style.transform ='scale(2)';

}

function swap() {
    current = (current + 1) % input.length;
    showTestimonial(current);
}

// Call swap every second
setInterval(swap, 2000);

