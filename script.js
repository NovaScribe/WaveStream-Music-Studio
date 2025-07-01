// Show body when window loads
window.addEventListener('load', function () {
    document.body.style.display = 'block';
    addFooter();
});

function performSearch() {
    var searchQuery = document.getElementById('searchQuery').value;
    var website = "site:novascribe.github.io";
    var searchURL = "https://www.google.com/search?q=" + encodeURIComponent(website + " " + searchQuery);
    window.open(searchURL, '_blank');
}

// Dynamically add footer to all pages
function addFooter() {
    var footer = document.createElement('footer');
    footer.className = 'footer-vocalhub';
    footer.innerHTML = `
        <div class="footer-links">
            <a href="about.html">About</a>
            <a href="https://www.instagram.com/m_a_n_e_sh_" target="_blank">Instagram</a>
            <a href="Privacy-Policy.html">Privacy Policy</a>
        </div>
        <div class="copyright">&copy; 2025 Vocal-Hub. All rights reserved.</div>`;
    document.body.appendChild(footer);
}

