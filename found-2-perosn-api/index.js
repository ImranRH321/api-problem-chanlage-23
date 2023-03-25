const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"],
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"],
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ],
};

const rowContainer = document.getElementById("rowContainer")
person.result.forEach(ele => {
    const {name, address, age} = ele;
    const div = document.createElement('div')
    div.classList.add('col','border')
    div.innerHTML = `
    <p class="border fs-2 fw-bold">Person Name: ${name.common}</p>
    <p class="border fs-5 fw-bold">Age: ${age}</p>
    <p class="border fs-5 fw-bold">Street: ${address.street} <span>hours: ${address.house}</span></p>
    `;
    // console.log(ele);
    rowContainer.appendChild(div)
})

// =======