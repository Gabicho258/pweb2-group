const getDayFromNumber = () => {
  const weekday = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const inputValue = document.getElementById("inputDay").value;
  // const result = document.getElementById("result");
  const container = document.getElementsByTagName("main")[0];
  let result;
  if (!document.getElementById("result")) {
    result = document.createElement("span");
    result.id = "result";
    container.append(result);
  } else {
    result = document.getElementById("result");
  }
  if (weekday[inputValue]) {
    result.innerHTML = `El día ${inputValue} es ${weekday[inputValue]}`;
  } else {
    result.innerHTML = `El día ${inputValue} es inválido`;
  }
};
