
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.querySelector('.mobile-menu-tablo');

  hamburgerBtn.addEventListener('click', () => {
    if(mobileMenu.style.display === 'none'){
      mobileMenu.style.display = 'block';  
    } else {
      mobileMenu.style.display = 'none';   
    }
  });


  const cityButton = document.getElementById("cityButton");
  const cityDropdown = document.getElementById("cityDropdown");

  cityButton.addEventListener("click", () => {
    const isOpen = cityDropdown.style.display === "block";
    cityDropdown.style.display = isOpen ? "none" : "block";
  });
