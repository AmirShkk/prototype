import { g as getById$2 } from "./FarmerService.BuornUJX.js";
const categoryDataList = [{
  id: "cat-veg",
  name: "Vegetables",
  iconName: "Carrot",
  sortOrder: 1,
  isActive: true
}, {
  id: "cat-fruit",
  name: "Fruits",
  iconName: "Apple",
  sortOrder: 2,
  isActive: true
}, {
  id: "cat-grain",
  name: "Grains",
  iconName: "Wheat",
  sortOrder: 3,
  isActive: true
}, {
  id: "cat-dairy",
  name: "Dairy",
  iconName: "Milk",
  sortOrder: 4,
  isActive: true
}, {
  id: "cat-pulse",
  name: "Pulses",
  iconName: "Sprout",
  sortOrder: 5,
  isActive: true
}, {
  id: "cat-spice",
  name: "Spices",
  iconName: "Flame",
  sortOrder: 6,
  isActive: true
}];
function getAll$1() {
  return categoryDataList;
}
function getById$1(id) {
  return categoryDataList.find((item) => item.id === id);
}
const productDataList = [{
  id: "prd-001",
  farmerId: "far-001",
  categoryId: "cat-veg",
  name: "Fresh Spinach Bundle",
  description: "Tender spinach harvested early morning and packed for same-day delivery to the hub.",
  unit: "bundle",
  pricePerUnit: 28,
  stockQty: 120,
  status: "Available",
  harvestDate: "2026-09-04",
  createdAt: "2026-09-01",
  updatedAt: "2026-09-05",
  imageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/816de550-ae90-4e31-b71a-27230ff2437d.png",
  organicCertified: true,
  minOrderQty: 2
}, {
  id: "prd-002",
  farmerId: "far-001",
  categoryId: "cat-veg",
  name: "Tomato Crate",
  description: "Juicy vine-ripened tomatoes suitable for daily cooking and bulk household orders.",
  unit: "kg",
  pricePerUnit: 34,
  stockQty: 86,
  status: "Available",
  harvestDate: "2026-09-03",
  createdAt: "2026-08-28",
  updatedAt: "2026-09-05",
  imageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/a2574869-c1eb-4178-a5aa-e59756c4a0fb.png",
  organicCertified: false,
  minOrderQty: 1
}, {
  id: "prd-003",
  farmerId: "far-002",
  categoryId: "cat-fruit",
  name: "Kesar Mango Box",
  description: "Sweet Kesar mangoes sorted by size and quality for premium consumer pickup orders.",
  unit: "box",
  pricePerUnit: 220,
  stockQty: 44,
  status: "Available",
  harvestDate: "2026-08-31",
  createdAt: "2026-08-25",
  updatedAt: "2026-09-04",
  imageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/57ed03d5-4467-4f65-8afb-58857cf41dfd.png",
  organicCertified: true,
  minOrderQty: 1
}, {
  id: "prd-004",
  farmerId: "far-002",
  categoryId: "cat-veg",
  name: "Moringa Leaves Pack",
  description: "Nutrient-rich moringa leaves washed and ready for family meals and wellness orders.",
  unit: "pack",
  pricePerUnit: 42,
  stockQty: 18,
  status: "Low Stock",
  harvestDate: "2026-09-04",
  createdAt: "2026-08-30",
  updatedAt: "2026-09-05",
  imageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/e179f190-7e3c-4340-bb33-f374a8dd20b8.png",
  organicCertified: true,
  minOrderQty: 1
}, {
  id: "prd-005",
  farmerId: "far-003",
  categoryId: "cat-grain",
  name: "Basmati Rice Sack",
  description: "Aged basmati rice stored carefully and shipped in sealed sacks for bulk buyers.",
  unit: "sack",
  pricePerUnit: 980,
  stockQty: 27,
  status: "Available",
  harvestDate: "2026-08-20",
  createdAt: "2026-08-22",
  updatedAt: "2026-09-03",
  imageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/d7519bdf-29fb-46b9-a19d-8d34651bac31.png",
  organicCertified: false,
  minOrderQty: 1
}, {
  id: "prd-006",
  farmerId: "far-003",
  categoryId: "cat-pulse",
  name: "Toor Dal Bag",
  description: "Clean sorted toor dal with strong shelf life for value-focused family orders.",
  unit: "kg",
  pricePerUnit: 118,
  stockQty: 62,
  status: "Available",
  harvestDate: "2026-08-26",
  createdAt: "2026-08-27",
  updatedAt: "2026-09-02",
  imageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/a36efa5b-44e2-44f3-8730-4fb8b5fa5925.png",
  organicCertified: false,
  minOrderQty: 2
}, {
  id: "prd-007",
  farmerId: "far-004",
  categoryId: "cat-spice",
  name: "Black Pepper Pack",
  description: "Aromatic black pepper sourced from mixed-farm spice plots and packed in sealed pouches.",
  unit: "pack",
  pricePerUnit: 160,
  stockQty: 35,
  status: "Available",
  harvestDate: "2026-08-29",
  createdAt: "2026-08-29",
  updatedAt: "2026-09-04",
  imageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/4de5986a-d66c-48ab-b914-bfe84b280aa3.png",
  organicCertified: true,
  minOrderQty: 1
}, {
  id: "prd-008",
  farmerId: "far-004",
  categoryId: "cat-dairy",
  name: "Cow Milk Can",
  description: "Fresh pasteurized milk collected in the morning and handled through hub cold-chain flow.",
  unit: "litre",
  pricePerUnit: 62,
  stockQty: 58,
  status: "Available",
  harvestDate: "2026-09-05",
  createdAt: "2026-09-01",
  updatedAt: "2026-09-05",
  imageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/9d61a710-66d1-4608-8894-e148c8fcd07b.png",
  organicCertified: true,
  minOrderQty: 1
}];
function getAll() {
  return productDataList;
}
function getById(id) {
  return productDataList.find((item) => item.id === id);
}
function getByFarmerId(farmerId) {
  return productDataList.filter((item) => item.farmerId === farmerId);
}
function getByIdVO(productId) {
  const product = getById(productId);
  if (!product) return void 0;
  return {
    ...product,
    farmer: getById$2(product.farmerId),
    category: getById$1(product.categoryId)
  };
}
function loadPersisted() {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem("productDataList");
  if (!raw) return null;
  return JSON.parse(raw);
}
function savePersisted(items) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem("productDataList", JSON.stringify(items));
}
export {
  getById as a,
  getById$1 as b,
  getAll as c,
  getByIdVO as d,
  getByFarmerId as e,
  getAll$1 as g,
  loadPersisted as l,
  productDataList as p,
  savePersisted as s
};
