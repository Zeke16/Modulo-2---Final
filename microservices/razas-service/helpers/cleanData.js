function cleanData(arr) {
  for (let info in arr) {
    let value = []; //array donde se guardara cada valor de color_de_pelo
    let color_de_pelo = arr[info]["color_de_pelo"]; //valor actual de propiedad

    color_de_pelo = color_de_pelo.split(";"); //separando la data de color_de_pelo
    color_de_pelo.forEach((item) => {
      value.push(item.trim()); //limpiando la data de color_de_pelo de espacios en blanco
    });

    let index = value.indexOf("Tricolor (Negro");
    if (index > -1) {
      let firstValue = value[index];
      let secondValue = value[index + 1];
      let finalValue = firstValue + ", " + secondValue;
      value.splice(index);
      value.splice(index + 1);
      value.push(finalValue);
    }

    arr[info]["color_de_pelo"] = value;
  }
  return arr;
}

module.exports = {
  cleanData,
};
