// Navigation function
function startReading() {
    window.location.href = 'page1.html';
}

// Function to save poem to localStorage
function savePoem(pageNumber) {
    const poem = document.getElementById('poem').value;
    localStorage.setItem(`poem${pageNumber}`, poem);
    alert('Poem saved successfully!');
}

// Function to load saved poem
function loadPoem(pageNumber) {
    const savedPoem = localStorage.getItem(`poem${pageNumber}`);
    if (savedPoem) {
        document.getElementById('poem').value = savedPoem;
    }
}
