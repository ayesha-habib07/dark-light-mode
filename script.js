const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById("toggle-icon");
const textBox = document.getElementById("text-box");
const image1 = document.getElementById("img1");
const image2 = document.getElementById("img2");
const image3 = document.getElementById("img3");
function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0/50%';
    textBox.style.backgroundColor = 'rgb(255 255 255/50%)';
    console.log(toggleIcon.children);
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    image1.src = '/images/undraw_proud_coder_dark.svg';
    image2.src = '/images/undraw_feeling_proud_dark.svg';
    image3.src = '/images/undraw_conceptual_idea_dark.svg'

}
// light MOde
function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255/50%';
    textBox.style.backgroundColor = 'rgb(0 0 0/50%';
    console.log(toggleIcon.children);
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    image1.src = '/images/undraw_proud_coder_light.svg';
    image2.src = '/images/undraw_feeling_proud_light.svg';
    image3.src = '/images/undraw_conceptual_idea_light.svg'

}

function switchTheme(e){
    if(e.target.checked){
        document.documentElement.setAttribute("dark-theme","dark");
        darkMode();
    }
    else{
        document.documentElement.setAttribute("dark-theme" , "light");
        lightMode();
    }
}
// Event Listener
toggleSwitch.addEventListener('change' , switchTheme);