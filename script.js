// متغيرات عامة
let properties = []; // مصفوفة تخزين العقارات
let currentEditId = null;
let isAdmin = false;

// تهيئة التطبيق عند اكتمال تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
  // تحميل العقارات
  loadProperties();
  
  // إضافة مستمع لحالة الاتصال بالإنترنت
  window.addEventListener('online', updateConnectionStatus);
  window.addEventListener('offline', updateConnectionStatus);
  
  // تحديث عداد الزوار
  const visitorCountDisplay = document.getElementById('visitorCountDisplay');
  if (visitorCountDisplay) {
    // استخدام التخزين المحلي لحفظ عدد الزوار
    const visitorCount = localStorage.getItem('visitorCount') || 0;
    visitorCountDisplay.textContent = parseInt(visitorCount) + 1;
    localStorage.setItem('visitorCount', parseInt(visitorCount) + 1);
  }
  
  // تفعيل الأحداث
  initializeEvents();
  
  console.log("تم تهيئة التطبيق بنجاح");
});

// تحديث حالة الاتصال بالإنترنت
function updateConnectionStatus() {
  const statusElement = document.getElementById('connectionStatus');
  if (!statusElement) return;
  
  if (navigator.onLine) {
    statusElement.textContent = "متصل";
    statusElement.classList.remove("text-danger");
    statusElement.classList.add("text-success");
  } else {
    statusElement.textContent = "غير متصل";
    statusElement.classList.remove("text-success");
    statusElement.classList.add("text-danger");
  }
}

// توليد معرف فريد
function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

// تهيئة الأحداث
function initializeEvents() {
  // زر تسجيل الدخول
  const loginButton = document.getElementById('loginButton');
  const loginPanel = document.getElementById('loginPanel');
  
  if (loginButton && loginPanel) {
    loginButton.addEventListener('click', function() {
      if (loginPanel.style.display === 'block') {
        loginPanel.style.display = 'none';
      } else {
        loginPanel.style.display = 'block';
      }
    });
    
    // إخفاء لوحة تسجيل الدخول عند النقر خارجها
    document.addEventListener('click', function(event) {
      if (!loginButton.contains(event.target) && !loginPanel.contains(event.target) && loginPanel.style.display === 'block') {
        loginPanel.style.display = 'none';
      }
    });
  }
  
  // زر تقديم تسجيل الدخول
  const loginSubmitBtn = document.getElementById('loginSubmitBtn');
  if (loginSubmitBtn) {
    loginSubmitBtn.addEventListener('click', function() {
      const username = document.getElementById('usernameInput').value;
      const password = document.getElementById('passwordInput').value;
      
      if (username === 'admin' && password === 'admin123') {
        isAdmin = true;
        document.getElementById('adminPanel').style.display = 'block';
        loginPanel.style.display = 'none';
        document.getElementById('loginButton').innerHTML = '<i class="bi bi-person-check-fill"></i> مدير النظام';
        
        // تحديث إحصائيات لوحة الإدارة
        updateAdminStatistics();
        // عرض جدول العقارات في لوحة الإدارة
        displayPropertiesTable(properties);
      } else {
        alert('اسم المستخدم أو كلمة المرور غير صحيحة!');
      }
    });
  }
  
  // زر حفظ العقار
  const propertyForm = document.getElementById('propertyForm');
  if (propertyForm) {
    propertyForm.addEventListener('submit', function(e) {
      e.preventDefault();
      saveProperty();
    });
  }
  
  // زر مسح النموذج
  const clearFormBtn = document.getElementById('clearFormBtn');
  if (clearFormBtn) {
    clearFormBtn.addEventListener('click', function() {
      clearPropertyForm();
    });
  }
  
  // ترتيب العقارات
  const sortLinks = document.querySelectorAll('[data-sort]');
  sortLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const sortType = this.getAttribute('data-sort');
      sortProperties(sortType);
    });
  });
}

