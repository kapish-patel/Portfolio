
let jsonData = {};

fetch('./assets/config.json')
    .then(response => response.json())
    .then(data => {
        jsonData = data;
    })
    .catch(error => console.error('Error loading JSON:', error));

function updateExpDescription(str) {
    // get all the elements to display
    const expDescContainer = document.getElementById('experience-container');
    const expDescription = document.getElementById('exp-description');
    const expDate = document.getElementById('exp-date');
    const expPosition = document.getElementById('exp-position-company');
    const expSkill1 = document.getElementById('exp-skills-1');
    const expSkill2 = document.getElementById('exp-skills-2');
    const expSkill3 = document.getElementById('exp-skills-3');
    const expSkill4 = document.getElementById('exp-skills-4');
    const expSkill5 = document.getElementById('exp-skills-5');
    const expSkill6 = document.getElementById('exp-skills-6');
    
    const experience = jsonData.experiences.find(exp => exp.ID === str);

    if (!experience) {
        // If no experience matches the provided string, log an error and return
        console.error(`No experience found for company: ${str}`);
        return;
    }

    // change css for the description container to show the content
    expDescContainer.style.display = 'flex';

    // Update the description with the new experience details
    expPosition.innerHTML = `${experience.position} @ <strong>${experience.company}</strong>`;

    expDate.innerHTML = `${experience.duration}`;
    expDescription.innerHTML = experience.responsibilities; 

    // polulate skills
    expSkill1.innerHTML = experience.skills[0] ? `<span>+&nbsp;&nbsp;</span> ${experience.skills[0]}` : '';
    expSkill2.innerHTML = experience.skills[1] ? `<span>+&nbsp;&nbsp;</span> ${experience.skills[1]}` : '';
    expSkill3.innerHTML = experience.skills[2] ? `<span>+&nbsp;&nbsp;</span> ${experience.skills[2]}` : '';
    expSkill4.innerHTML = experience.skills[3] ? `<span>+&nbsp;&nbsp;</span> ${experience.skills[3]}` : '';
    expSkill5.innerHTML = experience.skills[4] ? `<span>+&nbsp;&nbsp;</span> ${experience.skills[4]}` : '';
    expSkill6.innerHTML = experience.skills[5] ? `<span>+&nbsp;&nbsp;</span> ${experience.skills[5]}` : '';
}