export interface InstagramPhoto {
  id: string;
  imagePublicId: string;
}

const PHOTO_COUNT = 6;

export const INSTAGRAM_PHOTOS: InstagramPhoto[] = Array.from(
  { length: PHOTO_COUNT },
  (_, i) => ({
    id: `photo-${i + 1}`,
    imagePublicId: `interior-studio/instagram/photo-${i + 1}`,
  })
);

// TODO: replace with client's real Instagram handle and profile URL
export const INSTAGRAM_HANDLE = "@interior.studio";
export const INSTAGRAM_URL = "https://instagram.com";