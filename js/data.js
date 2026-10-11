/**
 * PHP Float Glass Industries Limited
 * Central Product & Specification Data Architecture
 */

const PHP_DATA = {
  // 10 Reflective Glass Shades
  reflectiveColors: [
    {
      id: 'ocean-blue',
      name: 'Ocean Blue',
      hex: '#1e88e5',
      accent: 'rgba(30, 136, 229, 0.45)',
      heatReduction: '68%',
      glareReduction: '72%',
      vlt: '28%',
      thickness: '5.0 to 6.0 mm',
      maxSize: '84" × 120"',
      desc: 'Vibrant oceanic azure shade delivering outstanding solar thermal insulation and eye-catching modern facade appeal.'
    },
    {
      id: 'ford-blue',
      name: 'Ford Blue',
      hex: '#0d47a1',
      accent: 'rgba(13, 71, 161, 0.5)',
      heatReduction: '74%',
      glareReduction: '80%',
      vlt: '22%',
      thickness: '5.0 to 6.0 mm',
      maxSize: '84" × 120"',
      desc: 'Deep cobalt architectural tint engineered for high solar intensity zones and prestigious corporate headquarters.'
    },
    {
      id: 'royal-blue',
      name: 'Royal Blue',
      hex: '#2962ff',
      accent: 'rgba(41, 98, 255, 0.45)',
      heatReduction: '70%',
      glareReduction: '75%',
      vlt: '26%',
      thickness: '5.0 to 6.0 mm',
      maxSize: '84" × 120"',
      desc: 'Brilliant royal tint combining high exterior reflectivity with crisp internal optical clarity.'
    },
    {
      id: 'french-green',
      name: 'French Green',
      hex: '#00897b',
      accent: 'rgba(0, 137, 123, 0.45)',
      heatReduction: '66%',
      glareReduction: '68%',
      vlt: '34%',
      thickness: '5.0 to 6.0 mm',
      maxSize: '84" × 120"',
      desc: 'Refined emerald aesthetic offering soothing natural daylight filtration and superior energy conservation.'
    },
    {
      id: 'dark-green',
      name: 'Dark Green',
      hex: '#004d40',
      accent: 'rgba(0, 77, 64, 0.55)',
      heatReduction: '78%',
      glareReduction: '82%',
      vlt: '18%',
      thickness: '5.0 to 6.0 mm',
      maxSize: '84" × 120"',
      desc: 'High-density green solar shield maximizing UV blocking and cooling efficiency in tropical climates.'
    },
    {
      id: 'crystal-bronze',
      name: 'Crystal Bronze',
      hex: '#8d6e63',
      accent: 'rgba(141, 110, 99, 0.45)',
      heatReduction: '65%',
      glareReduction: '70%',
      vlt: '30%',
      thickness: '5.0 to 6.0 mm',
      maxSize: '84" × 120"',
      desc: 'Warm earthy bronze reflection that harmonizes seamlessly with natural stone and metallic architectural envelopes.'
    },
    {
      id: 'golden-bronze',
      name: 'Golden Bronze',
      hex: '#bcaaa4',
      accent: 'rgba(188, 170, 164, 0.45)',
      heatReduction: '62%',
      glareReduction: '65%',
      vlt: '35%',
      thickness: '5.0 to 6.0 mm',
      maxSize: '84" × 120"',
      desc: 'Rich amber-golden glow reflecting evening sunsets with an unmistakable luxurious character.'
    },
    {
      id: 'euro-grey',
      name: 'Euro Grey',
      hex: '#78909c',
      accent: 'rgba(120, 144, 156, 0.45)',
      heatReduction: '64%',
      glareReduction: '74%',
      vlt: '32%',
      thickness: '5.0 to 6.0 mm',
      maxSize: '84" × 120"',
      desc: 'Neutral smoky grey tone preferred by global architects for timeless minimalism and balanced thermal performance.'
    },
    {
      id: 'dark-grey',
      name: 'Dark Grey',
      hex: '#37474f',
      accent: 'rgba(55, 71, 79, 0.6)',
      heatReduction: '80%',
      glareReduction: '86%',
      vlt: '15%',
      thickness: '5.0 to 6.0 mm',
      maxSize: '84" × 120"',
      desc: 'Ultimate privacy glass with near-opaque exterior reflection and maximum daytime glare suppression.'
    },
    {
      id: 'titanium-silver',
      name: 'Titanium Silver',
      hex: '#cfd8dc',
      accent: 'rgba(207, 216, 220, 0.5)',
      heatReduction: '72%',
      glareReduction: '76%',
      vlt: '25%',
      thickness: '5.0 to 6.0 mm',
      maxSize: '84" × 120"',
      desc: 'Sleek silver metallic specular finish providing high daylight rejection and crisp futuristic aesthetics.'
    }
  ],

  // 7 Decorative Glass Swatches & Textures
  decorativeSwatches: [
    {
      id: 'fluted-ribs',
      name: 'Fluted Reeded',
      pattern: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.7) 0px, rgba(255,255,255,0.2) 6px, rgba(13,148,136,0.15) 12px)',
      accentColor: '#0d9488',
      previewBg: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)',
      desc: 'Linear textured ribs diffusing gentle daylight while preserving complete interior privacy.'
    },
    {
      id: 'frost-mist',
      name: 'Translucent Frost',
      pattern: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.85) 0%, rgba(240,253,250,0.6) 100%)',
      accentColor: '#14b8a6',
      previewBg: 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)',
      desc: 'Satin acid-etched translucent finish creating a smooth luminous glow across room partitions.'
    },
    {
      id: 'calacatta-gold',
      name: 'Calacatta Marble',
      pattern: 'radial-gradient(ellipse at 30% 20%, rgba(245,158,11,0.25) 0%, transparent 50%), linear-gradient(120deg, rgba(255,255,255,0.9) 0%, rgba(243,244,246,0.6) 100%)',
      accentColor: '#f59e0b',
      previewBg: 'linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)',
      desc: 'High-definition digital ceramic frit marble veins on toughened glass for luxury splashbacks.'
    },
    {
      id: 'geometric-mesh',
      name: 'Prism Geometry',
      pattern: 'linear-gradient(45deg, rgba(15,23,42,0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(15,23,42,0.1) 25%, transparent 25%)',
      accentColor: '#0f172a',
      previewBg: 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)',
      desc: 'Contemporary architectural grid pattern engineered for corporate boardrooms and partition screens.'
    },
    {
      id: 'botanical-zen',
      name: 'Botanical Leaf',
      pattern: 'radial-gradient(circle at 70% 30%, rgba(16,185,129,0.3) 0%, transparent 60%), linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(209,250,229,0.5) 100%)',
      accentColor: '#10b981',
      previewBg: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
      desc: 'Organic biophilic leaf silhouettes integrated into laminated glass for calming wellness spaces.'
    },
    {
      id: 'amber-waves',
      name: 'Amber Waves',
      pattern: 'radial-gradient(circle at 40% 60%, rgba(217,119,6,0.35) 0%, transparent 70%), linear-gradient(160deg, #fffbeb 0%, #fef3c7 100%)',
      accentColor: '#d97706',
      previewBg: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
      desc: 'Warm undulating fluid wave textures creating dynamic reflections under ambient lighting.'
    },
    {
      id: 'ocean-ripple',
      name: 'Ocean Ripple',
      pattern: 'radial-gradient(circle at 60% 40%, rgba(6,182,212,0.35) 0%, transparent 65%), linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)',
      accentColor: '#06b6d4',
      previewBg: 'linear-gradient(135deg, #cffafe 0%, #a5f3fc 100%)',
      desc: 'Gentle water ripples on crystal glass invoking the tranquility of the Bay of Bengal.'
    }
  ],

  // Exactly 7 Glass Products in Specified Order
  glassProducts: [
    {
      id: 'clear',
      order: 1,
      name: 'Clear Float Glass',
      tagline: 'Purest Optical Clarity & Flatness',
      desc: 'Manufactured with high-purity silica sand using advanced float technology. Flawless distortion-free vision with high light transmission.',
      specs: {
        thickness: '2mm to 19mm',
        maxSize: 'Up to 144" × 240"',
        quality: 'Purity grade > 99.8%',
        applications: 'Windows, facades, interior partitions, mirrors, processing substrates'
      },
      image: './assets/images/hero_clear_glass.jpg',
      features: ['Distortion-free surface', 'High visible light transmittance', 'Uniform thickness tolerance', 'Easy cutting and processing']
    },
    {
      id: 'tempered',
      order: 2,
      name: 'Tempered Glass',
      tagline: '5× Stronger Toughened Safety Glass',
      desc: 'Thermal toughening process producing 5x higher mechanical and thermal shock resistance. Fractures into harmless blunt dice granules.',
      specs: {
        thickness: '4 to 19 mm',
        maxSize: 'Up to 90" × 142"',
        standard: 'EN 12150-1 / ANSI Z97.1',
        applications: 'Glass doors, shower cubicles, railings, spider facades, curtain walls'
      },
      image: './assets/images/hero_clear_glass.jpg',
      features: ['4 to 19 mm thickness range', 'Up to 90" × 142" max dimension', 'High thermal shock resistance (up to 250°C)', 'Complete occupant impact safety']
    },
    {
      id: 'reflective',
      order: 3,
      name: 'Reflective Glass',
      tagline: 'Solar Control in 10 Rich Architectural Shades',
      desc: 'Pyrolytic on-line & magnetron vacuum coated solar control glass offering high solar heat reflection, UV blocking, and modern aesthetics.',
      specs: {
        thickness: '5.0 to 6.0 mm',
        maxSize: 'Up to 84" × 120"',
        capacity: '1500 MT per month',
        applications: 'Commercial skyscrapers, curtain walls, skylights, atrium glazing'
      },
      image: './assets/images/building_reflective.jpg',
      features: ['Available in 10 distinct shades', '5.0 to 6.0 mm thickness', 'Up to 84" × 120" size', 'Significantly reduces building cooling loads']
    },
    {
      id: 'decorative',
      order: 4,
      name: 'Decorative Glass',
      tagline: 'Transforming Spaces with Texture & Art',
      desc: 'Fluted, reeded, frosted, ceramic digitally printed, and tinted decorative glass designed to create striking interior focal points.',
      specs: {
        thickness: '4mm to 12mm',
        maxSize: 'Custom architectural dimensions',
        options: 'Reeded, Frosted, Ceramic Printed, Laminated',
        applications: 'Feature walls, kitchen splashbacks, office partitions, vanity doors'
      },
      image: './assets/images/room_decorative.jpg',
      features: ['7+ designer texture styles', 'Light-diffusing privacy', 'Custom ceramic ink patterns', 'Easy to clean and maintain']
    },
    {
      id: 'mirror',
      order: 5,
      name: 'PHP Mirror',
      tagline: 'Silver-Coated, Copper-Backed, Double-Painted',
      desc: 'Premium quality architectural mirror manufactured with genuine pure silver coating, copper backing, and two protective coats of anti-corrosive paint.',
      specs: {
        coating: 'Silver-coated, copper-backed, double-painted',
        thickness: '3mm to 6mm',
        reflection: '> 92% Light Reflectivity',
        applications: 'Luxury bathrooms, gymnasiums, wardrobes, decorative wall paneling'
      },
      image: './assets/images/php_glass_samples_2_1791349326474.jpg',
      features: ['Silver-coated reflective core', 'Copper-backed protective layer', 'Double-painted anti-corrosion barrier', 'Crystal-clear true color reflection']
    },
    {
      id: 'soundproof',
      order: 6,
      name: 'Soundproof Glass',
      tagline: 'Acoustic PVB Laminated Insulation',
      desc: 'Multi-layer safety laminated glass incorporating acoustic polyvinyl butyral (PVB) interlayers designed to dampen external urban noise.',
      specs: {
        thickness: 'Specifications pending (brochure update)',
        acousticRating: 'Acoustic PVB interlayer technology',
        applications: 'Hospitals, recording studios, luxury residences, airport vicinities'
      },
      image: './assets/images/php_glass_samples_2_1791349326474.jpg',
      features: ['Acoustic noise dampening', 'Impact shatter protection', 'UV radiation filtration', 'Brochure technical specs update in progress']
    },
    {
      id: 'insulating',
      order: 7,
      name: 'Insulating Glass (IGU)',
      tagline: 'Double & Triple Glazed Thermal Units',
      desc: 'Hermetically sealed insulated glass units with molecular sieve desiccant spacer bars and dual edge sealants for maximum energy conservation.',
      specs: {
        thickness: '5 to 19 mm',
        maxSize: 'Up to 78" × 118"',
        cavity: '6mm, 9mm, 12mm, 16mm Air/Argon gap',
        applications: 'Green buildings, LEED certified projects, high-efficiency towers'
      },
      image: './assets/images/php_glass_samples_2_1791349326474.jpg',
      features: ['5 to 19 mm thickness compatibility', 'Up to 78" × 118" maximum size', 'Superior thermal U-value reduction', 'Eliminates condensation and fogging']
    }
  ],

  // Aluminium Profiles
  aluminiumProfiles: [
    {
      id: 'php-silk',
      name: 'PHP Silk',
      tagline: 'Lightweight & Elegant Residential Profile',
      thickness: '0.85 to 1.0 mm',
      hardness: '10–12 Webster (HW)',
      alloy: '6063-T5',
      desc: 'Engineered for smooth-sliding residential window systems and interior partitions with a refined, satin-smooth finish.',
      finishes: ['Bronze', 'Silver', 'Champagne'],
      image: './assets/images/aluminium_profiles.jpg'
    },
    {
      id: 'php-solid',
      name: 'PHP Solid',
      tagline: 'Robust Architectural Heavy-Duty Profile',
      thickness: '1.1 to 1.2 mm',
      hardness: '12–14 Webster (HW)',
      alloy: '6063-T6',
      desc: 'Ideal for medium-rise commercial facades, swing doors, and high-windload architectural window frames.',
      finishes: ['Bronze', 'Silver', 'Champagne'],
      image: './assets/images/aluminium_profiles.jpg'
    },
    {
      id: 'php-special',
      name: 'PHP Special',
      tagline: 'Maximum Strength Industrial & High-Rise Profile',
      thickness: '1.2 to 1.5 mm',
      hardness: '14–16 Webster (HW)',
      alloy: '6063-T6 Premium',
      desc: 'Heavy-gauge structural extrusions for curtain wall transoms, mullions, structural spider fittings, and high-traffic public entrances.',
      finishes: ['Bronze', 'Silver', 'Champagne'],
      image: './assets/images/aluminium_profiles.jpg'
    }
  ],

  // Special Products
  specialProducts: {
    door: {
      name: 'PHP Door',
      brand: 'PHP Aluminium',
      desc: 'Premium interior and exterior door systems combining extruded high-strength aluminium frames with decorative tempered and printed safety glass.',
      types: ['Aluminium Half Doors', 'Aluminium Full Doors', 'Cat Door Series', 'Zara Door Series', 'Printed-Glass Custom Designs'],
      features: [
        'Anodized and powder-coated heavy gauge aluminium framing',
        'Large curated range of ceramic printed-glass designs',
        'High privacy frosted & textured glass inserts',
        'Heavy duty multi-point locksets and premium stainless hinges'
      ],
      image: './assets/images/doors_collection.jpg',
      badgeLogo: 'PHP Aluminium'
    },
    ladder: {
      name: 'PHP Ladder',
      brand: 'PHP Aluminium',
      desc: 'Industrial and domestic safety ladders manufactured from high-tensile aluminium alloy with anti-slip ribbed steps and non-conductive rubber feet.',
      types: [
        'Household Step Ladders',
        'Folding Multipurpose Ladders',
        'Heavy-Duty Two-Way Ladders',
        'Single-Way Extension Ladders',
        'Two-Part Extension Ladders'
      ],
      colors: ['Silver Anodized', 'Gold Anodized'],
      sizes: '4 ft to 40 ft',
      features: [
        'Available sizes from 4 ft to 40 ft',
        'Available in premium Silver & Gold finishes',
        'Heavy-duty alloy with anti-slip rubber pads',
        'Compact foldable design with secure automatic locking hinges'
      ],
      image: './assets/images/ladders_collection.jpg',
      badgeLogo: 'PHP Aluminium'
    },
    gasStove: {
      name: 'PHP Gas Stove',
      brand: 'PHP Gas Stove',
      desc: 'Ultra-modern culinary gas cooktops engineered with heavy-duty 8mm tempered glass tops, solid brass burner caps, and automatic ignition.',
      series: ['Diamond Series', 'Super Queen Series', 'Prime Series'],
      keyFeature: '8mm Toughened Tempered Glass Top Panel',
      features: [
        'High-impact, heat-resistant toughened tempered glass tops',
        'High-efficiency solid brass burner caps for optimal gas saving',
        'Built-in spill-proof stainless steel drip trays',
        'Japanese piezoelectric auto-ignition mechanism'
      ],
      image: './assets/images/gas_stove.jpg',
      badgeLogo: 'PHP Gas Stove'
    }
  },

  // About Us Milestones & Factory Facts
  about: {
    story: 'PHP Family since 1969 — Founded by visionary industrialist Sufi Mohamed Mizanur Rahman, PHP has grown into one of Bangladesh’s most respected industrial conglomerates. In 2005, PHP Float Glass Industries Limited was established in Chattogram, pioneering high-purity float glass manufacturing in the country.',
    facts: [
      {
        value: '10',
        unit: 'Shades',
        title: 'Reflective Glass Range',
        desc: 'Widest color spectrum of solar reflective glass in Bangladesh'
      },
      {
        value: '1,500',
        unit: 'MT / Month',
        title: 'Production Capacity',
        desc: 'State-of-the-art continuous float manufacturing output'
      },
      {
        value: '~30%',
        unit: 'Market Share',
        title: 'Domestic Reflective Demand',
        desc: 'Supplying nearly a third of all national reflective glass needs'
      }
    ],
    timeline: [
      { year: '1969', title: 'PHP Family Founded', desc: 'Sufi Mohamed Mizanur Rahman lays the foundation of industrial excellence.' },
      { year: '2005', title: 'Float Glass Commissioned', desc: 'First state-of-the-art float glass facility in Chattogram, Bangladesh.' },
      { year: '2012', title: 'Reflective Coating Line', desc: 'Introduced 10 architectural shades of online pyrolytic reflective glass.' },
      { year: '2024+', title: 'Advanced Processing', desc: 'Expanded into energy-efficient double glazing (IGU) & acoustic laminates.' }
    ],
    mantra: 'Peace, Happiness and Prosperity'
  },

  // Contact Info
  contact: {
    address: '40/1 PHP Center, Zakir Hossain Road, Khulshi, Chattogram',
    email: 'glass.info@phpfamily.com',
    phone: '+880 31 2550101-5',
    whatsapp: '+8801713000000',
    whatsappDisplay: '+880 1713-000000'
  }
};
