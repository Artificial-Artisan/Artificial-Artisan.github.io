document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');

    menuToggle.addEventListener('change', function() {
        if (menuToggle.checked) {
            overlay.style.display = 'block';
            nav.style.left = '0';
        } else {
            overlay.style.display = 'none';
            nav.style.left = '-200px'; // Move nav off screen
        }
    });

    overlay.addEventListener('click', function() {
        menuToggle.checked = false;
        overlay.style.display = 'none';
        nav.style.left = '-200px'; // Move nav off screen
    });
});

class SiteMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>
          <ul>
            <li><a href="ArtificialArtisan.html">Home</a></li>
            <li><a href="Services.html">Services</a></li>
            <li><a href="Contact.html">Contact</a></li>
            <li><a href="PurchasesCryptocurrency.html">Crypto Payments</a></li>
          </ul>
      </nav>
    `;
  }
}

customElements.define("site-menu", SiteMenu);