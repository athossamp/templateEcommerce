import { useState } from "react";
type DataArray = {
  available: boolean;
  category: string;
  title: string;
  cutPrice: number;
  currentPrice: number;
  image: string;
};
type CatalogFilterProps = {
  onFilterChange: (category: string, price: string) => void;
  priceOptions: DataArray[];
};
function CatalogFilter({ onFilterChange, priceOptions }: CatalogFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<string>("");

  function handleCategoryChange(category: string) {
    setSelectedCategory("");
    setSelectedCategory(category);
    onFilterChange(category, selectedPrice);
  }

  function handlePriceChange(price: string) {
    setSelectedPrice(price);
    onFilterChange(selectedCategory, price);
  }

  return (
    <div>
      <h2>Filter</h2>
      <div>
        <label>Category:</label>
        <select value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)}>
          <option value="">All</option>
          <option value="MSI Series">MSI Series</option>
          <option value="Desktop">Desktop</option>
        </select>
      </div>
      <label>Price:</label>
      <select value={selectedPrice} onChange={(e) => handlePriceChange(e.target.value)}>
        {priceOptions.map((item, index) => (
          <option key={index} value={item.currentPrice}>
            {item.currentPrice}
          </option>
        ))}
      </select>
    </div>
  );
}

export { CatalogFilter };
