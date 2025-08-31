import React, { useState, useMemo } from 'react';

const PRODUCT_DATABASE = [
  { id: 1, name: 'Classic Leather Watch', category: 'Accessories', imageUrl: 'https://placehold.co/300x300/E6D2B2/5C3D2E?text=Leather+Watch' },
  { id: 2, name: 'Modern Smartwatch', category: 'Accessories', imageUrl: 'https://placehold.co/300x300/333333/FFFFFF?text=Smartwatch' },
  { id: 3, name: 'Suede Ankle Boots', category: 'Footwear', imageUrl: 'https://placehold.co/300x300/A0522D/FFFFFF?text=Ankle+Boots' },
  { id: 4, name: 'Running Sneakers', category: 'Footwear', imageUrl: 'https://placehold.co/300x300/00BFFF/FFFFFF?text=Sneakers' },
  { id: 5, name: 'Denim Jacket', category: 'Apparel', imageUrl: 'https://placehold.co/300x300/4682B4/FFFFFF?text=Denim+Jacket' },
  { id: 6, name: 'Wool Peacoat', category: 'Apparel', imageUrl: 'https://placehold.co/300x300/2F4F4F/FFFFFF?text=Peacoat' },
  { id: 7, name: 'Leather Backpack', category: 'Bags', imageUrl: 'https://placehold.co/300x300/8B4513/FFFFFF?text=Backpack' },
  { id: 8, name: 'Canvas Tote Bag', category: 'Bags', imageUrl: 'https://placehold.co/300x300/F5DEB3/000000?text=Tote+Bag' },
  { id: 9, name: 'Aviator Sunglasses', category: 'Accessories', imageUrl: 'https://placehold.co/300x300/000000/DAA520?text=Sunglasses' },
  { id: 10, name: 'Wireless Headphones', category: 'Electronics', imageUrl: 'https://placehold.co/300x300/1E1E1E/00FF7F?text=Headphones' },
  { id: 11, name: 'Ceramic Coffee Mug', category: 'Home Goods', imageUrl: 'https://placehold.co/300x300/FFFFFF/333333?text=Mug' },
  { id: 12, name: 'Stainless Steel Water Bottle', category: 'Home Goods', imageUrl: 'https://placehold.co/300x300/C0C0C0/000000?text=Bottle' },
  { id: 13, name: 'Knit Beanie', category: 'Accessories', imageUrl: 'https://placehold.co/300x300/800000/FFFFFF?text=Beanie' },
  { id: 14, name: 'Silk Scarf', category: 'Accessories', imageUrl: 'https://placehold.co/300x300/FFC0CB/000000?text=Scarf' },
  { id: 15, name: 'Graphic T-Shirt', category: 'Apparel', imageUrl: 'https://placehold.co/300x300/663399/FFFFFF?text=T-Shirt' },
  { id: 16, name: 'Tailored Chinos', category: 'Apparel', imageUrl: 'https://placehold.co/300x300/D2B48C/000000?text=Chinos' },
  { id: 17, name: 'Leather Loafers', category: 'Footwear', imageUrl: 'https://placehold.co/300x300/5C4033/FFFFFF?text=Loafers' },
  { id: 18, name: 'High-Top Canvas Shoes', category: 'Footwear', imageUrl: 'https://placehold.co/300x300/DC143C/FFFFFF?text=High-Tops' },
  { id: 19, name: 'Messenger Bag', category: 'Bags', imageUrl: 'https://placehold.co/300x300/696969/FFFFFF?text=Messenger+Bag' },
  { id: 20, name: 'Gaming Mouse', category: 'Electronics', imageUrl: 'https://placehold.co/300x300/4B0082/00FFFF?text=Gaming+Mouse' },
  { id: 21, name: 'Mechanical Keyboard', category: 'Electronics', imageUrl: 'https://placehold.co/300x300/000000/00FF00?text=Keyboard' },
  { id: 22, name: 'Scented Candle', category: 'Home Goods', imageUrl: 'https://placehold.co/300x300/FFFACD/8B4513?text=Candle' },
  { id: 23, name: 'Throw Pillow', category: 'Home Goods', imageUrl: 'https://placehold.co/300x300/4682B4/FFFFFF?text=Pillow' },
  { id: 24, name: 'Puffer Vest', category: 'Apparel', imageUrl: 'https://placehold.co/300x300/FFA500/000000?text=Vest' },
  { id: 25, name: 'Cargo Shorts', category: 'Apparel', imageUrl: 'https://placehold.co/300x300/556B2F/FFFFFF?text=Shorts' },
  { id: 26, name: 'Leather Belt', category: 'Accessories', imageUrl: 'https://placehold.co/300x300/8B4513/FFFFFF?text=Belt' },
  { id: 27, name: 'Silver Chain Necklace', category: 'Accessories', imageUrl: 'https://placehold.co/300x300/C0C0C0/000000?text=Necklace' },
  { id: 28, name: 'Hiking Boots', category: 'Footwear', imageUrl: 'https://placehold.co/300x300/8B4513/DAA520?text=Hiking+Boots' },
  { id: 29, name: 'Flip-Flops', category: 'Footwear', imageUrl: 'https://placehold.co/300x300/00CED1/000000?text=Flip-Flops' },
  { id: 30, name: 'Duffel Bag', category: 'Bags', imageUrl: 'https://placehold.co/300x300/00008B/FFFFFF?text=Duffel+Bag' },
  { id: 31, name: 'Laptop Sleeve', category: 'Bags', imageUrl: 'https://placehold.co/300x300/2F4F4F/FFFFFF?text=Laptop+Sleeve' },
  { id: 32, name: 'Portable Speaker', category: 'Electronics', imageUrl: 'https://placehold.co/300x300/FF4500/FFFFFF?text=Speaker' },
  { id: 33, name: 'Webcam', category: 'Electronics', imageUrl: 'https://placehold.co/300x300/1C1C1C/FFFFFF?text=Webcam' },
  { id: 34, name: 'Desk Lamp', category: 'Home Goods', imageUrl: 'https://placehold.co/300x300/F0E68C/000000?text=Lamp' },
  { id: 35, name: 'Picture Frame', category: 'Home Goods', imageUrl: 'https://placehold.co/300x300/DEB887/333333?text=Frame' },
  { id: 36, name: 'Trench Coat', category: 'Apparel', imageUrl: 'https://placehold.co/300x300/F5F5DC/000000?text=Trench+Coat' },
  { id: 37, name: 'Polo Shirt', category: 'Apparel', imageUrl: 'https://placehold.co/300x300/008080/FFFFFF?text=Polo' },
  { id: 38, name: 'Wool Socks', category: 'Accessories', imageUrl: 'https://placehold.co/300x300/778899/FFFFFF?text=Socks' },
  { id: 39, name: 'Leather Gloves', category: 'Accessories', imageUrl: 'https://placehold.co/300x300/36454F/FFFFFF?text=Gloves' },
  { id: 40, name: 'Brogue Shoes', category: 'Footwear', imageUrl: 'https://placehold.co/300x300/A0522D/FFFFFF?text=Brogues' },
  { id: 41, name: 'Boat Shoes', category: 'Footwear', imageUrl: 'https://placehold.co/300x300/000080/FFFFFF?text=Boat+Shoes' },
  { id: 42, name: 'Crossbody Bag', category: 'Bags', imageUrl: 'https://placehold.co/300x300/BDB76B/000000?text=Crossbody' },
  { id: 43, name: 'Fanny Pack', category: 'Bags', imageUrl: 'https://placehold.co/300x300/FF69B4/FFFFFF?text=Fanny+Pack' },
  { id: 44, name: 'External Hard Drive', category: 'Electronics', imageUrl: 'https://placehold.co/300x300/808080/FFFFFF?text=HDD' },
  { id: 45, name: 'USB-C Hub', category: 'Electronics', imageUrl: 'https://placehold.co/300x300/D3D3D3/000000?text=USB+Hub' },
  { id: 46, 'name': 'Coasters (Set of 4)', 'category': 'Home Goods', 'imageUrl': 'https://placehold.co/300x300/CD853F/FFFFFF?text=Coasters' },
  { id: 47, name: 'Wall Clock', category: 'Home Goods', imageUrl: 'https://placehold.co/300x300/FDF5E6/000000?text=Clock' },
  { id: 48, name: 'Hoodie', category: 'Apparel', imageUrl: 'https://placehold.co/300x300/2E2E2E/FFFFFF?text=Hoodie' },
  { id: 49, name: 'Flannel Shirt', category: 'Apparel', imageUrl: 'https://placehold.co/300x300/8B0000/FFFFFF?text=Flannel' },
  { id: 50, name: 'Tie', category: 'Accessories', imageUrl: 'https://placehold.co/300x300/000080/E6E6FA?text=Tie' },
  { id: 51, name: 'Cufflinks', category: 'Accessories', imageUrl: 'https://placehold.co/300x300/B0C4DE/000000?text=Cufflinks' }
];

