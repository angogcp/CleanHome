// House Cleaning Service App - Main JavaScript

// Global state management
const AppState = {
    currentLanguage: 'bm', // Default to Bahasa Melayu
    bookingData: {},
    currentStep: 1,
    bookings: []
};

// Language translations
const translations = {
    bm: {
        // Navigation
        home: 'Laman Utama',
        services: 'Perkhidmatan',
        booking: 'Tempahan',
        admin: 'Admin',
        
        // Hero Section
        heroTitle: 'Rumah Bersih, Hati Tenang',
        heroSubtitle: 'Melayani area Ipoh & sekitarnya • Pengalaman 5 tahun',
        heroCTA: 'Tempah Sekarang',
        heroIntro: 'Saya dan pasukan bukan sekadar membersih; kami menjaga ruang anda seolah-olah milik kami. Kami berikan anda hadiah masa dan persekitaran yang benar-benar bersih. Kami bukan sekadar servis; kami sebahagian daripada komuniti anda.',
        heroReady: 'Sedia untuk Perubahan Menyegarkan?',
        heroLocalExpertise: 'Kepakaran Tempatan sejak 2018.',
        heroFriendlyThorough: 'Pasukan Mesra & Teliti.',
        heroPersonalizedSchedules: 'Jadual pembersihan yang diperibadikan.',
        heroSatisfactionGuarantee: 'Jaminan Kepuasan 100%.',
        
        // Services
        basicCleaning: 'Pembersihan Asas',
        deepCleaning: 'Pembersihan Mendalam',
        moveInOut: 'Pindah Masuk/Keluar',
        postRenovation: 'Pasca Renovasi',
        hourlyCleaning: 'Pembersihan Mengikut Jam',
        
        // Service details
        duration: 'Tempoh',
        from: 'Dari',
        select: 'Pilih',
        
        // Trust elements
        experience: '5 Tahun Melayani Ipoh',
        customers: 'Pelanggan',
        
        // Coverage
        coverageTitle: 'Liputan Kawasan',
        coverageAreas: 'Ipoh, Bercham, Menglembu, Falim, Taman...',
        coverageCheck: 'Tidak pasti? WhatsApp kami untuk check',
        
        // Why choose us
        whyTitle: 'Kenapa Pilih Kami',
        why1: '✓ Berpengalaman 5 tahun',
        why2: '✓ Pekerja dipercayai & terlatih',
        why3: '✓ Harga berpatutan, hasil memuaskan',
        
        // WhatsApp
        whatsappFloat: 'Ada soalan? Chat dengan kami',
        
        // Booking flow
        step1: 'Langkah 1: Jenis Perkhidmatan & Saiz Rumah',
        step2: 'Langkah 2: Tarikh & Lokasi',
        step3: 'Langkah 3: Maklumat Hubungan',
        
        // Form labels
        serviceType: 'Jenis Perkhidmatan',
        homeSize: 'Saiz Rumah',
        small: 'Kecil (< 1000 sqft)',
        medium: 'Sederhana (1000-1800 sqft)',
        large: 'Besar (> 1800 sqft)',
        estimatedPrice: 'Anggaran Harga',
        
        // Date & Time
        bookingDate: 'Tarikh Tempahan',
        bookingTime: 'Masa',
        morning: 'Pagi (9-12 AM)',
        afternoon: 'Petang (2-5 PM)',
        
        // Address
        area: 'Kawasan',
        streetAddress: 'Alamat Jalan',
        unitNumber: 'No. Unit',
        postcode: 'Poskod',
        specialRequests: 'Permintaan Khas (Pilihan)',
        
        // Contact
        fullName: 'Nama Penuh',
        phoneNumber: 'Nombor Telefon',
        whatsappNumber: 'Adakah ini nombor WhatsApp?',
        alternativeContact: 'Nombor Alternatif (Pilihan)',
        
        // Confirmation
        confirmBooking: 'Sahkan Tempahan',
        bookingSummary: 'Ringkasan Tempahan',
        edit: 'Edit',
        
        // Success
        bookingSuccess: 'Tempahan Berjaya!',
        bookingReference: 'Rujukan Tempahan',
        thankYou: 'Terima kasih! Tempahan anda diterima',
        nextSteps: 'Apa Seterusnya',
        step1: '1. Kami akan WhatsApp anda (< 2 jam)',
        step2: '2. Pengesahan tarikh & masa',
        step3: '3. Pembersihan dilakukan',
        addToCalendar: 'Tambah ke Kalendar',
        backToHome: 'Kembali ke Laman Utama',
        
        // Admin
        welcome: 'Halo',
        today: 'Hari Ini',
        bookings: 'Tempahan',
        next: 'Seterusnya',
        completed: 'Selesai',
        allBookings: 'Semua Tempahan',
        addNew: 'Tambah Baru',
        settings: 'Tetapan',
        
        // Status
        pending: 'Menunggu',
        confirmed: 'Disahkan',
        inProgress: 'Dalam Proses',
        completed: 'Selesai',
        cancelled: 'Dibatalkan',
        
        // Actions
        whatsapp: 'WhatsApp',
        call: 'Telefon',
        edit: 'Edit',
        cancel: 'Batal',
        
        // Login page
        loginTitle: 'Sistem Pengurusan Tempahan',
        email: 'Email',
        password: 'Kata Laluan',
        rememberMe: 'Ingat saya',
        forgotPassword: 'Lupa kata laluan?',
        loginButton: 'Log Masuk',
        loginSuccess: 'Log masuk berjaya! Mengalihkan...',
        loginError: 'Email atau kata laluan tidak sah',
        emailError: 'Sila masukkan email yang sah',
        passwordError: 'Kata laluan diperlukan'
    },
    id: {
        // Indonesian translations (similar structure)
        // Navigation
        home: 'Beranda',
        services: 'Layanan',
        booking: 'Pemesanan',
        admin: 'Admin',
        
        // Hero Section
        heroTitle: 'Rumah Bersih, Hati Tenang',
        heroSubtitle: 'Melayani area Ipoh & sekitarnya • Pengalaman 5 tahun',
        heroCTA: 'Pesan Sekarang',
        heroIntro: 'Tim kami tidak hanya bersih-bersih; kami merawat ruang Anda seakan milik kami. Kami memberikan Anda hadiah waktu dan lingkungan yang bersih sempurna. Kami bukan sekadar layanan; kami bagian dari komunitas Anda.',
        heroReady: 'Siap untuk Perubahan yang Berkilau?',
        heroLocalExpertise: 'Keahlian Lokal sejak 2018.',
        heroFriendlyThorough: 'Tim Ramah & Teliti.',
        heroPersonalizedSchedules: 'Jadwal pembersihan yang dipersonalisasi.',
        heroSatisfactionGuarantee: 'Garansi Kepuasan 100%.',
        basicCleaning: 'Pembersihan Dasar',
        deepCleaning: 'Pembersihan Mendalam',
        moveInOut: 'Pindah Masuk/Keluar',
        postRenovation: 'Pasca Renovasi',
        hourlyCleaning: 'Pembersihan Per Jam',
        duration: 'Durasi',
        from: 'Dari',
        select: 'Pilih',
        experience: '⭐ 5 Tahun Melayani Ipoh',
        customers: 'Pelanggan',
        coverageTitle: 'Cakupan Wilayah',
        whyTitle: 'Mengapa Pilih Kami',
        why1: '✓ Berpengalaman 5 tahun',
        why2: '✓ Pekerja terpercaya & terlatih',
        why3: '✓ Harga terjangkau, hasil memuaskan',
        whatsappFloat: 'Ada pertanyaan? Chat dengan kami',
        step1: 'Langkah 1: Jenis Layanan & Ukuran Rumah',
        step2: 'Langkah 2: Tanggal & Lokasi',
        step3: 'Langkah 3: Informasi Kontak',
        serviceType: 'Jenis Layanan',
        homeSize: 'Ukuran Rumah',
        small: 'Kecil (< 1000 sqft)',
        medium: 'Sedang (1000-1800 sqft)',
        large: 'Besar (> 1800 sqft)',
        estimatedPrice: 'Perkiraan Harga',
        bookingDate: 'Tanggal Pemesanan',
        bookingTime: 'Waktu',
        morning: 'Pagi (9-12 AM)',
        afternoon: 'Siang (2-5 PM)',
        area: 'Wilayah',
        streetAddress: 'Alamat Jalan',
        unitNumber: 'No. Unit',
        postcode: 'Kode Pos',
        specialRequests: 'Permintaan Khusus (Opsional)',
        fullName: 'Nama Lengkap',
        phoneNumber: 'Nomor Telepon',
        whatsappNumber: 'Apakah ini nomor WhatsApp?',
        alternativeContact: 'Nomor Alternatif (Opsional)',
        confirmBooking: 'Konfirmasi Pesanan',
        bookingSummary: 'Ringkasan Pemesanan',
        bookingSuccess: 'Pemesanan Berhasil!',
        bookingReference: 'Referensi Pemesanan',
        thankYou: 'Terima kasih! Pemesanan Anda diterima',
        nextSteps: 'Apa Selanjutnya',
        addToCalendar: 'Tambahkan ke Kalender',
        backToHome: 'Kembali ke Beranda',
        welcome: 'Halo',
        today: 'Hari Ini',
        allBookings: 'Semua Pemesanan',
        addNew: 'Tambah Baru',
        settings: 'Pengaturan',
        pending: 'Menunggu',
        confirmed: 'Dikonfirmasi',
        inProgress: 'Dalam Proses',
        completed: 'Selesai',
        cancelled: 'Dibatalkan',
        whatsapp: 'WhatsApp',
        call: 'Telepon',
        edit: 'Edit',
        cancel: 'Batalkan',
        
        // Login page
        loginTitle: 'Sistem Pengurusan Tempahan',
        email: 'Email',
        password: 'Kata Sandi',
        rememberMe: 'Ingat saya',
        forgotPassword: 'Lupa kata sandi?',
        loginButton: 'Masuk',
        loginSuccess: 'Login berhasil! Mengalihkan...',
        loginError: 'Email atau kata sandi tidak valid',
        emailError: 'Silakan masukkan alamat email yang valid',
        passwordError: 'Kata sandi diperlukan'
    },
    en: {
        // English translations
        // Navigation
        home: 'Home',
        services: 'Services',
        booking: 'Booking',
        admin: 'Admin',
        
        // Hero Section
        heroTitle: 'Clean Home, Peace of Mind',
        heroSubtitle: 'Serving Ipoh & surrounding areas • 5 years experience',
        heroCTA: 'Book Now',
        heroIntro: 'My team and I don\'t just clean; we care for your space as if it were our own. Let us give you the gift of time and a flawlessly clean environment. We\'re not just a service; we\'re a part of your community.',
        heroReady: 'Ready for a Sparkling Change?',
        heroLocalExpertise: 'Local Expertise since 2018.',
        heroFriendlyThorough: 'Friendly & Thorough team.',
        heroPersonalizedSchedules: 'Personalized cleaning schedules.',
        heroSatisfactionGuarantee: '100% Satisfaction Guarantee.',
        basicCleaning: 'Basic Cleaning',
        deepCleaning: 'Deep Cleaning',
        moveInOut: 'Move In/Out',
        postRenovation: 'Post Renovation',
        hourlyCleaning: 'Hourly Cleaning',
        duration: 'Duration',
        from: 'From',
        select: 'Select',
        experience: '⭐ 5 Years Serving Ipoh',
        customers: 'Customers',
        coverageTitle: 'Coverage Area',
        coverageAreas: 'Ipoh, Bercham, Menglembu, Falim, Taman...',
        coverageCheck: 'Not sure? WhatsApp us to check',
        whyTitle: 'Why Choose Us',
        why1: '✓ 5 years of experience',
        why2: '✓ Trusted & trained workers',
        why3: '✓ Affordable prices, satisfactory results',
        whatsappFloat: 'Questions? Chat with us',
        step1: 'Step 1: Service & Home Size',
        step2: 'Step 2: Date & Location',
        step3: 'Step 3: Contact Details',
        serviceType: 'Service Type',
        homeSize: 'Home Size',
        small: 'Small (< 1000 sqft)',
        medium: 'Medium (1000-1800 sqft)',
        large: 'Large (> 1800 sqft)',
        estimatedPrice: 'Estimated Price',
        bookingDate: 'Booking Date',
        bookingTime: 'Time',
        morning: 'Morning (9-12 AM)',
        afternoon: 'Afternoon (2-5 PM)',
        area: 'Area',
        streetAddress: 'Street Address',
        unitNumber: 'Unit Number',
        postcode: 'Postcode',
        specialRequests: 'Special Requests (Optional)',
        fullName: 'Full Name',
        phoneNumber: 'Phone Number',
        whatsappNumber: 'Is this a WhatsApp number?',
        alternativeContact: 'Alternative Contact (Optional)',
        confirmBooking: 'Confirm Booking',
        bookingSummary: 'Booking Summary',
        bookingSuccess: 'Booking Successful!',
        bookingReference: 'Booking Reference',
        thankYou: 'Thank you! Your booking has been received',
        nextSteps: 'What Happens Next',
        step1: '1. We will WhatsApp you (< 2 hours)',
        step2: '2. Date & time confirmation',
        step3: '3. Cleaning service completed',
        addToCalendar: 'Add to Calendar',
        backToHome: 'Back to Home',
        welcome: 'Hello',
        today: 'Today',
        allBookings: 'All Bookings',
        addNew: 'Add New',
        settings: 'Settings',
        pending: 'Pending',
        confirmed: 'Confirmed',
        inProgress: 'In Progress',
        completed: 'Completed',
        cancelled: 'Cancelled',
        whatsapp: 'WhatsApp',
        call: 'Call',
        edit: 'Edit',
        cancel: 'Cancel',
        
        // Login page
        loginTitle: 'Booking Management System',
        email: 'Email',
        password: 'Password',
        rememberMe: 'Remember me',
        forgotPassword: 'Forgot password?',
        loginButton: 'Login',
        loginSuccess: 'Login successful! Redirecting...',
        loginError: 'Invalid email or password',
        emailError: 'Please enter a valid email address',
        passwordError: 'Password is required'
    },
    cn: {
        // Chinese translations for Malaysian Chinese community
        home: '首页',
        services: '服务',
        booking: '预订',
        admin: '管理',
        
        // Hero Section
        heroTitle: '洁净家园，安心生活',
        heroSubtitle: '服务怡保及周边地区 • 5年专业经验',
        heroCTA: '立即预订',
        heroIntro: '我和团队不只是打扫；我们像对待自己的家一样呵护您的空间。让我们为您节省时间，打造洁净舒适的环境。我们不只是服务，更是您社区的一份子。',
        heroReady: '准备好焕然一新了吗？',
        heroLocalExpertise: '自2018年本地经验。',
        heroFriendlyThorough: '团队亲切、细致。',
        heroPersonalizedSchedules: '个性化清洁安排。',
        heroSatisfactionGuarantee: '100%满意保证。',
        
        // Services
        basicCleaning: '基础清洁',
        deepCleaning: '深度清洁',
        moveInOut: '迁入/迁出清洁',
        postRenovation: '装修后清洁',
        hourlyCleaning: '按小时清洁',
        
        // Service details
        duration: '服务时长',
        from: '起价',
        select: '选择',
        
        // Trust elements
        experience: '服务怡保5年经验',
        customers: '客户',
        
        // Coverage
        coverageTitle: '服务区域',
        coverageAreas: '怡保、巴占、明光、华林市、花园区...',
        coverageCheck: '不确定？通过WhatsApp查询',
        
        // Why choose us
        whyTitle: '为什么选择我们',
        why1: '✓ 5年专业经验',
        why2: '✓ 值得信赖的专业团队',
        why3: '✓ 价格实惠，服务满意',
        
        // WhatsApp
        whatsappFloat: '有疑问？联系我们',
        
        // Booking flow
        step1: '步骤1：服务类型与房屋大小',
        step2: '步骤2：日期与地点',
        step3: '步骤3：联系信息',
        
        // Form labels
        serviceType: '服务类型',
        homeSize: '房屋大小',
        small: '小型 (< 1000 平方英尺)',
        medium: '中型 (1000-1800 平方英尺)',
        large: '大型 (> 1800 平方英尺)',
        estimatedPrice: '预估价格',
        
        // Date & Time
        bookingDate: '预订日期',
        bookingTime: '服务时间',
        morning: '上午 (9-12点)',
        afternoon: '下午 (2-5点)',
        
        // Address
        area: '地区',
        streetAddress: '街道地址',
        unitNumber: '门牌号',
        postcode: '邮编',
        specialRequests: '特殊要求 (可选)',
        
        // Contact
        fullName: '全名',
        phoneNumber: '电话号码',
        whatsappNumber: '这是WhatsApp号码吗？',
        alternativeContact: '备用联系方式 (可选)',
        
        // Confirmation
        confirmBooking: '确认预订',
        bookingSummary: '预订摘要',
        edit: '编辑',
        
        // Success
        bookingSuccess: '预订成功！',
        bookingReference: '预订编号',
        thankYou: '感谢您的预订！我们已收到您的订单',
        nextSteps: '接下来的步骤',
        step1: '1. 我们将在2小时内通过WhatsApp联系您',
        step2: '2. 确认日期和时间',
        step3: '3. 完成清洁服务',
        addToCalendar: '添加到日历',
        backToHome: '返回首页',
        
        // Admin
        welcome: '您好',
        today: '今天',
        bookings: '预订',
        next: '下一个',
        completed: '已完成',
        allBookings: '所有预订',
        addNew: '新增',
        settings: '设置',
        
        // Status
        pending: '待确认',
        confirmed: '已确认',
        inProgress: '进行中',
        completed: '已完成',
        cancelled: '已取消',
        
        // Actions
        whatsapp: 'WhatsApp',
        call: '电话',
        edit: '编辑',
        cancel: '取消',
        
        // Login page
        loginTitle: '预订管理系统',
        email: '邮箱',
        password: '密码',
        rememberMe: '记住我',
        forgotPassword: '忘记密码？',
        loginButton: '登录',
        loginSuccess: '登录成功！正在跳转...',
        loginError: '邮箱或密码不正确',
        emailError: '请输入有效的邮箱地址',
        passwordError: '密码不能为空'
    }
};

