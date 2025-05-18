// بيانات العقارات الثابتة (49 عقار)
const properties = [
  {
    id: 1,
    title: "فيلا فاخرة في حي الوسام",
    description: "فيلا فاخرة في حي الوسام، تتميز بالتصميم الحديث والمساحة الواسعة. تحتوي على 6 غرف نوم و4 حمامات ومجلس عربي وصالة واسعة ومطبخ مجهز بالكامل.",
    price: 1500000,
    category: "فلل",
    location: "الطائف - حي الوسام",
    mainImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    features: {
      rooms: 6,
      bathrooms: 4,
      area: 350
    },
    type: "للبيع",
    createdAt: 1694764800000,
    key: "local_1",
    badge: "featured"
  },
  {
    id: 2,
    title: "شقة مميزة في حي شهار",
    description: "شقة فاخرة في حي شهار، تتكون من 3 غرف نوم وصالة واسعة ومطبخ مجهز. الشقة حديثة البناء وتطل على منظر خلاب.",
    price: 650000,
    category: "شقق",
    location: "الطائف - حي شهار",
    mainImage: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80",
    features: {
      rooms: 3,
      bathrooms: 2,
      area: 120
    },
    type: "للبيع",
    createdAt: 1694851200000,
    key: "local_2"
  },
  {
    id: 3,
    title: "أرض سكنية في حي الفيصلية",
    description: "أرض سكنية مميزة في حي الفيصلية، في موقع استراتيجي قريب من الخدمات. مناسبة للبناء السكني.",
    price: 800000,
    category: "أراضي",
    location: "الطائف - حي الفيصلية",
    mainImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    features: {
      area: 625
    },
    type: "للبيع",
    createdAt: 1694937600000,
    key: "local_3",
    badge: "pinned"
  },
  {
    id: 4,
    title: "شاليه فاخر للإيجار اليومي",
    description: "شاليه فاخر للإيجار اليومي، يتكون من 3 غرف نوم وصالة واسعة ومسبح خاص. مناسب للعائلات والمناسبات الخاصة.",
    price: 500,
    category: "شاليهات",
    location: "الطائف - طريق الهدا",
    mainImage: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    features: {
      rooms: 3,
      bathrooms: 2,
      area: 200
    },
    type: "للإيجار",
    createdAt: 1695024000000,
    key: "local_4"
  },
  {
    id: 5,
    title: "مكتب تجاري في وسط المدينة",
    description: "مكتب تجاري في وسط المدينة، موقع مميز يصلح لجميع الأنشطة التجارية. المكتب مجهز بالكامل وجاهز للاستخدام.",
    price: 35000,
    category: "مكاتب",
    location: "الطائف - وسط المدينة",
    mainImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    features: {
      rooms: 2,
      bathrooms: 1,
      area: 80
    },
    type: "للإيجار",
    createdAt: 1695110400000,
    key: "local_5",
    badge: "exclusive"
  },
  {
    id: 6,
    title: "فيلا دوبلكس في السلامة",
    description: "فيلا دوبلكس فاخرة في حي السلامة، تصميم عصري وإطلالة رائعة. تتكون من 5 غرف نوم ومجلسين وصالة كبيرة وحديقة خاصة.",
    price: 1800000,
    category: "فلل",
    location: "الطائف - حي السلامة",
    mainImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    features: {
      rooms: 5,
      bathrooms: 5,
      area: 400
    },
    type: "للبيع",
    createdAt: 1695196800000,
    key: "local_6"
  },
  {
    id: 7,
    title: "شقة مفروشة للإيجار الشهري",
    description: "شقة مفروشة للإيجار الشهري، مؤثثة بالكامل ومجهزة بجميع الأجهزة الكهربائية. تتكون من غرفتين نوم وصالة ومطبخ.",
    price: 2500,
    category: "شقق",
    location: "الطائف - حي الربوة",
    mainImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    features: {
      rooms: 2,
      bathrooms: 1,
      area: 100
    },
    type: "للإيجار",
    createdAt: 1695283200000,
    key: "local_7"
  },
  {
    id: 8,
    title: "محل تجاري في مركز تسوق",
    description: "محل تجاري في مركز تسوق مميز، موقع استراتيجي وواجهة زجاجية كبيرة. مناسب لجميع الأنشطة التجارية.",
    price: 45000,
    category: "محلات",
    location: "الطائف - طريق الملك فهد",
    mainImage: "https://images.unsplash.com/photo-1604754742629-3e0498a7991c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    features: {
      area: 64
    },
    type: "للإيجار",
    createdAt: 1695369600000,
    key: "local_8",
    badge: "featured"
  },
  {
    id: 9,
    title: "استراحة عائلية مميزة",
    description: "استراحة عائلية مميزة تتكون من 4 غرف نوم ومجلس رجال ومجلس نساء وصالة واسعة ومسبح خاص. مناسبة للعائلات الكبيرة.",
    price: 1200000,
    category: "استراحات",
    location: "الطائف - حي الضباب",
    mainImage: "https://images.unsplash.com/photo-1595877244574-e90ce41ce089?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    features: {
      rooms: 4,
      bathrooms: 3,
      area: 500
    },
    type: "للبيع",
    createdAt: 1695456000000,
    key: "local_9"
  },
  {
    id: 10,
    title: "أرض زراعية بالحوية",
    description: "أرض زراعية مميزة في منطقة الحوية، تربة خصبة ومصدر مياه دائم. مناسبة للزراعة والاستثمار.",
    price: 1500000,
    category: "أراضي",
    location: "الطائف - الحوية",
    mainImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    features: {
      area: 5000
    },
    type: "للبيع",
    createdAt: 1695542400000,
    key: "local_10",
    badge: "pinned"
  },
  {
    id: 11,
    title: "فيلا مودرن في حي النسيم",
    description: "فيلا بتصميم مودرن في حي النسيم، تتميز بالخصوصية والإطلالة الرائعة. تتكون من 7 غرف و5 حمامات وحديقة خاصة.",
    price: 2200000,
    category: "فلل",
    location: "الطائف - حي النسيم",
    mainImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    features: {
      rooms: 7,
      bathrooms: 5,
      area: 450
    },
    type: "للبيع",
    createdAt: 1695628800000,
    key: "local_11"
  },
  {
    id: 12,
    title: "بنتهاوس فاخر وسط المدينة",
    description: "بنتهاوس فاخر في وسط المدينة، يتميز بالإطلالة البانورامية على المدينة. يتكون من 4 غرف نوم وصالة كبيرة وتراس واسع.",
    price: 1600000,
    category: "شقق",
    location: "الطائف - وسط المدينة",
    mainImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    features: {
      rooms: 4,
      bathrooms: 3,
      area: 250
    },
    type: "للبيع",
    createdAt: 1695715200000,
    key: "local_12",
    badge: "exclusive"
  },
  {
    id: 13,
    title: "مزرعة منتجة للبيع",
    description: "مزرعة منتجة للبيع، تحتوي على أشجار مثمرة متنوعة وبئر ماء خاص. تشمل منزل مكون من 3 غرف ومجلس.",
    price: 900000,
    category: "مزارع",
    location: "الطائف - الشفا",
    mainImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    features: {
      rooms: 3,
      bathrooms: 2,
      area: 3000
    },
    type: "للبيع",
    createdAt: 1695801600000,
    key: "local_13"
  },
  {
    id: 14,
    title: "عمارة سكنية استثمارية",
    description: "عمارة سكنية استثمارية، مكونة من 8 شقق مؤجرة بالكامل. عائد استثماري ممتاز ودخل شهري ثابت.",
    price: 3500000,
    category: "عمائر",
    location: "الطائف - حي المثناة",
    mainImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    features: {
      rooms: 24,
      bathrooms: 16,
      area: 800
    },
    type: "للبيع",
    createdAt: 1695888000000,
    key: "local_14",
    badge: "featured"
  },
  {
    id: 15,
    title: "شقة غرفتين للإيجار",
    description: "شقة مكونة من غرفتين نوم وصالة ومطبخ، نظيفة ومرتبة، موقع هادئ وقريب من الخدمات.",
    price: 15000,
    category: "شقق",
    location: "الطائف - حي العزيزية",
    mainImage: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    features: {
      rooms: 2,
      bathrooms: 1,
      area: 90
    },
    type: "للإيجار",
    createdAt: 1695974400000,
    key: "local_15"
  },
  {
    id: 16,
    title: "فيلا مؤثثة للإيجار السنوي",
    description: "فيلا مؤثثة بالكامل للإيجار السنوي، تتكون من 5 غرف نوم وصالة كبيرة ومجلس وحديقة. مناسبة للعائلات.",
    price: 80000,
    category: "فلل",
    location: "الطائف - حي الأمانة",
    mainImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80",
    features: {
      rooms: 5,
      bathrooms: 4,
      area: 380
    },
    type: "للإيجار",
    createdAt: 1696060800000,
    key: "local_16",
    badge: "pinned"
  },
  {
    id: 17,
    title: "أرض تجارية بموقع مميز",
    description: "أرض تجارية بموقع مميز على شارع تجاري رئيسي. فرصة استثمارية مميزة في منطقة حيوية.",
    price: 2000000,
    category: "أراضي",
    location: "الطائف - شارع الجيش",
    mainImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    features: {
      area: 900
    },
    type: "للبيع",
    createdAt: 1696147200000,
    key: "local_17"
  },
  {
    id: 18,
    title: "شقة غرفة وصالة للإيجار",
    description: "شقة مكونة من غرفة نوم وصالة ومطبخ، مناسبة للعزاب أو الأزواج. موقع مميز وقريب من الخدمات.",
    price: 12000,
    category: "شقق",
    location: "الطائف - حي الفيصلية",
    mainImage: "https://images.unsplash.com/photo-1471623432079-b009d30b911d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    features: {
      rooms: 1,
      bathrooms: 1,
      area: 60
    },
    type: "للإيجار",
    createdAt: 1696233600000,
    key: "local_18",
    badge: "exclusive"
  },
  {
    id: 19,
    title: "مكتب مجهز في مجمع تجاري",
    description: "مكتب مجهز في مجمع تجاري حديث، مناسب للشركات والمكاتب المهنية. يشمل خدمات الأمن والنظافة.",
    price: 25000,
    category: "مكاتب",
    location: "الطائف - طريق الملك عبدالعزيز",
    mainImage: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    features: {
      rooms: 3,
      bathrooms: 2,
      area: 120
    },
    type: "للإيجار",
    createdAt: 1696320000000,
    key: "local_19"
  },
  {
    id: 20,
    title: "فيلا فاخرة مع مسبح",
    description: "فيلا فاخرة مع مسبح خاص في حي راقي. تتكون من 6 غرف نوم ومجلسين وصالة كبيرة وغرفة طعام.",
    price: 2500000,
    category: "فلل",
    location: "الطائف - حي قروى",
    mainImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    features: {
      rooms: 6,
      bathrooms: 6,
      area: 500
    },
    type: "للبيع",
    createdAt: 1696406400000,
    key: "local_20",
    badge: "featured"
  },
  {
    id: 21,
    title: "دور أرضي مستقل",
    description: "دور أرضي مستقل مع مدخل خاص وحوش. يتكون من 3 غرف نوم وصالة ومطبخ. مناسب للعائلات الصغيرة.",
    price: 700000,
    category: "أدوار",
    location: "الطائف - حي الشرقية",
    mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    features: {
      rooms: 3,
      bathrooms: 2,
      area: 250
    },
    type: "للبيع",
    createdAt: 1696492800000,
    key: "local_21"
  },
  {
    id: 22,
    title: "استراحة للإيجار اليومي",
    description: "استراحة مميزة للإيجار اليومي، تتكون من 3 غرف ومجلس ومسبح ومكان للشواء. مناسبة للعائلات.",
    price: 800,
    category: "استراحات",
    location: "الطائف - حي الشفا",
    mainImage: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    features: {
      rooms: 3,
      bathrooms: 2,
      area: 400
    },
    type: "للإيجار",
    createdAt: 1696579200000,
    key: "local_22",
    badge: "pinned"
  },
  {
    id: 23,
    title: "أرض سكنية مخططة",
    description: "أرض سكنية في مخطط معتمد، جاهزة للبناء مباشرة. موقع مميز وقريب من الخدمات.",
    price: 450000,
    category: "أراضي",
    location: "الطائف - حي المطار",
    mainImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    features: {
      area: 480
    },
    type: "للبيع",
    createdAt: 1696665600000,
    key: "local_23"
  },
  {
    id: 24,
    title: "شقة في برج جديد",
    description: "شقة واسعة في برج سكني جديد، تتكون من 3 غرف نوم وصالة ومطبخ فاخر. يشمل المبنى مسبح ونادي صحي.",
    price: 850000,
    category: "شقق",
    location: "الطائف - حي المروج",
    mainImage: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    features: {
      rooms: 3,
      bathrooms: 2,
      area: 150
    },
    type: "للبيع",
    createdAt: 1696752000000,
    key: "local_24",
    badge: "exclusive"
  },
  {
    id: 25,
    title: "محل للإيجار بموقع حيوي",
    description: "محل تجاري للإيجار في موقع حيوي وذو حركة تجارية نشطة. مساحة واسعة وواجهة زجاجية كبيرة.",
    price: 40000,
    category: "محلات",
    location: "الطائف - شارع الستين",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
    features: {
      area: 80
    },
    type: "للإيجار",
    createdAt: 1696838400000,
    key: "local_25"
  },
  {
    id: 26,
    title: "شقة ستوديو مفروشة",
    description: "شقة ستوديو مفروشة بالكامل، مناسبة للسكن الفردي. موقع مركزي وقريب من الخدمات.",
    price: 18000,
    category: "شقق",
    location: "الطائف - وسط المدينة",
    mainImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
    features: {
      rooms: 1,
      bathrooms: 1,
      area: 50
    },
    type: "للإيجار",
    createdAt: 1696924800000,
    key: "local_26",
    badge: "featured"
  },
  {
    id: 27,
    title: "فيلا حديثة بالنخيل",
    description: "فيلا حديثة بحي النخيل، تصميم عصري وتشطيبات فاخرة. تتكون من 5 غرف نوم ومجلسين وصالة وحديقة.",
    price: 1700000,
    category: "فلل",
    location: "الطائف - حي النخيل",
    mainImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    features: {
      rooms: 5,
      bathrooms: 4,
      area: 420
    },
    type: "للبيع",
    createdAt: 1697011200000,
    key: "local_27"
  },
  {
    id: 28,
    title: "مستودع للإيجار",
    description: "مستودع للإيجار بمساحة كبيرة، يصلح للتخزين أو كمقر للشركات. يشمل مكاتب إدارية ومواقف سيارات.",
    price: 60000,
    category: "مستودعات",
    location: "الطائف - المنطقة الصناعية",
    mainImage: "https://images.unsplash.com/photo-1565891741441-64926e441838?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    features: {
      area: 1000
    },
    type: "للإيجار",
    createdAt: 1697097600000,
    key: "local_28",
    badge: "pinned"
  },
  {
    id: 29,
    title: "روف مميز للبيع",
    description: "روف مميز للبيع يتكون من 3 غرف نوم وصالة كبيرة مع تراس واسع. إطلالة رائعة على المدينة.",
    price: 950000,
    category: "شقق",
    location: "الطائف - حي الريان",
    mainImage: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    features: {
      rooms: 3,
      bathrooms: 2,
      area: 180
    },
    type: "للبيع",
    createdAt: 1697184000000,
    key: "local_29"
  },
  {
    id: 30,
    title: "أرض استثمارية كبيرة",
    description: "أرض استثمارية كبيرة بموقع استراتيجي، مناسبة لإقامة مجمع سكني أو تجاري. استثمار مضمون بإذن الله.",
    price: 5000000,
    category: "أراضي",
    location: "الطائف - طريق الرياض",
    mainImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    features: {
      area: 10000
    },
    type: "للبيع",
    createdAt: 1697270400000,
    key: "local_30",
    badge: "exclusive"
  },
  {
    id: 31,
    title: "شاليه مطل على البحر",
    description: "شاليه مطل على البحر في منطقة هادئة، يتكون من غرفتين نوم وصالة ومطبخ. مناسب للاستجمام والاسترخاء.",
    price: 400000,
    category: "شاليهات",
    location: "الطائف - عروج",
    mainImage: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    features: {
      rooms: 2,
      bathrooms: 1,
      area: 150
    },
    type: "للبيع",
    createdAt: 1697356800000,
    key: "local_31"
  },
  {
    id: 32,
    title: "شقة فاخرة بحي القيم",
    description: "شقة فاخرة في حي القيم، تشطيبات عالية الجودة وتصميم عصري. تتكون من 3 غرف نوم وصالة كبيرة.",
    price: 750000,
    category: "شقق",
    location: "الطائف - حي القيم",
    mainImage: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    features: {
      rooms: 3,
      bathrooms: 2,
      area: 140
    },
    type: "للبيع",
    createdAt: 1697443200000,
    key: "local_32",
    badge: "featured"
  },
  {
    id: 33,
    title: "محل تجاري للتقبيل",
    description: "محل تجاري للتقبيل في موقع حيوي، مجهز بالكامل ويحتوي على ديكورات فاخرة. فرصة استثمارية مميزة.",
    price: 100000,
    category: "محلات",
    location: "الطائف - شارع الحوية",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
    features: {
      area: 60
    },
    type: "للبيع",
    createdAt: 1697529600000,
    key: "local_33"
  },
  {
    id: 34,
    title: "فيلا للإيجار السنوي",
    description: "فيلا للإيجار السنوي في حي راقي، تتكون من 4 غرف نوم ومجلس وصالة ومطبخ. مناسبة للعائلات.",
    price: 60000,
    category: "فلل",
    location: "الطائف - حي الخالدية",
    mainImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80",
    features: {
      rooms: 4,
      bathrooms: 3,
      area: 350
    },
    type: "للإيجار",
    createdAt: 1697616000000,
    key: "local_34",
    badge: "pinned"
  },
  {
    id: 35,
    title: "أرض تجارية على طريق رئيسي",
    description: "أرض تجارية على طريق رئيسي، تصلح لإقامة مجمع تجاري أو مول. استثمار مضمون في موقع استراتيجي.",
    price: 3500000,
    category: "أراضي",
    location: "الطائف - طريق الملك فهد",
    mainImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    features: {
      area: 1200
    },
    type: "للبيع",
    createdAt: 1697702400000,
    key: "local_35"
  },
  {
    id: 36,
    title: "مكتب فاخر للإيجار",
    description: "مكتب فاخر للإيجار في مجمع تجاري حديث، مناسب للشركات والمكاتب المهنية. مجهز بالكامل وجاهز للاستخدام.",
    price: 35000,
    category: "مكاتب",
    location: "الطائف - شارع الستين",
    mainImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    features: {
      rooms: 3,
      bathrooms: 2,
      area: 150
    },
    type: "للإيجار",
    createdAt: 1697788800000,
    key: "local_36",
    badge: "exclusive"
  },
  {
    id: 37,
    title: "شقة عوائل بحي الوسام",
    description: "شقة عوائل في حي الوسام، نظيفة ومرتبة، تتكون من 3 غرف نوم وصالة ومطبخ. سعر مناسب وموقع مميز.",
    price: 18000,
    category: "شقق",
    location: "الطائف - حي الوسام",
    mainImage: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80",
    features: {
      rooms: 3,
      bathrooms: 2,
      area: 120
    },
    type: "للإيجار",
    createdAt: 1697875200000,
    key: "local_37"
  },
  {
    id: 38,
    title: "استراحة كبيرة للبيع",
    description: "استراحة كبيرة للبيع، تتكون من 5 غرف نوم ومجلسين ومسبح كبير وحديقة واسعة. مناسبة للعائلات الكبيرة.",
    price: 1800000,
    category: "استراحات",
    location: "الطائف - حي الضباب",
    mainImage: "https://images.unsplash.com/photo-1595877244574-e90ce41ce089?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    features: {
      rooms: 5,
      bathrooms: 4,
      area: 800
    },
    type: "للبيع",
    createdAt: 1697961600000,
    key: "local_38",
    badge: "featured"
  },
  {
    id: 39,
    title: "أرض سكنية بسعر مغري",
    description: "أرض سكنية بسعر مغري، موقع مميز وقريب من الخدمات. فرصة لا تعوض للراغبين في البناء.",
    price: 350000,
    category: "أراضي",
    location: "الطائف - حي النسيم",
    mainImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    features: {
      area: 400
    },
    type: "للبيع",
    createdAt: 1698048000000,
    key: "local_39"
  },
  {
    id: 40,
    title: "شقة مفروشة للإيجار اليومي",
    description: "شقة مفروشة للإيجار اليومي، مناسبة للعائلات والزوار. موقع مركزي وقريب من المعالم السياحية.",
    price: 250,
    category: "شقق",
    location: "الطائف - وسط المدينة",
    mainImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    features: {
      rooms: 2,
      bathrooms: 1,
      area: 90
    },
    type: "للإيجار",
    createdAt: 1698134400000,
    key: "local_40",
    badge: "pinned"
  },
  {
    id: 41,
    title: "دور علوي مستقل",
    description: "دور علوي مستقل مع سطح خاص، يتكون من 4 غرف نوم وصالة ومطبخ. مدخل خاص ومظلة للسيارة.",
    price: 750000,
    category: "أدوار",
    location: "الطائف - حي الشرقية",
    mainImage: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1086&q=80",
    features: {
      rooms: 4,
      bathrooms: 3,
      area: 280
    },
    type: "للبيع",
    createdAt: 1698220800000,
    key: "local_41"
  },
  {
    id: 42,
    title: "محل للإيجار بشارع تجاري",
    description: "محل للإيجار في شارع تجاري نشط، مساحة مناسبة ويصلح لجميع الأنشطة التجارية. سعر تنافسي.",
    price: 25000,
    category: "محلات",
    location: "الطائف - شارع الجيش",
    mainImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
    features: {
      area: 50
    },
    type: "للإيجار",
    createdAt: 1698307200000,
    key: "local_42",
    badge: "exclusive"
  },
  {
    id: 43,
    title: "فيلا درج صالة وشقتين",
    description: "فيلا درج صالة وشقتين، تصميم حديث وتشطيبات فاخرة. مناسبة للسكن العائلي والاستثمار.",
    price: 1300000,
    category: "فلل",
    location: "الطائف - حي العزيزية",
    mainImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    features: {
      rooms: 7,
      bathrooms: 5,
      area: 400
    },
    type: "للبيع",
    createdAt: 1698393600000,
    key: "local_43"
  },
  {
    id: 44,
    title: "عمارة سكنية جديدة",
    description: "عمارة سكنية جديدة مكونة من 6 شقق، دخل شهري ممتاز. فرصة استثمارية مميزة في موقع حيوي.",
    price: 2800000,
    category: "عمائر",
    location: "الطائف - حي المثناة",
    mainImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    features: {
      rooms: 18,
      bathrooms: 12,
      area: 600
    },
    type: "للبيع",
    createdAt: 1698480000000,
    key: "local_44",
    badge: "featured"
  },
  {
    id: 45,
    title: "مزرعة للبيع بالشفا",
    description: "مزرعة للبيع في منطقة الشفا، تحتوي على بيت مكون من 3 غرف وأشجار مثمرة وبئر ماء. هواء نقي ومنظر طبيعي.",
    price: 700000,
    category: "مزارع",
    location: "الطائف - الشفا",
    mainImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    features: {
      rooms: 3,
      bathrooms: 1,
      area: 2000
    },
    type: "للبيع",
    createdAt: 1698566400000,
    key: "local_45"
  },
  {
    id: 46,
    title: "شقة شبه مفروشة للإيجار",
    description: "شقة شبه مفروشة للإيجار، تحتوي على 2 غرفة نوم وصالة ومطبخ. المكيفات والستائر موجودة.",
    price: 16000,
    category: "شقق",
    location: "الطائف - حي المنتزه",
    mainImage: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    features: {
      rooms: 2,
      bathrooms: 1,
      area: 90
    },
    type: "للإيجار",
    createdAt: 1698652800000,
    key: "local_46",
    badge: "pinned"
  },
  {
    id: 47,
    title: "استراحة مميزة بحي الضباب",
    description: "استراحة مميزة في حي الضباب، تتكون من فيلا رئيسية و3 شاليهات و مسبح كبير وحديقة. مناسبة للاستثمار.",
    price: 2200000,
    category: "استراحات",
    location: "الطائف - حي الضباب",
    mainImage: "https://images.unsplash.com/photo-1595877244574-e90ce41ce089?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    features: {
      rooms: 8,
      bathrooms: 6,
      area: 1200
    },
    type: "للبيع",
    createdAt: 1698739200000,
    key: "local_47"
  },
  {
    id: 48,
    title: "شقة فاخرة في أبراج سكنية",
    description: "شقة فاخرة في مجمع أبراج سكنية راقي، إطلالة رائعة ومرافق متكاملة. تتكون من 4 غرف نوم وصالة واسعة.",
    price: 950000,
    category: "شقق",
    location: "الطائف - حي السلامة",
    mainImage: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    features: {
      rooms: 4,
      bathrooms: 3,
      area: 180
    },
    type: "للبيع",
    createdAt: 1698825600000,
    key: "local_48",
    badge: "exclusive"
  },
  {
    id: 49,
    title: "مستودع كبير للإيجار",
    description: "مستودع كبير للإيجار في المنطقة الصناعية، يصلح للتخزين أو المستودعات اللوجستية. سعر تنافسي.",
    price: 80000,
    category: "مستودعات",
    location: "الطائف - المنطقة الصناعية",
    mainImage: "https://images.unsplash.com/photo-1565891741441-64926e441838?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    features: {
      area: 1500
    },
    type: "للإيجار",
    createdAt: 1698912000000,
    key: "local_49",
    badge: "featured"
  }
];

