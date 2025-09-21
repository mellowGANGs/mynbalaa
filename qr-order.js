// QR Order System - Advanced Implementation
let currentLanguage = 'ru';
let selectedAgeGroup = null;
let currentCategory = 'kids';
let cart = [];
let tableNumber = 1;
let orderStatus = 'ready'; // ready, ordering, cooking, ready-to-serve

// Enhanced Menu Data with Age Recommendations and Nutritional Info
const qrMenuData = {
    kids: [
        {
            id: 'kids_1',
            name: { ru: "Детская пицца Маргарита", kz: "Балалар Маргарита пиццасы" },
            description: { ru: "Классическая пицца с томатным соусом и моцареллой", kz: "Қызанақ соусы мен моцарелла сыры бар классикалық пицца" },
            price: 2500,
            emoji: "🍕",
            ageGroups: ["3-6", "7-12"],
            allergens: ["gluten", "dairy"],
            prepTime: 15,
            popularity: 95
        },
        {
            id: 'kids_2',
            name: { ru: "Куриные наггетсы", kz: "Тауық наггетстары" },
            description: { ru: "Хрустящие куриные кусочки с картофелем фри", kz: "Картоп фри көкөністерімен хрустящие тауық кесектері" },
            price: 2200,
            emoji: "🍗",
            ageGroups: ["3-6", "7-12", "13+"],
            allergens: ["gluten"],
            prepTime: 12,
            popularity: 88
        },
        {
            id: 'kids_3',
            name: { ru: "Детская паста", kz: "Балалар пастасы" },
            description: { ru: "Паста с нежным сливочным соусом", kz: "Жұмсақ кремді соуспен паста" },
            price: 1800,
            emoji: "🍝",
            ageGroups: ["0-2", "3-6", "7-12"],
            allergens: ["gluten", "dairy"],
            prepTime: 10,
            popularity: 82
        },
        {
            id: 'kids_4',
            name: { ru: "Молочная каша с фруктами", kz: "Жемістермен сүт ботқасы" },
            description: { ru: "Полезная овсяная каша с бананом и ягодами", kz: "Банан мен жидектермен пайдалы сұлы ботқасы" },
            price: 1200,
            emoji: "🥣",
            ageGroups: ["0-2", "3-6"],
            allergens: ["dairy"],
            prepTime: 8,
            popularity: 75
        }
    ],
    drinks: [
        {
            id: 'drink_1',
            name: { ru: "Детский молочный коктейль", kz: "Балалар сүт коктейлі" },
            description: { ru: "Ванильный коктейль с взбитыми сливками", kz: "Қамырма бар ванильді коктейль" },
            price: 1500,
            emoji: "🥤",
            ageGroups: ["3-6", "7-12", "13+"],
            allergens: ["dairy"],
            prepTime: 5,
            popularity: 90
        },
        {
            id: 'drink_2',
            name: { ru: "Свежевыжатый апельсиновый сок", kz: "Жаңадан сығылған апельсин шырыны" },
            description: { ru: "100% натуральный сок без добавок", kz: "100% табиғи қоспасыз шырын" },
            price: 1200,
            emoji: "🍊",
            ageGroups: ["0-2", "3-6", "7-12", "13+"],
            allergens: [],
            prepTime: 3,
            popularity: 85
        },
        {
            id: 'drink_3',
            name: { ru: "Детский травяной чай", kz: "Балалар шөп шайы" },
            description: { ru: "Успокаивающий чай с ромашкой и медом", kz: "Ромашка мен балмен тыныштандыратын шай" },
            price: 800,
            emoji: "🍵",
            ageGroups: ["0-2", "3-6", "7-12"],
            allergens: [],
            prepTime: 5,
            popularity: 70
        }
    ],
    main: [
        {
            id: 'main_1',
            name: { ru: "Стейк из говядины", kz: "Сиыр етінен стейк" },
            description: { ru: "Сочный стейк средней прожарки с гарниром", kz: "Гарнирмен орташа піскен дәмді стейк" },
            price: 5500,
            emoji: "🥩",
            ageGroups: ["13+"],
            allergens: [],
            prepTime: 25,
            popularity: 78
        },
        {
            id: 'main_2',
            name: { ru: "Запеченная семга", kz: "Пісірілген семга" },
            description: { ru: "Семга с лимоном и травами", kz: "Лимон мен шөппен семга" },
            price: 4800,
            emoji: "🐟",
            ageGroups: ["7-12", "13+"],
            allergens: ["fish"],
            prepTime: 20,
            popularity: 72
        },
        {
            id: 'main_3',
            name: { ru: "Куриная грудка гриль", kz: "Гриль тауық көкірегі" },
            description: { ru: "Нежная куриная грудка с овощами", kz: "Көкөністермен жұмсақ тауық көкірегі" },
            price: 3200,
            emoji: "🍗",
            ageGroups: ["7-12", "13+"],
            allergens: [],
            prepTime: 18,
            popularity: 80
        }
    ],
    desserts: [
        {
            id: 'dessert_1',
            name: { ru: "Детский торт", kz: "Балалар тортысы" },
            description: { ru: "Воздушный бисквит с фруктами", kz: "Жемістермен ауалы бисквит" },
            price: 2000,
            emoji: "🎂",
            ageGroups: ["3-6", "7-12", "13+"],
            allergens: ["gluten", "dairy", "eggs"],
            prepTime: 0,
            popularity: 92
        },
        {
            id: 'dessert_2',
            name: { ru: "Мороженое", kz: "Балмұздақ" },
            description: { ru: "3 шарика мороженого с топпингами", kz: "Қосымшалармен 3 балмұздақ шары" },
            price: 1500,
            emoji: "🍦",
            ageGroups: ["0-2", "3-6", "7-12", "13+"],
            allergens: ["dairy"],
            prepTime: 2,
            popularity: 95
        },
        {
            id: 'dessert_3',
            name: { ru: "Фруктовый салат", kz: "Жеміс салаты" },
            description: { ru: "Свежие сезонные фрукты", kz: "Жаңа маусымдық жемістер" },
            price: 1200,
            emoji: "🥗",
            ageGroups: ["0-2", "3-6", "7-12", "13+"],
            allergens: [],
            prepTime: 5,
            popularity: 68
        }
    ]
};

