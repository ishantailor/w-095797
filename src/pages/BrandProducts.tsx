
import Layout from '@/components/Layout';
import { Link, useParams } from 'react-router-dom';
import { Star, Eye } from 'lucide-react';

const BrandProducts = () => {
  const { category, brand } = useParams();

  // Comprehensive product data for all categories with real products
  const productData = {
    laptops: {
      hp: {
        brandName: 'HP',
        products: [
          {
            id: 'hp-pavilion-15',
            name: 'HP Pavilion 15-eh2081AU',
            price: '₹49,999',
            originalPrice: '₹55,000',
            image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
            specs: ['AMD Ryzen 5 5625U', '8GB DDR4 RAM', '512GB SSD', 'Windows 11 Home'],
            rating: 4.3,
            inStock: true
          },
          {
            id: 'hp-elitebook-850',
            name: 'HP EliteBook 850 G8',
            price: '₹89,999',
            originalPrice: '₹95,000',
            image: 'https://images.unsplash.com/photo-1541807084-5b52b6ee0547?w=400&h=300&fit=crop',
            specs: ['Intel Core i7-1165G7', '16GB DDR4', '1TB SSD', 'Windows 11 Pro'],
            rating: 4.6,
            inStock: true
          },
          {
            id: 'hp-victus-16',
            name: 'HP Victus 16-e0350AX',
            price: '₹67,999',
            originalPrice: '₹72,000',
            image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
            specs: ['AMD Ryzen 5 5600H', '8GB DDR4', '512GB SSD', 'GTX 1650 4GB'],
            rating: 4.4,
            inStock: true
          },
          {
            id: 'hp-15s-eq2145au',
            name: 'HP 15s-eq2145AU',
            price: '₹38,999',
            originalPrice: '₹42,000',
            image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
            specs: ['AMD Ryzen 3 5300U', '8GB DDR4', '256GB SSD', 'Integrated Graphics'],
            rating: 4.1,
            inStock: true
          },
          {
            id: 'hp-omen-15',
            name: 'HP OMEN 15-ek1024TX',
            price: '₹89,999',
            originalPrice: '₹95,000',
            image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
            specs: ['Intel Core i5-10300H', '8GB DDR4', '512GB SSD', 'GTX 1650Ti 4GB'],
            rating: 4.5,
            inStock: true
          }
        ]
      },
      dell: {
        brandName: 'Dell',
        products: [
          {
            id: 'dell-inspiron-15-3520',
            name: 'Dell Inspiron 15 3520',
            price: '₹45,999',
            originalPrice: '₹49,000',
            image: 'https://images.unsplash.com/photo-1588702547923-7ac5ac7fb46c?w=400&h=300&fit=crop',
            specs: ['Intel Core i5-1135G7', '8GB DDR4', '512GB SSD', 'Intel Iris Xe'],
            rating: 4.2,
            inStock: true
          },
          {
            id: 'dell-xps-13-9315',
            name: 'Dell XPS 13 9315',
            price: '₹1,29,999',
            originalPrice: '₹1,35,000',
            image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop',
            specs: ['Intel Core i7-1250U', '16GB LPDDR5', '512GB SSD', 'Intel Iris Xe'],
            rating: 4.8,
            inStock: true
          },
          {
            id: 'dell-vostro-3520',
            name: 'Dell Vostro 3520',
            price: '₹52,999',
            originalPrice: '₹56,000',
            image: 'https://images.unsplash.com/photo-1588702547923-7ac5ac7fb46c?w=400&h=300&fit=crop',
            specs: ['Intel Core i5-1235U', '8GB DDR4', '512GB SSD', 'Intel UHD Graphics'],
            rating: 4.3,
            inStock: true
          },
          {
            id: 'dell-g15-5520',
            name: 'Dell G15 5520 Gaming',
            price: '₹72,999',
            originalPrice: '₹78,000',
            image: 'https://images.unsplash.com/photo-1588702547923-7ac5ac7fb46c?w=400&h=300&fit=crop',
            specs: ['Intel Core i5-12500H', '8GB DDR5', '512GB SSD', 'RTX 3050 4GB'],
            rating: 4.4,
            inStock: true
          },
          {
            id: 'dell-latitude-3520',
            name: 'Dell Latitude 3520',
            price: '₹65,999',
            originalPrice: '₹70,000',
            image: 'https://images.unsplash.com/photo-1588702547923-7ac5ac7fb46c?w=400&h=300&fit=crop',
            specs: ['Intel Core i5-1135G7', '8GB DDR4', '256GB SSD', 'Intel Iris Xe'],
            rating: 4.2,
            inStock: true
          }
        ]
      },
      lenovo: {
        brandName: 'Lenovo',
        products: [
          {
            id: 'lenovo-ideapad-3',
            name: 'Lenovo IdeaPad 3 15ITL6',
            price: '₹42,999',
            originalPrice: '₹46,000',
            image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
            specs: ['Intel Core i5-1135G7', '8GB DDR4', '256GB SSD', 'Intel Iris Xe'],
            rating: 4.1,
            inStock: true
          },
          {
            id: 'lenovo-thinkpad-e14',
            name: 'Lenovo ThinkPad E14 Gen 4',
            price: '₹68,999',
            originalPrice: '₹72,000',
            image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
            specs: ['Intel Core i5-1235U', '8GB DDR4', '512GB SSD', 'Intel Iris Xe'],
            rating: 4.5,
            inStock: true
          },
          {
            id: 'lenovo-legion-5',
            name: 'Lenovo Legion 5 15ARH7H',
            price: '₹89,999',
            originalPrice: '₹95,000',
            image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
            specs: ['AMD Ryzen 7 6800H', '16GB DDR5', '512GB SSD', 'RTX 3060 6GB'],
            rating: 4.7,
            inStock: true
          },
          {
            id: 'lenovo-yoga-7i',
            name: 'Lenovo Yoga 7i 14ITL5',
            price: '₹79,999',
            originalPrice: '₹84,000',
            image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
            specs: ['Intel Core i5-1135G7', '8GB DDR4', '512GB SSD', 'Intel Iris Xe'],
            rating: 4.4,
            inStock: true
          }
        ]
      },
      asus: {
        brandName: 'ASUS',
        products: [
          {
            id: 'asus-vivobook-15',
            name: 'ASUS VivoBook 15 X515EA',
            price: '₹44,999',
            originalPrice: '₹48,000',
            image: 'https://images.unsplash.com/photo-1541807084-5b52b6ee0547?w=400&h=300&fit=crop',
            specs: ['Intel Core i5-1135G7', '8GB DDR4', '512GB SSD', 'Intel Iris Xe'],
            rating: 4.2,
            inStock: true
          },
          {
            id: 'asus-rog-strix-g15',
            name: 'ASUS ROG Strix G15 G513RC',
            price: '₹94,999',
            originalPrice: '₹99,000',
            image: 'https://images.unsplash.com/photo-1541807084-5b52b6ee0547?w=400&h=300&fit=crop',
            specs: ['AMD Ryzen 7 6800H', '16GB DDR5', '512GB SSD', 'RTX 3050 4GB'],
            rating: 4.6,
            inStock: true
          },
          {
            id: 'asus-zenbook-14',
            name: 'ASUS ZenBook 14 UX425EA',
            price: '₹69,999',
            originalPrice: '₹74,000',
            image: 'https://images.unsplash.com/photo-1541807084-5b52b6ee0547?w=400&h=300&fit=crop',
            specs: ['Intel Core i5-1135G7', '8GB LPDDR4X', '512GB SSD', 'Intel Iris Xe'],
            rating: 4.5,
            inStock: true
          }
        ]
      }
    },
    desktops: {
      custom: {
        brandName: 'Custom Build',
        products: [
          {
            id: 'gaming-pc-rtx4060',
            name: 'Gaming PC RTX 4060 Build',
            price: '₹85,000',
            originalPrice: '₹90,000',
            image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop',
            specs: ['Intel Core i5-12400F', '16GB DDR4-3200', 'RTX 4060 8GB', '1TB NVMe SSD'],
            rating: 4.7,
            inStock: true
          },
          {
            id: 'office-pc-basic',
            name: 'Office PC Basic Build',
            price: '₹35,000',
            originalPrice: '₹38,000',
            image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop',
            specs: ['Intel Core i3-12100', '8GB DDR4', 'Integrated Graphics', '512GB SSD'],
            rating: 4.2,
            inStock: true
          },
          {
            id: 'workstation-pc',
            name: 'Workstation PC Build',
            price: '₹1,50,000',
            originalPrice: '₹1,60,000',
            image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop',
            specs: ['Intel Core i7-13700K', '32GB DDR5', 'RTX 4070 12GB', '2TB NVMe SSD'],
            rating: 4.8,
            inStock: true
          },
          {
            id: 'budget-gaming-pc',
            name: 'Budget Gaming PC',
            price: '₹55,000',
            originalPrice: '₹60,000',
            image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=300&fit=crop',
            specs: ['AMD Ryzen 5 5600G', '16GB DDR4', 'GTX 1660 Super', '500GB SSD'],
            rating: 4.4,
            inStock: true
          }
        ]
      },
      hp: {
        brandName: 'HP',
        products: [
          {
            id: 'hp-pavilion-desktop-tp01',
            name: 'HP Pavilion Desktop TP01-2014in',
            price: '₹52,999',
            originalPrice: '₹56,000',
            image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=400&h=300&fit=crop',
            specs: ['Intel Core i5-11400', '8GB DDR4', '1TB HDD + 256GB SSD', 'Windows 11'],
            rating: 4.3,
            inStock: true
          },
          {
            id: 'hp-elite-mini-800',
            name: 'HP Elite Mini 800 G9',
            price: '₹89,999',
            originalPrice: '₹95,000',
            image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=400&h=300&fit=crop',
            specs: ['Intel Core i7-12700T', '16GB DDR4', '512GB SSD', 'Windows 11 Pro'],
            rating: 4.6,
            inStock: true
          }
        ]
      },
      dell: {
        brandName: 'Dell',
        products: [
          {
            id: 'dell-optiplex-3000',
            name: 'Dell OptiPlex 3000 MT',
            price: '₹48,999',
            originalPrice: '₹52,000',
            image: 'https://images.unsplash.com/photo-1588702547923-7ac5ac7fb46c?w=400&h=300&fit=crop',
            specs: ['Intel Core i5-12500', '8GB DDR4', '1TB HDD', 'Windows 11'],
            rating: 4.2,
            inStock: true
          },
          {
            id: 'dell-precision-3660',
            name: 'Dell Precision 3660 Tower',
            price: '₹1,25,999',
            originalPrice: '₹1,30,000',
            image: 'https://images.unsplash.com/photo-1588702547923-7ac5ac7fb46c?w=400&h=300&fit=crop',
            specs: ['Intel Core i7-12700', '16GB DDR4', '512GB SSD', 'T1000 4GB'],
            rating: 4.7,
            inStock: true
          }
        ]
      }
    },
    components: {
      intel: {
        brandName: 'Intel',
        products: [
          {
            id: 'intel-i5-13600k',
            name: 'Intel Core i5-13600K',
            price: '₹26,999',
            originalPrice: '₹29,000',
            image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop',
            specs: ['14 Cores (6P+8E)', '20 Threads', '3.5GHz Base Clock', 'LGA1700 Socket'],
            rating: 4.8,
            inStock: true
          },
          {
            id: 'intel-i7-13700k',
            name: 'Intel Core i7-13700K',
            price: '₹38,999',
            originalPrice: '₹42,000',
            image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop',
            specs: ['16 Cores (8P+8E)', '24 Threads', '3.4GHz Base Clock', 'LGA1700 Socket'],
            rating: 4.9,
            inStock: true
          },
          {
            id: 'intel-i9-13900k',
            name: 'Intel Core i9-13900K',
            price: '₹58,999',
            originalPrice: '₹62,000',
            image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop',
            specs: ['24 Cores (8P+16E)', '32 Threads', '3.0GHz Base Clock', 'LGA1700 Socket'],
            rating: 4.9,
            inStock: true
          },
          {
            id: 'intel-i3-13100f',
            name: 'Intel Core i3-13100F',
            price: '₹9,999',
            originalPrice: '₹11,000',
            image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop',
            specs: ['4 Cores', '8 Threads', '3.4GHz Base Clock', 'LGA1700 Socket'],
            rating: 4.4,
            inStock: true
          }
        ]
      },
      amd: {
        brandName: 'AMD',
        products: [
          {
            id: 'amd-ryzen-7-7700x',
            name: 'AMD Ryzen 7 7700X',
            price: '₹32,999',
            originalPrice: '₹35,000',
            image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop',
            specs: ['8 Cores', '16 Threads', '4.5GHz Base Clock', 'AM5 Socket'],
            rating: 4.7,
            inStock: true
          },
          {
            id: 'amd-ryzen-5-7600x',
            name: 'AMD Ryzen 5 7600X',
            price: '₹24,999',
            originalPrice: '₹27,000',
            image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop',
            specs: ['6 Cores', '12 Threads', '4.7GHz Base Clock', 'AM5 Socket'],
            rating: 4.6,
            inStock: true
          },
          {
            id: 'amd-ryzen-9-7900x',
            name: 'AMD Ryzen 9 7900X',
            price: '₹45,999',
            originalPrice: '₹49,000',
            image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop',
            specs: ['12 Cores', '24 Threads', '4.7GHz Base Clock', 'AM5 Socket'],
            rating: 4.8,
            inStock: true
          }
        ]
      },
      nvidia: {
        brandName: 'NVIDIA',
        products: [
          {
            id: 'rtx-4060',
            name: 'NVIDIA GeForce RTX 4060',
            price: '₹31,999',
            originalPrice: '₹34,000',
            image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop',
            specs: ['8GB GDDR6', 'DLSS 3.0', 'Ray Tracing', 'PCIe 4.0'],
            rating: 4.5,
            inStock: true
          },
          {
            id: 'rtx-4070',
            name: 'NVIDIA GeForce RTX 4070',
            price: '₹58,999',
            originalPrice: '₹62,000',
            image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop',
            specs: ['12GB GDDR6X', 'DLSS 3.0', 'Ray Tracing', 'PCIe 4.0'],
            rating: 4.7,
            inStock: true
          },
          {
            id: 'rtx-4080',
            name: 'NVIDIA GeForce RTX 4080',
            price: '₹1,19,999',
            originalPrice: '₹1,25,000',
            image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop',
            specs: ['16GB GDDR6X', 'DLSS 3.0', 'Ray Tracing', 'PCIe 4.0'],
            rating: 4.8,
            inStock: true
          },
          {
            id: 'rtx-4090',
            name: 'NVIDIA GeForce RTX 4090',
            price: '₹1,64,999',
            originalPrice: '₹1,70,000',
            image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop',
            specs: ['24GB GDDR6X', 'DLSS 3.0', 'Ray Tracing', 'PCIe 4.0'],
            rating: 4.9,
            inStock: true
          }
        ]
      }
    },
    printers: {
      hp: {
        brandName: 'HP',
        products: [
          {
            id: 'hp-laserjet-pro-m404n',
            name: 'HP LaserJet Pro M404n',
            price: '₹18,499',
            originalPrice: '₹20,000',
            image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop',
            specs: ['Monochrome Laser', '38 ppm', 'Network Ready', 'Auto Duplex'],
            rating: 4.4,
            inStock: true
          },
          {
            id: 'hp-deskjet-2720',
            name: 'HP DeskJet 2720 All-in-One',
            price: '₹7,999',
            originalPrice: '₹8,500',
            image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop',
            specs: ['Color Inkjet', 'Print/Scan/Copy', 'Wireless', 'Mobile Print'],
            rating: 4.1,
            inStock: true
          },
          {
            id: 'hp-smart-tank-670',
            name: 'HP Smart Tank 670 Wireless',
            price: '₹19,999',
            originalPrice: '₹22,000',
            image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop',
            specs: ['All-in-One', 'Wireless', 'Auto Duplex', 'High-yield Ink'],
            rating: 4.3,
            inStock: true
          }
        ]
      },
      canon: {
        brandName: 'Canon',
        products: [
          {
            id: 'canon-pixma-g3010',
            name: 'Canon PIXMA G3010 All-in-One',
            price: '₹14,499',
            originalPrice: '₹16,000',
            image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop',
            specs: ['Color Inkjet', 'Wireless', 'Refillable Ink', 'Mobile Print'],
            rating: 4.3,
            inStock: true
          },
          {
            id: 'canon-lbp2900b',
            name: 'Canon LBP2900B Laser Printer',
            price: '₹9,999',
            originalPrice: '₹11,000',
            image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop',
            specs: ['Monochrome Laser', '12 ppm', 'USB 2.0', 'Compact Design'],
            rating: 4.2,
            inStock: true
          },
          {
            id: 'canon-pixma-ts3370',
            name: 'Canon PIXMA TS3370 Wireless',
            price: '₹8,999',
            originalPrice: '₹9,500',
            image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop',
            specs: ['All-in-One', 'Wireless', 'Borderless Print', 'Compact Design'],
            rating: 4.0,
            inStock: true
          }
        ]
      },
      epson: {
        brandName: 'Epson',
        products: [
          {
            id: 'epson-l3250',
            name: 'Epson EcoTank L3250 Wi-Fi',
            price: '₹16,999',
            originalPrice: '₹18,000',
            image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop',
            specs: ['All-in-One', 'Wi-Fi', 'EcoTank System', 'Mobile Print'],
            rating: 4.4,
            inStock: true
          },
          {
            id: 'epson-l805',
            name: 'Epson L805 Photo Printer',
            price: '₹19,999',
            originalPrice: '₹21,000',
            image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop',
            specs: ['6-Color Photo Print', 'Wi-Fi', 'Borderless Print', 'CD/DVD Print'],
            rating: 4.5,
            inStock: true
          }
        ]
      }
    },
    storage: {
      samsung: {
        brandName: 'Samsung',
        products: [
          {
            id: 'samsung-980-pro-1tb',
            name: 'Samsung 980 PRO 1TB NVMe SSD',
            price: '₹8,499',
            originalPrice: '₹9,500',
            image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16c?w=400&h=300&fit=crop',
            specs: ['PCIe 4.0 NVMe', '7000 MB/s Read', '1TB Capacity', '5 Year Warranty'],
            rating: 4.8,
            inStock: true
          },
          {
            id: 'samsung-980-500gb',
            name: 'Samsung 980 500GB NVMe SSD',
            price: '₹4,999',
            originalPrice: '₹5,500',
            image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16c?w=400&h=300&fit=crop',
            specs: ['PCIe 3.0 NVMe', '3500 MB/s Read', '500GB Capacity', '5 Year Warranty'],
            rating: 4.6,
            inStock: true
          },
          {
            id: 'samsung-t7-1tb',
            name: 'Samsung T7 Portable SSD 1TB',
            price: '₹9,999',
            originalPrice: '₹11,000',
            image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16c?w=400&h=300&fit=crop',
            specs: ['USB 3.2 Gen 2', '1050 MB/s Read', 'Portable Design', 'Password Protection'],
            rating: 4.7,
            inStock: true
          }
        ]
      },
      wd: {
        brandName: 'Western Digital',
        products: [
          {
            id: 'wd-blue-1tb-ssd',
            name: 'WD Blue 1TB SATA SSD',
            price: '₹7,999',
            originalPrice: '₹8,500',
            image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16c?w=400&h=300&fit=crop',
            specs: ['SATA III', '560 MB/s Read', '1TB Capacity', '3 Year Warranty'],
            rating: 4.5,
            inStock: true
          },
          {
            id: 'wd-black-sn770-1tb',
            name: 'WD Black SN770 1TB NVMe SSD',
            price: '₹8,999',
            originalPrice: '₹9,500',
            image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16c?w=400&h=300&fit=crop',
            specs: ['PCIe Gen4', '5150 MB/s Read', '1TB Capacity', '5 Year Warranty'],
            rating: 4.7,
            inStock: true
          },
          {
            id: 'wd-elements-2tb',
            name: 'WD Elements 2TB External HDD',
            price: '₹5,999',
            originalPrice: '₹6,500',
            image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16c?w=400&h=300&fit=crop',
            specs: ['USB 3.0', '2TB Capacity', 'Portable', 'Plug & Play'],
            rating: 4.3,
            inStock: true
          }
        ]
      },
      seagate: {
        brandName: 'Seagate',
        products: [
          {
            id: 'seagate-barracuda-2tb',
            name: 'Seagate Barracuda 2TB HDD',
            price: '₹4,999',
            originalPrice: '₹5,500',
            image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16c?w=400&h=300&fit=crop',
            specs: ['7200 RPM', 'SATA 6Gb/s', '2TB Capacity', '2 Year Warranty'],
            rating: 4.4,
            inStock: true
          },
          {
            id: 'seagate-expansion-4tb',
            name: 'Seagate Expansion 4TB External',
            price: '₹8,999',
            originalPrice: '₹9,500',
            image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16c?w=400&h=300&fit=crop',
            specs: ['USB 3.0', '4TB Capacity', 'Portable', 'Instant Recognition'],
            rating: 4.2,
            inStock: true
          }
        ]
      }
    },
    networking: {
      tplink: {
        brandName: 'TP-Link',
        products: [
          {
            id: 'tplink-archer-c6',
            name: 'TP-Link Archer C6 AC1200',
            price: '₹2,799',
            originalPrice: '₹3,200',
            image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&h=300&fit=crop',
            specs: ['Dual Band WiFi', '1200 Mbps', '4 Antennas', 'MU-MIMO'],
            rating: 4.3,
            inStock: true
          },
          {
            id: 'tplink-archer-ax23',
            name: 'TP-Link Archer AX23 WiFi 6',
            price: '₹4,999',
            originalPrice: '₹5,500',
            image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&h=300&fit=crop',
            specs: ['WiFi 6', '1800 Mbps', '4 Antennas', 'OFDMA'],
            rating: 4.4,
            inStock: true
          },
          {
            id: 'tplink-deco-m4',
            name: 'TP-Link Deco M4 Mesh System',
            price: '₹7,999',
            originalPrice: '₹8,500',
            image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&h=300&fit=crop',
            specs: ['Mesh WiFi', 'AC1200', '2-Pack', 'Whole Home Coverage'],
            rating: 4.5,
            inStock: true
          }
        ]
      },
      netgear: {
        brandName: 'Netgear',
        products: [
          {
            id: 'netgear-nighthawk-ax12',
            name: 'Netgear Nighthawk AX12 WiFi 6',
            price: '₹18,499',
            originalPrice: '₹20,000',
            image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&h=300&fit=crop',
            specs: ['WiFi 6', '6000 Mbps', '8 Streams', 'Gaming Accelerator'],
            rating: 4.7,
            inStock: true
          },
          {
            id: 'netgear-orbi-rbk353',
            name: 'Netgear Orbi RBK353 Mesh',
            price: '₹24,999',
            originalPrice: '₹27,000',
            image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&h=300&fit=crop',
            specs: ['Tri-band Mesh', 'AX1800', '3-Pack', '5000 sq ft Coverage'],
            rating: 4.6,
            inStock: true
          }
        ]
      },
      dlink: {
        brandName: 'D-Link',
        products: [
          {
            id: 'dlink-dir-825',
            name: 'D-Link DIR-825 AC1200',
            price: '₹2,499',
            originalPrice: '₹2,800',
            image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&h=300&fit=crop',
            specs: ['Dual Band', 'AC1200', '4 Antennas', 'Guest Network'],
            rating: 4.1,
            inStock: true
          }
        ]
      }
    },
    monitors: {
      lg: {
        brandName: 'LG',
        products: [
          {
            id: 'lg-24mp59g',
            name: 'LG 24MP59G Gaming Monitor',
            price: '₹12,499',
            originalPrice: '₹14,000',
            image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop',
            specs: ['24" IPS', '1080p', '75Hz', 'AMD FreeSync'],
            rating: 4.4,
            inStock: true
          },
          {
            id: 'lg-27ul500',
            name: 'LG 27UL500 4K Monitor',
            price: '₹22,999',
            originalPrice: '₹25,000',
            image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop',
            specs: ['27" IPS', '4K UHD', '60Hz', 'HDR10'],
            rating: 4.5,
            inStock: true
          },
          {
            id: 'lg-34wn80c',
            name: 'LG 34WN80C Ultrawide',
            price: '₹39,999',
            originalPrice: '₹42,000',
            image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop',
            specs: ['34" Curved', '1440p Ultrawide', '75Hz', 'USB-C Hub'],
            rating: 4.6,
            inStock: true
          }
        ]
      },
      samsung: {
        brandName: 'Samsung',
        products: [
          {
            id: 'samsung-odyssey-g5',
            name: 'Samsung Odyssey G5 27"',
            price: '₹22,499',
            originalPrice: '₹25,000',
            image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop',
            specs: ['27" Curved VA', '1440p', '144Hz', 'HDR10'],
            rating: 4.6,
            inStock: true
          },
          {
            id: 'samsung-f24t350',
            name: 'Samsung F24T350 24"',
            price: '₹9,999',
            originalPrice: '₹11,000',
            image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop',
            specs: ['24" IPS', '1080p', '75Hz', 'Borderless Design'],
            rating: 4.2,
            inStock: true
          },
          {
            id: 'samsung-odyssey-g7',
            name: 'Samsung Odyssey G7 32"',
            price: '₹54,999',
            originalPrice: '₹58,000',
            image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop',
            specs: ['32" Curved QLED', '1440p', '240Hz', 'G-Sync Compatible'],
            rating: 4.8,
            inStock: true
          }
        ]
      },
      acer: {
        brandName: 'Acer',
        products: [
          {
            id: 'acer-nitro-vg240y',
            name: 'Acer Nitro VG240Y Gaming',
            price: '₹11,999',
            originalPrice: '₹13,000',
            image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop',
            specs: ['24" IPS', '1080p', '75Hz', 'AMD FreeSync'],
            rating: 4.3,
            inStock: true
          },
          {
            id: 'acer-predator-xb273k',
            name: 'Acer Predator XB273K 4K',
            price: '₹64,999',
            originalPrice: '₹68,000',
            image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop',
            specs: ['27" IPS', '4K', '144Hz', 'G-Sync Compatible'],
            rating: 4.7,
            inStock: true
          }
        ]
      }
    },
    peripherals: {
      logitech: {
        brandName: 'Logitech',
        products: [
          {
            id: 'logitech-mx-master-3',
            name: 'Logitech MX Master 3 Mouse',
            price: '₹7,499',
            originalPrice: '₹8,500',
            image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop',
            specs: ['Wireless', 'Precision Scroll', '70-day Battery', 'Multi-device'],
            rating: 4.8,
            inStock: true
          },
          {
            id: 'logitech-g502-hero',
            name: 'Logitech G502 HERO Gaming Mouse',
            price: '₹4,999',
            originalPrice: '₹5,500',
            image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop',
            specs: ['25K DPI Sensor', '11 Programmable Buttons', 'RGB Lighting', 'Adjustable Weight'],
            rating: 4.7,
            inStock: true
          },
          {
            id: 'logitech-mk540',
            name: 'Logitech MK540 Wireless Combo',
            price: '₹3,999',
            originalPrice: '₹4,500',
            image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop',
            specs: ['Wireless Keyboard & Mouse', '3-Year Battery Life', 'Unifying Receiver', 'Spill-resistant'],
            rating: 4.4,
            inStock: true
          }
        ]
      },
      corsair: {
        brandName: 'Corsair',
        products: [
          {
            id: 'corsair-k70-rgb',
            name: 'Corsair K70 RGB MK.2 Keyboard',
            price: '₹12,499',
            originalPrice: '₹14,000',
            image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop',
            specs: ['Mechanical', 'Cherry MX Red', 'RGB Backlit', 'USB Passthrough'],
            rating: 4.7,
            inStock: true
          },
          {
            id: 'corsair-dark-core-rgb',
            name: 'Corsair Dark Core RGB Pro SE',
            price: '₹8,999',
            originalPrice: '₹9,500',
            image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop',
            specs: ['Wireless Gaming Mouse', '18K DPI', 'Qi Wireless Charging', 'RGB Lighting'],
            rating: 4.6,
            inStock: true
          }
        ]
      },
      razer: {
        brandName: 'Razer',
        products: [
          {
            id: 'razer-deathadder-v3',
            name: 'Razer DeathAdder V3 Gaming Mouse',
            price: '₹5,499',
            originalPrice: '₹6,000',
            image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop',
            specs: ['30K DPI Sensor', 'Focus Pro 30K', 'Ergonomic Design', '90 Hour Battery'],
            rating: 4.7,
            inStock: true
          },
          {
            id: 'razer-blackwidow-v4',
            name: 'Razer BlackWidow V4 75%',
            price: '₹14,999',
            originalPrice: '₹16,000',
            image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop',
            specs: ['Mechanical Gaming Keyboard', 'Green Switches', 'RGB Chroma', '75% Layout'],
            rating: 4.8,
            inStock: true
          }
        ]
      }
    },
    gaming: {
      steelseries: {
        brandName: 'SteelSeries',
        products: [
          {
            id: 'steelseries-arctis-7',
            name: 'SteelSeries Arctis 7 Headset',
            price: '₹18,499',
            originalPrice: '₹20,000',
            image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop',
            specs: ['Wireless', '24 Hour Battery', 'DTS Headphone:X', 'Retractable Mic'],
            rating: 4.6,
            inStock: true
          },
          {
            id: 'steelseries-rival-650',
            name: 'SteelSeries Rival 650 Wireless',
            price: '₹12,999',
            originalPrice: '₹14,000',
            image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop',
            specs: ['Wireless Gaming Mouse', '12K CPI', 'Dual Sensor', 'Weight System'],
            rating: 4.5,
            inStock: true
          }
        ]
      },
      razer: {
        brandName: 'Razer',
        products: [
          {
            id: 'razer-kraken-x',
            name: 'Razer Kraken X Gaming Headset',
            price: '₹4,999',
            originalPrice: '₹5,500',
            image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop',
            specs: ['7.1 Surround Sound', '40mm Drivers', 'Bendable Mic', 'Cross-platform'],
            rating: 4.4,
            inStock: true
          },
          {
            id: 'razer-kiyo-pro',
            name: 'Razer Kiyo Pro Streaming Camera',
            price: '₹19,999',
            originalPrice: '₹22,000',
            image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop',
            specs: ['1080p@60fps', 'Adaptive Light Sensor', 'Uncompressed Video', 'Auto Focus'],
            rating: 4.7,
            inStock: true
          }
        ]
      },
      hyperx: {
        brandName: 'HyperX',
        products: [
          {
            id: 'hyperx-cloud-ii',
            name: 'HyperX Cloud II Gaming Headset',
            price: '₹8,999',
            originalPrice: '₹9,500',
            image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop',
            specs: ['7.1 Virtual Surround', '53mm Drivers', 'Detachable Mic', 'Memory Foam'],
            rating: 4.6,
            inStock: true
          },
          {
            id: 'hyperx-alloy-fps-pro',
            name: 'HyperX Alloy FPS Pro Keyboard',
            price: '₹7,999',
            originalPrice: '₹8,500',
            image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop',
            specs: ['Mechanical', 'Cherry MX Red', 'Tenkeyless', 'Red Backlight'],
            rating: 4.5,
            inStock: true
          }
        ]
      }
    },
    cables: {
      amazonbasics: {
        brandName: 'Amazon Basics',
        products: [
          {
            id: 'hdmi-cable-2m',
            name: 'HDMI Cable 2M High Speed',
            price: '₹449',
            originalPrice: '₹500',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
            specs: ['4K@60Hz Support', 'Ethernet Channel', 'Gold Plated', '2 Meter Length'],
            rating: 4.3,
            inStock: true
          },
          {
            id: 'usb-c-cable-1m',
            name: 'USB-C to USB-C Cable 1M',
            price: '₹599',
            originalPrice: '₹650',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
            specs: ['USB 3.1 Gen2', '100W Power Delivery', '10Gbps Data', '1 Meter'],
            rating: 4.2,
            inStock: true
          }
        ]
      },
      belkin: {
        brandName: 'Belkin',
        products: [
          {
            id: 'usb-c-to-hdmi',
            name: 'USB-C to HDMI Adapter',
            price: '₹2,499',
            originalPrice: '₹2,800',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
            specs: ['4K@60Hz', 'USB-C 3.1', 'Plug & Play', 'Compact Design'],
            rating: 4.4,
            inStock: true
          },
          {
            id: 'ethernet-cable-5m',
            name: 'Cat6 Ethernet Cable 5M',
            price: '₹799',
            originalPrice: '₹900',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
            specs: ['Cat6 Standard', 'Gigabit Ethernet', 'RJ45 Connector', '5 Meter Length'],
            rating: 4.1,
            inStock: true
          }
        ]
      }
    },
    projectors: {
      epson: {
        brandName: 'Epson',
        products: [
          {
            id: 'epson-eb-x41',
            name: 'Epson EB-X41 XGA Projector',
            price: '₹32,499',
            originalPrice: '₹35,000',
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
            specs: ['3600 Lumens', 'XGA Resolution', 'HDMI + VGA', '15000:1 Contrast'],
            rating: 4.4,
            inStock: true
          },
          {
            id: 'epson-eh-tw650',
            name: 'Epson EH-TW650 Full HD',
            price: '₹54,999',
            originalPrice: '₹58,000',
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
            specs: ['3100 Lumens', 'Full HD 1080p', 'Wi-Fi Ready', '15000:1 Contrast'],
            rating: 4.5,
            inStock: true
          }
        ]
      },
      benq: {
        brandName: 'BenQ',
        products: [
          {
            id: 'benq-th685',
            name: 'BenQ TH685 Gaming Projector',
            price: '₹64,999',
            originalPrice: '₹68,000',
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
            specs: ['3500 Lumens', '1080p', '8.3ms Input Lag', 'HDR10'],
            rating: 4.6,
            inStock: true
          },
          {
            id: 'benq-mw550',
            name: 'BenQ MW550 WXGA Projector',
            price: '₹42,999',
            originalPrice: '₹45,000',
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
            specs: ['3600 Lumens', 'WXGA Resolution', 'HDMI Connectivity', 'SmartEco Mode'],
            rating: 4.3,
            inStock: true
          }
        ]
      },
      viewsonic: {
        brandName: 'ViewSonic',
        products: [
          {
            id: 'viewsonic-pa503w',
            name: 'ViewSonic PA503W WXGA',
            price: '₹28,999',
            originalPrice: '₹31,000',
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
            specs: ['3600 Lumens', 'WXGA Resolution', 'HDMI/VGA', '22000:1 Contrast'],
            rating: 4.2,
            inStock: true
          }
        ]
      }
    },
    audio: {
      jbl: {
        brandName: 'JBL',
        products: [
          {
            id: 'jbl-quantum-100',
            name: 'JBL Quantum 100 Gaming Headset',
            price: '₹3,499',
            originalPrice: '₹4,000',
            image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=300&fit=crop',
            specs: ['40mm Drivers', 'Detachable Mic', 'Memory Foam', 'Multi-platform'],
            rating: 4.3,
            inStock: true
          },
          {
            id: 'jbl-flip-6',
            name: 'JBL Flip 6 Portable Speaker',
            price: '₹11,999',
            originalPrice: '₹12,999',
            image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=300&fit=crop',
            specs: ['Waterproof IP67', '12 Hours Playtime', 'PartyBoost', 'Bold JBL Pro Sound'],
            rating: 4.5,
            inStock: true
          },
          {
            id: 'jbl-pebbles',
            name: 'JBL Pebbles USB Desktop Speakers',
            price: '₹2,999',
            originalPrice: '₹3,500',
            image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=300&fit=crop',
            specs: ['USB Powered', '50mm Drivers', 'Plug & Play', 'Compact Design'],
            rating: 4.1,
            inStock: true
          }
        ]
      },
      creative: {
        brandName: 'Creative',
        products: [
          {
            id: 'creative-pebble-v3',
            name: 'Creative Pebble V3 RGB Speakers',
            price: '₹4,499',
            originalPrice: '₹5,000',
            image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=300&fit=crop',
            specs: ['USB-C + Bluetooth', '8W RMS Power', 'RGB Lighting', 'Clear Dialog Enhancement'],
            rating: 4.5,
            inStock: true
          },
          {
            id: 'creative-sound-blaster-x3',
            name: 'Creative Sound Blaster X3',
            price: '₹12,999',
            originalPrice: '₹14,000',
            image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=300&fit=crop',
            specs: ['External USB DAC', '7.1 Surround', 'Super X-Fi', 'Hi-Res Audio'],
            rating: 4.6,
            inStock: true
          }
        ]
      },
      sony: {
        brandName: 'Sony',
        products: [
          {
            id: 'sony-wh-ch720n',
            name: 'Sony WH-CH720N Wireless Headphones',
            price: '₹8,999',
            originalPrice: '₹9,999',
            image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=300&fit=crop',
            specs: ['Active Noise Canceling', '35 Hour Battery', 'Quick Charge', 'V1 Processor'],
            rating: 4.4,
            inStock: true
          },
          {
            id: 'sony-srs-xb23',
            name: 'Sony SRS-XB23 Wireless Speaker',
            price: '₹5,999',
            originalPrice: '₹6,500',
            image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=300&fit=crop',
            specs: ['Extra Bass', 'IP67 Waterproof', '12 Hour Battery', 'Party Connect'],
            rating: 4.2,
            inStock: true
          }
        ]
      }
    }
  };

  const currentBrandData = productData[category as keyof typeof productData]?.[brand as string];

  if (!currentBrandData) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Products Not Found</h1>
          <Link to="/products" className="text-blue-600 hover:text-blue-700">
            ← Back to Products
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              to="/products" 
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              Products
            </Link>
            <span className="text-gray-400">→</span>
            <Link 
              to={`/products/${category}`}
              className="text-blue-600 hover:text-blue-700 transition-colors capitalize"
            >
              {category}
            </Link>
            <span className="text-gray-400">→</span>
            <span className="text-gray-600">{currentBrandData.brandName}</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {currentBrandData.brandName} {category?.charAt(0).toUpperCase() + category?.slice(1)}
          </h1>
          <p className="text-xl text-gray-600">
            {currentBrandData.products.length} products available
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentBrandData.products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {!product.inStock && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      Out of Stock
                    </div>
                  )}
                  {product.originalPrice !== product.price && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      Sale
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                  </div>

                  <ul className="text-sm text-gray-600 mb-4 space-y-1">
                    {product.specs.map((spec, index) => (
                      <li key={index}>• {spec}</li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                      {product.originalPrice !== product.price && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                      <Eye size={16} />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BrandProducts;
