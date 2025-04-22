import React, { useState } from "react";
import { Search, ExternalLink, Link } from "lucide-react";
import ForceGraph3D from "./components/ForceGraph";
import ThemeToggle from "./components/ThemeToggle";
import { useTheme } from "./context/ThemeContext";

const mockData = {
  entityId: "190",
  topSimilarEntities: [
    {
      entity_name: "Tea",
      category: "Plant",
      similar_molecules: 182,
      wikipedia: "https://en.wikipedia.org/wiki/Tea",
    },
    {
      entity_name: "Guava",
      category: "Fruit",
      similar_molecules: 163,
      wikipedia: "https://en.wikipedia.org/wiki/Guava",
    },
    {
      entity_name: "Apple",
      category: "Fruit",
      similar_molecules: 160,
      wikipedia: "https://en.wikipedia.org/wiki/Apple",
    },
    {
      entity_name: "Tomato",
      category: "Vegetable Fruit",
      similar_molecules: 160,
      wikipedia: "https://en.wikipedia.org/wiki/Tomato",
    },
    {
      entity_name: "Grape",
      category: "Fruit",
      similar_molecules: 155,
      wikipedia: "https://en.wikipedia.org/wiki/Grape",
    },
    {
      entity_name: "Strawberry",
      category: "Berry",
      similar_molecules: 155,
      wikipedia: "https://en.wikipedia.org/wiki/Strawberry",
    },
    {
      entity_name: "Apricot",
      category: "Fruit",
      similar_molecules: 150,
      wikipedia: "https://en.wikipedia.org/wiki/Apricot",
    },
    {
      entity_name: "Cocoa",
      category: "Seed",
      similar_molecules: 149,
      wikipedia: "https://en.wikipedia.org/wiki/Theobroma_cacao",
    },
    {
      entity_name: "Passionfruit",
      category: "Fruit",
      similar_molecules: 149,
      wikipedia: "https://en.wikipedia.org/wiki/Passiflora_edulis",
    },
    {
      entity_name: "Orange",
      category: "Fruit",
      similar_molecules: 147,
      wikipedia: "https://en.wikipedia.org/wiki/Orange_(fruit)",
    },
  ],
};

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
  const [foodPairingsNormalised, setFoodPairingsNormalised] =
    useState<any>(null);
  const [foodPairings, setFoodPairings] = useState<any>(null);
  const [loadingFoodPairings, setLoadingFoodPairings] = useState(false);
  const [foodPairingsError, setFoodPairingsError] = useState<string | null>(
    null
  );

  const { theme } = useTheme();

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Top Bar */}
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
        </div>
      </div>

      {/* Main Layout */}
      <div
        className={`flex pt-20 h-[calc(100vh-1rem)] transition-all duration-300 ${
          foodPairings ? "flex-row" : "flex-col"
        }`}
      >
        {/* Left Panel */}
        <div
          className={`${
            foodPairings
              ? "w-1/3 border-r border-gray-200 dark:border-gray-700"
              : "w-full"
          } h-full p-6 flex flex-col transition-all duration-300`}
        >
          <div className="space-y-4 h-full overflow-y-auto">
            {searchResults.map((result) => (
              <div
                key={result.entity_id}
                className={`p-4 rounded-lg cursor-pointer transition-all relative ${
                  selectedIngredient === result.entity_alias_synonyms
                    ? "bg-blue-50 dark:bg-blue-900/50 border-blue-200 dark:border-blue-800"
                    : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                } border dark:border-gray-700`}
              >
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
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mr-10">
                  {result.entity_alias_synonyms}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {result.category}
                </p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 mr-10">
                  Natural source of{" "}
                  <span className="font-semibold">
                    {result.entity_alias_synonyms}
                  </span>
                  :{" "}
                  <span className="font-bold">
                    {result.natural_source_name || "Unknown source"}
                  </span>
                </p>
                <button
                  onClick={async (e) => {
                    e.stopPropagation();
                    setSelectedIngredient(result.entity_alias_synonyms);
                    setFoodPairings(null);
                    setFoodPairingsError(null);
                    setLoadingFoodPairings(true);
                    try {
                      const data =
                        result.entity_alias_synonyms.toLowerCase() === "mango"
                          ? mockData
                          : { topSimilarEntities: [] };

                      const transformed = {
                        nodes: [
                          {
                            id: result.entity_alias_synonyms,
                            name: result.entity_alias_synonyms,
                            group: result.category,
                            val: 5,
                          },
                          ...data.topSimilarEntities.map((e: any) => ({
                            id: e.entity_name,
                            name: e.entity_name,
                            group: e.category,
                            val: e.similar_molecules,
                          })),
                        ],
                        links: data.topSimilarEntities.map((e: any) => ({
                          source: result.entity_alias_synonyms,
                          target: e.entity_name,
                          commonMol: e.similar_molecules,
                          value: e.similar_molecules,
                        })),
                      };

                      setFoodPairings(transformed);

                      const transformedNormalised = {
                        nodes: [
                          {
                            id: result.entity_alias_synonyms,
                            name: result.entity_alias_synonyms,
                            group: result.category,
                            val: 5,
                          },
                          ...data.topSimilarEntities.map((e: any) => ({
                            id: e.entity_name,
                            name: e.entity_name,
                            group: e.category,
                            val: Math.round(e.similar_molecules / 30),
                          })),
                        ],
                        links: data.topSimilarEntities.map((e: any) => ({
                          source: result.entity_alias_synonyms,
                          target: e.entity_name,
                          commonMol: e.similar_molecules,
                          value: Math.round(e.similar_molecules / 30),
                        })),
                      };

                      setFoodPairingsNormalised(transformedNormalised);
                    } catch (err: unknown) {
                      if (err instanceof Error) {
                        setFoodPairingsError(err.message);
                      } else {
                        setFoodPairingsError("An unknown error occurred.");
                      }
                    } finally {
                      setLoadingFoodPairings(false);
                    }
                  }}
                  className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-md focus:outline-none"
                  title="Pair it"
                >
                  <Link size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Pairings */}
        {foodPairings && (
          <div className="w-2/3 p-6 h-full transition-all duration-300">
            <div className="h-full flex flex-col overflow-y-auto">
              <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6 transition-colors">
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
                  Food Pairings ({foodPairings.nodes.length - 1} results)
                </h2>
                <div className="mb-6">
                  <ForceGraph3D
                    data={foodPairingsNormalised}
                    mainNode={selectedIngredient || ""}
                    isDark={theme === "dark"}
                    onNodeClick={(node: any) => {
                      setSelectedIngredient(node?.id || null);
                    }}
                    width={1000}
                    height={400}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {foodPairings.links.map((link: any, index: number) => (
                    <a
                      key={index}
                      href={`https://en.wikipedia.org/wiki/${encodeURIComponent(
                        link.target
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                          {typeof link.target === "object"
                            ? link.target.id
                            : link.target}
                        </span>
                        <span className="text-blue-600 dark:text-blue-400">
                          {link.value} shared molecules
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Category:{" "}
                        {
                          foodPairings.nodes.find(
                            (n: any) =>
                              n.id ===
                              (typeof link.target === "object"
                                ? link.target.id
                                : link.target)
                          )?.group
                        }
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              {loadingFoodPairings && (
                <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                  Loading food pairings...
                </div>
              )}
              {foodPairingsError && (
                <div className="p-4 text-center text-red-500 dark:text-red-400">
                  Error: {foodPairingsError}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

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

// import React, { useState } from "react";
// import { Search } from "lucide-react";
// import ForceGraph3D from "./components/ForceGraph";
// import ThemeToggle from "./components/ThemeToggle";
// import { useTheme } from "./context/ThemeContext";

// // Mock data - replace with actual API calls
// const mockGraphData = {
//   nodes: [
//     { id: "Vanillin", name: "Vanillin", group: "sweet", val: 1 },
//     { id: "Limonene", name: "Limonene", group: "fruity", val: 1 },
//     { id: "Geraniol", name: "Geraniol", group: "floral", val: 1 },
//     { id: "Citral", name: "Citral", group: "fruity", val: 1 },
//     { id: "Cinnamon", name: "Cinnamon", group: "spicy", val: 1 }
//   ],
//   links: [
//     { source: "Vanillin", target: "Limonene", value: 1 },
//     { source: "Vanillin", target: "Geraniol", value: 1 },
//     { source: "Vanillin", target: "Citral", value: 1 },
//     { source: "Vanillin", target: "Cinnamon", value: 1 }
//   ],
// };

// // Mock search results
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

// function App() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedIngredient, setSelectedIngredient] = useState<string | null>(
//     null
//   );
//   const { theme } = useTheme();

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleIngredientSelect = (id: number) => {
//     setSelectedIngredient(mockResults[id - 1].name);
//   };

//   const getPairedIngredients = () => {
//     if (!selectedIngredient) return [];

//     const pairs = new Set<string>();
//     mockGraphData.links.forEach((link) => {
//       if (link.source === selectedIngredient) {
//         pairs.add(link.target);
//       }
//       if (link.target === selectedIngredient) {
//         pairs.add(link.source);
//       }
//     });

//     return Array.from(pairs).map((pair) => {
//       const node = mockGraphData.nodes.find((node) => node.id === pair);
//       return {
//         id: node?.id || pair,
//         name: node?.name || pair,
//         value: mockGraphData.links.find(
//           (l) =>
//             (l.source === selectedIngredient && l.target === pair) ||
//             (l.target === selectedIngredient && l.source === pair)
//         )?.value,
//       };
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
//       {/* Search Bar */}
//       <div className="w-full bg-white dark:bg-gray-800 shadow-sm p-4 fixed top-0 z-10 transition-colors">
//         <div className="max-w-7xl mx-auto relative flex items-center">
//           <input
//             type="text"
//             placeholder="Search ingredients..."
//             className="w-full px-4 py-3 pr-10 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
//             value={searchQuery}
//             onChange={handleSearch}
//           />
//           <Search
//             className="absolute left-[calc(100%-5.75rem)] top-3.5 text-gray-400 dark:text-gray-500 pointer-events-none"
//             size={20}
//           />
//           <div className="ml-4">
//             <ThemeToggle />
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="pt-20 flex h-[calc(100vh-5rem)]">
//         {/* Left Panel - Search Results (1/3 width) */}
//         <div className="w-1/3 p-6 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
//           <div className="space-y-4">
//             {mockResults.map((result) => (
//               <div
//                 key={result.id}
//                 className={`p-4 rounded-lg cursor-pointer transition-all ${
//                   selectedIngredient === result.name
//                     ? "bg-blue-50 dark:bg-blue-900/50 border-blue-200 dark:border-blue-800"
//                     : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
//                 } border dark:border-gray-700`}
//                 onClick={() => handleIngredientSelect(result.id)}
//               >
//                 <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
//                   {result.name}
//                 </h3>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                   {result.category}
//                 </p>
//                 <p className="mt-1 text-gray-600 dark:text-gray-300">
//                   {result.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Panel - Visualizations (2/3 width) */}
//         <div className="w-2/3 p-6 h-[calc(100vh-5rem)]">
//           {selectedIngredient ? (
//             <div className="h-full flex flex-col">
//               {/* Top Half - Molecular Pairings */}
//               <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6 transition-colors overflow-y-auto">
//                 <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
//                   Molecular Pairings ({getPairedIngredients().length} results)
//                 </h2>
//                 <div className="flex flex-wrap gap-3">
//                   {getPairedIngredients().map((pair) => (
//                     <button
//                       key={pair.id}
//                       onClick={() => setSelectedIngredient(pair.id)}
//                       className="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
//                       title={`Shared molecules: ${pair.value}`}
//                     >
//                       {pair.name} ({pair.value})
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Bottom Half - Molecule Viewer */}
//               <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 transition-colors flex flex-col">
//                 <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
//                   Molecular Structure: {selectedIngredient}
//                 </h2>
//                 <div className="flex-1 min-h-[300px]">
//                   <ForceGraph3D
//                     data={mockGraphData}
//                     isDark={theme === "dark"}
//                     onNodeClick={(nodeId: string) =>
//                       setSelectedIngredient(nodeId)
//                     }
//                     width={1000}
//                     height={500}
//                   />
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
//               Select an ingredient to view molecular details
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
