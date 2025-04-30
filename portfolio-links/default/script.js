// Portfolio data structure
const portfolioData = {
    graphicsDesign: {
        name: "Graphics Design",
        subcategories: {
            logoDesign: {
                name: "Logo Design",
                items: [
                    { id: "logo1", src: "https://placehold.co/800X600", alt: "Logo Design 1", caption: "Modern Minimalist Logo" },
                    { id: "logo2", src: "https://placehold.co/800X600", alt: "Logo Design 2", caption: "Vibrant Brand Identity" },
                    { id: "logo3", src: "https://placehold.co/800X600", alt: "Logo Design 3", caption: "Geometric Logo Concept" },
                    { id: "logo4", src: "https://placehold.co/800X600", alt: "Logo Design 4", caption: "Hand-drawn Brand Mark" }
                ]
            },
            bannerDesign: {
                name: "Banner Design",
                items: [
                    { id: "banner1", src: "https://placehold.co/1200X400", alt: "Banner Design 1", caption: "Web Banner for Tech Company" },
                    { id: "banner2", src: "https://placehold.co/1200X400", alt: "Banner Design 2", caption: "Social Media Cover" },
                    { id: "banner3", src: "https://placehold.co/1200X400", alt: "Banner Design 3", caption: "Exhibition Banner" },
                    { id: "banner4", src: "https://placehold.co/1200X400", alt: "Banner Design 4", caption: "Email Header Banner" }
                ]
            },
            brochureDesign: {
                name: "Brochure Design",
                items: [
                    { id: "brochure1", src: "https://placehold.co/800X1000", alt: "Brochure 1", caption: "Tri-fold Corporate Brochure" },
                    { id: "brochure2", src: "https://placehold.co/800X1000", alt: "Brochure 2", caption: "Product Catalog" },
                    { id: "brochure3", src: "https://placehold.co/800X1000", alt: "Brochure 3", caption: "Event Program" },
                    { id: "brochure4", src: "https://placehold.co/800X1000", alt: "Brochure 4", caption: "Annual Report Design" }
                ]
            },
            socialMediaDesign: {
                name: "Social Media Post Design",
                items: [
                    { id: "social1", src: "https://placehold.co/600X600", alt: "Social Media 1", caption: "Instagram Post Template" },
                    { id: "social2", src: "https://placehold.co/600X600", alt: "Social Media 2", caption: "Facebook Promotion" },
                    { id: "social3", src: "https://placehold.co/600X600", alt: "Social Media 3", caption: "Twitter Campaign Graphics" },
                    { id: "social4", src: "https://placehold.co/600X600", alt: "Social Media 4", caption: "LinkedIn Business Post" }
                ]
            },
            foodMenuDesign: {
                name: "Food Menu Design",
                items: [
                    { id: "menu1", src: "https://placehold.co/600X900", alt: "Menu 1", caption: "Restaurant Menu" },
                    { id: "menu2", src: "https://placehold.co/600X900", alt: "Menu 2", caption: "Cafe Menu Card" },
                    { id: "menu3", src: "https://placehold.co/600X900", alt: "Menu 3", caption: "Digital Menu Board" },
                    { id: "menu4", src: "https://placehold.co/600X900", alt: "Menu 4", caption: "Special Drinks Menu" }
                ]
            },
            flyerDesign: {
                name: "Flyer Design",
                items: [
                    { id: "flyer1", src: "https://placehold.co/800X1100", alt: "Flyer 1", caption: "Event Promotion Flyer" },
                    { id: "flyer2", src: "https://placehold.co/800X1100", alt: "Flyer 2", caption: "Business Introduction" },
                    { id: "flyer3", src: "https://placehold.co/800X1100", alt: "Flyer 3", caption: "Product Launch" },
                    { id: "flyer4", src: "https://placehold.co/800X1100", alt: "Flyer 4", caption: "Sale Announcement" }
                ]
            },
            posterDesign: {
                name: "Poster",
                items: [
                    { id: "poster1", src: "https://placehold.co/800X1200", alt: "Poster 1", caption: "Movie Poster" },
                    { id: "poster2", src: "https://placehold.co/800X1200", alt: "Poster 2", caption: "Concert Advertising" },
                    { id: "poster3", src: "https://placehold.co/800X1200", alt: "Poster 3", caption: "Exhibition Poster" },
                    { id: "poster4", src: "https://placehold.co/800X1200", alt: "Poster 4", caption: "Motivational Wall Art" }
                ]
            },
            visitingCardDesign: {
                name: "Visiting Card Design",
                items: [
                    { id: "card1", src: "https://placehold.co/600X350", alt: "Card 1", caption: "Corporate Business Card" },
                    { id: "card2", src: "https://placehold.co/600X350", alt: "Card 2", caption: "Creative Professional Card" },
                    { id: "card3", src: "https://placehold.co/600X350", alt: "Card 3", caption: "Minimalist Name Card" },
                    { id: "card4", src: "https://placehold.co/600X350", alt: "Card 4", caption: "Luxury Finish Business Card" }
                ]
            }
        }
    },
    websiteDesign: {
        name: "Website Design",
        subcategories: {
            ecommerce: {
                name: "E-commerce",
                items: [
                    { id: "ecom1", src: "https://placehold.co/1200X800", alt: "E-commerce 1", caption: "Fashion Store Interface" },
                    { id: "ecom2", src: "https://placehold.co/1200X800", alt: "E-commerce 2", caption: "Electronics Shop" },
                    { id: "ecom3", src: "https://placehold.co/1200X800", alt: "E-commerce 3", caption: "Organic Food Market" },
                    { id: "ecom4", src: "https://placehold.co/1200X800", alt: "E-commerce 4", caption: "Beauty Products Store" }
                ]
            },
            portfolio: {
                name: "Portfolio Sites",
                items: [
                    { id: "portfolio1", src: "https://placehold.co/1200X800", alt: "Portfolio 1", caption: "Photographer Portfolio" },
                    { id: "portfolio2", src: "https://placehold.co/1200X800", alt: "Portfolio 2", caption: "Architecture Showcase" },
                    { id: "portfolio3", src: "https://placehold.co/1200X800", alt: "Portfolio 3", caption: "Digital Artist Gallery" },
                    { id: "portfolio4", src: "https://placehold.co/1200X800", alt: "Portfolio 4", caption: "Creative Agency Site" }
                ]
            },
            corporate: {
                name: "Corporate Websites",
                items: [
                    { id: "corp1", src: "https://placehold.co/1200X800", alt: "Corporate 1", caption: "Financial Institution" },
                    { id: "corp2", src: "https://placehold.co/1200X800", alt: "Corporate 2", caption: "Tech Startup" },
                    { id: "corp3", src: "https://placehold.co/1200X800", alt: "Corporate 3", caption: "Law Firm Website" },
                    { id: "corp4", src: "https://placehold.co/1200X800", alt: "Corporate 4", caption: "Healthcare Provider Portal" }
                ]
            },
            landing: {
                name: "Landing Pages",
                items: [
                    { id: "landing1", src: "https://placehold.co/1200X800", alt: "Landing 1", caption: "Product Launch Page" },
                    { id: "landing2", src: "https://placehold.co/1200X800", alt: "Landing 2", caption: "App Download Page" },
                    { id: "landing3", src: "https://placehold.co/1200X800", alt: "Landing 3", caption: "Event Registration" },
                    { id: "landing4", src: "https://placehold.co/1200X800", alt: "Landing 4", caption: "Service Subscription" }
                ]
            }
        }
    }
};

