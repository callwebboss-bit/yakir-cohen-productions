export type Page = 'home' | 'studio' | 'clinic' | 'attractions' | 'vip' | 'courses' | 'voucher';

export interface Attraction {
  id: string;
  title: string;
  price: number;
  desc: string;
  category: string;
  icon: string;
}

export interface VoucherData {
  recipient: string;
  sender: string;
  amount: number;
  message: string;
  expiryDate: string;
}

export interface UserSession {
  isLogged: boolean;
  name: string;
  phone: string;
}
