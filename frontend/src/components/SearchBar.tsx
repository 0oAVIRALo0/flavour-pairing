import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div className="relative w-full max-w-xl">
      <input
        type="text"
        placeholder="Search ingredients..."
        className="w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-blue-500"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
    </div>
  );
};

export default SearchBar;