// Order simulation data
const orderStatuses = {
    ru: {
        'ready': 'Готовы принять заказ',
        'ordering': 'Оформление заказа...',
        'cooking': 'Готовим ваш заказ',
        'ready-to-serve': 'Заказ готов!'
    },
    kz: {
        'ready': 'Тапсырысты қабылдауға дайын',
        'ordering': 'Тапсырысты рәсімдеу...',
        'cooking': 'Тапсырысыңызды дайындап жатырмыз',
        'ready-to-serve': 'Тапсырыс дайын!'
    }
};

// Initialize QR Order System
document.addEventListener('DOMContentLoaded', function() {
    // Get table number from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    tableNumber = urlParams.get('table') || 1;
    document.getElementById('tableNumber').textContent = tableNumber;
    
    initializeQROrder();
    loadMenuCategory('kids');
    updateLanguage();
});

function initializeQROrder() {
    // Simulate connection to order system
    updateOrderStatus('ready');
    
    // Load saved cart from localStorage
    const savedCart = localStorage.getItem(`cart_table_${tableNumber}`);
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
    
    // Check for ongoing orders
    checkOrderStatus();
}

function showAgeSelector() {
    document.getElementById('ageSelectorModal').style.display = 'block';
}

function closeAgeSelector() {
    document.getElementById('ageSelectorModal').style.display = 'none';
    if (selectedAgeGroup) {
        showPersonalRecommendations();
    }
}

