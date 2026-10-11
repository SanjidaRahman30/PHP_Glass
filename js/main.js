/**
 * Main Application Logic & Component Assembler
 * PHP Float Glass Industries Limited
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  renderGlassCatalogue();
  renderAluminiumSection();
  renderSpecialProducts();
  renderAboutUs();
  initContactForm();
  initModalSystem();
});

/* ==========================================================================
   HEADER & SCROLL BEHAVIOR
   ========================================================================== */
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initMobileMenu() {
  const toggle = document.getElementById('mobile-nav-toggle');
  const menu = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
  }
}

/* ==========================================================================
   RENDER 7 GLASS PRODUCTS (EXACT ORDER)
   ========================================================================== */
function renderGlassCatalogue() {
  const container = document.getElementById('glass-products-grid');
  if (!container) return;

  container.innerHTML = '';
  PHP_DATA.glassProducts.forEach((glass) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-glass-id', glass.id);

    // Build specs tags
    let specsHtml = '';
    if (glass.specs.thickness) {
      specsHtml += `<span class="spec-tag">Thickness: <strong>${glass.specs.thickness}</strong></span>`;
    }
    if (glass.specs.maxSize) {
      specsHtml += `<span class="spec-tag">Max Size: <strong>${glass.specs.maxSize}</strong></span>`;
    }
    if (glass.specs.coating) {
      specsHtml += `<span class="spec-tag">${glass.specs.coating}</span>`;
    }
    if (glass.specs.capacity) {
      specsHtml += `<span class="spec-tag">Capacity: <strong>${glass.specs.capacity}</strong></span>`;
    }

    card.innerHTML = `
      <div class="card-img-box">
        <span class="card-badge">0${glass.order} • ${glass.name}</span>
        <img src="${glass.image}" alt="${glass.name} - PHP Glass" loading="lazy">
        <div class="glass-light-sweep"></div>
      </div>
      <div class="card-content">
        <h3 class="card-title">${glass.name}</h3>
        <p class="card-desc">${glass.desc}</p>
        <div class="spec-pills-row">
          ${specsHtml}
        </div>
        <div class="card-footer">
          <button class="btn btn-outline-teal btn-sm view-glass-btn" data-id="${glass.id}">
            View Details
          </button>
          <button class="btn btn-amber btn-sm enquire-glass-btn" data-name="${glass.name}">
            Enquire Now
          </button>
        </div>
      </div>
    `;

    // Click handler for modal view
    const viewBtn = card.querySelector('.view-glass-btn');
    if (viewBtn) {
      viewBtn.addEventListener('click', () => {
        window.phpState.openModal({
          name: glass.name,
          tagline: glass.tagline,
          desc: glass.desc,
          image: glass.image,
          specs: glass.specs,
          features: glass.features
        });
      });
    }

    // Click handler for enquire
    const enquireBtn = card.querySelector('.enquire-glass-btn');
    if (enquireBtn) {
      enquireBtn.addEventListener('click', () => {
        openEnquiryForProduct(glass.name);
      });
    }

    container.appendChild(card);
  });
}

/* ==========================================================================
   RENDER ALUMINIUM PROFILES & FINISHES
   ========================================================================== */
