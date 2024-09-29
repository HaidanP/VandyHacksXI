const products = [
        
    { name: "Bamboo Toothbrush", category: "Personal Care", ecoScore: 9, durability: 7, price: 5, recyclability: 10 },
    { name: "Reusable Water Bottle", category: "Kitchen", ecoScore: 10, durability: 9, price: 7, recyclability: 9 },
    { name: "Organic Cotton T-shirt", category: "Clothing", ecoScore: 8, durability: 8, price: 6, recyclability: 8 },
    { name: "Solar Phone Charger", category: "Electronics", ecoScore: 9, durability: 8, price: 5, recyclability: 7 },
    { name: "LED Light Bulbs", category: "Home", ecoScore: 9, durability: 10, price: 7, recyclability: 8 },
    { name: "Beeswax Food Wraps", category: "Kitchen", ecoScore: 10, durability: 7, price: 6, recyclability: 10 },
    { name: "Natural Laundry Detergent", category: "Cleaning", ecoScore: 8, durability: 8, price: 6, recyclability: 9 },
    { name: "Reusable Coffee Filter", category: "Kitchen", ecoScore: 10, durability: 9, price: 8, recyclability: 10 },
    { name: "Biodegradable Phone Case", category: "Electronics", ecoScore: 9, durability: 7, price: 6, recyclability: 10 },
    { name: "Cork Yoga Mat", category: "Fitness", ecoScore: 9, durability: 8, price: 7, recyclability: 9 },
    { name: "Stainless Steel Straws", category: "Kitchen", ecoScore: 10, durability: 9, price: 5, recyclability: 10 },
    { name: "Hemp Backpack", category: "Accessories", ecoScore: 8, durability: 9, price: 7, recyclability: 8 },
    { name: "Wind-Up Flashlight", category: "Electronics", ecoScore: 9, durability: 9, price: 6, recyclability: 7 },
    { name: "Smart Thermostat", category: "Home", ecoScore: 10, durability: 8, price: 8, recyclability: 6 },
    { name: "Compostable Trash Bags", category: "Cleaning", ecoScore: 9, durability: 7, price: 6, recyclability: 10 },
    { name: "Refillable Liquid Soap Dispenser", category: "Personal Care", ecoScore: 10, durability: 9, price: 7, recyclability: 9 },
    { name: "Organic Cotton Produce Bags", category: "Kitchen", ecoScore: 10, durability: 8, price: 6, recyclability: 10 },
    { name: "Plant-Based Paint", category: "Home Improvement", ecoScore: 9, durability: 7, price: 7, recyclability: 8 },
    { name: "Bamboo Cutlery Set", category: "Kitchen", ecoScore: 9, durability: 8, price: 5, recyclability: 10 },
    { name: "Eco-Friendly Notebooks", category: "Stationery", ecoScore: 8, durability: 7, price: 6, recyclability: 9 },
    { name: "Recycled Paper Towels", category: "Cleaning", ecoScore: 8, durability: 6, price: 5, recyclability: 10 },
    { name: "Organic Dog Treats", category: "Pet Care", ecoScore: 9, durability: 8, price: 7, recyclability: 8 },
    { name: "Plant-Based Sponges", category: "Cleaning", ecoScore: 10, durability: 7, price: 5, recyclability: 10 },
    { name: "Bamboo Hairbrush", category: "Personal Care", ecoScore: 9, durability: 8, price: 6, recyclability: 9 },
    { name: "Natural Face Cream", category: "Personal Care", ecoScore: 8, durability: 8, price: 7, recyclability: 7 },
    { name: "Reusable Snack Bags", category: "Kitchen", ecoScore: 10, durability: 9, price: 6, recyclability: 9 },
    { name: "Sustainable Sneakers", category: "Footwear", ecoScore: 8, durability: 9, price: 8, recyclability: 6 },
    { name: "Eco-Friendly Phone Stand", category: "Electronics", ecoScore: 9, durability: 8, price: 5, recyclability: 9 },
    { name: "Mason Jar Drinking Glasses", category: "Kitchen", ecoScore: 9, durability: 10, price: 6, recyclability: 10 },
    { name: "Bamboo Dish Brush", category: "Cleaning", ecoScore: 9, durability: 8, price: 5, recyclability: 10 },
    { name: "Organic Cotton Bath Towels", category: "Personal Care", ecoScore: 8, durability: 9, price: 7, recyclability: 8 },
    { name: "Electric Bike", category: "Transportation", ecoScore: 10, durability: 8, price: 9, recyclability: 6 },
    { name: "Solar Garden Lights", category: "Home", ecoScore: 9, durability: 9, price: 8, recyclability: 7 },
    { name: "Bamboo Fiber Plates", category: "Kitchen", ecoScore: 9, durability: 8, price: 6, recyclability: 10 },
    { name: "Sustainable Coffee Beans", category: "Food & Beverage", ecoScore: 10, durability: 8, price: 7, recyclability: 8 },
    { name: "Reusable Makeup Remover Pads", category: "Personal Care", ecoScore: 10, durability: 8, price: 6, recyclability: 9 },
    { name: "Compost Bin", category: "Garden", ecoScore: 9, durability: 9, price: 8, recyclability: 10 },
    { name: "Natural Fiber Rug", category: "Home", ecoScore: 8, durability: 9, price: 7, recyclability: 6 },
    { name: "Eco-Friendly Firestarter", category: "Outdoor", ecoScore: 9, durability: 8, price: 5, recyclability: 9 },
    { name: "Bamboo Sunglasses", category: "Accessories", ecoScore: 9, durability: 8, price: 8, recyclability: 7 },
    { name: "Natural Rubber Ball", category: "Pet Care", ecoScore: 9, durability: 9, price: 7, recyclability: 8 },
    { name: "Reusable Sandwich Wraps", category: "Kitchen", ecoScore: 10, durability: 8, price: 6, recyclability: 10 },
    { name: "Biodegradable Glitter", category: "Crafts", ecoScore: 10, durability: 6, price: 5, recyclability: 10 },
    { name: "Eco-Friendly Printer Paper", category: "Stationery", ecoScore: 9, durability: 7, price: 6, recyclability: 9 },
    { name: "Organic Herbal Tea", category: "Food & Beverage", ecoScore: 10, durability: 8, price: 6, recyclability: 8 },
    { name: "Eco-Friendly Adhesive", category: "Crafts", ecoScore: 9, durability: 8, price: 7, recyclability: 9 },
    { name: "Sustainable Yoga Block", category: "Fitness", ecoScore: 9, durability: 8, price: 6, recyclability: 10 },
    { name: "Biodegradable Dog Waste Bags", category: "Pet Care", ecoScore: 10, durability: 7, price: 6, recyclability: 10 },
    { name: "Natural Insect Repellent", category: "Outdoor", ecoScore: 9, durability: 7, price: 7, recyclability: 6 },
    { name: "Reusable Baking Mats", category: "Kitchen", ecoScore: 10, durability: 9, price: 6, recyclability: 9 },
    { name: "Organic Baby Clothes", category: "Clothing", ecoScore: 8, durability: 9, price: 7, recyclability: 8 },
    { name: "Biodegradable Yoga Mat", category: "Fitness", ecoScore: 10, durability: 7, price: 6, recyclability: 10 },
    { name: "Reusable Mesh Produce Bags", category: "Shopping", ecoScore: 10, durability: 8, price: 5, recyclability: 9 },
    { name: "Natural Cork Mouse Pad", category: "Office", ecoScore: 9, durability: 7, price: 5, recyclability: 10 },
    { name: "Recycled Plastic Watering Can", category: "Garden", ecoScore: 8, durability: 9, price: 6, recyclability: 8 },
    { name: "Organic Cotton Bathrobe", category: "Clothing", ecoScore: 8, durability: 8, price: 7, recyclability: 9 },
    { name: "Bamboo Compost Bin", category: "Kitchen", ecoScore: 10, durability: 8, price: 6, recyclability: 10 },
    { name: "Recycled Rubber Doorstop", category: "Home", ecoScore: 9, durability: 10, price: 5, recyclability: 8 },
    { name: "Natural Loofah Dish Scrubber", category: "Cleaning", ecoScore: 10, durability: 6, price: 4, recyclability: 10 },
    { name: "Organic Wool Dryer Balls", category: "Laundry", ecoScore: 9, durability: 9, price: 6, recyclability: 10 },
    { name: "Recycled Glass Soap Dispenser", category: "Bathroom", ecoScore: 8, durability: 8, price: 6, recyclability: 10 },
    { name: "Solar-powered Garden Fountain", category: "Garden", ecoScore: 9, durability: 8, price: 8, recyclability: 7 },
    { name: "Bamboo Toothbrush Holder", category: "Bathroom", ecoScore: 9, durability: 8, price: 5, recyclability: 10 },
    { name: "Organic Cotton Napkins", category: "Kitchen", ecoScore: 8, durability: 8, price: 6, recyclability: 10 },
    { name: "Recycled Plastic Planters", category: "Garden", ecoScore: 8, durability: 9, price: 7, recyclability: 8 },
    { name: "Natural Sisal Carpet", category: "Home Decor", ecoScore: 9, durability: 8, price: 7, recyclability: 9 },
    { name: "Biodegradable Party Plates", category: "Entertaining", ecoScore: 10, durability: 5, price: 6, recyclability: 10 },
    { name: "Reusable Silicone Food Covers", category: "Kitchen", ecoScore: 9, durability: 9, price: 6, recyclability: 8 },
    { name: "Organic Hemp Shower Curtain", category: "Bathroom", ecoScore: 8, durability: 8, price: 7, recyclability: 9 },
    { name: "Solar-powered Bike Light", category: "Sports", ecoScore: 9, durability: 8, price: 6, recyclability: 7 },
    { name: "Bamboo Laptop Stand", category: "Office", ecoScore: 9, durability: 8, price: 7, recyclability: 10 },
    { name: "Recycled Paper Gift Tags", category: "Gifts", ecoScore: 10, durability: 5, price: 4, recyclability: 10 },
    { name: "Natural Cork Coasters", category: "Kitchen", ecoScore: 9, durability: 7, price: 5, recyclability: 10 },
    { name: "Organic Cotton Dish Towels", category: "Kitchen", ecoScore: 8, durability: 8, price: 6, recyclability: 10 },
    { name: "Recycled Plastic Storage Bins", category: "Home", ecoScore: 8, durability: 9, price: 7, recyclability: 8 },
    { name: "Bamboo Toilet Brush", category: "Bathroom", ecoScore: 9, durability: 7, price: 5, recyclability: 10 },
    { name: "Solar-powered Outdoor Lights", category: "Garden", ecoScore: 9, durability: 8, price: 7, recyclability: 7 },
    { name: "Organic Wool Throw Blanket", category: "Home Decor", ecoScore: 8, durability: 9, price: 8, recyclability: 9 },
    { name: "Reusable Silicone Tea Bags", category: "Kitchen", ecoScore: 10, durability: 9, price: 6, recyclability: 8 },
    { name: "Natural Bamboo Toothpick Holder", category: "Kitchen", ecoScore: 9, durability: 8, price: 5, recyclability: 10 },
    { name: "Recycled Plastic Cutting Board", category: "Kitchen", ecoScore: 8, durability: 9, price: 6, recyclability: 8 },
    { name: "Organic Cotton Pillowcases", category: "Bedroom", ecoScore: 8, durability: 8, price: 7, recyclability: 10 },
    { name: "Biodegradable Plant Labels", category: "Garden", ecoScore: 10, durability: 6, price: 5, recyclability: 10 },
    { name: "Reusable Beeswax Candles", category: "Home Decor", ecoScore: 9, durability: 7, price: 6, recyclability: 10 },
    { name: "Natural Jute Shopping Bag", category: "Shopping", ecoScore: 9, durability: 8, price: 5, recyclability: 10 },
    { name: "Recycled Plastic Picture Frames", category: "Home Decor", ecoScore: 8, durability: 9, price: 6, recyclability: 8 },
    { name: "Organic Cotton Handkerchiefs", category: "Personal Care", ecoScore: 8, durability: 8, price: 5, recyclability: 10 },
    { name: "Bamboo Drawer Organizers", category: "Home", ecoScore: 9, durability: 8, price: 6, recyclability: 10 },
    { name: "Solar-powered Calculator", category: "Office", ecoScore: 9, durability: 8, price: 6, recyclability: 7 },
    { name: "Natural Coconut Fiber Doormat", category: "Home", ecoScore: 9, durability: 7, price: 6, recyclability: 10 },
    { name: "Recycled Glass Candle Holders", category: "Home Decor", ecoScore: 8, durability: 8, price: 6, recyclability: 10 },
    { name: "Organic Cotton Makeup Remover Pads", category: "Personal Care", ecoScore: 9, durability: 7, price: 5, recyclability: 10 },
    { name: "Bamboo Bathroom Scale", category: "Bathroom", ecoScore: 8, durability: 8, price: 7, recyclability: 9 },
    { name: "Reusable Silicone Popsicle Molds", category: "Kitchen", ecoScore: 9, durability: 9, price: 6, recyclability: 8 },
    { name: "Natural Wool Dryer Balls", category: "Laundry", ecoScore: 10, durability: 9, price: 6, recyclability: 10 },
    { name: "Recycled Paper Wall Clock", category: "Home Decor", ecoScore: 8, durability: 7, price: 6, recyclability: 9 }
        ];

        let comparisonProducts = [];

        function handleSearchAndFilters() {
            const searchTerm = document.getElementById('productSearch').value.toLowerCase();
            const selectedCategory = document.getElementById('categoryFilter').value;
            const selectedEcoScore = parseInt(document.getElementById('ecoScoreFilter').value) || 0;

            const filteredProducts = products.filter(product => {
                const matchesSearch = product.name.toLowerCase().includes(searchTerm);
                const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
                const matchesEcoScore = product.ecoScore >= selectedEcoScore;

                return matchesSearch && matchesCategory && matchesEcoScore;
            });

            displayResults(filteredProducts);
        }

        document.getElementById('productSearchForm').addEventListener('submit', function(e) {
            e.preventDefault();
            handleSearchAndFilters();
        });

        document.getElementById('categoryFilter').addEventListener('change', handleSearchAndFilters);
        document.getElementById('ecoScoreFilter').addEventListener('change', handleSearchAndFilters);

        function displayResults(products) {
            const resultsSection = document.getElementById('results');
            resultsSection.innerHTML = '<h2>Search Results</h2>';

            if (products.length === 0) {
                resultsSection.innerHTML += '<p>No products found. Try adjusting your search or filters.</p>';
            } else {
                const productList = document.createElement('ul');
                productList.className = 'product-list';
                products.forEach(product => {
                    const li = document.createElement('li');
                    li.className = 'product-card';
                    li.innerHTML = `
                        <h3>${product.name}</h3>
                        <p>Category: ${product.category}</p>
                        <p>Eco-Score: <span class="eco-score eco-score-${getEcoScoreClass(product.ecoScore)}">${product.ecoScore}/10</span></p>
                        <button onclick="addToComparison('${product.name}')">Compare</button>
                    `;
                    productList.appendChild(li);
                });
                resultsSection.appendChild(productList);
            }
            resultsSection.classList.remove('hidden');
        }

        function getEcoScoreClass(score) {
            if (score >= 8) return 'high';
            if (score >= 6) return 'medium';
            return 'low';
        }

        function addToComparison(productName) {
            const product = products.find(p => p.name === productName);
            if (comparisonProducts.length < 2 && !comparisonProducts.includes(product)) {
                comparisonProducts.push(product);
                updateComparisonDisplay();
                showToast(`Added ${product.name} to comparison`);
            } else if (comparisonProducts.length >= 2) {
                showToast("You can only compare two products at a time.");
            }
        }

        function updateComparisonDisplay() {
            const comparisonSection = document.getElementById('productComparison');
            comparisonSection.classList.remove('hidden');

            comparisonProducts.forEach((product, index) => {
                const productDiv = document.getElementById(`product${index + 1}`);
                productDiv.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>Category: ${product.category}</p>
                    <p>Eco-Score: <span class="eco-score eco-score-${getEcoScoreClass(product.ecoScore)}">${product.ecoScore}/10</span></p>
                    <button onclick="removeFromComparison(${index})">Remove</button>
                `;
            });

            if (comparisonProducts.length === 2) {
                displayComparisonChart(comparisonProducts[0], comparisonProducts[1]);
            }
        }

        function removeFromComparison(index) {
            const removedProduct = comparisonProducts[index];
            comparisonProducts.splice(index, 1);
            updateComparisonDisplay();
            if (comparisonProducts.length === 0) {
                document.getElementById('productComparison').classList.add('hidden');
            }
            showToast(`Removed ${removedProduct.name} from comparison`);
        }

        function displayComparisonChart(product1, product2) {
            const ctx = document.getElementById('comparisonChart').getContext('2d');
            new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: ['Eco-Score', 'Durability', 'Price', 'Recyclability'],
                    datasets: [
                        {
                            label: product1.name,
                            data: [product1.ecoScore, product1.durability, product1.price, product1.recyclability],
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                        },
                        {
                            label: product2.name,
                            data: [product2.ecoScore, product2.durability, product2.price, product2.recyclability],
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgba(255, 99, 132, 1)',
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        r: {
                            suggestedMin: 0,
                            suggestedMax: 10
                        }
                    }
                }
            });
        }

        document.getElementById('carbonFootprintForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const electricityUsage = parseFloat(document.getElementById('electricityUsage').value);
            const gasUsage = parseFloat(document.getElementById('gasUsage').value);
            const carMileage = parseFloat(document.getElementById('carMileage').value);

            const electricityEmissions = electricityUsage * 0.92 * 12;
            const gasEmissions = gasUsage * 11.7 * 12;
            const carEmissions = carMileage * 0.87;

            const totalEmissions = electricityEmissions + gasEmissions + carEmissions;
            const treesNeeded = totalEmissions / 48;

            const resultDiv = document.getElementById('carbonFootprintResult');
            resultDiv.innerHTML = `
                <h3>Your Estimated Carbon Footprint</h3>
                <p>Total Annual Emissions: ${totalEmissions.toFixed(2)} lbs CO2</p>
                <p>You would need to plant approximately ${Math.ceil(treesNeeded)} trees to offset your emissions.</p>
                <button onclick="showCarbonReductionTips()">Get Reduction Tips</button>
            `;

            showToast("Carbon footprint calculated!");
        });

        function showCarbonReductionTips() {
            const tips = [
                "Switch to LED light bulbs to reduce electricity consumption.",
                "Use a programmable thermostat to optimize heating and cooling.",
                "Carpool or use public transport to reduce vehicle emissions.",
                "Unplug electronics when not in use to avoid phantom energy usage.",
                "Improve your home's insulation to reduce heating and cooling needs."
            ];

            const tipsHtml = tips.map(tip => `<li>${tip}</li>`).join('');
            const tipsDiv = document.createElement('div');
            tipsDiv.innerHTML = `
                <h4>Carbon Reduction Tips</h4>
                <ul>${tipsHtml}</ul>
            `;
            document.getElementById('carbonFootprintResult').appendChild(tipsDiv);
        }

        const sustainabilityActions = {
            'Used reusable bag': 0.1,
            'Took public transport': 2.5,
            'Used renewable energy': 5,
            'Reduced plastic usage': 1.0
        };

        let totalActions = 0;
        let carbonSaved = 0;
        let completedGoals = 0;

        document.getElementById('sustainabilityActionForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const selectedAction = document.getElementById('actionSelect').value;
            addAction(selectedAction);
            updateTrackerUI();
        });

        function addAction(action) {
            totalActions++;
            carbonSaved += sustainabilityActions[action];

            if (totalActions % 5 === 0) {
                completedGoals++;
                carbonSaved += 5;
                showToast(`Congrats! You've completed a weekly goal and earned bonus carbon savings!`);
            }
        }

        function updateTrackerUI() {
            document.getElementById('totalActions').textContent = totalActions;
            document.getElementById('carbonSaved').textContent = carbonSaved.toFixed(2);
            document.getElementById('completedGoals').textContent = completedGoals;

            const progressPercent = (carbonSaved / 100) * 100;
            document.getElementById('progressCarbonSaved').style.width = `${Math.min(progressPercent, 100)}%`;
        }

        function showToast(message) {
            const toast = document.getElementById('toast');
            toast.textContent = message;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        const themeToggle = document.getElementById('theme-toggle');
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const icon = themeToggle.querySelector('i');
            icon.classList.toggle('fa-moon');
            icon.classList.toggle('fa-sun');
        });

        // New features

        // Eco-Friendly Quiz
        const quizQuestions = [
            {
                question: "Which of the following is NOT a renewable energy source?",
                options: ["Solar", "Wind", "Nuclear", "Geothermal"],
                correctAnswer: 2
            },
            {
                question: "What is the most recycled material in the world?",
                options: ["Plastic", "Glass", "Paper", "Steel"],
                correctAnswer: 3
            },
            {
                question: "Which of these actions saves the most water?",
                options: ["Taking shorter showers", "Using a dishwasher", "Fixing a leaky faucet", "Watering your lawn at night"],
                correctAnswer: 2
            }
        ];

        let currentQuestionIndex = 0;
        let quizScore = 0;

        function displayQuizQuestion() {
            const questionData = quizQuestions[currentQuestionIndex];
            const quizQuestionElement = document.getElementById('quizQuestion');
            const quizOptionsElement = document.getElementById('quizOptions');

            quizQuestionElement.textContent = questionData.question;
            quizOptionsElement.innerHTML = '';

            questionData.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.textContent = option;
                button.onclick = () => checkAnswer(index);
                quizOptionsElement.appendChild(button);
            });

            document.getElementById('quizResult').textContent = '';
            document.getElementById('nextQuizQuestion').style.display = 'none';
        }

        function checkAnswer(selectedIndex) {
            const questionData = quizQuestions[currentQuestionIndex];
            const resultElement = document.getElementById('quizResult');

            if (selectedIndex === questionData.correctAnswer) {
                resultElement.textContent = "Correct!";
                quizScore++;
            } else {
                resultElement.textContent = "Incorrect. The correct answer is: " + questionData.options[questionData.correctAnswer];
            }

            document.getElementById('nextQuizQuestion').style.display = 'block';
        }

        document.getElementById('nextQuizQuestion').addEventListener('click', () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizQuestions.length) {
                displayQuizQuestion();
            } else {
                document.getElementById('quizQuestion').textContent = `Quiz completed! Your score: ${quizScore}/${quizQuestions.length}`;
                document.getElementById('quizOptions').innerHTML = '';
                document.getElementById('quizResult').textContent = '';
                document.getElementById('nextQuizQuestion').style.display = 'none';
            }
        });

        displayQuizQuestion();

        // Leaderboard
        const leaderboardData = [
            { name: "EcoWarrior", score: 1250 },
            { name: "GreenThumb", score: 980 },
            { name: "SustainableLife", score: 875 },
            { name: "EarthDefender", score: 750 },
            { name: "RecycleHero", score: 620 }
        ];

        function updateLeaderboard() {
            const leaderboardList = document.getElementById('leaderboardList');
            leaderboardList.innerHTML = '';

            leaderboardData.forEach((entry, index) => {
                const li = document.createElement('li');
                li.textContent = `${index + 1}. ${entry.name} - ${entry.score} points`;
                leaderboardList.appendChild(li);
            });
        }

        updateLeaderboard();

        // Community Forum
        const forumPosts = [
            { author: "GreenLiving", content: "What are your favorite eco-friendly cleaning products?" },
            { author: "SustainableShopper", content: "I found a great local farmers market! Anyone else have good experiences with local produce?" }
        ];

        function displayForumPosts() {
            const forumPostsElement = document.getElementById('forumPosts');
            forumPostsElement.innerHTML = '';

            forumPosts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'forum-post';
                postElement.innerHTML = `
                    <h4>${post.author}</h4>
                    <p>${post.content}</p>
                `;
                forumPostsElement.appendChild(postElement);
            });
        }

        document.getElementById('newPostForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const newPostContent = document.getElementById('newPostContent').value;
            forumPosts.unshift({ author: "You", content: newPostContent });
            displayForumPosts();
            document.getElementById('newPostContent').value = '';
        });

        displayForumPosts();
        function displayResults(products) {
            const resultsSection = document.getElementById('results');
            resultsSection.innerHTML = '<h2>Search Results</h2>';

            if (products.length === 0) {
                resultsSection.innerHTML += '<p>No products found. Try adjusting your search or filters.</p>';
            } else {
                const productList = document.createElement('ul');
                productList.className = 'product-list';
                products.forEach(product => {
                    const li = document.createElement('li');
                    li.className = 'product-card';
                    li.innerHTML = `
                        <h3>${product.name}</h3>
                        <p>Category: ${product.category}</p>
                        <p>Eco-Score: <span class="eco-score eco-score-${getEcoScoreClass(product.ecoScore)}">${product.ecoScore}/10</span></p>
                        <p>Durability: ${product.durability}/10</p>
                        <p>Price: $${product.price}</p>
                        <p>Recyclability: ${product.recyclability}/10</p>
                        <button onclick="addToComparison('${product.name}')">Compare</button>
                    `;
                    productList.appendChild(li);
                });
                resultsSection.appendChild(productList);
            }
            resultsSection.classList.remove('hidden');
        }

        function updateComparisonDisplay() {
            const comparisonSection = document.getElementById('productComparison');
            comparisonSection.classList.remove('hidden');

            comparisonProducts.forEach((product, index) => {
                const productDiv = document.getElementById(`product${index + 1}`);
                productDiv.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>Category: ${product.category}</p>
                    <p>Eco-Score: <span class="eco-score eco-score-${getEcoScoreClass(product.ecoScore)}">${product.ecoScore}/10</span></p>
                    <p>Durability: ${product.durability}/10</p>
                    <p>Price: $${product.price}</p>
                    <p>Recyclability: ${product.recyclability}/10</p>
                    <button onclick="removeFromComparison(${index})">Remove</button>
                `;
            });

            if (comparisonProducts.length === 2) {
                displayComparisonChart(comparisonProducts[0], comparisonProducts[1]);
            }
        }

        function displayComparisonChart(product1, product2) {
            const ctx = document.getElementById('comparisonChart').getContext('2d');
            new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: ['Eco-Score', 'Durability', 'Price', 'Recyclability'],
                    datasets: [
                        {
                            label: product1.name,
                            data: [product1.ecoScore, product1.durability, product1.price, product1.recyclability],
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                        },
                        {
                            label: product2.name,
                            data: [product2.ecoScore, product2.durability, product2.price, product2.recyclability],
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgba(255, 99, 132, 1)',
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        r: {
                            suggestedMin: 0,
                            suggestedMax: 10
                        }
                    }
                }
            });
        }
