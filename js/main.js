// Load Footer Component
fetch('components/footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer-container").innerHTML = data;
  })
  .catch(err => console.error("Failed to load footer:", err));


  // Load Header Component
fetch('components/header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById("header-container").innerHTML = data;
  })
  .catch(err => console.error("Failed to load header:", err));
