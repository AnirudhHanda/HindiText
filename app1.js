let inp = document.querySelector('textarea');
let para = document.querySelector('p');
console.dir(inp);
inp.addEventListener('input', function(){
    para.innerText = inp.value;
});