// Funktion zum Setzen und Entfernen eines Cookies
function cookie(name, value, days) {
  if (value !== undefined) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  } else {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (const element of ca) {
      let c = element.trim();
      if (c.startsWith(nameEQ)) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
}

// Funktion zum Überprüfen, ob der Benutzer eingeloggt ist (Cookie oder Token)
function checkLogin() {
  const token = localStorage.getItem("token") || cookie("token");

  const taskContainer = document.getElementById("task-container");
  const loginContainer = document.getElementById("login");

  if (token) {
    taskContainer.style.display = "block";
    loginContainer.style.display = "none";
    loadTasks();
  } else {
    taskContainer.style.display = "none";
    loginContainer.style.display = "block";
  }
}

// Funktion zum Login (inklusive Cookie-Setzen)
document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

      // Überprüft, ob die E-Mail ein @ enthält
      if (!email.includes('@')) {
        alert('Bitte eine gültige E-Mail-Adresse mit "@" eingeben');
        return;
      }

    fetch("http://localhost/auth/jwt/sign", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status >= 400 && response.status < 500) {
            throw new Error(`Client-Fehler: ${response.status} - ${response.statusText}`);
          } else if (response.status >= 500) {
            throw new Error(`Server-Fehler: ${response.status} - ${response.statusText}`);
          }
        }
        return response.json();
      })
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          cookie("token", data.token, 7);
  
          alert("Login erfolgreich!");
          checkLogin(); // Aufruf von checkLogin zum Aktualisieren der Sichtbarkeit
        } else {
          alert("Login fehlgeschlagen");
        }
      })
      .catch((error) => {
        console.error("Login Fehler:", error);
        alert("Es gab ein Problem beim Login. " + error.message);
      });
  });

// Funktion zum Logout (Token und Cookie entfernen)
function logout() {
  localStorage.removeItem("token");
  cookie("token", "", -1);
  alert("Du wurdest ausgeloggt.");
  checkLogin();
}

// Logout-Button hinzufügen
document.getElementById("logout-btn").addEventListener("click", logout);