// 1. مصفوفة الترجمة الشاملة (للموقع بالكامل)
const translations = {
    en: {
        // نصوص الصفحة الرئيسية
        tagline: "FOOTWEAR",
        hero_title: "Elegance in Every Step",
        hero_desc: "Explore our exclusive collection of premium handcrafted footwear.",
        cta_text: "Shop Now",
        
        // ضيف دول جوه translations.en
        about_title: "Our Story",
        about_tagline: "Crafting Excellence Since 1994",
        story_h: "Legacy of Quality",
        story_p1: "At Soleé, we don't just sell shoes; we deliver confidence...",
        // ... وهكذا لكل المفاتيح الجديدة (data-key)
        // نصوص شريط التنقل (Navbar)
        nav_home: "Home",
        nav_shop: "Shop",
        nav_about: "About",
        nav_contact: "Contact",
        
        // نصوص صفحة المتجر (Shop)
        shop_title: "Our Collection",
        shop_subtitle: "Elegant footwear for every occasion.",



        // translations.en:
        contact_title: "We Are Here For You",
        contact_tagline: "Your comfort, our commitment.",
        form_h: "Send Us a Message",
        submit_btn: "Send Message",
        thank_you_text: "Thank you! Your message has been received. Our team will contact you very soon.",
        status_text: "Always Online",
        support_h: "Premium 24/7 Support",
        support_p: "We are committed to providing the fastest and most reliable support in the footwear industry. Our professional team is available around the clock, 365 days a year, to assist you.",
        wa_desc: "Instant Reply",
        mail_desc: "solee.footwear@outlook.com",
        fb_desc: "Like & Message",
        ig_desc: "Follow Our Style",
        
        // زرار اللغة
        lang_btn: "العربية"
    },
    ar: {
        // نصوص الصفحة الرئيسية
        tagline: "الأحذية",
        hero_title: "الأناقة في كل خطوة",
        hero_desc: "اكتشفي مجموعتنا الحصرية من الأحذية الفاخرة المصنوعة يدوياً.",
        cta_text: "تسوقي الآن",
        
        // نصوص شريط التنقل (Navbar)
        nav_home: "الرئيسية",
        nav_shop: "المتجر",
        nav_about: "من نحن",
        nav_contact: "اتصلي بنا",
        
        // نصوص صفحة المتجر (Shop)
        shop_title: "مجموعتنا",
        shop_subtitle: "أحذية أنيقة لكل مناسبة.",

        // وضف ترجمتهم في translations.ar
        about_title: "قصتنا",
        about_tagline: "صناعة التميز منذ عام 1994",
        story_h: "إرث من الجودة",
        story_p1: "في Soleé، نحن لا نبيع الأحذية فقط؛ بل نقدم الثقة والراحة...",
        // ... كمل الترجمة بأسلوبك القوي
                

        // translations.ar:
        contact_title: "نحن هنا من أجلك",
        contact_tagline: "راحتكِ، هي التزامنا الأول.",
        form_h: "أرسل لنا رسالة",
        submit_btn: "إرسال الرسالة",
        thank_you_text: "شكراً لك! لقد تم استلام رسالتك. سيقوم فريقنا بالاتصال بك قريباً جداً.",
        status_text: "متصلون دائماً",
        support_h: "دعم فني فاخر 24/7",
        support_p: "نحن ملتزمون بتقديم أسرع دعم فني وأكثر موثوقية في صناعة الأحذية. فريقنا الاحترافي متاح على مدار الساعة، 365 يوماً في السنة، لمساعدتك.",
        wa_desc: "رد فوري",
        mail_desc: "solee.footwear@outlook.com",
        fb_desc: "أعجب بنا وأرسل رسالة",
        ig_desc: "تابعي أسلوبنا",
        // زرار اللغة
        lang_btn: "English"
    }
};

// --- منطق تبديل اللغة ---
const langToggle = document.getElementById('lang-toggle');
// بنحاول نجيب اللغة المحفوظة في المتصفح، لو مفيش بنخليها إنجليزي
let currentLang = localStorage.getItem('language') || 'en';

// تشغيل الترجمة فور تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage();
    
    // تشغيل وضع الليل والنهار المحفوظ
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if(toggleSwitch) toggleSwitch.checked = true;
    }
});

if (langToggle) {
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        localStorage.setItem('language', currentLang); // حفظ اللغة
        updateLanguage();
    });
}

function updateLanguage() {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    if (langToggle) langToggle.textContent = translations[currentLang].lang_btn;
    
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
}

// --- منطق وضع الليل والنهار (Dark Mode) ---
const toggleSwitch = document.querySelector('#checkbox');

if (toggleSwitch) {
    toggleSwitch.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
}


const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});











// تشغيل الـ Logic الخاص بصفحة Contact
document.addEventListener('DOMContentLoaded', () => {
    // 1. منطق تبديل اللغة والليل والنهار المحفوظ (ده عندك أصلاً، تأكد إنه شغال)
    updateLanguage(); 
    // ... بقية الـ code اللي عندك ...

    // 2. منطق صفحة Contact
    const contactForm = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    if (contactForm && thankYouMessage) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // يمنع الصفحة من التحميل

            // هنا ممكن مستقبلاً تضيف الـ code اللي بيبعت الإيميل فعلياً
            
            // إخفاء الـ Form وإظهار رسالة الشكر
            contactForm.querySelectorAll('.input-group, .cta-btn').forEach(el => el.style.display = 'none');
            thankYouMessage.style.display = 'flex';
        });
    }
});




