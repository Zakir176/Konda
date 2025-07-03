// Load the loader component
fetch('components/loader.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById("loader-container").innerHTML = data;
  });

// Hide loader after page fully loads
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const main = document.getElementById("main-content");

  if (loader && main) {
    loader.style.display = "none";
    main.style.display = "block";
  }
});