function selectAgeGroup(ageGroup) {
    selectedAgeGroup = ageGroup;
    
    // Update UI
    document.querySelectorAll('.age-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelector(`[data-age="${ageGroup}"]`).classList.add('selected');
    
    // Save preference
    localStorage.setItem(`agePreference_table_${tableNumber}`, ageGroup);
    
    showNotification('success', 
        currentLanguage === 'ru' ? 'Возраст выбран!' : 'Жас таңдалды!',
        currentLanguage === 'ru' ? 
        `Теперь мы покажем лучшие блюда для возраста ${ageGroup}` :
        `Енді біз ${ageGroup} жасына арналған ең жақсы тағамдарды көрсетеміз`
    );
}

function showPersonalRecommendations() {
    if (!selectedAgeGroup) return;
    
    const recommendationsSection = document.getElementById('personalRecommendations');
    const recommendedItems = document.getElementById('recommendedItems');
    
    // Get recommendations based on age and popularity
    const allItems = Object.values(qrMenuData).flat();
    const recommendations = allItems
        .filter(item => item.ageGroups.includes(selectedAgeGroup))
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, 4);
    
    recommendedItems.innerHTML = recommendations.map(item => `
        <div class="menu-item-card recommended-item" data-item-id="${item.id}">
            <div class="menu-item-image">
                ${item.emoji}
                <div class="recommended-badge">⭐ ${currentLanguage === 'ru' ? 'Рекомендуем' : 'Ұсынамыз'}</div>
            </div>
            <div class="menu-item-content">
                <div class="menu-item-name">${item.name[currentLanguage]}</div>
                <div class="menu-item-description">${item.description[currentLanguage]}</div>
                <div class="menu-item-footer">
                    <div class="menu-item-price">${item.price.toLocaleString()}₸</div>
                    <button class="add-to-cart-btn" onclick="addToCart('${item.id}')">
                        <i class="fas fa-plus"></i>
                        <span data-ru="В корзину" data-kz="Себетке">В корзину</span>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    recommendationsSection.style.display = 'block';
    updateLanguage();
}

function selectCategory(category) {
    currentCategory = category;
    
    // Update active tab
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    loadMenuCategory(category);
}

function loadMenuCategory(category) {
    const menuItems = document.getElementById('menuItems');
    const items = qrMenuData[category] || [];
    
    menuItems.innerHTML = items.map(item => {
        const isRecommended = selectedAgeGroup && item.ageGroups.includes(selectedAgeGroup);
        
        return `
            <div class="menu-item-card ${isRecommended ? 'recommended-item' : ''}" data-item-id="${item.id}">
                <div class="menu-item-image">
                    ${item.emoji}
                    ${isRecommended ? `<div class="recommended-badge">⭐ ${currentLanguage === 'ru' ? 'Для вас' : 'Сізге'}</div>` : ''}
                </div>
                <div class="menu-item-content">
                    <div class="menu-item-name">${item.name[currentLanguage]}</div>
                    <div class="menu-item-description">${item.description[currentLanguage]}</div>
                    <div class="menu-item-details">
                        <small style="color: var(--text-light);">
                            <i class="fas fa-clock"></i> ${item.prepTime} ${currentLanguage === 'ru' ? 'мин' : 'мин'} | 
                            <i class="fas fa-thumbs-up"></i> ${item.popularity}%
                            ${item.allergens.length > 0 ? ` | <i class="fas fa-exclamation-triangle"></i> ${item.allergens.join(', ')}` : ''}
                        </small>
                    </div>
                    <div class="menu-item-footer">
                        <div class="menu-item-price">${item.price.toLocaleString()}₸</div>
                        <button class="add-to-cart-btn" onclick="addToCart('${item.id}')">
                            <i class="fas fa-plus"></i>
                            <span data-ru="В корзину" data-kz="Себетке">В корзину</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Add staggered animation
    document.querySelectorAll('.menu-item-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    updateLanguage();
}

function addToCart(itemId) {
    const allItems = Object.values(qrMenuData).flat();
    const item = allItems.find(i => i.id === itemId);
    
    if (!item) return;
    
    // Check if item already in cart
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }
    
    // Save cart to localStorage
    localStorage.setItem(`cart_table_${tableNumber}`, JSON.stringify(cart));
    
    // Update UI
    updateCartDisplay();
    
    // Show feedback
    const button = event.target.closest('.add-to-cart-btn');
    button.style.transform = 'scale(1.2)';
    button.innerHTML = '<i class="fas fa-check"></i> Добавлено!';
    setTimeout(() => {
        button.style.transform = '';
        button.innerHTML = `<i class="fas fa-plus"></i> <span data-ru="В корзину" data-kz="Себетке">В корзину</span>`;
        updateLanguage();
    }, 1000);
    
    showNotification('success',
        currentLanguage === 'ru' ? 'Добавлено в корзину!' : 'Себетке қосылды!',
        item.name[currentLanguage]
    );
}

function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = totalItems;
    cartTotal.textContent = `${totalPrice.toLocaleString()}₸`;
    
    // Update cart modal if open
    if (document.getElementById('cartModal').style.display === 'block') {
        loadCartItems();
    }
}

