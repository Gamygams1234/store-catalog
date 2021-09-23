var categoryButtons = document.getElementById("category-buttons");
var storeListing = document.getElementById("store-listing");

var sortSelect = document.getElementById("sort");

let allStores = [];
let displayStores = [];
var sort = "";

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}



sortSelect.addEventListener("click", function (e) {
  if (e.target.classList.contains("same-as-selected")) {
    let select = e.target.textContent;
    handleSelect(select);
  }
});

categoryButtons.addEventListener("click", function (e) {
  let category = "";
  Array.from(categoryButtons.children).forEach(function (item) {
    item.classList.remove("selected");
  });
  if (e.target.classList.contains("selector")) {
    e.target.classList.add("selected");
    category = e.target.attributes.value.nodeValue;
  }
  filterStores(category);
});

function outOfFive(rating) {
  let html = ``;
  if (rating == Math.floor(rating)){
    for (let i = 0; i < rating; i++) {
      html += ` <span class="fa fa-star checked"></span>`;
    }
    if (rating < 5) {
      let remainder = 5 - rating;
      for (let i = 0; i < remainder; i++) {
        html += ` <span class="fa fa-star"></span>`;
      }
    }
  }else{
    let remainder = 5 - rating;
    for (let i = 0; i < Math.floor(rating); i++) {
      html += ` <span class="fa fa-star checked"></span>`;
    }
    html += ` <span class="fa fa-star-half-o checked"></span>`
    for (let i = 0; i < Math.floor(remainder); i++) {
      html += ` <span class="fa fa-star"></span>`;
    }

  }

  return html;
}

function filterStores(param) {
  displayStores = allStores.filter(function (item) {
    return item.type == param;
  });
  sortArray();
}

function sortArray() {
  if (sort != "") {
  if (sort === "Alphabet"){
    sortByName()
  }else  {
    displayStores.sort(function (a, b) {
      return b[sort] - a[sort];
    });
  }
}
  updateUI();
}

function sortByName() {
    displayStores.sort(function (a, b) {
      var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
      if (nameA < nameB) //sort string ascending
          return -1 
      if (nameA > nameB)
          return 1
      return 0 
    });

  updateUI();
}

function handleSelect(param) {
  if (param === "Cash Back") {
    sort = "cashBack";
    sortArray();
  } else if (param === "Rating") {
    sort = "rating";
    sortArray();
  }else if (param === "Alphabet") {
    sort = "Alphabet";
    sortByName();
  }
  updateUI();
}
function updateUI() {
  storeListing.innerHTML = ``;
  displayStores.forEach(function (item) {
    rating = item.rating;
    storeListing.innerHTML += `<div class="card">
        <div class="image">
            <img src="https://picsum.photos/300/200">
        </div>
        <div class="description">
            <h2 class="fraunces">
                ${item.name}
            </h2>
            <p class="barlow">
            ${item.description}
            </p>
        </div>
        <div class="rating-and-cash">
            <div class="cash-back barlow">
                <p><span>${item.cashBack}<span>% cash-back</p>
            </div>
            <div class="rating">
            ${outOfFive(rating)}
            </div>

        </div>
    </div>`;
  });
}
readTextFile("./data.json", function(text){
    let data = JSON.parse(text);
    console.log(data);
    allStores= data;
    filterStores("Clothing")

});