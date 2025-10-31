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
        document.body.style.transition = 'opacity 0.8s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Enhanced Angelic Cat Flying Animation
const angelicCatWrapper = document.querySelector('.angelic-cat-wrapper');
let flyX = 0;
let flyY = 0;
let targetX = 0;
let targetY = 0;

// Random flying path
function updateFlyingPath() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Random target position within reasonable bounds
    targetX = (Math.random() - 0.5) * (viewportWidth * 0.4);
    targetY = (Math.random() - 0.5) * (viewportHeight * 0.3) - 100;
    
    if (angelicCatWrapper) {
        angelicCatWrapper.style.transition = 'transform 8s ease-in-out';
        angelicCatWrapper.style.transform = `translateX(${targetX}px) translateY(${targetY}px)`;
    }
}

// Update flying path periodically
setInterval(updateFlyingPath, 8000);

// Initial random position
updateFlyingPath();

// Subtle parallax for heavenly rays only (clouds stay static)
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Move heavenly rays slightly for depth
    const rays = document.querySelector('.heavenly-rays');
    if (rays) {
        rays.style.transform = `translateX(-50%) translateY(${scrolled * 0.15}px)`;
    }
    
    lastScroll = scrolled;
});


// Enhanced hover effects for social links
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.08)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Mouse interaction with angelic cat
if (angelicCatWrapper) {
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        // Subtle following effect
        const moveX = mouseX * 20;
        const moveY = mouseY * 20;
        
        angelicCatWrapper.style.transition = 'transform 0.3s ease-out';
        const currentTransform = angelicCatWrapper.style.transform || '';
        const baseTransform = currentTransform.match(/translateX\(([^)]+)\)\s+translateY\(([^)]+)\)/);
        
        if (baseTransform) {
            const baseX = parseFloat(baseTransform[1]) || 0;
            const baseY = parseFloat(baseTransform[2]) || 0;
            angelicCatWrapper.style.transform = 
                `translateX(${baseX + moveX}px) translateY(${baseY + moveY}px)`;
        }
    });
}



// Smooth parallax for sections
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    sections.forEach((section, index) => {
        const speed = 0.5 + (index * 0.1);
        section.style.transform = `translateY(${scrolled * speed * 0.05}px)`;
    });
});
