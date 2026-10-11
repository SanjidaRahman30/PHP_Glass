/**
 * Single-Page-Application Router for PHP Glass Website
 */

class PHPRouter {
  constructor() {
    this.routes = {
      '': 'view-home',
      '#home': 'view-home',
      '#glass': 'view-glass',
      '#aluminium': 'view-aluminium',
      '#special-products': 'view-special-products',
      '#about': 'view-about',
      '#contact': 'view-contact'
    };

    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('DOMContentLoaded', () => this.handleRoute());
  }

  handleRoute() {
    const hash = window.location.hash.toLowerCase();
    const targetViewId = this.routes[hash] || 'view-home';

    // Hide all views
    document.querySelectorAll('.page-view').forEach(view => {
      view.classList.remove('active');
    });

    // Show target view
    const targetView = document.getElementById(targetViewId);
    if (targetView) {
      targetView.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update active nav links
    const currentHash = hash === '' ? '#home' : hash;
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('href') === currentHash) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Close mobile menu if open
    const mobileMenu = document.getElementById('nav-menu');
    if (mobileMenu) mobileMenu.classList.remove('open');
  }

  navigate(hash) {
    window.location.hash = hash;
  }
}

window.phpRouter = new PHPRouter();
