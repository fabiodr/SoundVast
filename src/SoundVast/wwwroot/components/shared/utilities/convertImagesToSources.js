export default (coverImages) => {
  if (!coverImages) return null;

  const sources = {};

  coverImages.forEach((coverImage) => {
    sources[coverImage.dimention] = coverImage.imageUrl;
  });

  return sources;
};
