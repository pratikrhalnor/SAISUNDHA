document.addEventListener('DOMContentLoaded', function () {
    let previousTab = null; // Store the previous tab before switching

    // === Main Navigation (Home, About Us, Products, Contact Us) ===
    const tabs = document.querySelectorAll('nav ul li a');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();

            // Store previous tab before switching
            if (document.querySelector('.tab-content.active')) {
                previousTab = document.querySelector('.tab-content.active').id;
            }

            // Remove active class from all tabs and sections
            tabs.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Activate the clicked tab and corresponding section
            tab.classList.add('active');
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // === Product Category Switching (Steel, Cement, Sheets, Hardware) ===
    const productTabs = document.querySelectorAll('.product-tab');
    const productDetailsSections = document.querySelectorAll('.product-details');

    productTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remove active class from all product tabs and sections
            productTabs.forEach(tab => tab.classList.remove('active'));
            productDetailsSections.forEach(section => section.classList.remove('active'));

            // Activate clicked tab and show corresponding details
            tab.classList.add('active');
            const targetClass = this.getAttribute('data-target');
            document.querySelector(`.product-details.${targetClass}`).classList.add('active');
        });
    });

    // === Expandable Product Details ===
    const productToggles = document.querySelectorAll('.product-toggle');

    productToggles.forEach(button => {
        button.addEventListener('click', function () {
            const productDetails = this.nextElementSibling;
            productDetails.style.display = (productDetails.style.display === 'block') ? 'none' : 'block';
            this.classList.toggle('active');
        });
    });

    // === Subcategory Navigation (Steel, Cement, etc.) ===
    const subcategories = document.querySelectorAll('.gallery-item');

    subcategories.forEach(item => {
        item.addEventListener('click', function () {
            const targetPage = this.getAttribute('data-target-page');

            // Store previous tab before navigating
            if (document.querySelector('.tab-content.active')) {
                previousTab = document.querySelector('.tab-content.active').id;
            }

            // Navigate to the subcategory page if the targetPage exists
            if (targetPage && targetPage !== "#") {
                window.location.href = targetPage;
            }
        });
    });

    // === Back Navigation Button ===
    const backButtons = document.querySelectorAll('.back-button');

    backButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (previousTab) {
                // Hide all sections
                tabContents.forEach(content => content.classList.remove('active'));

                // Show the previous section
                document.getElementById(previousTab).classList.add('active');
            }
        });
    });

    // === Ensure Sections Load Properly on Click ===
    const sectionTabs = document.querySelectorAll('[data-tab]');

    sectionTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Store previous tab before switching
            if (document.querySelector('.tab-content.active')) {
                previousTab = document.querySelector('.tab-content.active').id;
            }

            // Remove active class from all sections
            sectionTabs.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Activate the correct section
            tab.classList.add('active');
            const sectionId = tab.getAttribute('data-tab');
            document.getElementById(sectionId).classList.add('active');
        });
    });
    const footerLinks = document.querySelectorAll(".footer-links a");

    footerLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            
            let targetSection = this.getAttribute("href").split("#")[1];
            let section = document.getElementById(targetSection);

            if (section) {
                document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));
                section.classList.add("active");
                history.pushState(null, null, `#${targetSection}`);
            }
        });
    });
});
