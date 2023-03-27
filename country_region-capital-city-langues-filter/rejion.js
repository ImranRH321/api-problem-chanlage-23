// ==================
// load all country
function simpleRegion() {
  try {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((json) => displayRegionUi(json))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error.message);
  }
}
simpleRegion();
// ======================

// =====================
function displayRegionUi(country) {
  // cart container
  displayLoad("all_country_row_Container", country);
  //
  const selectContainer = document.getElementById("select_container");

  // option container
  country.forEach((ele) => {
    const { name, area, region, flags } = ele;
    const option = document.createElement("option");
    option.setAttribute("value", region);
    selectContainer.appendChild(option);
    option.innerHTML = region;
  });
}
// =====================================

async function clickItemVale() {
  const selectedDiv = document.getElementById("select_container");
  const itemClickRegion = selectedDiv.value;

  const url = `https://restcountries.com/v3.1/region/${itemClickRegion}`;
  const response = await fetch(url);
  const data = await response.json();
  displayLoad("regionContainer", data);
}

// common display loaded ui data
function displayLoad(id, data) {
  const setTag = document.getElementById(id);
  data.map((country) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div class="customColor card text-start border border-lg" style="height: 450px">
  <img  src=${country.flags.png} class="img-fluid" alt="...">
  <div class="card-body">
  <p>Total Country: ${data.length}</p>
    <p">urop: <span>${country.name.common}</span></p>
    <p class="card-text">region: ${country.region}</p>
  </div>
</div>`;
    setTag.appendChild(div);
  });
}
