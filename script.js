// Homework 26-4-67
const switchToggle=document.querySelector('input[type="checkbox"]');
const toggleIcon=document.getElementById('toggle-icon');
const nav=document.getElementById('nav');
const image1=document.getElementById('image1');
const image2=document.getElementById('image2');
const image3=document.getElementById('image3');

function switchMode(e){
   if(e.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        darkMode();
        imageSwitchMode('dark');
   }else{
        document.documentElement.setAttribute('data-theme','light');
        lightMode();
        imageSwitchMode('light');
   }
}
function darkMode(){
    toggleIcon.children[0].textContent="โหมดกลางคืน";
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    nav.style.backgroundColor='rgb(0 0 0 / 50%)';
}
function lightMode(){
    toggleIcon.children[0].textContent="โหมดกลางวัน";
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    nav.style.backgroundColor='rgb(255 255 255 / 50%)';
}

function imageSwitchMode(mode){
    image1.src=`undraw_software_engineer_${mode}.svg`;
    image2.src=`undraw_building_websites_${mode}.svg`;
    image3.src=`undraw_Freelancer_${mode}.svg`;
}
switchToggle.addEventListener('change',switchMode);


// Homework 3-5-67
function checkAnswer(answer) {
    const result = document.getElementById('result');
    const sum = document.getElementById('sum');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'darkorange';
        sum.textContent = 1;
        a = 1;
        sum2.textContent = a;
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
        sum.textContent = 0;
        a = 0;
        sum2.textContent = a;
    }
    sum2.textContent = a+i;
    
 }

 function checkAnswer1(answer) {
    const result1 = document.getElementById('result1');
    const sum1 = document.getElementById('sum1');
    if (answer === 'f') {
        result1.textContent = "ถูกต้อง CSD ย่อมาจาก Commercial Support & Development";
        result1.style.color = 'darkorange';
        sum1.textContent = 1;
        i = 1;
        sum2.textContent = i;
    } else {
        result1.textContent = "Incorrect! Try again.";
        result1.style.color = 'red';
        sum1.textContent = 0;
        i = 0;
        sum2.textContent = i;
    }
    sum2.textContent = a+i;
 }