// Service pricing and duration data
const serviceData = {
    basic_cleaning: {
        name: { bm: 'Pembersihan Asas', id: 'Pembersihan Dasar', en: 'Basic Cleaning', cn: '基础清洁' },
        duration: { bm: '2-3 jam', id: '2-3 jam', en: '2-3 hours', cn: '2-3小时' },
        basePrice: 80,
        priceMultiplier: { small: 1, medium: 1.3, large: 1.6 },
        hours: 3
    },
    deep_cleaning: {
        name: { bm: 'Pembersihan Mendalam', id: 'Pembersihan Mendalam', en: 'Deep Cleaning', cn: '深度清洁' },
        duration: { bm: '4-5 jam', id: '4-5 jam', en: '4-5 hours', cn: '4-5小时' },
        basePrice: 150,
        priceMultiplier: { small: 1, medium: 1.4, large: 1.8 },
        hours: 5
    },
    move_in_out: {
        name: { bm: 'Pindah Masuk/Keluar', id: 'Pindah Masuk/Keluar', en: 'Move In/Out', cn: '迁入/迁出清洁' },
        duration: { bm: '3-4 jam', id: '3-4 jam', en: '3-4 hours', cn: '3-4小时' },
        basePrice: 200,
        priceMultiplier: { small: 1, medium: 1.2, large: 1.5 },
        hours: 4
    },
    post_renovation: {
        name: { bm: 'Pasca Renovasi', id: 'Pasca Renovasi', en: 'Post Renovation', cn: '装修后清洁' },
        duration: { bm: 'Sehari penuh', id: 'Sehari penuh', en: 'Full day', cn: '全天服务' },
        basePrice: 300,
        priceMultiplier: { small: 1, medium: 1.3, large: 1.7 },
        hours: 8
    },
    hourly_cleaning: {
        name: { bm: 'Pembersihan Mengikut Jam', id: 'Pembersihan Per Jam', en: 'Hourly Cleaning', cn: '按小时清洁' },
        duration: { bm: 'Fleksibel', id: 'Fleksibel', en: 'Flexible', cn: '灵活时间' },
        basePrice: 25,
        priceMultiplier: { per_hour: 1 } // Will multiply by hours
    }
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadSavedData();
});

