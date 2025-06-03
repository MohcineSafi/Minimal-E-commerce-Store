
import { Product } from '@/contexts/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    category: 'Electronics',
    description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.',
    inStock: true,
  },
  {
    id: '2',
    name: 'Minimalist Watch',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop',
    category: 'Accessories',
    description: 'Elegant minimalist watch with Swiss movement and leather strap.',
    inStock: true,
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    category: 'Clothing',
    description: 'Soft organic cotton t-shirt in classic fit. Sustainably made.',
    inStock: true,
  },
  {
    id: '4',
    name: 'Leather Backpack',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    category: 'Accessories',
    description: 'Handcrafted leather backpack with laptop compartment and multiple pockets.',
    inStock: true,
  },
  {
    id: '5',
    name: 'Smartphone Case',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1601593346740-925612772716?w=400&h=400&fit=crop',
    category: 'Electronics',
    description: 'Protective smartphone case with wireless charging compatibility.',
    inStock: false,
  },
  {
    id: '6',
    name: 'Ceramic Mug',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop',
    category: 'Home',
    description: 'Handmade ceramic mug perfect for your morning coffee.',
    inStock: true,
  },
  {
    id: '7',
    name: 'Wireless Charger',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1586953295162-0c935cb0db83?w=400&h=400&fit=crop',
    category: 'Electronics',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    inStock: true,
  },
  {
    id: '8',
    name: 'Canvas Sneakers',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
    category: 'Footwear',
    description: 'Classic canvas sneakers in vintage style. Comfortable and durable.',
    inStock: true,
  },
];

export const categories = ['All', 'Electronics', 'Clothing', 'Accessories', 'Home', 'Footwear'];
