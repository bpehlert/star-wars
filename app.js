const fetchData = async () => {
  const res = await fetch("https://swapi.co/api/people/")
  const json = await res.json()
  loadPeople(json);
}

fetchData();

const ul = document.querySelector("ul");

const loadPeople = (json) => {
  let results = json.results;
  results.forEach(person => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(person.name));
    ul.appendChild(li);
  });
};
