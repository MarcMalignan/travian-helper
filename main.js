const format = () => {
  const input = document.getElementById("input");
  const result = document.getElementById("result");

  const regexp = new RegExp(
    /\((.*)\)_(.*)_(.*) par (.*) de (.*)dans (.*) à (.*)/g
  );
  const parts = regexp.exec(input.value.trim());

  if (!parts || parts.length !== 8) {
    result.value = "";
    return alert("Erreur : impossible de formater le message !");
  }

  result.focus();
  result.value = [
    parts[2],
    parts[3],
    parts[7],
    parts[4],
    parts[5],
    parts[1].replace("h", ":"),
  ].join("\t");
};

window.onload = () => {
  document.getElementById("submit").addEventListener("click", format);
};
