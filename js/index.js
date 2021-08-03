// Your code goes here

const logoHeading = document.querySelector('.logo-heading');

// Change site title to red on mouseover, return to black on mouseout
logoHeading.addEventListener('mouseover', (event) => {
    event.target.style = 'color: red';
});
logoHeading.addEventListener('mouseout', (event) => {
    event.target.style = 'color: black';
});

// Hide website when Escape key is pressed
document.addEventListener('keydown', (event) => {
    event.target.style = 'display: none';
});