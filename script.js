function append(char) {
  document.getElementById("display").value += char;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let expression = document.getElementById("display").value;

  try {
    // Replace math functions with JS equivalents
    expression = expression
      .replace(/sin\(/g, "Math.sin(")
      .replace(/cos\(/g, "Math.cos(")
      .replace(/tan\(/g, "Math.tan(")
      .replace(/log\(/g, "Math.log10(");

    const result = eval(expression);
    document.getElementById("display").value = result;
  } catch {
    document.getElementById("display").value = "Error";
  }
}