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
skills.forEach(skill => {
    const eachSkill = document.createElement('li');
    eachSkill.innerText = skill;
    skillsList.appendChild(eachSkill);
});
 
//Messages
const leaveMessage = document.forms['leave_message'];
leaveMessage.addEventListener('submit', (event) => {
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(`Name: ${usersName}, Email: ${usersEmail}, Message: ${usersMessage}`);

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');

    const newMessage = document.createElement('li');
    newMessage.innerHTML = 
    `<a href="mailto:${usersEmail}">${usersName}</a> 
    <span>${usersMessage}</span>`;

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentNode;
        entry.remove();
        if(messageList.children.length === 0){
            messageSection.hidden = true;
        }
    });
    messageSection.hidden = false;

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.type = 'button';

    editButton.addEventListener('click', () => {
        const currentMessage = newMessage.querySelector('span').innerText;
        const newMessageText = prompt('Edit your message:', currentMessage);
        if (newMessageText !== null) {
            newMessage.querySelector('span').innerText = newMessageText;
        }
    });

    newMessage.appendChild(removeButton);
    newMessage.appendChild(editButton);
    messageList.appendChild(newMessage);
    
    
    leaveMessage.reset();
});

//Fetch
const projectSection = document.getElementById('projects');

fetch('https://api.github.com/users/ozzydogandev/repos')
    .then(res => {
        if (!res.ok) {
            throw new Error(res.status);
        }
        return res.json()})
    .then(repositories => {
        const projectList = document.createElement('ul');
        projectSection.appendChild(projectList);
        repositories.forEach(repo => {
            const project = document.createElement('li');
            project.innerText = repo.name;
            projectList.appendChild(project);
        })
    })
    .catch(error => {
        console.log("Failed to fetch repositories: ", error);
        const errorMessage = document.createElement('p');
        errorMessage.innerText = "Failed to load projects due to an error.";
        errorMessage.className = 'error';
        projectSection.appendChild(errorMessage);
    });