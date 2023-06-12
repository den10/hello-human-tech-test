export const GQL_API_ENDPOINT = process.env.REACT_APP_GQL_API_ENDPOINT;

export const getEnv = (key: string, defaultValue?: string): string => {
  const value = process.env[key] ?? defaultValue;
  if (!value) {
    throw new Error(`Missing config value for ${key}`);
  }
  return value;
};

export const APP_ENV = getEnv("REACT_APP_ENV", "dev-localhost");
export const API_HOST = getEnv("REACT_APP_GQL_API_ENDPOINT", "");
export const BASE_IMAGE_URL = getEnv("REACT_APP_BASE_IMAGE_URL", "");
export const TOM_CRUISE_ID = getEnv("REACT_APP_TOM_CRUISE_ID", "");