const KEYWORD_TO_CATEGORY_MAP = {
    'watch': 'Accessories',
    'boot': 'Footwear',
    'sneaker': 'Footwear',
    'shoe': 'Footwear',
    'jacket': 'Apparel',
    'coat': 'Apparel',
    'shirt': 'Apparel',
    'bag': 'Bags',
    'backpack': 'Bags',
    'sunglasses': 'Accessories',
    'headphone': 'Electronics',
    'mug': 'Home Goods',
    'bottle': 'Home Goods',
    'beanie': 'Accessories',
    'scarf': 'Accessories',
    'mouse': 'Electronics',
    'keyboard': 'Electronics',
    'lamp': 'Home Goods',
    'clock': 'Home Goods',
};

const Spinner = () => (
  <div className="flex justify-center items-center p-8">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
  </div>
);

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <img 
      src={product.imageUrl} 
      alt={product.name} 
      className="w-full h-48 object-cover"
      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/300x300/CCCCCC/FFFFFF?text=Image+Error'; }}
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{product.category}</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-indigo-600 h-2.5 rounded-full" 
          style={{ width: `${product.similarity}%` }}
        ></div>
      </div>
      <p className="text-xs text-right text-gray-600 mt-1">{product.similarity}% Match</p>
    </div>
  </div>
);

