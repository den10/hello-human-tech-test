import { BASE_IMAGE_URL } from "../configs/constants";

export const getImageUrl = (image: string): string => `${BASE_IMAGE_URL}/${image}`;
