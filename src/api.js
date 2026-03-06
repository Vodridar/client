const API_URL = "http://localhost:5000/api";

export const api = {
  getProducts: async (category = "all") => {
    const url =
      category === "all"
        ? `${API_URL}/products`
        : `${API_URL}/products?category=${category}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Ошибка загрузки товаров");
    return response.json();
  },

  getProduct: async (id) => {
    // Преобразуем id в число, если это строка
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) throw new Error("Неверный ID товара");

    const response = await fetch(`${API_URL}/products/${numericId}`);
    if (!response.ok) throw new Error("Товар не найден");
    return response.json();
  },

  getCategories: async () => {
    const response = await fetch(`${API_URL}/categories`);
    if (!response.ok) throw new Error("Ошибка загрузки категорий");
    return response.json();
  },

  submitContactForm: async (formData) => {
    const response = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (!response.ok) throw new Error("Ошибка отправки формы");
    return response.json();
  },
};