// بيانات العقارات - 49 عقار
const realEstateProperties = [
  {
    id: "1",
    title: "فيلا فاخرة في شمال الطائف",
    price: 1500000,
    type: "sale",
    category: "فيلا",
    location: "حي الشفا",
    area: 450,
    rooms: 6,
    bathrooms: 5,
    age: 2,
    description: "فيلا فاخرة مكونة من دورين وملحق، تشطيب فاخر، حديقة خارجية، موقف سيارات، قريبة من الخدمات",
    imageUrl: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg",
    badges: {
      featured: true,
      exclusive: false,
      pinned: true
    }
  },
  {
    id: "2",
    title: "شقة للإيجار في وسط الطائف",
    price: 25000,
    type: "rent",
    category: "شقة",
    location: "حي السلامة",
    area: 120,
    rooms: 3,
    bathrooms: 2,
    age: 5,
    description: "شقة مميزة للإيجار السنوي، مكونة من ثلاث غرف وصالة ومطبخ، قريبة من جميع الخدمات والأسواق",
    imageUrl: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg",
    badges: {
      featured: false,
      exclusive: true,
      pinned: false
    }
  },
  {
    id: "3",
    title: "عمارة استثمارية في الطائف",
    price: 3200000,
    type: "sale",
    category: "عمارة",
    location: "حي المثناة",
    area: 800,
    rooms: 12,
    bathrooms: 12,
    age: 8,
    description: "عمارة استثمارية مكونة من 8 شقق مؤجرة بالكامل، دخل سنوي ممتاز، موقع استراتيجي",
    imageUrl: "https://images.pexels.com/photos/681336/pexels-photo-681336.jpeg",
    badges: {
      featured: true,
      exclusive: false,
      pinned: true
    }
  },
  {
    id: "4",
    title: "أرض سكنية للبيع في الطائف",
    price: 600000,
    type: "sale",
    category: "أرض",
    location: "حي الوسام",
    area: 625,
    rooms: 0,
    bathrooms: 0,
    age: 0,
    description: "أرض سكنية مخططة وجاهزة للبناء، على شارعين، قريبة من المرافق الحكومية والخدمات",
    imageUrl: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    badges: {
      featured: false,
      exclusive: false,
      pinned: false
    }
  },
  {
    id: "5",
    title: "استراحة مميزة للإيجار اليومي",
    price: 800,
    type: "rent",
    category: "استراحة",
    location: "الحوية",
    area: 350,
    rooms: 4,
    bathrooms: 3,
    age: 3,
    description: "استراحة فاخرة للإيجار اليومي، مسبح خاص، حديقة واسعة، مكان للشواء، ملعب أطفال",
    imageUrl: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg",
    badges: {
      featured: true,
      exclusive: false,
      pinned: true
    }
  },
  {
    id: "6",
    title: "دور أرضي للإيجار",
    price: 18000,
    type: "rent",
    category: "دور",
    location: "حي الربوة",
    area: 180,
    rooms: 4,
    bathrooms: 2,
    age: 10,
    description: "دور أرضي للإيجار، مدخل مستقل، حوش خاص، قريب من المدارس والمساجد",
    imageUrl: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg",
    badges: {
      featured: false,
      exclusive: false,
      pinned: false
    }
  },
  {
    id: "7",
    title: "محل تجاري للإيجار",
    price: 35000,
    type: "rent",
    category: "محل تجاري",
    location: "شارع الستين",
    area: 85,
    rooms: 1,
    bathrooms: 1,
    age: 4,
    description: "محل تجاري على شارع رئيسي، واجهة زجاجية، ديكورات حديثة، مكيف، مناسب لجميع الأنشطة التجارية",
    imageUrl: "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg",
    badges: {
      featured: false,
      exclusive: true,
      pinned: true
    }
  },
  {
    id: "8",
    title: "مزرعة للبيع جنوب الطائف",
    price: 1200000,
    type: "sale",
    category: "مزرعة",
    location: "الهدا",
    area: 2500,
    rooms: 3,
    bathrooms: 2,
    age: 15,
    description: "مزرعة مثمرة للبيع، بئر خاص، أشجار متنوعة، بيت للسكن، أسوار من جميع الجهات",
    imageUrl: "https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg",
    badges: {
      featured: true,
      exclusive: false,
      pinned: false
    }
  },
  {
    id: "9",
    title: "فيلا مفروشة للإيجار الشهري",
    price: 8000,
    type: "rent",
    category: "فيلا",
    location: "الشفا",
    area: 320,
    rooms: 5,
    bathrooms: 4,
    age: 1,
    description: "فيلا حديثة مفروشة بالكامل للإيجار الشهري، مكيفات مركزية، مسبح صغير، حديقة، نظام أمان",
    imageUrl: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    badges: {
      featured: true,
      exclusive: true,
      pinned: true
    }
  },
  {
    id: "10",
    title: "مكتب إداري فاخر",
    price: 45000,
    type: "rent",
    category: "مكتب",
    location: "وسط المدينة",
    area: 110,
    rooms: 3,
    bathrooms: 2,
    age: 2,
    description: "مكتب إداري فاخر للإيجار السنوي، مقسم إلى 3 غرف، استقبال، قاعة اجتماعات، مطبخ صغير",
    imageUrl: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg",
    badges: {
      featured: false,
      exclusive: true,
      pinned: false
    }
  },
  {
    id: "11",
    title: "شقة دوبلكس للبيع",
    price: 850000,
    type: "sale",
    category: "شقة",
    location: "حي النزهة",
    area: 220,
    rooms: 5,
    bathrooms: 3,
    age: 3,
    description: "شقة دوبلكس فاخرة للبيع، تشطيب راقي، تكييف مركزي، موقف خاص، غرفة خادمة، مدخل مستقل",
    imageUrl: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg",
    badges: {
      featured: false,
      exclusive: false,
      pinned: true
    }
  },
  {
    id: "12",
    title: "أرض تجارية في موقع حيوي",
    price: 2500000,
    type: "sale",
    category: "أرض",
    location: "شارع الملك عبدالعزيز",
    area: 900,
    rooms: 0,
    bathrooms: 0,
    age: 0,
    description: "أرض تجارية على شارع رئيسي، تصلح لإقامة مجمع تجاري أو فندق، كروكي جاهز، جميع الخدمات متوفرة",
    imageUrl: "https://images.pexels.com/photos/63238/pexels-photo-63238.jpeg",
    badges: {
      featured: true,
      exclusive: true,
      pinned: true
    }
  },
  {
    id: "13",
    title: "استراحة كبيرة للمناسبات",
    price: 1500,
    type: "rent",
    category: "استراحة",
    location: "السر",
    area: 600,
    rooms: 6,
    bathrooms: 4,
    age: 5,
    description: "استراحة واسعة للإيجار اليومي، تصلح للمناسبات والأفراح، صالة كبيرة، مسبح، قسم للعائلات، مواقف واسعة",
    imageUrl: "https://images.pexels.com/photos/32870/pexels-photo.jpg",
    badges: {
      featured: true,
      exclusive: false,
      pinned: false
    }
  },
  {
    id: "14",
    title: "بيت شعبي للبيع",
    price: 350000,
    type: "sale",
    category: "دور",
    location: "حي الشهداء",
    area: 200,
    rooms: 4,
    bathrooms: 2,
    age: 20,
    description: "بيت شعبي للبيع، يصلح للسكن أو الاستثمار، موقع حيوي، قريب من السوق والمسجد والمدارس",
    imageUrl: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    badges: {
      featured: false,
      exclusive: false,
      pinned: false
    }
  },
  {
    id: "15",
    title: "عمارة سكنية حديثة",
    price: 4200000,
    type: "sale",
    category: "عمارة",
    location: "حي الفيصلية",
    area: 950,
    rooms: 16,
    bathrooms: 16,
    age: 1,
    description: "عمارة سكنية حديثة البناء، مكونة من 8 شقق فاخرة، مصعد، مواقف، نظام أمان، دخل استثماري ممتاز",
    imageUrl: "https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg",
    badges: {
      featured: true,
      exclusive: true,
      pinned: true
    }
  },
  {
    id: "16",
    title: "محل للإيجار - جاليري",
    price: 60000,
    type: "rent",
    category: "محل تجاري",
    location: "شارع الجامعة",
    area: 120,
    rooms: 1,
    bathrooms: 1,
    age: 2,
    description: "محل تجاري فاخر بتصميم عصري، يصلح لمعارض الملابس والمجوهرات، واجهة كبيرة، ارتفاع السقف 4 متر",
    imageUrl: "https://images.pexels.com/photos/264618/pexels-photo-264618.jpeg",
    badges: {
      featured: true,
      exclusive: false,
      pinned: true
    }
  },
  {
    id: "17",
    title: "مزرعة مطورة للاستثمار السياحي",
    price: 3500000,
    type: "sale",
    category: "مزرعة",
    location: "الشفا",
    area: 5000,
    rooms: 4,
    bathrooms: 3,
    age: 8,
    description: "مزرعة متكاملة مطورة للاستثمار السياحي، استراحات، مسابح، ملاعب، مطعم، بيوت شعر، أشجار مثمرة، آبار",
    imageUrl: "https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg",
    badges: {
      featured: true,
      exclusive: true,
      pinned: true
    }
  },
  {
    id: "18",
    title: "فيلا مودرن بتصميم فريد",
    price: 2200000,
    type: "sale",
    category: "فيلا",
    location: "حي الفيصلية",
    area: 400,
    rooms: 5,
    bathrooms: 5,
    age: 0,
    description: "فيلا حديثة بتصميم مودرن فريد، تشطيبات فاخرة، نظام منزل ذكي، حديقة، مسبح، غرفة سينما، ضمانات على جميع التمديدات",
    imageUrl: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
    badges: {
      featured: true,
      exclusive: false,
      pinned: true
    }
  },
  {
    id: "19",
    title: "شقة سكنية بإطلالة رائعة",
    price: 600000,
    type: "sale",
    category: "شقة",
    location: "الشفا",
    area: 150,
    rooms: 4,
    bathrooms: 3,
    age: 2,
    description: "شقة سكنية فاخرة في عمارة حديثة، إطلالة رائعة، تشطيب فاخر، غرفة ماستر مع حمام خاص، صالة واسعة، مطبخ راكب",
    imageUrl: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg",
    badges: {
      featured: false,
      exclusive: true,
      pinned: false
    }
  },
  {
    id: "20",
    title: "دور علوي مستقل للإيجار",
    price: 22000,
    type: "rent",
    category: "دور",
    location: "حي الوسام",
    area: 200,
    rooms: 5,
    bathrooms: 3,
    age: 5,
    description: "دور علوي للإيجار السنوي، مدخل مستقل، سطح خاص، مكيفات سبليت، مطبخ راكب، قريب من الخدمات",
    imageUrl: "https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg",
    badges: {
      featured: false,
      exclusive: false,
      pinned: true
    }
  },
  {
    id: "21",
    title: "مجمع فلل فاخر للبيع",
    price: 9500000,
    type: "sale",
    category: "فيلا",
    location: "السلامة",
    area: 1500,
    rooms: 20,
    bathrooms: 16,
    age: 3,
    description: "مجمع فلل فاخر يتكون من 4 فلل متصلة بتصاميم مختلفة، مسبح مشترك، حديقة كبيرة، غرف حارس وسائق، مناسب للعائلة الكبيرة",
    imageUrl: "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg",
    badges: {
      featured: true,
      exclusive: true,
      pinned: true
    }
  },
  {
    id: "22",
    title: "أرض زراعية للبيع",
    price: 400000,
    type: "sale",
    category: "أرض",
    location: "الهدا",
    area: 3000,
    rooms: 0,
    bathrooms: 0,
    age: 0,
    description: "أرض زراعية خصبة، تربة متميزة، بئر ماء عذب، محاطة بمزارع منتجة، تصلح لجميع أنواع الزراعة، صك شرعي",
    imageUrl: "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg",
    badges: {
      featured: false,
      exclusive: false,
      pinned: false
    }
  },
  {
    id: "23",
    title: "استراحة فاخرة مع ملعب كرة قدم",
    price: 2500,
    type: "rent",
    category: "استراحة",
    location: "حي الواحة",
    area: 800,
    rooms: 5,
    bathrooms: 4,
    age: 4,
    description: "استراحة فخمة لإيجار يومي، مسبح مسخن، ملعب كرة قدم خماسي، صالة ألعاب، مكان مخصص للشواء، غرف واسعة",
    imageUrl: "https://images.pexels.com/photos/32870/pexels-photo.jpg",
    badges: {
      featured: true,
      exclusive: false,
      pinned: true
    }
  },
  {
    id: "24",
    title: "مكتب تجاري في برج مركزي",
    price: 75000,
    type: "rent",
    category: "مكتب",
    location: "وسط المدينة",
    area: 180,
    rooms: 4,
    bathrooms: 2,
    age: 1,
    description: "مكتب فاخر في برج تجاري حديث، إطلالة مميزة، تشطيبات فاخرة، نظام تكييف مركزي، خدمات أمن وصيانة 24 ساعة",
    imageUrl: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg",
    badges: {
      featured: true,
      exclusive: true,
      pinned: false
    }
  },
  {
    id: "25",
    title: "محلات تجارية في مجمع جديد",
    price: 90000,
    type: "rent",
    category: "محل تجاري",
    location: "شارع الستين",
    area: 95,
    rooms: 1,
    bathrooms: 1,
    age: 0,
    description: "محلات تجارية في مجمع حديث، مساحات مختلفة، موقع مميز، واجهات زجاجية، مواقف واسعة، أنظمة أمان متطورة",
    imageUrl: "https://images.pexels.com/photos/3933881/pexels-photo-3933881.jpeg",
    badges: {
      featured: false,
      exclusive: false,
      pinned: true
    }
  },
  {
    id: "26",
    title: "بيت شعبي قابل للهدم",
    price: 900000,
    type: "sale",
    category: "دور",
    location: "حي القمرية",
    area: 350,
    rooms: 5,
    bathrooms: 2,
    age: 35,
    description: "بيت شعبي على أرض كبيرة قابل للهدم والبناء، موقع مميز، مساحة كبيرة، فرصة استثمارية",
    imageUrl: "https://images.pexels.com/photos/2249063/pexels-photo-2249063.jpeg",
    badges: {
      featured: false,
      exclusive: true,
      pinned: false
    }
  },
  {
    id: "27",
    title: "عمارة تجارية في موقع حيوي",
    price: 7500000,
    type: "sale",
    category: "عمارة",
    location: "شارع الملك فهد",
    area: 1200,
    rooms: 8,
    bathrooms: 10,
    age: 10,
    description: "عمارة تجارية في موقع حيوي، الدور الأرضي محلات والأدوار العلوية مكاتب، دخل سنوي مرتفع، فرصة استثمارية مميزة",
    imageUrl: "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg",
    badges: {
      featured: true,
      exclusive: false,
      pinned: true
    }
  },
  {
    id: "28",
    title: "فيلا نصف مفروشة للإيجار",
    price: 60000,
    type: "rent",
    category: "فيلا",
    location: "حي النزهة",
    area: 380,
    rooms: 5,
    bathrooms: 4,
    age: 7,
    description: "فيلا نصف مفروشة للإيجار السنوي، أثاث فاخر، حديقة، غرفة خادمة، مطبخ مجهز، مكيفات في جميع الغرف",
    imageUrl: "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg",
    badges: {
      featured: false,
      exclusive: true,
      pinned: true
    }
  },
  {
    id: "29",
    title: "أرض سكنية مميزة",
    price: 750000,
    type: "sale",
    category: "أرض",
    location: "حي العقيق",
    area: 500,
    rooms: 0,
    bathrooms: 0,
    age: 0,
    description: "أرض سكنية في مخطط راقي، شوارع واسعة، جميع الخدمات متوفرة، قريبة من المرافق الحكومية والمدارس والمساجد",
    imageUrl: "https://images.pexels.com/photos/36029/arpa-de-piedra-diapason-segovia-spain.jpg",
    badges: {
      featured: true,
      exclusive: false,
      pinned: false
    }
  },
  {
    id: "30",
    title: "مزرعة مثمرة للبيع",
    price: 1800000,
    type: "sale",
    category: "مزرعة",
    location: "السيل الكبير",
    area: 4000,
    rooms: 3,
    bathrooms: 2,
    age: 15,
    description: "مزرعة مثمرة للبيع، أشجار متنوعة، بئر ارتوازي، استراحة، مسبح، أسوار مبنية، كهرباء، طرق معبدة",
    imageUrl: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg",
    badges: {
      featured: true,
      exclusive: false,
      pinned: true
    }
  },
  {
    id: "31",
    title: "شقة واسعة بموقع مميز",
    price: 32000,
    type: "rent",
    category: "شقة",
    location: "الحمراء",
    area: 160,
    rooms: 4,
    bathrooms: 2,
    age: 3,
    description: "شقة واسعة للإيجار السنوي، موقع مميز، مدخل مستقل، مطبخ راكب، غرفة غسيل، قريبة من جميع الخدمات",
    imageUrl: "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg",
    badges: {
      featured: false,
      exclusive: false,
      pinned: true
    }
  },
  {
    id: "32",
    title: "دور أرضي فاخر مع حديقة",
    price: 40000,
    type: "rent",
    category: "دور",
    location: "السلامة",
    area: 250,
    rooms: 5,
    bathrooms: 3,
    age: 2,
    description: "دور أرضي فاخر للإيجار السنوي، حديقة خاصة، مدخل مستقل، مطبخ راكب، غرفة سائق، قريب من المدارس والمساجد",
    imageUrl: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    badges: {
      featured: true,
      exclusive: false,
      pinned: true
    }
  },
  {
    id: "33",
    title: "استراحة عائلية صغيرة",
    price: 500,
    type: "rent",
    category: "استراحة",
    location: "الشرقية",
    area: 200,
    rooms: 2,
    bathrooms: 2,
    age: 8,
    description: "استراحة صغيرة هادئة للإيجار اليومي، مناسبة للعائلات الصغيرة، حديقة، مسبح صغير، مكان للشواء، أمان خصوصية",
    imageUrl: "https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg",
    badges: {
      featured: false,
      exclusive: false,
      pinned: false
    }
  },
  {
    id: "34",
    title: "مكتب تجاري صغير",
    price: 15000,
    type: "rent",
    category: "مكتب",
    location: "حي المثناة",
    area: 60,
    rooms: 2,
    bathrooms: 1,
    age: 6,
    description: "مكتب تجاري صغير للإيجار السنوي، مناسب للمهن الحرة والمكاتب الصغيرة، موقع وسط المدينة، خدمات مشتركة",
    imageUrl: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg",
    badges: {
      featured: false,
      exclusive: false,
      pinned: false
    }
  },
  {
    id: "35",
    title: "محل تجاري على شارع رئيسي",
    price: 45000,
    type: "rent",
    category: "محل تجاري",
    location: "شارع الملك خالد",
    area: 75,
    rooms: 1,
    bathrooms: 1,
    age: 5,
    description: "محل تجاري على شارع رئيسي، واجهة كبيرة، ديكورات حديثة، نظام إنذار وكاميرات مراقبة، مناسب لمختلف الأنشطة",
    imageUrl: "https://images.pexels.com/photos/3694869/pexels-photo-3694869.jpeg",
    badges: {
      featured: true,
      exclusive: false,
      pinned: false
    }
  },
  {
    id: "36",
    title: "أرض تجارية للاستثمار",
    price: 3200000,
    type: "sale",
    category: "أرض",
    location: "شارع الجامعة",
    area: 1200,
    rooms: 0,
    bathrooms: 0,
    age: 0,
    description: "أرض تجارية للاستثمار، موقع استراتيجي على شارع حيوي، تصلح لإقامة مشروع تجاري كبير، كروكي وصك جاهز",
    imageUrl: "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg",
    badges: {
      featured: true,
      exclusive: false,
      pinned: true
    }
  },
  {
    id: "37",
    title: "فيلا جديدة للبيع بتصميم عصري",
    price: 1900000,
    type: "sale",
    category: "فيلا",
    location: "الوسام",
    area: 420,
    rooms: 6,
    bathrooms: 5,
    age: 0,
    description: "فيلا جديدة للبيع بتصميم عصري، مودرن، دورين وملحق، مصعد منزلي، نظام تكييف مركزي، حديقة، مسبح، نظام منزل ذكي",
    imageUrl: "https://images.pexels.com/photos/1127119/pexels-photo-1127119.jpeg",
    badges: {
      featured: true,
      exclusive: true,
      pinned: true
    }
  },
  {
    id: "38",
    title: "شقة غرفتين وصالة",
    price: 18000,
    type: "rent",
    category: "شقة",
    location: "حي الفيصلية",
    area: 90,
    rooms: 2,
    bathrooms: 1,
    age: 4,
    description: "شقة نظيفة مكونة من غرفتين وصالة ومطبخ، الماء والكهرباء مشمولة، مكيفات، قريبة من الخدمات والمواصلات",
    imageUrl: "https://images.pexels.com/photos/1795502/pexels-photo-1795502.jpeg",
    badges: {
      featured: false,
      exclusive: false,
      pinned: false
    }
  },
  {
    id: "39",
    title: "عمارة سكنية في حي راقي",
    price: 5500000,
    type: "sale",
    category: "عمارة",
    location: "حي الروضة",
    area: 1100,
    rooms: 20,
    bathrooms: 20,
    age: 6,
    description: "عمارة سكنية في حي راقي، مكونة من 10 شقق فاخرة مؤجرة بالكامل، دخل سنوي ممتاز، مصعد، مواقف سيارات، مولد كهرباء احتياطي",
    imageUrl: "https://images.pexels.com/photos/273683/pexels-photo-273683.jpeg",
    badges: {
      featured: true,
      exclusive: true,
      pinned: true
    }
  },
  {
    id: "40",
    title: "بيت شعبي مجدد للإيجار",
    price: 12000,
    type: "rent",
    category: "دور",
    location: "حي الشهداء",
    area: 150,
    rooms: 3,
    bathrooms: 2,
    age: 15,
    description: "بيت شعبي مجدد للإيجار السنوي، ترميم حديث، مكيفات، خزان ماء خاص، قريب من الخدمات وسوق الخضار",
    imageUrl: "https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg",
    badges: {
      featured: false,
      exclusive: false,
      pinned: false
    }
  },
  {
    id: "41",
    title: "استراحة مميزة بإطلالة جبلية",
    price: 1200,
    type: "rent",
    category: "استراحة",
    location: "الشفا",
    area: 450,
    rooms: 4,
    bathrooms: 3,
    age: 6,
    description: "استراحة مميزة بإطلالة جبلية، للإيجار اليومي، جلسات داخلية وخارجية، مسبح، ملعب أطفال، حديقة واسعة",
    imageUrl: "https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg",
    badges: {
      featured: true,
      exclusive: false,
      pinned: true
    }
  },
  {
    id: "42",
    title: "مزرعة استثمارية كبيرة",
    price: 4500000,
    type: "sale",
    category: "مزرعة",
    location: "الهدا",
    area: 10000,
    rooms: 8,
    bathrooms: 6,
    age: 12,
    description: "مزرعة استثمارية كبيرة، مباني سكنية، استراحات، مسابح، قاعة احتفالات، آبار ارتوازية، أشجار مثمرة، مشروع استثماري ناجح",
    imageUrl: "https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg",
    badges: {
      featured: true,
      exclusive: true,
      pinned: true
    }
  },
  {
    id: "43",
    title: "مكتب إداري كبير",
    price: 55000,
    type: "rent",
    category: "مكتب",
    location: "وسط المدينة",
    area: 220,
    rooms: 6,
    bathrooms: 3,
    age: 3,
    description: "مكتب إداري كبير للإيجار السنوي، موقع مميز، قاعة اجتماعات، غرف إدارية، استقبال فاخر، قابل للتقسيم حسب الاحتياج",
    imageUrl: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg",
    badges: {
      featured: true,
      exclusive: false,
      pinned: true
    }
  },
  {
    id: "44",
    title: "محل تجاري زاوية",
    price: 70000,
    type: "rent",
    category: "محل تجاري",
    location: "تقاطع شارع الملك فهد مع الستين",
    area: 140,
    rooms: 1,
    bathrooms: 1,
    age: 0,
    description: "محل تجاري زاوية للإيجار السنوي، موقع مميز، واجهتين زجاجيتين، مساحة واسعة، ارتفاع 5 متر، نظام أمان متكامل",
    imageUrl: "https://images.pexels.com/photos/248771/pexels-photo-248771.jpeg",
    badges: {
      featured: true,
      exclusive: true,
      pinned: true
    }
  },
  {
    id: "45",
    title: "أرض سكنية على شارعين",
    price: 850000,
    type: "sale",
    category: "أرض",
    location: "حي النزهة",
    area: 750,
    rooms: 0,
    bathrooms: 0,
    age: 0,
    description: "أرض سكنية للبيع على شارعين زاوية، مساحة كبيرة، في حي راقي، مخطط معتمد، جميع الخدمات متوفرة، صك إلكتروني جاهز",
    imageUrl: "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg",
    badges: {
      featured: false,
      exclusive: true,
      pinned: false
    }
  },
  {
    id: "46",
    title: "فيلا مع مسبح للإيجار الشهري",
    price: 10000,
    type: "rent",
    category: "فيلا",
    location: "الحمراء",
    area: 360,
    rooms: 5,
    bathrooms: 4,
    age: 4,
    description: "فيلا فاخرة للإيجار الشهري، مسبح خاص، حديقة، غرفة خادمة، مطبخ مجهز، نظام منزل ذكي، مناسبة للعوائل والشركات",
    imageUrl: "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg",
    badges: {
      featured: true,
      exclusive: false,
      pinned: true
    }
  },
  {
    id: "47",
    title: "شقة روف مميزة للبيع",
    price: 700000,
    type: "sale",
    category: "شقة",
    location: "حي النسيم",
    area: 180,
    rooms: 3,
    bathrooms: 2,
    age: 1,
    description: "شقة روف مميزة للبيع، جلسة خارجية، إطلالة رائعة، تشطيب فاخر، مصعد خاص، مطبخ أمريكي، نظام تكييف مركزي",
    imageUrl: "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg",
    badges: {
      featured: true,
      exclusive: false,
      pinned: false
    }
  },
  {
    id: "48",
    title: "دور علوي حديث للإيجار",
    price: 28000,
    type: "rent",
    category: "دور",
    location: "الربوة",
    area: 220,
    rooms: 4,
    bathrooms: 3,
    age: 1,
    description: "دور علوي حديث للإيجار السنوي، تشطيب فاخر، سطح خاص، مدخل مستقل، مطبخ راكب، قريب من الخدمات والمدارس",
    imageUrl: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    badges: {
      featured: false,
      exclusive: true,
      pinned: true
    }
  },
  {
    id: "49",
    title: "عمارة استثمارية في موقع حيوي",
    price: 6800000,
    type: "sale",
    category: "عمارة",
    location: "شارع الملك عبدالعزيز",
    area: 980,
    rooms: 18,
    bathrooms: 18,
    age: 5,
    description: "عمارة استثمارية في موقع حيوي، مكونة من 3 محلات تجارية و 6 شقق، دخل سنوي ممتاز، فرصة استثمارية مميزة",
    imageUrl: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
    badges: {
      featured: true,
      exclusive: true,
      pinned: true
    }
  }
];

