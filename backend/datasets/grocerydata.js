const groceryData = [
    {
        name: "Apple Juice",
        slug: "barvo-apple-juice",
        image: "https://assets.axfood.se/image/upload/f_auto,t_500/07310867561419_C1N1_s01",
        category: "packages",
        price: "₹79",
        countInStock: 50,
        rating: 4.5,
        description: "Ready to drink apple juice from concentrate. Fresh and sour taste. Fits the breakfast table, as quencher and meal drink.",

    },
    {
        name: "Sour Milk",
        slug: "arla-sour-milk",
        image: "https://images.deliveryhero.io/image/fd-op/NV/Formaterade%20Bilder/07310865087935.jpg?height=480",
        category: "packages",
        price: "₹99",
        countInStock: 40,
        rating: 4.8,
        description: "Classic sour milk made from Swedish milk from Arlagårdar. The flavor is slightly acidic with characteristically sour milk aroma and light creaminess. The texture is a bit thicker and the sour milk can be eaten with muesli, cereal, fruit or berries. Sour milk has a long history in Sweden - already in the Viking era you have had sour milk-like products. The brand Arla Ko guarantees that the product is made of 100% Swedish milk.",

    },
    {
        name: "Yogurt",
        slug: "arla-mild-yogurt",
        image: "https://res.cloudinary.com/coopsverige/image/upload/e_sharpen,f_auto,fl_clip,fl_progressive,q_90,c_lpad,g_center,h_660,w_660/v1631714477/cloud/234051.jpg",
        category: "packages",
        price: "₹89",
        countInStock: 30,
        rating: 3.7,
        description: "Mild and smooth vanilla yoghurt made of Swedish milk from Arlagårdar. The texture is creamy and tender, the taste soft and round. The yoghurt fits well for breakfast and snacks for the whole family. Eat it as it is or with muesli, flakes, fruit and berries. Vanilla yoghurt is also a perfect base for smoothies. The brand Arla Ko guarantees that the product is made of 100% Swedish milk.",

    },
    {
        name: "Cream",
        slug: "arla-sour-cream",
        image: "https://swedishgrocerystore.se/cdn/shop/products/Me-0.01_Graddfil_530x.jpg?v=1655379353",
        category: "packages",
        price: "₹89",
        countInStock: 20,
        rating: 4.2,
        description: "Sour cream made from fresh cream from Swedish Arlagårdar. Sour cream is a real classic that has its obvious place for both weekday and weekend. It has an acidic, creamy and fresh taste with a slightly creamy texture. The product is excellent as a natural accessory or as a base in cold sauces and dressings. With its fresh acid it softens the heat from spicy dishes. The brand Arla Ko guarantees that the product is made of 100% Swedish milk.",


    },
    {
        name: "Apple",
        slug: "apple-red",
        image: "https://media.istockphoto.com/id/470908792/photo/red-apple.webp?b=1&s=170667a&w=0&k=20&c=kNV-889kApkzIqpRvMVgJGi34dcCDoZYgj2z-NNoOOg=",
        category: "fruits",
        price: "₹120",
        countInStock: 10,
        rating: 4.3,
        description: "Red Delicious is a dark red apple with relatively soft pulp and sweet taste.",


    },
    {
        name: "Banana",
        slug: "yellow-banana",
        image: "https://m.media-amazon.com/images/I/51ebZJ+DR4L._AC_UF1000,1000_QL80_.jpg",
        category: "fruits",
        price: "₹40",
        countInStock: 90,
        rating: 4.5,
        description: "An ecologically grown banana. Bananas are good as snacks. The banana is temperature sensitive, very sensitive to dehydration, ethylene and cold damage. Store in room temperature or cool, never in a refrigerator.",


    },
    {
        name: "Orange",
        slug: "orange-orange",
        image: "https://tiimg.tistatic.com/fp/1/007/144/natural-fresh-orange-fruits-433.jpg",
        category: "fruits",
        price: "₹112",
        countInStock: 50,
        rating: 4.0,
        description: "There are many different types of oranges that ripen and is sold during different parts of the year. The orange is a very important vitamin C source and the vitamins are best kept if the fruit is eaten naturally.",


    },
    {
        name: "Mango",
        slug: "mango-green",
        image: "https://m.media-amazon.com/images/I/41EvGpCFECL._AC_UF1000,1000_QL80_.jpg",
        category: "fruits",
        price: "₹119",
        countInStock: 10,
        rating: 4.9,
        description: "Mango has a fresh, powerful and sweet taste, but a special exotic shade. Inside there is a large, oval kernel in which the pulp is grown in. This makes the best way to cut mango is with the shell on. Divide the fruit by cutting along on both sides of the core. Mango can be eaten naturally or in desserts, entrees and main courses.",


    },
    {
        name: "Cabage",
        slug: "fresh-cabage",
        image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/284/284823/one-big-cabbage.jpg",
        category: "vegetables",
        price: "₹89",
        countInStock: 30,
        rating: 4.1,
        description: "White cabbage can be used as a raw food, but it also fits well in for example cabbage rolls, cabbage pudding, cabbage soup, etc. ",


    },
    {
        name: "Potato",
        slug: "brown-potato",
        image: "https://m.media-amazon.com/images/I/61LikZe08nL._AC_UF350,350_QL80_.jpg",
        category: "vegetables",
        price: "₹79",
        countInStock: 150,
        rating: 4.9,
        description: "Solid potatoes. A good allround potato that fits well most of the time.",

    },
    {
        name: "Onion",
        slug: "yellow-onion",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJQ1TDVZ90nxrNXBBaSj27evJD4Y1YoBm4rwE83_xiOWJ-FgWf_mLVO0kb04iaXo-STcc&usqp=CAU",
        category: "vegetables",
        price: "₹49",
        countInStock: 100,
        rating: 4.6,
        description: "Yellow onion is a good flavoring. Fits well both cold and hot in cooking.",


    },
    {
        name: "Tomato",
        slug: "red-tomato",
        image: "https://img.freepik.com/free-photo/tomatoes_144627-15413.jpg?w=2000",
        category: "vegetables",
        price: "₹99",
        countInStock: 80,
        rating: 4.7,
        description: "Round and fine tomatoes from Sweden. Rinse and have in the salad or on the sandwich.",

    },
]


export default groceryData;