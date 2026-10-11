/**
 * Interactive 3D Scenes Engine for Homepage V2
 * Sections 1, 2, 3, and 4
 * Enhanced: Isolated Glass Tinting (Preserves plaza, trees, roofs, and sky)
 * Strictly adhering to PHP Glass Website Brief
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollDrivenAnimations();
  initHeroScene();
  initReflectiveBuildingSceneV2();
  initDecorativeRoomScene();
  initApartmentCutawayScene();
  preloadShadeImages();
});

/* ==========================================================================
   PRELOAD 10 REFLECTIVE SHADE IMAGES FOR INSTANT FLICKER-FREE SWITCHING
   ========================================================================== */
function preloadShadeImages() {
  if (!window.PHP_DATA || !PHP_DATA.reflectiveColors) return;
  PHP_DATA.reflectiveColors.forEach(color => {
    const img = new Image();
    img.src = `./assets/images/shades/building_${color.id}.jpg`;
  });
}

/* ==========================================================================
   SCROLL-DRIVEN ANIMATIONS (SECTIONS 1 TO 3 ONLY)
   ========================================================================== */
function initScrollDrivenAnimations() {
  if (window.phpState && window.phpState.state.prefersReducedMotion) return;

  const section1 = document.getElementById('hero-clear-glass-scene');
  const section2 = document.getElementById('section-reflective-building');
  const section3 = document.getElementById('section-decorative-room');

  // Intersection Observer for Entrance Animation
  const observerOptions = {
    threshold: [0.15, 0.4, 0.7]
  };

  const sceneObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        
        // Trigger light sweep on entry
        const sweep = entry.target.querySelector('.glass-light-sweep');
        if (sweep) {
          sweep.style.animation = 'none';
          void sweep.offsetWidth; // Trigger reflow
          sweep.style.animation = 'sweepAnimation 4s cubic-bezier(0.4, 0, 0.2, 1) 1';
        }
      }
    });
  }, observerOptions);

  if (section1) sceneObserver.observe(section1);
  if (section2) sceneObserver.observe(section2);
  if (section3) sceneObserver.observe(section3);

  // Scroll Progress Parallax for Sticky Hero
  window.addEventListener('scroll', () => {
    if (!section1) return;
    const rect = section1.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
      const slab = document.getElementById('hero-glass-slab');
      const panel = document.querySelector('.hero-frosted-panel');
      
      if (slab) {
        const translateY = (1 - progress) * 30;
        const scale = 0.96 + progress * 0.04;
        slab.style.transform = `translateY(${translateY}px) scale(${scale})`;
      }
      if (panel) {
        const opacity = Math.min(1, progress * 1.5);
        panel.style.opacity = opacity;
      }
    }
  }, { passive: true });
}

/* ==========================================================================
   SECTION 1: CLEAR GLASS HERO
   ========================================================================== */
