let tableLength;

const createTable = () => {
  tableLength = document.getElementById("inputLength").value;
  const container = document.getElementById("table");
  container.innerHTML = ""; //formateando el contenedor en caso se presione más veces
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");
  for (let i = 0; i < tableLength; i++) {
    const row = document.createElement("tr");
    const input = document.createElement("input");
    input.id = "input" + i;
    input.className = "inputValue";
    input.type = "number";
    row.appendChild(input);
    tableBody.appendChild(row);
  }
  table.appendChild(tableBody);
  table.setAttribute("border", "3");
  container.appendChild(table);
  // creación de botón
  const button = document.createElement("button");
  button.className = "btn btn-calculate";
  button.type = "button";
  button.innerHTML = "Calcular suma";
  button.onclick = calculateSum;
  container.appendChild(button);
};
const calculateSum = () => {
  let sum = 0;
  for (let i = 0; i < tableLength; i++) {
    const input = document.getElementById("input" + i);
    sum += parseInt(input.value || 0);
  }
  const container = document.getElementById("table");
  let result;
  if (!document.getElementById("result")) {
    result = document.createElement("span");
    result.id = "result";
    container.append(result);
  } else {
    result = document.getElementById("result");
  }
  result.innerHTML = `El resultado es ${sum}`;
};
