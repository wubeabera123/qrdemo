import { MenuItemType } from "@/types/menu";

type Props = {
  item: MenuItemType;
};

export default function MenuItem({ item }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition hover:shadow-md">
      {item.image && (
        <div className="h-40 w-full overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        </div>
      )}

      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {item.name}
            </h3>
            {item.description && (
              <p className="text-sm text-gray-500 mt-1">
                {item.description}
              </p>
            )}
          </div>

          <span className="text-lg font-bold text-green-600">
            ${item.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}