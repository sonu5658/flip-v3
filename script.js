let currentPage = 1;
const totalPages = 4; // Update the total number of pages

function showPage(page) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById('page' + page).classList.add('active');
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

// Initialize the first page as active
showPage(currentPage);
