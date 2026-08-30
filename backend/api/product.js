function createProduct(name, sku, quantity) {
  if (!name || !sku) {
    throw new Error("Tên và mã SKU không được để trống");
  }
  return { name, sku, quantity, createdAt: new Date() };
}

module.exports = { createProduct };