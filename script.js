// Global variables
let currentLanguage = 'ru';
let currentUser = null;
let currentCategory = 'kids';
let selectedPaymentMethod = null;
let selectedAge = null;

// Language data
const translations = {
    ru: {
        // Navigation
        "Главная": "Главная",
        "Меню": "Меню", 
        "Аттракционы": "Аттракционы",
        "Бронирование": "Бронирование",
        "Новости": "Новости",
        "Контакты": "Контакты",
        "Админ": "Админ",
        
        // Hero section
        "Добро пожаловать в Мынбала!": "Добро пожаловать в Мынбала!",
        "Лучшее место для детского отдыха и развлечений!": "Лучшее место для детского отдыха и развлечений!",
        "Время работы": "Время работы",
        "Цены входа": "Цены входа",
        "Наши города": "Наши города",
        "Будни: 3.000₸": "Будни: 3.000₸",
        "Выходные: 3.500₸": "Выходные: 3.500₸",
        "Без выходных": "Без выходных",
        "Забронировать стол": "Забронировать стол",
        
        // Menu categories
        "Детское меню": "Детское меню",
        "Напитки": "Напитки",
        "Холодные закуски": "Холодные закуски",
        "Салаты": "Салаты",
        "Вторые блюда": "Вторые блюда",
        "Пицца": "Пицца",
        "Паста": "Паста",
        "Суши": "Суши",
        "Фаст фуд": "Фаст фуд",
        "Лимонады": "Лимонады",
        "Авторские чаи Mynbala": "Авторские чаи Mynbala",
        "Коктейлы": "Коктейлы",
        "Штрафы": "Штрафы"
    },
    kz: {
        // Navigation  
        "Главная": "Басты",
        "Меню": "Мәзір",
        "Аттракционы": "Аттракциондар", 
        "Бронирование": "Брондау",
        "Новости": "Жаңалықтар",
        "Контакты": "Байланыс",
        "Админ": "Әкімші",
        
        // Hero section
        "Добро пожаловать в Мынбала!": "Мынбалаға қош келдіңіз!",
        "Лучшее место для детского отдыха и развлечений!": "Балалар демалысы мен ойын-сауыққа арналған ең жақсы орын!",
        "Время работы": "Жұмыс уақыты",
        "Цены входа": "Кіру бағасы",
        "Наши города": "Біздің қалалар",
        "Будни: 3.000₸": "Жұмыс күндері: 3.000₸",
        "Выходные: 3.500₸": "Демалыс күндері: 3.500₸",
        "Без выходных": "Демалыссыз",
        "Забронировать стол": "Үстел брондау",
        
        // Menu categories
        "Детское меню": "Балалар мәзірі",
        "Напитки": "Сусындар",
        "Холодные закуски": "Суық жеңіл тағамдар",
        "Салаты": "Салаттар",
        "Вторые блюда": "Екінші тағамдар",
        "Пицца": "Пицца",
        "Паста": "Паста", 
        "Суши": "Суши",
        "Фаст фуд": "Фаст фуд",
        "Лимонады": "Лимонадтар",
        "Авторские чаи Mynbala": "Mynbala авторлық шайлар",
        "Коктейлы": "Коктейльдер",
        "Штрафы": "Айыппұлдар"
    }
};

