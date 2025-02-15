document.addEventListener('DOMContentLoaded', function () {
  // Tab switching for main navigation (Home, About Us, Products, etc.)
  const tabs = document.querySelectorAll('nav ul li a');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
      tab.addEventListener('click', function (event) {
          event.preventDefault();

          // Remove active class from all tabs
          tabs.forEach(tab => tab.classList.remove('active'));
          tabContents.forEach(content => content.classList.remove('active'));

          // Add active class to the clicked tab and corresponding content
          tab.classList.add('active');
          const tabId = tab.getAttribute('data-tab');
          document.getElementById(tabId).classList.add('active');
      });
  });

  // Toggle product details (within Products section)
  const productToggles = document.querySelectorAll('.product-toggle');

  productToggles.forEach(button => {
      button.addEventListener('click', function () {
          const productDetails = this.nextElementSibling;
          productDetails.style.display = (productDetails.style.display === 'block') ? 'none' : 'block';

          // Toggle button active state
          this.classList.toggle('active');
      });
  });

  // Tab switching for product categories (Steel, Cement, Sheets, Hardware, etc.)
  const productTabs = document.querySelectorAll('.product-tab');
  const productDetailsSections = document.querySelectorAll('.product-details');

  productTabs.forEach(tab => {
      tab.addEventListener('click', function () {
          // Remove active class from all product tabs
          productTabs.forEach(tab => tab.classList.remove('active'));
          productDetailsSections.forEach(section => section.classList.remove('active'));

          // Add active class to the clicked tab and show corresponding details
          tab.classList.add('active');
          const targetClass = this.getAttribute('data-target');
          document.querySelector(`.product-details.${targetClass}`).classList.add('active');
      });
  });

  // Make sure Home, About Us, and Product buttons show corresponding content
  const sectionTabs = document.querySelectorAll('[data-tab]');
  sectionTabs.forEach(tab => {
      tab.addEventListener('click', function () {
          // Remove active class from all sections
          sectionTabs.forEach(tab => tab.classList.remove('active'));
          tabContents.forEach(content => content.classList.remove('active'));

          // Add active class to the clicked tab and show the corresponding section
          tab.classList.add('active');
          const sectionId = tab.getAttribute('data-tab');
          document.getElementById(sectionId).classList.add('active');
      });
  });

  // **UPDATED FUNCTIONALITY: OPEN SUBCATEGORY PAGE IN SAME TAB**
  const galleryItems = document.querySelectorAll(".gallery-item");
  galleryItems.forEach(item => {
      item.addEventListener("click", function () {
          let targetPage = this.getAttribute("data-target-page");

          // Redirect to the subcategory page in the same tab
          if (targetPage) {
              window.location.href = targetPage;
          }
      });
  });
});

