const fetchData = async (url) => {
  const res = await fetch(url)
  const json = await res.json()
  loadPeople(json);
}

const ul = document.querySelector("ul");

const loadPeople = (json) => {
  let results = json.results;
  results.forEach(person => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(person.name));
    ul.appendChild(li);
  });
};
