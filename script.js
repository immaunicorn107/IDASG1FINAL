document.addEventListener('DOMContentLoaded', function () {
    // JavaScript code for smooth scrolling and navbar behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    let prevScrollPos = window.pageYOffset;
    const navbar = document.querySelector('nav');

    window.addEventListener('scroll', function () {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            navbar.classList.add('show');
        } else {
            navbar.classList.remove('show');
        }

        prevScrollPos = currentScrollPos;
    });

    // Initial check for visibility
    if (window.pageYOffset > 50) {
        navbar.classList.add('show');
    }

    // JavaScript code for toggling "Read More" sections
    var readMoreBtns = document.querySelectorAll('.read-more-btn');

    readMoreBtns.forEach(function (readMoreBtn) {
        var additionalInfo = readMoreBtn.previousElementSibling;

        readMoreBtn.addEventListener('click', function () {
            if (additionalInfo.style.display === 'none' || additionalInfo.style.display === '') {
                additionalInfo.style.display = 'block';
                readMoreBtn.textContent = 'Read Less';
            } else {
                additionalInfo.style.display = 'none';
                readMoreBtn.textContent = 'Read More';
            }
        });
    });

    // JavaScript code for filtering music items
    const musicFilter = document.getElementById('music-filter');
    const musicItems = document.querySelectorAll('.music-item');

    musicFilter.addEventListener('change', function () {
        const selectedCategory = musicFilter.value;

        musicItems.forEach(item => {
            if (selectedCategory === 'all' || item.dataset.category === selectedCategory) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