// DOM Elements
const categoryNav = document.querySelector('.category-nav');
const subcategoryNav = document.querySelector('.subcategory-nav');
const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');
const closeLightbox = document.querySelector('.close-lightbox');

// Current state
let currentCategory = 'all';
let currentSubcategory = null;

// Initialize the page
function init() {
    setupEventListeners();
    showCategory('all');
}

// Set up event listeners
function setupEventListeners() {
    // Category navigation
    categoryNav.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            const category = e.target.getAttribute('data-category');
            showCategory(category);
            
            // Update active class
            document.querySelectorAll('.category-nav li').forEach(item => {
                item.classList.remove('active');
            });
            e.target.classList.add('active');
        }
    });

    // Subcategory navigation
    subcategoryNav.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            const subcategory = e.target.getAttribute('data-subcategory');
            showSubcategory(subcategory);
            
            // Update active class
            document.querySelectorAll('.subcategory-nav li').forEach(item => {
                item.classList.remove('active');
            });
            e.target.classList.add('active');
        }
    });

    // Gallery image click for lightbox
    gallery.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            const imgSrc = e.target.src;
            const caption = e.target.alt;
            openLightbox(imgSrc, caption);
        }
    });

    // Close lightbox
    closeLightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    // Close lightbox on outside click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

    // Close lightbox with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
        }
    });
}

