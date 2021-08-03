const logoHeading = document.querySelector('.logo-heading');
const navLinks = document.querySelector('nav');
const headerText = document.querySelector('.intro h2')
const resizeImgContent = document.querySelector('.img-content');

// Change site title to red on mouseover, return to black on mouseout
logoHeading.addEventListener('mouseover', (event) => {
    event.target.style = 'color: red';
});
logoHeading.addEventListener('mouseover', (event) => {
    event.stopPropagation();
});
logoHeading.addEventListener('mouseout', (event) => {
    event.target.style = 'color: black';
});
logoHeading.addEventListener('mouseout', (event) => {
    event.stopPropagation();
});

// Nav links background on hover
navLinks.addEventListener('mouseover', (event) => {
    event.target.style = 'color: red';
});
navLinks.addEventListener('mouseout', (event) => {
    event.target.style = 'color: black';
});

// Change intro h2 text when doubleclicked
headerText.addEventListener('dblclick', (event) => {
    event.target.innerText = 'This bus is fuuuuun!';
});

// Hide website when Escape key is pressed
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        event.target.style = 'display: none';
    }
});

// Smaller images content with q
function q(event) {
    if (event.key === 'q') {
        Array.from(document.querySelectorAll('img')).forEach(item => item.style = 'width: 25%');
    }
}

document.addEventListener('keypress', q);

// return images with w
function w(event) {
    if (event.key === 'w') {
        Array.from(document.querySelectorAll('img')).forEach(item => item.style = 'width: 100%');
    }
}

document.addEventListener('keypress', w);

// Console.log copy/cut/paste
document.addEventListener('copy', (event) => {
    console.log('User initiated copy');
});
document.addEventListener('cut', (event) => {
    console.log('User initiated cut');
});
document.addEventListener('paste', (event) => {
    console.log('User initiated paste');
});