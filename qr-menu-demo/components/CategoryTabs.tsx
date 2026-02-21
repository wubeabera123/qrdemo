type Props = {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
};

export default function CategoryTabs({
  categories,
  activeCategory,
  onSelect,
}: Props) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 mb-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition ${
            activeCategory === category
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}