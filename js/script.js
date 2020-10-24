//burger
document.querySelector(".burger").onclick = () => {
  togglemenu();
};
document.querySelector(".main_menu").onclick = () => {
  togglemenu();
};
function togglemenu() {
  document.querySelector(".main_menu").classList.toggle("opened");
  document.querySelector(".burger").classList.toggle("opened");
  document.querySelector(".call").classList.toggle("opened");
  document.querySelector(".language").classList.toggle("opened");
  document.querySelector(".container").classList.toggle("opened");
};
let br = "<br/>";
const english = {
  menu: "Menu",
  pizza: "Pizza",
  drinks: "Drinks",
  aboutus: "About us",
  promo: "Promo",
  delivery_payment: "Delivery & Payment",
  contacts: "Contacts",
  our_phone: "Telephone number:",
  daily: "daily",
  from_to: "from 7:00 to 22:00",
  uah: " uah",
  h1: "Pizza delivery",
  h2: "in 30 minutes in Kiev",
  utp:
    "We will cook the most fresh and tasty pizza for you and deliver directly to your home",
  utp2: "in 30 minutes!",
  tomenu: "Open menu",
  howwecook: "How we prepare pizza",
  ingridient1_1: "We use a specific ",
  ingridient1_2: "type of flour ",
  ingridient1_3:
    "for our pizza, which makes the dough firm, but at the same time soft and juicy.",
  ingridient2_1: "Sauce",
  ingridient2_2: "for pizza we prepare only from peeled tomatoes, ",
  ingridient2_3: "and no tomato paste!",
  ingridient3_1: "Filling",
  ingridient3_2: ", or rather the content of the pizza. We use only",
  ingridient3_3: "high quality, fresh products.",
  ingridient4_1: "Cheese ",
  ingridient4_2:
    "should accentuate the flavor of the rest of the ingredients without “clogging” it. Therefore, we give our preference Mozzarella cheese.",
  ingridient5_1: "The final secret of delicious pizza: ",
  ingridient5_2: "Italian hearth oven.",
  ingridient5_3:
    "Pizza is cooked on stones, thanks to which it is baked evenly, acquires a unique taste, color and aroma!",
  favorite: "Favorite",
  premium: "Premium",
  classic: "Classic",
  legend: "Legends",
  vegetarian: "Vegetarian",
  margarita: "Margarita",
  margarita_ingr_01: "Tomato sauce, tomatoes,",
  margarita_ingr_02: "mozzarella cheese, oregano",
  sm: "sm",
  gr: "g",
  caprichosa: "Caprichosa",
  caprichosa_ingr_01: "Tomato sauce, ham,",
  caprichosa_ingr_02: "mozzarella, fresh mushrooms",
  four_cheeses: "Four cheeses",
  four_cheeses_ingr_01: "Creamy sauce, pear,",
  four_cheeses_ingr_02: "parmesan, mozzarella,",
  four_cheeses_ingr_03: "ricotta, dor blue",
  salami: "Salami",
  salami_ingr_01: "Tomato sauce, mozzarella,",
  salami_ingr_02: "sausage salami",
  diabla: "Diabla",
  diabla_ingr_01: "Tomato sauce, mozzarella,",
  diabla_ingr_02: "chili, sausage, pepperoni",
  carbonara: "Carbonara",
  carbonara_ingr_01: "Tomato sauce, ham,",
  carbonara_ingr_02: "egg, bavarian sausages,",
  carbonara_ingr_03: "mozzarella",
  prosciutto: "Prosciutto",
  prosciutto_ingr_01: "Tomato sauce,",
  prosciutto_ingr_02: "mozzarella, ham",
  сalzone: "Calzone al forno",
  сalzone_ingr_01: "Tomato sauce, parmesan,",
  сalzone_ingr_02: "ham, mozzarella, ricotta,",
  сalzone_ingr_03: "tomatos",
  alsalmone: "Al salmone",
  alsalmone_ingr_01: "Creamy sauce,",
  alsalmone_ingr_02: "mozzarella, salmon fillet",
  parma: "Parma",
  parma_ingr_01: "Creamy sauce, parmesan,",
  parma_ingr_02: "mozzarella, prosciutto, rucola",
  vitello: "Vitello",
  vitello_ingr_01: "Veal, barbecue sauce,",
  vitello_ingr_02: "mozzarella, blue onion,",
  vitello_ingr_03: "gherkins",
  cesario: "Cesario",
  cesario_ingr_01: "Creamy sauce, tomatoes",
  cesario_ingr_02: "salad, parmesan, mozzarella,",
  cesario_ingr_03: "chicken meat, quail eggs",
  vegetarian: "Vegetarian",
  vegetarian_ingr_01: "Cream sauce, mozzarella",
  vegetarian_ingr_02: "champignons, bell pepper",
  vegetarian_ingr_03: "broccoli",
  polo: "Polo",
  polo_ingr_01: "Mozzarella, onion, mayonnaise",
  polo_ingr_02: "tomatoes, chicken meat.",
  melanzana: "Melanzana",
  melanzana_ingr_01: "Creamy sauce, parmesan,",
  melanzana_ingr_02: "mozzarella, ham,",
  melanzana_ingr_03: "brinjal",
  tono: "Tono",
  tono_ingr_01: "Tomato sauce, onion, tuna,",
  tono_ingr_02: "mozzarella",
  dolce: "Dolce",
  dolce_ingr_01: "Mozzarella, nutella, banana,",
  dolce_ingr_02: "icing sugar, pear",
  dolce_ingr_03: "fruit topping",
  parma_crema: "Parma Crema",
  parma_crema_ingr_01: "Creamy sauce, Parma ham,",
  parma_crema_ingr_02: "mozzarella, cream cheese,",
  parma_crema_ingr_03: "cherry tomatoes, greens",
  fungo_polo: "Fungo polo",
  fungo_polo_ingr_01: "Сream, pesto sauce, radomer,",
  fungo_polo_ingr_02: "chicken fillet, mozzarella,",
  fungo_polo_ingr_03: "mushrooms, cherry tomatoes",
  peperoni: "Peperoni",
  peperoni_ingr_01: "Tomato sauce, chili peppers,",
  peperoni_ingr_02: "mozzarella, pepperoni",
  peperoni_ingr_03: "chili sauce, herbs",
  polobri: "Polo Bri",
  polobri_ingr_01: "Creamy sauce, pear,",
  polobri_ingr_02: "Brie cheese, mozzarella,",
  polobri_ingr_03: "chicken fillet, greens",
  fruttidimare: "Frutti di mare",
  fruttidimare_ingr_01: "Tomato sauce, salmon, mussels,",
  fruttidimare_ingr_02: "calamary, mozzarella,",
  fruttidimare_ingr_03: "lemon, arugula",
  withgas: "Sparkling",
  l: "L",
  schweppes_garnet: "Schweppes Granate",
  schweppes_grapefruit: "Schweppes Grapefruit",
  schweppes_mojito: "Schweppes Mojito",
  schweppes_lemon: "Schweppes Lemon",
  juice: "Juice",
  orange: "Orange",
  apple: "Apple",
  water: "Water",
  pineapple: "Pineapple",
  multi: "Multivitamine",
  peach_orrange: "Peach & orange",
  cranberry: "Cranberry",
  redorange: "Sicilian orange",
  tomato: "Tomato",
  icetea: "Ice Tea",
  pizza_delivery: "How to get your pizza?",
  step_title_01: "Make an order",
  step_info_01_1:
    "Select pizza and drinks and fill out the order form on the website or call us. Please indicate the delivery method. Our manager will contact you within ",
  step_info_01_2: "10 minutes",
  step_info_01_3: "after placing an order, to clarify the details.",
  step_title_02: "Pay for the order",
  step_info_02:
    "You can pay for the order directly on the website online or in cash to our to the courier.",
  step_title_03: "Wait for a courier or pick it up yourself",
  step_info_03_1: "You can pick up the order yourself at the address: ",
  step_info_03_2: "Kiev, st. Ivan Mazepa, 1 ",
  step_info_03_3: "or a courier will deliver pizza to you within ",
  step_info_03_4: "30 minutes after ordering.",
  promotions: "Our promotions",
  promo_01: "Tag us on Instagram and get",
  promo_02_1: "discount -10% ",
  promo_02_2: "for the next order.",
  promo_03: "Link to our account:",
  contacts_01: "You can pick up your order by yourself",
  address_takeaway: "Takeaway address:",
  address: "Kiev, st. Ivan Mazepa, 1",
  open_time: "Opening time:",
  telephone: "Telephone number:",
  privacy_policy: "Privacy policy",
  empty: "Your shopping-cart is empty.",
  cart: "Shopping-cart",
  delivery_price: "Delivery price",
  total_pay: "Total payment",
  check_out: "Confirm the order",
  fullfil_form: "Fill the form",
  delivery_time: "Delivery time",
  change: "How much should the courier prepare for change?",
  thanks: "Thank you for the order!",
  thanks1: "Our manager will contact you",
  thanks2: "within 15 minutes to",
  thanks3: "confirm your order.",
  addtocart: "Add to cart",
  cocacola: "Coca Cola",
  fanta: "Fanta",
  evia: "Evian",
  spark: "Sparkling Ice Tea",
  green_icetea: "Green Ice Tea",
  peach_icetea: "Peach Ice Tea",
  cash: "Cash to the courier",
  card: "With card",
  amurskaya: "Amurskaya",
  vasilkovskaya: "Vasilkovskaya",
  vesnina: "Vesnina",
  goloseevskaya: "Goloseevskaya",
  konnoy_armii: "Konnoy Armii",
  lomonosova: "Mihaila Lomonosova",
  koshevogo: "Olega Koshevogo",
  pavlova: "Pavlova",
  pushkinskaya: "Pushkinskaya",
  rimarskaya: "Rimarskaya",
  uzhgorodskaya: "Uzhgorodskaya",
  error: "Please complete all required fields",
};

