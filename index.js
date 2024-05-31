const $carListDiv = document.getElementById("carListDiv");
const $carList = document.getElementById("car-list");
const $formDiv = document.getElementById("formDiv");
const $submit = document.getElementById("submit");
const $thanksDiv = document.getElementById("thanksDiv");
const $goBack = document.getElementById("goBack");
const $tiresButton = document.getElementById("tiresBtn");
const $warrancyButton = document.getElementById("warrancyBtn");
const $tiresDiv = document.getElementById("tiresDiv");
const $warrancyDiv = document.getElementById("warrancyDiv");
const $form = document.getElementById("Form");
const $leasing = document.getElementById("leasing");
const $cash = document.getElementById("cash");
const $formInputName = document.getElementById("fullName");
const $error = document.getElementById("formError");
const $dateInput = document.getElementById("date");
const $destinationInput = document.getElementById("destination");
const $chosenModel = document.getElementById("chosenModel");
const $costFull = document.getElementById("costFull");
const $thanksText = document.getElementById("thanks");
const $autoComingOn = document.getElementById("autoComingOn");
const $pln = document.getElementById("pln");
const $header = document.getElementById("header");
const $dateOption = document.getElementById("dateOption");

$form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validateNameInput($formInputName.value.trim()) && validateInput()) {
    $formDiv.style.display = "none";
    $thanksDiv.style.display = "block";
    addDataToLastPage();
    $form.reset();
    $error.style.display = "none";
    localStorage.setItem("currentlyDisplayedDiv", "thanksDiv");

    let errorMsg = "";
    $error.innerText = errorMsg;
  } else {
    $error.style.display = "block";

    let errors = [];

    let paymentOption = document.querySelector(
      'input[name="paymentOption"]:checked'
    );
    let fullName = $formInputName.value.trim();
    let destination = $destinationInput.value.trim();
    let date = $dateInput.value;

    if (!paymentOption) {
      errors.push("paymentOption");
    }
    if (!validateNameInput(fullName)) {
      errors.push("fullName");
    }
    if (!destination) {
      errors.push("destination");
    }
    if (!date) {
      errors.push("date");
    }

    let errorMsg = "";
    errors.forEach(function (error) {
      switch (error) {
        case "paymentOption":
          errorMsg += "Proszę wybrać opcję płatności\n";
          break;
        case "fullName":
          errorMsg +=
            "Proszę poprawnie wpisać imię i nazwisko (imię + spacja + nazwisko)\n";
          break;
        case "destination":
          errorMsg += "Proszę podać miejsce odbioru\n";
          break;
        case "date":
          errorMsg += "Proszę wybrać datę odbioru\n";
          break;
        default:
          errorMsg += "Źle wypełniony formularz\n";
      }
    });

    if (errors.length > 0) {
      $error.style.display = "block";
      $error.innerText = errorMsg;
    }
  }
});

function goBack() {
  $carListDiv.style.display = "block";
  $formDiv.style.display = "none";
  $error.style.display = "none";
  $thanksDiv.style.display = "none";
  $form.reset();
  localStorage.setItem("tires", "");
  $tiresDiv.style.backgroundColor = "white";
  $tiresButton.innerText = "+";
  localStorage.setItem("warrancy", "");
  $warrancyDiv.style.backgroundColor = "white";
  $warrancyButton.innerText = "+";
  localStorage.setItem("carData", "");
  localStorage.setItem("nameAndSurname", "");
  localStorage.setItem("pickupLocation", "");
  localStorage.setItem("leasing", "");
  localStorage.setItem("cash", "");
  localStorage.setItem("pickupDate", "");
  localStorage.setItem("currentlyDisplayedDiv", "");
  localStorage.setItem("finalPrice", "");
}

$goBack.addEventListener("click", goBack);

$tiresButton.addEventListener("click", () => {
  if ($tiresButton.innerText === "+") {
    $tiresDiv.style.backgroundColor = "grey";
    $tiresButton.innerText = "-";
    localStorage.setItem("tires", "yes");
    let absoluteCost = +$costFull.innerText;
    $costFull.innerText = (absoluteCost + 3000).toString();
    localStorage.setItem("finalPrice", absoluteCost + 3000);
  } else {
    $tiresDiv.style.backgroundColor = "white";
    $tiresButton.innerText = "+";
    localStorage.setItem("tires", "");
    let absoluteCost = +$costFull.innerText;
    $costFull.innerText = (absoluteCost - 3000).toString();
    localStorage.setItem("finalPrice", absoluteCost - 3000);
  }
});

$warrancyButton.addEventListener("click", () => {
  if ($warrancyButton.innerText === "+") {
    $warrancyDiv.style.backgroundColor = "grey";
    $warrancyButton.innerText = "-";
    localStorage.setItem("warrancy", "yes");
    let absoluteCost = +$costFull.innerText;
    $costFull.innerText = (absoluteCost + 5000).toString();
    localStorage.setItem("finalPrice", absoluteCost + 5000);
  } else {
    $warrancyDiv.style.backgroundColor = "white";
    $warrancyButton.innerText = "+";
    localStorage.setItem("warrancy", "");
    let absoluteCost = +$costFull.innerText;
    $costFull.innerText = (absoluteCost - 5000).toString();
    localStorage.setItem("finalPrice", absoluteCost - 5000);
  }
});

