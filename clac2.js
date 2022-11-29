let button_input= document.querySelectorAll('.number');
let equal_pressed=0;
let reset_pressed=0;


let input=document.getElementById('input')
let equal= document.getElementById('equal');
let del= document.getElementById('del');
let reset= document.getElementById('reset');


window.onload = ()=> {
   input.value= '';
};


equal.addEventListener('click', () => {
    equal_pressed=1;
    let inp_val= input.value;
    let sol= eval(inp_val);
    input.value=sol;
});

reset.addEventListener('click', ()=>{
    reset_pressed=2;
    input.value='';
});


button_input.forEach((button_class)=>{
    button_class.addEventListener('click', () => {
       input.value+=button_class.value;
    } );
})