// المتغيرات الرئيسية
let isAdmin = false;
let selectedProperty = null;

// وظائف التطبيق الرئيسية

// حفظ العقارات في التخزين المحلي (لا نستخدمها الآن لأن لدينا بيانات ثابتة)
function savePropertiesToLocalStorage() {
  localStorage.setItem("realEstateProperties", JSON.stringify(properties));
}

// استرجاع العقارات من التخزين المحلي (لا نستخدمها الآن لأن لدينا بيانات ثابتة)
function loadPropertiesFromLocalStorage() {
  const savedProperties = localStorage.getItem("realEstateProperties");
  return savedProperties ? JSON.parse(savedProperties) : [];
}

// تنسيق السعر
function formatPrice(price) {
  return new Intl.NumberFormat('ar-SA').format(price) + " ريال";
}

// عرض العقارات في الواجهة
function displayProperties() {
  // إخفاء رسالة التحميل
  const loadingEl = document.getElementById("loadingProperties");
  if(loadingEl) loadingEl.style.display = "none";

  // إفراغ حاويات العقارات
  const featuredContainer = document.getElementById("featuredProperties");
  const container = document.getElementById("propertyListings");
  
  if (!featuredContainer || !container) return;
  
  featuredContainer.innerHTML = "";
  container.innerHTML = "";
  
  // عرض العقارات المميزة والعادية
  const featured = properties.filter(p => p.badge === "featured");
  const others = properties;
  
  // ترتيب العقارات حسب الأولوية والتاريخ
  const sortedProperties = [
    ...featured.sort((a, b) => b.createdAt - a.createdAt),
    ...others.sort((a, b) => b.createdAt - a.createdAt)
  ];
  
  // تحديث عدادات العقارات في لوحة الإدارة
  if (document.getElementById('propertiesCount')) {
    document.getElementById('propertiesCount').textContent = properties.length;
  }
  
  if (document.getElementById('featuredCount')) {
    document.getElementById('featuredCount').textContent = featured.length;
  }
  
  // ملء قائمة العقارات في نموذج التعديل
  populateEditPropertySelect();
  
  // عرض العقارات المميزة في القسم المخصص
  featured.forEach(property => {
    featuredContainer.appendChild(createPropertyCard(property, true));
  });
  
  // عرض جميع العقارات
  sortedProperties.forEach(property => {
    container.appendChild(createPropertyCard(property, false));
  });
}

