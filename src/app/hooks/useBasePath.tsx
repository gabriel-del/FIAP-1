export const useBasePath = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  const getAssetUrl = (url: string) => {
    if (url.startsWith('http') || url.startsWith('data:')) {
      return url;
    }
    return `${basePath}${url}`;
  };

  return { basePath, getAssetUrl };
};