document.getElementById("searchBtn").addEventListener("click", () => {
  const input = document.getElementById("inpText");
  if (!input) {
    alert("empty filed not exit");
    return;
  } else {
    dataLoaded(input.value);
    input.value = '';
  }
});

async function dataLoaded(inpText) {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inpText}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data) {
    //  call
    displayLoadData(data[0]);
  } else {
    alert("no found data");
  }
}

// display data
const displayLoadData = (data) => {
  const { phonetic, phonetics, sourceUrls, meanings } = data;

  const meaningMap = meanings.map((el) => el.definitions);

  const list = meaningMap[0].map((el) => el.definition);

  console.log(data);
  const displayText = document.getElementById("word_Container");
  const div = document.createElement("div");
  div.innerHTML = `
   <div class="d-flex justify-content-between align-items-center">
     <div>
       <h1>Keyboard</h1>
       <span class="fw-bold fs-5 text-success">${phonetic}</span>
     </div> 
     <div>
     <audio controls autoplay>
     <source src=${phonetics[0].audio} type="audio/ogg">
   </audio>
     </div>
   </div>
   <p>${meanings[0].partOfSpeech} <hr /></p>
    <h4>Meaning</h4> 
    <ul>
       <li>${list}</li>
    </ul>
   <p class="text-start">Source: <a href=${sourceUrls[0]}>${sourceUrls[0]}</a></p>
  `;
  displayText.appendChild(div);
};
