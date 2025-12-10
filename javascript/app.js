let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Filter products
function productsFilter() {

    const select = document.getElementById('filter-products'); // fixed ID
    const clearBtn = document.getElementById('product-clear');
    const cards = document.querySelectorAll('#product-grid .product-card'); // fixed class

    // Function to update display based on filter
    function filterProducts() {
        const choice = select.value;

        cards.forEach(card => {
            const category = card.dataset.products; // fixed dataset
            // Show all cards, or only those that match the selected category
            if (choice === "" || category === choice) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    // Run filter when dropdown changes
    select.addEventListener('change', filterProducts);

    // Clear filter button
    if (clearBtn) {
        clearBtn.addEventListener('click', function () {
            select.value = "";
            filterProducts();
        });
    }

    // Initial filter
    filterProducts();
}

// Run when page loads
document.addEventListener('DOMContentLoaded', function () {
    productsFilter();
});

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // prevent page reload

        downloadFormData(form);

        setTimeout(() => {
            window.location.href = "C:\Users\danie\OneDrive\Desktop\Assigment 2"
        }, 300); 
    });

    function downloadFormData(form) {
        const formData = new FormData(form);
        let text = "";

        for (let [key, value] of formData.entries()) {
            text += `${key}: ${value}\n`;
        }

        console.log("Saving data:", text);

        const blob = new Blob([text], { type: "text/plain" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "form-data.txt";
        document.body.appendChild(a);

        a.click(); // triggers download
        a.remove();

        URL.revokeObjectURL(url);
    }

});
