<script>
    document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault();

      var formData = new FormData(this);
      
      fetch("https://script.google.com/d/1ZQqpR-bn6DegNrdQn72tnpo6FdZC34byf1gxU_2IO9j9qqdb4fAZVErr/edit?usp=sharing", {
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
