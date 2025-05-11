document.addEventListener("DOMContentLoaded", function () {
    // Initialize the first page to be visible
    showPage(1);
});

function showPage(pageNumber) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show the specific page
    const currentPage = document.getElementById(`page-${pageNumber}`);
    currentPage.classList.add('active');
}

function nextPage(currentPage) {
    // Move to the next page
    showPage(currentPage + 1);
}
