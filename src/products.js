const products = [
    {
        name: "Women's Floral Print Dress1",
        slug: "womens-floral-print-dress23",
        category: "Dresses",
        image: "https://storage.googleapis.com/kagglesdsdata/datasets/139630/329006/fashion-dataset/images/10003.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20230923%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230923T013818Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=74bff6b7ab1bb7f8f2a39a96abc34b38206a02a9d125c2ed651032a001ce588015d566e08821d333422e51e0700bf54ee3e4d96714e493593cde5a96882bc3589647a26fb4a7eb2501268e20e6a789b9828cc6b840231e3857b7525d7845993decafdb5e45504969827271fbd699589fddb8c6bd989ae85997478d286c6f82a1b0b3d5714fa3fca58015c0a5aa72fef74daa5c409f1d87cf577faecdb6703592235ecf38ec22997e32928d59ab4e5487db2f698edb4064d00bbe081a40030b8581aa625e0916c50af287a4d920abce8aa7934f2861f89e73b2a6e23a0c83e0166e650f73e540b4222fec871af23c2ca84a850e8a077ada8e158b46014412dd6a",
        price: 49.99,
        countInStock: 100,
        brand: "Fashionista",
        rating: 4.5,
        numReviews: 25,
        description: "A beautiful floral print dress for women. Perfect for any occasion."
    },
    {
        name: "Women's Floral Print Dress2",
        slug: "womens-floral-print-dress45",
        category: "Dresses",
        image: "https://storage.googleapis.com/kagglesdsdata/datasets/139630/329006/fashion-dataset/images/10016.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20230923%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230923T013818Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=d05b1a6c8f16f67600cf5a05af2577880901e4e1ef1fbdba9ea5d1f5c859805098f2417ea247be6678d4bc268960b1d2f4f69324d261e89ac554fb961caf0b263e07677b0c2eb27a001fbb1105240e05a0728dbe0311f57a03fa09b6ab87c3599548c0e9aea0a1108cb2e9c87c12429edbf357f351cd3ce89068fb1ef1cb06f8542a75ba6c105fbb0c07f0909164dbf1172c4e2dba356080db92a535c07870f5a03afb4dedbd1e07423bd8e330990fa87d69e01b6d044abffac37796700be758492858aaed2efcb053953fdeabd05555b2800ba1bfdffa6319561c311b67476c1f314aac39edfece62946533cb93df49b6ec58b6d5091626354cece357fe1f35",
        price: 49.99,
        countInStock: 100,
        brand: "Fashionista",
        rating: 4.5,
        numReviews: 25,
        description: "A beautiful floral print dress for women. Perfect for any occasion."
    },
    {
        name: "Women's Floral Print Dress3",
        slug: "womens-floral-print-dress67",
        category: "Dresses",
        image: "https://storage.googleapis.com/kagglesdsdata/datasets/139630/329006/fashion-dataset/images/10029.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20230923%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230923T013818Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=04e1c0599c4a67af9f880852042c20676bfe76d1783c91f4eb5a99322437a50bf872abb49211cba85e837405190540e3c9e7375c2fb561c8ee697cf5dd63a11523cf07117b0b0c66526f76be1cfaed3f1553b6fcda23faf1a5ae0a2f56dfa662df11feae9208bcbdee513ff85dd91a911a65c2d9c74308da65d2ecabdfd5edc0efd3324876fb335bf11b793a6aeebdb2c20201c0425d0286d0ab2aca5c6c8188cf9550721e1ceb0e84460f67043db287878cd87be3719321e2400e60ff7f6f33f8e0371d16fd96124a9b4261e3d8612aec5d7e963fa3ac875e7eeb74cc53a44574add6c635add1805c609e9b15cb3c8411e46d80750a8ab648d5ea2bd3290280",
        price: 49.99,
        countInStock: 100,
        brand: "Fashionista",
        rating: 4.5,
        numReviews: 25,
        description: "A beautiful floral print dress for women. Perfect for any occasion."
    },
    {
        name: "Women's Floral Print Dress4",
        slug: "womens-floral-print-dress89",
        category: "Dresses",
        image: "https://storage.googleapis.com/kagglesdsdata/datasets/139630/329006/fashion-dataset/images/10028.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20230923%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230923T013818Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=75b47fb25f2d86d2fe7d69c19f8f6bb7ffc35264d6971f73ede11212627f30d395ca46e922242823f45ec5c863a191a4420f53c324d401a0f7f9e57692dae6e5416128461d8a1e62a7f220c5861766bc79107d3955f0747b2dede72a6f7af2e2c555db513f4c1de30b0b1f7549956e9f10bef239fbce298378aad25df165ee1e17e00dd97495a829aa566adc607cc302c464413443a1377f1e39d2b6f6ee637f4eeacec61c40d5648b75462648f1e27963cdff232996fca6f1c3d9ef69f907638e72749eebde56d94edaeb53703ad2ba067271905ea60993294ee231c800341f2653e61b77b6df52a6ce5cd13d75a61a4be5f11edb5e677ea3c6c6dc36bba774",
        price: 49.99,
        countInStock: 100,
        brand: "Fashionista",
        rating: 4.5,
        numReviews: 25,
        description: "A beautiful floral print dress for women. Perfect for any occasion."
    },
    {
        name: "Chaddi5",
        slug: "chaddi",
        category: "Dresses",
        image: "https://m.media-amazon.com/images/I/61xKClDY3AL._SX522_.jpg",
        price: 49.99,
        countInStock: 100,
        brand: "Fashionista",
        rating: 4.5,
        numReviews: 25,
        description: "A beautiful floral print dress for women. Perfect for any occasion."
    },

];

export default products;

