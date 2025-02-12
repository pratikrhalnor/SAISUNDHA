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
          const productDetails = this.nextElementSibling; // the details section
          productDetails.style.display = (productDetails.style.display === 'block') ? 'none' : 'block';

          // Toggle button active state
          this.classList.toggle('active');
      });
  });

  // Tab switching for product categories (Steel, Cement, Sheets, Hardware, etc.)
  const productTabs = document.querySelectorAll('.subcategory-tab');
  const productDetailsSections = document.querySelectorAll('.category-details');

  productTabs.forEach(tab => {
      tab.addEventListener('click', function () {
          // Remove active class from all product tabs
          productTabs.forEach(tab => tab.classList.remove('active'));
          // Hide all product details sections
          productDetailsSections.forEach(section => section.classList.remove('active'));

          // Add active class to the clicked subcategory tab
          this.classList.add('active');

          // Show the corresponding product details section
          const targetClass = this.getAttribute('data-target');
          document.querySelector(`.category-details.${targetClass}`).classList.add('active');
      });
  });

});
