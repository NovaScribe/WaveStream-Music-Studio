// Hide body until fully loaded, then show
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.display = 'none';
});
window.addEventListener('load', function() {
    document.body.style.display  = 'block';
});

function performSearch() {
    var searchQuery = document.getElementById('searchQuery').value;
    var website = "site:novascribe.github.io";
    var searchURL = "https://www.google.com/search?q=" + encodeURIComponent(website + " " + searchQuery);
    window.open(searchURL, '_blank');
}