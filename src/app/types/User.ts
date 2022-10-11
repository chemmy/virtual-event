export interface User {
  name: string;
  role: string;
  email: string;
  timezone: string;
}

export interface Authentication {
  status: string;
  auth_token: string;
}

export interface ProfileImage {
  status: string;
  image_url: string;
}