let eng = document.querySelector(".language .en");
let ru = document.querySelector(".language .ru");

const englishStatus = {
  on: true,
}

eng.addEventListener("click", function () {
    localStorage.setItem("englishStatus", JSON.stringify(englishStatus));
    getNode();
});

ru.addEventListener("click", function () {
  localStorage.removeItem("englishStatus");
  document.location.reload(true);
});

function getNode() {
  chanchePlaceholderLang();
  change404page()
  document.querySelectorAll("*").forEach(function (node) {
    if (node.dataset.language) {
      let obj = node.dataset;
      for (let keyData in obj) {
        changeLanguage(node, obj[keyData]);
      }
    }
  });
}

function changeLanguage(node, data) {
  for (let keyLanguage in english) {
    if (data == keyLanguage) {
      node.innerText = english[keyLanguage];
      node.setAttribute("lang", "en");
      eng.style.fontWeight = "700";
      ru.style.fontWeight = "400";
      document.querySelector(".language .control").style.right = "0";
      document.querySelector('.btn_header').style.padding = "10px";
    }
  }
}

function chanchePlaceholderLang(){
  document.getElementById("name").placeholder = "Your name";
  document.getElementById("street").placeholder = "Street";
  document.getElementById("house").placeholder = "House";
  document.getElementById("corpus").placeholder = "Corp.";
  document.getElementById("appartment").placeholder = "App.";
  document.getElementById("payment_type").placeholder = "Payment mode";
  document.getElementById("change").placeholder = "200 uah";
  document.getElementById("comment").placeholder = "Add comment";
}

function checklanguagestatus(){
  let languageStatus = JSON.parse(localStorage.getItem("englishStatus"));
  if(languageStatus){
    getNode();
    mth_element.textContent = setMonthLanguage(month, year);
  } else{
    mth_element.textContent = setMonthLanguage(month, year);
  }
}

function change404page(){
  let privacy_policy = document.querySelector('.privacy_policy a');
  privacy_policy.setAttribute("href", '404_en.html');
};
// ----------------   Tabs  -----------------
//PIZZA
const pizza_obj = {
  favourite: "favourite_pizza_content",
  premium: "premium_pizza_content",
  classic: "classic_pizza_content",
  legend: "legend_pizza_content",
  vegetarian: "vegetarian_pizza_content",
};

let pizzaarr = Object.entries(pizza_obj);

// pizza tab_controls
const tabpizzatoleft = document.querySelector("#pizza .slider_left_control");
const tabpizzatoright = document.querySelector("#pizza .slider_right_control");

tabpizzatoleft.addEventListener("click", function () {
  enableControl("#pizza .slider_right_control");
  if (window.innerWidth <= 750) {
    getActivePizzaList();
    rerenderSliderUnderMenu(leftPizzaArrow, rightPizzaArrow, sliderActivePosition);
  }
  let activetab = document.querySelector(".slider_menu_pizza .tab_active")
    .className;
  let index = 0;
  for (let i = 1; i <= pizzaarr.length - 1; i++) {
    if (activetab.includes(pizzaarr[i][0])) {
      index = i;
      let pizzatabnamedom = pizzaarr[index - 1];
      getPizzaList(pizzatabnamedom);
      changePizzaTabs(pizzatabnamedom);
      disableControl(pizzatabnamedom, "favourite", "favourite_pizza_content", '#pizza .slider_left_control')
    }
  }
  pizzaCardIndex = 0;
});

tabpizzatoright.addEventListener("click", function () {
  enableControl("#pizza .slider_left_control");
  if (window.innerWidth <= 750) {
    getActivePizzaList();
    rerenderSliderUnderMenu(leftPizzaArrow, rightPizzaArrow, sliderActivePosition);
  }

  let activetab = document.querySelector(".slider_menu_pizza .tab_active").className;
  let index = 1;
  for (let i = 0; i <= 3; i++) {
    if (activetab.includes(pizzaarr[i][0])) {
      index = i;
      let pizzatabnamedom = pizzaarr[index + 1];
      getPizzaList(pizzatabnamedom);
      changePizzaTabs(pizzatabnamedom);
      disableControl(pizzatabnamedom, "vegetarian", "vegetarian_pizza_content", "#pizza .slider_right_control");
    } else if ((index = 0)) {
      break;
    }
  }
  pizzaCardIndex = 0;
});

// event - pizza tab click
document
  .querySelector(".pizza_tabs")
  .addEventListener("click", function (event) {
    let pizzatabnamedom = event.target.classList;
    let targetagname = event.target.tagName;
    if (targetagname === "LI") {
      getPizzaList(pizzatabnamedom);
      changePizzaTabs(pizzatabnamedom);
      enableControl("#pizza .slider_right_control");
      enableControl("#pizza .slider_left_control");
    }
  });

// determinate active pizza list
function getPizzaList(pizzatabnamedom) {
  pizzatabnamedom.forEach((element) => {
    for (pizzatab in pizza_obj) {
      if (pizzatab == element) {
        let showpizzalist = pizza_obj[pizzatab];
        changePizzaList(showpizzalist);
      }
    }
  });
}

//activate pizza list
function changePizzaList(showpizzalist) {
  let hideallpizzalist = document.querySelectorAll(".menu_pizza .row");
  changeList(hideallpizzalist, showpizzalist);
}

