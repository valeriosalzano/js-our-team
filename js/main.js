// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
let userData = {
    fullName : ["Wayne Barnett","Angela Caroll","Walter Gordon","Angela Lopez","Scott Estrada","Barbara Ramos"],
    role : ["Founder & CEO","Chief Editor","Office Manager","Social Media Manager","Developer","Graphic Designer"],
    imgPath : ["wayne-barnett-founder-ceo.jpg","angela-caroll-chief-editor.jpg","walter-gordon-office-manager.jpg","angela-lopez-social-media-manager.jpg","scott-estrada-developer.jpg","barbara-ramos-graphic-designer.jpg"]
}

const teamMembers = [];

const teamMembersNumber = 6;
for (let i=0; i<teamMembersNumber; i++){
    let newTeamMember = {};
    for (let key in userData){
        newTeamMember[key] = userData[key][i];
    }
    teamMembers.push(newTeamMember);
}

// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto

for (let i=0; i<teamMembersNumber; i++){
    console.log(`${i+1}° membro del team:`)
    for (let key in teamMembers[i]){
        console.log(`${key} : ${teamMembers[i][key]}`)
    }
}

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

/*
    const teamDataContainerDom = document.getElementById('teamData-container');

    for (let i=0; i<teamMembersNumber; i++){
        const teamListRow = document.createElement('p');
        for (let key in teamMembers[i]){
            const teamListCol = document.createElement('span');
            teamListCol.innerHTML = (`${key} : ${teamMembers[i][key]}; <br>`);
            teamListRow.append(teamListCol);
        }
        teamDataContainerDom.append(teamListRow);
    }
*/

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

/*
    const teamDataContainerDom = document.getElementById('teamData-container');

    // scorro i membri (object) del team
    for (let i=0; i<teamMembersNumber; i++){
        // ogni membro sarà descritto in un "p"
        const teamListRow = document.createElement('p');
        // scorro gli attributi (key) dei membri del team 
        for (let key in teamMembers[i]){
            const teamListCol = document.createElement('span');
            // verifico se sto esaminando la path dell'immagine o una stringa
            if (key == 'imgPath'){
                // CASO 1: path immagine 
                const picture = document.createElement('img');
                picture.src = `img/${teamMembers[i][key]}`;
                teamListCol.append(picture);
            } else {
                // CASO 2: stringa
                teamListCol.innerHTML = (`${key} : ${teamMembers[i][key]}; <br>`);
            }
            teamListRow.append(teamListCol);
        }
        teamDataContainerDom.append(teamListRow);
    }
*/

// BONUS 2:
// Organizzare i singoli membri in card/schede

const cardsContainerDom = document.getElementById('cards-container');

// scorro i membri (object) del team
for (let i=0; i<teamMembersNumber; i++){
    // ogni membro sarà descritto in una "card"
    const card = document.createElement('div');
    card.classList.add('card');

    // la card avrà una foto...
    const cardImg = document.createElement('div');
    cardImg.classList.add('card-img');
    card.append(cardImg);
    // ...e una parte di testo
    const cardText = document.createElement('div');
    cardText.classList.add('card-text')
    card.append(cardText);
    // scorro gli attributi (key) dei membri del team 
    for (let key in teamMembers[i]){
        // verifico se sto esaminando la path dell'immagine o una stringa
        if (key == 'imgPath'){
            // CASO 1: path immagine 
            const picture = document.createElement('img');
            picture.src = `img/${teamMembers[i][key]}`;
            cardImg.append(picture);
        } else {
            // CASO 2: stringa
            const text = document.createElement('div');
            text.innerHTML = (`${teamMembers[i][key]}`);
            text.classList.add(`${key}`)
            cardText.append(text);
        }
    }
    cardsContainerDom.append(card);
}