function renderAluminiumSection() {
  const container = document.getElementById('aluminium-cards-grid');
  if (!container) return;

  container.innerHTML = '';
  PHP_DATA.aluminiumProfiles.forEach((profile) => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <div class="card-img-box">
        <span class="card-badge">Aluminium Profile</span>
        <img src="${profile.image}" alt="${profile.name} Aluminium Profile" loading="lazy">
        <div class="glass-light-sweep"></div>
      </div>
      <div class="card-content">
        <div class="aluminium-logo-badge" style="margin-bottom: 0.5rem;">
          PHP <span>ALUMINIUM</span>
        </div>
        <h3 class="card-title">${profile.name}</h3>
        <p class="card-desc">${profile.desc}</p>
        
        <table class="spec-table-compact">
          <tbody>
            <tr>
              <th>Thickness</th>
              <td>${profile.thickness}</td>
            </tr>
            <tr>
              <th>Hardness</th>
              <td>${profile.hardness}</td>
            </tr>
            <tr>
              <th>Alloy Grade</th>
              <td>${profile.alloy}</td>
            </tr>
          </tbody>
        </table>

        <div style="margin: 1.25rem 0 0.5rem 0;">
          <span style="font-size: 0.775rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.4rem;">
            AVAILABLE FINISHES:
          </span>
          <div class="finish-dots">
            <span class="finish-dot bronze" title="Bronze Anodized"></span>
            <span class="finish-dot silver" title="Silver Natural Anodized"></span>
            <span class="finish-dot champagne" title="Champagne Electro-colored"></span>
            <span style="font-size: 0.8rem; color: var(--text-secondary); margin-left: 0.3rem;">Bronze, Silver, Champagne</span>
          </div>
        </div>

        <div class="card-footer" style="margin-top: 1.25rem;">
          <button class="btn btn-outline-teal btn-sm view-profile-btn">
            Full Specs
          </button>
          <button class="btn btn-amber btn-sm enquire-profile-btn" data-name="${profile.name}">
            Order Profile
          </button>
        </div>
      </div>
    `;

    // View Modal
    card.querySelector('.view-profile-btn').addEventListener('click', () => {
      window.phpState.openModal({
        name: `${profile.name} — Aluminium Extrusion Profile`,
        tagline: profile.tagline,
        desc: profile.desc,
        image: profile.image,
        specs: {
          'Thickness Range': profile.thickness,
          'Webster Hardness': profile.hardness,
          'Alloy Specification': profile.alloy,
          'Available Finishes': 'Bronze Anodized, Silver Natural, Champagne',
          'Applications': 'Structural facades, sliding windows, curtain wall transoms'
        },
        features: [
          'High precision architectural dimensional tolerances',
          'Premium anodized surface resistance against tropical corrosion',
          'Compatible with PHP Tempered & Insulating Glass units'
        ]
      });
    });

    // Enquire
    card.querySelector('.enquire-profile-btn').addEventListener('click', () => {
      openEnquiryForProduct(profile.name);
    });

    container.appendChild(card);
  });
}

/* ==========================================================================
   RENDER SPECIAL PRODUCTS (DOOR, LADDER, GAS STOVE)
   ========================================================================== */
function renderSpecialProducts() {
  const container = document.getElementById('special-products-container');
  if (!container) return;

  const { door, ladder, gasStove } = PHP_DATA.specialProducts;

  container.innerHTML = `
    <!-- PHP DOOR BLOCK -->
    <div class="special-product-block">
      <div class="special-block-img">
        <img src="${door.image}" alt="${door.name} Showcase" loading="lazy">
        <div class="glass-light-sweep"></div>
      </div>
      <div class="special-block-info">
        <div class="badge-brand-logo aluminium-badge">
          PHP <span>ALUMINIUM</span>
        </div>
        <h2>${door.name}</h2>
        <p class="hero-supporting-text" style="font-size: 1rem; margin-bottom: 1rem;">
          ${door.desc}
        </p>
        <div style="margin-bottom: 1rem;">
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">
            Available Door Collections:
          </span>
          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.4rem;">
            ${door.types.map(t => `<span class="spec-tag"><strong>${t}</strong></span>`).join('')}
          </div>
        </div>
        <ul class="product-features-checklist">
          ${door.features.map(f => `<li><i class="lucide-check-circle">✓</i> ${f}</li>`).join('')}
        </ul>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <button class="btn btn-amber" onclick="openEnquiryForProduct('${door.name}')">
            Enquire for Doors
          </button>
          <button class="btn btn-outline-teal" onclick="showToast('Door Catalogue PDF download starting...')">
            Download Catalogue
          </button>
        </div>
      </div>
    </div>

    <!-- PHP LADDER BLOCK -->
    <div class="special-product-block reverse">
      <div class="special-block-img">
        <img src="${ladder.image}" alt="${ladder.name} Safety Ladders" loading="lazy">
        <div class="glass-light-sweep"></div>
      </div>
      <div class="special-block-info">
        <div class="badge-brand-logo aluminium-badge">
          PHP <span>ALUMINIUM</span>
        </div>
        <h2>${ladder.name}</h2>
        <p class="hero-supporting-text" style="font-size: 1rem; margin-bottom: 1rem;">
          ${ladder.desc}
        </p>
        <div style="display: flex; gap: 2rem; margin: 1rem 0;">
          <div>
            <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block;">AVAILABLE SIZES</span>
            <strong style="color: var(--php-teal-dark); font-size: 1.1rem;">${ladder.sizes}</strong>
          </div>
          <div>
            <span style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); display: block;">AVAILABLE FINISHES</span>
            <strong style="color: var(--text-main); font-size: 1.1rem;">Silver & Gold Anodized</strong>
          </div>
        </div>
        <ul class="product-features-checklist">
          ${ladder.features.map(f => `<li><i class="lucide-check-circle">✓</i> ${f}</li>`).join('')}
        </ul>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <button class="btn btn-amber" onclick="openEnquiryForProduct('${ladder.name}')">
            Enquire for Ladders
          </button>
          <button class="btn btn-outline-teal" onclick="showToast('Ladder Range specifications requested')">
            View Size Chart
          </button>
        </div>
      </div>
    </div>

    <!-- PHP GAS STOVE BLOCK -->
    <div class="special-product-block">
      <div class="special-block-img">
        <img src="${gasStove.image}" alt="${gasStove.name} Cooktop" loading="lazy">
        <div class="glass-light-sweep"></div>
      </div>
      <div class="special-block-info">
        <div class="badge-brand-logo stove-badge">
          PHP <span>GAS STOVE</span>
        </div>
        <h2>${gasStove.name}</h2>
        <p class="hero-supporting-text" style="font-size: 1rem; margin-bottom: 1rem;">
          ${gasStove.desc}
        </p>
        <div class="section-tag amber" style="margin-bottom: 1rem;">
          ${gasStove.keyFeature}
        </div>
        <div style="margin-bottom: 1rem;">
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">
            Product Series:
          </span>
          <div style="display: flex; gap: 0.5rem; margin-top: 0.4rem;">
            ${gasStove.series.map(s => `<span class="spec-tag" style="border-color: var(--amber-primary);"><strong>${s}</strong></span>`).join('')}
          </div>
        </div>
        <ul class="product-features-checklist">
          ${gasStove.features.map(f => `<li><i class="lucide-check-circle">✓</i> ${f}</li>`).join('')}
        </ul>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <button class="btn btn-amber" onclick="openEnquiryForProduct('${gasStove.name}')">
            Enquire for Gas Stoves
          </button>
          <button class="btn btn-outline-teal" onclick="showToast('Viewing Gas Stove Series specifications')">
            Explore Series
          </button>
        </div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   RENDER ABOUT US
   ========================================================================== */
function renderAboutUs() {
  const statsContainer = document.getElementById('about-stats-container');
  const timelineContainer = document.getElementById('about-timeline-container');

  if (statsContainer) {
    statsContainer.innerHTML = PHP_DATA.about.facts.map(f => `
      <div class="about-stat-card">
        <div class="stat-number">${f.value}</div>
        <div class="stat-label">${f.unit} • ${f.title}</div>
        <div class="stat-sub">${f.desc}</div>
      </div>
    `).join('');
  }

  if (timelineContainer) {
    timelineContainer.innerHTML = `
      <div class="timeline-line"></div>
      <div class="timeline-milestones">
        ${PHP_DATA.about.timeline.map(t => `
          <div class="timeline-card">
            <div class="timeline-year">${t.year}</div>
            <h4 style="margin-bottom: 0.35rem; font-size: 1.05rem;">${t.title}</h4>
            <p class="timeline-desc">${t.desc}</p>
          </div>
        `).join('')}
      </div>
    `;
  }
}

/* ==========================================================================
   CONTACT FORM & WHATSAPP GENERATION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('enquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const phone = document.getElementById('contact-phone').value.trim();
    const product = document.getElementById('contact-product').value;
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !phone) {
      alert('Please provide your Name and Phone or WhatsApp number.');
      return;
    }

    // Direct WhatsApp Link Option
    const waText = encodeURIComponent(
      `Hello PHP Glass,\n\nName: ${name}\nPhone: ${phone}\nProduct of Interest: ${product}\nMessage: ${message}\n\nEnquiry sent from PHP Glass Website.`
    );
    const waUrl = `https://wa.me/8801713000000?text=${waText}`;

    // Show Confirmation Modal / Toast
    showToast('Enquiry received! Opening WhatsApp...');
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 800);

    form.reset();
  });
}

function openEnquiryForProduct(productName) {
  window.location.hash = '#contact';
  setTimeout(() => {
    const productSelect = document.getElementById('contact-product');
    if (productSelect) {
      for (let i = 0; i < productSelect.options.length; i++) {
        if (productSelect.options[i].text.includes(productName) || productSelect.options[i].value.includes(productName.toLowerCase())) {
          productSelect.selectedIndex = i;
          break;
        }
      }
    }
    const nameField = document.getElementById('contact-name');
    if (nameField) nameField.focus();
  }, 250);
}

/* ==========================================================================
   MODAL SYSTEM
   ========================================================================== */
function initModalSystem() {
  const overlay = document.getElementById('product-modal-overlay');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!overlay || !closeBtn) return;

  closeBtn.addEventListener('click', () => {
    window.phpState.closeModal();
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      window.phpState.closeModal();
    }
  });

  // State Listener
  window.phpState.subscribe('modalChange', (product) => {
    if (product) {
      renderModalContent(product);
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

function renderModalContent(product) {
  const modalBody = document.getElementById('modal-dynamic-body');
  if (!modalBody) return;

  let specsRows = '';
  if (product.specs) {
    specsRows = Object.entries(product.specs).map(([key, val]) => `
      <tr>
        <th style="padding: 0.6rem 0.8rem; text-align: left; color: var(--text-muted); font-size: 0.85rem; border-bottom: 1px solid #e2e8f0;">${key}</th>
        <td style="padding: 0.6rem 0.8rem; text-align: left; color: var(--text-main); font-weight: 700; font-size: 0.9rem; border-bottom: 1px solid #e2e8f0;">${val}</td>
      </tr>
    `).join('');
  }

  let featuresList = '';
  if (product.features && product.features.length) {
    featuresList = `
      <div style="margin-top: 1.5rem;">
        <h4 style="font-size: 0.95rem; margin-bottom: 0.5rem; color: var(--text-main);">KEY ADVANTAGES</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem;">
          ${product.features.map(f => `<li style="font-size: 0.875rem; color: var(--text-secondary);">✓ ${f}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  modalBody.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center; padding: 2.5rem;">
      <div style="background: var(--bg-aqua-card); border-radius: var(--radius-lg); padding: 1.5rem; text-align: center;">
        <img src="${product.image}" alt="${product.name}" style="max-height: 280px; margin: 0 auto; object-fit: contain; border-radius: var(--radius-md);">
      </div>
      <div>
        <span class="section-tag">${product.tagline || 'PHP Quality Standard'}</span>
        <h2 style="font-size: 1.75rem; margin-bottom: 0.75rem;">${product.name}</h2>
        <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1.25rem;">${product.desc}</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
          <tbody>
            ${specsRows}
          </tbody>
        </table>

        ${featuresList}

        <div style="margin-top: 2rem; display: flex; gap: 0.75rem;">
          <button class="btn btn-amber btn-sm" onclick="window.phpState.closeModal(); openEnquiryForProduct('${product.name}')">
            Enquire for this Product
          </button>
          <a href="https://wa.me/8801713000000?text=Hi%20PHP%20Glass,%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}" target="_blank" class="btn btn-whatsapp btn-sm">
            WhatsApp Direct
          </a>
        </div>
      </div>
    </div>
  `;
}
