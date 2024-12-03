document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded");
});

function filterListings() {
    const filter = document.getElementById('price-range').value;
    const listings = document.querySelectorAll('.listing-item');

    listings.forEach(listing => {
        const priceCategory = listing.getAttribute('data-price');
        if (filter === 'all' || filter === priceCategory) {
            listing.style.display = 'block';
        } else {
            listing.style.display = 'none';
        }
    });
}
