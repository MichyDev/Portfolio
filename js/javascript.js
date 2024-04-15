document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetUrl = this.getAttribute('href');
            console.log('Navigazione verso:', targetUrl);
        });
    });

    var socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetUrl = this.getAttribute('href');
            window.open(targetUrl);
        });
    });
});
