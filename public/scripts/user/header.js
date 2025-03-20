document.addEventListener('DOMContentLoaded', () => {
    const profileBtn = document.getElementById('profileBtn');
    const profileDropdown = document.getElementById('profileDropdown');

    // Toggle dropdown on profile button click
    profileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        profileDropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!profileDropdown.contains(e.target) && !profileBtn.contains(e.target)) {
            profileDropdown.classList.remove('active');
        }
    });

    // Update cart and wishlist count badges (example functionality)
    function updateBadges() {
        const cartCount = localStorage.getItem('cartCount') || '0';
        const wishlistCount = localStorage.getItem('wishlistCount') || '0';
        
        const cartBtn = document.getElementById('cartBtn');
        const wishlistBtn = document.getElementById('wishlistBtn');
        
        if (cartCount > 0) {
            cartBtn.setAttribute('data-count', cartCount);
        }
        if (wishlistCount > 0) {
            wishlistBtn.setAttribute('data-count', wishlistCount);
        }
    }

    // Call initially and set up periodic updates
    updateBadges();
    setInterval(updateBadges, 5000); // Update every 5 seconds
});
