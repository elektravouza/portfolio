// Συναρτήσεις ελέγχου για το About View
function openAbout() {
    closeProject(); // Κλείνει το project αν είναι ανοιχτό
    const aboutView = document.getElementById('about-view');
    aboutView.style.display = 'block';
    aboutView.scrollTo(0,0);
    gsap.to(aboutView, { opacity: 1, duration: 0.5 });
    window.location.hash = 'about';
}

function closeAbout() {
    const aboutView = document.getElementById('about-view');
    gsap.to(aboutView, { opacity: 0, duration: 0.4, onComplete: () => {
        aboutView.style.display = 'none';
    }});
}

// Ενημέρωση του hash change για να πιάνει και το About
window.onhashchange = () => {
    if (!window.location.hash) {
        closeProject();
        closeAbout();
    }
};
