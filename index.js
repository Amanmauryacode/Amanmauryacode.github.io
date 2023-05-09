var tablinks = document.getElementsByClassName("tab-links");
var tabcontains = document.getElementsByClassName("tab-contains");


function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontain of tabcontains){
        tabcontain.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}



const showMoreButton = document.getElementById('show-more-button');
const projects = document.querySelectorAll('.work');

let visibleProjects = 3;

showMoreButton.addEventListener('click', function() {
  visibleProjects += 3;
  for (let i = 0; i < projects.length; i++) {
    if (i < visibleProjects) {
      projects[i].classList.add('show-project');
    } else {
      projects[i].classList.remove('show-project');
    }
  }
  
  if (visibleProjects >= projects.length) {
    showMoreButton.style.display = 'none';
  }
});