function initializeApp() {
    // Force language to Bahasa Melayu, ignoring saved preference
    AppState.currentLanguage = 'bm';
    updateLanguageDisplay();
    
    // Initialize animations
    initializeAnimations();
    
    // Set up form persistence
    setupFormPersistence();
}

function setupEventListeners() {
    // Language toggle
    const languageToggle = document.getElementById('languageToggle');
    console.log('Language toggle found:', languageToggle);
    if (languageToggle) {
        languageToggle.addEventListener('change', handleLanguageChange);
        console.log('Language change listener added');
        
        // Set initial value
        languageToggle.value = AppState.currentLanguage;
        console.log('Language toggle set to:', AppState.currentLanguage);
    }
    
    // Service selection
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', handleServiceSelection);
    });
    
    // Booking form steps
    const nextButtons = document.querySelectorAll('.next-step');
    nextButtons.forEach(button => {
        button.addEventListener('click', handleNextStep);
    });
    
    const prevButtons = document.querySelectorAll('.prev-step');
    prevButtons.forEach(button => {
        button.addEventListener('click', handlePrevStep);
    });
    
    // Form inputs for real-time validation
    const formInputs = document.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', handleFormInput);
        input.addEventListener('blur', validateField);
    });
    
    // WhatsApp buttons
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', handleWhatsAppClick);
    });
    
    // Admin status updates
    const statusDropdowns = document.querySelectorAll('.status-dropdown');
    statusDropdowns.forEach(dropdown => {
        dropdown.addEventListener('change', handleStatusChange);
    });
}

