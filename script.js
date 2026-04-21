// 1. تفعيل خلفية الناف بار عند السكرول (Sticky Navbar)
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    // إذا نزل المستخدم أكثر من 50 بكسل يضيف كلاس sticky
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// 2. التحكم في منيو الموبايل (Hamburger Menu)
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

menu.addEventListener('click', function() {
    menuLinks.classList.toggle('active');
    
    // تغيير شكل الأيقونة من (Bars ☰) لـ (X ✕) عند الفتح
    const icon = menu.querySelector('i');
    if (menuLinks.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
});

// 3. إغلاق المنيو تلقائياً عند الضغط على أي رابط (عشان ينقلك للقسم ويقفل)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuLinks.classList.remove('active');
        const icon = menu.querySelector('i');
        icon.classList.replace('fa-times', 'fa-bars');
    });
});

// 4. تفعيل حركة ظهور كروت الخدمات عند التمرير (Intersection Observer)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // يوقف المراقبة بعد الظهور لزيادة السرعة
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
    
});