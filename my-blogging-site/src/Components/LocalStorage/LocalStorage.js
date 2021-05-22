export const saveData = (key, value) => {
  localStorage.setItem(key, value);
};

export const getData = (key) => {
  return localStorage.getItem(key);
};