function handleLanguageChange(event) {
    console.log('Language change triggered:', event.target.value);
    const newLanguage = event.target.value;
    AppState.currentLanguage = newLanguage;
    localStorage.setItem('appLanguage', newLanguage);
    updateLanguageDisplay();
    
    // Animate language change
    anime({
        targets: '.content-section',
        opacity: [1, 0.7, 1],
        duration: 300,
        easing: 'easeInOutQuad'
    });
}

function updateLanguageDisplay() {
    console.log('Updating language display to:', AppState.currentLanguage);
    const elements = document.querySelectorAll('[data-translate]');
    console.log('Found', elements.length, 'elements to translate');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        console.log('Translating key:', key);
        if (translations[AppState.currentLanguage][key]) {
            element.textContent = translations[AppState.currentLanguage][key];
            console.log('Translated to:', translations[AppState.currentLanguage][key]);
        }
    });
    
    // Update service cards
    updateServiceCards();
    
    // Update page title
    updatePageTitle();
    
    // Update document language attribute
    document.documentElement.lang = AppState.currentLanguage === 'cn' ? 'zh' : AppState.currentLanguage;
}

function updateServiceCards() {
    console.log('Updating service cards for language:', AppState.currentLanguage);
    const serviceCards = document.querySelectorAll('.service-card');
    console.log('Found', serviceCards.length, 'service cards');
    
    serviceCards.forEach(card => {
        const serviceType = card.getAttribute('data-service');
        const service = serviceData[serviceType];
        console.log('Service type:', serviceType, 'Service:', service);
        
        if (service) {
            const nameElement = card.querySelector('.service-name');
            const durationElement = card.querySelector('.service-duration');
            
            if (nameElement) {
                const newName = service.name[AppState.currentLanguage];
                console.log('Updating service name to:', newName);
                nameElement.textContent = newName;
            }
            if (durationElement) {
                const newDuration = service.duration[AppState.currentLanguage];
                console.log('Updating service duration to:', newDuration);
                durationElement.textContent = newDuration;
            }
        }
    });
}

