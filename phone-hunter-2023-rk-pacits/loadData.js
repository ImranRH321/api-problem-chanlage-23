document.getElementById("buttonSearch").addEventListener("click", () => {
  const searchFlied = document.getElementById("searchFlied");
  const searchText = searchFlied.value.split(" ").join("");
  searchFlied.value = "";
  // console.log(searchText);
  loadApiData(searchText);
});

// grobal set 
// display error 
const pError = document.getElementById('displayError')

const rowSection = document.getElementById("rowContainer");


async function loadApiData(searchText) {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const phoneData = await res.json();
  // api load

  if(phoneData.data.length !== 0){
      loadDisplayData(phoneData.data);
      pError.classList.add('d-none')
      alert("condion true")

    }else{
      pError.classList.remove('d-none')
      rowSection.innerHTML = "";
      alert("condiiton false  ")
  }
}

function loadDisplayData(data) {
  console.log(data);
  rowSection.innerText ='';
  data.slice(0,10).forEach((phones) => {
    const { brand, slug, phone_name, image } = phones;

    const div = document.createElement("div");
    div.classList.add("col", "col-md-4");
    div.innerHTML = `
    <div class="card">
    <img width="" src=${image} class="w-50 mx-auto card-img-top" alt="...">
    <div class="card-body text-center">
      <h5 class="card-title">${phone_name}</h5>
      <p class="card-text">${brand}</p>
      <p class="card-text">${slug}</p>
    </div>
  </div>
    `;
    rowSection.appendChild(div);
  });
}
