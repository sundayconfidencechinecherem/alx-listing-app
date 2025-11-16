export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
  amenities: AmenityType[];
}

export type AmenityType = 
| 'wifi'
| 'pool'
| 'kitchen'
| 'bed'
| 'bathroom'
| 'people'
| 'person'

export interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    rating: number;
    amenities: AmenityType[];
    location: string;
}

export interface ButtonProps {
  text: string;
  onClick: () => void;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}