//activate pizza tab
function changePizzaTabs(pizzatabnamedom) {
  let alltabs = document.querySelectorAll(".pizza_tabs li");
  let tablistnotactive = [];
  alltabs.forEach((elem) => {
    if (!elem.className.includes(pizzatabnamedom[0])) {
      tablistnotactive.push(elem);
    }
  });
  changeTabs(alltabs, tablistnotactive, pizzatabnamedom);
}

//DRINKS
const drinks_obj = {
  withgas: "withgas_drinks_content",
  juice: "juice_drinks_content",
  water: "water_drinks_content",
  icetea: "icetea_drinks_content",
};

let drinksarr = Object.entries(drinks_obj);

// drinks tab_controls
const tabdrinckstoleft = document.querySelector("#drinks .slider_left_control");
const tabdrinkstoright = document.querySelector(
  "#drinks .slider_right_control"
);

tabdrinckstoleft.addEventListener("click", function () {
  enableControl("#drinks .slider_right_control");
  if (window.innerWidth <= 750) {
    getActiveDrinksList();
    rerenderSliderUnderMenu(leftDrinksArrow, rightDrinksArrow, sliderActivePositionDrinks);
  } 
  let activetab = document.querySelector(".slider_menu_drinks .tab_active")
    .className;
  let index = 0;
  for (let i = 1; i <= drinksarr.length - 1; i++) {
    if (activetab.includes(drinksarr[i][0])) {
      index = i;
      let drinckstabnamedom = drinksarr[index - 1];
      getDrinksList(drinckstabnamedom);
      changeDrinksTabs(drinckstabnamedom);
      disableControl(drinckstabnamedom, "withgas", "withgas_drinks_content", "#drinks .slider_left_control");
    } 
  }
  drinkCardIndex = 0;
});

tabdrinkstoright.addEventListener("click", function () {
  enableControl("#drinks .slider_left_control");
  if (window.innerWidth <= 750) {
    getActiveDrinksList();
    rerenderSliderUnderMenu(leftDrinksArrow, rightDrinksArrow, sliderActivePositionDrinks);
  }
  let activetab = document.querySelector(".slider_menu_drinks .tab_active")
    .className;
  let index = 0;
  for (let i = 0; i <= 2; i++) {
    if (activetab.includes(drinksarr[i][0])) {
      index = i;
      let drinckstabnamedom = drinksarr[index + 1];
      getDrinksList(drinckstabnamedom);
      changeDrinksTabs(drinckstabnamedom);
      disableControl(drinckstabnamedom, "icetea", "icetea_drinks_content", "#drinks .slider_right_control");
    } else if ((index = 0)) {
      break;
    }
  }
  drinkCardIndex = 0;
});

//helper function
function rerenderSliderUnderMenu(arrow1, arrow2, sliderRunner){
  disableArrow(arrow1)
  enableArrow(arrow2)
  sliderActivePositiontoZerro(sliderRunner);
}

// event - drinks tab click
document
  .querySelector(".drinks_tabs")
  .addEventListener("click", function (event) {
    let drinkstabnamedom = event.target.classList;
    let targetagname = event.target.tagName;
    if (targetagname == "LI") {
      getDrinksList(drinkstabnamedom);
      changeDrinksTabs(drinkstabnamedom);
      enableControl("#drinks .slider_right_control");
      enableControl("#drinks .slider_left_control");
    }
  });

// determinate active drink list
function getDrinksList(drinckstabnamedom) {
  drinckstabnamedom.forEach((element) => {
    for (drinktab in drinks_obj) {
      if (drinktab == element) {
        let showdrinkslist = drinks_obj[drinktab];
        changeDrinksList(showdrinkslist);
      }
    }
  });
}

//activate drinks list
function changeDrinksList(showdrinkslist) {
  let hidealldrinkslist = document.querySelectorAll(".menu_drinks .row");
  changeList(hidealldrinkslist, showdrinkslist);
}

//activate drinks tab
function changeDrinksTabs(drinckstabnamedom) {
  let alltabs = document.querySelectorAll(".drinks_tabs li");
  let tablistnotactive = [];
  alltabs.forEach((elem) => {
    if (!elem.className.includes(drinckstabnamedom[0])) {
      tablistnotactive.push(elem);
    }
  });
  changeTabs(alltabs, tablistnotactive, drinckstabnamedom);
}

//helper function
// changelist
function changeList(listtypehide, listshow) {
  //hide all lists
  listtypehide.forEach((element) => {
    element.classList.add("not_active_list");
  });
  //show active list
  document.querySelector(`.${listshow}`).classList.remove("not_active_list");
}

//changetabs
function changeTabs(alltabs, tablistnotactive, actibetab) {
  //clear all tabs classess
  alltabs.forEach((element) => {
    element.classList.remove("tab_active");
    element.classList.remove("tab_notactive");
  });
  //active tab highlite
  document.querySelector(`.${actibetab}`).classList.add("tab_active");
  //add not_active className
  tablistnotactive.forEach((elem) => {
    elem.classList.add("tab_notactive");
  });
}

//disable/enable tabs_slider control
function disableControl(arr, class1, class2, disableControl){
  arr.forEach(e => {
    if(e == class1 || e == class2){
        document.querySelector(disableControl).style.opacity = '0.4';
    }
  })
}
function enableControl(controlSelector){
  document.querySelector(controlSelector).style.opacity = '1';
}
;
//mobile slider one colum display
document
  .querySelector(".slider_menu_pizza")
  .addEventListener("click", getActivePizzaList);
document
  .querySelector(".slider_menu_drinks")
  .addEventListener("click", getActiveDrinksList);
document.addEventListener("DOMContentLoaded", getActivePizzaList);
document.addEventListener("DOMContentLoaded", getActiveDrinksList);
window.addEventListener("resize", getActivePizzaList);
window.addEventListener("resize", getActiveDrinksList);

function getActivePizzaList() {
  if (window.innerWidth <= 750) {
    cardDisplayMode("#pizza", "none", ".menu_pizza .row", ".card_pizza");
  } else {
    cardDisplayMode("#pizza", "flex", ".menu_pizza .row", ".card_pizza");
  }
}
function getActiveDrinksList() {
  if (window.innerWidth <= 750) {
    cardDisplayMode("#drinks", "none", ".menu_drinks .row", ".card_drinks");
  } else {
    cardDisplayMode("#drinks", "block", ".menu_drinks .row", ".card_drinks");
  }
}

function cardDisplayMode(section, style, divclass, cardClass) {
  const activePizzaListMobile = document.querySelectorAll(divclass);
  activePizzaListMobile.forEach((e) => {
    if (!e.classList.contains("not_active_list")) {
      let pizzalistclass = e.classList;
      let cardslist = document.querySelectorAll(
        `.${pizzalistclass[1]} ${cardClass}`
      );
      cardslist.forEach((elem, index) => {
        if (index != 0) {
          elem.style.display = style;
        }else{
          if(section == "#pizza"){
            elem.style.display = "flex";
          } else{elem.style.display = "block";}
        }
      });
      //slider_under_lenght
      let sliderLength = cardslist.length * 20;
      document.querySelector(
        `${section} .slider_under_line`
      ).style.width = `${sliderLength}px`;
    }
  });
}

//down_slider for good_type_list
let pizzaCardIndex = 0;
let drinkCardIndex = 0;
let cardsArr = null;
//pizza_right|left
const leftPizzaArrow = document.querySelector("#pizza .fa-arrow-left");
const rightPizzaArrow = document.querySelector("#pizza .fa-arrow-right");
const sliderActivePosition = document.querySelector("#pizza .slider_under_active");
sliderActivePosition.style.marginLeft = "0";

// pizza_to_right
document
  .querySelector("#pizza .fa-arrow-right")
  .addEventListener("click", function(){
    sliderToRight('.menu_pizza .row', ".card_pizza", leftPizzaArrow, rightPizzaArrow, sliderActivePosition, pizzaCardIndex);
  });