// إنشاء بطاقة عقار
function createPropertyCard(property, isFeatured) {
  const colDiv = document.createElement("div");
  colDiv.className = "col-md-6 col-lg-4 mb-4";

  const price = property.price ? formatPrice(property.price) : "سعر غير محدد";
  const image = property.mainImage || "https://via.placeholder.com/400x300?text=No+Image";
  const type = property.type || "للبيع";

  // استخلاص بيانات المساحة
  const area = property.features?.area || "";
  const rooms = property.features?.rooms || "";
  const bathrooms = property.features?.bathrooms || "";

  // إعداد الشارات الخاصة بالعقار
  let badgesHTML = '';

  // إضافة شارات خاصة للعقارات المميزة
  if (property.badge === "featured") {
    badgesHTML += `
      <div class="property-badge badge-premium">
        <i class="bi bi-award-fill"></i> <span>مميز</span>
      </div>
    `;
  }

  if (property.badge === "حصري" || property.isExclusive || property.badge === "exclusive") {
    badgesHTML += `
      <div class="property-badge badge-exclusive">
        <i class="bi bi-star-fill"></i> <span>حصري</span>
      </div>
    `;
  }

  if (property.badge === "عرض مثبت" || property.badge === "pinned") {
    badgesHTML += `
      <div class="property-badge badge-pinned">
        <i class="bi bi-pin-angle-fill"></i> <span>مثبت</span>
      </div>
    `;
  }
  
  // إنشاء بطاقة عقار بتصميم احترافي ومبسط
  colDiv.innerHTML = `
    <div class="real-estate-card ${isFeatured ? 'featured-property' : ''}" data-category="${property.category || ''}">
      <div class="card-image-container">
        <img src="${image}" alt="${property.title || 'عقار'}" class="card-image" loading="lazy">
        <div class="image-overlay"></div>
        
        <div class="property-label ${type === 'للإيجار' ? 'rent-label' : 'sale-label'}">
          <i class="bi ${type === 'للإيجار' ? 'bi-key' : 'bi-tags'}"></i>
          <span>${type}</span>
        </div>
        
        <div class="property-price">
          <i class="bi bi-currency-dollar"></i>
          <span>${price}</span>
        </div>
        
        <div class="badge-container">
          ${badgesHTML}
        </div>
      </div>
      
      <div class="card-content">
        <h3 class="property-title">${property.title || ""}</h3>
        
        <div class="property-address">
          <i class="bi bi-geo-alt-fill location-icon"></i>
          <span>${property.location || ""}</span>
        </div>
        
        <div class="property-category">
          <i class="bi bi-building"></i>
          <span>${property.category || "عقار"}</span>
        </div>
        
        <div class="property-features">
          ${rooms ? `<div class="feature"><i class="bi bi-door-closed"></i><span>${rooms}</span></div>` : ''}
          ${bathrooms ? `<div class="feature"><i class="bi bi-droplet"></i><span>${bathrooms}</span></div>` : ''}
          ${area ? `<div class="feature"><i class="bi bi-arrows-angle-expand"></i><span>${area} م²</span></div>` : ''}
        </div>
        
        <div class="card-actions">
          <a href="https://wa.me/966535342404?text=استفسار حول العقار: ${encodeURIComponent(property.title || '')}" class="action-button whatsapp-button" target="_blank">
            <i class="bi bi-whatsapp"></i>
            <span>واتساب</span>
          </a>
          
          <button class="action-button details-button" onclick="viewPropertyDetails('${property.key || property.id}')">
            <i class="bi bi-eye-fill"></i>
            <span>التفاصيل</span>
          </button>
        </div>
      </div>
    </div>
  `;
  
  return colDiv;
}

