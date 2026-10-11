const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL as string;
const IS_SERVER = typeof window === 'undefined';
const AUTH_REQUIRED_URL = new Set<string>([]);

export { BASE_URL, IS_SERVER, AUTH_REQUIRED_URL };
