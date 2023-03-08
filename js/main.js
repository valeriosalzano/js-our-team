// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
let userData = {
   fullName : ["Wayne Barnett","Angela Caroll","Walter Gordon","Angela Lopez","Scott Estrada","Barbara Ramos"],
   role : ["Founder & CEO","Chief Editor","Office Manager","Social Media Manager","Developer","Graphic Designer"],
   imgPath : ["wayne-barnett-founder-ceo.jpg","angela-caroll-chief-editor.jpg","walter-gordon-office-manager.jpg","angela-lopez-social-media-manager.jpg","scott-estrada-developer.jpg","barbara-ramos-graphic-designer.jpg"]
}

let teamMembers = [];

let teamMembersNumber = 6;
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



// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva



// BONUS 2:
// Organizzare i singoli membri in card/schede