// عرض تفاصيل العقار
window.viewPropertyDetails = function(propertyId) {
  // البحث عن العقار 
  const property = properties.find(p => (p.key === propertyId || p.id == propertyId));
  
  if (!property) {
    alert("لم يتم العثور على العقار المطلوب");
    return;
  }
  
  // تعبئة بيانات العقار في صفحة التفاصيل
  document.getElementById("detailTitle").textContent = property.title || "عقار";
  document.getElementById("detailLocation").innerHTML = `
    <i class="bi bi-geo-alt-fill location-icon"></i>
    <span>${property.location || "غير محدد"}</span>
  `;
  
  document.getElementById("detailPrice").innerHTML = `
    <i class="bi bi-cash-coin"></i>
    <span>${property.price ? formatPrice(property.price) : "سعر غير محدد"}</span>
  `;
  
  const typeEl = document.getElementById("detailType");
  typeEl.textContent = property.type || "للبيع";
  typeEl.className = `property-detail-type ${property.type === 'للإيجار' ? 'rent' : 'sale'}`;
  
  document.getElementById("detailMainImage").src = property.mainImage || "https://via.placeholder.com/800x500?text=No+Image";
  document.getElementById("detailMainImage").alt = property.title || "صورة العقار";
  
  // عرض ميزات العقار (المساحة، عدد الغرف، الحمامات)
  const featuresEl = document.getElementById("detailFeatures");
  featuresEl.innerHTML = "";
  
  const area = property.features?.area;
  if (area) {
    featuresEl.innerHTML += `
      <div class="property-detail-feature">
        <div class="feature-icon">
          <i class="bi bi-arrows-angle-expand"></i>
        </div>
        <div class="feature-text">
          <span class="feature-value">${area} م²</span>
          <span class="feature-label">المساحة</span>
        </div>
      </div>
    `;
  }
  
  const rooms = property.features?.rooms;
  if (rooms) {
    featuresEl.innerHTML += `
      <div class="property-detail-feature">
        <div class="feature-icon">
          <i class="bi bi-door-closed"></i>
        </div>
        <div class="feature-text">
          <span class="feature-value">${rooms}</span>
          <span class="feature-label">غرف النوم</span>
        </div>
      </div>
    `;
  }
  
  const bathrooms = property.features?.bathrooms;
  if (bathrooms) {
    featuresEl.innerHTML += `
      <div class="property-detail-feature">
        <div class="feature-icon">
          <i class="bi bi-droplet"></i>
        </div>
        <div class="feature-text">
          <span class="feature-value">${bathrooms}</span>
          <span class="feature-label">الحمامات</span>
        </div>
      </div>
    `;
  }
  
  // إضافة نوع العقار كميزة
  featuresEl.innerHTML += `
    <div class="property-detail-feature">
      <div class="feature-icon">
        <i class="bi bi-building"></i>
      </div>
      <div class="feature-text">
        <span class="feature-value">${property.category || "عقار"}</span>
        <span class="feature-label">النوع</span>
      </div>
    </div>
  `;
  
  // إضافة وصف العقار
  document.getElementById("detailDescription").textContent = property.description || "لا يوجد وصف متاح لهذا العقار.";
  
  // تحديث رابط واتساب
  document.getElementById("detailWhatsapp").href = `https://wa.me/966535342404?text=استفسار حول العقار: ${encodeURIComponent(property.title || '')}`;
  
  // إخفاء جميع الأقسام وإظهار تفاصيل العقار
  document.querySelector('.welcome-section').style.display = 'none';
  document.querySelector('.search-container').style.display = 'none';
  document.querySelector('.category-tabs').style.display = 'none';
  document.getElementById('featuredProperties').parentElement.style.display = 'none';
  document.getElementById('allProperties').style.display = 'none';
  document.getElementById('contactForm').style.display = 'none';
  
  document.getElementById('propertyDetails').style.display = 'block';
  
  // التمرير إلى الأعلى
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// العودة من صفحة التفاصيل
function backToProperties() {
  document.querySelector('.welcome-section').style.display = 'block';
  document.querySelector('.search-container').style.display = 'block';
  document.querySelector('.category-tabs').style.display = 'flex';
  document.getElementById('featuredProperties').parentElement.style.display = 'block';
  document.getElementById('allProperties').style.display = 'block';
  document.getElementById('contactForm').style.display = 'block';
  
  document.getElementById('propertyDetails').style.display = 'none';
}

// البحث حسب الفئة
function filterByCategory(category) {
  const propertyCards = document.querySelectorAll('.real-estate-card');
  
  propertyCards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    const cardElement = card.closest('.col-md-6');
    
    if (category === 'all' || cardCategory === category) {
      cardElement.style.display = 'block';
    } else {
      cardElement.style.display = 'none';
    }
  });
}

