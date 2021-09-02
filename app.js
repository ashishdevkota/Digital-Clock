function displayClock() {
  var time = new Date();
  var ampm = time.getHours() >= 12 ? " PM" : " AM";

  var time1 =
    time.getHours() +
    ":" +
    time.getMinutes() +
    ":" +
    time.getSeconds() +
    ":" +
    ampm;
  document.getElementById("clock").textContent = time1;
  clockRefresh();
}
function clockRefresh() {
  var refresh = 1000; // Refresh rate in milli seconds
  mytime = setTimeout("displayClock()", refresh);
}
clockRefresh();

//toggle color
var root = document.documentElement;
var btn = document.getElementById("colorToggle");
btn.addEventListener("click", (e) => {
  root.style.setProperty(
    "--background",
    getComputedStyle(root).getPropertyValue("--background") === "#333"
      ? "#eee"
      : "#333"
  );
  root.style.setProperty(
    "--foreground",
    getComputedStyle(root).getPropertyValue("--foreground") === "#eee"
      ? "#333"
      : "#eee"
  );
});
