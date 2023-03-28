let showHideClass;
const showAll = document.getElementById("showAllButton");
showAll.onclick = function () {
  alert("oke go");
  showHideClass = false;
};

// =================> hanlde button click
document.getElementById("buttonSearch").addEventListener("click", () => {
  // =====loading Start Time;
  loaderSpinier(true);
  const searchFlied = document.getElementById("searchFlied");
  const searchText = searchFlied.value.split(" ").join("");
  searchFlied.value = "";
  //  Transfer text
  loadApiData(searchText);
});

// /Paren ==
const pError = document.getElementById("displayError");

const rowSection = document.getElementById("rowContainer");
const loading = document.getElementById("spinier-loading");

async function loadApiData(searchText) {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const phoneData = await res.json();
  if (phoneData.data.length !== 0) {
    loadDisplayData(phoneData.data);
    showAll.classList.remove("active");
  } else {
    rowSection.innerHTML = "";
    pError.classList.remove("d-none");
    loaderSpinier(false);
    console.log(showAll, "fe++++ false");
  }
}

function loadDisplayData(data , showPera) {
  console.log(showPera);
  rowSection.innerText = "";

  let sumCulcation = data;
  if (sumCulcation.length !== 0 && sumCulcation.length > 10) {
    sumCulcation = data.slice(0, 10);
  } else {
    sumCulcation = data.slice(0, data.length);
  }

  sumCulcation.slice(0, 10).forEach((phones) => {
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
  </div>
    `;
    rowSection.appendChild(div);
  });
  // ========== loading end time =========
  loaderSpinier(false);
}

// loader common function
function loaderSpinier(ladingTime) {
  const loader_tag = document.getElementById("loader_tag");
  if (ladingTime) {
    loader_tag.classList.remove("d-none");
  } else {
    loader_tag.classList.add("d-none");
  }
}
