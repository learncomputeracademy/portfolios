// Portfolio data
const portfolios = [
    {
        id: 5,
        title: "Ratnadeep's Portfolio",
        author: "Ratnadeep",
        fileName: "/zip-files/ratnadeep-portfolio.zip",
        thumbnail: "/portfolio-links/ratnadeep-portfolio.png",
        tags: ["Motion", "Creative"],
        description: "A vibrant portfolio showcasing creative UI/UX design work with smooth animations and interactive elements.",
        livePreviewUrl: "/portfolio-links/ratnadeep/index.html"
    },
    {
        id: 1,
        title: "Monish's Portfolio",
        author: "Monish",
        fileName: "/zip-files/monishlca2022.zip",
        thumbnail: "/portfolio-links/monish-portfolio.png",
        tags: ["Motion", "Creative"],
        description: "A vibrant portfolio showcasing creative UI/UX design work with smooth animations and interactive elements.",
        livePreviewUrl: "/portfolio-links/monish/index.html"
    },
    {
        id: 2,
        title: "Tamal's Portfolio",
        author: "Tamal",
        fileName: "/zip-files/tamallca2022.zip",
        thumbnail: "/portfolio-links/tamal-portfolio.png",
        tags: ["JavaScript", "Clean", "Minimal"],
        description: "A clean and minimal portfolio focused on showcasing development skills with a straightforward user interface.",
        livePreviewUrl: "/portfolio-links/tamal/index.html"
    },
    {
        id: 6,
        title: "Ujjal's Portfolio",
        author: "Ujjal",
        fileName: "/zip-files/ujjal-portfolio.zip",
        thumbnail: "/portfolio-links/ujjal-portfolio.png",
        tags: ["JavaScript", "Clean", "Minimal"],
        description: "A clean and minimal portfolio focused on showcasing development skills with a straightforward user interface.",
        livePreviewUrl: "/portfolio-links/ujjal/index.html"
    },
    {
        id: 7,
        title: "Mafiur's Portfolio",
        author: "Mafiur",
        fileName: "/zip-files/mafiurislam-portfolio.zip",
        thumbnail: "/portfolio-links/mafiur-portfolio.png",
        tags: ["JavaScript", "Clean", "Minimal"],
        description: "A clean and minimal portfolio focused on showcasing development skills with a straightforward user interface.",
        livePreviewUrl: "/portfolio-links/mafiurislam/index.html"
    },
    {
        id: 3,
        title: "Suman Das Portfolio",
        author: "Suman Das",
        fileName: "/zip-files/SumanDas_Portfolio-main.zip",
        thumbnail: "/portfolio-links/suman-portfolio.png",
        tags: ["Three.js", "WebGL", "Interactive"],
        description: "An innovative portfolio featuring 3D elements and interactive components showcasing full-stack development skills.",
        livePreviewUrl: "/portfolio-links/sumandas/index.html"
    },
    {
        id: 4,
        title: "Anup Banerjee Portfolio",
        author: "Anup Banerjee",
        fileName: "/zip-files/anupbanerjee-main.zip",
        thumbnail: "/portfolio-links/anup-portfolio.png",
        tags: ["Minimalist", "Typography", "Clean"],
        description: "A typography-focused portfolio with minimalist design principles and elegant transitions.",
        livePreviewUrl: "/portfolio-links/anupbanerjee/index.html"
    },
    {
        id: 8,
        title: "Template Heiko",
        author: "Heiko",
        fileName: "/zip-files/template-heiko.zip",
        thumbnail: "/portfolio-links/heiko-portfolio.png",
        tags: ["Grid", "Typography", "Clean"],
        description: "A typography-focused portfolio with minimalist design principles and elegant transitions.",
        livePreviewUrl: "/portfolio-links/heiko/index.html"
    }
    ,
    {
        id: 9,
        title: "Template Drake",
        author: "Drake",
        fileName: "/zip-files/drake.zip",
        thumbnail: "/portfolio-links/drake-portfolio.png",
        tags: ["Grid", "Typography", "Clean"],
        description: "A typography-focused portfolio with minimalist design principles and elegant transitions.",
        livePreviewUrl: "/portfolio-links/drake/index.html"
    }
];

// DOM elements
const portfolioContainer = document.getElementById('portfolio-container');
const searchInput = document.getElementById('search-input');
const gridViewBtn = document.getElementById('grid-view');
const listViewBtn = document.getElementById('list-view');
const modal = document.getElementById('portfolio-modal');
const closeModalBtn = document.getElementById('close-modal');

// Current view state and search
let currentView = 'grid';
let searchTerm = '';

// Initialize the app
function init() {
    renderPortfolios();
    setupEventListeners();
}

// Render portfolios based on search
function renderPortfolios() {
    portfolioContainer.innerHTML = '';
    
    const filteredPortfolios = portfolios.filter(portfolio => {
        const matchesSearch = portfolio.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              portfolio.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              portfolio.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        
        return matchesSearch;
    });
    
    if (filteredPortfolios.length === 0) {
        portfolioContainer.innerHTML = `
            <div class="no-results">
                <iconify-icon icon="solar:file-search-broken" width="48" height="48"></iconify-icon>
                <h3>No portfolios found</h3>
                <p>Try adjusting your search criteria</p>
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
                            <button class="download-btn" data-id="${portfolio.id}" data-filename="${portfolio.fileName}">
                                <iconify-icon icon="solar:download-bold" width="20" height="20"></iconify-icon>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card-info">
                    <h3>${portfolio.title}</h3>
                    <p class="author">by ${portfolio.author}</p>
                    <div class="card-tags">
                        ${portfolio.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <a href="#" class="download-link" data-id="${portfolio.id}" data-filename="${portfolio.fileName}">
                        <iconify-icon icon="solar:download-bold" width="18" height="18"></iconify-icon>
                        Download
                    </a>
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
                    <div class="card-tags">
                        ${portfolio.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
                <div class="list-actions">
                    <button class="preview-btn" data-id="${portfolio.id}">
                        <iconify-icon icon="solar:eye-bold" width="20" height="20"></iconify-icon>
                        Preview
                    </button>
                    <button class="download-btn" data-id="${portfolio.id}" data-filename="${portfolio.fileName}">
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
            e.stopPropagation();
            const portfolioId = parseInt(e.currentTarget.getAttribute('data-id'));
            openPortfolioModal(portfolioId);
        });
    });
    
    document.querySelectorAll('.download-btn, .download-link').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const portfolioId = parseInt(e.currentTarget.getAttribute('data-id'));
            const portfolio = portfolios.find(p => p.id === portfolioId);
            if (portfolio) {
                downloadPortfolio(portfolio.fileName);
            }
        });
    });
    
    document.querySelectorAll('.portfolio-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Only open modal if the click is not on a button
            if (!e.target.closest('button') && !e.target.closest('a')) {
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
}

// Open portfolio modal
function openPortfolioModal(portfolioId) {
    const portfolio = portfolios.find(p => p.id === portfolioId);
    
    if (!portfolio) return;
    
    // Set modal content
    document.getElementById('modal-title').textContent = portfolio.title;
    document.getElementById('modal-image').src = portfolio.thumbnail;
    document.getElementById('modal-author').textContent = portfolio.author;
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
    
    // Set download link
    const downloadLink = document.getElementById('modal-download-link');
    downloadLink.setAttribute('data-filename', portfolio.fileName);
    downloadLink.addEventListener('click', (e) => {
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
    // Create a fake download link to trigger the download
    const link = document.createElement('a');
    link.href = `downloads/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log(`Downloading ${fileName}...`);
}

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

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);