$leasing.addEventListener("click", () => {
  localStorage.setItem("leasing", "yes");
  localStorage.setItem("cash", "");
});

$cash.addEventListener("click", () => {
  localStorage.setItem("cash", "yes");
  localStorage.setItem("leasing", "");
});

function validateInput() {
  return (
    ($leasing.checked || $cash.checked) &&
    $dateOption.parentElement.selectedIndex === 1 &&
    $destinationInput.value !== ""
  );
}

function validateNameInput(input) {
  let condition = /^[a-zA-Z]+\s[a-zA-Z]+$/;

  return condition.test(input);
}

let cars = [
  {
    img: "https://img.autoabc.lv/audi-a6/audi-a6_2018_Universals_21102760701_12.jpg",
    brand: "Audi",
    model: "A6",
    productionDate: 2018,
    mileage: "120 000km",
    power: "280KM",
    cost: 50000,
  },
  {
    img: "https://auto-planeta.pl/wp-content/uploads/2023/08/Mercedes-Benz-E-Class-11-aspect-ratio-1920-1024.jpg",
    brand: "Mercedes",
    model: "E",
    productionDate: 2019,
    mileage: "60 000km",
    power: "320KM",
    cost: 110000,
  },
  {
    img: "https://www.auto-data.net/images/f109/BMW-X5-E70.jpg",
    brand: "BMW",
    model: "X5",
    productionDate: 2009,
    mileage: "250 000km",
    power: "260KM",
    cost: 30000,
  },
  {
    img: "https://www.motortrend.com/uploads/sites/10/2019/01/2019-toyota-rav4-xle-premium-suv-angular-front.png?fit=around%7C875:492",
    brand: "Toyota",
    model: "RAV 4",
    productionDate: 2018,
    mileage: "120 000km",
    power: "220KM",
    cost: 46000,
  },
  {
    img: "https://i.ytimg.com/vi/9wWGqcwLHEw/maxresdefault.jpg",
    brand: "Audi",
    model: "R8",
    productionDate: 2022,
    mileage: "10 000km",
    power: "560KM",
    cost: 360000,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpI_H_kZZssh0eNWsSaN5Km01pu_heNVfGNFJCKZb1PA&s",
    brand: "Mazda",
    model: "MX-5",
    productionDate: 2018,
    mileage: "45 000km",
    power: "220KM",
    cost: 80000,
  },
  {
    img: "https://thumbs.img-sprzedajemy.pl/1000x901c/95/a1/0a/renault-kadjar-2020-133-tce-salon-polska-swietokrzyskie-574883423.jpg",
    brand: "Renault",
    model: "Kadjar",
    productionDate: 2020,
    mileage: "81 000km",
    power: "150KM",
    cost: 67000,
  },
  {
    img: "https://e.allegroimg.com/s1024/0c589f/8b2056ae47399215ca78ff184f3e",
    brand: "Ford",
    model: "Mondeo",
    productionDate: 2015,
    mileage: "160 000km",
    power: "140",
    cost: 24000,
  },
  {
    img: "https://www.autocentrum.pl/NjdlZmIuYQsFDixeZg5sH0ZWeEIoFmMMDQA_Qi4UIgYBHiNAOR0hHgtDbwktQH5cVV9vVXoUfgxSVTkIfUN5DwIOdAc5EmwX",
    brand: "Ford",
    model: "Fiesta",
    productionDate: 2021,
    mileage: "80 000km",
    power: "135KM",
    cost: 45000,
  },
  {
    img: "https://ireland.apollo.olxcdn.com/v1/files/8lk7u81b8e0x1-PL/image;s=1800x1200",
    brand: "Fiat",
    model: "Punto",
    productionDate: 2009,
    mileage: "300 000km",
    power: "110KM",
    cost: 18000,
  },
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/2020-porsche-macan-gts-460-hdr-1598445949.jpg?crop=0.468xw:0.524xh;0.0913xw,0.476xh&resize=768:*",
    brand: "Porsche",
    model: "Macan",
    productionDate: 2021,
    mileage: "40 000km",
    power: "340KM",
    cost: 210000,
  },
  {
    img: "https://i.gremicdn.pl/image/free/5ac0378ac7ed04f8d4e4536951234e09/?t=crop:1599:991:nowe:0:88,resize:fill:1200:675,enlarge:1",
    brand: "Porsche",
    model: "911",
    productionDate: 2021,
    mileage: "12 000km",
    power: "440KM",
    cost: 300000,
  },
];

function addDataToLastPage() {
  let currentCarData = JSON.parse(localStorage.getItem("carData"));
  $thanksText.innerText = `${currentCarData.brand} ${currentCarData.model}, ${currentCarData.productionDate} \n ${currentCarData.mileage} ${currentCarData.power}`;
  $autoComingOn.innerText = localStorage.getItem("pickupDate");
  $pln.innerText =
    localStorage.getItem("finalPrice").toString() +
    " PLNÓW" +
    " i zapłacisz" +
    (localStorage.getItem("cash") === "yes" ? " gotówką" : " poprzez leasing");

  let imgLastPage = document.getElementById("lastPageImg");
  let imgPath = JSON.parse(localStorage.getItem("carData"));
  imgLastPage.src = imgPath.img;
}