// البحث المتقدم عن العقارات
function searchProperties() {
  const location = document.getElementById('searchLocation').value;
  const category = document.getElementById('searchCategory').value;
  const type = document.getElementById('searchType').value;
  const maxPrice = document.getElementById('searchPrice').value;
  
  const propertyCards = document.querySelectorAll('.real-estate-card');
  
  propertyCards.forEach(card => {
    const cardElement = card.closest('.col-md-6');
    let matchesFilter = true;
    
    // فلترة حسب الموقع
    if (location && !card.querySelector('.property-address').textContent.includes(location)) {
      matchesFilter = false;
    }
    
    // فلترة حسب الفئة
    if (category && card.getAttribute('data-category') !== category) {
      matchesFilter = false;
    }
    
    // فلترة حسب نوع العرض
    if (type) {
      const cardType = card.querySelector('.property-label').textContent.trim();
      if (!cardType.includes(type)) {
        matchesFilter = false;
      }
    }
    
    // فلترة حسب السعر
    if (maxPrice) {
      const priceText = card.querySelector('.property-price').textContent.trim();
      const priceNumber = parseInt(priceText.replace(/[^\d]/g, ''));
      
      if (priceNumber > parseInt(maxPrice)) {
        matchesFilter = false;
      }
    }
    
    // إظهار أو إخفاء العقار حسب نتيجة الفلترة
    if (matchesFilter) {
      cardElement.style.display = 'block';
    } else {
      cardElement.style.display = 'none';
    }
  });
  
  // التمرير إلى قسم العقارات
  document.getElementById('allProperties').scrollIntoView({ behavior: 'smooth' });
}

