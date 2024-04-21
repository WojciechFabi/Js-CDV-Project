const $carListDiv = document.getElementById("carListDiv");
const $carList = document.getElementById("car-list");
const $formDiv = document.getElementById("formDiv");
const $submit = document.getElementById("submit");
const $thanksDiv = document.getElementById("thanksDiv");
const $goBack = document.getElementById("goBack");
const $oponyButton = document.getElementById("OponyBtn");
const $gwarancjaButton = document.getElementById("GwarancjaBtn");
const $oponyDiv = document.getElementById("OponyDiv");
const $gwarancjaDiv = document.getElementById("GwarancjaDiv");
const $form = document.getElementById("Form");
const $leasing = document.getElementById("leasing");
const $gotówka = document.getElementById("gotówka");
const $formInputName = document.getElementById("fullName");
const $error = document.getElementById("formError");
const $dateInput = document.getElementById("date");
const $destinationInput = document.getElementById("destination");
const $wybranyModel = document.getElementById("chosenModel");
const $cenaCałkowita = document.getElementById("costFull");
const $thanksText = document.getElementById("thanks");
const $autoComingOn = document.getElementById("autoComingOn");
const $Siano = document.getElementById("Siano");

$form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validateNameInput($formInputName.value.trim()) && validateInput()) {
    $formDiv.style.display = "none";
    $thanksDiv.style.display = "block";
  } else {
    $error.style.display = "block";
  }
  addDataToLastPage();
  $form.reset();
});

$goBack.addEventListener("click", () => {
  $carListDiv.style.display = "block";
  $formDiv.style.display = "none";
  $error.style.display = "none";
  $form.reset();
  localStorage.setItem("Opony", "nie");
  $oponyDiv.style.backgroundColor = "white";
  $oponyButton.innerText = "+";
  localStorage.setItem("Gwarancja", "nie");
  $gwarancjaDiv.style.backgroundColor = "white";
  $gwarancjaButton.innerText = "+";
});

$oponyButton.addEventListener("click", () => {
  if ($oponyButton.innerText === "+") {
    $oponyDiv.style.backgroundColor = "gray";
    $oponyButton.innerText = "-";
    localStorage.setItem("Opony", "tak");

    var absoluteCost = +$cenaCałkowita.innerText;
    $cenaCałkowita.innerText = (absoluteCost + 3000).toString();
  } else {
    $oponyDiv.style.backgroundColor = "white";
    $oponyButton.innerText = "+";
    localStorage.setItem("Opony", "nie");

    var absoluteCost = +$cenaCałkowita.innerText;
    $cenaCałkowita.innerText = (absoluteCost - 3000).toString();
  }
});

$gwarancjaButton.addEventListener("click", () => {
  if ($gwarancjaButton.innerText === "+") {
    $gwarancjaDiv.style.backgroundColor = "gray";
    $gwarancjaButton.innerText = "-";
    localStorage.setItem("Gwarancja", "tak");

    var absoluteCost = +$cenaCałkowita.innerText;
    $cenaCałkowita.innerText = (absoluteCost + 5000).toString();
  } else {
    $gwarancjaDiv.style.backgroundColor = "white";
    $gwarancjaButton.innerText = "+";
    localStorage.setItem("Gwarancja", "nie");

    var absoluteCost = +$cenaCałkowita.innerText;
    $cenaCałkowita.innerText = (absoluteCost - 5000).toString();
  }
});

function validateInput() {
  return (
    ($leasing.checked || $gotówka.checked) &&
    $dateInput.value !== "" &&
    $destinationInput.value !== ""
  );
}

function validateNameInput(input) {
  var condition = /^[a-zA-Z]+\s[a-zA-Z]+$/;

  return condition.test(input);
}