function appendCarList() {
  cars.forEach((car) => {
    let listItem = document.createElement("li");

    let img = document.createElement("img");
    img.src = car.img;
    img.alt = "samochód";

    let brand = document.createElement("p");
    brand.innerText = car.brand;

    let model = document.createElement("p");
    model.innerText = car.model;

    let productionDate = document.createElement("p");
    productionDate.innerText = car.productionDate;

    let mileage = document.createElement("p");
    mileage.innerText = car.mileage;

    let power = document.createElement("p");
    power.innerText = car.power;

    let cost = document.createElement("p");
    cost.innerText = car.cost;

    listItem.appendChild(img);
    listItem.appendChild(brand);
    listItem.appendChild(model);
    listItem.appendChild(productionDate);
    listItem.appendChild(mileage);
    listItem.appendChild(power);
    listItem.appendChild(cost);

    $carList.appendChild(listItem);
  });
}

$carList.addEventListener("click", (e) => {
  if (
    e.target.nodeName === "LI" ||
    e.target.nodeName === "P" ||
    e.target.nodeName === "IMG"
  ) {
    localStorage.setItem("currentlyDisplayedDiv", "formDiv");
    $carListDiv.style.display = "none";
    $formDiv.style.display = "block";
    let listItem = e.target.closest("li");

    if (listItem) {
      let index = Array.from(listItem.parentElement.children).indexOf(listItem);
      localStorage.setItem("carData", JSON.stringify(cars[index]));
    }

    if (localStorage.getItem("carData") !== "") {
      let currentCarData = JSON.parse(localStorage.getItem("carData"));
      $costFull.innerText = currentCarData.cost.toString();
      localStorage.setItem("finalPrice", $costFull.innerText);
      $chosenModel.innerText = `${currentCarData.brand} ${currentCarData.model}, ${currentCarData.productionDate} \n ${currentCarData.mileage} ${currentCarData.power}`;
    }
  }
});

function createPickupDate() {
  let twoWeeksFromNow = new Date();
  twoWeeksFromNow.setDate(twoWeeksFromNow.getDate() + 14);
  $dateOption.value = twoWeeksFromNow.toISOString().split("T")[0];
  $dateOption.innerText = twoWeeksFromNow.toDateString();
}

$formInputName.addEventListener("change", () => {
  localStorage.setItem("nameAndSurname", $formInputName.value);
});
$destinationInput.addEventListener("change", () => {
  localStorage.setItem("pickupLocation", $destinationInput.value);
});
$dateInput.addEventListener("change", () => {
  localStorage.setItem("pickupDate", $dateInput.value);
});

function showSectionOnReloadPage() {
  let currentCarData = JSON.parse(localStorage.getItem("carData"));
  switch (localStorage.getItem("currentlyDisplayedDiv")) {
    case "formDiv":
      $carListDiv.style.display = "none";
      $formDiv.style.display = "block";
      localStorage.getItem("nameAndSurname") !== ""
        ? ($formInputName.value = localStorage.getItem("nameAndSurname"))
        : ($formInputName.value = "");
      localStorage.getItem("pickupLocation") !== ""
        ? ($destinationInput.value = localStorage.getItem("pickupLocation"))
        : ($destinationInput.value = "");
      localStorage.getItem("pickupDate") !== ""
        ? ($dateInput.value = localStorage.getItem("pickupDate"))
        : ($dateInput.value = "");
      $leasing.checked = localStorage.getItem("leasing") === "yes";
      $cash.checked = localStorage.getItem("cash") === "yes";
      $tiresDiv.style.backgroundColor =
        localStorage.getItem("tires") === "yes" ? "grey" : "white";
      $tiresButton.innerText =
        localStorage.getItem("tires") === "yes" ? "-" : "+";
      $warrancyDiv.style.backgroundColor =
        localStorage.getItem("warrancy") === "yes" ? "grey" : "white";
      $warrancyButton.innerText =
        localStorage.getItem("warrancy") === "yes" ? "-" : "+";
      localStorage.getItem("finalPrice") !== ""
        ? ($costFull.innerText = localStorage.getItem("finalPrice"))
        : ($costFull.innerText = "");
      $chosenModel.innerText = `${currentCarData.brand} ${currentCarData.model}, ${currentCarData.productionDate} \n ${currentCarData.mileage} ${currentCarData.power}`;
      break;
    case "thanksDiv":
      $carListDiv.style.display = "none";
      $formDiv.style.display = "none";
      $thanksDiv.style.display = "block";
      addDataToLastPage();
      break;
    default:
      $carListDiv.style.display = "block";
      $formDiv.style.display = "none";
      $thanksDiv.style.display = "none";
  }
}

$header.addEventListener("click", goBack);

createPickupDate();
appendCarList();

window.addEventListener("load", showSectionOnReloadPage);
