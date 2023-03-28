loadData();
function loadData(params) {
  fetch("https://api.github.com/users/programminghero1")
    .then((res) => res.json())
    .then((json) => displayUiLoad(json));
}

const displayUiLoad = (data) => {
  console.log(data);
  const section = document.getElementById("rowContainerDivBaba");
  section.innerHTML = `
  <div class="row g-4 py-4">
  <div class="col col-md-4">
    <img
      width="300px"
      src=${data.avatar_url}
      alt="no found"
      class="rounded"
    />
  </div>
  <div class="col col-md-8">
    <div class="d-flex justify-content-between align-items-center">
      <h3 class=" fw-bold">The ${data.name}</h3>

      <h5 class=" fw-bold">joined  ${data.created_at.slice(0,10)}</h5>
    </div>

    <p class="text-start my-4 fw-bold ">${data.name}</p>
    <h4 class="text-start my-3 f ">
      ${data.bio ? data.ibo : "This profile has no bio"}
    </h4>
    <div
      class="container3 my-4 d-flex justify-content-between align-items-center bg-secondary px-5 py-3"
    >
      <div class="first1">
        <h5>Repo</h5>
        <h2>8</h2>
      </div>
      <div class="second1">
        <h5>Repo</h5>
        <h2>8</h2>
      </div>
      <div class="third1">
        <h5>Repo</h5>
        <h2>8</h2>
      </div>
    </div>
    <div
      class="link_container1 d-flex mt-4 justify-content-between align-items-center"
    >
      <div class="d-flex align-items-center">
        <span>icon</span>
        <h4 class="mx-3">Span not found</h4>
      </div>
      <div class="d-flex align-items-center">
        <span>icon</span>
        <h4 class="mx-3">Span not found</h4>
      </div>
    </div>

    <div
      class="link_container1 d-flex mt-4 justify-content-between align-items-center"
    >
      <div class="d-flex align-items-center">
        <span>icon</span>
        <h4 class="mx-3"><a target="_blank" href=${data.blog}>${data.blog}</a></h4>
      </div>
      <div class="d-flex align-items-center">
        <span>icon</span>
        <p class="mx-3">Not Available white </p>
      </div>
    </div>
  </div>
</div> 

  `;
};