// pizza_to_left
document
  .querySelector("#pizza .fa-arrow-left")
  .addEventListener("click", function(){
    sliderToLeft('.menu_pizza .row', ".card_pizza", leftPizzaArrow, rightPizzaArrow, sliderActivePosition, pizzaCardIndex);
  });

// //drinks_right|left
const leftDrinksArrow = document.querySelector("#drinks .fa-arrow-left");
const rightDrinksArrow = document.querySelector("#drinks .fa-arrow-right");
const sliderActivePositionDrinks = document.querySelector("#drinks .slider_under_active");
sliderActivePositionDrinks.style.marginLeft = "0";

// drinks_to_right
document
  .querySelector("#drinks .fa-arrow-right")
  .addEventListener("click", function(){
    sliderToRight('.menu_drinks .row', ".card_drinks", leftDrinksArrow, rightDrinksArrow, sliderActivePositionDrinks, drinkCardIndex);
  });
// drinks_to_left
document
  .querySelector("#drinks .fa-arrow-left")
  .addEventListener("click", function(){
    sliderToLeft('.menu_drinks .row', ".card_drinks", leftDrinksArrow, rightDrinksArrow, sliderActivePositionDrinks, drinkCardIndex);
  });


//main functions
function sliderToRight(goodsSectionClass, cards_type, leftArrow, rightArrow, sliderControl, cardIndex) {
  //get list and all active_cards
  let goods_lists = document.querySelectorAll(goodsSectionClass);

  goods_lists.forEach(e => {
    if(!e.className.includes("not_active_list")){
      let str = e.className;
      let parentListClass = str.slice(4);
      cardsArr = document.querySelectorAll(`.${parentListClass} ${cards_type}`)

      if (cardIndex <= cardsArr.length-2){
        cardIndex++;
        checkGoodsSection(cardsArr, cardIndex)
      } else{
        cardIndex = cardsArr.length-1;
        checkGoodsSection(cardsArr, cardIndex)
      }
      if(cardIndex == cardsArr.length-1){
        disableArrow(rightArrow);
      }
    }
  })
  cardsArr.forEach( e => {
    e.style.display = "none";
  })

  if(cardsArr[0].className.includes('card_pizza')){
    cardsArr[cardIndex].style.display = "flex";
  }else{
    cardsArr[cardIndex].style.display = "block";
  }

    //change slider actual_visualisation_tools
    enableArrow(leftArrow)
    moveSliderActivePosition(sliderControl, cardIndex);
}
function sliderToLeft(goodsSectionClass, cards_type, leftArrow, rightArrow, sliderControl, cardIndex) {
  //get list and all active_cards
  let goods_lists = document.querySelectorAll(goodsSectionClass);

  goods_lists.forEach(e => {
    if(!e.className.includes("not_active_list")){
      let str = e.className;
      let parentListClass = str.slice(4);
      cardsArr = document.querySelectorAll(`.${parentListClass} ${cards_type}`)
      if (cardIndex >= 2){
        cardIndex--;
        checkGoodsSection(cardsArr, cardIndex)
      } else{
        cardIndex = 0;
        checkGoodsSection(cardsArr, cardIndex)
      }
      if(cardIndex == 0){
        disableArrow(leftArrow);
      }
    }
  })

  cardsArr.forEach( e => {
    e.style.display = "none";
  })

  if(cardsArr[0].className.includes('card_pizza')){
    cardsArr[cardIndex].style.display = "flex";
  }else{
    cardsArr[cardIndex].style.display = "block";
  }

    //change slider actual_visualisation_tools
    enableArrow(rightArrow)
    moveSliderActivePosition(sliderControl, cardIndex);
}

function checkGoodsSection(arr, index){
  if(arr[0].className.includes('card_pizza')){
    pizzaCardIndex = index;
  }else{
    drinkCardIndex = index;
  }
}

function enableArrow(arrow){
  arrow.style.color = "#421a14";
}

function disableArrow(arrow){
  arrow.style.color = "rgba(66,26,20,.2)";
}

function moveSliderActivePosition(block, index){
  actualMargin = 20 * index;
  block.style.marginLeft = `${actualMargin}px`;
}

function sliderActivePositiontoZerro(block){
  block.style.marginLeft = `0px`;
};
let pizza_goods = {
  margarita: {
    title: "Маргарита",
    language: "margarita",
    quantity: 1,
    size: 32,
    weight: 420,
    price: 109,
    img: "img/pizza_01.png",
    mesure: " sm",
    weight_mesure: " gr",
  },
  caprichosa: {
    title: "Капричоза",
    language: "caprichosa",
    quantity: 1,
    size: 32,
    weight: 420,
    price: 109,
    img: "img/pizza_02.png",
    mesure: " sm",
    weight_mesure: " gr",
  },
  four_cheeses: {
    title: "Четыре сыра",
    language: "four_cheeses",
    quantity: 1,
    size: 32,
    weight: 390,
    price: 172,
    img: "img/pizza_03.png",
    mesure: " sm",
    weight_mesure: " gr",
  },
  salami: {
    title: "Салями",
    language: "salami",
    quantity: 1,
    size: 32,
    weight: 420,
    price: 141,
    img: "img/pizza_04.png",
    mesure: " sm",
    weight_mesure: " gr",
  },
  diabla: {
    title: "Диабла",
    language: "diabla",
    quantity: 1,
    size: 32,
    weight: 430,
    price: 141,
    img: "img/pizza_05.png",
    mesure: " sm",
    weight_mesure: " gr",
  },
  carbonara: {
    title: "Карбонара",
    language: "carbonara",
    quantity: 1,
    size: 32,
    weight: 408,
    price: 148,
    img: "img/pizza_06.png",
    mesure: " sm",
    weight_mesure: " gr",
  },
  prosciutto: {
    title: "Прошуто",
    language: "prosciutto",
    quantity: 1,
    size: 32,
    weight: 410,
    price: 131,
    img: "img/pizza_07.png",
    mesure: " sm",
    weight_mesure: " gr",
  },
  сalzone: {
    title: "Кальцоне аль Форно",
    language: "сalzone",
    quantity: 1,
    size: 32,
    weight: 470,
    price: 148,
    img: "img/pizza_08.png",
    mesure: " sm",
    weight_mesure: " gr",
  },
  alsalmone: {
    title: "Аль сальмоне",
    language: "alsalmone",
    quantity: 1,
    size: 32,
    weight: 400,
    price: 204,
    img: "img/pizza_09.png",
    mesure: " sm",
    weight_mesure: " gr",
  },
  parma: {
    title: "Парма",
    language: "parma",
    quantity: 1,
    size: 32,
    weight: 400,
    price: 186,
    img: "img/pizza_10.png",
    mesure: " sm",
    weight_mesure: " gr",
  },
  vitello: {
    title: "Вителло",
    language: "vitello",
    quantity: 1,
    size: 32,
    weight: 490,
    price: 220,
    img: "img/pizza_11.png",
    mesure: " sm",
    weight_mesure: " gr",
  },
  cesario: {
    title: "Цезарио",
    language: "cesario",
    quantity: 1,
    size: 32,
    weight: 600,
    price: 210,
    img: "img/pizza_12.png",
    mesure: " sm",
    weight_mesure: " gr",
  },
  polo: {
    title: "Поло",
    language: "polo",
    quantity: 1,
    size: 32,
    weight: 400,
    price: 164,
    img: "img/pizza_13.png",
    mesure: " sm",
    weight_mesure: " gr",
  },
  melanzana: {
    title: "Меланзана",
    language: "melanzana",
    quantity: 1,
    size: 32,
    weight: 430,
    price: 168,
    img: "img/pizza_14.png",
    mesure: " sm",
    weight_mesure: " gr",
  },
  tono: {
    title: "Tono",
    language: "tono",
    quantity: 1,
    size: 32,
    weight: 470,
    price: 185,
    img: "img/pizza_15.png",
    mesure: " sm",
    weight_mesure: " gr",
  },
  dolce: {
    title: "Дольче",
    language: "dolce",
    quantity: 1,
    size: 32,
    weight: 410,
    price: 108,
    img: "img/pizza_16.png",
    mesure: " sm",
    weight_mesure: " gr",
  },
  vegetarian: {
    title: "Вегитарианская",
    language: "vegetarian",
    quantity: 1,
    size: 32,
    weight: 495,
    price: 145,
    img: "img/pizza_17.png",
    mesure: " sm",
    weight_mesure: " gr",
  },
  parma_crema: {
    title: "Парма Крема",
    language: "parma_crema",
    quantity: 1,
    size: 32,
    weight: 400,
    price: 129,
    img: "img/pizza_10.png",
    mesure: " sm",
    weight_mesure: " gr",
  },
  fungo_polo: {
    title: "Фунго Поло",
    language: "fungo_polo",
    quantity: 1,
    size: 32,
    weight: 410,
    price: 119,
    img: "img/pizza_13.png",
    mesure: " sm",
    weight_mesure: " gr",
  },
  peperoni: {
    title: "Перерони",
    language: "peperoni",
    quantity: 1,
    size: 32,
    weight: 400,
    price: 126,
    img: "img/pizza_05.png",
    mesure: " sm",
    weight_mesure: " gr",
  },
  polobri: {
    title: "Поло Бри",
    language: "polobri",
    quantity: 1,
    size: 32,
    weight: 420,
    price: 146,
    img: "img/pizza_03.png",
    mesure: " sm",
    weight_mesure: " gr",
  },
  fruttidimare: {
    title: "Дары моря",
    language: "fruttidimare",
    quantity: 1,
    size: 32,
    weight: 490,
    price: 240,
    img: "img/pizza_18.png",
    mesure: " sm",
    weight_mesure: " gr",
  },
};

