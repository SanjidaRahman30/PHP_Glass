/**
 * Global Reactive State Management for PHP Glass Website
 */

class PHPStateManager {
  constructor() {
    this.state = {
      activePage: 'home',
      reflectiveColor: PHP_DATA.reflectiveColors[0], // Default Ocean Blue
      decorativeSwatch: PHP_DATA.decorativeSwatches[0], // Default Fluted Reeded
      selectedAluminiumFinish: 'silver',
      modalProduct: null,
      isMenuOpen: false,
      prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    };

    this.listeners = {
      reflectiveColorChange: [],
      decorativeSwatchChange: [],
      pageChange: [],
      modalChange: []
    };

    // Listen for OS motion preference changes
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
      this.state.prefersReducedMotion = e.matches;
    });
  }

  // Set Reflective Glass Color (Section 2 -> Section 4 sync)
  setReflectiveColor(colorId) {
    const color = PHP_DATA.reflectiveColors.find(c => c.id === colorId);
    if (!color) return;

    this.state.reflectiveColor = color;
    this.notify('reflectiveColorChange', color);
  }

  // Set Decorative Glass Texture (Section 3 -> Section 4 sync)
  setDecorativeSwatch(swatchId) {
    const swatch = PHP_DATA.decorativeSwatches.find(s => s.id === swatchId);
    if (!swatch) return;

    this.state.decorativeSwatch = swatch;
    this.notify('decorativeSwatchChange', swatch);
  }

  // Set Current Page Route
  setActivePage(pageId) {
    this.state.activePage = pageId;
    this.notify('pageChange', pageId);
  }

  // Open Modal with Product Info
  openModal(productData) {
    this.state.modalProduct = productData;
    this.notify('modalChange', productData);
  }

  // Close Modal
  closeModal() {
    this.state.modalProduct = null;
    this.notify('modalChange', null);
  }

  // Subscribe to changes
  subscribe(event, callback) {
    if (this.listeners[event]) {
      this.listeners[event].push(callback);
    }
  }

  // Notify listeners
  notify(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(cb => {
        try {
          cb(data);
        } catch (err) {
          console.error(`Error in state listener for ${event}:`, err);
        }
      });
    }
  }
}

// Instantiate global state
window.phpState = new PHPStateManager();