export default function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [queryImage, setQueryImage] = useState(null);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [similarityFilter, setSimilarityFilter] = useState(70);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setQueryImage(reader.result);
        setUploadedFile(file); // Keep the file object
        setImageUrl(''); 
        setError('');
      };
      reader.onerror = () => {
        setError('Failed to read the uploaded file.');
        setQueryImage(null);
        setUploadedFile(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSearch = () => {
    if (!queryImage && !imageUrl) {
      setError('Please upload an image or provide an image URL.');
      return;
    }
    
    const imageToSearch = imageUrl || queryImage;
    setQueryImage(imageToSearch);
    
    setIsLoading(true);
    setResults([]);
    setError('');

    // --- ENHANCED SIMULATED AI/ML SEARCH ---
    setTimeout(() => {
      // 1. "Classify" the image based on keywords in the URL or filename.
      let detectedCategory = null;
      const searchText = uploadedFile ? uploadedFile.name.toLowerCase() : imageUrl.toLowerCase();
      
      for (const keyword in KEYWORD_TO_CATEGORY_MAP) {
        if (searchText.includes(keyword)) {
          detectedCategory = KEYWORD_TO_CATEGORY_MAP[keyword];
          break; // Stop at the first match
        }
      }

      // 2. If no keyword was found, fall back to the random category logic.
      if (!detectedCategory) {
        console.log("No keyword match, using random category.");
        detectedCategory = PRODUCT_DATABASE[Math.floor(Math.random() * PRODUCT_DATABASE.length)].category;
      } else {
        console.log(`Keyword match found! Category: ${detectedCategory}`);
      }

      // 3. Find primary and secondary matches based on the detected category.
      const primaryMatches = PRODUCT_DATABASE.filter(p => p.category === detectedCategory);
      const secondaryMatches = PRODUCT_DATABASE.filter(p => p.category !== detectedCategory);

      // 4. Assign similarity scores.
      const scoredPrimary = primaryMatches.map(product => ({
        ...product,
        similarity: Math.floor(Math.random() * (99 - 90 + 1)) + 90,
      }));
      const scoredSecondary = secondaryMatches.map(product => ({
        ...product,
        similarity: Math.floor(Math.random() * (89 - 70 + 1)) + 70,
      }));

      // 5. Combine, shuffle, and set the final results.
      const combinedResults = [
        ...scoredPrimary, 
        ...scoredSecondary.sort(() => 0.5 - Math.random())
      ].slice(0, 18);

      const finalResults = combinedResults.sort(() => 0.5 - Math.random());
      
      setResults(finalResults);
      setIsLoading(false);
    }, 1500); // Simulate a 1.5-second API call
  };

  const filteredResults = useMemo(() => {
    return results
      .filter(product => product.similarity >= similarityFilter)
      .sort((a, b) => b.similarity - a.similarity);
  }, [results, similarityFilter]);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="container mx-auto p-4 md:p-8">
        
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Visual Product Matcher</h1>
          <p className="text-lg text-gray-600 mt-2">Find similar products by uploading an image.</p>
        </header>

        <div className="bg-white p-6 rounded-xl shadow-lg mb-8 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => {
                setImageUrl(e.target.value);
                setQueryImage(null);
                setUploadedFile(null);
                setError('');
              }}
              placeholder="Enter image URL (e.g., '.../my-watch.jpg')"
              className="flex-grow w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
            <span className="text-gray-500">OR</span>
            <label className="w-full sm:w-auto px-4 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-lg cursor-pointer hover:bg-indigo-50 transition text-center font-semibold">
              Upload File
              <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
            </label>
          </div>
          <button
            onClick={handleSearch}
            disabled={isLoading}
            className="w-full mt-4 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 disabled:bg-indigo-300 disabled:cursor-not-allowed transition-all duration-300"
          >
            {isLoading ? 'Searching...' : 'Search for Similar Products'}
          </button>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </div>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <aside className="lg:col-span-1">
            <div className="bg-white p-4 rounded-xl shadow-lg sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Query Image</h2>
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                {queryImage ? (
                  <img 
                    src={queryImage} 
                    alt="Uploaded query" 
                    className="w-full h-full object-contain rounded-lg"
                    onError={(e) => {
                      setError('The provided image URL is invalid or could not be loaded.');
                      setQueryImage(null);
                    }}
                  />
                ) : (
                  <div className="text-gray-400 text-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <p>Your uploaded image will appear here</p>
                  </div>
                )}
              </div>
            </div>
          </aside>

          <div className="lg:col-span-2">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Similar Products</h2>
              {results.length > 0 && (
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <label htmlFor="similarity" className="text-sm font-medium text-gray-700">Min. Similarity:</label>
                  <input
                    type="range"
                    id="similarity"
                    min="70"
                    max="99"
                    value={similarityFilter}
                    onChange={(e) => setSimilarityFilter(Number(e.target.value))}
                    className="w-32 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-sm font-bold text-indigo-600 w-8 text-right">{similarityFilter}%</span>
                </div>
              )}
            </div>
            
            {isLoading ? (
              <Spinner />
            ) : (
              <div>
                {filteredResults.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredResults.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-xl shadow-lg">
                    <p className="text-gray-500">
                      {results.length > 0 ? 'No products match the current filter.' : 'Search results will appear here.'}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
        
        <footer className="mt-12">
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-4xl mx-auto">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Approach & Documentation</h3>
                <p className="text-gray-600">
                    This application is built with <strong>React</strong> and styled using <strong>Tailwind CSS</strong>. The "visual search" is an advanced simulation that mimics a real AI backend. It classifies the uploaded image by searching for keywords (e.g., "watch", "boot") in the file name or URL and maps them to a product category.
                </p>
                <p className="text-gray-600 mt-2">
                    This keyword-based approach provides highly relevant results without the performance overhead of running a live ML model in the browser. The system prioritizes matches from the detected category, ensuring a realistic and intelligent user experience, complete with loading states and error handling.
                </p>
            </div>
        </footer>
      </div>
    </div>
  );
}