// ملء قائمة العقارات في نموذج التعديل
function populateEditPropertySelect() {
  const select = document.getElementById('selectPropertyToEdit');
  if (!select) return;
  
  // إفراغ القائمة
  while (select.options.length > 1) {
    select.remove(1);
  }
  
  // إضافة العقارات المتاحة
  properties.forEach(property => {
    const option = document.createElement('option');
    option.value = property.key || property.id;
    option.textContent = property.title || `عقار ${property.id}`;
    select.appendChild(option);
  });
}

// تحميل عقار للتعديل
function loadPropertyForEdit() {
  const propertyId = document.getElementById('selectPropertyToEdit').value;
  if (!propertyId) return;
  
  const property = properties.find(p => (p.key === propertyId || p.id == propertyId));
  if (!property) {
    alert("لم يتم العثور على العقار المطلوب");
    return;
  }
  
  // تعبئة نموذج الإضافة ببيانات العقار
  document.getElementById('propertyTitle').value = property.title || '';
  document.getElementById('propertyCategory').value = property.category || '';
  document.getElementById('propertyLocation').value = property.location || '';
  document.getElementById('propertyPrice').value = property.price || '';
  document.getElementById('propertyType').value = property.type || '';
  document.getElementById('propertyRooms').value = property.features?.rooms || '';
  document.getElementById('propertyBathrooms').value = property.features?.bathrooms || '';
  document.getElementById('propertyArea').value = property.features?.area || '';
  document.getElementById('propertyImage').value = property.mainImage || '';
  document.getElementById('propertyDescription').value = property.description || '';
  
  // تحديد الشارة إن وجدت
  if (property.badge === 'featured') {
    document.getElementById('featuredBadge').checked = true;
  } else if (property.badge === 'exclusive') {
    document.getElementById('exclusiveBadge').checked = true;
  } else if (property.badge === 'pinned') {
    document.getElementById('pinnedBadge').checked = true;
  } else {
    document.getElementById('noBadge').checked = true;
  }
  
  // حفظ العقار المختار لتعديله لاحقًا
  selectedProperty = property;
  
  // تغيير نص زر الإضافة إلى تحديث
  const addButton = document.querySelector('#addPropertyForm button[type="submit"]');
  addButton.innerHTML = '<i class="bi bi-check-circle me-2"></i>تحديث العقار';
  
  // التمرير إلى نموذج الإضافة
  document.getElementById('addPropertyForm').scrollIntoView({ behavior: 'smooth' });
}

