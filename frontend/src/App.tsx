import React, { useState } from "react";
import { Search, ExternalLink, Link } from "lucide-react";
// import ForceGraph3D from "./components/ForceGraph";
import ThemeToggle from "./components/ThemeToggle";
import { useTheme } from "./context/ThemeContext";

// Full mock graph data
// const mockGraphData = {
//   nodes: [
//     { id: "Vanillin", name: "Vanillin", group: "sweet", val: 3 },
//     { id: "Limonene", name: "Limonene", group: "fruity", val: 1 },
//     { id: "Geraniol", name: "Geraniol", group: "floral", val: 1 },
//     { id: "Citral", name: "Citral", group: "fruity", val: 1 },
//     { id: "Cinnamon", name: "Cinnamon", group: "spicy", val: 2 },
//     { id: "Nutmeg", name: "Nutmeg", group: "aromatic", val: 2 },
//   ],
//   links: [
//     { source: "Vanillin", target: "Limonene", value: 3 },
//     { source: "Vanillin", target: "Geraniol", value: 2 },
//     { source: "Vanillin", target: "Citral", value: 1 },
//     { source: "Vanillin", target: "Cinnamon", value: 2 },
//     { source: "Cinnamon", target: "Limonene", value: 1 },
//     { source: "Cinnamon", target: "Nutmeg", value: 2 },
//     { source: "Nutmeg", target: "Geraniol", value: 3 },
//     { source: "Nutmeg", target: "Citral", value: 2 },
//     { source: "Limonene", target: "Citral", value: 1 },
//     { source: "Geraniol", target: "Citral", value: 1 },
//   ],
// };

// Search result mock
// const mockResults = [
//   {
//     id: 1,
//     name: "Vanillin",
//     category: "Spice",
//     description: "Sweet, creamy flavor",
//   },
//   {
//     id: 2,
//     name: "Cinnamon",
//     category: "Spice",
//     description: "Warm, sweet spice",
//   },
//   {
//     id: 3,
//     name: "Nutmeg",
//     category: "Spice",
//     description: "Warm, aromatic spice",
//   },
// ];

