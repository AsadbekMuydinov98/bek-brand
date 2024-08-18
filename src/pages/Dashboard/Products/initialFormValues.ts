export interface getProduct {
  _id?: string;
  title: string;
  description: string;
  brand: string; 
  price: number;
  discountPercent: number;
  amount: number;
  color: string; 
  category: string; 
  images: string | string[];
}

const initialFormValues: getProduct = {
  title: '',
  description: '',
  price: 0,
  discountPercent: 0,
  color: '', 
  category: '', 
  brand: '',
  amount: 1,
  images: []
};

export default initialFormValues;