let drink_goods = {
  cocacola033: {
    title: "Coca Cola",
    language: "cocacola",
    quantity: 1,
    size: 0.33,
    weight: null,
    price: 12,
    img: "img/drink_01.png",
    mesure: " l",
    weight_mesure: null,
  },
  cocacola05: {
    title: "Coca Cola",
    language: "cocacola",
    quantity: 1,
    size: 0.5,
    weight: null,
    price: 15,
    img: "img/drink_02.png",
    mesure: " l",
    weight_mesure: null,
  },
  cocacola1: {
    title: "Coca Cola",
    language: "cocacola",
    quantity: 1,
    size: 1,
    weight: null,
    price: 22,
    img: "img/drink_03.png",
    mesure: " l",
    weight_mesure: null,
  },
  fanta: {
    title: "Fanta",
    language: "fanta",
    quantity: 1,
    size: 1,
    weight: null,
    price: 18,
    img: "img/drink_04.png",
    mesure: " l",
    weight_mesure: null,
  },
  schweppes_garnet: {
    title: "Швепс Гранат",
    language: "schweppes_garnet",
    quantity: 1,
    size: 1,
    weight: null,
    price: 24,
    img: "img/drink_05.png",
    mesure: " l",
    weight_mesure: null,
  },
  schweppes_grapefruit: {
    title: "Швепс Грейпфрут",
    language: "schweppes_grapefruit",
    quantity: 1,
    size: 1,
    weight: null,
    price: 24,
    img: "img/drink_06.png",
    mesure: " l",
    weight_mesure: null,
  },
  schweppes_mojito: {
    title: "Швепс Мохито",
    language: "schweppes_mojito",
    quantity: 1,
    size: 1,
    weight: null,
    price: 24,
    img: "img/drink_07.png",
    mesure: " l",
    weight_mesure: null,
  },
  schweppes_lemon: {
    title: "Швепс Лимон",
    language: "schweppes_lemon",
    quantity: 1,
    size: 1,
    weight: null,
    price: 24,
    img: "img/drink_08.png",
    mesure: " l",
    weight_mesure: null,
  },
  orange: {
    title: "Апельсин",
    language: "orange",
    quantity: 1,
    size: 1,
    weight: null,
    price: 35,
    img: "img/juice_01.png",
    mesure: " l",
    weight_mesure: null,
  },
  apple: {
    title: "Яблоко",
    language: "apple",
    quantity: 1,
    size: 1,
    weight: null,
    price: 35,
    img: "img/juice_02.png",
    mesure: " l",
    weight_mesure: null,
  },
  pineapple: {
    title: "Ананас",
    language: "pineapple",
    quantity: 1,
    size: 1,
    weight: null,
    price: 35,
    img: "img/juice_03.png",
    mesure: " l",
    weight_mesure: null,
  },
  multi: {
    title: "Мультиамин",
    language: "multi",
    quantity: 1,
    size: 1,
    weight: null,
    price: 35,
    img: "img/juice_04.png",
    mesure: " l",
    weight_mesure: null,
  },
  peach_orrange: {
    title: "Персик-апельсин",
    language: "peach_orrange",
    quantity: 1,
    size: 1,
    weight: null,
    price: 35,
    img: "img/juice_05.png",
    mesure: " l",
    weight_mesure: null,
  },
  cranberry: {
    title: "Клюква",
    language: "cranberry",
    quantity: 1,
    size: 1,
    weight: null,
    price: 35,
    img: "img/juice_06.png",
    mesure: " l",
    weight_mesure: null,
  },
  redorange: {
    title: "Сицилийский апельсин",
    language: "redorange",
    quantity: 1,
    size: 1,
    weight: null,
    price: 35,
    img: "img/juice_07.png",
    mesure: " l",
    weight_mesure: null,
  },
  tomato: {
    title: "Томат",
    language: "tomato",
    quantity: 1,
    size: 1,
    weight: null,
    price: 35,
    img: "img/juice_08.png",
    mesure: " l",
    weight_mesure: null,
  },
  evian15: {
    title: "Evian",
    language: "evian",
    quantity: 1,
    size: 1.5,
    weight: null,
    price: 32,
    img: "img/water_01.png",
    mesure: " l",
    weight_mesure: null,
  },
  evian1: {
    title: "Evian",
    language: "evian",
    quantity: 1,
    size: 1,
    weight: null,
    price: 30,
    img: "img/water_02.png",
    mesure: " l",
    weight_mesure: null,
  },
  evian07: {
    title: "Evian",
    language: "evian",
    quantity: 1,
    size: 0.7,
    weight: null,
    price: 18,
    img: "img/water_03.png",
    mesure: " l",
    weight_mesure: null,
  },
  evian075: {
    title: "Evian",
    language: "evian",
    quantity: 1,
    size: 0.75,
    weight: null,
    price: 24,
    img: "img/water_04.png",
    mesure: " l",
    weight_mesure: null,
  },
  icetea01: {
    title: "Sparkling Ice Tea",
    language: "spark",
    quantity: 1,
    size: 0.33,
    weight: null,
    price: 25,
    img: "img/icetea_01.png",
    mesure: " l",
    weight_mesure: null,
  },
  icetea02: {
    title: "Green Ice Tea",
    language: "green_icetea",
    quantity: 1,
    size: 0.33,
    weight: null,
    price: 25,
    img: "img/icetea_02.png",
    mesure: " l",
    weight_mesure: null,
  },
  icetea03: {
    title: "Peach Ice Tea",
    language: "peach_icetea",
    quantity: 1,
    size: 0.33,
    weight: null,
    price: 25,
    img: "img/icetea_03.png",
    mesure: " l",
    weight_mesure: null,
  },
};
;
//open/close cart
document.querySelector(".cart").onclick = () => {
  document.querySelector(".cart_wrapper").style.display = "block";
  check_ifcartisfull();
  checklanguagestatus()
};
function check_ifcartisfull() {
  let fullCart = document.querySelector(".cart_content_full");
  let orderincart = document.querySelector(".order_in_cart");
  let emptyCart = document.querySelector(".cart_empty");
  if (orderincart.childElementCount > 0) {
    fullCart.style.display = "block";
    emptyCart.style.display = "none";
  } else {
    emptyCart.style.display = "block";
    fullCart.style.display = "none";
  }
}

