const fetchData = async (url) => {
  let res = await fetch(url)
  let json = await res.json();
  return json;
}

const ul = document.querySelector("#contactsList");

const loadContacts = () => {
  let page = 1;
  for (var i = 1; i < 10; i++) {
    let url = `https://swapi.co/api/people/?page=${page}`
    fetchData(url).then(json => {
      addToDom(json.results);
      page++;
    });
  };
};


const addToDom = (json) => {
  console.log(json);
  json.forEach(person => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(person.name));
    ul.appendChild(li);
  });
};

loadContacts();
