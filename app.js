// nav
function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
  }
// shop
      const basketCounter = document.getElementById("basket-counter");
      let itemCount = 0;
      const buyButtons = document.querySelectorAll(".buy-button");
      buyButtons.forEach(button => {
          button.addEventListener("click", () => {
              itemCount++;
              basketCounter.textContent = itemCount;
          });
      });

    //   Booking
    document.getElementById('booking-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const selectedWorkshop = document.querySelector('input[name="workshop"]:checked');
        if (!selectedWorkshop) {
            alert('Please select a workshop.');
            return;
        }
      alert(`You have selected: ${selectedWorkshop.value}`);
        this.reset();
    });

        // Feedback
        const form = document.getElementById("contact-form-reviews");
        const submitButton = form.querySelector(".button-form");
    
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const firstName = document.getElementById("first-name-reviews").value;
            const lastName = document.getElementById("last-name-reviews").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
            alert(`Thank you for your feedback, ${firstName} ${lastName}!\nYour message: "${message}" has been sent.`);
            form.reset();
        });

    // About
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Your data has been sent!');
        this.reset();
      });

