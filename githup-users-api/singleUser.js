//
function loadGithubUser() {
  // fetch(`https://api.github.com/users/${changeName}`)
  // fetch(`https://api.github.com/users/ajauntor`)
  fetch(`https://api.github.com/users/ImranRH321`)
    .then((res) => res.json())
    .then((gUserData) => loadDisplayUser(gUserData));
}
loadGithubUser();
function loadDisplayUser(data) {
  console.log("single data", data);
  const section = document.getElementById("display");
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="card mb-3 bg-secondary shadow-lg text-white">
  <div class="row g-5 ">
    <div class="col-md-4">
      <img
        id="imgs"
        src=${data.avatar_url}
        class="img-fluid rounded-start"
        alt="..."
      />
    </div>
    <div class="col-md-6 ">
      <div class="card-body">
      <p id="cTitle" class="card-title fw-bold fs-3 text-info">${data.name}</p>
        <h5 id="cTitle" class="card-title">${data.created_at}</h5>
        <p id="cTitle" class="card-title">${data.location}</p>
        <p id="cTitle" class="card-title">${data.login}</p>
        <p id="cTitle" class="card-title">${data.type}</p>
        <p id="cTitle" class="card-title">${data.updated_at}</p>
        <p id="cTitle" class="card-title">${data.node_id}</p>
        <p id="cTitle" class="card-title">${data.site_admin}</p>
      </div>
    </div>
  </div>
</div>
  `;
  section.appendChild(div);
}
