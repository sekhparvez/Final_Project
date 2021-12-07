function showDetail() {
  document.querySelector(".anime").innerHTML = ``;
  const urlParams = new URLSearchParams(window.location.search);
  const animeId = urlParams.get("anime");

  fetch(`api/animes/${animeId}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((anime) => renderAnime(anime));
}

function renderAnime(anime) {
  const { image, title, description } = anime;

  animeEl = document.createElement("div");
  animeEl.innerHTML = `
    <img src="img/${image}" />
    <h3>${title}</h3>
    <p>${description}</p>
    <a href="/">Back</a>
    `;

  editForm.title.value = title;
  editForm.image.value = image;
  editForm.description.value = description;

  document.querySelector(".anime").append(animeEl);
}

const updateAnime = (event) => {
  event.preventDefault();
  const urlParams = new URLSearchParams(window.location.search);
  const animeId = urlParams.get("anime");
  const { title, image, description } = event.target;
  const updatedAnime = {
    _id: animeId,
    title: title.value,
    image: image.value,
    description: description.value,
  };
  fetch(`api/animes/${animeId}`, {
    method: "PUT",
    body: JSON.stringify(updatedAnime),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(showDetail);
};

const editForm = document.querySelector("#editForm");
editForm.addEventListener("submit", updateAnime);

showDetail();
