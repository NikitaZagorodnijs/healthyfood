const recipes = [
    {
        title: "Avocado Salad",
        image: "images/avocado-salad.jpg",
        ingredients: [
            "2 ripe avocados",
            "1 cup cherry tomatoes",
            "2 tbsp olive oil",
            "1 tbsp lemon juice",
            "Salt and pepper to taste"
        ],
        time: "10 minutes",
        steps: [
            "Slice the avocado and cherry tomatoes.",
            "Prepare a lemon vinaigrette by mixing olive oil, lemon juice, salt, and pepper.",
            "Combine the avocado and tomatoes in a bowl.",
            "Drizzle the vinaigrette over the salad and toss gently.",
            "Serve fresh and enjoy!"
        ]
    },
    {
        title: "Quinoa Bowl",
        image: "images/Quinoa-Bowl-7.jpg",
        ingredients: [
            "1 cup quinoa",
            "2 cups mixed vegetables (zucchini, bell peppers, carrots)",
            "2 tbsp tahini",
            "1 tbsp lemon juice",
            "Salt and pepper to taste"
        ],
        time: "25 minutes",
        steps: [
            "Cook the quinoa according to package instructions.",
            "Roast vegetables like zucchini, bell peppers, and carrots.",
            "Prepare a tahini dressing by mixing tahini, lemon juice, garlic, and water.",
            "Combine quinoa and roasted vegetables in a bowl.",
            "Drizzle the tahini dressing over the top and serve."
        ]
    },
    {
        title: "Grilled Chicken Salad",
        image: "images/grilled-chicken-salad-4.jpg",
        ingredients: [
            "2 chicken breasts",
            "3 cups lettuce",
            "1 cucumber",
            "1 cup cherry tomatoes",
            "Your favorite dressing"
        ],
        time: "30 minutes",
        steps: [
            "Season chicken breasts with salt, pepper, and your favorite spices.",
            "Grill the chicken until cooked through.",
            "Chop lettuce, cucumber, and tomatoes for the salad base.",
            "Slice the grilled chicken and add it to the salad.",
            "Top with your favorite dressing and serve."
        ]
    },
    {
        title: "Overnight Oats",
        image: "images/244251-No-Cook-Overnight-Oatmeal-DDMFS-3X4-0325-cce97a47586f46aa92590d1c31785631.jpg",
        ingredients: [
            "1/2 cup oats",
            "1/2 cup milk or almond milk",
            "1 tbsp chia seeds",
            "1 tbsp honey",
            "Toppings: fresh berries, nuts, or granola"
        ],
        time: "Overnight",
        steps: [
            "Mix oats, milk, and a sweetener of your choice in a jar.",
            "Add toppings like fresh fruits, nuts, or seeds.",
            "Refrigerate overnight.",
            "Enjoy the next morning for a quick, nutritious breakfast."
        ]
    },
    {
        title: "Smoothie Bowl",
        image: "images/Smoothie-Bowl-8.jpeg",
        ingredients: [
            "1 frozen banana",
            "1 cup mixed berries",
            "1/2 cup yogurt",
            "1/4 cup almond milk",
            "Toppings: granola, chia seeds, sliced fruits"
        ],
        time: "10 minutes",
        steps: [
            "Blend frozen fruits, yogurt, and a splash of milk to make a thick smoothie.",
            "Pour the smoothie into a bowl.",
            "Top with granola, fresh fruits, and chia seeds.",
            "Serve immediately."
        ]
    },
    {
        title: "Vegetable Stir-Fry",
        image: "images/VegetableStirFry_9.jpg",
        ingredients: [
            "1 cup broccoli florets",
            "1 bell pepper",
            "1 carrot",
            "2 tbsp soy sauce",
            "1 tbsp sesame oil",
            "1 clove garlic"
        ],
        time: "15 minutes",
        steps: [
            "Chop your favorite vegetables like bell peppers, broccoli, and carrots.",
            "Stir-fry them in a hot pan with a little oil.",
            "Add soy sauce, garlic, and ginger for flavor.",
            "Serve with steamed rice or noodles."
        ]
    },
    {
        title: "Stuffed Bell Peppers",
        image: "images/Stuffed-Bell-Peppers-f.webp",
        ingredients: [
            "4 bell peppers",
            "1 cup cooked quinoa",
            "1 cup mixed vegetables (corn, peas, carrots)",
            "1/2 cup shredded cheese",
            "Salt and pepper"
        ],
        time: "40 minutes",
        steps: [
            "Cut the tops off bell peppers and remove seeds.",
            "Stuff them with a mixture of cooked quinoa, vegetables, and cheese.",
            "Bake in the oven at 350°F for 30 minutes or until the peppers are tender.",
            "Serve warm."
        ]
    },
    {
        title: "Greek Yogurt Parfait",
        image: "images/Greek-Yogurt-Parfait-Recipe.jpg",
        ingredients: [
            "1 cup Greek yogurt",
            "1/2 cup granola",
            "1/2 cup fresh berries",
            "1 tbsp honey"
        ],
        time: "5 minutes",
        steps: [
            "Layer Greek yogurt, granola, and fresh fruits in a glass.",
            "Repeat the layers until the glass is full.",
            "Top with a drizzle of honey and serve."
        ]
    },
    {
        title: "Lentil Soup",
        image: "images/Lentil-Soup-mfs.jpg",
        ingredients: [
            "1 cup lentils",
            "1 onion",
            "2 carrots",
            "3 cups vegetable broth",
            "1 tbsp olive oil",
            "Salt and pepper"
        ],
        time: "40 minutes",
        steps: [
            "Sauté onions, carrots, and celery in a pot.",
            "Add lentils, vegetable broth, and seasonings.",
            "Simmer for about 30 minutes or until the lentils are soft.",
            "Serve hot with a slice of crusty bread."
        ]
    },
    {
        title: "Zucchini Noodles",
        image: "images/zucchininoodles.jpg",
        ingredients: [
            "2 zucchinis",
            "1 tbsp olive oil",
            "2 cloves garlic",
            "1/2 cup marinara sauce",
            "Grated cheese (optional)"
        ],
        time: "15 minutes",
        steps: [
            "Spiralize zucchini to make noodles.",
            "Sauté the noodles in a pan with olive oil and garlic.",
            "Top with marinara sauce and grated cheese.",
            "Serve as a low-carb alternative to pasta."
        ]
    },
    {
        title: "Grilled Salmon",
        image: "images/featured-grilled-salmon-recipe.jpg",
        ingredients: [
            "2 salmon fillets",
            "1 tbsp olive oil",
            "1 lemon",
            "Salt and pepper"
        ],
        time: "20 minutes",
        steps: [
            "Season salmon fillets with salt, pepper, and lemon juice.",
            "Grill the salmon until cooked through.",
            "Serve with a side of steamed vegetables or a salad."
        ]
    },
    {
        title: "Energy Bites",
        image: "images/Easy-No-Bake-Energy-Bites-Recipe.webp",
        ingredients: [
            "1 cup oats",
            "1/2 cup peanut butter",
            "1/4 cup honey",
            "1/4 cup chocolate chips",
            "1/4 cup chia seeds"
        ],
        time: "30 minutes",
        steps: [
            "Mix oats, peanut butter, honey, and chocolate chips in a bowl.",
            "Roll the mixture into small balls.",
            "Refrigerate for 30 minutes.",
            "Enjoy as a quick and healthy snack."
        ]
    },
    {
        title: "Berry Smoothie",
        image: "images/Mixed-Berry-smoothie.jpg",
        ingredients: [
            "1 cup mixed berries",
            "1 banana",
            "1/2 cup yogurt",
            "1/4 cup almond milk"
        ],
        time: "5 minutes",
        steps: [
            "Blend frozen berries, banana, yogurt, and a splash of almond milk.",
            "Pour into a glass and serve immediately."
        ]
    },
    {
        title: "Roasted Chickpeas",
        image: "images/roasted-chickpeas.jpg",
        ingredients: [
            "1 can chickpeas",
            "2 tbsp olive oil",
            "1 tsp paprika",
            "Salt to taste"
        ],
        time: "30 minutes",
        steps: [
            "Drain and rinse a can of chickpeas.",
            "Toss with olive oil, salt, and spices.",
            "Roast in the oven at 400°F for 30 minutes or until crispy.",
            "Serve as a crunchy snack."
        ]
    },
    {
        title: "Caprese Salad",
        image: "images/caprese-salad-with-balsamic-reduction-ddmfs-2644-4x3-f32ac2b2fb9d4234884a752490fb015b.jpg",
        ingredients: [
            "1 cup fresh mozzarella",
            "2 tomatoes",
            "1/2 cup fresh basil",
            "2 tbsp olive oil",
            "1 tbsp balsamic glaze"
        ],
        time: "10 minutes",
        steps: [
            "Slice fresh mozzarella, tomatoes, and basil leaves.",
            "Arrange them on a plate.",
            "Drizzle with olive oil and balsamic glaze.",
            "Season with salt and pepper and serve."
        ]
    },
    {
        title: "Banana Pancakes",
        image: "images/3-ingredient-banana-pancakes-151444-1.jpg",
        ingredients: [
            "1 ripe banana",
            "2 eggs",
            "1/4 cup oats",
            "1/2 tsp baking powder",
            "1/2 tsp vanilla extract"
        ],
        time: "15 minutes",
        steps: [
            "Mash a banana and mix it with eggs and oats.",
            "Cook small pancakes in a non-stick pan.",
            "Serve with fresh fruits and a drizzle of maple syrup."
        ]
    },
    {
        title: "Vegetable Curry",
        image: "images/vegetable-curry-recipe.jpg",
        ingredients: [
            "1 cup mixed vegetables (carrots, peas, potatoes)",
            "1 onion",
            "1 can coconut milk",
            "2 tbsp curry paste",
            "Salt and pepper"
        ],
        time: "30 minutes",
        steps: [
            "Sauté onions, garlic, and ginger in a pot.",
            "Add chopped vegetables, coconut milk, and curry paste.",
            "Simmer for about 20 minutes or until vegetables are tender.",
            "Serve with steamed rice."
        ]
    },
    {
        title: "Oven-Baked Sweet Potatoes",
        image: "images/Best-Oven-Roasted-Sweet-Potatoes-Recipe.webp",
        ingredients: [
            "2 sweet potatoes",
            "1 tbsp olive oil",
            "1 tsp paprika",
            "Salt to taste"
        ],
        time: "45 minutes",
        steps: [
            "Slice sweet potatoes into wedges.",
            "Toss with olive oil, salt, and paprika.",
            "Bake in the oven at 400°F for 30 minutes or until crispy.",
            "Serve with a dipping sauce of your choice."
        ]
    },
    {
        title: "Hummus Platter",
        image: "images/hummus-27-scaled.webp",
        ingredients: [
            "1 can chickpeas",
            "1/4 cup tahini",
            "2 tbsp olive oil",
            "1 lemon",
            "2 cloves garlic"
        ],
        time: "15 minutes",
        steps: [
            "Blend chickpeas, tahini, olive oil, lemon juice, and garlic to make hummus.",
            "Serve with fresh vegetables, pita bread, and olives."
        ]
    },
    {
        title: "Fruit Salad",
        image: "images/Summer-Fruit-Salad-with-Yogurt-Dressing-02.jpeg",
        ingredients: [
            "1 cup watermelon",
            "1 cup mango",
            "1/2 cup berries",
            "1 tbsp honey"
        ],
        time: "10 minutes",
        steps: [
            "Chop a variety of fresh fruits like watermelon, mango, and berries.",
            "Mix them in a bowl.",
            "Drizzle with a little honey or lime juice.",
            "Serve chilled."
        ]
    }
];