function initHeroScene() {
  const glassCard = document.getElementById('hero-glass-slab');
  if (!glassCard) return;

  // Gentle 3D Tilt Effect on Mouse Move
  const container = document.querySelector('.hero-visual-stage');
  if (container && window.phpState && !window.phpState.state.prefersReducedMotion) {
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / rect.height) * 10;
      const rotateY = (x / rect.width) * 10;
      glassCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    container.addEventListener('mouseleave', () => {
      glassCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }
}

/* ==========================================================================
   SECTION 2: REFLECTIVE GLASS BUILDING SCENE (V2: ISOLATED GLASS TINTING)
   ========================================================================== */
function initReflectiveBuildingSceneV2() {
  const chipsContainer = document.getElementById('reflective-chips-container');
  const baseImg = document.getElementById('building-base-img');
  const transitionImg = document.getElementById('building-transition-img');
  const glassOverlay = document.getElementById('building-glass-tint');
  const activeDot = document.getElementById('building-active-dot');
  const activeName = document.getElementById('building-active-name');
  const heatReductionEl = document.getElementById('b-heat-val');
  const glareReductionEl = document.getElementById('b-glare-val');

  if (!chipsContainer) return;

  // Render exactly 10 Colour Chips
  chipsContainer.innerHTML = '';
  PHP_DATA.reflectiveColors.forEach((color, idx) => {
    const chipBtn = document.createElement('button');
    chipBtn.className = `color-chip-btn ${idx === 0 ? 'active' : ''}`;
    chipBtn.setAttribute('data-color-id', color.id);
    chipBtn.setAttribute('aria-label', `Select ${color.name} reflective glass`);
    
    chipBtn.innerHTML = `
      <div class="chip-circle" style="background-color: ${color.hex};"></div>
      <span class="chip-label">${color.name}</span>
    `;

    chipBtn.addEventListener('click', () => {
      document.querySelectorAll('.color-chip-btn').forEach(b => b.classList.remove('active'));
      chipBtn.classList.add('active');

      // Update Global State
      window.phpState.setReflectiveColor(color.id);
    });

    chipsContainer.appendChild(chipBtn);
  });

  let transitionTimer = null;

  // Listen to State Changes (300-400ms transition on building glass only)
  window.phpState.subscribe('reflectiveColorChange', (color) => {
    const targetSrc = `./assets/images/shades/building_${color.id}.jpg`;

    // 1. Cross-fade between shade images
    if (transitionImg && baseImg) {
      if (transitionTimer) clearTimeout(transitionTimer);

      transitionImg.src = targetSrc;
      transitionImg.style.opacity = '1';

      transitionTimer = setTimeout(() => {
        baseImg.src = targetSrc;
        transitionImg.style.opacity = '0';
      }, 350);
    } else if (baseImg) {
      baseImg.src = targetSrc;
    }

    // 2. Specular glass sheen tinted strictly inside glass mask
    if (glassOverlay) {
      glassOverlay.style.transition = 'background-color 350ms cubic-bezier(0.4, 0, 0.2, 1), opacity 350ms ease';
      glassOverlay.style.backgroundColor = color.hex;
      glassOverlay.style.opacity = '0.35';
    }

    // 3. UI details
    if (activeDot) activeDot.style.backgroundColor = color.hex;
    if (activeName) activeName.textContent = color.name;
    if (heatReductionEl) heatReductionEl.textContent = color.heatReduction;
    if (glareReductionEl) glareReductionEl.textContent = color.glareReduction;
  });

  // Set initial state
  const initialColor = PHP_DATA.reflectiveColors[0];
  if (baseImg) baseImg.src = `./assets/images/shades/building_${initialColor.id}.jpg`;
  if (glassOverlay) glassOverlay.style.backgroundColor = initialColor.hex;
  if (activeDot) activeDot.style.backgroundColor = initialColor.hex;
  if (activeName) activeName.textContent = initialColor.name;
  if (heatReductionEl) heatReductionEl.textContent = initialColor.heatReduction;
  if (glareReductionEl) glareReductionEl.textContent = initialColor.glareReduction;
}

/* ==========================================================================
   SECTION 3: DECORATIVE GLASS ROOM SCENE (7 SWATCHES & 3-PANEL WALL)
   ========================================================================== */
function initDecorativeRoomScene() {
  const swatchesContainer = document.getElementById('decorative-swatches-container');
  const wallOverlay = document.getElementById('room-decorative-wall');
  const activeName = document.getElementById('room-active-texture-name');
  const activeDesc = document.getElementById('room-active-texture-desc');

  if (!swatchesContainer) return;

  // Render 7 Decorative Swatches
  swatchesContainer.innerHTML = '';
  PHP_DATA.decorativeSwatches.forEach((swatch, idx) => {
    const swatchBtn = document.createElement('button');
    swatchBtn.className = `swatch-btn ${idx === 0 ? 'active' : ''}`;
    swatchBtn.setAttribute('data-swatch-id', swatch.id);
    swatchBtn.setAttribute('aria-label', `Select ${swatch.name} decorative glass texture`);

    swatchBtn.innerHTML = `
      <div class="swatch-thumb" style="background: ${swatch.pattern}, ${swatch.previewBg};"></div>
      <span class="swatch-title">${swatch.name}</span>
    `;

    swatchBtn.addEventListener('click', () => {
      document.querySelectorAll('.swatch-btn').forEach(b => b.classList.remove('active'));
      swatchBtn.classList.add('active');

      // Update Global State (smoothly syncs to Section 4)
      window.phpState.setDecorativeSwatch(swatch.id);
    });

    swatchesContainer.appendChild(swatchBtn);
  });

  // Listen to State Changes (300-400ms transition on all 3 panels)
  window.phpState.subscribe('decorativeSwatchChange', (swatch) => {
    if (wallOverlay) {
      wallOverlay.style.transition = 'all 350ms cubic-bezier(0.4, 0, 0.2, 1)';
      wallOverlay.style.background = `${swatch.pattern}, ${swatch.previewBg}`;
      wallOverlay.style.opacity = '0.55';
    }
    if (activeName) activeName.textContent = swatch.name;
    if (activeDesc) activeDesc.textContent = swatch.desc;
  });

  // Trigger initial swatch
  const initialSwatch = PHP_DATA.decorativeSwatches[0];
  if (wallOverlay) wallOverlay.style.background = `${initialSwatch.pattern}, ${initialSwatch.previewBg}`;
  if (activeName) activeName.textContent = initialSwatch.name;
  if (activeDesc) activeDesc.textContent = initialSwatch.desc;
}

/* ==========================================================================
   SECTION 4: APARTMENT CUTAWAY (LEADER LINES & DYNAMIC SYNC)
   ========================================================================== */
function initApartmentCutawayScene() {
  const stage = document.getElementById('apartment-interactive-stage');
  const bedroomSyncName = document.getElementById('apt-sync-reflective-name');
  const diningSyncName = document.getElementById('apt-sync-decorative-name');
  const bedroomWindowZone = document.getElementById('apt-bedroom-window-zone');
  const diningWallZone = document.getElementById('apt-dining-wall-zone');

  if (!stage) return;

  const pins = [
    {
      id: 'clear-glass',
      label: 'PHP Clear Glass',
      zone: 'Living Room Windows',
      pinTop: '55%',
      pinLeft: '18%',
      targetX: '22%',
      targetY: '48%',
      isAmber: false,
      productId: 'clear',
      route: '#glass'
    },
    {
      id: 'decorative-glass',
      label: 'PHP Decorative Glass',
      zone: 'Dining Feature Wall',
      pinTop: '46%',
      pinLeft: '40%',
      targetX: '41%',
      targetY: '38%',
      isAmber: true,
      hasDynamicTag: true,
      productId: 'decorative',
      route: '#glass'
    },
    {
      id: 'gas-stove',
      label: 'PHP Gas Stove',
      zone: 'Kitchen Cooktop Island',
      pinTop: '62%',
      pinLeft: '58%',
      targetX: '57%',
      targetY: '58%',
      isAmber: false,
      productId: 'gasStove',
      route: '#special-products'
    },
    {
      id: 'reflective-glass',
      label: 'PHP Reflective Glass',
      zone: 'Master Bedroom Windows',
      pinTop: '30%',
      pinLeft: '84%',
      targetX: '84%',
      targetY: '36%',
      isAmber: true,
      hasDynamicTag: true,
      productId: 'reflective',
      route: '#glass'
    },
    {
      id: 'mirror',
      label: 'PHP Mirror',
      zone: 'Master Bedroom Vanity Mirror',
      pinTop: '68%',
      pinLeft: '76%',
      targetX: '76%',
      targetY: '62%',
      isAmber: false,
      productId: 'mirror',
      route: '#glass'
    },
    {
      id: 'door-living',
      label: 'PHP Door',
      zone: 'Living Room Partition Door',
      pinTop: '43%',
      pinLeft: '71%',
      targetX: '71%',
      targetY: '46%',
      isAmber: false,
      productId: 'door',
      route: '#special-products'
    },
    {
      id: 'door-master',
      label: 'PHP Door',
      zone: 'Master En-Suite Glass Door',
      pinTop: '36%',
      pinLeft: '78%',
      targetX: '78%',
      targetY: '40%',
      isAmber: false,
      productId: 'door',
      route: '#special-products'
    }
  ];

  // SVG Leader Lines Container
  const svgLines = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgLines.setAttribute('class', 'apartment-leader-svg');
  svgLines.style.position = 'absolute';
  svgLines.style.top = '0';
  svgLines.style.left = '0';
  svgLines.style.width = '100%';
  svgLines.style.height = '100%';
  svgLines.style.pointerEvents = 'none';
  svgLines.style.zIndex = '15';

  stage.appendChild(svgLines);

  // Render Hotspot Pins
  pins.forEach(pin => {
    const pinEl = document.createElement('div');
    pinEl.className = `product-pin ${pin.isAmber ? 'amber-pill' : ''}`;
    pinEl.style.top = pin.pinTop;
    pinEl.style.left = pin.pinLeft;
    pinEl.setAttribute('data-pin-id', pin.id);
    pinEl.setAttribute('title', `Click to explore ${pin.label} (${pin.zone})`);

    pinEl.innerHTML = `
      <div class="pin-pill">
        <span class="pin-dot"></span>
        <span>${pin.label}</span>
        ${pin.hasDynamicTag ? '<span class="dynamic-sync-indicator">Live Sync</span>' : ''}
      </div>
    `;

    pinEl.addEventListener('click', (e) => {
      e.stopPropagation();
      handlePinClick(pin);
    });

    stage.appendChild(pinEl);
  });

  // State Sync: Listen for Reflective Color Changes (Section 2 -> Section 4)
  window.phpState.subscribe('reflectiveColorChange', (color) => {
    if (bedroomSyncName) bedroomSyncName.textContent = color.name;
    if (bedroomWindowZone) {
      bedroomWindowZone.style.transition = 'all 350ms cubic-bezier(0.4, 0, 0.2, 1)';
      bedroomWindowZone.style.backgroundColor = color.hex;
      bedroomWindowZone.style.boxShadow = `0 0 25px ${color.accent}`;
    }
    showToast(`Apartment Bedroom Windows updated to: ${color.name}`);
  });

  // State Sync: Listen for Decorative Swatch Changes (Section 3 -> Section 4)
  window.phpState.subscribe('decorativeSwatchChange', (swatch) => {
    if (diningSyncName) diningSyncName.textContent = swatch.name;
    if (diningWallZone) {
      diningWallZone.style.transition = 'all 350ms cubic-bezier(0.4, 0, 0.2, 1)';
      diningWallZone.style.background = `${swatch.pattern}, ${swatch.previewBg}`;
    }
    showToast(`Apartment Dining Wall updated to: ${swatch.name}`);
  });
}

function handlePinClick(pin) {
  let product = null;
  if (pin.productId === 'gasStove') {
    product = {
      name: PHP_DATA.specialProducts.gasStove.name,
      tagline: 'Tempered Glass Top Cooktop',
      desc: PHP_DATA.specialProducts.gasStove.desc,
      image: PHP_DATA.specialProducts.gasStove.image,
      features: PHP_DATA.specialProducts.gasStove.features,
      specs: {
        'Product Series': 'Diamond, Super Queen, Prime',
        'Top Panel': '8mm Toughened Tempered Glass',
        'Burners': 'High thermal efficiency solid brass caps',
        'Ignition': 'Automatic piezoelectric pulse ignition'
      },
      route: '#special-products'
    };
  } else if (pin.productId === 'door') {
    product = {
      name: PHP_DATA.specialProducts.door.name,
      tagline: 'Aluminium Framing & Designer Glass Doors',
      desc: PHP_DATA.specialProducts.door.desc,
      image: PHP_DATA.specialProducts.door.image,
      features: PHP_DATA.specialProducts.door.features,
      specs: {
        'Available Designs': 'Aluminium Half Doors, Full Doors, Cat Door, Zara Door',
        'Glass Infill': 'Tempered frosted and ceramic printed designs',
        'Frame Finish': 'Anodized Bronze, Silver, Champagne & Powder Coated',
        'Hardware': 'Stainless steel locks and heavy-duty hinges'
      },
      route: '#special-products'
    };
  } else {
    const glass = PHP_DATA.glassProducts.find(g => g.id === pin.productId);
    if (glass) {
      product = {
        name: glass.name,
        tagline: glass.tagline,
        desc: glass.desc,
        image: glass.image,
        features: glass.features,
        specs: glass.specs,
        route: '#glass'
      };
    }
  }

  if (product) {
    window.phpState.openModal(product);
  }
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.innerHTML = '';
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}
