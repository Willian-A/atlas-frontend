export default function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    return (images[
      item.replace("./", "").replace(".jpg", "").replace(".webp", "")
    ] = r(item));
  });
  return images;
}
