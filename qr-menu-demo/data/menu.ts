import { MenuItemType } from "@/types/menu";

export const menuItems: MenuItemType[] = [
  {
    id: "1",
    name: "Margherita Pizza",
    description: "Fresh mozzarella, tomato sauce, basil",
    price: 12.99,
    category: "Pizza",
    image: "/pizza.jpg",
  },
  {
    id: "2",
    name: "Pepperoni Pizza",
    description: "Pepperoni, mozzarella, tomato sauce",
    price: 14.99,
    category: "Pizza",
    image: "/pepperoni-pizza.jpg",
  },
  {
    id: "3",
    name: "Caesar Salad",
    description: "Romaine lettuce, parmesan, croutons",
    price: 9.99,
    category: "Salads",
    image: "/salad.jpg",
  },
  {
    id: "4",
    name: "Grilled Chicken",
    description: "Served with vegetables and fries",
    price: 16.99,
    category: "Main Course",
    image: "/grilled-chicken.jpg",
  },
  {
    id: "5",
    name: "Coca Cola",
    description: "Chilled soft drink",
    price: 2.99,
    category: "Drinks",
    image: "/soft-drink.jpg",
  },
];