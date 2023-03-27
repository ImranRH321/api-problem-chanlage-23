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
  console.log(country.length, "total country");
  const all_country_rowContainer = document.getElementById(
    "all_country_row_Container"
  );
  //
  const select_container = document.getElementById("select_container");

  country.forEach((ele) => {
    const { name, area, region, flags } = ele;
    const div = document.createElement("div");
    // option 
    const option = document.createElement("option");
    option.setAttribute("value", region)
    option.innerHTML = `${region}`;
    select_container.appendChild(option);


    // cart rows
    div.classList.add("col");
    div.innerHTML = `
    <div class="customColor card text-start border border-lg" style="height: 450px">
  <img  src=${flags.png} class="img-fluid" alt="...">
  <div class="card-body">
  <p>Total Country: ${country.length}</p>
    <p">urop: <span>${name.common}</span></p>
    <p class="card-text">region: ${region}</p>
  </div>
</div>`;
    all_country_rowContainer.appendChild(div);

  });
}
// =====================================