function openCart() {
    document.getElementById('cartModal').style.display = 'block';
    loadCartItems();
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

function loadCartItems() {
    const cartItems = document.getElementById('cartItems');
    const finalTotal = document.getElementById('finalTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p data-ru="Корзина пуста" data-kz="Себет бос">Корзина пуста</p>
            </div>
        `;
        finalTotal.textContent = '0₸';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">${item.emoji}</div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name[currentLanguage]}</div>
                <div class="cart-item-price">${item.price.toLocaleString()}₸</div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
                <span class="quantity-display">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
            </div>
        </div>
    `).join('');
    
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    finalTotal.textContent = `${totalPrice.toLocaleString()}₸`;
    
    updateLanguage();
}

function updateQuantity(itemId, change) {
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        cart = cart.filter(cartItem => cartItem.id !== itemId);
    }
    
    // Save updated cart
    localStorage.setItem(`cart_table_${tableNumber}`, JSON.stringify(cart));
    
    // Update displays
    updateCartDisplay();
    loadCartItems();
}

function placeOrder() {
    if (cart.length === 0) {
        showNotification('warning',
            currentLanguage === 'ru' ? 'Корзина пуста' : 'Себет бос',
            currentLanguage === 'ru' ? 'Добавьте блюда перед оформлением заказа' : 'Тапсырыс беру алдында тағам қосыңыз'
        );
        return;
    }
    
    // Calculate total prep time
    const totalPrepTime = Math.max(...cart.map(item => item.prepTime)) + 5; // +5 minutes buffer
    
    // Create order
    const order = {
        tableNumber: tableNumber,
        items: cart,
        totalPrice: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        timestamp: new Date().toISOString(),
        estimatedTime: totalPrepTime,
        status: 'cooking'
    };
    
    // Save order
    localStorage.setItem(`order_table_${tableNumber}`, JSON.stringify(order));
    
    // Clear cart
    cart = [];
    localStorage.removeItem(`cart_table_${tableNumber}`);
    
    // Update UI
    updateCartDisplay();
    closeCart();
    updateOrderStatus('cooking');
    
    // Show order confirmation
    showOrderNotification('success',
        currentLanguage === 'ru' ? 'Заказ принят!' : 'Тапсырыс қабылданды!',
        currentLanguage === 'ru' ? 
        `Ваш заказ готовится. Ожидайте ~${totalPrepTime} минут` :
        `Сіздің тапсырысыңыз дайындалуда. ~${totalPrepTime} минут күтіңіз`
    );
    
    // Simulate cooking process
    simulateOrderProgress(totalPrepTime);
}

function simulateOrderProgress(totalTime) {
    // Show cooking notification after 2 seconds
    setTimeout(() => {
        showOrderNotification('cooking',
            currentLanguage === 'ru' ? 'Готовим ваш заказ' : 'Тапсырысыңызды дайындап жатырмыз',
            currentLanguage === 'ru' ? 'Наши повара начали готовить' : 'Біздің аспазшылар дайындай бастады'
        );
    }, 2000);
    
    // Show ready notification
    setTimeout(() => {
        updateOrderStatus('ready-to-serve');
        showOrderNotification('success',
            currentLanguage === 'ru' ? 'Заказ готов!' : 'Тапсырыс дайын!',
            currentLanguage === 'ru' ? 'Можете забирать свой заказ' : 'Тапсырысыңызды ала аласыз'
        );
        
        // Clear order after 5 minutes
        setTimeout(() => {
            localStorage.removeItem(`order_table_${tableNumber}`);
            updateOrderStatus('ready');
        }, 5 * 60 * 1000);
        
    }, totalTime * 1000); // Convert minutes to milliseconds
}

