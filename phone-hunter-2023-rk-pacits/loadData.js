document.getElementById("showAllButton").addEventListener("click", () => {});
// =================> handle button ===============
document.getElementById("buttonSearch").addEventListener("click", () => {
  // =====loading Start Time;
  loaderSpinier(true);
  const searchFlied = document.getElementById("searchFlied");
  const searchText = searchFlied.value.split(" ").join("");
  searchFlied.value = "";
  // load search text
  loadApiData(searchText);
});

// /Paren ==
const pError = document.getElementById("displayError");
const rowSection = document.getElementById("rowContainer");
const loading = document.getElementById("spinier-loading");
// =====

async function loadApiData(searchText) {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const phoneData = await res.json();
  // true check
  if (phoneData.data.length !== 0) {
    loadDisplayData(phoneData.data);
    pError.classList.add("d-none");
  } else {
    rowSection.innerHTML = "";
    pError.classList.remove("d-none");
    // ========== loading end time =========
    loaderSpinier(false);
  }
}

function loadDisplayData(data) {
  rowSection.innerText = "";

  data.slice(0, 5).forEach((phones) => {
    const { brand, slug, phone_name, image } = phones;

    const div = document.createElement("div");
    div.classList.add("col", "col-md-4");
    div.innerHTML = `
    <div class="card shadow-lg rounded py-3">
    <img width="" src=${image} class="w-75 mx-auto card-img-top" alt="...">
    <div class="card-body text-center fst-italic">
    <p class="card-text">${brand}</p>
      <h5 class="card-title">${phone_name}</h5>
      <p class="card-text">${slug}</p>
    </div>


    <button onclick="detailsLoadedApi('${slug}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetails">
  Launch demo modal
</button>

  </div>
    `;
    rowSection.appendChild(div);
  });
  // ========== loading
  loaderSpinier(false);
}

// loading

function loaderSpinier(ladingTime) {
  const loader_tag = document.getElementById("loader_tag");
  if (ladingTime) {
    loader_tag.classList.remove("d-none");
  } else {
    loader_tag.classList.add("d-none");
  }
}

async function detailsLoadedApi(id) {
  //
  const url = ` https://openapi.programming-hero.com/api/phone/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayDetailsIdLoadData(data.data);
}

function displayDetailsIdLoadData(data) {
  const {
    brand,
    slug,
    image,
    name,
    releaseDate,
    others,
    mainFeatures,
  } = data;
  // console.log("data -ic", data);

  const modalBody = document.getElementById("modalBody");
  modalBody.textContent = "";
  const title = document.getElementById("title");
  title.innerText = name;
  const div = document.createElement("div");
  modalBody.innerHTML = `
  <img width="" src=${image} class="w-75 mx-auto card-img-top" alt="...">
  <div class="card-body text-left fst-italic">
  <p class="card-text">${brand}</p>
    <p class="card-text">${slug}</p>
  </div>
    <p> ${mainFeatures.storage}</p>
    <p> ${mainFeatures.chipSet}</p>
    <p> ${mainFeatures.displaySize}</p>
    <p> ${others.Bluetooth}</p>
    <h3> ${releaseDate ? releaseDate : "no releaseDate found"}</h3>
  `;
}
