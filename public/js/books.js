const backendUrl = "https://fsd-1-q44k.onrender.com"; // your backend

async function loadBooks() {
  const tableBody = document.querySelector("#booksTable tbody");
  const errorMsg = document.getElementById("errorMsg");
  tableBody.innerHTML = "";

  try {
    const res = await fetch(`${backendUrl}/api/books`);
    const books = await res.json();

    if (!Array.isArray(books)) {
      errorMsg.textContent = "❌ Could not load books.";
      return;
    }

    books.forEach(book => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.price}</td>
        <td>${book.category}</td>
        <td><button onclick="deleteBook('${book._id}')">🗑 Delete</button></td>
      `;
      tableBody.appendChild(row);
    });
  } catch (err) {
    errorMsg.textContent = "❌ Server error while fetching books.";
  }
}

async function deleteBook(id) {
  if (!confirm("Are you sure you want to delete this book?")) return;

  try {
    const res = await fetch(`https://your-admin-backend-url.onrender.com/api/books/${id}`, {
  method: "DELETE"
});


    if (res.ok) {
      loadBooks(); // reload after delete
    } else {
      alert("Failed to delete the book.");
    }
  } catch (err) {
    alert("Server error. Could not delete.");
  }
}

document.addEventListener("DOMContentLoaded", loadBooks);
