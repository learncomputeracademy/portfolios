// Portfolio data
const portfolios = [
    {
        id: 12,
        title: "Starter Portfolio",
        author: "LCA",
        fileName: "/zip-files/default.zip",
        thumbnail: "/portfolio-links/default.png",
        tags: ["default"],
        description: "Default to save all portfolio items",
        livePreviewUrls: [
            { name: "Open Website", url: "/portfolio-links/default/index.html" }
        ]
    },
    {
        id: 5,
        title: "Ratnadeep's Portfolio",
        author: "Ratnadeep",
        fileName: "/zip-files/ratnadeep-portfolio.zip",
        thumbnail: "/portfolio-links/ratnadeep-portfolio.png",
        tags: ["student","portfolio"],
        description: "A clean and modern portfolio showcasing Ratnadeep's work and skills.",
        livePreviewUrls: [
            { name: "Open Website", url: "/portfolio-links/ratnadeep/index.html" }
        ]
    },
    {
        id: 1,
        title: "Monish's Portfolio",
        author: "Monish",
        fileName: "/zip-files/monishlca2022.zip",
        thumbnail: "/portfolio-links/monish-portfolio.png",
        tags: ["student","portfolio"],
        description: "Professional portfolio website highlighting Monish's skills and experience.",
        livePreviewUrls: [
            { name: "Open Website", url: "/portfolio-links/monish/index.html" }
        ]
    },
    {
        id: 2,
        title: "Tamal's Portfolio",
        author: "Tamal",
        fileName: "/zip-files/tamallca2022.zip",
        thumbnail: "/portfolio-links/tamal-portfolio.png",
        tags: ["student","portfolio"],
        description: "Creative portfolio showcasing Tamal's design and development work.",
        livePreviewUrls: [
            { name: "Open Website", url: "/portfolio-links/tamal/index.html" }
        ]
    },
    {
        id: 6,
        title: "Ujjal's Portfolio",
        author: "Ujjal",
        fileName: "/zip-files/ujjal-portfolio.zip",
        thumbnail: "/portfolio-links/ujjal-portfolio.png",
        tags: ["student","portfolio"],
        description: "Minimalist portfolio highlighting Ujjal's projects and skills.",
        livePreviewUrls: [
            { name: "Open Website", url: "/portfolio-links/ujjal/index.html" }
        ]
    },
    {
        id: 7,
        title: "Mafiur's Portfolio",
        author: "Mafiur",
        fileName: "/zip-files/mafiurislam-portfolio.zip",
        thumbnail: "/portfolio-links/mafiur-portfolio.png",
        tags: ["student","portfolio"],
        description: "Interactive portfolio site showcasing Mafiur's creative work.",
        livePreviewUrls: [
            { name: "Open Website", url: "/portfolio-links/mafiurislam/index.html" }
        ]
    },
    {
        id: 3,
        title: "Suman Das Portfolio",
        author: "Suman Das",
        fileName: "/zip-files/SumanDas_Portfolio-main.zip",
        thumbnail: "/portfolio-links/suman-portfolio.png",
        tags: ["student","portfolio"],
        description: "Portfolio website showcasing Suman's development projects and skills.",
        livePreviewUrls: [
            { name: "Open Website", url: "/portfolio-links/sumandas/index.html" }
        ]
    },
    {
        id: 4,
        title: "Anup Banerjee Portfolio",
        author: "Anup Banerjee",
        fileName: "/zip-files/anupbanerjee-main.zip",
        thumbnail: "/portfolio-links/anup-portfolio.png",
        tags: ["student","portfolio"],
        description: "Professional portfolio website for Anup Banerjee.",
        livePreviewUrls: [
            { name: "Open Website", url: "/portfolio-links/anupbanerjee/index.html" }
        ]
    },
    {
        id: 8,
        title: "Template Heiko",
        author: "Heiko",
        fileName: "/zip-files/template-heiko.zip",
        thumbnail: "/portfolio-links/heiko-portfolio.png",
        tags: ["template"],
        description: "Clean and modern portfolio template with minimalist design.",
        livePreviewUrls: [
            { name: "Open Website", url: "/portfolio-links/heiko/index.html" }
        ]
    },
    {
        id: 9,
        title: "Template Drake",
        author: "Drake",
        fileName: "/zip-files/drake.zip",
        thumbnail: "/portfolio-links/drake-portfolio.png",
        tags: ["template"],
        description: "Professional portfolio template with dark mode and modern design.",
        livePreviewUrls: [
            { name: "Open Website", url: "/portfolio-links/drake/index.html" }
        ]
    },
    {
        id: 10,
        title: "Template Ovro",
        author: "Ovro",
        fileName: "/zip-files/ovro.zip",
        thumbnail: "/portfolio-links/ovro-portfolio.png",
        tags: ["template"],
        description: "Creative and unique portfolio template with interactive elements.",
        livePreviewUrls: [
            { name: "Open Website", url: "/portfolio-links/ovro/index.html" }
        ]
    },
    {
        id: 11,
        title: "Template Gerold",
        author: "Gerold",
        fileName: "/zip-files/gerold.zip",
        thumbnail: "/portfolio-links/gerold-portfolio.png",
        tags: ["template"],
        description: "Creative and unique portfolio template with interactive elements.",
        livePreviewUrls: [
            { name: "Verson 1", url: "/portfolio-links/gerold/index.html" },
            { name: "Verson 2", url: "/portfolio-links/gerold/index-2.html" },
            { name: "Verson 3", url: "/portfolio-links/gerold/index-3.html" },
            { name: "Verson 4", url: "/portfolio-links/gerold/index-4.html" },
            { name: "Verson 5", url: "/portfolio-links/gerold/index-5.html" },
            { name: "Verson 6", url: "/portfolio-links/gerold/index-6.html" },
            { name: "Verson 7", url: "/portfolio-links/gerold/index-7.html" },
            { name: "Verson 8", url: "/portfolio-links/gerold/index-8.html" },
        ]
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
                    <div class="list-description">${portfolio.description ? portfolio.description.substring(0, 100) + (portfolio.description.length > 100 ? '...' : '') : ''}</div>
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
    document.getElementById('modal-description').textContent = portfolio.description || '';
    
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
    
    // Generate preview links dropdown if multiple URLs exist
    const livePreviewLink = document.getElementById('modal-live-link');
    
    // Clear previous event listeners to prevent duplicates
    const newLivePreviewLink = livePreviewLink.cloneNode(true);
    livePreviewLink.parentNode.replaceChild(newLivePreviewLink, livePreviewLink);
    
    // Update the preview links section
    updatePreviewLinksSection(portfolio, newLivePreviewLink);
    
    // Open modal
    modal.classList.add('active');
    document.body.classList.add('modal-open');
}

// Update the preview links section in the modal
function updatePreviewLinksSection(portfolio, mainLinkElement) {
    // Find action container to add preview links
    const actionsContainer = mainLinkElement.closest('.portfolio-actions');
    
    // Remove any existing preview links dropdown
    const existingDropdown = actionsContainer.querySelector('.preview-links-dropdown');
    if (existingDropdown) {
        existingDropdown.remove();
    }
    
    if (portfolio.livePreviewUrls && portfolio.livePreviewUrls.length > 0) {
        // Set the main link to the first preview URL
        mainLinkElement.href = portfolio.livePreviewUrls[0].url;
        mainLinkElement.textContent = '';
        mainLinkElement.innerHTML = `
            <iconify-icon icon="solar:eye-bold" width="18" height="18"></iconify-icon>
            ${portfolio.livePreviewUrls.length === 1 ? 'Live Preview' : portfolio.livePreviewUrls[0].name}
        `;
        
        // Create dropdown for multiple links if needed
        if (portfolio.livePreviewUrls.length > 1) {
            const dropdownContainer = document.createElement('div');
            dropdownContainer.className = 'preview-links-dropdown';
            
            const dropdownButton = document.createElement('button');
            dropdownButton.className = 'btn secondary preview-dropdown-btn';
            dropdownButton.innerHTML = `
                <iconify-icon icon="solar:list-down-line-duotone" width="18" height="18"></iconify-icon>
                More Views
            `;
            
            const dropdownContent = document.createElement('div');
            dropdownContent.className = 'preview-dropdown-content';
            
            // Skip first URL as it's already the main link
            for (let i = 1; i < portfolio.livePreviewUrls.length; i++) {
                const previewLink = document.createElement('a');
                previewLink.href = portfolio.livePreviewUrls[i].url;
                previewLink.textContent = portfolio.livePreviewUrls[i].name;
                previewLink.target = '_blank';
                dropdownContent.appendChild(previewLink);
            }
            
            dropdownContainer.appendChild(dropdownButton);
            dropdownContainer.appendChild(dropdownContent);
            
            // Add event listener to toggle dropdown
            dropdownButton.addEventListener('click', (e) => {
                e.preventDefault();
                dropdownContent.classList.toggle('show');
            });
            
            // Close dropdown when clicking outside
            window.addEventListener('click', (e) => {
                if (!e.target.matches('.preview-dropdown-btn') && !e.target.closest('.preview-dropdown-btn')) {
                    if (dropdownContent.classList.contains('show')) {
                        dropdownContent.classList.remove('show');
                    }
                }
            });
            
            // Insert the dropdown after the main link
            actionsContainer.insertBefore(dropdownContainer, mainLinkElement.nextSibling);
        }
    } else {
        // Fallback for portfolios without preview URLs
        mainLinkElement.href = '#';
        mainLinkElement.innerHTML = `
            <iconify-icon icon="solar:eye-bold" width="18" height="18"></iconify-icon>
            Preview Not Available
        `;
        mainLinkElement.classList.add('disabled');
    }
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