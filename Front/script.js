const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const response = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  if (data.message === "Autenticación exitosa") {
    window.location.href = "C:/laragon/www/login/Front/dashboard.html";
  } else {
    alert(data.message);
  }
});

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const response = await fetch("http://localhost:3000/api/auth/register.html", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, password }),
  });
  const data = await response.json();
  if (data.message === "Registro exitoso") {
    window.location.href = "C:/laragon/www/login/Front/index.html";
  } else {
    alert(data.message);
  }
});