//close_pop-up
document.querySelector(".cart_holder img").onclick = () => {
  document.querySelector(".cart_wrapper").style.display = "none";
};

//plus-minus good_items on card
document.addEventListener("click", (e) => {
  let targetID = e.target.dataset.id;

  if (e.target.classList.contains("plus")) {
    plusFunction(targetID);
  }
  if (e.target.classList.contains("minus")) {
    minusFunction(targetID);
  }
});

//change quantity in DOM_card
function plusFunction(targetID) {
  document.querySelectorAll("input").forEach((e) => {
    if (e.dataset.id == targetID) {
      e.value++;
      changeGoodsObjPlus(targetID);
    }
  });
}
function minusFunction(targetID) {
  document.querySelectorAll("input").forEach((e) => {
    if (e.dataset.id == targetID) {
      if (e.value - 1 <= 0) {
        e.value = 1;
      } else {
        e.value--;
        changeGoodsObjMinus(targetID);
      }
    }
  });
}

//change quantity in good_object
function changeGoodsObjPlus(targetID) {
  for (key in pizza_goods) {
    if (key == targetID) {
      pizza_goods[key].quantity++;
    }
  }
  for (key in drink_goods) {
    if (key == targetID) {
      drink_goods[key].quantity++;
    }
  }
}
function changeGoodsObjMinus(targetID) {
  for (key in pizza_goods) {
    if (key == targetID) {
      pizza_goods[key].quantity--;
    }
  }
  for (key in drink_goods) {
    if (key == targetID) {
      drink_goods[key].quantity--;
    }
  }
}

//add to cart
const cart_data = {};

//add to cart
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("tocart")) {
    // btn color and textContent 
    e.target.classList.toggle('added_to_cart');
    if(JSON.parse(localStorage.getItem("englishStatus"))){
      e.target.textContent = "In cart";
    }else{
      e.target.textContent = "В корзине";
    }

    let tocartTargetId = e.target.dataset.id;
    //if cart containe already smth
    if (cart_data[tocartTargetId] !== undefined) {
      if (pizza_goods[tocartTargetId]) {
        let addquantityItems = pizza_goods[tocartTargetId].quantity;
        cart_data[tocartTargetId].quantity += addquantityItems;
      } else {
        let addquantityItems = drink_goods[tocartTargetId].quantity;
        cart_data[tocartTargetId].quantity += addquantityItems;
      }
    }
    //if cart is empty
    else {
      if (pizza_goods[tocartTargetId]) {
        cart_data[tocartTargetId] = { ...pizza_goods[tocartTargetId] };
      } else {
        cart_data[tocartTargetId] = { ...drink_goods[tocartTargetId] };
      }
    }
    setCartData(cart_data);
  }
});

//set localStorage | renter cart
function setCartData(cart_data) {
  localStorage.setItem("cart_data", JSON.stringify(cart_data));
  renderCart();
}

function renderCart() {
  check_ifcartisfull();
  cleanCart();
  updateCart();
  clearquantity();
  counttotalsum();
}
//clean cart before new render
function cleanCart() {
  let mainDiv = document.querySelector(".order_in_cart");
  mainDiv.innerHTML = "";
}
//clean plus_minus_input and goods_obj quantity after event add_to_cart
function clearquantity() {
  for (key in pizza_goods) {
    pizza_goods[key].quantity = 1;
  }
  for (key in drink_goods) {
    drink_goods[key].quantity = 1;
  }
  document.querySelectorAll("section input").forEach((e) => {
    if (!e.classList.contains("quantyty_incart")) e.value = 1;
  });
}
//update pop_up cart
function updateCart() {
  let renderItems = JSON.parse(localStorage.getItem("cart_data"));
  createSlotsinCart(renderItems);
}
//create order_item
function createSlotsinCart(renderItems) {
  for (key in renderItems) {
    //quantity_regulation
    //btn_MINUS
    let control_regulation_minus = document.createElement("div");
    control_regulation_minus.className =
      "control_regulation hilight_text minus_incart";
    control_regulation_minus.dataset.id = key;
    control_regulation_minus.textContent = "-";

    //input
    let control_regulation_input = document.createElement("div");
    control_regulation_input.textContent = renderItems[key].quantity;
    control_regulation_input.dataset.id = key;
    control_regulation_input.className = "quantyty_incart";

    //btn_PLUS
    let control_regulation_plus = document.createElement("div");
    control_regulation_plus.className =
      "control_regulation hilight_text plus_incart";
    control_regulation_plus.dataset.id = key;
    control_regulation_plus.textContent = "+";

    let quantity_regulation = document.createElement("div");
    quantity_regulation.className = "quantity_regulation";
    quantity_regulation.appendChild(control_regulation_minus);
    quantity_regulation.appendChild(control_regulation_input);
    quantity_regulation.appendChild(control_regulation_plus);

    let deleteIcon = document.createElement("img");
    deleteIcon.src = "img/delete.png";
    deleteIcon.alt = "delate";
    deleteIcon.dataset.id = key;
    deleteIcon.className = "delete_fromcart";

    let order_actions = document.createElement("div");
    order_actions.className = "order_actions";
    order_actions.appendChild(quantity_regulation);
    order_actions.appendChild(deleteIcon);

    //order_item_description
    //size
    let order_size = document.createElement("div");
    order_size.className = "order_size";
    let order_size_num = document.createElement("span");
    order_size_num.textContent = renderItems[key].size;
    let order_size_mesure = document.createElement("span");
    order_size_mesure.textContent = renderItems[key].mesure;
    order_size.appendChild(order_size_num);
    order_size.appendChild(order_size_mesure);

    //weight
    let order_weight = document.createElement("div");
    order_weight.className = "order_weight";
    let order_weight_num = document.createElement("span");
    order_weight_num.textContent = renderItems[key].weight;
    let order_weight_mesure = document.createElement("span");
    order_weight_mesure.textContent = renderItems[key].weight_mesure;
    order_weight.appendChild(order_weight_num);
    order_weight.appendChild(order_weight_mesure);

    //price
    let order_price = document.createElement("div");
    order_price.className = "order_price";
    let order_price_num = document.createElement("span");
    order_price_num.textContent = renderItems[key].price;
    let order_price_mesure = document.createElement("span");
    order_price_mesure.textContent = " грн";
    order_price_mesure.dataset.language = "uah";
    order_price.appendChild(order_price_num);
    order_price.appendChild(order_price_mesure);

    let order_details = document.createElement("div");
    order_details.className = "order_details";
    order_details.appendChild(order_size);
    order_details.appendChild(order_weight);
    order_details.appendChild(order_price);

    let order_item_title = document.createElement("div");
    order_item_title.className = "order_item_title";
    order_item_title.textContent = renderItems[key].title;
    order_item_title.dataset.language = renderItems[key].language;

    let order_item_details = document.createElement("div");
    order_item_details.className = "order_item_details";
    order_item_details.appendChild(order_item_title);
    order_item_details.appendChild(order_details);
    order_item_details.appendChild(order_actions);

    //pizza_or drink img_block
    if (renderItems[key].img.includes("pizza")) {
      //create img
      let image_bg = document.createElement("img");
      image_bg.src = "img/pizzacard_bg.jpg";
      image_bg.alt = "background";

      let image_item = document.createElement("img");
      image_item.src = renderItems[key].img;
      image_item.alt = "pizza";
      //create div with img
      let image_pizza_cart = document.createElement("div");
      image_pizza_cart.className = "image_pizza_cart";
      image_pizza_cart.appendChild(image_bg);
      image_pizza_cart.appendChild(image_item);
      createOrderItem(image_pizza_cart);
    } else {
      //create img
      let image_item = document.createElement("img");
      image_item.src = renderItems[key].img;
      image_item.alt = "drink";
      //create div with img
      let image_drink_cart = document.createElement("div");
      image_drink_cart.className = "image_drink_cart";
      image_drink_cart.appendChild(image_item);
      createOrderItem(image_drink_cart);
    }

    function createOrderItem(divclass) {
      let order_item = document.createElement("div");
      order_item.className = "order_item";
      order_item.appendChild(divclass);
      order_item.appendChild(order_item_details);

      let order_line = document.createElement("div");
      order_line.className = "order_line";

      let order_slot = document.createElement("div");
      order_slot.className = "order_slot";
      order_slot.dataset.id = key;
      order_slot.appendChild(order_item);
      order_slot.appendChild(order_line);
      document.querySelector(".order_in_cart").appendChild(order_slot);
    }
  }
}