// Menu data
const menuData = {
    kids: [
        {
            name: { ru: "Детская пицца Маргарита", kz: "Балалар Маргарита пиццасы" },
            description: { ru: "Классическая пицца с томатным соусом и моцареллой", kz: "Қызанақ соусы мен моцарелла сыры бар классикалық пицца" },
            price: "2.500₸",
            image: "https://via.placeholder.com/300x200/ff6b6b/ffffff?text=Детская+пицца"
        },
        {
            name: { ru: "Куриные наггетсы", kz: "Тауық наггетстары" },
            description: { ru: "Хрустящие куриные кусочки с картофелем фри", kz: "Картоп фри көкөністерімен хрустящие тауық кесектері" },
            price: "2.200₸",
            image: "https://via.placeholder.com/300x200/4ecdc4/ffffff?text=Наггетсы"
        },
        {
            name: { ru: "Детская паста", kz: "Балалар пастасы" },
            description: { ru: "Паста с нежным сливочным соусом", kz: "Жұмсақ кремді соуспен паста" },
            price: "1.800₸",
            image: "https://via.placeholder.com/300x200/ffe66d/ffffff?text=Детская+паста"
        }
    ],
    drinks: [
        {
            name: { ru: "Свежевыжатый апельсиновый сок", kz: "Жаңадан сығылған апельсин шырыны" },
            description: { ru: "100% натуральный сок без добавок", kz: "100% табиғи қоспасыз шырын" },
            price: "1.200₸",
            image: "https://via.placeholder.com/300x200/ff9f43/ffffff?text=Апельсиновый+сок"
        },
        {
            name: { ru: "Детский молочный коктейль", kz: "Балалар сүт коктейлі" },
            description: { ru: "Ванильный коктейль с взбитыми сливками", kz: "Қамырма бар ванильді коктейль" },
            price: "1.500₸",
            image: "https://via.placeholder.com/300x200/f0932b/ffffff?text=Молочный+коктейль"
        }
    ],
    "cold-snacks": [
        {
            name: { ru: "Ассорти сыров", kz: "Сыр ассортименті" },
            description: { ru: "Подборка лучших сыров с орехами и виноградом", kz: "Жаңғақ пен жүзім қосылған ең жақсы сыр таңдауы" },
            price: "3.500₸",
            image: "https://via.placeholder.com/300x200/6c5ce7/ffffff?text=Ассорти+сыров"
        },
        {
            name: { ru: "Мясная нарезка", kz: "Ет турағышы" },
            description: { ru: "Деликатесные мясные изделия", kz: "Деликатес ет өнімдері" },
            price: "4.200₸",
            image: "https://via.placeholder.com/300x200/fd79a8/ffffff?text=Мясная+нарезка"
        }
    ],
    salads: [
        {
            name: { ru: "Цезарь с курицей", kz: "Тауықты Цезарь" },
            description: { ru: "Классический салат с курицей, сухариками и соусом Цезарь", kz: "Тауық, сухарик және Цезарь соусымен классикалық салат" },
            price: "2.800₸",
            image: "https://via.placeholder.com/300x200/00b894/ffffff?text=Цезарь"
        },
        {
            name: { ru: "Греческий салат", kz: "Грек салаты" },
            description: { ru: "Свежие овощи с сыром фета и маслинами", kz: "Фета сыры мен зәйтүнмен жаңа көкөністер" },
            price: "2.500₸",
            image: "https://via.placeholder.com/300x200/e17055/ffffff?text=Греческий"
        }
    ],
    "main-dishes": [
        {
            name: { ru: "Стейк из говядины", kz: "Сиыр етінен стейк" },
            description: { ru: "Сочный стейк средней прожарки с гарниром", kz: "Гарнирмен орташа піскен дәмді стейк" },
            price: "5.500₸",
            image: "https://via.placeholder.com/300x200/2d3436/ffffff?text=Стейк"
        },
        {
            name: { ru: "Запеченная семга", kz: "Пісірілген семга" },
            description: { ru: "Семга с лимоном и травами", kz: "Лимон мен шөппен семга" },
            price: "4.800₸",
            image: "https://via.placeholder.com/300x200/74b9ff/ffffff?text=Семга"
        }
    ],
    pizza: [
        {
            name: { ru: "Пепперони", kz: "Пепперони" },
            description: { ru: "Острая пицца с салями пепперони", kz: "Пепперони салямысымен ащы пицца" },
            price: "3.200₸",
            image: "https://via.placeholder.com/300x200/e84393/ffffff?text=Пепперони"
        },
        {
            name: { ru: "4 сыра", kz: "4 сыр" },
            description: { ru: "Пицца с четырьмя видами сыра", kz: "Төрт түрлі сырлы пицца" },
            price: "3.500₸",
            image: "https://via.placeholder.com/300x200/fdcb6e/ffffff?text=4+сыра"
        }
    ],
    pasta: [
        {
            name: { ru: "Карбонара", kz: "Карбонара" },
            description: { ru: "Паста с беконом и сливочным соусом", kz: "Бекон мен кремді соуспен паста" },
            price: "2.800₸",
            image: "https://via.placeholder.com/300x200/fab1a0/ffffff?text=Карбонара"
        },
        {
            name: { ru: "Болоньезе", kz: "Болоньезе" },
            description: { ru: "Паста с мясным соусом", kz: "Етті соуспен паста" },
            price: "2.600₸",
            image: "https://via.placeholder.com/300x200/00cec9/ffffff?text=Болоньезе"
        }
    ],
    sushi: [
        {
            name: { ru: "Филадельфия", kz: "Филадельфия" },
            description: { ru: "Ролл с лососем и сливочным сыром", kz: "Лосось пен кремді сырмен ролл" },
            price: "2.200₸",
            image: "https://via.placeholder.com/300x200/55a3ff/ffffff?text=Филадельфия"
        },
        {
            name: { ru: "Калифорния", kz: "Калифорния" },
            description: { ru: "Ролл с крабом и авокадо", kz: "Шаян мен авокадомен ролл" },
            price: "2.000₸",
            image: "https://via.placeholder.com/300x200/fd79a8/ffffff?text=Калифорния"
        }
    ],
    "fast-food": [
        {
            name: { ru: "Чизбургер", kz: "Чизбургер" },
            description: { ru: "Сочный бургер с двойным сыром", kz: "Қос сырлы дәмді бургер" },
            price: "2.000₸",
            image: "https://via.placeholder.com/300x200/e17055/ffffff?text=Чизбургер"
        },
        {
            name: { ru: "Картофель фри", kz: "Картоп фри" },
            description: { ru: "Хрустящий картофель с соусами", kz: "Соустармен хрустящие картоп" },
            price: "1.200₸",
            image: "https://via.placeholder.com/300x200/fdcb6e/ffffff?text=Картофель+фри"
        }
    ],
    lemonades: [
        {
            name: { ru: "Классический лимонад", kz: "Классикалық лимонад" },
            description: { ru: "Освежающий лимонад с мятой", kz: "Жалбызбен сергітетін лимонад" },
            price: "1.000₸",
            image: "https://via.placeholder.com/300x200/00b894/ffffff?text=Лимонад"
        },
        {
            name: { ru: "Ягодный лимонад", kz: "Жидекті лимонад" },
            description: { ru: "Лимонад с лесными ягодами", kz: "Орман жидектерімен лимонад" },
            price: "1.200₸",
            image: "https://via.placeholder.com/300x200/fd79a8/ffffff?text=Ягодный+лимонад"
        }
    ],
    "mynbala-tea": [
        {
            name: { ru: "Детский чай Мынбала", kz: "Мынбала балалар шайы" },
            description: { ru: "Авторский чай с фруктами и медом", kz: "Жеміс пен балмен авторлық шай" },
            price: "800₸",
            image: "https://via.placeholder.com/300x200/a29bfe/ffffff?text=Детский+чай"
        },
        {
            name: { ru: "Волшебный чай", kz: "Сиқырлы шай" },
            description: { ru: "Чай с изменяющимся цветом", kz: "Түсі өзгеретін шай" },
            price: "1.000₸",
            image: "https://via.placeholder.com/300x200/6c5ce7/ffffff?text=Волшебный+чай"
        }
    ],
    cocktails: [
        {
            name: { ru: "Радужный коктейль", kz: "Кемпірқосақ коктейлі" },
            description: { ru: "Безалкогольный коктейль всех цветов радуги", kz: "Кемпірқосақтың барлық түстерімен алкогольсіз коктейль" },
            price: "1.500₸",
            image: "https://via.placeholder.com/300x200/fd79a8/ffffff?text=Радужный"
        },
        {
            name: { ru: "Тропический микс", kz: "Тропикалық микс" },
            description: { ru: "Экзотические фрукты в одном стакане", kz: "Бір стаканда экзотикалық жемістер" },
            price: "1.800₸",
            image: "https://via.placeholder.com/300x200/00cec9/ffffff?text=Тропический"
        }
    ],
    penalties: [
        {
            name: { ru: "Порча мебели", kz: "Жиһазды бұзу" },
            description: { ru: "Штраф за повреждение мебели", kz: "Жиһазды зақымдағаны үшін айыппұл" },
            price: "10.000₸",
            image: "https://via.placeholder.com/300x200/e84393/ffffff?text=Порча+мебели"
        },
        {
            name: { ru: "Бой посуды", kz: "Ыдыс-аяқты сындыру" },
            description: { ru: "Штраф за разбитую посуду", kz: "Сынған ыдыс-аяқ үшін айыппұл" },
            price: "2.000₸",
            image: "https://via.placeholder.com/300x200/fd79a8/ffffff?text=Бой+посуды"
        },
        {
            name: { ru: "Бой фужера", kz: "Фужерді сындыру" },
            description: { ru: "Штраф за разбитый фужер", kz: "Сынған фужер үшін айыппұл" },
            price: "1.500₸",
            image: "https://via.placeholder.com/300x200/ff7675/ffffff?text=Бой+фужера"
        },
        {
            name: { ru: "Бой тарелки", kz: "Тәрелкені сындыру" },
            description: { ru: "Штраф за разбитую тарелку", kz: "Сынған тәрелке үшін айыппұл" },
            price: "1.000₸",
            image: "https://via.placeholder.com/300x200/fdcb6e/ffffff?text=Бой+тарелки"
        },
        {
            name: { ru: "Поломка мебели", kz: "Жиһазды бұзу" },
            description: { ru: "Штраф за сломанную мебель", kz: "Сынған жиһаз үшін айыппұл" },
            price: "15.000₸",
            image: "https://via.placeholder.com/300x200/74b9ff/ffffff?text=Поломка+мебели"
        }
    ]
};

