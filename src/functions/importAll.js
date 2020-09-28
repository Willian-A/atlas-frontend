export default function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    return (images[item.replace("./", "").replace(".jpg", "")] = r(item));
  });
  return images;
}