function handleServiceSelection(event) {
    const card = event.currentTarget;
    const serviceType = card.getAttribute('data-service');
    
    // Remove active class from all cards
    document.querySelectorAll('.service-card').forEach(c => {
        c.classList.remove('selected');
    });
    
    // Add active class to selected card
    card.classList.add('selected');
    
    // Store selection
    AppState.bookingData.serviceType = serviceType;
    saveBookingData();
    
    // Animate selection
    anime({
        targets: card,
        scale: [1, 1.05, 1],
        duration: 300,
        easing: 'easeInOutQuad'
    });
    
    // Enable next step if exists, else navigate to booking
    const nextButton = document.querySelector('.next-step');
    if (nextButton) {
        nextButton.disabled = false;
        nextButton.classList.remove('opacity-50');
    } else {
        window.location.href = 'booking.html';
    }
}

function handleNextStep() {
    if (AppState.currentStep < 3) {
        AppState.currentStep++;
        updateBookingStep();
        updateProgressIndicator();
    } else {
        // Final step - submit booking
        submitBooking();
    }
}

function handlePrevStep() {
    if (AppState.currentStep > 1) {
        AppState.currentStep--;
        updateBookingStep();
        updateProgressIndicator();
    }
}

function updateBookingStep() {
    // Hide all steps
    document.querySelectorAll('.booking-step').forEach(step => {
        step.classList.add('hidden');
    });
    
    // Show current step
    const currentStepElement = document.getElementById(`step-${AppState.currentStep}`);
    if (currentStepElement) {
        currentStepElement.classList.remove('hidden');
        
        // Animate step transition
        anime({
            targets: currentStepElement,
            opacity: [0, 1],
            translateX: [50, 0],
            duration: 400,
            easing: 'easeOutQuad'
        });
    }
    
    // Update step-specific content
    if (AppState.currentStep === 2) {
        updateDateTimeOptions();
    } else if (AppState.currentStep === 3) {
        updateBookingSummary();
    }
}

