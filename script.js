const toggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

// Open/Close when clicking the toggle button
toggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent closing immediately
    navLinks.classList.toggle('active');
});

// Close when clicking anywhere outside the menu
window.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});


// Sample Ghanaian Foods
const ghanaFoods = [
    {
        name: 'Ampesi with Garden Egg Stew',
        image: 'images/ampesi with garden egg stew.jpg',
        ingredients: ['500g yam, cocoyam, or plantain', '5–6 garden eggs', '1 onion, chopped', '1–2 tomatoes, chopped', 'Palm oil', 'Salt and seasoning cubes', 'Optional: smoked fish or meat'],
        preparation: [
            'Boil yam, cocoyam, or plantain until tender.',
            'Blend garden eggs, tomatoes, and onion into a smooth paste.',
            'Heat palm oil and sauté the paste, adding smoked fish/meat if desired.',
            'Simmer for 10–15 minutes.',
            'Serve the stew over boiled yam or plantain.'
        ]
    },
    {
        name: 'Abolo (Steamed Corn Bread)',
        ingredients: ['2 cups cornmeal', '1/2 cup sugar', '1 cup water', 'Banana leaves for wrapping'],
        preparation: [
            'Mix cornmeal with sugar and water into a smooth batter.',
            'Pour onto banana leaves or small molds.',
            'Steam for 20–30 minutes until firm.',
            'Cool slightly and serve as a snack.'
        ]
    },
    {
        name: 'Koose (Black-Eyed Pea Fritters)',
        ingredients: ['2 cups black-eyed peas', '1 small onion', '1 chili pepper', 'Salt', 'Oil for frying'],
        preparation: [
            'Soak black-eyed peas, then peel skins and blend with onion, chili, and salt.',
            'Heat oil in a frying pan.',
            'Spoon batter into hot oil and fry until golden brown.',
            'Serve hot as a snack or breakfast item.'
        ]
    },
    {
        name: 'Abom',
        ingredients: ['500g smoked fish or meat', '2 cups cocoyam leaves or spinach', '1 onion, chopped', '2 tomatoes, chopped', '1/4 cup palm oil', 'Salt and seasoning cubes'],
        preparation: [
            'Wash and chop the leaves.',
            'Heat palm oil and sauté onions and tomatoes.',
            'Add smoked fish or meat and cook for 10 minutes.',
            'Add leaves and simmer until slightly soft.',
            'Serve with boiled yam, plantain, or rice.'
        ]
    },
    {
        name: 'Bofrot (Ghanaian Doughnut)',
        ingredients: ['2 cups flour', '1/2 cup sugar', '1 tsp yeast', '1 cup water', '1/4 tsp salt', 'Oil for frying'],
        preparation: [
            'Mix flour, sugar, yeast, salt, and water to make a smooth batter.',
            'Allow the dough to rise for 1 hour.',
            'Heat oil in a deep pan.',
            'Scoop dough into oil and fry until golden brown.',
            'Drain and serve hot or at room temperature.'
        ]
    },
    {
        name: 'Nkatie Cake (Peanut Candy)',
        ingredients: ['2 cups roasted peanuts', '1 cup sugar', '2 tbsp water'],
        preparation: [
            'Melt sugar with water to form syrup.',
            'Mix in roasted peanuts quickly.',
            'Pour mixture on a greased tray and flatten.',
            'Let cool and cut into pieces.'
        ]
    },
    {
        name: 'Plantain Chips (Keleke or Tatale Chips)',
        ingredients: ['3–4 ripe plantains', 'Salt', 'Oil for frying'],
        preparation: [
            'Peel and thinly slice plantains.',
            'Heat oil in a pan and fry slices until crisp and golden.',
            'Sprinkle with salt and serve as a snack.'
        ]
    },
    {
        name: 'Tuo Zaafi with Ayoyo Soup',
        ingredients: ['2 cups corn flour', '4 cups water', 'Ayoyo leaves or spinach', 'Meat or fish', 'Tomatoes, onion, pepper', 'Salt and seasoning cubes'],
        preparation: [
            'Mix corn flour with a little water to form a smooth paste.',
            'Gradually stir into boiling water, cooking until thick and smooth (Tuo Zaafi).',
            'For soup: cook meat/fish with blended tomatoes, onion, and pepper.',
            'Add ayoyo leaves and simmer until slightly slimy.',
            'Serve soup with Tuo Zaafi.'
        ]
    },
    {
        name: 'Zobo / Sobolo',
        ingredients: ['2 cups dried hibiscus flowers', '1 cup sugar', '1 pineapple, chopped', '1 tsp cloves', '8 cups water'],
        preparation: [
            'Boil hibiscus flowers and cloves in water for 10–15 minutes.',
            'Blend or add chopped pineapple and simmer briefly.',
            'Strain and add sugar.',
            'Chill and serve cold.'
        ]
    },
    {
        name: 'Palm Wine',
        ingredients: ['Fresh palm sap from palm trees'],
        preparation: [
            'Collect palm sap in clean containers.',
            'Serve fresh for sweet, non-alcoholic taste or allow light fermentation for alcoholic palm wine.',
            'Chill or serve with ice.'
        ]
    },
    {
        name: 'Hausa Koko (Spicy Millet Porridge)',
        ingredients: ['1 cup millet flour', '3 cups water', '1/2 tsp ginger powder', '1/2 tsp cloves', 'Sugar to taste'],
        preparation: [
            'Mix millet flour with water to form a smooth paste.',
            'Boil remaining water, then gradually add millet paste, stirring continuously.',
            'Add ginger, cloves, and sugar, simmer until thick.',
            'Serve hot with bread or Koose.'
        ]
    },
    {
        name: 'Kaklo (Ghanaian Small Doughnut)',
        ingredients: ['2 cups flour', '1/2 cup sugar', '1 tsp yeast', '1 cup water', '1/4 tsp salt', 'Oil for frying'],
        preparation: [
            'Mix flour, sugar, yeast, salt, and water to make batter.',
            'Allow the dough to rise for 30–45 minutes.',
            'Heat oil in a frying pan.',
            'Scoop dough into hot oil and fry until golden.',
            'Drain and serve.'
        ]
    },
    {
        name: 'Koose (Black-Eyed Pea Fritters - Variation)',
        ingredients: ['2 cups black-eyed peas', '1 onion, chopped', '1 chili pepper', 'Salt', 'Oil for frying'],
        preparation: [
            'Soak black-eyed peas, peel skins, and blend with onion and chili.',
            'Heat oil in a pan.',
            'Fry spoonfuls of batter until golden brown.',
            'Serve as a breakfast item or snack.'
        ]
    },
    {
        name: 'Rice Balls with Groundnut Soup',
        ingredients: ['2 cups rice', '4 cups water', '1 cup groundnut paste', 'Tomatoes, onion, pepper', 'Meat or fish', 'Salt and seasoning cubes'],
        preparation: [
            'Cook rice until soft, then pound or mash to form smooth balls.',
            'For soup: blend tomatoes, onion, and pepper, then cook with meat/fish.',
            'Add groundnut paste to the soup and simmer until thick.',
            'Serve soup with rice balls.'
        ]
    },
    {
        name: 'Konkonte with Palm Nut Soup',
        ingredients: ['2 cups dried cassava dough', '4 cups water', 'Palm nut soup ingredients (palm nut juice, meat/fish, vegetables, spices)'],
        preparation: [
            'Boil water and gradually stir in konkonte to form smooth dough.',
            'Prepare palm nut soup separately.',
            'Serve konkonte with the soup.'
        ]
    },
    {
        name: 'Ampesi with Kontomire Stew',
        ingredients: ['500g yam, cocoyam, or plantain', '2 cups cocoyam leaves (kontomire) or spinach', '1 onion, chopped', '2 tomatoes, chopped', 'Palm oil', 'Salt and seasoning cubes', 'Optional: smoked fish or meat'],
        preparation: [
            'Boil yam, cocoyam, or plantain until tender.',
            'Heat palm oil and sauté onions and tomatoes.',
            'Add smoked fish/meat if desired, then add kontomire leaves.',
            'Simmer until leaves are tender.',
            'Serve with boiled yam or plantain.'
        ]
    },
    {
        name: 'Ice Kenkey',
        ingredients: ['Kenkey (fermented corn dough)', 'Water', 'Sugar', 'Milk', 'Ice cubes'],
        preparation: [
            'Slice kenkey into small pieces.',
            'Mix kenkey with water, sugar, and milk.',
            'Add ice cubes and serve chilled.'
        ]
    },
    {
        name: 'Pito (Local Beer)',
        ingredients: ['Fermented millet or sorghum', 'Water', 'Optional: sugar'],
        preparation: [
            'Ferment millet or sorghum for 2–3 days.',
            'Strain the liquid and serve as a traditional local beer.'
        ]
    },
    {
        name: 'Chibom (Ghanaian Sandwich)',
        ingredients: ['1 fried egg', 'Bread', 'Tomatoes, onions, pepper', 'Shito (spicy sauce)', 'Mayonnaise'],
        preparation: [
            'Fry the egg.',
            'Slice bread and spread mayonnaise and shito.',
            'Add fried egg, tomatoes, onions, and pepper inside bread.',
            'Serve as a snack or light meal.'
        ]
    },
    {
        name: 'Fante Fante Rice',
        ingredients: ['2 cups rice', '1/4 cup palm oil', '1 onion, chopped', '2 tomatoes, chopped', '1 tsp ginger and garlic paste', 'Salt and seasoning cubes', 'Optional: meat or fish'],
        preparation: [
            'Rinse rice and set aside.',
            'Heat palm oil, sauté onions, ginger, and garlic.',
            'Add tomatoes and cook until soft.',
            'Add rice and water, season with salt and cubes.',
            'Cook until rice is done and fluffy.',
            'Serve hot with meat or fish.'
        ]
    },
    {
        name: 'Yamballs with Groundnut Soup',
        ingredients: ['500g yam', '1 cup groundnut paste', 'Tomatoes, onions, pepper', 'Meat or fish', 'Salt and seasoning cubes'],
        preparation: [
            'Boil yam until soft, then pound and shape into balls.',
            'Prepare groundnut soup by blending tomatoes, onions, pepper, and cooking with meat/fish.',
            'Add groundnut paste to the soup and simmer until thick.',
            'Serve yam balls with groundnut soup.'
        ]
    },
    {
        name: 'Nkate Soup (Peanut Soup)',
        ingredients: ['1 cup groundnut paste', 'Tomatoes, onions, pepper', 'Meat or fish', 'Salt and seasoning cubes', 'Water'],
        preparation: [
            'Blend tomatoes, onions, and pepper.',
            'Cook meat/fish in water with seasoning cubes.',
            'Add blended paste and groundnut paste.',
            'Simmer until thickened.',
            'Serve with rice balls, fufu, or banku.'
        ]
    },
    {
        name: 'Agidi (Cornmeal Pudding)',
        ingredients: ['2 cups cornmeal', '4 cups water', 'Sugar to taste'],
        preparation: [
            'Mix cornmeal with some cold water to prevent lumps.',
            'Boil remaining water and stir in cornmeal mixture, stirring constantly.',
            'Cook until smooth and firm.',
            'Pour into molds, allow to set.',
            'Serve chilled or with sauce.'
        ]
    },
    {
        name: 'Sobolo (Hibiscus Drink Variation)',
        ingredients: ['2 cups dried hibiscus flowers', '1 cup sugar', 'Ginger', 'Cloves', '8 cups water', 'Optional: pineapple or orange juice'],
        preparation: [
            'Boil hibiscus flowers with ginger and cloves for 10–15 minutes.',
            'Add optional fruit juice and sugar.',
            'Strain and chill.',
            'Serve cold.'
        ]
    },
    {
        name: 'Nkatie Balls (Peanut Balls)',
        ingredients: ['2 cups roasted peanuts', '1 cup sugar', '2 tbsp water'],
        preparation: [
            'Melt sugar with water to form a syrup.',
            'Mix in roasted peanuts quickly.',
            'Pour mixture on a greased tray and flatten.',
            'Let cool and cut into small balls.',
            'Serve as a snack.'
        ]
    },
    {
        name: 'Chibom (Ghanaian Sandwich Variation)',
        ingredients: ['1 fried egg', 'Bread', 'Tomatoes, onions, pepper', 'Shito (spicy sauce)', 'Mayonnaise', 'Optional: fried fish or meat'],
        preparation: [
            'Fry the egg and optional meat/fish.',
            'Slice bread and spread mayonnaise and shito.',
            'Add fried egg, meat/fish, tomatoes, onions, and pepper inside the bread.',
            'Serve as a snack or light meal.'
        ]
    },
    {
        name: 'Abom',
        ingredients: ['2 cups cocoyam leaves or spinach', '1 onion, chopped', '2 tomatoes, chopped', '1/4 cup palm oil', 'Smoked fish or meat', 'Salt and seasoning cubes'],
        preparation: [
            'Wash and chop the leaves.',
            'Heat palm oil and sauté onions and tomatoes.',
            'Add smoked fish or meat.',
            'Add leaves and simmer until tender.',
            'Serve with boiled yam, plantain, or rice.'
        ]
    },
    {
        name: 'Koose with Hausa Koko',
        ingredients: ['2 cups black-eyed peas', '1 onion, chopped', '1 chili pepper', 'Salt', 'Oil for frying', 'Hausa Koko ingredients (millet flour, water, ginger, cloves, sugar)'],
        preparation: [
            'Prepare koose by soaking, peeling, and blending black-eyed peas with onion and chili.',
            'Fry koose in hot oil until golden.',
            'Prepare Hausa Koko porridge separately.',
            'Serve koose alongside Hausa Koko as a breakfast dish.'
        ]
    },
    {
        name: 'Kaklo (Ghanaian Small Doughnut)',
        ingredients: ['2 cups flour', '1/2 cup sugar', '1 tsp yeast', '1 cup water', '1/4 tsp salt', 'Oil for frying'],
        preparation: [
            'Mix flour, sugar, yeast, salt, and water to form a smooth batter.',
            'Allow dough to rise for 30–45 minutes.',
            'Scoop into hot oil and fry until golden brown.',
            'Drain and serve hot or cold.'
        ]
    },
    {
        name: 'Zom (Ginger and Sugar Drink)',
        ingredients: ['1 cup fresh ginger, grated', '1 cup sugar', '8 cups water', 'Optional: lemon juice'],
        preparation: [
            'Boil water and add grated ginger, simmer 10–15 minutes.',
            'Strain, add sugar and optional lemon juice.',
            'Chill and serve cold.'
        ]
    },
    {
        name: 'Ice Kenkey',
        ingredients: ['Kenkey (fermented corn dough)', 'Water', 'Sugar', 'Milk', 'Ice cubes', 'Optional: Groundnuts or shito'],
        preparation: [
            'Slice kenkey into small pieces.',
            'Mix kenkey with water, sugar, and milk.',
            'Add ice cubes and optional toppings.',
            'Serve chilled.'
        ]
    },
    {
        name: 'Palm Nut Soup',
        ingredients: ['2 cups palm nut concentrate', 'Meat or fish', 'Tomatoes, onions, peppers', 'Salt and seasoning cubes'],
        preparation: [
            'Boil meat or fish with seasoning cubes.',
            'Blend tomatoes, onions, and peppers, then add to meat/fish.',
            'Add palm nut concentrate and simmer until thick.',
            'Serve with fufu, banku, or rice balls.'
        ]
    },
    {
        name: 'Frafra Rice',
        ingredients: ['2 cups rice', '1/4 cup palm oil', '1 onion, chopped', '2 tomatoes, chopped', 'Salt and seasoning cubes', 'Optional: meat or fish'],
        preparation: [
            'Rinse rice and set aside.',
            'Heat palm oil and sauté onions and tomatoes.',
            'Add rice and water, season, and cook until done.',
            'Serve hot with optional meat or fish.'
        ]
    },
    {
        name: 'Abolo (Steamed Corn Bread)',
        ingredients: ['2 cups cornmeal', '1/2 cup sugar', '1 cup water', 'Banana leaves or molds'],
        preparation: [
            'Mix cornmeal, sugar, and water into a smooth batter.',
            'Pour onto banana leaves or molds.',
            'Steam for 20–30 minutes until firm.',
            'Cool slightly and serve as a snack.'
        ]
    },
    {
        name: 'Bofrot (Ghanaian Doughnut)',
        ingredients: ['2 cups flour', '1/2 cup sugar', '1 tsp yeast', '1 cup water', '1/4 tsp salt', 'Oil for frying'],
        preparation: [
            'Mix flour, sugar, yeast, salt, and water to make batter.',
            'Allow the dough to rise 1 hour.',
            'Heat oil and fry spoonfuls until golden brown.',
            'Drain and serve hot.'
        ]
    },
    {
        name: 'Koose (Black-Eyed Pea Fritters)',
        ingredients: ['2 cups black-eyed peas', '1 small onion', '1 chili pepper', 'Salt', 'Oil for frying'],
        preparation: [
            'Soak and peel black-eyed peas, blend with onion and chili.',
            'Heat oil in a frying pan.',
            'Fry batter spoonfuls until golden brown.',
            'Serve hot as a snack or breakfast.'
        ]
    },
    {
        name: 'Pito (Local Beer)',
        ingredients: ['Fermented millet or sorghum', 'Water', 'Optional: sugar'],
        preparation: [
            'Ferment millet or sorghum for 2–3 days.',
            'Strain the liquid and serve as a traditional local beer.'
        ]
    },
    {
        name: 'Nkate Cake (Peanut Candy)',
        ingredients: ['2 cups roasted peanuts', '1 cup sugar', '2 tbsp water'],
        preparation: [
            'Melt sugar with water to form syrup.',
            'Mix in roasted peanuts quickly.',
            'Pour onto greased tray and flatten.',
            'Allow to cool and cut into pieces.',
            'Serve as a snack.'
        ]
    },
    {
        name: 'Yamarita (Yam with Sauce)',
        ingredients: ['500g yam', 'Tomatoes, onions, pepper', 'Palm oil', 'Meat or fish', 'Salt and seasoning cubes'],
        preparation: [
            'Boil yam until soft and cut into cubes.',
            'Blend tomatoes, onions, and pepper.',
            'Heat palm oil and sauté the mixture.',
            'Add meat or fish and simmer.',
            'Serve the sauce over boiled yam cubes.'
        ]
    },
    {
        name: 'Kaklo (Ghanaian Small Doughnut)',
        ingredients: ['2 cups flour', '1/2 cup sugar', '1 tsp yeast', '1 cup water', '1/4 tsp salt', 'Oil for frying'],
        preparation: [
            'Mix flour, sugar, yeast, salt, and water to form batter.',
            'Let the batter rise for 30–45 minutes.',
            'Heat oil and fry spoonfuls until golden brown.',
            'Drain and serve.'
        ]
    },
    {
        name: 'Zom (Ginger Drink)',
        ingredients: ['1 cup fresh ginger, grated', '1 cup sugar', '8 cups water', 'Optional: lemon juice'],
        preparation: [
            'Boil water and add grated ginger, simmer for 10–15 minutes.',
            'Strain and add sugar and optional lemon juice.',
            'Chill and serve cold.'
        ]
    },
    {
        name: 'Hausa Koko (Spicy Millet Porridge)',
        ingredients: ['1 cup millet flour', '3 cups water', '1/2 tsp ginger powder', '1/2 tsp cloves', 'Sugar to taste'],
        preparation: [
            'Mix millet flour with water to form smooth paste.',
            'Boil remaining water and gradually add millet paste, stirring continuously.',
            'Add ginger, cloves, and sugar; simmer until thick.',
            'Serve hot with bread or Koose.'
        ]
    },
    {
        name: 'Koose (Black-Eyed Pea Fritters - Variation)',
        ingredients: ['2 cups black-eyed peas', '1 small onion', '1 chili pepper', 'Salt', 'Oil for frying'],
        preparation: [
            'Soak and peel black-eyed peas, then blend with onion and chili.',
            'Heat oil and fry spoonfuls of batter until golden brown.',
            'Serve as breakfast or snack.'
        ]
    },
    {
        name: 'Sobolo (Hibiscus Drink)',
        ingredients: ['2 cups dried hibiscus flowers', '1 cup sugar', 'Ginger', 'Cloves', '8 cups water', 'Optional: pineapple or orange juice'],
        preparation: [
            'Boil hibiscus flowers with ginger and cloves for 10–15 minutes.',
            'Add optional fruit juice and sugar.',
            'Strain and chill.',
            'Serve cold.'
        ]
    },
    {
        name: 'Gobe (Millet Porridge)',
        ingredients: ['1 cup millet flour', '3–4 cups water', '1 tsp salt', 'Optional: sugar or milk'],
        preparation: [
            'Boil water.',
            'Mix millet flour with a little cold water to prevent lumps.',
            'Gradually stir into boiling water while stirring continuously.',
            'Cook until thickened.',
            'Add salt, sugar, or milk as desired.',
            'Serve hot.'
        ]
    },
    {
        name: 'Ampesi with Palm Nut Stew',
        ingredients: ['500g yam, cocoyam, or plantain', 'Palm nut concentrate', 'Meat or fish', 'Tomatoes, onion, pepper', 'Palm oil', 'Salt and seasoning cubes'],
        preparation: [
            'Boil yam, cocoyam, or plantain until tender.',
            'Cook meat/fish with tomatoes, onion, and pepper.',
            'Add palm nut concentrate and simmer until thickened.',
            'Serve the stew over boiled yam or plantain.'
        ]
    },
    {
        name: 'Banku and Grilled Tilapia',
        ingredients: ['2 cups corn dough', '1 cup cassava dough', 'Salt', 'Grilled tilapia', 'Shito (spicy sauce)'],
        preparation: [
            'Mix corn dough and cassava dough in a pot with water.',
            'Stir continuously over medium heat to avoid lumps until smooth and stretchy.',
            'Serve with grilled tilapia and shito.'
        ]
    },
    {
        name: 'Ice Kenkey with Sugar and Milk',
        ingredients: ['Kenkey', 'Water', 'Sugar', 'Milk', 'Ice cubes'],
        preparation: [
            'Slice kenkey into small pieces.',
            'Mix with water, sugar, and milk.',
            'Add ice cubes and serve chilled.'
        ]
    },
    {
        name: 'Nkatie Balls (Peanut Candy)',
        ingredients: ['2 cups roasted peanuts', '1 cup sugar', '2 tbsp water'],
        preparation: [
            'Melt sugar with water to form syrup.',
            'Mix in roasted peanuts quickly.',
            'Pour on a greased tray, flatten, let cool, and cut into small balls.',
            'Serve as a snack.'
        ]
    },
    {
        name: 'Bofrot (Ghanaian Doughnut)',
        ingredients: ['2 cups flour', '1/2 cup sugar', '1 tsp yeast', '1 cup water', '1/4 tsp salt', 'Oil for frying'],
        preparation: [
            'Mix flour, sugar, yeast, salt, and water to make smooth batter.',
            'Allow dough to rise for 1 hour.',
            'Heat oil and fry spoonfuls until golden brown.',
            'Drain and serve hot.'
        ]
    },
    {
        name: 'Palm Wine',
        ingredients: ['Fresh palm sap'],
        preparation: [
            'Collect palm sap in clean containers.',
            'Serve fresh for sweet non-alcoholic taste or allow light fermentation for alcoholic palm wine.',
            'Chill or serve with ice.'
        ]
    },
    {
        name: 'Vegetable Stew',
        ingredients: ['1–2 cups mixed vegetables (spinach, kontomire, garden eggs)', '1 onion', '2–3 tomatoes', '1/4 cup palm oil', 'Salt and seasoning cubes', 'Optional: smoked fish or meat'],
        preparation: [
            'Wash and chop vegetables.',
            'Heat palm oil and sauté onions and tomatoes.',
            'Add smoked fish or meat if desired.',
            'Add vegetables and simmer until tender.',
            'Serve with yam, plantain, rice, banku, or fufu.'
        ]
    },
    {
        name: 'Egusi Stew',
        ingredients: ['1 cup egusi seeds (melon seeds)', '2–3 cups water or stock', '1 onion', '2–3 tomatoes', '1/4 cup palm oil', 'Salt and seasoning cubes', 'Optional: meat, fish, or snails'],
        preparation: [
            'Grind egusi seeds into fine powder.',
            'Heat palm oil and sauté onions and tomatoes.',
            'Add meat/fish if using.',
            'Add ground egusi and stir while cooking to prevent lumps.',
            'Simmer 10–15 minutes and serve with fufu, yam, or rice.'
        ]
    },
    {
        name: 'Okro Stew',
        ingredients: ['2 cups chopped okra', '1 onion', '2–3 tomatoes', '1/4 cup palm oil', 'Salt and seasoning cubes', 'Optional: meat or fish'],
        preparation: [
            'Chop okra and other vegetables.',
            'Heat palm oil and sauté onions and tomatoes.',
            'Add meat/fish if desired.',
            'Add okra and cook until slightly slimy.',
            'Serve with yam, plantain, banku, or fufu.'
        ]
    },
    {
        name: 'Gari Stew / Greaves Stew',
        ingredients: ['2 cups gari or meat greaves', '1 onion', '2–3 tomatoes', '1/4 cup palm oil', 'Salt and seasoning cubes', 'Optional: fish or meat'],
        preparation: [
            'Heat palm oil and sauté onions and tomatoes.',
            'Add greaves or cooked meat.',
            'Add water or stock and simmer 10–15 minutes.',
            'Serve hot with banku, fufu, or yam.'
        ]
    },
    {
        name: 'Kontomire Stew (Cocoyam Leaves)',
        ingredients: ['2 cups cocoyam leaves', '1 onion', '2–3 tomatoes', '1/4 cup palm oil', 'Salt and seasoning cubes', 'Optional: smoked fish or meat'],
        preparation: [
            'Wash and chop cocoyam leaves.',
            'Heat palm oil and sauté onions and tomatoes.',
            'Add smoked fish or meat if desired.',
            'Add leaves and simmer until tender.',
            'Serve with yam, plantain, banku, or rice.'
        ]
    },
    {
        name: 'Garden Egg Stew',
        ingredients: ['5–6 garden eggs', '1 onion', '2–3 tomatoes', '1/4 cup palm oil', 'Salt and seasoning cubes', 'Optional: smoked fish or meat'],
        preparation: [
            'Boil or blend garden eggs with tomatoes and onions.',
            'Heat palm oil and sauté the mixture.',
            'Add smoked fish or meat if desired.',
            'Simmer 10–15 minutes and serve with yam, plantain, banku, or rice.'
        ]
    },
    {
        name: 'Fufu',
        ingredients: ['Cassava', 'Plantain or yam'],
        preparation: [
            'Peel and boil cassava and plantain/yam until soft.',
            'Pound together in a mortar until smooth and stretchy.',
            'Shape into balls and serve with soup or stew.'
        ]
    },
    {
        name: 'Banku',
        ingredients: ['2 cups corn dough', '1 cup cassava dough', 'Water', 'Salt'],
        preparation: [
            'Mix corn dough and cassava dough in a pot with water and salt.',
            'Stir continuously over medium heat to avoid lumps until smooth and stretchy.',
            'Serve hot with soup, stew, or grilled fish.'
        ]
    },
    {
        name: 'Fried Plantain (Kelewele)',
        ingredients: ['3–4 ripe plantains', '1 tsp ginger powder', '1 tsp chili powder', 'Salt', 'Oil for frying'],
        preparation: [
            'Peel and cut plantains into cubes or slices.',
            'Mix ginger, chili powder, and salt; coat plantains with the mixture.',
            'Heat oil in a pan and fry plantains until golden brown.',
            'Drain and serve as a snack or side dish.'
        ]
    },
    {
        name: 'Jollof Rice',
        ingredients: ['2 cups rice', '1/4 cup vegetable oil', '1 onion, chopped', '2–3 tomatoes, blended', '1 tsp ginger and garlic paste', '1 tsp curry powder', '1 tsp thyme', 'Salt and seasoning cubes', 'Optional: vegetables, meat, or fish'],
        preparation: [
            'Rinse rice and set aside.',
            'Heat oil, sauté onions, ginger, and garlic.',
            'Add blended tomatoes and cook until thickened.',
            'Add rice, water, spices, and optional ingredients.',
            'Cook until rice is done and fluffy.',
            'Serve hot.'
        ]
    },
    // Ghanaian Soups
    {
        name: 'Light Soup',
        ingredients: ['Meat or fish', 'Tomatoes', 'Onions', 'Pepper', 'Salt and seasoning cubes', 'Water'],
        preparation: [
            'Blend tomatoes, onions, and peppers.',
            'Boil meat/fish until tender.',
            'Add blended mixture and simmer 15–20 minutes.',
            'Serve with fufu, banku, or rice balls.'
        ]
    },
    {
        name: 'Groundnut Soup',
        image: 'images/groundnut soup.jpeg',
        ingredients: ['1 cup groundnut paste', 'Meat or fish', 'Tomatoes, onion, pepper', 'Salt and seasoning cubes', 'Water'],
        preparation: [
            'Blend tomatoes, onions, and pepper.',
            'Boil meat/fish until tender.',
            'Add groundnut paste and water, simmer until thickened.',
            'Serve with fufu, banku, or rice balls.'
        ]
    },
    {
        name: 'PalmNut Soup',
        ingredients: ['2 cups palm nut concentrate', 'Meat or fish', 'Tomatoes, onions, pepper', 'Salt and seasoning cubes'],
        preparation: [
            'Boil meat/fish with seasoning.',
            'Blend tomatoes, onions, and pepper.',
            'Add palm nut concentrate and simmer until thick.',
            'Serve with fufu, banku, or rice balls.'
        ]
    },
    {
        name: 'Kontomire Soup (Palava Sauce)',
        ingredients: ['2 cups cocoyam leaves or spinach', '1 onion', '2–3 tomatoes', 'Palm oil', 'Salt and seasoning cubes', 'Optional: smoked fish or meat'],
        preparation: [
            'Wash and chop leaves.',
            'Heat palm oil and sauté onions and tomatoes.',
            'Add smoked fish or meat if desired.',
            'Add leaves and simmer until tender.',
            'Serve with yam, plantain, or rice.'
        ]
    },
    {
        name: 'Waakye',
        image: 'images/Waakye-735x490.jpg',
        ingredients: [
            '1 cup rice',
            '1 cup black-eyed peas or red beans',
            '1 tsp baking soda (optional, for color and softness)',
            '2–3 cups water',
            'Salt to taste',
            'Optional: millet leaves for traditional color',
            'Spaghetti, gari, or boiled eggs (for serving)',
            'Shito (spicy sauce) or stew for serving'
        ],
        preparation: [
            'Soak beans overnight or for several hours to soften.',
            'Rinse rice and beans.',
            'In a large pot, combine beans, water, and baking soda (if using).',
            'Add washed rice to the pot.',
            'Add millet leaves if desired for traditional color (greenish-brown).',
            'Cook on medium heat, stirring occasionally, until rice and beans are tender and water is absorbed.',
            'Season with salt to taste.',
            'Serve hot with accompaniments like boiled eggs, spaghetti, gari, and shito or stew.'
        ],
    },

    {
        name: "Tea",
        ingredients: [
            "1 cup of water",
            "1 teaspoon of tea leaves or 1 tea bag",
            "Sugar to taste",
            "Milk (optional)"
        ],
        instructions: [
            "Pour the cup of water into a small pot and place it on medium heat.",
            "When the water starts boiling, add the tea leaves or tea bag.",
            "Let the tea simmer for 2–3 minutes to release its flavor.",
            "If you like sweet tea, add sugar according to your taste and stir well.",
            "Add milk if desired, and let it heat for another 1–2 minutes.",
            "Remove the tea from heat and pour it into a cup using a strainer if you used loose tea leaves.",
            "Serve hot and enjoy your cup of tea."
        ]
    }
];

