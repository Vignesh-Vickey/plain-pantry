import { Product, Category } from '@/types';
import headphonesImg from '@/assets/headphones.jpg';
import smartwatchImg from '@/assets/smartwatch.jpg';
import tshirtImg from '@/assets/tshirt.jpg';
import coffeeImg from '@/assets/coffee.jpg';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.',
    price: 199.99,
    image: headphonesImg,
    category: 'Electronics',
    stock: 25,
    featured: true
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking with heart rate monitoring, GPS, and smartphone integration. Water resistant up to 50m.',
    price: 299.99,
    image: smartwatchImg,
    category: 'Electronics',
    stock: 15,
    featured: true
  },
  {
    id: 3,
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable and sustainable organic cotton t-shirt. Available in multiple colors and sizes.',
    price: 29.99,
    image: tshirtImg,
    category: 'Clothing',
    stock: 50,
    featured: false
  },
  {
    id: 4,
    name: 'Premium Coffee Beans',
    description: 'Single-origin Ethiopian coffee beans, expertly roasted for the perfect cup. 1kg bag.',
    price: 24.99,
    image: coffeeImg,
    category: 'Food',
    stock: 30,
    featured: true
  },
  {
    id: 5,
    name: 'Leather Laptop Bag',
    description: 'Handcrafted genuine leather laptop bag with multiple compartments. Fits up to 15-inch laptops.',
    price: 149.99,
    image: '/api/placeholder/400/400',
    category: 'Accessories',
    stock: 12,
    featured: false
  },
  {
    id: 6,
    name: 'Yoga Mat Pro',
    description: 'Non-slip yoga mat with excellent grip and cushioning. Made from eco-friendly materials.',
    price: 79.99,
    image: '/api/placeholder/400/400',
    category: 'Sports',
    stock: 20,
    featured: false
  }
];

export const categories: Category[] = [
  {
    id: 1,
    name: 'Electronics',
    slug: 'electronics',
    image: '/api/placeholder/300/200'
  },
  {
    id: 2,
    name: 'Clothing',
    slug: 'clothing',
    image: '/api/placeholder/300/200'
  },
  {
    id: 3,
    name: 'Food',
    slug: 'food',
    image: '/api/placeholder/300/200'
  },
  {
    id: 4,
    name: 'Accessories',
    slug: 'accessories',
    image: '/api/placeholder/300/200'
  },
  {
    id: 5,
    name: 'Sports',
    slug: 'sports',
    image: '/api/placeholder/300/200'
  }
];