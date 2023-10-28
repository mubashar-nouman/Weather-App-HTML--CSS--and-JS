const form = document.querySelector("form");
const search = document.getElementById("search");
const tempHeading = document.querySelector(".temp-heading");
const cityHeading = document.querySelector(".city-heading");

const apiKey = "57f265c7b1554f8c999132650232710";

const apiData = async (city) => {
  const api_url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
  const response = await fetch(api_url);
    console.log(response)
  if (response.status == 400) {
    console.log("MUbashir Chutiyaa...");
    return false;

  } else {
    const data = await response.json();
    const temperature = data.current.feelslike_c;
    const cityName = data.location.name;
    return { temperature, cityName };
  }
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const dataObject= await apiData(search.value);
  if(!dataObject){
    cityHeading.innerText= "City Not Found";
    return;
  }
  const { temperature, cityName } = dataObject;

  tempHeading.innerText = `${temperature}°C`;
  cityHeading.innerText = `${cityName}`;
});







function getLocation() {
    if (navigator.geolocation) {
      const abc = navigator.geolocation.getCurrentPosition(showPosition);
      console.log("Hello", abc)
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
}  

getLocation()