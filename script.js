// Portfolio data
const portfolios = [
    {
        id: 1,
        title: "Monish Lca",
        author: "Monish",
        fileName: "monishlca2022.zip",
        thumbnail: "monish-portfolio.png",
        category: ["design", "creative"],
        tags: ["Motion", "Creative"],
        description: "A vibrant portfolio showcasing creative UI/UX design work with smooth animations and interactive elements.",
        views: 1248,
        likes: 387,
        downloads: 94,
        featured: true,
        trending: true,
        livePreviewUrl: "/monish/index.html",
        features: [
            "Responsive design",
            "Interactive animations",
            "Project showcase",
            "Contact form",
            "Dark/light mode"
        ]
    },
    {
        id: 2,
        title: "Tamal's Portfolio",
        author: "Tamal",
        fileName: "tamallca2022.zip",
        thumbnail: "tamal-portfolio.png",
        category: ["development", "minimal"],
        tags: ["JavaScript", "Clean", "Minimal"],
        description: "A clean and minimal portfolio focused on showcasing development skills with a straightforward user interface.",
        views: 967,
        likes: 245,
        downloads: 78,
        featured: false,
        trending: false,
        livePreviewUrl: "/tamal/index.html",
        features: [
            "Clean code organization",
            "Project filtering",
            "Skills visualization",
            "GitHub integration",
            "Performance optimized"
        ]
    },
    {
        id: 3,
        title: "Suman Das Portfolio",
        author: "Suman Das",
        fileName: "SumanDas_Portfolio-main.zip",
        thumbnail: "suman-portfolio.png",
        category: ["development", "creative"],
        tags: ["Three.js", "WebGL", "Interactive"],
        description: "An innovative portfolio featuring 3D elements and interactive components showcasing full-stack development skills.",
        views: 1563,
        likes: 421,
        downloads: 134,
        featured: true,
        trending: false,
        livePreviewUrl: "/sumandas/index.html",
        features: [
            "3D interactive elements",
            "Custom animations",
            "Project case studies",
            "Technical blog section",
            "Contact form with validation"
        ]
    },
    {
        id: 4,
        title: "Anup Banerjee Portfolio",
        author: "Anup Banerjee",
        fileName: "anupbanerjee-main.zip",
        thumbnail: "anup-portfolio.png",
        category: ["design", "minimal"],
        tags: ["Minimalist", "Typography", "Clean"],
        description: "A typography-focused portfolio with minimalist design principles and elegant transitions.",
        views: 842,
        likes: 197,
        downloads: 63,
        featured: false,
        trending: true,
        livePreviewUrl: "/anupbanerjee/index.html",
        features: [
            "Typography showcase",
            "Minimalist layout",
            "Subtle animations",
            "Project case studies",
            "Clean contact section"
        ]
    }
];

// DOM elements
const portfolioContainer = document.getElementById('portfolio-container');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-list li');
const gridViewBtn = document.getElementById('grid-view');
const listViewBtn = document.getElementById('list-view');
const modal = document.getElementById('portfolio-modal');
const closeModalBtn = document.getElementById('close-modal');

// Current filter and view state
let currentFilter = 'all';
let currentView = 'grid';
let searchTerm = '';

// Initialize the app
function init() {
    renderPortfolios();
    setupEventListeners();
}

// Render portfolios based on current filter and search
function renderPortfolios() {
    portfolioContainer.innerHTML = '';
    
    const filteredPortfolios = portfolios.filter(portfolio => {
        const matchesFilter = currentFilter === 'all' || portfolio.category.includes(currentFilter);
        const matchesSearch = portfolio.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              portfolio.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              portfolio.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        
        return matchesFilter && matchesSearch;
    });
    
    if (filteredPortfolios.length === 0) {
        portfolioContainer.innerHTML = `
            <div class="no-results">
                <iconify-icon icon="solar:file-search-broken" width="48" height="48"></iconify-icon>
                <h3>No portfolios found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    filteredPortfolios.forEach(portfolio => {
        const portfolioCard = document.createElement('div');
        portfolioCard.className = 'portfolio-card';
        portfolioCard.setAttribute('data-id', portfolio.id);
        
        if (currentView === 'grid') {
            portfolioCard.innerHTML = `
                <div class="card-thumbnail">
                    <img src="${portfolio.thumbnail}" alt="${portfolio.title}">
                    <div class="card-overlay">
                        <div class="card-actions">
                            <button class="preview-btn" data-id="${portfolio.id}">
                                <iconify-icon icon="solar:eye-bold" width="20" height="20"></iconify-icon>
                            </button>
                            <button class="download-btn" data-filename="${portfolio.fileName}">
                                <iconify-icon icon="solar:download-bold" width="20" height="20"></iconify-icon>
                            </button>
                        </div>
                    </div>
                    ${portfolio.trending ? '<span class="trending-badge">Trending</span>' : ''}
                </div>
                <div class="card-info">
                    <h3>${portfolio.title}</h3>
                    <p class="author">by ${portfolio.author}</p>
                    <div class="card-meta">
                        <div class="meta-item">
                            <iconify-icon icon="solar:eye-linear" width="16" height="16"></iconify-icon>
                            <span>${formatNumber(portfolio.views)}</span>
                        </div>
                        <div class="meta-item">
                            <iconify-icon icon="solar:heart-linear" width="16" height="16"></iconify-icon>
                            <span>${formatNumber(portfolio.likes)}</span>
                        </div>
                        <div class="meta-item">
                            <iconify-icon icon="solar:download-linear" width="16" height="16"></iconify-icon>
                            <span>${formatNumber(portfolio.downloads)}</span>
                        </div>
                    </div>
                    <div class="card-tags">
                        ${portfolio.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
        } else {
            portfolioCard.classList.add('list-item');
            portfolioCard.innerHTML = `
                <div class="list-thumbnail">
                    <img src="${portfolio.thumbnail}" alt="${portfolio.title}">
                </div>
                <div class="list-info">
                    <h3>${portfolio.title}</h3>
                    <p class="author">by ${portfolio.author}</p>
                    <div class="list-description">${portfolio.description.substring(0, 100)}...</div>
                </div>
                <div class="list-meta">
                    <div class="meta-item">
                        <iconify-icon icon="solar:eye-linear" width="16" height="16"></iconify-icon>
                        <span>${formatNumber(portfolio.views)}</span>
                    </div>
                    <div class="meta-item">
                        <iconify-icon icon="solar:heart-linear" width="16" height="16"></iconify-icon>
                        <span>${formatNumber(portfolio.likes)}</span>
                    </div>
                </div>
                <div class="list-actions">
                    <button class="preview-btn" data-id="${portfolio.id}">
                        <iconify-icon icon="solar:eye-bold" width="20" height="20"></iconify-icon>
                        Preview
                    </button>
                    <button class="download-btn" data-filename="${portfolio.fileName}">
                        <iconify-icon icon="solar:download-bold" width="20" height="20"></iconify-icon>
                        Download
                    </button>
                </div>
            `;
        }
        
        portfolioContainer.appendChild(portfolioCard);
    });
    
    // Add event listeners to the newly created elements
    document.querySelectorAll('.preview-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const portfolioId = parseInt(e.currentTarget.getAttribute('data-id'));
            openPortfolioModal(portfolioId);
        });
    });
    
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const fileName = e.currentTarget.getAttribute('data-filename');
            downloadPortfolio(fileName);
        });
    });
    
    document.querySelectorAll('.portfolio-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Only open modal if the click is not on a button
            if (!e.target.closest('button')) {
                const portfolioId = parseInt(card.getAttribute('data-id'));
                openPortfolioModal(portfolioId);
            }
        });
    });
}