var Cars = [
  {
    img: "https://ocdn.eu/pulscms-transforms/1/4tBk9kqTURBXy9jZDY0YTIzMTI4MWVkOTgxYTkzNjZhMGNlNjY2OTQ3Yy5qcGVnkpUDzQEMzOzNBdzNA0yTBc0EsM0CpN4AAqEwBaExAA",
    marka: "Audi",
    model: "A6",
    rocznik: 2018,
    przebieg: "120 000km",
    moc: "280KM",
    cena: 50000,
  },
  {
    img: "https://auto-planeta.pl/wp-content/uploads/2023/08/Mercedes-Benz-E-Class-11-aspect-ratio-1920-1024.jpg",
    marka: "Mercedes",
    model: "E",
    rocznik: 2019,
    przebieg: "60 000km",
    moc: "320KM",
    cena: 110000,
  },
  {
    img: "https://www.auto-data.net/images/f109/BMW-X5-E70.jpg",
    marka: "BMW",
    model: "X5",
    rocznik: 2009,
    przebieg: "250 000km",
    moc: "260KM",
    cena: 30000,
  },
  {
    img: "https://www.motortrend.com/uploads/sites/10/2019/01/2019-toyota-rav4-xle-premium-suv-angular-front.png?fit=around%7C875:492",
    marka: "Toyota",
    model: "RAV 4",
    rocznik: 2018,
    przebieg: "120 000km",
    moc: "220KM",
    cena: 46000,
  },
  {
    img: "https://i.ytimg.com/vi/9wWGqcwLHEw/maxresdefault.jpg",
    marka: "Audi",
    model: "R8",
    rocznik: 2022,
    przebieg: "10 000km",
    moc: "560KM",
    cena: 360000,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpI_H_kZZssh0eNWsSaN5Km01pu_heNVfGNFJCKZb1PA&s",
    marka: "Mazda",
    model: "MX-5",
    rocznik: 2018,
    przebieg: "45 000km",
    moc: "220KM",
    cena: 80000,
  },
  {
    img: "https://thumbs.img-sprzedajemy.pl/1000x901c/95/a1/0a/renault-kadjar-2020-133-tce-salon-polska-swietokrzyskie-574883423.jpg",
    marka: "Renault",
    model: "Kadjar",
    rocznik: 2020,
    przebieg: "81 000km",
    moc: "150KM",
    cena: 67000,
  },
  {
    img: "https://e.allegroimg.com/s1024/0c589f/8b2056ae47399215ca78ff184f3e",
    marka: "Ford",
    model: "Mondeo",
    rocznik: 2015,
    przebieg: "160 000km",
    moc: "140",
    cena: 24000,
  },
  {
    img: "https://www.autocentrum.pl/NjdlZmIuYQsFDixeZg5sH0ZWeEIoFmMMDQA_Qi4UIgYBHiNAOR0hHgtDbwktQH5cVV9vVXoUfgxSVTkIfUN5DwIOdAc5EmwX",
    marka: "Ford",
    model: "Fiesta",
    rocznik: 2021,
    przebieg: "80 000km",
    moc: "135KM",
    cena: 45000,
  },
  {
    img: "https://ireland.apollo.olxcdn.com/v1/files/8lk7u81b8e0x1-PL/image;s=1800x1200",
    marka: "Fiar",
    model: "Punto",
    rocznik: 2009,
    przebieg: "300 000km",
    moc: "110KM",
    cena: 18000,
  },
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/2020-porsche-macan-gts-460-hdr-1598445949.jpg?crop=0.468xw:0.524xh;0.0913xw,0.476xh&resize=768:*",
    marka: "Porsche",
    model: "Macan",
    rocznik: 2021,
    przebieg: "40 000km",
    moc: "340KM",
    cena: 210000,
  },
  {
    img: "https://i.gremicdn.pl/image/free/5ac0378ac7ed04f8d4e4536951234e09/?t=crop:1599:991:nowe:0:88,resize:fill:1200:675,enlarge:1",
    marka: "Porsche",
    model: "911",
    rocznik: 2021,
    przebieg: "12 000km",
    moc: "440KM",
    cena: 300000,
  },
];

function addDataToLastPage() {
  $thanksText.innerText = $wybranyModel.innerText;
  $autoComingOn.innerText = $dateInput.value;
  $Siano.innerText =
    $cenaCałkowita.innerText +
    " PLNÓW" +
    " i zapłacisz" +
    ($gotówka.checked ? " gotówką" : " poprzez leasing");
  var imgLastPage = document.getElementById("lastPageImg");
  var imgPath = JSON.parse(localStorage.getItem("CarData"));
  imgLastPage.src = imgPath.img;
}

function appendCarList() {
  Cars.forEach((car) => {
    let listItem = document.createElement("li");

    let img = document.createElement("img");
    img.src = car.img;
    img.alt = "samochód";

    var marka = document.createElement("p");
    marka.innerText = car.marka;

    var model = document.createElement("p");
    model.innerText = car.model;

    var rocznik = document.createElement("p");
    rocznik.innerText = car.rocznik;

    var przebieg = document.createElement("p");
    przebieg.innerText = car.przebieg;

    var moc = document.createElement("p");
    moc.innerText = car.moc;

    var cena = document.createElement("p");
    cena.innerText = car.cena;

    listItem.appendChild(img);
    listItem.appendChild(marka);
    listItem.appendChild(model);
    listItem.appendChild(rocznik);
    listItem.appendChild(przebieg);
    listItem.appendChild(moc);
    listItem.appendChild(cena);

    $carList.appendChild(listItem);
  });
}

$carList.addEventListener("click", (e) => {
  if (
    e.target.nodeName === "LI" ||
    e.target.nodeName === "P" ||
    e.target.nodeName === "IMG"
  ) {
    $carListDiv.style.display = "none";
    $formDiv.style.display = "block";
    var listItem = e.target.closest("li");

    if (listItem) {
      var index = Array.from(listItem.parentElement.children).indexOf(listItem);
      localStorage.setItem("CarData", JSON.stringify(Cars[index]));
    }

    if (localStorage.getItem("CarData") !== null) {
      var currentCarData = JSON.parse(localStorage.getItem("CarData"));
      $cenaCałkowita.innerText = currentCarData.cena.toString();
      $wybranyModel.innerText = `${currentCarData.marka} ${currentCarData.model}, ${currentCarData.rocznik} \n ${currentCarData.przebieg} ${currentCarData.moc}`;
    }
  }
});

appendCarList();
