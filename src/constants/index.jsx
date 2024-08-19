import { FaShippingFast } from "react-icons/fa";
import { RiRefund2Line } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { SiNike, SiMikrotik  } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { getItem } from "../helpers/persistance-storage";

export const baseUrl = "http://localhost:8080";

export const useAuth = () => {
  const user = getItem('accessToken')
  return user;
}

export const features = [
  {
    icon: <FaShippingFast />,
    title: 'FREE SHIPPING',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    icon:<RiRefund2Line />,
    title: '100% REFUND',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    icon: <MdSupportAgent />,
    title: 'SUPPORT 24/7',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
];

export const newsItems = [
  {
    logo: <SiNike />,
    date: '01 Jan, 2015',
    title: 'Fashion Industry',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    logo: <IoLogoFigma />,
    date: '01 Jan, 2015',
    title: 'Best Design Tools',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    logo: <SiMikrotik />,
    date: '01 Jan, 2015',
    title: 'HR Community',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
];

export const adsproducts = [
  {
    name: 'Blue Swade Nike Sneakers',
    image: 'https://www.sneakerhype.eu/cdn/shop/products/file_a303bac6-eb72-46e6-a8bd-01cc88e8f691.png?v=1709932204',
    price: '499',
    originalPrice: '500',
    discount: '1% Off',
    rating: 4.5,
    isHot: false
  },
  {
    name: 'Blue Swade Nike Sneakers',
    image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png',
    price: '499',
    originalPrice: '500',
    discount: '1% Off',
    rating: 4.5,
    isHot: false
  },
  {
    name: 'Blue Swade Nike Sneakers',
    image: 'https://www.acemarks.com/cdn/shop/files/THEKODY_DENIMSUEDE_1.png?v=1690967206',
    price: '499',
    originalPrice: '500',
    discount: '1% Off',
    rating: 4.5,
    isHot: false
  },
];