// Setup event listeners
function setupEventListeners() {
    // Search input
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        renderPortfolios();
    });
    
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.getAttribute('data-filter');
            renderPortfolios();
        });
    });
    
    // View toggle
    gridViewBtn.addEventListener('click', () => {
        if (currentView !== 'grid') {
            currentView = 'grid';
            portfolioContainer.classList.remove('list-view');
            portfolioContainer.classList.add('grid-view');
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
            renderPortfolios();
        }
    });
    
    listViewBtn.addEventListener('click', () => {
        if (currentView !== 'list') {
            currentView = 'list';
            portfolioContainer.classList.remove('grid-view');
            portfolioContainer.classList.add('list-view');
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
            renderPortfolios();
        }
    });
    
    // Close modal button
    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.classList.remove('modal-open');
        }
    });
    
    // Featured portfolio click
    document.querySelector('.featured-portfolio').addEventListener('click', () => {
        const featuredPortfolio = portfolios.find(p => p.featured);
        if (featuredPortfolio) {
            openPortfolioModal(featuredPortfolio.id);
        }
    });
}

// Open portfolio modal
function openPortfolioModal(portfolioId) {
    const portfolio = portfolios.find(p => p.id === portfolioId);
    
    if (!portfolio) return;
    
    // Set modal content
    document.getElementById('modal-title').textContent = portfolio.title;
    document.getElementById('modal-image').src = portfolio.thumbnail;
    document.getElementById('modal-author').textContent = portfolio.author;
    document.getElementById('modal-views').textContent = formatNumber(portfolio.views);
    document.getElementById('modal-likes').textContent = formatNumber(portfolio.likes);
    document.getElementById('modal-downloads').textContent = formatNumber(portfolio.downloads);
    document.getElementById('modal-description').textContent = portfolio.description;
    
    // Set tags
    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = '';
    portfolio.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });
    
    // Set features
    const featuresContainer = document.getElementById('modal-features');
    featuresContainer.innerHTML = '';
    portfolio.features.forEach(feature => {
        const li = document.createElement('li');
        li.innerHTML = `
            <iconify-icon icon="solar:check-circle-bold" width="16" height="16"></iconify-icon>
            <span>${feature}</span>
        `;
        featuresContainer.appendChild(li);
    });
    
    // Set download link
    document.getElementById('modal-download-link').setAttribute('data-filename', portfolio.fileName);
    document.getElementById('modal-download-link').addEventListener('click', (e) => {
        e.preventDefault();
        downloadPortfolio(portfolio.fileName);
    });
    
    // Set live preview link
    const livePreviewLink = document.getElementById('modal-live-link');
    livePreviewLink.href = portfolio.livePreviewUrl;
    
    // Open modal
    modal.classList.add('active');
    document.body.classList.add('modal-open');
}

// Download portfolio
function downloadPortfolio(fileName) {
    console.log(`Downloading ${fileName}...`);
    // In a real application, this would trigger a file download
    // For demonstration purposes, we'll just show an alert
    alert(`Downloading ${fileName}`);
}

// Format numbers (e.g., 1000 → 1k)
function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Add hover effects for better interaction
document.addEventListener('mouseover', (e) => {
    const portfolioCard = e.target.closest('.portfolio-card');
    if (portfolioCard) {
        portfolioCard.classList.add('hover');
    }
});

document.addEventListener('mouseout', (e) => {
    const portfolioCard = e.target.closest('.portfolio-card');
    if (portfolioCard) {
        portfolioCard.classList.remove('hover');
    }
});

// Add animations
document.addEventListener('DOMContentLoaded', () => {
    // Add entrance animation to portfolio cards
    const cards = document.querySelectorAll('.portfolio-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animated');
        }, 100 * index);
    });
});