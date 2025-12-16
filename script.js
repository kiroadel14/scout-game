function checkCode() {
  const code = document.getElementById("codeInput").value.trim();
  const error = document.getElementById("error");

  const codes = {
    "A111": 1,
    "B222": 2,
    "C333": 3,
    "D444": 4,
    "E555": 5
  };

  if (codes[code]) {
    localStorage.setItem("character", codes[code]);
    window.location.href = "person.html";
  } else {
    error.textContent = "الكود غير صحيح";
  }
}
