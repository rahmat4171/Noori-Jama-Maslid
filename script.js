// JavaScript for Interactivity
document.addEventListener('DOMContentLoaded', () => {

    // --- Copy UPI ID functionality ---
    const copyBtn = document.getElementById('copyBtn');
    const upiIdElement = document.getElementById('upiId');

    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const upiId = upiIdElement.innerText;
            
            navigator.clipboard.writeText(upiId).then(() => {
                // Success feedback
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                copyBtn.style.backgroundColor = '#28a745';
                copyBtn.style.color = 'white';

                setTimeout(() => {
                    // Revert back after 2 seconds
                    copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy UPI ID';
                    copyBtn.style.background = 'linear-gradient(45deg, #ffd700, #f0c14b)';
                    copyBtn.style.color = '#111';
                }, 2000); 
            }).catch(err => {
                console.error('Failed to copy: ', err);
                // Fallback for older browsers
                alert('Failed to copy UPI ID. Please copy it manually.');
            });
        });
    }

    // --- Smooth scrolling for BOTH desktop and mobile navigation links ---
    document.querySelectorAll('nav a, .mobile-nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calculate position to scroll to, accounting for the sticky top nav on desktop
                // On mobile, the top nav is hidden, so this offset won't apply incorrectly.
                const headerOffset = 80; 
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});