// The h1 that has the city name
const cityNameEl = document.querySelector(".time-info .city");
// The h3 that has the date and the day
const cityDateEl = document.querySelector(".time-info .date");
// Selecting all the prayer cards in an array
const prayer = document.querySelectorAll(".prayer-time-card");

// Render to the default city
let defaultCity = document.querySelector("select option[selected]");
getData(defaultCity.value);


// Function to get the data from the api
function getData(value) {
  // Spliting the returned value from the select element => [city(en)-country(en)-city(ar)]
  let location = value.split("-");
  let city = location[0]; // city(en)
  let country = location[1]; // country(en)
  let method = 5; // This is the method used to calculate the prayer time in the api

  // Gettin and formatting the current date.
  let date = new Date();
  let day = date.getDate().toString().padStart(2, 0);
  let month = (date.getMonth() + 1).toString().padStart(2, 0);
  let year = date.getFullYear().toString().padStart(2, 0);
  let currentDate = `${day}-${month}-${year}`;
  
  // Fetching the data.
  let endPoint = `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=${country}&method=${method}`;
  axios.get(endPoint).then((response) => {
    let days = response.data.data;
    for (day of days) {
      let apiDate = day.date.gregorian.date; // The date in the api data
      
      // Getting the correct data for the current date
      if (apiDate === currentDate) {
        cityNameEl.innerHTML = location[2]; // Displaying the arabic name of the city
        cityDateEl.innerHTML = `${day.date.hijri.weekday.ar} - ${apiDate}`;
        for (pray of prayer) {
          let prayName = pray.dataset.prayer; // Getting the name of the prayer from data-prayer attribute in the prayer card
          pray.querySelector(".prayer-time").innerHTML = day.timings[prayName];
        }
      }
    }
  }).catch(error => {
    document.body.innerHTML += `
    <div class="alert">
      <div class="close" onclick="handleTheError(this)">x</div>
      ${error}
    </div>
  `
  });
}


function handleTheError(el) {
  el.parentElement.remove();
  window.location.reload();
}