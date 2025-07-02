// public/js/add-book.js
const backendUrl = "https://fsd-1-q44k.onrender.com";

document.getElementById("addBookForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const bookData = {
    title: document.getElementById("title").value.trim(),
    author: document.getElementById("author").value.trim(),
    price: parseFloat(document.getElementById("price").value),
    category: document.getElementById("category").value.trim(),
    image: document.getElementById("image").value.trim(),
  };

  const message = document.getElementById("message");

  try {
    const res = await fetch(`${backendUrl}/api/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookData)
    });

    const data = await res.json();

    if (res.ok) {
      message.textContent = "✅ Book added successfully!";
      document.getElementById("addBookForm").reset();
    } else {
      message.textContent = `❌ Error: ${data.error || 'Something went wrong'}`;
    }
  } catch (err) {
    message.textContent = "❌ Server error while adding book.";
  }
});
