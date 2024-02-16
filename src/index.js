function tellTokyoTime() {
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".city-date");
    let tokyoTimeElement = tokyoElement.querySelector(".city-time");

    let tokyoDate = moment().tz("Asia/Tokyo").format("MMMM Do YYYY");
    let tokyoTime = moment()
      .tz("Asia/Tokyo")
      .format("H:mm:ss[ <small>]A[</small]");

    tokyoDateElement.innerHTML = tokyoDate;
    tokyoTimeElement.innerHTML = tokyoTime;
  }
}

function tellTorontoTime() {
  let torontoElement = document.querySelector("#toronto");
  if (torontoElement) {
    let torontoDateElement = torontoElement.querySelector(".city-date");
    let torontoTimeElement = torontoElement.querySelector(".city-time");

    let torontoDate = moment().tz("America/Toronto").format("MMMM Do YYYY");
    let torontoTime = moment()
      .tz("America/Toronto")
      .format("H:mm:ss[ <small>]A[</small]");

    torontoDateElement.innerHTML = torontoDate;
    torontoTimeElement.innerHTML = torontoTime;
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;

  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimezone);
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = `
<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="city-date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="city-time">${cityTime.format(
            "H:mm:ss[ <small>]A[</small]"
          )}
        </div>



`;
}

tellTokyoTime();
setInterval(tellTokyoTime, 1000);

tellTorontoTime();
setInterval(tellTorontoTime, 1000);

let citySelectElement = document.querySelector("#select-city");

citySelectElement.addEventListener("change", updateCity);