// Show category
function showCategory(category) {
    currentCategory = category;
    currentSubcategory = null;
    
    // Clear subcategories and gallery
    subcategoryNav.innerHTML = '';
    gallery.innerHTML = '';
    
    if (category === 'all') {
        // Show all works - first item from each subcategory
        Object.values(portfolioData).forEach(mainCategory => {
            Object.values(mainCategory.subcategories).forEach(subcat => {
                if (subcat.items.length > 0) {
                    const item = subcat.items[0];
                    addGalleryItem(item, subcat.name);
                }
            });
        });
        
        // Add "View All" button for each category
        const categories = Object.keys(portfolioData);
        subcategoryNav.innerHTML = `
            <li class="active" data-subcategory="all">Featured Work</li>
            ${categories.map(cat => 
                `<li data-category="${cat}" data-subcategory="${cat}-all">All ${portfolioData[cat].name}</li>`
            ).join('')}
        `;
    } else {
        // Show specific category and its subcategories
        const categoryData = category === 'graphics' ? portfolioData.graphicsDesign : portfolioData.websiteDesign;
        
        // Create subcategory navigation
        subcategoryNav.innerHTML = `
            <li class="active" data-subcategory="${category}-all">All ${categoryData.name}</li>
            ${Object.entries(categoryData.subcategories).map(([key, subcat]) => 
                `<li data-subcategory="${key}">${subcat.name}</li>`
            ).join('')}
        `;
        
        // Show all items from this category
        showAllItemsFromCategory(categoryData);
    }
}

// Show subcategory
function showSubcategory(subcategory) {
    // Clear gallery
    gallery.innerHTML = '';
    
    if (subcategory === 'all') {
        // Show featured work
        Object.values(portfolioData).forEach(mainCategory => {
            Object.values(mainCategory.subcategories).forEach(subcat => {
                if (subcat.items.length > 0) {
                    const item = subcat.items[0];
                    addGalleryItem(item, subcat.name);
                }
            });
        });
    } else if (subcategory === 'graphics-all') {
        showAllItemsFromCategory(portfolioData.graphicsDesign);
    } else if (subcategory === 'web-all') {
        showAllItemsFromCategory(portfolioData.websiteDesign);
    } else {
        // Find the subcategory and show its items
        let found = false;
        
        // Look in Graphics Design
        Object.entries(portfolioData.graphicsDesign.subcategories).forEach(([key, subcat]) => {
            if (key === subcategory) {
                subcat.items.forEach(item => {
                    addGalleryItem(item, subcat.name);
                });
                found = true;
            }
        });
        
        // Look in Website Design if not found
        if (!found) {
            Object.entries(portfolioData.websiteDesign.subcategories).forEach(([key, subcat]) => {
                if (key === subcategory) {
                    subcat.items.forEach(item => {
                        addGalleryItem(item, subcat.name);
                    });
                }
            });
        }
    }
}

// Show all items from a category
function showAllItemsFromCategory(categoryData) {
    Object.values(categoryData.subcategories).forEach(subcat => {
        subcat.items.forEach(item => {
            addGalleryItem(item, subcat.name);
        });
    });
}

// Add a gallery item
function addGalleryItem(item, subcategoryName) {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `
        <div class="gallery-image">
            <img src="${item.src}" alt="${item.alt}" loading="lazy">
            <div class="overlay">
                <h3>${item.caption}</h3>
                <span class="category-tag">${subcategoryName}</span>
            </div>
        </div>
    `;
    gallery.appendChild(galleryItem);
}

// Open lightbox
function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxCaption.textContent = caption;
    lightbox.classList.add('active');
}

// Initialize the app
document.addEventListener('DOMContentLoaded', init);