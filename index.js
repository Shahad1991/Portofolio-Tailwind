
const carousel = document.getElementById("testimonial-carousel");
        const prevBtn = document.getElementById("prev");
        const nextBtn = document.getElementById("next");
        let index = 0;
    
        function updateCarousel() {
            const slideWidth = carousel.children[0].clientWidth;
            carousel.style.transform = `translateX(-${index * slideWidth}px)`;
        }
    
        nextBtn.addEventListener("click", () => {
            if (index < carousel.children.length - 1) {
                index++;
            } else {
                index = 0; // Gå tilbage til første slide
            }
            updateCarousel();
        });
    
        prevBtn.addEventListener("click", () => {
            if (index > 0) {
                index--;
            } else {
                index = carousel.children.length - 1; // Gå til sidste slide
            }
            updateCarousel();
        });
    
        // Automatisk slide (valgfrit)
        setInterval(() => {
            nextBtn.click();
        }, 5000); // Skift slide hver 5. sekund

       // Function to handle filter selection
       function filterSelection(category, element) {
        var projects = document.getElementsByClassName('project-container');
        for (var i = 0; i < projects.length; i++) {
            if (category === 'all' || projects[i].classList.contains(category)) {
                projects[i].style.display = 'block';
            } else {
                projects[i].style.display = 'none';
            }
        }
        var buttons = document.querySelectorAll('.filter-btn');
        buttons.forEach(function(btn) {
            btn.classList.remove('bg-blue-500', 'text-white');
            btn.classList.add('bg-transparent', 'text-gray-300');
        });
        element.classList.add('bg-blue-500', 'text-white');
        element.classList.remove('bg-transparent', 'text-gray-300');
    }