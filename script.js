const PHONE = "213657099450";

document.querySelectorAll(".order-btn").forEach(button => {
  button.addEventListener("click", () => {
    const productName = button.dataset.name;
    const message = `I want to order: ${productName}`;
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });
});
