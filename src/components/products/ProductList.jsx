import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products, categories } from '../../data/mockData';

const ProductList = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeFilters, setActiveFilters] = useState({
    colors: [],
    sizes: [],
    priceRange: null
  });
  const [sortBy, setSortBy] = useState('featured');

  // Filter and sort products
  useEffect(() => {
    let filtered = products;
    
    // Apply category filter
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    // Apply active filters
    if (activeFilters.colors.length) {
      filtered = filtered.filter(product => 
        product.colors.some(color => activeFilters.colors.includes(color))
      );
    }
    if (activeFilters.sizes.length) {
      filtered = filtered.filter(product => 
        product.sizes.some(size => activeFilters.sizes.includes(size))
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered = filtered.filter(p => p.isNew).concat(filtered.filter(p => !p.isNew));
        break;
      default:
        // featured sorting logic would go here
        break;
    }

    setFilteredProducts(filtered);
  }, [category, activeFilters, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-light text-allbirds-charcoal">
          {category ? categories[category]?.title : 'All Products'}
        </h1>
        <div className="flex items-center space-x-4">
          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-allbirds-stone rounded px-3 py-2 focus:outline-none focus:border-allbirds-charcoal"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Filters and Products Grid */}
      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <div className="hidden md:block w-64 space-y-6">
          {/* Color Filter */}
          <div>
            <h3 className="text-lg font-medium text-allbirds-charcoal mb-4">Colors</h3>
            <div className="space-y-2">
              {/* Add color filter options */}
            </div>
          </div>

          {/* Size Filter */}
          <div>
            <h3 className="text-lg font-medium text-allbirds-charcoal mb-4">Sizes</h3>
            <div className="grid grid-cols-3 gap-2">
              {/* Add size filter options */}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;