async function searchRecipe() {
    const input = document.getElementById("searchInput").value.trim().toLowerCase();
    const resultBox = document.getElementById("result");

    // Clear previous results
    resultBox.innerHTML = "";

    if (input === "") {
        resultBox.innerHTML = "<p>Please type a food name.</p>";
        return;
    }

    // --- Local search ---
    const localResults = ghanaFoods.filter(food =>
        food.name.toLowerCase().includes(input)
    );

    // --- Online API search ---
    let apiResults = [];
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
        const data = await response.json();
        if (data.meals) {
            apiResults = data.meals.map(meal => ({
                name: meal.strMeal,
                ingredients: Array.from({ length: 20 }, (_, i) => {
                    const ingredient = meal[`strIngredient${i + 1}`];
                    const measure = meal[`strMeasure${i + 1}`];
                    if (ingredient && ingredient.trim() !== "") return `${ingredient} - ${measure}`;
                    return null;
                }).filter(Boolean),
                preparation: [meal.strInstructions],
                image: meal.strMealThumb
            }));
        }
    } catch (error) {
        console.error("API Error:", error);
    }

    // Combine local and API results
    const combinedResults = [...localResults, ...apiResults];

    if (combinedResults.length === 0) {
        resultBox.innerHTML = "<p>No food found 🥲</p>";
        return;
    }

    // Display cards
    combinedResults.forEach(food => {
        resultBox.innerHTML += `
            <div class="food-card">
                ${food.image ? `<img src="${food.image}" alt="${food.name}" class="food-image">` : ""}
                <h3>${food.name}</h3>
                <p><strong>Ingredients:</strong></p>
                <ul>
                    ${food.ingredients.map(item => `<li>${item}</li>`).join("")}
                </ul>
                <p><strong>Preparation:</strong></p>
                <ol>
                    ${food.preparation.map(step => `<li>${step}</li>`).join("")}
                </ol>
            </div>
        `;
    });
}
