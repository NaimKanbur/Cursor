// Ürünler, sepet ve dil seçici için temel JS yapısı

document.addEventListener('DOMContentLoaded', () => {
  // Dil çevirileri
  const translations = {
    tr: {
      // Header
      'Paprika Workshop': 'Paprika Workshop',
      'Ürün, kategori veya tasarımcı ara...': 'Ürün, kategori veya tasarımcı ara...',
      'TR': 'TR',
      'EN': 'EN',
      
      // Navigation
      'Ana Sayfa': 'Ana Sayfa',
      'Dekorasyon': 'Dekorasyon',
      'Mutfak': 'Mutfak',
      'Bahçe': 'Bahçe',
      'Yaşam': 'Yaşam',
      'Hediye': 'Hediye',
      'İndirim': 'İndirim',
      
      // Hero Section
      'El Emeğiyle, Sevgiyle: Paprika': 'El Emeğiyle, Sevgiyle: Paprika',
      'Her üründe iki dostun emeği, doğallığı ve sıcaklığı var. Paprika, evinizde her zaman bir iz bıraksın!': 'Her üründe iki dostun emeği, doğallığı ve sıcaklığı var. Paprika, evinizde her zaman bir iz bıraksın!',
      'Ürünleri Keşfet': 'Ürünleri Keşfet',
      
      // Categories
      'Öne Çıkan Kategoriler': 'Öne Çıkan Kategoriler',
      'Mutfak': 'Mutfak',
      'Dekorasyon': 'Dekorasyon',
      'Bahçe': 'Bahçe',
      'Hediye': 'Hediye',
      'Ofis': 'Ofis',
      'Çocuk': 'Çocuk',
      'Aydınlatma': 'Aydınlatma',
      'Tekstil': 'Tekstil',
      
      // Products
      'Öne Çıkan Ürünler': 'Öne Çıkan Ürünler',
      'Ahşap Kupa': 'Ahşap Kupa',
      'Sıcak içecekleriniz için doğal ve sağlıklı bir tercih.': 'Sıcak içecekleriniz için doğal ve sağlıklı bir tercih.',
      'Dekoratif Tabak': 'Dekoratif Tabak',
      'Ev dekorasyonunuza sıcaklık katacak el yapımı tabak.': 'Ev dekorasyonunuza sıcaklık katacak el yapımı tabak.',
      'Mini Saksı': 'Mini Saksı',
      'Bitkileriniz için doğal ve şık bir yuva.': 'Bitkileriniz için doğal ve şık bir yuva.',
      'Ahşap Tepsi': 'Ahşap Tepsi',
      'Kahve servisi için şık ve pratik tepsi.': 'Kahve servisi için şık ve pratik tepsi.',
      'Hızlı Bakış': 'Hızlı Bakış',
      'Sepete Ekle': 'Sepete Ekle',
      
      // Contact Section
      'Bize Ulaşın': 'Bize Ulaşın',
      'İki kişilik Paprika ekibi olarak her mesajı özenle okuyor ve en kısa sürede dönüş yapıyoruz.': 'İki kişilik Paprika ekibi olarak her mesajı özenle okuyor ve en kısa sürede dönüş yapıyoruz.',
      'İletişim Bilgileri': 'İletişim Bilgileri',
      'E-posta:': 'E-posta:',
      'Telefon:': 'Telefon:',
      'Adres:': 'Adres:',
      'Çalışma Saatleri:': 'Çalışma Saatleri:',
      'Pazartesi - Cumartesi: 09:00 - 18:00': 'Pazartesi - Cumartesi: 09:00 - 18:00',
      'Pazar: Kapalı': 'Pazar: Kapalı',
      'Mesaj Gönder': 'Mesaj Gönder',
      'Adınız': 'Adınız',
      'E-posta': 'E-posta',
      'Telefon (İsteğe bağlı)': 'Telefon (İsteğe bağlı)',
      'Mesajınız': 'Mesajınız',
      'Gönder': 'Gönder',
      
      // Social Media
      'Sosyal Medya': 'Sosyal Medya',
      'Bizi sosyal medyada takip edin, yeni ürünlerimizi ve atölye süreçlerimizi yakından izleyin!': 'Bizi sosyal medyada takip edin, yeni ürünlerimizi ve atölye süreçlerimizi yakından izleyin!',
      'Instagram': 'Instagram',
      'Facebook': 'Facebook',
      'YouTube': 'YouTube',
      'Pinterest': 'Pinterest',
      'TikTok': 'TikTok',
      
      // Map Section
      'Atölyemizi Ziyaret Edin': 'Atölyemizi Ziyaret Edin',
      'Ahşap ürünlerimizi yerinde görmek ve atölyemizi ziyaret etmek isterseniz, aşağıdaki haritayı kullanabilirsiniz.': 'Ahşap ürünlerimizi yerinde görmek ve atölyemizi ziyaret etmek isterseniz, aşağıdaki haritayı kullanabilirsiniz.',
      'Yol Tarifi Al': 'Yol Tarifi Al',
      
      // Team Section
      'Biz Kimiz?': 'Biz Kimiz?',
      'Ahşap Ustası & Kurucu': 'Ahşap Ustası & Kurucu',
      '15 yıllık deneyimle ahşap işçiliğinin inceliklerini öğrendi.': '15 yıllık deneyimle ahşap işçiliğinin inceliklerini öğrendi.',
      'Tasarımcı & Kurucu': 'Tasarımcı & Kurucu',
      'Modern tasarım anlayışıyla geleneksel el sanatlarını buluşturuyor.': 'Modern tasarım anlayışıyla geleneksel el sanatlarını buluşturuyor.',
      'Paprika Hikayesi:': 'Paprika Hikayesi:',
      'Paprika, iki dostun el emeğiyle kurduğu küçük bir atölyedir. 2020 yılında başladığımız bu yolculukta, her üründe doğallığı, sıcaklığı ve kaliteyi ön planda tutuyoruz. Ahşabın doğal dokusunu koruyarak, modern yaşamın ihtiyaçlarına uygun, el yapımı ürünler tasarlıyoruz.': 'Paprika, iki dostun el emeğiyle kurduğu küçük bir atölyedir. 2020 yılında başladığımız bu yolculukta, her üründe doğallığı, sıcaklığı ve kaliteyi ön planda tutuyoruz. Ahşabın doğal dokusunu koruyarak, modern yaşamın ihtiyaçlarına uygun, el yapımı ürünler tasarlıyoruz.',
      
      // Cart
      'Sepetiniz boş.': 'Sepetiniz boş.',
      'Sepetim': 'Sepetim',
      'Ara Toplam:': 'Ara Toplam:',
      'Kargo:': 'Kargo:',
      'Bedava': 'Bedava',
      'Toplam:': 'Toplam:',
      'daha alışveriş yapın, kargo bedava!': 'daha alışveriş yapın, kargo bedava!',
      'Ürün sepete eklendi!': 'Ürün sepete eklendi!',
      
      // Messages
      'Lütfen gerekli alanları doldurun.': 'Lütfen gerekli alanları doldurun.',
      'Lütfen geçerli bir e-posta adresi girin.': 'Lütfen geçerli bir e-posta adresi girin.',
      'Teşekkürler': 'Teşekkürler',
      'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.': 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
      'kategorisi seçildi.': 'kategorisi seçildi.',
      'için arama yapılıyor...': 'için arama yapılıyor...',
      'ürününün detaylarını görüntülüyorsunuz.': 'ürününün detaylarını görüntülüyorsunuz.'
    },
    en: {
      // Header
      'Paprika Workshop': 'Paprika Workshop',
      'Ürün, kategori veya tasarımcı ara...': 'Search products, categories or designers...',
      'TR': 'TR',
      'EN': 'EN',
      
      // Navigation
      'Ana Sayfa': 'Home',
      'Dekorasyon': 'Decoration',
      'Mutfak': 'Kitchen',
      'Bahçe': 'Garden',
      'Yaşam': 'Lifestyle',
      'Hediye': 'Gifts',
      'İndirim': 'Sale',
      
      // Hero Section
      'El Emeğiyle, Sevgiyle: Paprika': 'Handcrafted with Love: Paprika',
      'Her üründe iki dostun emeği, doğallığı ve sıcaklığı var. Paprika, evinizde her zaman bir iz bıraksın!': 'Every product carries the effort, naturalness and warmth of two friends. Let Paprika always leave a mark in your home!',
      'Ürünleri Keşfet': 'Discover Products',
      
      // Categories
      'Öne Çıkan Kategoriler': 'Featured Categories',
      'Mutfak': 'Kitchen',
      'Dekorasyon': 'Decoration',
      'Bahçe': 'Garden',
      'Hediye': 'Gifts',
      'Ofis': 'Office',
      'Çocuk': 'Children',
      'Aydınlatma': 'Lighting',
      'Tekstil': 'Textile',
      
      // Products
      'Öne Çıkan Ürünler': 'Featured Products',
      'Ahşap Kupa': 'Wooden Cup',
      'Sıcak içecekleriniz için doğal ve sağlıklı bir tercih.': 'A natural and healthy choice for your hot beverages.',
      'Dekoratif Tabak': 'Decorative Plate',
      'Ev dekorasyonunuza sıcaklık katacak el yapımı tabak.': 'Handcrafted plate that will add warmth to your home decoration.',
      'Mini Saksı': 'Mini Pot',
      'Bitkileriniz için doğal ve şık bir yuva.': 'A natural and elegant home for your plants.',
      'Ahşap Tepsi': 'Wooden Tray',
      'Kahve servisi için şık ve pratik tepsi.': 'Elegant and practical tray for coffee service.',
      'Hızlı Bakış': 'Quick View',
      'Sepete Ekle': 'Add to Cart',
      
      // Contact Section
      'Bize Ulaşın': 'Contact Us',
      'İki kişilik Paprika ekibi olarak her mesajı özenle okuyor ve en kısa sürede dönüş yapıyoruz.': 'As a two-person Paprika team, we carefully read every message and respond as soon as possible.',
      'İletişim Bilgileri': 'Contact Information',
      'E-posta:': 'Email:',
      'Telefon:': 'Phone:',
      'Adres:': 'Address:',
      'Çalışma Saatleri:': 'Working Hours:',
      'Pazartesi - Cumartesi: 09:00 - 18:00': 'Monday - Saturday: 09:00 - 18:00',
      'Pazar: Kapalı': 'Sunday: Closed',
      'Mesaj Gönder': 'Send Message',
      'Adınız': 'Your Name',
      'E-posta': 'Email',
      'Telefon (İsteğe bağlı)': 'Phone (Optional)',
      'Mesajınız': 'Your Message',
      'Gönder': 'Send',
      
      // Social Media
      'Sosyal Medya': 'Social Media',
      'Bizi sosyal medyada takip edin, yeni ürünlerimizi ve atölye süreçlerimizi yakından izleyin!': 'Follow us on social media to closely watch our new products and workshop processes!',
      'Instagram': 'Instagram',
      'Facebook': 'Facebook',
      'YouTube': 'YouTube',
      'Pinterest': 'Pinterest',
      'TikTok': 'TikTok',
      
      // Map Section
      'Atölyemizi Ziyaret Edin': 'Visit Our Workshop',
      'Ahşap ürünlerimizi yerinde görmek ve atölyemizi ziyaret etmek isterseniz, aşağıdaki haritayı kullanabilirsiniz.': 'If you want to see our wooden products in person and visit our workshop, you can use the map below.',
      'Yol Tarifi Al': 'Get Directions',
      
      // Team Section
      'Biz Kimiz?': 'Who Are We?',
      'Ahşap Ustası & Kurucu': 'Wood Master & Founder',
      '15 yıllık deneyimle ahşap işçiliğinin inceliklerini öğrendi.': 'Learned the intricacies of woodworking with 15 years of experience.',
      'Tasarımcı & Kurucu': 'Designer & Founder',
      'Modern tasarım anlayışıyla geleneksel el sanatlarını buluşturuyor.': 'Combines traditional handicrafts with modern design understanding.',
      'Paprika Hikayesi:': 'Paprika Story:',
      'Paprika, iki dostun el emeğiyle kurduğu küçük bir atölyedir. 2020 yılında başladığımız bu yolculukta, her üründe doğallığı, sıcaklığı ve kaliteyi ön planda tutuyoruz. Ahşabın doğal dokusunu koruyarak, modern yaşamın ihtiyaçlarına uygun, el yapımı ürünler tasarlıyoruz.': 'Paprika is a small workshop founded by two friends with handcrafted work. In this journey we started in 2020, we prioritize naturalness, warmth and quality in every product. We design handcrafted products suitable for modern life needs while preserving the natural texture of wood.',
      
      // Cart
      'Sepetiniz boş.': 'Your cart is empty.',
      'Sepetim': 'My Cart',
      'Ara Toplam:': 'Subtotal:',
      'Kargo:': 'Shipping:',
      'Bedava': 'Free',
      'Toplam:': 'Total:',
      'daha alışveriş yapın, kargo bedava!': 'more shopping for free shipping!',
      'Ürün sepete eklendi!': 'Product added to cart!',
      
      // Messages
      'Lütfen gerekli alanları doldurun.': 'Please fill in the required fields.',
      'Lütfen geçerli bir e-posta adresi girin.': 'Please enter a valid email address.',
      'Teşekkürler': 'Thank you',
      'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.': 'Your message has been sent successfully. We will get back to you as soon as possible.',
      'kategorisi seçildi.': 'category selected.',
      'için arama yapılıyor...': 'searching for...',
      'ürününün detaylarını görüntülüyorsunuz.': 'viewing product details.'
    }
  };

  // Dil seçici dropdown
  const langBtn = document.getElementById('lang-btn');
  const langMenu = document.getElementById('lang-menu');
  const langLabel = document.getElementById('lang-label');
  const langFlag = document.getElementById('lang-flag');
  let currentLang = 'tr';

  // Dil değiştirme fonksiyonu
  function changeLanguage(lang) {
    currentLang = lang;
    
    // Bayrak ve etiket güncelleme
    if (lang === 'en') {
      langLabel.textContent = 'EN';
      langFlag.src = 'https://flagcdn.com/24x18/gb.png';
      langFlag.alt = 'EN';
    } else {
      langLabel.textContent = 'TR';
      langFlag.src = 'https://flagcdn.com/24x18/tr.png';
      langFlag.alt = 'TR';
    }
    
    // Tüm metinleri çevir
    translatePage(lang);
  }

  // Sayfa çevirme fonksiyonu
  function translatePage(lang) {
    // Önce data-translate attribute'ları olan elementleri çevir
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
    
    // Placeholder'ları çevir
    const inputs = document.querySelectorAll('input[placeholder], textarea[placeholder]');
    inputs.forEach(input => {
      const placeholder = input.getAttribute('placeholder');
      if (translations[lang] && translations[lang][placeholder]) {
        input.setAttribute('placeholder', translations[lang][placeholder]);
      }
    });
    
    // Buton metinlerini çevir (sadece data-translate attribute'ı olmayan butonlar için)
    const buttons = document.querySelectorAll('button:not([data-translate])');
    buttons.forEach(button => {
      const text = button.textContent.trim();
      if (translations[lang] && translations[lang][text]) {
        button.textContent = translations[lang][text];
      }
    });
  }

  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu.classList.toggle('hidden');
  });
  
  langMenu.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', () => {
      const lang = li.getAttribute('data-lang');
      changeLanguage(lang);
      langMenu.classList.add('hidden');
    });
  });
  
  document.body.addEventListener('click', () => langMenu.classList.add('hidden'));

  // Ürün fiyatları ve görselleri
  const productData = [
    { name: 'Ahşap Kupa', price: 89, originalPrice: 120, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=100&q=80' },
    { name: 'Dekoratif Tabak', price: 145, originalPrice: 145, image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80' },
    { name: 'Mini Saksı', price: 67, originalPrice: 85, image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=100&q=80' },
    { name: 'Ahşap Tepsi', price: 178, originalPrice: 178, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=100&q=80' }
  ];

  // Sepet fonksiyonu
  let cart = {};
  const cartCountSpan = document.querySelector('.cart-count');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartMiniBar = document.querySelector('.cart-mini-bar');

  addToCartButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      const product = productData[idx];
      if (!cart[product.name]) cart[product.name] = { ...product, quantity: 0 };
      cart[product.name].quantity++;
      updateCartCount();
      showCartMessage('Ürün sepete eklendi!');
      if (!cartMiniBar.classList.contains('hidden')) renderCartMiniBar();
    });
  });

  function updateCartCount() {
    let total = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    cartCountSpan.textContent = total;
  }

  function calculateTotal() {
    let subtotal = Object.values(cart).reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let shipping = subtotal >= 200 ? 0 : 25;
    let total = subtotal + shipping;
    return { subtotal, shipping, total };
  }

  // Mini bar açma/kapama
  document.querySelector('.cart-icon').addEventListener('click', (e) => {
    e.stopPropagation();
    cartMiniBar.classList.toggle('hidden');
    if (!cartMiniBar.classList.contains('hidden')) {
      renderCartMiniBar();
    }
  });
  document.body.addEventListener('click', () => cartMiniBar.classList.add('hidden'));
  cartMiniBar.addEventListener('click', e => e.stopPropagation());

  function renderCartMiniBar() {
    let total = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    if (total === 0) {
      const emptyMsg = translations[currentLang]['Sepetiniz boş.'] || 'Sepetiniz boş.';
      cartMiniBar.innerHTML = `<div class="cart-mini-empty">${emptyMsg}</div>`;
      return;
    }

    const { subtotal, shipping, total: grandTotal } = calculateTotal();
    const cartTitle = translations[currentLang]['Sepetim'] || 'Sepetim';
    const subtotalText = translations[currentLang]['Ara Toplam:'] || 'Ara Toplam:';
    const shippingText = translations[currentLang]['Kargo:'] || 'Kargo:';
    const totalText = translations[currentLang]['Toplam:'] || 'Toplam:';
    const freeText = translations[currentLang]['Bedava'] || 'Bedava';
    const freeShippingMsg = translations[currentLang]['daha alışveriş yapın, kargo bedava!'] || 'daha alışveriş yapın, kargo bedava!';

    let html = `<h4>${cartTitle}</h4><div class="cart-mini-list">`;
    
    Object.values(cart).forEach((item, i) => {
      html += `<div class="cart-mini-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image" />
        <div class="cart-item-details">
          <span class="cart-mini-item-name">${item.name}</span>
          <span class="cart-item-price">₺${item.price}</span>
        </div>
        <div class="cart-mini-qty">
          <button class="cart-mini-btn" data-action="dec" data-key="${i}">-</button>
          <span>${item.quantity}</span>
          <button class="cart-mini-btn" data-action="inc" data-key="${i}">+</button>
        </div>
      </div>`;
    });
    
    html += '</div>';
    html += `<div class="cart-summary">
      <div class="cart-summary-row">
        <span>${subtotalText}</span>
        <span>₺${subtotal}</span>
      </div>
      <div class="cart-summary-row">
        <span>${shippingText}</span>
        <span>${shipping === 0 ? freeText : `₺${shipping}`}</span>
      </div>
      <div class="cart-summary-row cart-total">
        <span>${totalText}</span>
        <span>₺${grandTotal}</span>
      </div>
      ${shipping > 0 ? `<div class="free-shipping-note">₺${200 - subtotal} ${freeShippingMsg}</div>` : ''}
    </div>`;
    
    cartMiniBar.innerHTML = html;
    
    // Butonlara event ekle
    cartMiniBar.querySelectorAll('.cart-mini-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(btn.getAttribute('data-key'));
        const action = btn.getAttribute('data-action');
        const key = Object.keys(cart)[idx];
        
        if (action === 'inc') cart[key].quantity++;
        if (action === 'dec' && cart[key].quantity > 1) cart[key].quantity--;
        else if (action === 'dec' && cart[key].quantity === 1) delete cart[key];
        
        updateCartCount();
        renderCartMiniBar();
      });
    });
  }

  function showCartMessage(msg) {
    let msgDiv = document.createElement('div');
    msgDiv.textContent = translations[currentLang][msg] || msg;
    msgDiv.style.position = 'fixed';
    msgDiv.style.top = '24px';
    msgDiv.style.right = '32px';
    msgDiv.style.background = '#a1887f';
    msgDiv.style.color = '#fff';
    msgDiv.style.padding = '12px 22px';
    msgDiv.style.borderRadius = '10px';
    msgDiv.style.fontSize = '1.1rem';
    msgDiv.style.boxShadow = '0 2px 8px rgba(0,0,0,0.13)';
    msgDiv.style.zIndex = '9999';
    document.body.appendChild(msgDiv);
    setTimeout(() => msgDiv.remove(), 1400);
  }

  // Hızlı bakış butonları
  const quickViewButtons = document.querySelectorAll('.quick-view');
  quickViewButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productCard = btn.closest('.product-card');
      const productName = productCard.querySelector('h3').textContent;
      const viewingMsg = translations[currentLang]['ürününün detaylarını görüntülüyorsunuz.'] || 'ürününün detaylarını görüntülüyorsunuz.';
      alert(`${productName} ${viewingMsg}`);
    });
  });

  // Arama çubuğu
  const searchInput = document.querySelector('.search-bar input');
  const searchButton = document.querySelector('.search-bar button');
  
  searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
      const searchingMsg = translations[currentLang]['için arama yapılıyor...'] || 'için arama yapılıyor...';
      alert(`"${query}" ${searchingMsg}`);
    }
  });
  
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const query = searchInput.value.trim();
      if (query) {
        const searchingMsg = translations[currentLang]['için arama yapılıyor...'] || 'için arama yapılıyor...';
        alert(`"${query}" ${searchingMsg}`);
      }
    }
  });

  // Kategori navigasyonu
  const categoryLinks = document.querySelectorAll('.category-nav a');
  categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const category = link.textContent;
      const selectedMsg = translations[currentLang]['kategorisi seçildi.'] || 'kategorisi seçildi.';
      alert(`${category} ${selectedMsg}`);
    });
  });

  // CTA butonu
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', () => {
      document.querySelector('.featured-products').scrollIntoView({ 
        behavior: 'smooth' 
      });
    });
  }

  // Kategori kartları
  const categoryCards = document.querySelectorAll('.category-card');
  categoryCards.forEach(card => {
    card.addEventListener('click', () => {
      const categoryName = card.querySelector('h3').textContent;
      alert(`${categoryName} kategorisi seçildi.`);
    });
  });

  // Yol tarifi alma fonksiyonu
  window.openDirections = function() {
    const address = "Marmara Üniversitesi Mehmet Genç Kampüsü, Kadıköy, İstanbul";
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
    window.open(googleMapsUrl, '_blank');
  };

  // İletişim formu
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const phone = formData.get('phone');
      const message = formData.get('message');
      
      // Form validasyonu
      if (!name || !email || !message) {
        const requiredMsg = translations[currentLang]['Lütfen gerekli alanları doldurun.'] || 'Lütfen gerekli alanları doldurun.';
        alert(requiredMsg);
        return;
      }
      
      // E-posta formatı kontrolü
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        const emailMsg = translations[currentLang]['Lütfen geçerli bir e-posta adresi girin.'] || 'Lütfen geçerli bir e-posta adresi girin.';
        alert(emailMsg);
        return;
      }
      
      // Başarılı gönderim simülasyonu
      const thankYouMsg = translations[currentLang]['Teşekkürler'] || 'Teşekkürler';
      const successMsg = translations[currentLang]['Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'] || 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.';
      alert(`${thankYouMsg} ${name}! ${successMsg}`);
      
      // Formu temizle
      contactForm.reset();
    });
  }

  // Sosyal medya linkleri için hover efekti ve yönlendirme
  const socialLinks = document.querySelectorAll('.social-link');
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'translateY(-4px) scale(1.05)';
    });
    
    link.addEventListener('mouseleave', () => {
      link.style.transform = 'translateY(0) scale(1)';
    });

    // Sosyal medya linklerine tıklandığında yönlendirme
    link.addEventListener('click', (e) => {
      const platform = link.classList.contains('instagram') ? 'Instagram' :
                      link.classList.contains('facebook') ? 'Facebook' :
                      link.classList.contains('youtube') ? 'YouTube' :
                      link.classList.contains('pinterest') ? 'Pinterest' :
                      link.classList.contains('tiktok') ? 'TikTok' : 'Sosyal Medya';
      
      console.log(`${platform} anasayfasına yönlendiriliyor...`);
    });
  });
});