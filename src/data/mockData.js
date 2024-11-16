export const products = [
    {
      id: 1,
      name: "Wool Runner",
      category: "men",
      subCategory: "running-shoes",
      price: 98.00,
      colors: ["Natural White", "Natural Gray", "Natural Black", "Natural Beige"],
      sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
      images: [
        "/shoe-white.png",
        "/shoe-gray.png",
        "/shoe-black.png",
        "/shoe-beige.png"
      ],
      description: "Our iconic everyday sneaker made with superfine ZQ Merino Wool.",
      features: [
        "Comfortable and versatile",
        "Moisture-wicking",
        "Minimizes odor",
        "Machine washable"
      ],
      isNew: true,
      isSale: false,
      salePrice: null
    },
  ];
  
  export const categories = {
    men: {
      title: "Men's Collection",
      categories: [
        { name: "Running Shoes", slug: "running-shoes" },
        { name: "Everyday Sneakers", slug: "everyday-sneakers" },
        { name: "Slip-Ons", slug: "slip-ons" },
        { name: "High Tops", slug: "high-tops" }
      ]
    },
    women: {
      title: "Women's Collection",
      categories: [
        { name: "Running Shoes", slug: "running-shoes" },
        { name: "Everyday Sneakers", slug: "everyday-sneakers" },
        { name: "Slip-Ons", slug: "slip-ons" },
        { name: "High Tops", slug: "high-tops" }
      ]
    }
  };