// delete item_order rerender cart/localstorage/data_cartobj
document.addEventListener("click", (e) => {
  let targetID = e.target.dataset.id;

  if (e.target.classList.contains("delete_fromcart")) {
    let cartContent = document.querySelectorAll(".order_slot");
    cartContent.forEach((e) => {
      if (e.dataset.id == targetID) {
        e.remove();
      }
    });
    for (key in cart_data) {
      if (key == targetID) {
        delete cart_data[key];
        setCartData(cart_data);
      }
    }
  }
});

//change quantity in cart
document.querySelector(".cart_holder").addEventListener("click", (e) => {
  let targetID = e.target.dataset.id;

  if (e.target.classList.contains("plus_incart")) {
    plusincartFunction(targetID);
  }
  if (e.target.classList.contains("minus_incart")) {
    minusincartFunction(targetID);
  }
});

function plusincartFunction(targetID) {
  document.querySelectorAll(".quantyty_incart").forEach((e) => {
    if (e.dataset.id == targetID) {
      let itemNumber = +e.textContent;
      itemNumber++;
      e.textContent = itemNumber;
      cart_data[targetID].quantity = itemNumber;
      setCartData(cart_data);
    }
  });
}
function minusincartFunction(targetID) {
  document.querySelectorAll(".quantyty_incart").forEach((e) => {
    if (e.dataset.id == targetID) {
      let itemNumber = +e.textContent;
      if (itemNumber - 1 == 0) {
        e.textContent = 1;
        cart_data[targetID].quantity = 1;
      } else {
        itemNumber--;
        e.textContent = itemNumber;
        cart_data[targetID].quantity = itemNumber;
        setCartData(cart_data);
      }
    }
  });
}

//total summ and quantity count
let sum_navigation = document.querySelector(".nav_total_sum");
let qtt_natigation = document.querySelector(".quantity");
function counttotalsum() {
  let actualcartobj = JSON.parse(localStorage.getItem("cart_data"));
  let sum_div = document.querySelectorAll(".total_order_price");

  let totalsum = 0;
  let totalqutity = 0;

  for (key in actualcartobj) {
    totalsum += actualcartobj[key].quantity * actualcartobj[key].price;
    totalqutity += actualcartobj[key].quantity;
  }

  sum_div.forEach(e => {e.textContent = totalsum;})
  sum_navigation.textContent = totalsum;
  qtt_natigation.textContent = totalqutity;


  if (totalsum > 0) {
    sum_navigation.classList.add("active_sum");
    qtt_natigation.classList.add("active_quantity");
    document.querySelector(".price").classList.add("price_active");
  } else {
    sum_navigation.classList.remove("active_sum");
    qtt_natigation.classList.remove("active_quantity");
    document.querySelector(".price").classList.remove("price_active");
  }
}
;
//check_out open
document.querySelector(".cart_wrapper .order_confirm").onclick = () => {
  document.querySelector(".cart_wrapper").style.display = "none";
  document.querySelector(".checkout_wrapper").style.display = "block";
};

//check_out close
document.querySelector(".checkout_holder img").onclick = () => {
  document.querySelector(".checkout_wrapper").style.display = "none";
};

//hide all selects & rotate back arrow
document.querySelector('.checkout_wrapper').addEventListener('click', e => {
  let elem_target = e.target;
  let activeElems = document.querySelectorAll('.active');
  let input01 = document.getElementById('street');
  let input02 = document.getElementById('house');
  let input03 = document.querySelector('.date_now');
  let input04 = document.querySelector('time');
  let input05 = document.getElementById('payment_type');
  let input06 = document.querySelector('.date_picker');
  let arrow1 = document.querySelector('.prev_mth');
  let arrow2 = document.querySelector('.next_mth');
  let input07 = document.querySelector('.time_now');

  if(elem_target != input01 && elem_target != input02 && elem_target != input03 && elem_target != input04 && elem_target != input05 &&  elem_target != input06 &&elem_target != arrow1 && elem_target != arrow2 && elem_target != input07) {
    activeElems.forEach( e => e.classList.remove('active'));
    rotateAllArrowstoZerro();
  }
})

function rotateAllArrowstoZerro(){
  document.querySelectorAll('form img').forEach(e => {
    e.style.transform = 'rotate(0deg)';
  })
}

//street select
let street_input = document.querySelector('.input_street');
let street_select = document.querySelector('.street_select');

street_input.addEventListener('click', e => {
  let arrow = document.querySelector('.street_input_value img');
  rerenderSelects(date_picker_element, time_picker_element, house_select, payment_options, arrow, street_select, e, 'street')
})

//house select
let house_input = document.querySelector('.input_house');
let house_select = document.querySelector('.house_select');

house_input.addEventListener('click', e => {
  let arrow = document.querySelector('.house_input_value img');
  rerenderSelects(date_picker_element, time_picker_element, street_select, payment_options, arrow, house_select, e, 'house');
})

//paymeny mode
let payment_options = document.querySelector('.payment_options');
let payment_type = document.querySelector('.payment_type');

payment_type.addEventListener('click', e => {
  let arrow = document.querySelector('.payment_select img');
  rerenderSelects(date_picker_element, time_picker_element, street_select, house_select, arrow, payment_options, e, 'payment_type');
})

function rerenderSelects(select1, select2, select3, select4, arrow, active_select, event_elem, section_change){
  hideNotactiveSelects(select1, select2, select3, select4);
  rotateAllArrowstoZerro();
  active_select.classList.toggle('active');
  rotateArrow(arrow);
  setinputvalue(event_elem, section_change, arrow);
}

//helper functions
function rotateArrow(arrow){
  arrow.style.transform = 'rotate(180deg)';
}
function rotateArrowZero(arrow){
  arrow.style.transform = 'rotate(0deg)';
}
function setinputvalue(e, inputID, arrow){
  let targetTag = e.target.tagName;
  if(targetTag == 'LI'){
    let input_content = e.target.textContent;
    document.getElementById(inputID).value = input_content;
    rotateArrowZero(arrow);
  }
}

