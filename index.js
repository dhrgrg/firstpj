document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu View Toggle Implementation
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinksList = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinksList.classList.toggle('active');
            // Toggle hamburger icon between open bars and close 'X'
            const icon = mobileMenuBtn.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close menu automatically upon mobile navigation click action
    const interactionLinks = document.querySelectorAll('.nav-links a');
    interactionLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinksList.classList.contains('active')) {
                navLinksList.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    });

    // 2. Interactive Technical Skills Diagnostics Analytics Logger
    const coreSkillCards = document.querySelectorAll('.skill-card');
    coreSkillCards.forEach(card => {
        card.addEventListener('click', () => {
            const definedSkill = card.getAttribute('data-skill') || card.querySelector('span').innerText;
            console.log(`[Diagnostic] Inspected profile engineering competency vector focus: ${definedSkill}`);
        });
    });
});