// Attractions data with age recommendations
const attractionsData = [
    {
        icon: "🚗",
        name: { ru: "Машинки", kz: "Көліктер" },
        description: { ru: "Электрические машинки для детей всех возрастов", kz: "Барлық жастағы балаларға арналған электрлі көліктер" },
        badge: { ru: "БЕСПЛАТНО", kz: "ТЕГІН" },
        ageGroups: ["2-4", "5-7", "8-10"]
    },
    {
        icon: "🐄",
        name: { ru: "Четыре вида скота", kz: "Төрт түлік" },
        description: { ru: "Интерактивная ферма с домашними животными", kz: "Үй жануарларымен интерактивті ферма" },
        badge: { ru: "БЕСПЛАТНО", kz: "ТЕГІН" },
        ageGroups: ["2-4", "5-7"]
    },
    {
        icon: "🔍",
        name: { ru: "Найди себя", kz: "Өзіңді тап" },
        description: { ru: "Увлекательная игра поиска и находок", kz: "Іздеу мен табу ойынының қызықты ойын" },
        badge: { ru: "БЕСПЛАТНО", kz: "ТЕГІН" },
        ageGroups: ["5-7", "8-10", "11-14"]
    },
    {
        icon: "🎧",
        name: { ru: "АСМР зона", kz: "АСМР аймақ" },
        description: { ru: "Релаксационная зона для успокоения", kz: "Тыныштандыру үшін релаксация аймағы" },
        badge: { ru: "БЕСПЛАТНО", kz: "ТЕГІН" },
        ageGroups: ["2-4", "5-7", "8-10", "11-14"]
    },
    {
        icon: "⚽",
        name: { ru: "Шарики", kz: "Шарлар" },
        description: { ru: "Бассейн с разноцветными шариками", kz: "Түрлі түсті шарлармен бассейн" },
        badge: { ru: "БЕСПЛАТНО", kz: "ТЕГІН" },
        ageGroups: ["2-4", "5-7"]
    },
    {
        icon: "🧩",
        name: { ru: "Моторика", kz: "Білгішбектер" },
        description: { ru: "Развивающие игры для мелкой моторики", kz: "Кіші моторикаға арналған дамытушы ойындар" },
        badge: { ru: "БЕСПЛАТНО", kz: "ТЕГІН" },
        ageGroups: ["2-4", "5-7", "8-10"]
    },
    {
        icon: "🎨",
        name: { ru: "My Hobby", kz: "My Hobby" },
        description: { ru: "Творческая мастерская: рисование, лепка, поделки", kz: "Шығармашылық шеберхана: сурет салу, мүсіндеу, қолөнер" },
        badge: { ru: "БЕСПЛАТНО", kz: "ТЕГІН" },
        ageGroups: ["5-7", "8-10", "11-14"]
    },
    {
        icon: "✏️",
        name: { ru: "3D ручки", kz: "3D қаламдар" },
        description: { ru: "Создавайте объемные фигуры с помощью 3D ручек", kz: "3D қаламдардың көмегімен көлемді фигуралар жасаңыз" },
        badge: { ru: "БЕСПЛАТНО", kz: "ТЕГІН" },
        ageGroups: ["8-10", "11-14"]
    },
    {
        icon: "🪂",
        name: { ru: "Тарзанка", kz: "Тарзанка" },
        description: { ru: "Безопасные качели-тарзанка для смелых детей", kz: "Батыл балаларға арналған қауіпсіз тарзанка" },
        badge: { ru: "БЕСПЛАТНО", kz: "ТЕГІН" },
        ageGroups: ["5-7", "8-10", "11-14"]
    },
    {
        icon: "🛝",
        name: { ru: "Горка", kz: "Горка" },
        description: { ru: "Большие и безопасные горки разной высоты", kz: "Әртүрлі биіктіктегі үлкен және қауіпсіз горкалар" },
        badge: { ru: "БЕСПЛАТНО", kz: "ТЕГІН" },
        ageGroups: ["2-4", "5-7", "8-10"]
    },
    {
        icon: "🧗",
        name: { ru: "Скалодром", kz: "Сарқырама" },
        description: { ru: "Детский скалодром для развития ловкости", kz: "Епділікті дамыту үшін балалар скалодромы" },
        badge: { ru: "БЕСПЛАТНО", kz: "ТЕГІН" },
        ageGroups: ["8-10", "11-14"]
    },
    {
        icon: "🌋",
        name: { ru: "Вулкан", kz: "Жанартау" },
        description: { ru: "Интерактивный вулкан с эффектами", kz: "Эффектілермен интерактивті жанартау" },
        badge: { ru: "БЕСПЛАТНО", kz: "ТЕГІН" },
        ageGroups: ["5-7", "8-10", "11-14"]
    },
    {
        icon: "🧊",
        name: { ru: "Кубик", kz: "Кубик" },
        description: { ru: "Большие мягкие кубики для строительства", kz: "Құрылысқа арналған үлкен жұмсақ кубиктер" },
        badge: { ru: "БЕСПЛАТНО", kz: "ТЕГІН" },
        ageGroups: ["2-4", "5-7"]
    },
    {
        icon: "🤸",
        name: { ru: "Батут", kz: "Батут" },
        description: { ru: "Большой безопасный батут с сеткой", kz: "Торлы үлкен қауіпсіз батут" },
        badge: { ru: "БЕСПЛАТНО", kz: "ТЕГІН" },
        ageGroups: ["2-4", "5-7", "8-10", "11-14"]
    },
    {
        icon: "🕸️",
        name: { ru: "Сетчатая зона", kz: "Торлы аймақ" },
        description: { ru: "Лазательная зона с веревочными препятствиями", kz: "Арқанды кедергілермен өрмелейтін аймақ" },
        badge: { ru: "БЕСПЛАТНО", kz: "ТЕГІН" },
        ageGroups: ["8-10", "11-14"]
    }
];

// News data
const newsData = [
    {
        title: { ru: "Новое меню уже в Мынбале!", kz: "Жаңа мәзір енді Мынбалада!" },
        content: { ru: "Мы добавили 15 новых блюд в детское меню! Теперь у нас еще больше вкусных и полезных вариантов для ваших малышей.", kz: "Біз балалар мәзіріне 15 жаңа тағам қостық! Енді бізде сіздің кішкентайларыңыз үшін одан да көп дәмді және пайдалы нұсқалар бар." },
        date: "2024-01-15",
        image: "https://via.placeholder.com/400x250/ff6b6b/ffffff?text=Новое+меню"
    },
    {
        title: { ru: "Скидка 20% на день рождения!", kz: "Туған күнге 20% жеңілдік!" },
        content: { ru: "При праздновании дня рождения в будние дни действует скидка 20% на все меню! Сделайте праздник незабываемым.", kz: "Жұмыс күндері туған күнді тойлағанда барлық мәзірге 20% жеңілдік! Мерекені ұмытылмас етіп жасаңыз." },
        date: "2024-01-10", 
        image: "https://via.placeholder.com/400x250/4ecdc4/ffffff?text=Скидка+20%"
    },
    {
        title: { ru: "Новый аттракцион - 3D ручки!", kz: "Жаңа аттракцион - 3D қаламдар!" },
        content: { ru: "Открылась новая творческая зона с 3D ручками! Дети могут создавать объемные фигуры и развивать воображение.", kz: "3D қаламдармен жаңа шығармашылық аймақ ашылды! Балалар көлемді фигуралар жасап, қиялын дамыта алады." },
        date: "2024-01-05",
        image: "https://via.placeholder.com/400x250/ffe66d/ffffff?text=3D+ручки"
    }
];

// Admin users (in real app this would be on server)
const adminUsers = {
    "admin_taraz": { password: "taraz123", branch: "taraz", name: "Администратор Тараз" },
    "admin_shymkent": { password: "shymkent123", branch: "shymkent", name: "Администратор Шымкент" },
    "admin_atyrau": { password: "atyrau123", branch: "atyrau", name: "Администратор Атырау" },
    "admin_aksukent": { password: "aksukent123", branch: "aksukent", name: "Администратор Аксукент" },
    "admin_main": { password: "main123", branch: "main", name: "Главный администратор" }
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadMenuCategory('kids');
    loadAttractions();
    loadNews();
    updateLanguage();
    
    // Show welcome notification
    setTimeout(() => {
        showNotification('info',
            currentLanguage === 'ru' ? 'Добро пожаловать в Мынбала!' : 'Мынбалаға қош келдіңіз!',
            currentLanguage === 'ru' ? 
            'Выберите возраст ребенка для персональных рекомендаций аттракционов' :
            'Балаңыздың жасын таңдап, аттракциондардың жеке ұсыныстарын алыңыз'
        );
    }, 2000);
});

// Initialize application
function initializeApp() {
    // Set minimum date for booking to today
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.querySelector('input[name="date"]');
    if (dateInput) {
        dateInput.min = today;
    }
    
    // Initialize smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            loadMenuCategory(e.target.dataset.category);
        });
    });
    
    // Booking form
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmit);
    }
    
    // Admin modal
    const adminLink = document.querySelector('a[href="#admin"]');
    const adminModal = document.getElementById('adminModal');
    const closeModal = document.querySelector('.close');
    
    if (adminLink && adminModal) {
        adminLink.addEventListener('click', (e) => {
            e.preventDefault();
            adminModal.style.display = 'block';
        });
    }
    
    if (closeModal && adminModal) {
        closeModal.addEventListener('click', () => {
            adminModal.style.display = 'none';
        });
    }
    
    // Admin login form
    const adminLoginForm = document.getElementById('adminLoginForm');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', handleAdminLogin);
    }
    
    // Admin tabs
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            loadAdminTab(e.target.dataset.tab);
        });
    });
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
    loadAttractions();
    loadNews();
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

function t(key) {
    return translations[currentLanguage][key] || key;
}

// Menu functions
function loadMenuCategory(category) {
    currentCategory = category;
    const menuContent = document.querySelector('.menu-content');
    const items = menuData[category] || [];
    
    menuContent.innerHTML = items.map(item => `
        <div class="menu-item fade-in">
            <img src="${item.image}" alt="${item.name[currentLanguage]}" 
                 onerror="this.src='https://via.placeholder.com/300x200/ddd/999?text=Изображение'">
            <h3>${item.name[currentLanguage]}</h3>
            <p>${item.description[currentLanguage]}</p>
            <div class="price">${item.price}</div>
        </div>
    `).join('');
}

