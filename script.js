function askAI() {
  const q = document.getElementById("question").value.toLowerCase();
  const a = document.getElementById("answer");

  if (q.includes("subuh")) {
    a.innerText = "Solat Subuh terdiri daripada 2 rakaat.";
  } else if (q.includes("rukun")) {
    a.innerText = "Rukun solat termasuk niat, berdiri, takbir, bacaan Al-Fatihah, rukuk, sujud dan salam.";
  } else {
    a.innerText = "Sila tanya soalan berkaitan solat.";
  }
}
