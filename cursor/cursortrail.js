document.addEventListener('mousemove', function(e) {
    // Create a new dot element
    var dot = document.createElement('div');
    dot.classList.add('cursor-dot');
    
    // Set dot position to current mouse position
    dot.style.left = e.pageX + 'px';
    dot.style.top = e.pageY + 'px';

    // Append dot to the cursor trail container
    document.getElementById('cursor-trail').appendChild(dot);
    
    // Remove dot after a short delay
    setTimeout(function() {
        dot.style.opacity = '0';
        setTimeout(function() {
            dot.remove();
        }, 1000);
    }, 500);
});