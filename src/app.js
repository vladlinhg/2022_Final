// contact list, don't change this.
const contactsList = [
  {
    name: "Togusa",
    phone: "555 555-5555",
    image: "togusa.png",
    email: "togusa@secnine.com",
    ID: "0"
  },
  {
    name: "Tachikoma",
    phone: "555 555-5555",
    image: "tachikoma.png",
    email: "tachikoma@secnine.com",
    ID: "1"
  },
  {
    name: "Saito",
    phone: "555 555-5555",
    image: "saito.png",
    email: "saito@secnine.com",
    ID: "2"
  },
  {
    name: '"major" Motoko',
    phone: "555 555-5555",
    image: "motoko.png",
    email: "motoko@secnine.com",
    ID: "3"
  },
  {
    name: "Ishikawa",
    phone: "555 555-5555",
    image: "ishikawa.png",
    email: "ishikawa@secnine.com",
    ID: "4"
  },
  {
    name: "Batou",
    phone: "555 555-5555",
    image: "batou.png",
    email: "batou@secnine.com",
    ID: "5"
  },
  {
    name: "Aramaki",
    phone: "555 555-5555",
    image: "aramaki.png",
    email: "aramaki@secnine.com",
    ID: "6"
  },
]

function createContactCard(contact) {
  let divcontact = document.createElement('div');
  divcontact.setAttribute('id', 'display_all_contacts');
  let header = document.getElementsByTagName('header')[0];
  header.insertAdjacentElement('afterend', divmain);
    
  let divcinfo = document.createElement('div');
  divcinfo.setAttribute('id', 'display_all_contacts');
  divmain.appendChild(divcinfo);

  let divcname = document.createElement('div');
  divcemail.setAttribute('id', 'display_all_contacts');
  divcemail.innerHTML = 'name: ' + contact.name;
  divcinfo.appendChild(divcname);

  let divcphone = document.createElement('div');
  divcemail.setAttribute('id', 'display_all_contacts');
  divcemail.innerHTML = 'phone: ' + contact.phone;
  divcinfo.appendChild(divcname);

  let divcemail = document.createElement('div');
  divcemail.setAttribute('id', 'display_all_contacts');
  divcemail.innerHTML = 'emal: ' + contact.email;
  divcinfo.appendChild(divcemail);

  let divcID = document.createElement('div');
  divcemail.setAttribute('id', 'display_all_contacts');
  divcemail.innerHTML = 'emal: ' + contact.ID;

}

function renderIndex(contactList) {
  for(let i = 0; i < contactList.length; i++) {
      addItemToMain(contactList[i]["name"])
  }
}


function addItemToMain(contactName) {
  mainView = document.querySelector('.main')
  let contactCard = `
  <div class="display_all_contacts"><img src="img/aramaki"><p>${contactName}</p></div>`
  mainView.insertAdjacentHTML('beforeend', contactCard)

  
}

function display_all_contacts() {
  document.getElementById("display_all_contacts").innerHTML = <div class="display_all_contacts"><img src="img/aramaki.png"><p>${contactName}</p></div>;

}