// Attractions functions
function loadAttractions() {
    const attractionsGrid = document.querySelector('.attractions-grid');
    
    attractionsGrid.innerHTML = attractionsData.map(attraction => `
        <div class="attraction-card fade-in">
            <div class="attraction-badge">${attraction.badge[currentLanguage]}</div>
            <div class="attraction-icon">${attraction.icon}</div>
            <h3>${attraction.name[currentLanguage]}</h3>
            <p>${attraction.description[currentLanguage]}</p>
        </div>
    `).join('');
}

// News functions
function loadNews() {
    const newsGrid = document.querySelector('.news-grid');
    
    newsGrid.innerHTML = newsData.map(news => `
        <div class="news-card fade-in">
            <img src="${news.image}" alt="${news.title[currentLanguage]}"
                 onerror="this.src='https://via.placeholder.com/400x250/ddd/999?text=Новость'">
            <div class="news-content">
                <div class="news-date">${formatDate(news.date)}</div>
                <h3>${news.title[currentLanguage]}</h3>
                <p>${news.content[currentLanguage]}</p>
                <a href="#" class="read-more">${currentLanguage === 'ru' ? 'Читать далее' : 'Толығырақ оқу'}</a>
            </div>
        </div>
    `).join('');
}

// Booking functions
function handleBookingSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const booking = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        city: formData.get('city'),
        date: formData.get('date'),
        time: formData.get('time'),
        children: formData.get('children'),
        adults: formData.get('adults'),
        comments: formData.get('comments'),
        timestamp: new Date().toISOString()
    };
    
    // Validate time
    const selectedTime = formData.get('time');
    if (selectedTime < '11:00' || selectedTime > '22:00') {
        showAlert('error', currentLanguage === 'ru' ? 
            'Время работы: 11:00 - 23:00' : 
            'Жұмыс уақыты: 11:00 - 23:00');
        return;
    }
    
    // Validate date
    const selectedDate = new Date(formData.get('date'));
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
        showAlert('error', currentLanguage === 'ru' ? 
            'Нельзя бронировать на прошедшую дату' : 
            'Өткен күнге брондауға болмайды');
        return;
    }
    
    // Save booking (in real app this would go to server)
    let bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    
    showAlert('success', currentLanguage === 'ru' ? 
        'Бронирование успешно оформлено! Мы свяжемся с вами для подтверждения.' : 
        'Брондау сәтті рәсімделді! Біз растау үшін сізбен хабарласамыз.');
    
    e.target.reset();
}

// Admin functions
function handleAdminLogin(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');
    const branch = formData.get('branch');
    
    const user = adminUsers[username];
    
    if (user && user.password === password && user.branch === branch) {
        currentUser = { username, ...user };
        document.getElementById('adminModal').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
        document.getElementById('adminUserName').textContent = user.name;
        loadAdminTab('dashboard');
        
        showAlert('success', currentLanguage === 'ru' ? 
            'Успешная авторизация!' : 
            'Сәтті авторизация!');
    } else {
        showAlert('error', currentLanguage === 'ru' ? 
            'Неверные данные для входа' : 
            'Кіру деректері дұрыс емес');
    }
}

function logout() {
    currentUser = null;
    document.getElementById('adminPanel').style.display = 'none';
    showAlert('info', currentLanguage === 'ru' ? 
        'Вы вышли из системы' : 
        'Сіз жүйеден шықтыңыз');
}

function loadAdminTab(tab) {
    const adminContent = document.querySelector('.admin-content');
    
    switch(tab) {
        case 'dashboard':
            loadDashboard(adminContent);
            break;
        case 'menu-management':
            loadMenuManagement(adminContent);
            break;
        case 'bookings':
            loadBookings(adminContent);
            break;
        case 'news-management':
            loadNewsManagement(adminContent);
            break;
        case 'analytics':
            loadAnalytics(adminContent);
            break;
        case 'qr-system':
            loadQRSystem(adminContent);
            break;
    }
}

