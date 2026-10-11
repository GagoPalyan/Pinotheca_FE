enum GalleryPaths {
  PICTURES = '/pictures',
}

const pictureLikePath = (id: string) => `${GalleryPaths.PICTURES}/${id}/like`;
const pictureCartPath = (id: string) => `${GalleryPaths.PICTURES}/${id}/cart`;
const pictureSharePath = (id: string) => `${GalleryPaths.PICTURES}/${id}/share`;
const pictureDetailPath = (id: string) => `${GalleryPaths.PICTURES}/${id}`;

export { GalleryPaths, pictureLikePath, pictureCartPath, pictureSharePath, pictureDetailPath };
