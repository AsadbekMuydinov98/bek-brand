export interface SelectOption {
  value: string;
  label: string;
}

export interface Field {
  name: string;
  type: 'text' | 'email' | 'password' | 'number' | 'textarea' | 'select' | 'upload';
  label: string;
  placeholder?: string;
  options?: SelectOption[];
  multiple?: boolean;
}

export interface ProductFormValues {
  _id?: string;
  title: string;
  price: number;
  discountPercent: number;
  color: string;
  category: string;
  brand?: {name: string};
  amount: number;
  description: string;
  images: string[];
}

export interface iProduct {
  _id: string;
  title: string;
  price: number;
  images: string | string[];
  brand: {
    name: string;
  };
  discountPercent: number;
}

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export interface FavProduct {
  _id: string;
  title: string;
  price: number;
  images: string | string[];
}
export interface State {
  auth: {
    user: {
      id?: string;
    };
  };
  product: {
    favorites: FavProduct[];
    loading: boolean;
    error: string | null;
  };
}

export interface FeatureType {
  title: string;
  description: string;
  imageUrl?: string;
  icon?: React.ReactNode;
}

// Define the props for the Features component
export interface FeaturesProps {
  features: FeatureType[];
}

export interface NewsItemProps {
  title: string;
  description: string;
  date: string;
  logo: string;
}

// Dashboard

export interface Brand {
  _id?: string;
  name?: string;
}

export interface ModalState {
  isModalVisible: boolean;
  editingBrand: Brand | null;
  brandName: string;
}

export interface Category {
  _id?: string;
  name?: string;
}

export interface Color {
  _id?: string;
  name?: string;
}

export interface getProduct {
  _id?: string;
  title: string;
  description: string;
  brand: Brand
  price: number;
  discountPercent: number;
  amount: number;
  color: Color
  category: Category
  images: string | string[];
}

