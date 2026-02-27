
function scrollToContact() {
    document.getElementById("contacto").scrollIntoView({
        behavior: "smooth"
});
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.getElementById('overlay');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
}

function closeMenu() {
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.getElementById('overlay');
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
}

// Cerrar menú al hacer clic fuera
document.addEventListener('click', function(event) {
const nav = document.querySelector('nav');
const menuToggle = document.querySelector('.menu-toggle');
const overlay = document.getElementById('overlay');

if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
    closeMenu();
}
});

function scrollToTop() {
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
}

// Mostrar/ocultar botón de scroll to top
window.addEventListener('scroll', function() {
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add('show');
} else {
    scrollToTopBtn.classList.remove('show');
}
});

const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", function(e) {
e.preventDefault();

toast.classList.add("show");

setTimeout(() => {
    toast.classList.remove("show");
    form.reset();
}, 2500);
});

// Favicon y título dinámico
const originalTitle = document.title;
const cryingFaceFavicon = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>😢</text></svg>";
const originalFavicon = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚗</text></svg>";

let titleInterval;

document.addEventListener('visibilitychange', function() {
    const favicon = document.getElementById('favicon');
    if (document.hidden) {
        favicon.href = cryingFaceFavicon;
        titleInterval = setInterval(() => {
            document.title = document.title === originalTitle ? "¡No te vayas!" : originalTitle;
        }, 1000);
    } else {
        favicon.href = originalFavicon;
        document.title = originalTitle;
        clearInterval(titleInterval);
    }
});
function scrollToContact() {
    document.getElementById("contacto").scrollIntoView({
        behavior: "smooth"
    });
    }

    const form = document.getElementById("contactForm");
    const toast = document.getElementById("toast");

    form.addEventListener("submit", function(e) {
    e.preventDefault();

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
        form.reset();
    }, 2500);
    });

    const textarea = document.getElementById("mensaje");
    const contador = document.getElementById("caracteresRestantes");
    const maxCaracteres = 200;
    
    textarea.addEventListener("input", function() {
    
      // 🔢 Calcular caracteres restantes
    const longitudActual = this.value.length;
    const restantes = maxCaracteres - longitudActual;

    contador.textContent = restantes;
    
      // 📈 Auto expandir hacia abajo
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
    
      // 📜 Activar scroll si supera altura máxima
    if (this.scrollHeight > 250) {
        this.style.overflowY = "scroll";
    } else {
        this.style.overflowY = "hidden";
    }
    });
    
