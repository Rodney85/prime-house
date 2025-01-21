export interface Property {
  id: string;
  title: string;
  price: number;
  location: {
    address: string;
    city: string;
    state: string;
  };
  features: {
    beds: number;
    baths: number;
    sqft: number;
  };
  images: string[];
  type: 'sale' | 'rent';
  status: 'available' | 'sold' | 'rented';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  comment: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  message: string;
  propertyId?: string;
}
