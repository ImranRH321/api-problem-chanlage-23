function multipleLoadUsers() {
  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((gUsersData) => loadMultipleDisplayUser(gUsersData));
}
multipleLoadUsers();

function loadMultipleDisplayUser(data) {
  const multipleRowContainer = document.getElementById("display10user");
  //   loop start ===============
  data.slice(0,10).forEach((user) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div class="card shadow-lg p-1">
      <img src=${user?.avatar_url} class="card-img-top" alt="...">
      <div class="card-body">
        <p>login: <span class="text-primary fw-bold">${user.login}</span></p>
        <p>Type: <span class="text-primary fw-bold">${user.type}</span></p>
        <button class="btn btn-success">
        <a class="text-white" href=${user.html_url}>${user.html_url}</a>
        </button>
      </div>
    </div>
      `;
    multipleRowContainer.appendChild(div);
    // loop end under ===========
  });
}