// دالة لتحميل العقارات
function loadProperties() {
  try {
    // تحميل العقارات مباشرة من المصفوفة المضمنة
    properties = [...realEstateProperties];
    
    // عرض العقارات
    displayProperties(properties);
    
    // تحديث إحصائيات لوحة الإدارة إذا كان المستخدم مسؤولًا
    if (isAdmin) {
      updateAdminStatistics();
      displayPropertiesTable(properties);
    }
    
    console.log("تم تحميل البيانات: " + properties.length + " عقار");
  } catch (error) {
    console.error("حدث خطأ أثناء تحميل العقارات:", error);
  }
}

// عرض العقارات في الصفحة الرئيسية
function displayProperties(propertiesArray) {
  const container = document.getElementById('propertiesContainer');
  if (!container) return;
  
  container.innerHTML = '';
  
  propertiesArray.forEach(property => {
    const propertyCard = createPropertyCard(property);
    container.appendChild(propertyCard);
  });
}

// إنشاء بطاقة عقار
function createPropertyCard(property) {
  const card = document.createElement('div');
  card.className = 'col';
  
  const isFeatured = property.badges && property.badges.featured;
  const isExclusive = property.badges && property.badges.exclusive;
  const isPinned = property.badges && property.badges.pinned;
  
  let badgesHTML = '';
  if (isFeatured || isExclusive || isPinned) {
    badgesHTML = `
      <div class="badge-container">
        ${isFeatured ? '<div class="property-badge badge-premium"><i class="bi bi-star-fill"></i> مميز</div>' : ''}
        ${isExclusive ? '<div class="property-badge badge-exclusive"><i class="bi bi-gem"></i> حصري</div>' : ''}
        ${isPinned ? '<div class="property-badge badge-pinned"><i class="bi bi-pin-angle-fill"></i> مثبت</div>' : ''}
      </div>
    `;
  }
  
  let quickActionsHTML = '';
  if (isAdmin) {
    quickActionsHTML = `
      <div class="property-quick-actions">
        <button class="quick-action-btn edit-btn" onclick="editProperty('${property.id}')">
          <i class="bi bi-pencil-fill"></i>
        </button>
        <button class="quick-action-btn delete-btn" onclick="deleteProperty('${property.id}')">
          <i class="bi bi-trash-fill"></i>
        </button>
      </div>
    `;
  }
  
  const priceFormatted = property.price.toLocaleString('ar-SA');
  const propertyTypeLabel = property.type === 'sale' ? 'للبيع' : 'للإيجار';
  const propertyTypeClass = property.type === 'sale' ? 'sale-label' : 'rent-label';
  
  card.innerHTML = `
    <div class="real-estate-card ${isFeatured ? 'featured-property' : ''}">
      <div class="card-image-container">
        <img src="${property.imageUrl}" alt="${property.title}" class="card-image">
        <div class="image-overlay"></div>
        <div class="property-label ${propertyTypeClass}">
          <i class="bi bi-${property.type === 'sale' ? 'tag-fill' : 'calendar-check'}"></i>
          ${propertyTypeLabel}
        </div>
        <div class="property-price">
          <i class="bi bi-cash-coin"></i>
          ${priceFormatted} ${property.type === 'rent' && property.category === 'استراحة' ? 'ريال / يوم' : 'ريال'}
        </div>
        ${badgesHTML}
        ${quickActionsHTML}
      </div>
      <div class="card-content">
        <h3 class="property-title">${property.title}</h3>
        <div class="property-address">
          <i class="bi bi-geo-alt-fill location-icon"></i>
          <span>${property.location}</span>
        </div>
        <div class="property-category">
          <i class="bi bi-building"></i>
          ${property.category}
        </div>
        <div class="property-features">
          <div class="feature">
            <i class="bi bi-bounding-box"></i>
            <span>${property.area} م²</span>
          </div>
          ${property.rooms > 0 ? `
            <div class="feature">
              <i class="bi bi-door-closed"></i>
              <span>${property.rooms} غرف</span>
            </div>
          ` : ''}
          ${property.bathrooms > 0 ? `
            <div class="feature">
              <i class="bi bi-droplet"></i>
              <span>${property.bathrooms} حمام</span>
            </div>
          ` : ''}
        </div>
        <div class="card-actions">
          <a href="https://wa.me/966555555555?text=استفسار%20عن%20${encodeURIComponent(property.title)}" class="action-button whatsapp-button">
            <i class="bi bi-whatsapp"></i>
            تواصل
          </a>
          <button class="action-button details-button">
            <i class="bi bi-info-circle"></i>
            التفاصيل
          </button>
        </div>
      </div>
    </div>
  `;
  
  return card;
}

