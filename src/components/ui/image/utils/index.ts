const getImageUrl = (path: string) => `${process.env.NEXT_PUBLIC_BASE_CLIENT_URL}/cloud/${path}`;

export { getImageUrl };