interface SearchResult {
  entity_id: number;
  entity_alias_synonyms: string;
  category: string;
  natural_source_name: string;
}

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedIngredient, setSelectedIngredient] = useState<string | null>(
    null
  );
  const [pairings, setPairings] = useState([]);
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    console.log("Search query:", query);
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:3000/fetch-entities?entity=${query}`
      );
      const data = await res.json();
      console.log("API response:", data);

      if (data && Array.isArray(data)) {
        setSearchResults(data);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Search failed:", error);
      setSearchResults([]);
    }
  };

  const handleIngredientSelect = async (
    entity_id: number,
    entity_name: string
  ) => {
    setSelectedIngredient(entity_name);
    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:3000/fetch-food-pairing?id=${entity_id}`
      );
      const data = await res.json();
      console.log(data);

      setPairings(data); 
      setGraphData(data.graph); 
    } catch (error) {
      console.error("Failed to fetch pairings:", error);
      setPairings([]);
      setGraphData({ nodes: [], links: [] });
    } finally {
      setLoading(false);
    }
  };

  // const getPairedIngredients = () => {
  //   if (!selectedIngredient) return [];

  //   const pairs = new Set<string>();
  //   mockGraphData.links.forEach((link) => {
  //     const sourceId =
  //       typeof link.source === "object" ? link.source.id : link.source;
  //     const targetId =
  //       typeof link.target === "object" ? link.target.id : link.target;

  //     if (sourceId === selectedIngredient) {
  //       pairs.add(targetId);
  //     } else if (targetId === selectedIngredient) {
  //       pairs.add(sourceId);
  //     }
  //   });

  //   return Array.from(pairs).map((pair) => {
  //     const node = mockGraphData.nodes.find((node) => node.id === pair);
  //     return {
  //       id: node?.id || pair,
  //       name: node?.name || pair,
  //       value: mockGraphData.links.find((link) => {
  //         const sourceId =
  //           typeof link.source === "object" ? link.source.id : link.source;
  //         const targetId =
  //           typeof link.target === "object" ? link.target.id : link.target;
  //         return (
  //           (sourceId === selectedIngredient && targetId === pair) ||
  //           (targetId === selectedIngredient && sourceId === pair)
  //         );
  //       })?.value,
  //     };
  //   });
  // };

  // const getFilteredGraphData = () => {
  //   if (!selectedIngredient) return { nodes: [], links: [] };

  //   const connectedLinks = mockGraphData.links.filter((link) => {
  //     const sourceId =
  //       typeof link.source === "object" ? link.source.id : link.source;
  //     const targetId =
  //       typeof link.target === "object" ? link.target.id : link.target;

  //     return sourceId === selectedIngredient || targetId === selectedIngredient;
  //   });

  //   const connectedNodeIds = new Set<string>();
  //   connectedLinks.forEach((link) => {
  //     const sourceId =
  //       typeof link.source === "object" ? link.source.id : link.source;
  //     const targetId =
  //       typeof link.target === "object" ? link.target.id : link.target;

  //     connectedNodeIds.add(sourceId);
  //     connectedNodeIds.add(targetId);
  //   });

  //   const filteredNodes = mockGraphData.nodes.filter((node) =>
  //     connectedNodeIds.has(node.id)
  //   );

  //   return {
  //     nodes: filteredNodes,
  //     links: connectedLinks,
  //   };
  // };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Search Bar */}
      <div className="w-full bg-white dark:bg-gray-800 shadow-sm p-4 fixed top-0 z-10 transition-colors">
        <div className="max-w-7xl mx-auto relative flex items-center">
          <input
            type="text"
            placeholder="Search ingredients..."
            className="w-full px-4 py-3 pr-10 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            value={searchQuery}
            onChange={handleSearch}
          />
          <Search
            className="absolute left-[calc(100%-5.75rem)] top-3.5 text-gray-400 dark:text-gray-500 pointer-events-none"
            size={20}
          />
          <div className="ml-4">
            <ThemeToggle />
          </div>

          {/* 👇 Autocomplete Dropdown */}
          {/* {searchQuery.length > 0 && searchResults.length > 0 && (
            <ul className="absolute top-14 left-0 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
              {searchResults.map((result: any, idx: number) => (
                <li
                  key={idx}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100"
                  onClick={() =>
                    handleIngredientSelect(result.entity_alias_synonyms)
                  }
                >
                  {result.entity_alias_synonyms}
                </li>
              ))}
            </ul>
          )} */}

        </div>
      </div>

      {/* Main Content */}
      {/* add flex for division and h-[calc(100vh-5rem)*/}
      {/* change w-1/3 for division */}
      <div className="pt-20 h-[calc(100vh-2rem)">
        {/* Left Panel - Search Results */}
        <div className="w-full h-full p-6 border-r border-gray-200 dark:border-gray-700 flex flex-col">
          <div className="space-y-4 h-full overflow-y-auto">
            {searchResults.map((result) => (
              <div
                key={result.entity_id}
                className={`p-4 rounded-lg cursor-pointer transition-all relative ${
                  selectedIngredient === result.entity_alias_synonyms
                    ? "bg-blue-50 dark:bg-blue-900/50 border-blue-200 dark:border-blue-800"
                    : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                } border dark:border-gray-700`}
                onClick={() =>
                  handleIngredientSelect(
                    result.entity_id,
                    result.entity_alias_synonyms
                  )
                }
              >
                {/* Wikipedia Icon in Top-Right */}
                <a
                  href={`https://en.wikipedia.org/wiki/${encodeURIComponent(
                    result.entity_alias_synonyms
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-4 right-4 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  title="View on Wikipedia"
                >
                  <ExternalLink size={22} />
                </a>

                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  {result.entity_alias_synonyms}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {result.category}
                </p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Natural source of{" "}
                  <span className="font-semibold">
                    {result.entity_alias_synonyms || "this substance"}
                  </span>
                  :{" "}
                  <span className="font-bold">
                    {result.natural_source_name || "Unknown source"}
                  </span>
                </p>

                {/* Pair it Button in Bottom-Right */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const id = result.entity_id;
                    const url = `https://cosylab.iiitd.edu.in/flavordb2/food_pairing?id=${id}`;
                    window.open(url, "_blank"); 
                  }}
                  className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-md focus:outline-none"
                  title="Pair it"
                >
                  {/* Icon for Pair it button */}
                  <Link size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Visualizations */}
      </div>
    </div>
  );
}

export default App;

// Right Panel - Visualizations
/*
<div className="w-2/3 p-6 h-full">
  {selectedIngredient ? (
    <div className="h-full flex flex-col overflow-y-auto">
      // Pairings
      <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6 transition-colors overflow-y-auto">
        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
          Molecular Pairings ({getPairedIngredients().length} results)
        </h2>
        <div className="flex flex-wrap gap-3">
          {getPairedIngredients().map((pair) => (
            <button
              key={pair.id}
              onClick={() => handleIngredientSelect(pair.id)}
              className="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              title={`Shared molecules: ${pair.value}`}
            >
              {pair.name} ({pair.value})
            </button>
          ))}
        </div>
      </div>

      // Force Graph
      <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 transition-colors flex flex-col">
        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
          Molecular Structure: {selectedIngredient}
        </h2>
        <div className="flex-1 min-h-[300px]">
          <ForceGraph3D
            data={getFilteredGraphData()}
            mainNode={selectedIngredient}
            isDark={theme === "dark"}
            onNodeClick={(nodeId: string) =>
              handleIngredientSelect(nodeId)
            }
            width={1000}
            height={500}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
      Select an ingredient to view molecular details
    </div>
  )}
</div>
*/
