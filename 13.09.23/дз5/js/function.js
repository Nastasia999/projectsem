const x=document.getElementById("x");
const y=document.getElementById("y");
const answer=document.getElementById("result");
const elementVerify=document.getElementById("verify");


function verify() {
    const x1= +x.value;
    const y1= +y.value;
    const result =1/(x1*y1);
    answer.innerText =result;
}
elementVerify.addEventListener('click', verify);

const node_for_click = document.getElementById('for_click')

function find_edit() {
    const p1 = document.getElementsByTagName('pre')[1]
    p1.innerHTML = 'Erokhina'
    console.log(p1.innerHTML)

    const p2 = document.getElementsByTagName('pre')[2]
    p2.innerHTML = 'Anastasia'
    console.log(p2.innerHTML)

    const p3 = document.getElementsByTagName('pre')[3]
    p3.innerHTML = 'Aleksandrovna'
    console.log(p3.innerHTML)

    const p5 = document.getElementsByTagName('pre')[4]
    p5.innerHTML = 'IX.III.MMIV'
    console.log(p5.innerHTML)
}

node_for_click.addEventListener('click',find_edit)