// عرض العقارات في جدول الإدارة
function displayPropertiesTable(propertiesArray) {
  const tableBody = document.getElementById('propertiesTableBody');
  if (!tableBody) return;
  
  tableBody.innerHTML = '';
  
  propertiesArray.forEach(property => {
    const row = document.createElement('tr');
    const priceFormatted = property.price.toLocaleString('ar-SA');
    
    row.innerHTML = `
      <td>${property.id}</td>
      <td>${property.title}</td>
      <td>${property.category}</td>
      <td>${priceFormatted} ريال</td>
      <td>${property.location}</td>
      <td>
        <span class="badge ${property.type === 'sale' ? 'bg-success' : 'bg-primary'}">
          ${property.type === 'sale' ? 'للبيع' : 'للإيجار'}
        </span>
      </td>
      <td>
        <div class="btn-group btn-group-sm">
          <button class="btn btn-primary" onclick="editProperty('${property.id}')">
            <i class="bi bi-pencil"></i>
          </button>
          <button class="btn btn-danger" onclick="deleteProperty('${property.id}')">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </td>
    `;
    
    tableBody.appendChild(row);
  });
}

// تحديث إحصائيات لوحة الإدارة
function updateAdminStatistics() {
  if (!document.getElementById('adminPanel')) return;
  
  const totalProperties = properties.length;
  const forSaleCount = properties.filter(p => p.type === 'sale').length;
  const forRentCount = properties.filter(p => p.type === 'rent').length;
  
  document.getElementById('totalProperties').textContent = totalProperties;
  document.getElementById('forSaleCount').textContent = forSaleCount;
  document.getElementById('forRentCount').textContent = forRentCount;
  
  // تحديث عداد الزوار في لوحة الإدارة
  const visitorCount = localStorage.getItem('visitorCount') || 0;
  if (document.getElementById('adminVisitors')) {
    document.getElementById('adminVisitors').textContent = visitorCount;
  }
}

