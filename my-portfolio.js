function showPage(pageId) {
    // Get all content pages
    const pages = document.querySelectorAll('.main, .blogs, .projects');

    // Hide all pages
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // Show the selected page
    document.getElementById(pageId).style.display = 'block';
}

// Optionally, show the first page on initial load
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});