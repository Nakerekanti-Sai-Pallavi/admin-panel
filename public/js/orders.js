const backendUrl = "https://fsd-iasa.onrender.com"; // backend URL

async function loadOrders() {
  const tableBody = document.querySelector("#ordersTable tbody");
  const errorMsg = document.getElementById("errorMsg");
  tableBody.innerHTML = "";

  try {
    const res = await fetch(`${backendUrl}/api/orders`);
    const orders = await res.json();

    if (!Array.isArray(orders)) {
      errorMsg.textContent = "❌ Could not load orders.";
      return;
    }

    orders.forEach(order => {
      const row = document.createElement("tr");
      const bookList = order.items.map(item => `${item.title} ×${item.quantity}`).join("<br>");

      row.innerHTML = `
        <td>${order.user?.name || "Unknown"}</td>
        <td>${order.user?.email || "N/A"}</td>
        <td>${bookList}</td>
        <td>₹${order.total}</td>
        <td>${new Date(order.createdAt).toLocaleString()}</td>
      `;
      tableBody.appendChild(row);
    });
  } catch (err) {
    errorMsg.textContent = "❌ Server error while fetching orders.";
  }
}

document.addEventListener("DOMContentLoaded", loadOrders);
