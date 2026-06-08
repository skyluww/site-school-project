// Эффект случайного мерцания для био-символов
document.querySelectorAll('.bio-symbol').forEach(symbol => {
    setInterval(() => {
        if (Math.random() > 0.95) {
            symbol.style.opacity = '0.7';
            setTimeout(() => {
                symbol.style.opacity = '1';
            }, 100);
        }
    }, 2000);
});

// Эффект случайных помех на экране
setInterval(() => {
    if (Math.random() > 0.98) {
        document.body.style.filter = 'brightness(1.8) contrast(1.5)';
        setTimeout(() => {
            document.body.style.filter = 'brightness(1) contrast(1)';
        }, 50);
    }
}, 3000);

// Интерактивность кнопок
document.querySelectorAll('.neon-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Эффект появления элементов при загрузке
window.addEventListener('load', () => {
    document.querySelectorAll('.card-frame, .neon-button, .bio-symbol').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
});