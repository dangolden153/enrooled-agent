export const checkEmpty = (obj) => {
  console.log(obj);
  for (var key in obj) {
    if (obj[key] === "") return true;
  }
  return false;
};
