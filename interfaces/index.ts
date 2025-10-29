
export type AmenityType = 
| 'wifi'
| 'pool'
| 'kitchen'
| 'bed'
| 'bathroom'
| 'people'

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
}