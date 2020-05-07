import Cookies from "universal-cookie";

const cookies = new Cookies();

export function setCookie(name, value) {
  return cookies.set(name, value, { path: "/", maxAge: 3600 });
}

export function getCookie(name) {
  return cookies.get(name);
}
