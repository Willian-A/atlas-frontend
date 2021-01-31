export default function importImages(r) {
  let images = {};
  r.keys().map((item) => {
    return (images[
      item.replace("./", "").replace(".jpg", "").replace(".webp", "")
    ] = r(item));
  });
  return images;
}

function bannerImages() {
  return importImages(
    require.context("../assets/images/banner", false, /\.(webp)$/)
  );
}

function smallProductImages() {
  return importImages(
    require.context("../assets/images/products/small", false, /\.(webp)$/)
  );
}
// eslint-disable-next-line
function mediumProductImages() {
  return importImages(
    require.context("../assets/images/products/medium", false, /\.(webp)$/)
  );
}
// eslint-disable-next-line
function bigProductImages() {
  return importImages(
    require.context("../assets/images/products/big", false, /\.(webp)$/)
  );
}

function categoriesImages() {
  return importImages(
    require.context("../assets/images/categories", false, /\.(webp)$/)
  );
}
export {
  bannerImages,
  smallProductImages,
  mediumProductImages,
  bigProductImages,
  categoriesImages,
};