//date_picker
const date_picker_element = document.querySelector('.datepicker_wrapper');
const selected_date_element = document.querySelector('.date_now');
const date_element = document.querySelector('.dates');
const mth_element = document.querySelector('.mth');
const next_mnth_element = document.querySelector('.next_mth');
const prev_mnth_element = document.querySelector('.prev_mth');
const days = document.querySelector('.days');
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const months_ru = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const days_element = document.querySelector('.days');
let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

selected_date_element.innerText = formatDate(date);
populateDates();

selected_date_element.addEventListener('click', toggleDatePicker);
next_mnth_element.addEventListener('click', goToNextMonth);
prev_mnth_element.addEventListener('click', goToPrevMonth);

function formatDate(date) {
  let dd = date.getDate();
  if (dd < 10) dd = "0" + dd;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = "0" + mm;

  var yy = date.getFullYear();
  if (yy < 10) yy = "0" + yy;

  return dd + '.' + mm + '.' + yy;
};
function toggleDatePicker(e){
  hideNotactiveSelects(time_picker_element, street_select, house_select, payment_options);
  rotateAllArrowstoZerro();
  date_picker_element.classList.toggle('active');
  let arrow = document.querySelector('.date img');
  rotateArrowDeliverypicker(arrow)
}
function goToNextMonth(e){
  month++;
  if(month > 11){
    month = 0;
    year++;
  }
  mth_element.textContent = setMonthLanguage(month, year);
  populateDates();
}
function goToPrevMonth(e){
  month--;
  if(month < 0){
    month = 11;
    year--;
  }
  mth_element.textContent = setMonthLanguage(month, year);
  populateDates();
}
function populateDates(e){
  days_element.innerHTML = '';
  let amount_days = 31;
  if(month == 1){
    amount_days = 28;
  }

  for(let i = 0; i < amount_days; i++){
    const day_element = document.createElement('div');
    day_element.classList.add('day');
    day_element.textContent = i + 1;
    if(selectedDay == (i + 1) && selectedMonth == month && selectedYear == year){
      day_element.classList.add('day_selected');
    }
    //choose tdate value & att to input
    day_element.addEventListener('click', function(){
      selectedDate = new Date(year + '.' + (month + 1) + '.' + (i+ 1));
      selectedDay = (i + 1);
      selectedMonth = month;
      selectedYear = year;

      selected_date_element.textContent = formatDate(selectedDate);
      selected_date_element.dataset.value = selectedDate;
      chengeDeliveryTextStyle(selected_date_element);

      populateDates();
      toggleDatePicker();
    })
    days_element.appendChild(day_element);
  }
}

// check language status & set month
function setMonthLanguage(monthIndex, year){
  let languageStatus = JSON.parse(localStorage.getItem("englishStatus"));
  if(languageStatus){
    return months[monthIndex] + ' ' + year;
  } else{
    return months_ru[monthIndex] + ' ' + year;
  }
}

// timepicker 
const selected_time_element = document.querySelector('.time_now');
const time_picker_element = document.querySelector('.timepicker_wrapper');
let time_now = document.querySelectorAll(".time_now"); 

time_now.forEach(e => {
  e.innerText = formateTime(date);
});

selected_time_element.addEventListener('click', toggleTimePicker);

function formateTime(d){

  let hh = d.getHours();
  if(hh <10) hh = "0" + hh;
  
  let min = d.getMinutes();
  if(min <10) min = "0" + min;

  return hh + ' : ' + min;
}
function toggleTimePicker(e){
  hideNotactiveSelects(date_picker_element, street_select, house_select, payment_options);
  rotateAllArrowstoZerro();
  time_picker_element.classList.toggle('active');
  let arrow = document.querySelector('.time img')
  rotateArrowDeliverypicker(arrow)
}
document.querySelector('.timing_block').addEventListener('click', e => {
  let target_elem = e.target;
  if(target_elem.className == 'timing'){
    selected_time_element.textContent  = target_elem.textContent;
    chengeDeliveryTextStyle(selected_time_element);
  }
})

//helper functions
function chengeDeliveryTextStyle(elem){
    elem.style.fontWeight = '700';
    elem.style.color = '#421914';
    elem.style.fontSize = '1.13em';
}
function rotateArrowDeliverypicker(arrow){
  if(window.innerWidth <= 610) {
    arrow.style.transform = 'rotate(180deg)';
  } else{
    arrow.style.transform = 'rotate(-90deg)';
  }
}

// hide selects exept active 
function hideNotactiveSelects(select01, select02, select03, select04){
  select01.classList.remove('active');
  select02.classList.remove('active');
  select03.classList.remove('active');
  select04.classList.remove('active');
}

//form validation
let inputArr = document.querySelectorAll('input')
const patterns = {
  username: /^[a-z]/i,
  telephone: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
  change: /^[0-9]/,
}
//validation function
function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = 'valid';
  } else {
    field.className = 'invalid';
  }
}
//check patterns  
inputArr.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  })
})

//check_out confirm
document.querySelector(".checkout_wrapper .order_confirm").addEventListener('click', (e) => { 
  e.preventDefault();
  checkRequired(); 
  checkinvalid();
})

function checkRequired(){
  let requiered = document.querySelectorAll('.required');
  requiered.forEach (e => {
    if(!e.value){
      document.querySelector(".error").style.display = "block";
      e.classList.add('invalid');
    }else {
      e.classList.remove('invalid');
      e.classList.add('valid');
    }
  })
}
function checkinvalid(){
  let checkoutInvalid = document.querySelectorAll('.checkout_holder .invalid');

  if(checkoutInvalid.length == 0){
    document.querySelector(".error").style.display = "none";
    document.querySelector(".checkout_wrapper ").style.display = "none";
    cleanCart()
    localStorage.removeItem("cart_data");
    sum_navigation.classList.remove("active_sum");
    qtt_natigation.classList.remove("active_quantity");
    sum_navigation.textContent = "0";
    qtt_natigation.textContent = "0";
    document.querySelector(".price").classList.remove("price_active");
    document.querySelector(".thanks_wrapper").style.display = "block";
    } else{
      console.log(checkoutInvalid);
    }

};

//thnks close
document.querySelector(".thanks_wrapper").onclick = () => {
  document.querySelector(".thanks_wrapper").style.display = "none";
};
;
let animItems = document.querySelectorAll('._anim_items');

if(animItems.length > 0){
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(){
    for(let i = 0; i < animItems.length; i++){
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if(animItemHeight > window.innerHeight){
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
        animItem.classList.add('_active');
      } 
    }
  }
  function offset(el){
    const rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left:rect.left + scrollLeft}
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
};

//smooth scroll
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("scroll")) {
    event.preventDefault();
    var target = event.target.getAttribute("href");
    var targetPosition = document.querySelector(target).offsetTop;
    window.scrollTo({
      top: targetPosition,
      left: 0,
      behavior: "smooth",
    });
  }
});

//on load check cart and language status
document.addEventListener("DOMContentLoaded", function () {
  //cart
  let localstorage_cart_data = JSON.parse(localStorage.getItem("cart_data"));
  for (key in localstorage_cart_data) {
    cart_data[key] = localstorage_cart_data[key];
  }
  renderCart();
  //language
  checklanguagestatus()
  //disable drinkstab left control
  let arr = ["withgas", "withgas_drinks_content"];
  disableControl(arr, "withgas", "withgas_drinks_content", "#drinks .slider_left_control");
});

//clear cart from LocalStorage 
// let limitInStorage = 24 * 3600 * 1000; //24hours
let limitInStorage = 3600 * 1000 //1 hour
let localStorageInitTime = localStorage.getItem('localStorageInitTime');
if (localStorageInitTime === null) {
  localStorage.setItem('localStorageInitTime', +new Date());
} else if(+new Date() - localStorageInitTime > limitInStorage){
  localStorage.clear();
  localStorage.setItem('localStorageInitTime', +new Date());
}