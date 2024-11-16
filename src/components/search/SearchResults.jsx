import { useSearchParams } from 'react-router-dom';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  // This is where I would normally fetch search results based on the query
  // For now,I will just show the query

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-light text-allbirds-charcoal mb-6">
        Search Results for "{query}"
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Add my search results here */}
        <p className="text-allbirds-gray">No results found. Try a different search term.</p>
      </div>
    </div>
  );
};

export default SearchResults;