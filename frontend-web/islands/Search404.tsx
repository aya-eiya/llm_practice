import { useState } from "preact/hooks";

export default function Search404() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setIsSearching(true);
    // Simulate search delay
    setTimeout(() => {
      window.location.href = `/?search=${encodeURIComponent(searchTerm)}`;
    }, 300);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center">
        🔍 Search for Topics
      </h2>
      <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm((e.target as HTMLInputElement).value)}
          onKeyPress={handleKeyPress}
          placeholder="Search for lessons, topics, or keywords..."
          className="flex-grow px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg"
          disabled={isSearching}
        />
        <button
          onClick={handleSearch}
          disabled={isSearching || !searchTerm.trim()}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-semibold"
        >
          {isSearching ? "Searching..." : "Search"}
        </button>
      </div>

      {/* Quick search suggestions */}
      <div className="mt-4 text-center">
        <p className="text-sm text-slate-600 mb-2">Popular searches:</p>
        <div className="flex flex-wrap justify-center gap-2">
          {["beginner", "grammar", "vocabulary", "listening", "advanced"].map((
            term,
          ) => (
            <button
              key={term}
              onClick={() => {
                setSearchTerm(term);
                setTimeout(() => handleSearch(), 100);
              }}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors"
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
