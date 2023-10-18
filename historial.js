document.addEventListener("DOMContentLoaded", function () {
    const historialList = document.getElementById("historial-list");
  
    const historial = JSON.parse(localStorage.getItem("historial")) || [];
  
    historial.forEach(function (personaje) {
      const listItem = document.createElement("li");
      listItem.textContent = personaje.name;
      historialList.appendChild(listItem);
    });
  });
  