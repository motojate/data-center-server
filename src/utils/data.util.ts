export const removeHtmlTags = (data: string): string => {
  console.log(data);
  const tagRemoveRegex = /<[^>]*>/g;
  return data.replace(tagRemoveRegex, '');
};
