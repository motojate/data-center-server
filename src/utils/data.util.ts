export const removeHtmlTags = (data: string): string => {
  return data.replace(/<[^>]>/g, '');
};