// فتح نموذج تعديل العقار
function editProperty(propertyId) {
  const property = properties.find(p => p.id === propertyId);
  if (!property) return;
  
  document.getElementById('propertyTitle').value = property.title;
  document.getElementById('propertyPrice').value = property.price;
  document.getElementById('propertyCategory').value = property.category;
  document.getElementById('propertyType').value = property.type;
  document.getElementById('propertyLocation').value = property.location;
  document.getElementById('propertyArea').value = property.area;
  document.getElementById('propertyRooms').value = property.rooms;
  document.getElementById('propertyBathrooms').value = property.bathrooms;
  document.getElementById('propertyAge').value = property.age;
  document.getElementById('propertyDescription').value = property.description;
  document.getElementById('propertyImageURL').value = property.imageUrl;
  
  document.getElementById('featuredBadge').checked = property.badges?.featured || false;
  document.getElementById('exclusiveBadge').checked = property.badges?.exclusive || false;
  document.getElementById('pinnedBadge').checked = property.badges?.pinned || false;
  
  document.getElementById('savePropertyBtn').innerHTML = '<i class="bi bi-check-circle me-2"></i>تحديث العقار';
  
  currentEditId = propertyId;
  
  document.querySelector('.admin-form-container').scrollIntoView({ behavior: 'smooth' });
}