// Populate Recipe Cards
const recipesGrid = document.querySelector('.recipes-grid');
recipes.forEach((recipe, index) => {
    const card = document.createElement('div');
    card.classList.add('recipe-card');
    card.setAttribute('data-recipe', index);

    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}">
        <h3>${recipe.title}</h3>
        <p>${recipe.steps[0]}</p>
    `;
    recipesGrid.appendChild(card);
});

// Modal Functionality
const modal = document.getElementById("recipe-modal");
const modalTitle = document.getElementById("recipe-title");
const modalImage = document.getElementById("recipe-image");
const modalIngredients = document.getElementById("recipe-ingredients");
const modalTime = document.getElementById("recipe-time");
const modalSteps = document.getElementById("recipe-steps");
const closeButton = document.querySelector(".close-button");

function showRecipeModal(index) {
    const recipe = recipes[index];
    modalTitle.textContent = recipe.title;
    modalImage.src = recipe.image;
    modalIngredients.innerHTML = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("");
    modalTime.textContent = `Preparation Time: ${recipe.time}`;
    modalSteps.innerHTML = recipe.steps.map(step => `<li>${step}</li>`).join("");
    modal.style.display = "flex";
}

function hideRecipeModal() {
    modal.style.display = "none";
}

document.querySelectorAll(".recipe-card").forEach((card, index) => {
    card.addEventListener("click", () => showRecipeModal(index));
});
closeButton.addEventListener("click", hideRecipeModal);
window.addEventListener("click", (e) => {
    if (e.target === modal) hideRecipeModal();
});
