// const btn
document.getElementById("detailsIdload").addEventListener("click", () => {
  loadDataDive();
});
async function loadDataDive() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  const displayTag = document.getElementById("displayTag");
  displayTag.innerHTML = `
  <p class="text-white fw-bold">Divices ${data.slip.id}</p>
  <p class="fs-4">&quot;${data.slip.advice}&quot;</p>
  <span>============||===========</span>
`;
  loadIdDisplay(data.slip.id);
}

//
async function loadIdDisplay(id) {
  const res = await fetch(`https://api.adviceslip.com/advice/${id}`);
  const data = await res.json();
  const idTag = document.getElementById("idFilteringTag");
  idTag.innerHTML = `
   <p class="text-white fw-bold">Divices ${data.slip.id}</p>
   <p class="fs-4">&quot;${data.slip.advice}&quot;</p>
   <span********** == *********</span>
 `;
}
