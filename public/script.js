async function check() {
  const prompt = document.getElementById("prompt").value;
  const llmOutput = document.getElementById("llmOutput");
  const results = document.getElementById("results");

  llmOutput.innerText = "Checking...";
  results.innerHTML = "";

  const res = await fetch("/api/check", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt })
  });

  const data = await res.json();
  llmOutput.innerText = data.llmResponse;

  data.verificationResults.forEach(item => {
    results.innerHTML += `
      <div class="summary">
        <strong>${item.term}</strong><br/>
        ${item.summary}
      </div>
    `;
  });
}
