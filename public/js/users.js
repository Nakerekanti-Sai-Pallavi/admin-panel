const backendUrl = "https://fsd-1-q44k.onrender.com"; // final backend

async function loadUsers() {
  const tableBody = document.getElementById("usersTableBody");
  const errorMsg = document.getElementById("errorMsg");

  try {
    const res = await fetch(`${backendUrl}/api/users`);
    const users = await res.json();

    if (!Array.isArray(users)) {
      errorMsg.textContent = "❌ Failed to fetch users.";
      return;
    }

    users.forEach(user => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.role}</td>
      `;
      tableBody.appendChild(row);
    });
  } catch (error) {
    errorMsg.textContent = "❌ Error loading users.";
  }
}

document.addEventListener("DOMContentLoaded", loadUsers);