// حذف عقار
function deleteProperty() {
  const propertyId = document.getElementById('selectPropertyToEdit').value;
  if (!propertyId || !confirm('هل أنت متأكد من حذف هذا العقار؟')) return;
  
  // البحث عن العقار وحذفه من المصفوفة
  const index = properties.findIndex(p => (p.key === propertyId || p.id == propertyId));
  
  if (index !== -1) {
    // حذف العقار من المصفوفة
    properties.splice(index, 1);
    
    // تحديث عرض العقارات
    displayProperties();
    
    // إعادة تعيين نموذج التعديل
    document.getElementById('selectPropertyToEdit').value = '';
    document.getElementById('loadPropertyForEdit').disabled = true;
    document.getElementById('deleteProperty').disabled = true;
    
    alert('تم حذف العقار بنجاح!');
  } else {
    alert('لم يتم العثور على العقار المطلوب');
  }
}

// إضافة عقار جديد أو تحديث عقار موجود
function createOrUpdateProperty(event) {
  event.preventDefault();
  
  // جمع بيانات النموذج
  const title = document.getElementById('propertyTitle').value;
  const category = document.getElementById('propertyCategory').value;
  const location = document.getElementById('propertyLocation').value;
  const price = parseFloat(document.getElementById('propertyPrice').value);
  const type = document.getElementById('propertyType').value;
  const rooms = document.getElementById('propertyRooms').value ? parseInt(document.getElementById('propertyRooms').value) : null;
  const bathrooms = document.getElementById('propertyBathrooms').value ? parseInt(document.getElementById('propertyBathrooms').value) : null;
  const area = document.getElementById('propertyArea').value ? parseInt(document.getElementById('propertyArea').value) : null;
  const mainImage = document.getElementById('propertyImage').value;
  const description = document.getElementById('propertyDescription').value;
  
  // الحصول على الشارة المختارة
  const badge = document.querySelector('input[name="propertyBadge"]:checked').value;
  
  // إعداد كائن العقار
  const propertyData = {
    title,
    category,
    location,
    price,
    type,
    features: {
      rooms,
      bathrooms,
      area
    },
    mainImage,
    description,
    badge: badge || null,
    createdAt: Date.now()
  };
  
  // تحديث عقار موجود أو إضافة عقار جديد
  if (selectedProperty) {
    // تحديث عقار موجود
    const index = properties.findIndex(p => (p.key === selectedProperty.key || p.id === selectedProperty.id));
    
    if (index !== -1) {
      // الحفاظ على المعرف والمفتاح الأصليين
      propertyData.id = selectedProperty.id;
      propertyData.key = selectedProperty.key;
      
      // تحديث العقار في المصفوفة
      properties[index] = propertyData;
      
      console.log("تم تحديث العقار:", propertyData);
    }
  } else {
    // إضافة عقار جديد
    propertyData.id = properties.length + 1;
    propertyData.key = `local_${propertyData.id}`;
    
    // إضافة العقار للمصفوفة
    properties.push(propertyData);
    
    console.log("تمت إضافة عقار جديد:", propertyData);
  }
  
  // تحديث عرض العقارات
  displayProperties();
  
  // إعادة تعيين النموذج والمتغيرات
  document.getElementById('addPropertyForm').reset();
  document.querySelector('#addPropertyForm button[type="submit"]').innerHTML = '<i class="bi bi-plus-circle me-2"></i>إضافة العقار';
  selectedProperty = null;
  
  // إظهار رسالة نجاح
  alert(selectedProperty ? 'تم تحديث العقار بنجاح!' : 'تمت إضافة العقار بنجاح!');
  
  // التمرير إلى قسم العقارات
  document.getElementById('allProperties').scrollIntoView({ behavior: 'smooth' });
}

