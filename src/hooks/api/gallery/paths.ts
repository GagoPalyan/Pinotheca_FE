enum GalleryPaths {
  PICTURES = '/pictures',
}

const pictureLikePath = (id: string) => `${GalleryPaths.PICTURES}/${id}/like`;
const pictureCartPath = (id: string) => `${GalleryPaths.PICTURES}/${id}/cart`;

export { GalleryPaths, pictureLikePath, pictureCartPath };
