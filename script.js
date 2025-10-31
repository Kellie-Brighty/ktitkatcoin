// Contract Address Copy Functionality
const copyBtn = document.getElementById('copyBtn');
const contractAddress = document.getElementById('contractAddress');

copyBtn.addEventListener('click', () => {
    contractAddress.select();
    contractAddress.setSelectionRange(0, 99999); // For mobile devices
    
    try {
        document.execCommand('copy');
        
        // Update button state
        copyBtn.classList.add('copied');
        
        // Reset button after 2 seconds
        setTimeout(() => {
            copyBtn.classList.remove('copied');
            contractAddress.setSelectionRange(0, 0); // Deselect text
        }, 2000);
        
        // Fallback for modern browsers
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(contractAddress.value).catch(err => {
                console.error('Failed to copy:', err);
            });
        }
    } catch (err) {
        console.error('Failed to copy:', err);
    }
});

// Add click to copy functionality on the address input
contractAddress.addEventListener('click', () => {
    contractAddress.select();
    contractAddress.setSelectionRange(0, 99999);
});

// Smooth scroll animation on load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add parallax effect to hero image on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.kitkat-image');
    
    if (heroImage) {
        const speed = scrolled * 0.1;
        heroImage.style.transform = `translateY(${-20 + speed * 0.3}px)`;
    }
    
    lastScroll = scrolled;
});

// Add hover effects for social links
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05) rotate(2deg)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
    });
});

// Add sparkle effect on page load
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.fontSize = '20px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    sparkle.style.animation = 'sparkle 2s ease-out forwards';
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

// Add sparkle animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% {
            opacity: 0;
            transform: scale(0) translateY(0);
        }
        50% {
            opacity: 1;
            transform: scale(1.5) translateY(-50px);
        }
        100% {
            opacity: 0;
            transform: scale(0.5) translateY(-100px);
        }
    }
`;
document.head.appendChild(style);

// Create sparkles periodically
setInterval(createSparkle, 1000);

// Add interactive hover effect to contract address input
contractAddress.addEventListener('mouseenter', () => {
    contractAddress.style.transform = 'scale(1.02)';
});

contractAddress.addEventListener('mouseleave', () => {
    contractAddress.style.transform = 'scale(1)';
});

