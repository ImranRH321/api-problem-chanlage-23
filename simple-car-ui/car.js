// alert('WORKING')

const data = [
  {
    _id: "60795d4e0489a32f948c4167",
    name: "Honda Sedan",
    price: "132",
    description:
      "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags",
    Transmission: "Automatic",
    imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
  },
  {
    _id: "60795e440489a32f948c4168",
    name: "MitoSedan",
    price: "221",
    description:
      "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags",
    Transmission: "Manual",
    imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
  },
  {
    _id: "60795e440489a32f9483c4168",
    name: "MitoSedan",
    price: "221",
    description:
      "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags",
    Transmission: "Manual",
    imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
  },
  {
    _id: "6079615d0489a32f948c416a",
    name: "Chevrolet Crossover",
    price: "434",
    description:
      "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags",
    Transmission: "Automatic",

    imageURL:
      "https://cdn05.carsforsale.com/11c4cd889039a24b8baefa648bbb929b/480x360/2019-honda-civic-lx-4dr-sedan-cvt.jpg"
  },
];

// car

const rowContainer = document.getElementById("car_row_Container");
data.forEach((ele) => {
  const { name, imageURL, description, price } = ele;
  const div = document.createElement("div");
  div.classList.add("col");
  div.innerHTML = `
    <div class="card">
  <img src=${
    imageURL} class="img-fluid" alt="no found image">
  <div class="card-body">
    <h5 class="card-title">Person Name: ${name}</h5>
    <p class="card-text">${description}</p>
    <button class="btn btn-primary fw-bold">Price: ${price}</button>
  </div>
</div>
    
    `;
  // console.log(ele);
  rowContainer.appendChild(div);
});

// =======