function updateProgressIndicator() {
    const progressSteps = document.querySelectorAll('.progress-step');
    progressSteps.forEach((step, index) => {
        if (index < AppState.currentStep) {
            step.classList.add('completed');
        } else {
            step.classList.remove('completed');
        }
    });
}

function handleFormInput(event) {
    const field = event.target;
    const fieldName = field.name;
    const fieldValue = field.value;
    
    // Store form data
    AppState.bookingData[fieldName] = fieldValue;
    saveBookingData();
    
    // Real-time price calculation for step 1
    if (AppState.currentStep === 1 && (fieldName === 'homeSize' || fieldName === 'serviceType' || fieldName === 'hours')) {
        updatePriceEstimate();
    }
    checkStepCompletion();
    
    // Validate field
    validateField(event);
}

function updatePriceEstimate() {
    const serviceType = AppState.bookingData.serviceType;
    const homeSize = AppState.bookingData.homeSize;
    
    if (serviceType && homeSize) {
        const service = serviceData[serviceType];
        const price = service.basePrice * service.priceMultiplier[homeSize];
        
        const priceElement = document.getElementById('estimatedPrice');
        if (priceElement) {
            priceElement.textContent = `RM ${price}`;
            
            // Animate price update
            anime({
                targets: priceElement,
                scale: [1, 1.1, 1],
                duration: 300,
                easing: 'easeInOutQuad'
            });
        }
    }
}

