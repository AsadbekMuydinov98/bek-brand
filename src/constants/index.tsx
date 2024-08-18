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

