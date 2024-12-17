function loadTasks() {
    const token = localStorage.getItem("token");
  
    fetch("http://localhost/auth/jwt/tasks", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Fehler: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        const taskList = document.getElementById("task-list");
        taskList.innerHTML = "";
  
        data.forEach((task) => {
          const listItem = document.createElement("li");
          listItem.textContent = task.title;
  
          const editButton = document.createElement("button");
          editButton.textContent = "Bearbeiten";
          editButton.onclick = () => editTask(task.id);
  
          const deleteButton = document.createElement("button");
          deleteButton.textContent = "Löschen";
          deleteButton.onclick = () => deleteTask(task.id);
  
          listItem.append(editButton, deleteButton);
          taskList.appendChild(listItem);
        });
      })
      .catch((error) => {
        console.error("Fehler beim Laden der Aufgaben:", error);
        alert(`Fehler beim Laden der Aufgaben: ${error.message}`);
      });
  }
  

  document.getElementById("task-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("task-title").value;
    const token = localStorage.getItem("token");
  
    fetch("http://localhost/auth/jwt/tasks", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Fehler: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        loadTasks();
        document.getElementById("task-title").value = "";
      })
      .catch((error) => {
        console.error("Fehler beim Hinzufügen der Aufgabe:", error);
        alert(`Fehler beim Hinzufügen der Aufgabe: ${error.message}`);
      });
  });
  

// Funktion zum Bearbeiten einer Aufgabe (Update)
function editTask(taskId) {
    const newTitle = prompt("Neuer Titel der Aufgabe:");
    if (!newTitle) return;
  
    const token = localStorage.getItem("token");
  
    fetch("http://localhost/auth/jwt/tasks", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: taskId, title: newTitle }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Fehler: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        loadTasks(); 
      })
      .catch((error) => {
        console.error("Fehler beim Bearbeiten der Aufgabe:", error);
        alert(`Fehler beim Bearbeiten der Aufgabe: ${error.message}`);
      });
  }
  

  function deleteTask(taskId) {
    const token = localStorage.getItem("token");
  
    fetch(`http://localhost/auth/jwt/task/${taskId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Fehler: ${response.status} - ${response.statusText}`);
        }
        loadTasks(); // Liste neu laden, nachdem die Aufgabe gelöscht wurde
      })
      .catch((error) => {
        console.error("Fehler beim Löschen der Aufgabe:", error);
        alert(`Fehler beim Löschen der Aufgabe: ${error.message}`);
      });
  }
  

// Überprüfe, ob der Benutzer eingeloggt ist, wenn die Seite geladen wird
document.addEventListener("DOMContentLoaded", checkLogin);