// حذف عقار
function deleteProperty(propertyId) {
  if (!confirm('هل أنت متأكد من حذف هذا العقار؟')) return;
  
  properties = properties.filter(p => p.id !== propertyId);
  displayProperties(properties);
  displayPropertiesTable(properties);
  updateAdminStatistics();
  
  alert('تم حذف العقار بنجاح');
}

// حفظ العقار (إضافة/تعديل)
function saveProperty() {
  const propertyData = {
    title: document.getElementById('propertyTitle').value,
    price: parseFloat(document.getElementById('propertyPrice').value),
    type: document.getElementById('propertyType').value,
    category: document.getElementById('propertyCategory').value,
    location: document.getElementById('propertyLocation').value,
    area: parseFloat(document.getElementById('propertyArea').value) || 0,
    rooms: parseInt(document.getElementById('propertyRooms').value) || 0,
    bathrooms: parseInt(document.getElementById('propertyBathrooms').value) || 0,
    age: parseInt(document.getElementById('propertyAge').value) || 0,
    description: document.getElementById('propertyDescription').value,
    imageUrl: document.getElementById('propertyImageURL').value,
    badges: {
      featured: document.getElementById('featuredBadge').checked,
      exclusive: document.getElementById('exclusiveBadge').checked,
      pinned: document.getElementById('pinnedBadge').checked
    }
  };
  
  if (currentEditId) {
    // تعديل عقار موجود
    const index = properties.findIndex(p => p.id === currentEditId);
    if (index !== -1) {
      properties[index] = { ...propertyData, id: currentEditId };
    }
    displayProperties(properties);
    displayPropertiesTable(properties);
    clearPropertyForm();
    alert('تم تحديث العقار بنجاح');
  } else {
    // إضافة عقار جديد
    const newId = (parseInt(properties[0]?.id || "0") + 1).toString();
    propertyData.id = newId;
    
    properties.unshift(propertyData);
    displayProperties(properties);
    displayPropertiesTable(properties);
    updateAdminStatistics();
    clearPropertyForm();
    alert('تم إضافة العقار بنجاح');
  }
}

// مسح نموذج العقار
function clearPropertyForm() {
  document.getElementById('propertyForm').reset();
  document.getElementById('savePropertyBtn').innerHTML = '<i class="bi bi-save me-2"></i>حفظ العقار';
  currentEditId = null;
}

// ترتيب العقارات
function sortProperties(sortType) {
  let sortedProperties = [...properties];
  
  switch (sortType) {
    case 'recent':
      // افتراضياً يكون الترتيب حسب الأحدث (بفرض أن العقارات مضافة بترتيب عكسي)
      break;
    
    case 'price-asc':
      sortedProperties.sort((a, b) => a.price - b.price);
      break;
    
    case 'price-desc':
      sortedProperties.sort((a, b) => b.price - a.price);
      break;
    
    case 'area-asc':
      sortedProperties.sort((a, b) => a.area - b.area);
      break;
    
    case 'area-desc':
      sortedProperties.sort((a, b) => b.area - a.area);
      break;
  }
  
  displayProperties(sortedProperties);
}

// إضافة دوال عالمية للاستخدام في HTML
window.editProperty = editProperty;
window.deleteProperty = deleteProperty;
window.clearPropertyForm = clearPropertyForm;
