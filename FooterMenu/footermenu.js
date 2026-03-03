class FooterMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <!-- Add your footer content here -->
        <p>&copy; 2026 Artificial Artisan. All rights reserved.</p>
        
        <!-- Legal Information -->
        <ul class="legal">
            <li><a href="PrivacyPolicy.html">Privacy Policy</a></li>
            <li><a href="TermsOfService.html">Terms of Service</a></li>
        </ul>
    </footer>
    `;
  }
}

customElements.define("footer-menu", FooterMenu);