// إرسال نموذج استفسار
function submitInquiry(event) {
  event.preventDefault();
  
  const name = document.getElementById('inquiryName').value;
  const phone = document.getElementById('inquiryPhone').value;
  const message = document.getElementById('inquiryMessage').value;
  
  alert(`شكراً ${name}! تم استلام استفسارك وسنتواصل معك قريباً على الرقم ${phone}.`);
  document.getElementById('propertyInquiryForm').reset();
}

// تحديث عداد الزائرين
function updateVisitorCount() {
  document.getElementById('visitorCount').innerHTML = '<i class="bi bi-people-fill"></i><span>10,000+</span>';
}

// تحديث التاريخ الحالي
function updateCurrentDate() {
  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const currentDateEl = document.getElementById('currentDate');
  if (currentDateEl) {
    currentDateEl.textContent = now.toLocaleDateString('ar-SA', options);
  }
}

// وظائف دورة الحياة للصفحة
document.addEventListener('DOMContentLoaded', function() {
  // تحميل العقارات واستعراضها
  displayProperties();
  
  // تحديث عداد الزائرين
  updateVisitorCount();
  
  // تحديث التاريخ الحالي في لوحة الإدارة
  updateCurrentDate();
  
  // إخفاء رسالة التحميل
  const loadingEl = document.getElementById("loadingProperties");
  if(loadingEl) loadingEl.style.display = "none";
  
  // أحداث النقر على الأزرار
  document.getElementById('loginBtn').addEventListener('click', function() {
    const loginPanel = document.getElementById('loginPanel');
    loginPanel.style.display = loginPanel.style.display === 'block' ? 'none' : 'block';
  });
  
  document.getElementById('submitLoginBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'admin123') {
      isAdmin = true;
      
      // إظهار لوحة الإدارة
      document.getElementById('adminPanel').style.display = 'block';
      
      // إخفاء لوحة تسجيل الدخول
      document.getElementById('loginPanel').style.display = 'none';
      
      // تغيير زر تسجيل الدخول
      document.getElementById('loginBtn').innerHTML = '<i class="bi bi-person-check-fill"></i><span>مسؤول النظام</span>';
      
      // التمرير إلى لوحة الإدارة
      document.getElementById('adminPanel').scrollIntoView({ behavior: 'smooth' });
    } else {
      alert('بيانات تسجيل الدخول غير صحيحة، يرجى المحاولة مرة أخرى.');
    }
  });
  
  // أحداث النقر على أزرار التصنيف
  document.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      // إزالة الكلاس النشط من جميع التبويبات
      document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
      
      // إضافة الكلاس النشط للتبويب المختار
      this.classList.add('active');
      
      // تطبيق الفلتر حسب الفئة
      filterByCategory(this.getAttribute('data-category'));
    });
  });
  
  // البحث
  document.getElementById('executeSearchBtn').addEventListener('click', searchProperties);
  
  // العودة من صفحة التفاصيل
  document.getElementById('backToProperties').addEventListener('click', backToProperties);
  
  // تفعيل تعديل وحذف العقار
  document.getElementById('selectPropertyToEdit').addEventListener('change', function() {
    const hasValue = this.value !== '';
    document.getElementById('loadPropertyForEdit').disabled = !hasValue;
    document.getElementById('deleteProperty').disabled = !hasValue;
  });
  
  document.getElementById('loadPropertyForEdit').addEventListener('click', loadPropertyForEdit);
  document.getElementById('deleteProperty').addEventListener('click', deleteProperty);
  
  // إضافة أو تحديث عقار
  document.getElementById('addPropertyForm').addEventListener('submit', createOrUpdateProperty);
  
  // إرسال طلب استفسار
  document.getElementById('propertyInquiryForm').addEventListener('submit', submitInquiry);
  
  // مشاركة العقار
  document.getElementById('shareProperty').addEventListener('click', function() {
    if (navigator.share) {
      navigator.share({
        title: document.getElementById('detailTitle').textContent,
        text: document.getElementById('detailDescription').textContent,
        url: window.location.href
      })
      .catch((error) => console.log('Error sharing:', error));
    } else {
      alert('مشاركة العقار غير متاحة في هذا المتصفح');
    }
  });
});