function updateOrderStatus(status) {
    orderStatus = status;
    const statusElement = document.getElementById('orderStatus');
    const statusText = orderStatuses[currentLanguage][status];
    
    statusElement.innerHTML = `
        <i class="fas fa-${getStatusIcon(status)}"></i>
        ${statusText}
    `;
    
    statusElement.className = `order-status ${status}`;
}

function getStatusIcon(status) {
    const icons = {
        'ready': 'check-circle',
        'ordering': 'clock',
        'cooking': 'fire',
        'ready-to-serve': 'bell'
    };
    return icons[status] || 'clock';
}

function checkOrderStatus() {
    const savedOrder = localStorage.getItem(`order_table_${tableNumber}`);
    if (savedOrder) {
        const order = JSON.parse(savedOrder);
        const elapsed = (new Date() - new Date(order.timestamp)) / 1000 / 60; // minutes
        
        if (elapsed >= order.estimatedTime) {
            updateOrderStatus('ready-to-serve');
        } else {
            updateOrderStatus('cooking');
            // Continue simulation for remaining time
            const remainingTime = order.estimatedTime - elapsed;
            setTimeout(() => {
                updateOrderStatus('ready-to-serve');
            }, remainingTime * 60 * 1000);
        }
    }
}

function showOrderNotification(type, title, message) {
    const container = document.getElementById('orderNotifications');
    
    const notification = document.createElement('div');
    notification.className = `order-notification ${type}`;
    
    const icons = {
        success: '✅',
        warning: '⚠️',
        cooking: '👨‍🍳'
    };
    
    notification.innerHTML = `
        <div class="order-notification-icon">${icons[type] || 'ℹ️'}</div>
        <div>
            <div style="font-weight: 600; margin-bottom: 4px;">${title}</div>
            <div style="font-size: 0.9rem; opacity: 0.9;">${message}</div>
        </div>
    `;
    
    container.appendChild(notification);
    
    // Auto remove after 8 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 8000);
}

// Language functions
function toggleLanguage() {
    currentLanguage = currentLanguage === 'ru' ? 'kz' : 'ru';
    updateLanguage();
    
    // Update language toggle button
    const langToggle = document.getElementById('langToggle');
    const span = langToggle.querySelector('span');
    span.textContent = currentLanguage === 'ru' ? 'Қазақша' : 'Русский';
    
    // Reload dynamic content
    loadMenuCategory(currentCategory);
    if (selectedAgeGroup) {
        showPersonalRecommendations();
    }
    updateOrderStatus(orderStatus);
}

function updateLanguage() {
    document.querySelectorAll('[data-ru]').forEach(element => {
        const ruText = element.getAttribute('data-ru');
        const kzText = element.getAttribute('data-kz');
        
        if (currentLanguage === 'kz' && kzText) {
            element.textContent = kzText;
        } else if (ruText) {
            element.textContent = ruText;
        }
    });
}

// Notification system (reuse from main app)
function showNotification(type, title, message, duration = 4000) {
    const container = document.querySelector('.notification-container') || 
                    document.getElementById('orderNotifications');
    
    const notification = document.createElement('div');
    notification.className = `order-notification ${type}`;
    
    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    };
    
    notification.innerHTML = `
        <div class="order-notification-icon">${icons[type] || 'ℹ️'}</div>
        <div>
            <div style="font-weight: 600; margin-bottom: 4px;">${title}</div>
            <div style="font-size: 0.9rem; opacity: 0.9;">${message}</div>
        </div>
    `;
    
    container.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, duration);
}

// Load saved preferences on page load
window.addEventListener('load', function() {
    const savedAge = localStorage.getItem(`agePreference_table_${tableNumber}`);
    if (savedAge) {
        selectedAgeGroup = savedAge;
        showPersonalRecommendations();
        
        // Hide the banner
        document.querySelector('.recommendations-banner').style.display = 'none';
    }
});
