const PEOPLE_URL = "https://swapi.co/api/people/";

const contacts = [];

const searchField = document.querySelector(".searchField");
const contactsList = document.querySelector(".contactsList");

fetch(PEOPLE_URL)
  .then(data => data.json())
  .then(json => contacts.push(...json.results));

console.log(contacts);

// Filter matches
function filterContacts(searchInput, contacts) {
  return contacts.filter(contact => {
    const regex = new RegExp(searchInput, "gi");
    return contact.name.match(regex);
  });
}

// Display matches
function displayMatches() {
  const filteredArray = filterContacts(this.value, contacts);
  const html = filteredArray
    .map(contact => {
      return `<li>${contact.name}</li>`;
    })
    .join("");
  contactsList.innerHTML = html;
}

// Add event listeners that fire function to update list
searchField.addEventListener("keyup", displayMatches);

// const fetchData = async (url) => {
//   let res = await fetch(url)
//   let json = await res.json();
//   console.log(json);
// }

// const ul = document.querySelector("#contactsList");

// const loadContacts = () => {
//   let page = 1;
//   for (var i = 1; i < 10; i++) {
//     let url = `https://swapi.co/api/people/?page=${page}`
//     fetchData(url).then(json => {
//       addToDom(json.results);
//       page++;
//     });
//   };
// };

// const addToDom = (json) => {
//   console.log(json);
//   json.forEach(person => {
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(person.name));
//     ul.appendChild(li);
//   });
// };

// loadContacts();
