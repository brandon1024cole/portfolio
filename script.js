const FORM = document.getElementById("contact-form");
const STATUS = document.getElementById("status");

FORM.addEventListener("submit", async (e) => {
  e.preventDefault();
  STATUS.style.visibility='visible';
  STATUS.style.padding="1rem";
  STATUS.textContent = "Sending…";

  const formData = new FormData(FORM);
  const data = Object.fromEntries(formData);

  try {
    const res = await fetch("https://portfolio-backend-v18a.onrender.com/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    STATUS.textContent = result.message || "Sent";
    if (res.ok) {
      FORM.reset();
    }
  } catch (err) {
    STATUS.textContent = "Failed to send message.";
  }
});

document.getElementById("clear").addEventListener("click", clearBox);

function clearBox()
{
    STATUS.innerHTML = "";
    STATUS.style.padding="0";
}