//Footer & Copyright
const footer = document.createElement('footer');
document.body.appendChild(footer);
const today = new Date();
const currentYear = today.getFullYear();
const copyright = document.createElement('p');
const name = "Oguzhan Dogan";
copyright.innerHTML = `&copy; ${name} ${currentYear}`;
footer.appendChild(copyright);

//Skills
const skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');
skillsList.style.display = 'table';
skillsList.style.backgroundColor = 'hsla(60, 46%, 73%, 0.8)';
skillsList.style.padding = '10px 30px';
skillsList.style.borderRadius = '5px';
skills.forEach(skill => {
    const eachSkill = document.createElement('li');
    eachSkill.innerText = skill;
    skillsList.appendChild(eachSkill);
});

