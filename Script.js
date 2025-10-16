
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const navLinks = mobileMenu.querySelectorAll('a');

        // Toggle menu on button click
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when a link is clicked (for better UX on mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
   

        const webbtn = document.querySelector(".web");
        const graphicbtn = document.querySelector(".graphic");
        const webwork = document.querySelector(".webwork");
        const posterwork = document.querySelector(".posterwork");
            
        // Initial state
        posterwork.classList.add("hidden");
        webwork.classList.remove("hidden");
        webbtn.classList.add("bg-blue-600", "text-white");
            
        webbtn.addEventListener("click", () => {
          webwork.classList.remove("hidden");
          posterwork.classList.add("hidden");
        
          webbtn.classList.add("bg-blue-600", "text-white");
          graphicbtn.classList.remove("bg-blue-600", "text-white");
        });
        
        graphicbtn.addEventListener("click", () => {
          posterwork.classList.remove("hidden");
          webwork.classList.add("hidden");
        
          graphicbtn.classList.add("bg-blue-600", "text-white");
          webbtn.classList.remove("bg-blue-600", "text-white");
        });
