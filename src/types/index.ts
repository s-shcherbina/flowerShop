export interface PayloadToken {
  id: number;
  role: string;
}

export interface AuthResponse {
  userData: PayloadToken;
  accessToken: string;
  refreshToken: string;
}

export enum Role {
  User = 'USER',
  Admin = 'ADMIN',
  SuperUser = 'SUPER_USER',
}

export interface OrderParams {
  userId?: number;
  completed?: boolean;
}

export interface OrderGoodParams {
  goodId: number;
  orderId: number;
}