function validateField(event) {
    const field = event.target;
    const fieldValue = field.value.trim();
    
    // Remove existing validation classes
    field.classList.remove('border-red-500', 'border-green-500');
    
    // Basic validation
    let isValid = true;
    
    if (field.hasAttribute('required') && !fieldValue) {
        isValid = false;
    }
    
    if (field.type === 'email' && fieldValue) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(fieldValue);
    }
    
    if (field.name === 'phoneNumber' && fieldValue) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        isValid = phoneRegex.test(fieldValue.replace(/\s/g, ''));
    }
    
    // Apply validation styling
    if (fieldValue) {
        field.classList.add(isValid ? 'border-green-500' : 'border-red-500');
    }
    
    // Show/hide validation message
    const errorElement = field.parentNode.querySelector('.validation-error');
    if (errorElement) {
        errorElement.style.display = isValid ? 'none' : 'block';
    }
}

function submitBooking() {
    // Generate booking reference
    const bookingRef = generateBookingReference();
    AppState.bookingData.bookingRef = bookingRef;
    AppState.bookingData.status = 'pending';
    AppState.bookingData.createdAt = new Date().toISOString();
    
    // Save to localStorage (simulating database)
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push(AppState.bookingData);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    
    // Show success page
    showBookingSuccess(bookingRef);
    
    // Clear booking data
    clearBookingData();
}

