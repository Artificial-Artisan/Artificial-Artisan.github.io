const sparkles = ['✦', '✧', '★', '✵', '✸', '⋆', '✺', '❋'];
const colors = ['#ff00cc', '#cc00ff', '#8000ff', '#ff66ff', '#00ccff', '#ff0099'];
let colorIndex = 0;

document.addEventListener('mousemove', function(e) {
    var dot = document.createElement('div');
    dot.classList.add('cursor-dot');

    // Random sparkle icon
    dot.dataset.sparkle = sparkles[Math.floor(Math.random() * sparkles.length)];

    // Alternating color set as a CSS variable
    const color = colors[colorIndex % colors.length];
    dot.style.setProperty('--sparkle-color', color);
    colorIndex++;

    dot.style.setProperty('--dx', (Math.random() * 40 - 20) + 'px');
    dot.style.setProperty('--dy', (Math.random() * 40 - 20) + 'px');

    dot.style.left = e.pageX + 'px';
    dot.style.top = e.pageY + 'px';

    // Append to the cursor trail container
    document.getElementById('cursor-trail').appendChild(dot);

    // Remove dot after a short delay
    setTimeout(function() {
        dot.style.opacity = '0';
        setTimeout(function() {
            dot.remove();
        }, 1000);
    }, 500);
});