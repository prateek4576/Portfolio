// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });

    // Close mobile menu if open
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.remove('active');
}


// Mobile menu toggle
function toggleMobileMenu() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        }

// Modal functions
function openModal(imgSrc) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImage.src = imgSrc;
}


function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}


// Form submission
function submitForm(event) {
    event.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    event.target.reset();
}

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-item a').forEach(link => {
            link.addEventListener('click', () => {
                const navMenu = document.querySelector('.nav-menu');
                navMenu.classList.remove('active');
            });
        });




