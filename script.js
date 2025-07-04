// Show body when window loads
window.addEventListener('load', function () {
    document.body.style.display = 'block';
    addFooter();
    // addoptions();
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
            <a href="https://www.instagram.com/wavestream.music.studio/" target="_blank">Instagram</a>
            <a href="Privacy-Policy.html">Privacy Policy</a>
        </div>
        <div class="copyright">&copy; 2025 WaveStream Music Studio. All rights reserved.</div>`;
    document.body.appendChild(footer);
}


function addoptions() {
    var nav = document.querySelector('nav');

    // Create options container
    var optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';
    optionsDiv.innerHTML = `
        <a href="#">option 1</a>
        <a href="#">option 2</a>
        <a href="#">option 3</a>
    `;

    // Create search bar
    var searchBar = document.createElement('div');
    searchBar.className = 'search-bar';
    searchBar.innerHTML = `
        <input type="text" id="searchQuery" placeholder="Search Here!">
        <button onclick="performSearch()">Search</button>
    `;

    // Create mobile menu container
    var mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu-container';
    mobileMenu.innerHTML = `
        <div class="mobile-menu-icon" onclick="toggleMobileMenu()">&#9776;</div>
        <div class="mobile-options">
            <a onclick="scrollm(this)" id="tutorial">Tutorials</a>
            <a href="#">option 1</a>
            <a href="#">option 2</a>
            <a href="#">option 3</a>
        </div>
    `;

    // Append to nav
    nav.appendChild(optionsDiv);
    nav.appendChild(searchBar);
    nav.appendChild(mobileMenu);
}