function generateBookingReference() {
    const date = new Date();
    const dateStr = date.toISOString().slice(2, 10).replace(/-/g, '');
    const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `IP-${dateStr}-${randomNum}`;
}

function showBookingSuccess(bookingRef) {
    // Store booking reference for success page
    localStorage.setItem('lastBookingRef', bookingRef);
    
    // Navigate to success page
    window.location.href = 'confirmation.html';
}

function handleWhatsAppClick(event) {
    event.preventDefault();
    
    const phoneNumber = event.target.getAttribute('data-phone') || '+60123456789';
    const message = event.target.getAttribute('data-message') || 'Halo, saya ingin bertanya tentang perkhidmatan pembersihan.';
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function handleStatusChange(event) {
    const bookingId = event.target.getAttribute('data-booking-id');
    const newStatus = event.target.value;
    
    // Update booking status
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    const bookingIndex = bookings.findIndex(b => b.bookingRef === bookingId);
    
    if (bookingIndex !== -1) {
        bookings[bookingIndex].status = newStatus;
        localStorage.setItem('bookings', JSON.stringify(bookings));
        
        // Show success feedback
        showNotification('Status updated successfully!', 'success');
    }
}

function initializeAnimations() {
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
    
    // Hero section animation
    anime.timeline({
        easing: 'easeOutExpo',
        duration: 1000
    })
    .add({
        targets: '.hero-title',
        opacity: [0, 1],
        translateY: [50, 0],
        delay: 300
    })
    .add({
        targets: '.hero-subtitle',
        opacity: [0, 1],
        translateY: [30, 0],
        delay: 200
    }, '-=800')
    .add({
        targets: '.hero-cta',
        opacity: [0, 1],
        scale: [0.8, 1],
        delay: 100
    }, '-=600');
}

function setupFormPersistence() {
    // Load saved form data
    const savedData = localStorage.getItem('bookingData');
    if (savedData) {
        AppState.bookingData = JSON.parse(savedData);
        populateFormFields();
    }
}

function saveBookingData() {
    localStorage.setItem('bookingData', JSON.stringify(AppState.bookingData));
}

function loadSavedData() {
    const savedData = localStorage.getItem('bookingData');
    if (savedData) {
        AppState.bookingData = JSON.parse(savedData);
        populateFormFields();
    }
}

function populateFormFields() {
    Object.keys(AppState.bookingData).forEach(key => {
        const field = document.querySelector(`[name="${key}"]`);
        if (field) {
            field.value = AppState.bookingData[key];
        }
    });
}

function clearBookingData() {
    AppState.bookingData = {};
    AppState.currentStep = 1;
    localStorage.removeItem('bookingData');
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    anime({
        targets: notification,
        opacity: [0, 1],
        translateX: [100, 0],
        duration: 300,
        easing: 'easeOutQuad'
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        anime({
            targets: notification,
            opacity: [1, 0],
            translateX: [0, 100],
            duration: 300,
            easing: 'easeInQuad',
            complete: () => {
                document.body.removeChild(notification);
            }
        });
    }, 3000);
}

// Utility functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('ms-MY', {
        style: 'currency',
        currency: 'MYR'
    }).format(amount);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    let locale = 'en-US';
    
    if (AppState.currentLanguage === 'bm') {
        locale = 'ms-MY';
    } else if (AppState.currentLanguage === 'cn') {
        locale = 'zh-CN';
    }
    
    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
}

function isWithinCoverage(address) {
    // Simple coverage check - in real app, this would use geocoding API
    const coveredAreas = ['ipoh', 'bercham', 'menglembu', 'falim', 'taman'];
    const lowerAddress = address.toLowerCase();
    return coveredAreas.some(area => lowerAddress.includes(area));
}

function updatePageTitle() {
    const titles = {
        bm: 'Pembersihan Rumah Ipoh',
        id: 'Pembersihan Rumah Ipoh',
        en: 'Ipoh House Cleaning',
        cn: '怡保房屋清洁'
    };
    document.title = titles[AppState.currentLanguage] || 'House Cleaning Service';
}