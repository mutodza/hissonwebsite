
// Loading Spinner
window.addEventListener('load', () => {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) {
        spinner.style.display = 'none'; // Ensure the spinner is hidden after loading
    }
});


// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}



// Carousel Navigation
let currentSlide = 0;
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

