function getAnimes() {
  document.querySelector(".animes").innerHTML = ``;
  fetch(`api/animes`)
    .then((response) => response.json())
    .then((data) => data.sort((a, b) => +b.year - +a.year))
    .then((animes) => renderAnimes(animes));
}

function addAnime(event) {
  event.preventDefault();
  const { title, image, year, description } = event.target;
  const anime = {
    title: title.value,
    image: image.value,
    year: year.value,
    description: description.value,
  };
  fetch("api/animes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(anime),
  })
    .then((response) => response.json())
    .then(getAnimes);
}

function renderAnimes(animes) {
  animes.forEach((anime) => {
    // destructure
    const { _id, title, image, year, description } = anime;
    animeEl = document.createElement("div");
    animeEl.innerHTML = `
    <img src="img/${image}" />
    <h3><a href="detail.html?anime=${_id}">${title}</a></h3>
    <p>${description}</p>
    <p>${year}</p>
    <button class="delete" data-id=${_id} href="#">Delete</button>
  `;
    return document.querySelector(".animes").append(animeEl);
  });
}

function deleteAnime(event) {
  fetch(`api/animes/${event.target.dataset.id}`, {
    method: "DELETE",
  }).then(getAnimes());
}

// new
function seed() {
  fetch("api/import").then(getAnimes);
}

function handleClicks(event) {
  if (event.target.matches("[data-id]")) {
    deleteAnime(event);
  } else if (event.target.matches("#seed")) {
    seed();
  }
}

document.addEventListener("click", handleClicks);

const addForm = document.querySelector("#addForm");
addForm.addEventListener("submit", addAnime);

getAnimes();
