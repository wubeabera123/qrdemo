"use client";

import { useState } from "react";
import { menuItems } from "@/data/menu";
import MenuItem from "@/components/MenuItem";
import CategoryTabs from "@/components/CategoryTabs";

export default function Home() {
  const categories = ["All", ...new Set(menuItems.map((i) => i.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-black text-white py-10 px-6 text-center">
        <h1 className="text-4xl font-bold tracking-wide">Bella Vista</h1>
        <p className="text-gray-300 mt-2">Fine Dining Experience</p>
      </div>

      {/* Menu Section */}
      <div className="max-w-2xl mx-auto p-6 -mt-8">
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-semibold">Our Menu</h2>
            <p className="text-gray-500 text-sm mt-1">Scan. Order. Enjoy.</p>
          </div>

          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />

          <div className="space-y-4 mt-4 fade-in">
            {" "}
            {filteredItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
