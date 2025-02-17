<script>
    document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault();

      var formData = new FormData(this);
      
      fetch("AKfycbxv_A1qDk4WXBDsZHhwKrfDTwg4qTafBqvgn0uLV24", {
        method: "POST",
        body: formData
      })
      .then(response => response.text())
      .then(result => {
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset();  // Reset the form
      })
      .catch(error => {
        alert("There was an error submitting the form.");
      });
    });
  </script>
