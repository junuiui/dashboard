

const increaseValue = () => {
  let value = parseInt(document.getElementById("value").innerHTML);
  value++;
  document.getElementById("value").innerHTML = value;
  patchLog(value-1, value);
}

const decreaseValue = () => {
  let value = parseInt(document.getElementById("value").innerHTML);
  value--;
  document.getElementById("value").innerHTML = value;
  patchLog(value+1, value);
}

const patchLog = (prev, curr) => {
  let logs = document.getElementById("logs").innerHTML;
  logs += "The original value: " + prev + ", New: " + curr + "<br>";
  document.getElementById("logs").innerHTML = logs;
}