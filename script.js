let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const data = async () => {
    try {
      let response = await fetch(`https://ipinfo.io/json`);
      let answer = await response.json();

      // Update IP
      let ip = document.querySelector(".ip");
      ip.textContent = "IP Manzil: " + answer.ip;

      // Update City
      let city = document.querySelector(".city");
      city.textContent = answer.city
        ? "Shahar: " + answer.city
        : "Shahar: Noma'lum";

      // Update Region
      let region = document.querySelector(".region");
      region.textContent = "Viloyat: " + answer.region;

      // Update Country
      let country = document.querySelector(".country");
      country.textContent = "Mamlakat: " + answer.country;

      // Update Coordinates
      let loc = document.querySelector(".loc");
      loc.textContent = "Koordinatalar: " + answer.loc;

      // Update Timezone
      let timezone = document.querySelector(".timezone");
      timezone.textContent = "Vaqt zonasi: " + answer.timezone;

      // Get Latitude and Longitude from 'loc' and split
      let [lat, lon] = answer.loc.split(",");

      // Select the .map container
      let map = document.querySelector(".map");

      // Clear any existing iframe content
      map.innerHTML = "";

      // Create a new iframe element
      let iframe = document.createElement("iframe");
      iframe.width = "400";
      iframe.height = "300";
      iframe.frameBorder = "0";
      iframe.style.border = "0";
      iframe.allowFullscreen = true;
      iframe.loading = "lazy";

      // Set the src of the iframe to the Google Maps embed URL
      iframe.src = `https://www.google.com/maps?q=${lat},${lon}&output=embed`;

      // Append the iframe to the map container
      map.appendChild(iframe);
    } catch (e) {
      console.error(e);
    } finally {
      console.log("Data fetched successfully.");
    }
  };

  data();
});
