function tellTokyoTime() {
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".city-date");
  let tokyoTimeElement = tokyoElement.querySelector(".city-time");

  let tokyoDate = moment().tz("Asia/Tokyo").format("MMMM Do YYYY");
  let tokyoTime = moment()
    .tz("Asia/Tokyo")
    .format("H:m:ss[ <small>]A[</small]");

  tokyoDateElement.innerHTML = tokyoDate;
  tokyoTimeElement.innerHTML = tokyoTime;
}

function tellTorontoTime() {
  let torontoElement = document.querySelector("#toronto");
  let torontoDateElement = torontoElement.querySelector(".city-date");
  let torontoTimeElement = torontoElement.querySelector(".city-time");

  let torontoDate = moment().tz("America/Toronto").format("MMMM Do YYYY");
  let torontoTime = moment()
    .tz("America/Toronto")
    .format("H:m:ss[ <small>]A[</small]");

  torontoDateElement.innerHTML = torontoDate;
  torontoTimeElement.innerHTML = torontoTime;
}

tellTokyoTime();
setInterval(tellTokyoTime, 1000);

tellTorontoTime();
setInterval(tellTorontoTime, 1000);
