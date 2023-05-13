//Loading HTML Elements into variables so can modify or add children elements to them
let boatViewContainer = document.getElementById("boatViewContainer");
let boatMenuContainer = document.getElementById("boatMenuContainer");
let selectedBoat = document.getElementById("selectedBoat");
let currentWeather = document.getElementById("currentWeather");
let selectedSeatID = "";
// calling LoadXmlDoc function to store all xmlData into xmlContent variable
let xmlDocument;
let daysWeather;
fetch("boats.xml").then((res) => {
  res.text().then((xml) => {
    // setting xmlContent to recieved string from fetch request as response
    let xmlC = xml;

    // converting the string recieved into xml Document usign DOM parser
    let parser = new DOMParser();
    let xmlDOM = parser.parseFromString(xmlC, "application/xml");

    
    xmlDocument = xmlDOM;

    // calling which funtions should be called by default
    getWeather();
    allBoatsNames();
    getBoat(selectedBoat.selectedOptions[0].value)
    getBoatMenu(selectedBoat.selectedOptions[0].value);

  });
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function to call which boat to show based on the one selected from select n HTMl
function myFunction(){
  let val = selectedBoat.selectedOptions[0].value
  getBoat(val)
  getBoatMenu(val);

 }
// GET function to read data of boat from xml doc and display on HTML Page
function allBoatsNames() {
 
  // get all boats from xml
  let boats = xmlDocument.getElementsByTagName("boat");

  // Checking the length fo boats returned
  // so if there are multiple noats inside this category so we can loop through them
  // otherwise just get the single boat present
  // and add it to the dropdown list we will show in the webpage
  let length = boats.length;
  if (length > 1) {
    for (i = 0; i < length; i++) {
      let option = document.createElement("option");
      option.innerHTML = boats[i].getAttribute("id");
      option.style="color:#000"
      selectedBoat.appendChild(option);
    }
  } 
  else {
    let option = document.createElement("li");
    option.innerHTML = boats[0].getAttribute("id");
    selectedBoat.appendChild(option);
  }

}

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Helper function to avoid repetetion
function boatById(id, boats) {
  if (boats.length > 1) {
    for (i = 0; i < boats.length; i++) {
      if (boats[i].getAttribute("id") == id) {
        return boats[i];
      }
    }
  } else {
    if (boats[0].getAttribute("id") === id) {
      return boats[0];
    }
  }
}

// /////////////////////////////////////////////////////////////////////////////////////////////////////////

// GET function for selected Boat's Menu
function getBoatMenu(boatId) {
  // get all boats from xml
  let boats = xmlDocument.getElementsByTagName("boat");
  let boat = boatById(boatId, boats);

  if (!boat) {
    console.log("No Such Boat found!");
  } 
  else {
    let menu = boat.getElementsByTagName("menu");
    let items = menu[0].getElementsByTagName("item");
    let div = document.createElement("div");


    for (i = 0; i < items.length; i++) {
      let nestDiv = document.createElement("div");
      let p1 = document.createElement("p");
      let p5 = document.createElement("p");
      let p2 = document.createElement("p");
      let img = document.createElement("img");
      let p3 = document.createElement("p");
      let p4 = document.createElement("p");

      // itemId
      let itemId = items[i].getAttribute("id");
      p1.innerHTML = itemId;

      // items title
      let title = items[i].getElementsByTagName("title")[0].innerHTML;
      p5.innerHTML = title;

      // items cataegory
      let category = items[i].getAttribute("category");
      p2.innerHTML = category;

      // items image
      let image = items[i].getElementsByTagName("image")[0].innerHTML;
      img.src = image;
      img.alt = "image of food";

      // items description
      let description =
        items[i].getElementsByTagName("description")[0].innerHTML;
      p3.innerHTML = description;

      // items cost
      let cost = items[i].getElementsByTagName("cost")[0].innerHTML;
      p4.innerHTML = "$"+cost;

      nestDiv.appendChild(p1);
      nestDiv.appendChild(p5);
      nestDiv.appendChild(p2);
      nestDiv.appendChild(img);
      nestDiv.appendChild(p3);
      nestDiv.appendChild(p4);
      div.appendChild(nestDiv);
    }

    // menus id
    let p = document.createElement("p");
    p.innerHTML = menu[0].getAttribute("id");
    boatMenuContainer.appendChild(p);
    // boatMenuContainer.style="border:1px white solid"

    // appending menu to div after completely iterated through
    boatMenuContainer.replaceChildren(div);
  }
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// GET function to get the seats etc of a boat to view
function getBoat(id) {

  // get all boats from xml
  let boats = xmlDocument.getElementsByTagName("boat");
  // boat by id is a helper function made above for purpose of not repeating code
  let boat = boatById(id, boats);

  //  if  boatbyId function doesnot return anything then that means no boat with that id found so error
  if (!boat) {

    console.log("No Boat with this Id found");

  } else {

    // if boat is returned get all the rows of that boat
    let rows = boat.getElementsByTagName("row");
    let leftSideDiv = document.createElement("div");
    let rightSideDiv = document.createElement("div");


    for (i = 0; i < rows.length; i++) {
      let div = document.createElement("div");
      div.id = rows[i].getAttribute("id");
      div.style = "display:flex; justify-content:center; padding:0rem 1rem;";
      // get all setas of a row
      let seats = rows[i].getElementsByTagName("seat");
      for (j = 0; j < seats.length; j++) {
        let nestedDiv = document.createElement("div");
        nestedDiv.id = seats[j].getAttribute("id");
        nestedDiv.onclick = function(e){selectedSeatID=(e.target.id);reserveASeat(selectedBoat.selectedOptions[0].value,selectedSeatID,16)}
        nestedDiv.style = "background-color:skyblue; border:1px black solid; width:30px; height:30px; position:relative";

        // storing the price and booked tag of every seat inside a seprate div inside a ul for hovering purpose
        let nestedDiv2nd = document.createElement("div");
        nestedDiv2nd.style = "display:none; flex-direction:column ;z-index:1; padding:5px; width:100px; position:absolute; background-color:green; top:-200%; right:-100";
        
        // For popup to show on hover over some seat
        nestedDiv.onmouseover = function(){nestedDiv2nd.style.display="flex";}
        nestedDiv.onmouseleave = function(){nestedDiv2nd.style.display="none";}


        // nestedDiv2nd.onmouseover(e=>console.log("mouseover"))
        let ul = document.createElement("ul");
        let price = document.createElement("li");
        price.innerHTML = "$"+seats[j].getElementsByTagName("price")[0].innerHTML;
        ul.appendChild(price);

        let booked = document.createElement("li");
        let bookedValue = seats[j].getElementsByTagName("booked")[0];
        let from = bookedValue.getElementsByTagName("from")[0].innerHTML;
        booked.innerHTML = "from: "+bookedValue.getElementsByTagName("from")[0].innerHTML+" till: "+bookedValue.getElementsByTagName("till")[0].innerHTML;
        ul.appendChild(booked);

        let user = bookedValue.getElementsByTagName("user")[0].innerHTML;

        nestedDiv2nd.append(ul);
        if (from!="") {
          nestedDiv.style.backgroundColor = "pink";
        }
        if(user=="me"){
          nestedDiv.style.backgroundColor = "green";
        }

        // adding the div to nestedDiv
        nestedDiv.appendChild(nestedDiv2nd);

        // adding the nestedDiv to div
        div.appendChild(nestedDiv);
      }

      // adding the div to boatViewContainer
      if(i>=rows.length/2){
        rightSideDiv.appendChild(div)
      }
      else{
        leftSideDiv.appendChild(div)
      }
    }
    boatViewContainer.replaceChildren(leftSideDiv);
    leftSideDiv.style=""
    boatViewContainer.appendChild(rightSideDiv);
    rightSideDiv.style="margin-top:15px"
    boatViewContainer.style="flex:1;  position:relative;"


  }
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getWeather() {
  // The API is called OPEN CALL API 3.0 from the link provided in the document
  let apikey = "d2bb3860ff04207d63cee20e8cc3d376"; //your api key here
  let lat = "33.7715";
  let lon = "72.7511";

  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=${apikey}`
  )
    .then((res) => res.json())
    .then((data) => {
      // getting current weather icon  based on icon info recieved in current weather data from weather api
      const icon =
        "https://openweathermap.org/img/wn/" +
        data.current.weather[0].icon +
        "@2x.png";
      let img = document.createElement("img");
      img.src = icon;
      img.alt = "weatherIcon";
      currentWeather.appendChild(img);

      // creating a paragraph and putting the todays weather temprature and appending it to  div
      let para = document.createElement("p");
      para.innerHTML = data.current.temp + " C";
      para.style = "color:orange; margin-right:10px";
      currentWeather.appendChild(para);

      // creating a paragraph and putting the todays weather description like main and appending it to  div
      let des = document.createElement("p");
      des.innerHTML = data.current.weather[0].main;
      currentWeather.appendChild(des);
      currentWeather.style = "display:flex; align-items:center;";
    })
    .catch((err) => {
      console.log(err);
    });
}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// POST function to reserve a seat
function reserveASeat(id, seatid, reservationDate) {
  let allow = false;
  let price = 0;

  // checking if the reservation is for today
  let today = new Date();
  if (reservationDate == today.getDate()) {
    allow = true;
  } else {
    // The API is called OPEN CALL API 3.0 from the link provided in the document
    let apikey = "d2bb3860ff04207d63cee20e8cc3d376"; //your api key here
    let lat = "33.7715";
    let lon = "72.7511";

    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=${apikey}`
    )
      .then((res) => res.json())
      .then((data) => {
        let date = new Date();
        let day = 0;
        if (reservationDate == date.getDate() + 1) {
          day = 0;
        } else if (reservationDate == date.getDate() + 2) {
          day = 1;
        } else if (reservationDate == date.getDate() + 3) {
          day = 2;
        } else if (reservationDate == date.getDate() + 4) {
          day = 3;
        } else {
          console.log("You cannot reserve more than 4 days before");
        }
        if (
          data.daily[day].temp.day < 14 ||
          data.daily[day].weather[0].main === "Rain"
        ) {
          console.log("Cannot Reserve for this date due to weather!");
        } else {
          allow = true;
        }
        if (allow) {

          let boats = xmlDocument.getElementsByTagName("boat");
          let boat = boatById(id, boats);
          if (!boat) {
            console.log("No such Boat found!");
          } else {
            // finding the seat you have booked and changing its color to green
            let seat = boat.getElementsByTagName("seat");
            for (i = 0; i < seat.length; i++) {
              if (seat[i].getAttribute("id") == seatid) {
                if( seat[i].getElementsByTagName("booked")[0].getElementsByTagName("from")[0].innerHTML!==""){
                  // console.log(seat[i].getElementsByTagName("booked")[0].getElementsByTagName("from")[0].innerHTML)
                  console.log("Seat already booked!")
                }
                else{
                  // console.log(seat[i].getElementsByTagName("booked")[0].getElementsByTagName("from").nodeValue)
                  seat[i].getElementsByTagName("booked")[0].getElementsByTagName("user")[0].innerHTML="me"
                  seat[i].getElementsByTagName("booked")[0].getElementsByTagName("from")[0].innerHTML=reservationDate+"-"+today.getMonth()+"-"+today.getFullYear();
                  seat[i].getElementsByTagName("booked")[0].getElementsByTagName("till")[0].innerHTML=(reservationDate+1)+"-"+today.getMonth()+"-"+today.getFullYear();
                  document.getElementById(seatid).style.backgroundColor = "green";
                  price = parseInt(
                    seat[i]
                      .getElementsByTagName("price")[0].innerHTML
                      
                  );
                }
              }
            }
          }
        }
      });
  }
  return price;
}




// /////////////////////////////////////////////////////////////////////////////////////////////


function placeAnOrder(menuId, items) {
  let price = 0;
  let menus = xmlDocument.getElementsByTagName("menu");
  let menu;
  for (i = 0; i < menus.length; i++) {
    if (menus[i].getAttribute("id") == menuId) {
      menu = menus[i];
      break;
    }
  }
  let Menuitems = menu.getElementsByTagName("item");
  for (i = 0; i < Menuitems.length; i++) {
    for (j = 0; j < items.length; j++) {
      if (Menuitems[i].getAttribute("id") == items[j].id) {
        let p = parseInt(
          Menuitems[i].getElementsByTagName("cost")[0].innerHTML.split("$")[1]
        );
        price += p * items[j].quantity;
      }
    }
  }
  return price;
}
