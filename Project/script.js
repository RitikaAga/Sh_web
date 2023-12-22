let name = document.querySelector("#name");
let description = document.querySelector("#describe");
let price = document.querySelector("#price");
let quantity = document.querySelector("#quantity");
let add_button = document.querySelector("#Add_item");

let div2 = document.querySelector("#container2");
let Buy_button1 = document.querySelector("#Buy_1");
let Buy_button2 = document.querySelector("#Buy_2");
let Buy_button3 = document.querySelector("#Buy_3");



add_button.addEventListener('click', () => {
    console.log("button working");
    div2.style.display = 'block';
})