function loadDashboard(container) {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    const todayBookings = bookings.filter(b => b.date === new Date().toISOString().split('T')[0]);
    
    container.innerHTML = `
        <div class="dashboard">
            <h3>${currentLanguage === 'ru' ? 'Панель управления' : 'Басқару панелі'}</h3>
            <div class="dashboard-stats">
                <div class="stat-card">
                    <h4>${currentLanguage === 'ru' ? 'Бронирования сегодня' : 'Бүгінгі брондаулар'}</h4>
                    <div class="stat-number">${todayBookings.length}</div>
                </div>
                <div class="stat-card">
                    <h4>${currentLanguage === 'ru' ? 'Всего бронирований' : 'Барлық брондаулар'}</h4>
                    <div class="stat-number">${bookings.length}</div>
                </div>
                <div class="stat-card">
                    <h4>${currentLanguage === 'ru' ? 'Филиал' : 'Филиал'}</h4>
                    <div class="stat-text">${currentUser.branch}</div>
                </div>
            </div>
            <div class="recent-bookings">
                <h4>${currentLanguage === 'ru' ? 'Последние бронирования' : 'Соңғы брондаулар'}</h4>
                <div class="bookings-list">
                    ${todayBookings.slice(-5).map(booking => `
                        <div class="booking-item">
                            <strong>${booking.name}</strong> - ${booking.phone}<br>
                            <small>${booking.date} ${booking.time} | ${booking.children} ${currentLanguage === 'ru' ? 'детей' : 'балалар'}</small>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        <style>
            .dashboard-stats {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 20px;
                margin: 20px 0;
            }
            .stat-card {
                background: white;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                text-align: center;
            }
            .stat-number {
                font-size: 2rem;
                font-weight: bold;
                color: #ff6b6b;
            }
            .stat-text {
                font-size: 1.2rem;
                color: #4ecdc4;
                text-transform: capitalize;
            }
            .booking-item {
                background: #f8f9fa;
                padding: 10px;
                margin: 10px 0;
                border-radius: 5px;
                border-left: 4px solid #ff6b6b;
            }
        </style>
    `;
}

function loadMenuManagement(container) {
    container.innerHTML = `
        <div class="menu-management">
            <h3>${currentLanguage === 'ru' ? 'Управление меню' : 'Мәзірді басқару'}</h3>
            <p>${currentLanguage === 'ru' ? 'Здесь можно добавлять, редактировать и удалять позиции меню' : 'Мұнда мәзір позицияларын қосуға, өңдеуге және жоюға болады'}</p>
            <button class="btn-primary" onclick="addMenuItem()">
                ${currentLanguage === 'ru' ? 'Добавить позицию' : 'Позиция қосу'}
            </button>
            <div class="menu-items-admin">
                ${Object.keys(menuData).map(category => `
                    <div class="category-section">
                        <h4>${t(category === 'kids' ? 'Детское меню' : 
                             category === 'drinks' ? 'Напитки' :
                             category === 'cold-snacks' ? 'Холодные закуски' :
                             category === 'salads' ? 'Салаты' :
                             category === 'main-dishes' ? 'Вторые блюда' :
                             category === 'pizza' ? 'Пицца' :
                             category === 'pasta' ? 'Паста' :
                             category === 'sushi' ? 'Суши' :
                             category === 'fast-food' ? 'Фаст фуд' :
                             category === 'lemonades' ? 'Лимонады' :
                             category === 'mynbala-tea' ? 'Авторские чаи Mynbala' :
                             category === 'cocktails' ? 'Коктейлы' : 'Штрафы')}</h4>
                        <div class="items-list">
                            ${menuData[category].map((item, index) => `
                                <div class="admin-menu-item">
                                    <span>${item.name[currentLanguage]} - ${item.price}</span>
                                    <div class="item-actions">
                                        <button onclick="editMenuItem('${category}', ${index})">✏️</button>
                                        <button onclick="deleteMenuItem('${category}', ${index})">🗑️</button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        <style>
            .category-section {
                margin: 20px 0;
                background: white;
                padding: 15px;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .admin-menu-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px;
                border-bottom: 1px solid #eee;
            }
            .item-actions button {
                background: none;
                border: none;
                font-size: 1.2rem;
                cursor: pointer;
                margin: 0 5px;
            }
            .btn-primary {
                background: linear-gradient(135deg, #ff6b6b, #feca57);
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 20px;
                cursor: pointer;
                font-weight: 600;
                margin-bottom: 20px;
            }
        </style>
    `;
}

function loadBookings(container) {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    
    container.innerHTML = `
        <div class="bookings-management">
            <h3>${currentLanguage === 'ru' ? 'Управление бронированиями' : 'Брондауларды басқару'}</h3>
            <div class="bookings-filters">
                <input type="date" id="filterDate" onchange="filterBookings()">
                <select id="filterCity" onchange="filterBookings()">
                    <option value="">${currentLanguage === 'ru' ? 'Все города' : 'Барлық қалалар'}</option>
                    <option value="taraz">Тараз</option>
                    <option value="shymkent">Шымкент</option>
                    <option value="atyrau">Атырау</option>
                    <option value="aksukent">Аксукент</option>
                </select>
            </div>
            <div class="bookings-list" id="bookingsList">
                ${bookings.map((booking, index) => `
                    <div class="booking-card">
                        <div class="booking-header">
                            <h4>${booking.name}</h4>
                            <span class="booking-status">${currentLanguage === 'ru' ? 'Активно' : 'Белсенді'}</span>
                        </div>
                        <div class="booking-details">
                            <p><strong>${currentLanguage === 'ru' ? 'Телефон:' : 'Телефон:'}</strong> ${booking.phone}</p>
                            <p><strong>${currentLanguage === 'ru' ? 'Дата:' : 'Күні:'}</strong> ${booking.date}</p>
                            <p><strong>${currentLanguage === 'ru' ? 'Время:' : 'Уақыт:'}</strong> ${booking.time}</p>
                            <p><strong>${currentLanguage === 'ru' ? 'Город:' : 'Қала:'}</strong> ${booking.city}</p>
                            <p><strong>${currentLanguage === 'ru' ? 'Дети:' : 'Балалар:'}</strong> ${booking.children}</p>
                            <p><strong>${currentLanguage === 'ru' ? 'Взрослые:' : 'Ересектер:'}</strong> ${booking.adults}</p>
                            ${booking.comments ? `<p><strong>${currentLanguage === 'ru' ? 'Комментарии:' : 'Түсініктемелер:'}</strong> ${booking.comments}</p>` : ''}
                        </div>
                        <div class="booking-actions">
                            <button onclick="confirmBooking(${index})">${currentLanguage === 'ru' ? 'Подтвердить' : 'Растау'}</button>
                            <button onclick="cancelBooking(${index})">${currentLanguage === 'ru' ? 'Отменить' : 'Бас тарту'}</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        <style>
            .bookings-filters {
                display: flex;
                gap: 20px;
                margin-bottom: 20px;
            }
            .bookings-filters input,
            .bookings-filters select {
                padding: 8px;
                border: 1px solid #ddd;
                border-radius: 5px;
            }
            .booking-card {
                background: white;
                padding: 20px;
                margin: 10px 0;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .booking-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 15px;
            }
            .booking-status {
                background: #4ecdc4;
                color: white;
                padding: 5px 10px;
                border-radius: 15px;
                font-size: 0.8rem;
            }
            .booking-actions {
                display: flex;
                gap: 10px;
                margin-top: 15px;
            }
            .booking-actions button {
                background: #ff6b6b;
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 5px;
                cursor: pointer;
            }
            .booking-actions button:last-child {
                background: #e17055;
            }
        </style>
    `;
}

function loadNewsManagement(container) {
    container.innerHTML = `
        <div class="news-management">
            <h3>${currentLanguage === 'ru' ? 'Управление новостями' : 'Жаңалықтарды басқару'}</h3>
            <button class="btn-primary" onclick="addNews()">
                ${currentLanguage === 'ru' ? 'Добавить новость' : 'Жаңалық қосу'}
            </button>
            <div class="news-items-admin">
                ${newsData.map((news, index) => `
                    <div class="news-admin-item">
                        <div class="news-preview">
                            <img src="${news.image}" alt="${news.title[currentLanguage]}">
                            <div class="news-info">
                                <h4>${news.title[currentLanguage]}</h4>
                                <p>${news.content[currentLanguage].substring(0, 100)}...</p>
                                <small>${formatDate(news.date)}</small>
                            </div>
                        </div>
                        <div class="news-actions">
                            <button onclick="editNews(${index})">✏️ ${currentLanguage === 'ru' ? 'Изменить' : 'Өзгерту'}</button>
                            <button onclick="deleteNews(${index})">🗑️ ${currentLanguage === 'ru' ? 'Удалить' : 'Жою'}</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        <style>
            .news-admin-item {
                background: white;
                padding: 20px;
                margin: 15px 0;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .news-preview {
                display: flex;
                gap: 15px;
                margin-bottom: 15px;
            }
            .news-preview img {
                width: 120px;
                height: 80px;
                object-fit: cover;
                border-radius: 8px;
            }
            .news-info {
                flex: 1;
            }
            .news-actions {
                display: flex;
                gap: 10px;
            }
            .news-actions button {
                background: #4ecdc4;
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 5px;
                cursor: pointer;
            }
            .news-actions button:last-child {
                background: #e17055;
            }
        </style>
    `;
}

function loadAnalytics(container) {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    const today = new Date();
    const thisMonth = bookings.filter(b => new Date(b.date).getMonth() === today.getMonth());
    const totalGuests = bookings.reduce((sum, b) => sum + parseInt(b.children) + parseInt(b.adults), 0);
    
    container.innerHTML = `
        <div class="analytics">
            <h3>${currentLanguage === 'ru' ? 'Аналитика' : 'Аналитика'}</h3>
            <div class="analytics-grid">
                <div class="analytics-card">
                    <h4>${currentLanguage === 'ru' ? 'Бронирования за месяц' : 'Айлық брондаулар'}</h4>
                    <div class="analytics-number">${thisMonth.length}</div>
                </div>
                <div class="analytics-card">
                    <h4>${currentLanguage === 'ru' ? 'Всего гостей' : 'Барлық қонақтар'}</h4>
                    <div class="analytics-number">${totalGuests}</div>
                </div>
                <div class="analytics-card">
                    <h4>${currentLanguage === 'ru' ? 'Средний размер группы' : 'Орташа топ көлемі'}</h4>
                    <div class="analytics-number">${bookings.length ? Math.round(totalGuests / bookings.length) : 0}</div>
                </div>
                <div class="analytics-card">
                    <h4>${currentLanguage === 'ru' ? 'Популярное время' : 'Танымал уақыт'}</h4>
                    <div class="analytics-text">15:00-18:00</div>
                </div>
            </div>
            <div class="charts-section">
                <h4>${currentLanguage === 'ru' ? 'Статистика по городам' : 'Қалалар бойынша статистика'}</h4>
                <div class="city-stats">
                    ${['taraz', 'shymkent', 'atyrau', 'aksukent'].map(city => {
                        const cityBookings = bookings.filter(b => b.city === city);
                        return `
                            <div class="city-stat">
                                <span class="city-name">${city.charAt(0).toUpperCase() + city.slice(1)}</span>
                                <div class="progress-bar">
                                    <div class="progress" style="width: ${(cityBookings.length / Math.max(bookings.length, 1)) * 100}%"></div>
                                </div>
                                <span class="city-count">${cityBookings.length}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </div>
        <style>
            .analytics-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 20px;
                margin: 20px 0;
            }
            .analytics-card {
                background: white;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                text-align: center;
            }
            .analytics-number {
                font-size: 2.5rem;
                font-weight: bold;
                color: #ff6b6b;
                margin-top: 10px;
            }
            .analytics-text {
                font-size: 1.2rem;
                color: #4ecdc4;
                margin-top: 10px;
            }
            .city-stat {
                display: flex;
                align-items: center;
                gap: 15px;
                margin: 10px 0;
                padding: 10px;
                background: white;
                border-radius: 8px;
            }
            .city-name {
                min-width: 100px;
                font-weight: 600;
            }
            .progress-bar {
                flex: 1;
                height: 20px;
                background: #f1f2f6;
                border-radius: 10px;
                overflow: hidden;
            }
            .progress {
                height: 100%;
                background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
                transition: width 0.3s ease;
            }
            .city-count {
                min-width: 30px;
                text-align: center;
                font-weight: bold;
            }
            .charts-section {
                background: white;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                margin-top: 20px;
            }
        </style>
    `;
}

function loadQRSystem(container) {
    // Get QR orders from localStorage
    const qrOrders = [];
    for (let i = 1; i <= 50; i++) {
        const order = localStorage.getItem(`order_table_${i}`);
        if (order) {
            qrOrders.push({...JSON.parse(order), tableNumber: i});
        }
    }
    
    const activeOrders = qrOrders.filter(o => o.status === 'cooking');
    const completedToday = qrOrders.filter(o => {
        const orderDate = new Date(o.timestamp).toDateString();
        const today = new Date().toDateString();
        return orderDate === today;
    });
    
    container.innerHTML = `
        <div class="qr-system">
            <h3><i class="fas fa-qrcode"></i> ${currentLanguage === 'ru' ? 'QR-система заказов' : 'QR тапсырыс жүйесі'}</h3>
            
            <div class="qr-stats">
                <div class="qr-stat-card">
                    <div class="stat-icon">📱</div>
                    <div class="stat-info">
                        <h4>${currentLanguage === 'ru' ? 'Активные заказы' : 'Белсенді тапсырыстар'}</h4>
                        <div class="stat-number">${activeOrders.length}</div>
                    </div>
                </div>
                <div class="qr-stat-card">
                    <div class="stat-icon">✅</div>
                    <div class="stat-info">
                        <h4>${currentLanguage === 'ru' ? 'Заказов сегодня' : 'Бүгінгі тапсырыстар'}</h4>
                        <div class="stat-number">${completedToday.length}</div>
                    </div>
                </div>
                <div class="qr-stat-card">
                    <div class="stat-icon">💰</div>
                    <div class="stat-info">
                        <h4>${currentLanguage === 'ru' ? 'Выручка QR' : 'QR кіріс'}</h4>
                        <div class="stat-number">${completedToday.reduce((sum, o) => sum + o.totalPrice, 0).toLocaleString()}₸</div>
                    </div>
                </div>
            </div>

            <div class="qr-actions">
                <button onclick="openQRGenerator()" class="qr-action-btn primary">
                    <i class="fas fa-qrcode"></i>
                    ${currentLanguage === 'ru' ? 'Генератор QR-кодов' : 'QR код генераторы'}
                </button>
                <button onclick="openQROrders()" class="qr-action-btn secondary">
                    <i class="fas fa-list"></i>
                    ${currentLanguage === 'ru' ? 'Тестировать заказ' : 'Тапсырысты тестілеу'}
                </button>
                <button onclick="exportQRData()" class="qr-action-btn tertiary">
                    <i class="fas fa-download"></i>
                    ${currentLanguage === 'ru' ? 'Экспорт данных' : 'Деректерді экспорттау'}
                </button>
            </div>

            <div class="active-orders-section">
                <h4><i class="fas fa-fire"></i> ${currentLanguage === 'ru' ? 'Заказы в работе' : 'Жұмыстағы тапсырыстар'}</h4>
                <div class="active-orders-list">
                    ${activeOrders.length === 0 ? `
                        <div class="no-orders">
                            <i class="fas fa-coffee"></i>
                            <p>${currentLanguage === 'ru' ? 'Нет активных заказов' : 'Белсенді тапсырыстар жоқ'}</p>
                        </div>
                    ` : activeOrders.map(order => `
                        <div class="order-card">
                            <div class="order-header">
                                <h5>${currentLanguage === 'ru' ? 'Стол' : 'Үстел'} №${order.tableNumber}</h5>
                                <span class="order-time">${new Date(order.timestamp).toLocaleTimeString()}</span>
                            </div>
                            <div class="order-items">
                                ${order.items.map(item => `
                                    <span class="order-item">${item.quantity}x ${item.name[currentLanguage]}</span>
                                `).join('')}
                            </div>
                            <div class="order-footer">
                                <span class="order-total">${order.totalPrice.toLocaleString()}₸</span>
                                <div class="order-actions">
                                    <button onclick="markOrderReady(${order.tableNumber})" class="ready-btn">
                                        <i class="fas fa-check"></i> ${currentLanguage === 'ru' ? 'Готово' : 'Дайын'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="qr-features">
                <h4><i class="fas fa-star"></i> ${currentLanguage === 'ru' ? 'Возможности QR-системы' : 'QR жүйесінің мүмкіндіктері'}</h4>
                <div class="features-grid">
                    <div class="feature-card">
                        <i class="fas fa-mobile-alt"></i>
                        <h5>${currentLanguage === 'ru' ? 'Мобильное меню' : 'Мобильді мәзір'}</h5>
                        <p>${currentLanguage === 'ru' ? 'Клиенты заказывают с телефона' : 'Клиенттер телефоннан тапсырыс береді'}</p>
                    </div>
                    <div class="feature-card">
                        <i class="fas fa-brain"></i>
                        <h5>${currentLanguage === 'ru' ? 'Умные рекомендации' : 'Ақылды ұсыныстар'}</h5>
                        <p>${currentLanguage === 'ru' ? 'Персональные предложения по возрасту' : 'Жас бойынша жеке ұсыныстар'}</p>
                    </div>
                    <div class="feature-card">
                        <i class="fas fa-bell"></i>
                        <h5>${currentLanguage === 'ru' ? 'Уведомления' : 'Хабарландырулар'}</h5>
                        <p>${currentLanguage === 'ru' ? 'Клиент узнает когда заказ готов' : 'Клиент тапсырыс дайын болған кезде біледі'}</p>
                    </div>
                    <div class="feature-card">
                        <i class="fas fa-language"></i>
                        <h5>${currentLanguage === 'ru' ? 'Два языка' : 'Екі тіл'}</h5>
                        <p>${currentLanguage === 'ru' ? 'Казахский и русский интерфейс' : 'Қазақ және орыс интерфейсі'}</p>
                    </div>
                </div>
            </div>
        </div>
        
        <style>
            .qr-stats {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 20px;
                margin: 20px 0;
            }
            .qr-stat-card {
                background: white;
                padding: 20px;
                border-radius: 15px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                display: flex;
                align-items: center;
                gap: 15px;
                transition: all 0.3s ease;
            }
            .qr-stat-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 25px rgba(0,0,0,0.15);
            }
            .stat-icon {
                font-size: 2.5rem;
                padding: 15px;
                background: var(--gradient-1);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .stat-number {
                font-size: 2rem;
                font-weight: bold;
                color: var(--primary-color);
            }
            .qr-actions {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 15px;
                margin: 30px 0;
            }
            .qr-action-btn {
                padding: 15px 25px;
                border: none;
                border-radius: 15px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                gap: 10px;
                justify-content: center;
                text-decoration: none;
            }
            .qr-action-btn.primary {
                background: var(--gradient-1);
                color: white;
            }
            .qr-action-btn.secondary {
                background: var(--gradient-2);
                color: white;
            }
            .qr-action-btn.tertiary {
                background: var(--gradient-3);
                color: var(--text-dark);
            }
            .qr-action-btn:hover {
                transform: translateY(-3px);
                box-shadow: 0 10px 20px rgba(0,0,0,0.2);
            }
            .active-orders-section {
                background: white;
                padding: 25px;
                border-radius: 15px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                margin: 20px 0;
            }
            .active-orders-list {
                display: grid;
                gap: 15px;
                margin-top: 20px;
            }
            .order-card {
                background: var(--bg-light);
                padding: 20px;
                border-radius: 12px;
                border-left: 4px solid var(--primary-color);
            }
            .order-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 10px;
            }
            .order-items {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin-bottom: 15px;
            }
            .order-item {
                background: white;
                padding: 4px 8px;
                border-radius: 6px;
                font-size: 0.9rem;
            }
            .order-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .order-total {
                font-size: 1.2rem;
                font-weight: bold;
                color: var(--primary-color);
            }
            .ready-btn {
                background: var(--secondary-color);
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            .ready-btn:hover {
                background: #44a08d;
                transform: scale(1.05);
            }
            .no-orders {
                text-align: center;
                padding: 40px;
                color: var(--text-light);
            }
            .no-orders i {
                font-size: 3rem;
                margin-bottom: 15px;
                display: block;
            }
            .features-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 20px;
                margin-top: 20px;
            }
            .feature-card {
                background: white;
                padding: 20px;
                border-radius: 12px;
                text-align: center;
                box-shadow: 0 3px 10px rgba(0,0,0,0.1);
                transition: all 0.3s ease;
            }
            .feature-card:hover {
                transform: translateY(-3px);
                box-shadow: 0 8px 20px rgba(0,0,0,0.15);
            }
            .feature-card i {
                font-size: 2.5rem;
                color: var(--primary-color);
                margin-bottom: 15px;
            }
            .feature-card h5 {
                margin-bottom: 10px;
                color: var(--text-dark);
            }
            .feature-card p {
                color: var(--text-light);
                font-size: 0.9rem;
                line-height: 1.4;
            }
            .qr-features {
                background: white;
                padding: 25px;
                border-radius: 15px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                margin: 20px 0;
            }
        </style>
    `;
}

// QR System Helper Functions
function openQRGenerator() {
    window.open('qr-generator.html', '_blank');
}

function openQROrders() {
    window.open('qr-order.html?table=1', '_blank');
}

function markOrderReady(tableNumber) {
    localStorage.removeItem(`order_table_${tableNumber}`);
    showNotification('success',
        currentLanguage === 'ru' ? 'Заказ выполнен' : 'Тапсырыс орындалды',
        currentLanguage === 'ru' ? `Заказ стола №${tableNumber} помечен как готовый` : `${tableNumber} үстелінің тапсырысы дайын деп белгіленді`
    );
    
    // Reload QR system tab
    loadAdminTab('qr-system');
}

function exportQRData() {
    const qrOrders = [];
    for (let i = 1; i <= 50; i++) {
        const order = localStorage.getItem(`order_table_${i}`);
        if (order) {
            qrOrders.push({...JSON.parse(order), tableNumber: i});
        }
    }
    
    const csvContent = "data:text/csv;charset=utf-8,"
        + "Table,Date,Time,Items,Total,Status\n"
        + qrOrders.map(order => {
            const date = new Date(order.timestamp);
            return `${order.tableNumber},${date.toLocaleDateString()},${date.toLocaleTimeString()},${order.items.length},${order.totalPrice},${order.status}`;
        }).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `qr_orders_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification('success',
        currentLanguage === 'ru' ? 'Данные экспортированы' : 'Деректер экспортталды',
        currentLanguage === 'ru' ? 'CSV файл загружен' : 'CSV файл жүктелді'
    );
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString(currentLanguage === 'ru' ? 'ru-RU' : 'kk-KZ');
}

function showAlert(type, message) {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.remove();
    }, 5000);
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Admin helper functions (simplified for demo)
function addMenuItem() {
    showAlert('info', currentLanguage === 'ru' ? 
        'Функция добавления позиции в разработке' : 
        'Позиция қосу функциясы әзірленуде');
}

function editMenuItem(category, index) {
    showAlert('info', currentLanguage === 'ru' ? 
        'Функция редактирования в разработке' : 
        'Өңдеу функциясы әзірленуде');
}

function deleteMenuItem(category, index) {
    if (confirm(currentLanguage === 'ru' ? 
        'Удалить эту позицию?' : 
        'Бұл позицияны жойып тастау керек пе?')) {
        showAlert('success', currentLanguage === 'ru' ? 
            'Позиция удалена' : 
            'Позиция жойылды');
    }
}

function confirmBooking(index) {
    showAlert('success', currentLanguage === 'ru' ? 
        'Бронирование подтверждено' : 
        'Брондау расталды');
}

function cancelBooking(index) {
    if (confirm(currentLanguage === 'ru' ? 
        'Отменить это бронирование?' : 
        'Бұл брондауды бас тарту керек пе?')) {
        let bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        bookings.splice(index, 1);
        localStorage.setItem('bookings', JSON.stringify(bookings));
        loadAdminTab('bookings');
        showAlert('success', currentLanguage === 'ru' ? 
            'Бронирование отменено' : 
            'Брондау бас тартылды');
    }
}

function addNews() {
    showAlert('info', currentLanguage === 'ru' ? 
        'Функция добавления новости в разработке' : 
        'Жаңалық қосу функциясы әзірленуде');
}

function editNews(index) {
    showAlert('info', currentLanguage === 'ru' ? 
        'Функция редактирования новости в разработке' : 
        'Жаңалық өңдеу функциясы әзірленуде');
}

function deleteNews(index) {
    if (confirm(currentLanguage === 'ru' ? 
        'Удалить эту новость?' : 
        'Бұл жаңалықты жойып тастау керек пе?')) {
        showAlert('success', currentLanguage === 'ru' ? 
            'Новость удалена' : 
            'Жаңалық жойылды');
    }
}

function filterBookings() {
    const dateFilter = document.getElementById('filterDate').value;
    const cityFilter = document.getElementById('filterCity').value;
    
    showAlert('info', currentLanguage === 'ru' ? 
        'Фильтрация в разработке' : 
        'Сүзгі әзірленуде');
}

// Enhanced Notification System
function showNotification(type, title, message, duration = 5000) {
    const container = document.getElementById('notificationContainer');
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    };
    
    notification.innerHTML = `
        <div class="notification-icon">${icons[type] || 'ℹ️'}</div>
        <div class="notification-content">
            <div class="notification-title">${title}</div>
            <div class="notification-message">${message}</div>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">×</button>
    `;
    
    container.appendChild(notification);
    
    // Auto remove after duration
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, duration);
}

// Enhanced Alert function
function showAlert(type, message) {
    const titles = {
        success: currentLanguage === 'ru' ? 'Успешно!' : 'Сәтті!',
        error: currentLanguage === 'ru' ? 'Ошибка!' : 'Қате!',
        warning: currentLanguage === 'ru' ? 'Внимание!' : 'Назар аударыңыз!',
        info: currentLanguage === 'ru' ? 'Информация' : 'Ақпарат'
    };
    
    showNotification(type, titles[type] || titles.info, message);
}

// Emergency Button Function
function triggerEmergency() {
    const emergencyMessage = currentLanguage === 'ru' ? 
        'Экстренный вызов активирован! Администрация уведомлена.' :
        'Жедел шақыру белсендірілді! Әкімшілік хабардар етілді.';
    
    showNotification('warning', 
        currentLanguage === 'ru' ? 'ЭКСТРЕННАЯ СВЯЗЬ' : 'ЖЕДЕЛ БАЙЛАНЫС',
        emergencyMessage
    );
    
    // Simulate emergency call
    setTimeout(() => {
        showNotification('success',
            currentLanguage === 'ru' ? 'Связь установлена' : 'Байланыс орнатылды',
            currentLanguage === 'ru' ? 
            'Администратор скоро подойдет к вам' :
            'Әкімші жақында сіздің жаныңызға келеді'
        );
    }, 2000);
}

// Age-based Recommendations
function selectAge(ageGroup) {
    selectedAge = ageGroup;
    
    // Update active state
    document.querySelectorAll('.age-badge').forEach(badge => {
        badge.classList.remove('active');
    });
    document.querySelector(`[data-age="${ageGroup}"]`).classList.add('active');
    
    // Show recommendations
    loadRecommendations(ageGroup);
    
    showNotification('info',
        currentLanguage === 'ru' ? 'Рекомендации обновлены' : 'Ұсыныстар жаңартылды',
        currentLanguage === 'ru' ? 
        `Показаны аттракционы для возраста ${ageGroup === 'all' ? 'всех возрастов' : ageGroup + ' лет'}` :
        `${ageGroup === 'all' ? 'Барлық жастар' : ageGroup + ' жас'} үшін аттракциондар көрсетілді`
    );
}

function loadRecommendations(ageGroup) {
    const container = document.getElementById('recommendedAttractions');
    
    let recommendedAttractions;
    if (ageGroup === 'all') {
        recommendedAttractions = attractionsData.slice(0, 6); // Show first 6
    } else {
        recommendedAttractions = attractionsData.filter(attraction => 
            attraction.ageGroups && attraction.ageGroups.includes(ageGroup)
        ).slice(0, 6);
    }
    
    if (recommendedAttractions.length === 0) {
        container.innerHTML = `
            <p style="text-align: center; color: var(--text-light); grid-column: 1/-1;">
                ${currentLanguage === 'ru' ? 'Нет подходящих аттракционов для этого возраста' : 'Бұл жасқа сәйкес аттракциондар жоқ'}
            </p>
        `;
        return;
    }
    
    container.innerHTML = recommendedAttractions.map(attraction => `
        <div class="mini-attraction-card interactive-card" onclick="highlightAttraction('${attraction.name.ru}')">
            <div class="icon">${attraction.icon}</div>
            <div class="name">${attraction.name[currentLanguage]}</div>
        </div>
    `).join('');
}

function highlightAttraction(attractionName) {
    // Scroll to attractions section
    document.getElementById('attractions').scrollIntoView({ behavior: 'smooth' });
    
    // Highlight the attraction in main grid
    setTimeout(() => {
        const cards = document.querySelectorAll('.attraction-card');
        cards.forEach(card => {
            card.style.border = '2px solid transparent';
        });
        
        // Find and highlight the matching card
        cards.forEach(card => {
            const title = card.querySelector('h3');
            if (title && title.textContent.includes(attractionName.split(' ')[0])) {
                card.style.border = '2px solid var(--primary-color)';
                card.style.animation = 'pulse 1s ease-in-out 3';
                setTimeout(() => {
                    card.style.border = '2px solid transparent';
                    card.style.animation = '';
                }, 3000);
            }
        });
    }, 1000);
}

// Payment System
function selectPayment(method) {
    selectedPaymentMethod = method;
    
    // Update active state
    document.querySelectorAll('.payment-method').forEach(pm => {
        pm.classList.remove('active');
    });
    document.querySelector(`[data-payment="${method}"]`).classList.add('active');
    
    const methodNames = {
        card: currentLanguage === 'ru' ? 'Банковская карта' : 'Банк картасы',
        kaspi: 'Kaspi QR',
        cash: currentLanguage === 'ru' ? 'Наличные при посещении' : 'Бару кезінде қолма-қол',
        halyk: 'Halyk Bank'
    };
    
    showNotification('success',
        currentLanguage === 'ru' ? 'Способ оплаты выбран' : 'Төлем тәсілі таңдалды',
        `${methodNames[method]}`
    );
}

// Enhanced Mobile Navigation
function toggleMobileNav() {
    const overlay = document.getElementById('mobileNavOverlay');
    const menu = document.getElementById('mobileNavMenu');
    
    overlay.classList.toggle('active');
    menu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
}

// Close mobile nav when clicking overlay
document.getElementById('mobileNavOverlay')?.addEventListener('click', toggleMobileNav);

// Enhanced setupEventListeners
function setupEventListeners() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileNav);
    }
    
    // Mobile nav links
    document.querySelectorAll('.mobile-nav-item').forEach(link => {
        link.addEventListener('click', () => {
            toggleMobileNav();
        });
    });
    
    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            loadMenuCategory(e.target.dataset.category);
        });
    });
    
    // Booking form with enhanced validation
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleEnhancedBookingSubmit);
    }
    
    // Admin modal
    const adminLink = document.querySelector('a[href="#admin"]');
    const adminModal = document.getElementById('adminModal');
    const closeModal = document.querySelector('.close');
    
    if (adminLink && adminModal) {
        adminLink.addEventListener('click', (e) => {
            e.preventDefault();
            adminModal.style.display = 'block';
        });
    }
    
    if (closeModal && adminModal) {
        closeModal.addEventListener('click', () => {
            adminModal.style.display = 'none';
        });
    }
    
    // Close modal on outside click
    if (adminModal) {
        adminModal.addEventListener('click', (e) => {
            if (e.target === adminModal) {
                adminModal.style.display = 'none';
            }
        });
    }
    
    // Admin login form
    const adminLoginForm = document.getElementById('adminLoginForm');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', handleAdminLogin);
    }
    
    // Admin tabs
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            loadAdminTab(e.target.dataset.tab);
        });
    });
    
    // Enhanced interactions
    document.querySelectorAll('.interactive-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// Enhanced Booking Submit
function handleEnhancedBookingSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    // Validate payment method
    if (!selectedPaymentMethod) {
        showNotification('warning',
            currentLanguage === 'ru' ? 'Выберите способ оплаты' : 'Төлем тәсілін таңдаңыз',
            currentLanguage === 'ru' ? 'Необходимо выбрать способ оплаты' : 'Төлем тәсілін таңдау керек'
        );
        return;
    }
    
    const booking = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        city: formData.get('city'),
        date: formData.get('date'),
        time: formData.get('time'),
        children: formData.get('children'),
        adults: formData.get('adults'),
        comments: formData.get('comments'),
        paymentMethod: selectedPaymentMethod,
        timestamp: new Date().toISOString()
    };
    
    // Validate time
    const selectedTime = formData.get('time');
    if (selectedTime < '11:00' || selectedTime > '22:00') {
        showNotification('error',
            currentLanguage === 'ru' ? 'Неверное время' : 'Дұрыс емес уақыт',
            currentLanguage === 'ru' ? 'Время работы: 11:00 - 23:00' : 'Жұмыс уақыты: 11:00 - 23:00'
        );
        return;
    }
    
    // Validate date
    const selectedDate = new Date(formData.get('date'));
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
        showNotification('error',
            currentLanguage === 'ru' ? 'Неверная дата' : 'Дұрыс емес күн',
            currentLanguage === 'ru' ? 'Нельзя бронировать на прошедшую дату' : 'Өткен күнге брондауға болмайды'
        );
        return;
    }
    
    // Calculate total cost
    const isWeekend = selectedDate.getDay() === 0 || selectedDate.getDay() === 6;
    const entranceFee = isWeekend ? 3500 : 3000;
    const totalGuests = parseInt(booking.children) + parseInt(booking.adults);
    const totalCost = entranceFee * totalGuests;
    
    // Save booking
    let bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    booking.totalCost = totalCost;
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    
    showNotification('success',
        currentLanguage === 'ru' ? 'Бронирование оформлено!' : 'Брондау рәсімделді!',
        currentLanguage === 'ru' ? 
        `Общая сумма: ${totalCost}₸. Мы свяжемся с вами для подтверждения.` :
        `Жалпы сома: ${totalCost}₸. Біз растау үшін сізбен хабарласамыз.`
    );
    
    e.target.reset();
    selectedPaymentMethod = null;
    document.querySelectorAll('.payment-method').forEach(pm => pm.classList.remove('active'));
}

// Enhanced loadAttractions with interactive elements
function loadAttractions() {
    const attractionsGrid = document.querySelector('.attractions-grid');
    
    attractionsGrid.innerHTML = attractionsData.map((attraction, index) => `
        <div class="attraction-card interactive-card wiggle-on-hover" style="animation-delay: ${index * 0.1}s">
            <div class="attraction-badge">${attraction.badge[currentLanguage]}</div>
            <div class="attraction-icon">${attraction.icon}</div>
            <h3>${attraction.name[currentLanguage]}</h3>
            <p>${attraction.description[currentLanguage]}</p>
            ${attraction.ageGroups ? `
                <div class="age-info" style="margin-top: 10px; font-size: 12px; color: var(--text-light);">
                    ${currentLanguage === 'ru' ? 'Возраст:' : 'Жас:'} ${attraction.ageGroups.join(', ')}
                </div>
            ` : ''}
        </div>
    `).join('');
    
    // Add fade-in animation
    document.querySelectorAll('.attraction-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}
