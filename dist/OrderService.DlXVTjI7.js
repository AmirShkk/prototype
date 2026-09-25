import { g as getById$3 } from "./FarmerService.BuornUJX.js";
import { a as getById$2 } from "./HubService.B31WKdJX.js";
const consumerDataList = [{
  id: "con-001",
  name: "Ananya Roy",
  phone: "+91-98111-50001",
  email: "ananya.roy@example.com",
  avatarUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/34f3115a-ee53-4b16-9931-b4c23479c5ee.png",
  city: "Ahmedabad",
  addressLabel: "Navrangpura, Ahmedabad",
  preferredLanguage: "English"
}, {
  id: "con-002",
  name: "Rahul Mehta",
  phone: "+91-98111-50002",
  email: "rahul.mehta@example.com",
  avatarUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/f3c500ff-fb6a-48f8-8d9b-8b41112d8c27.png",
  city: "Patna",
  addressLabel: "Boring Road, Patna",
  preferredLanguage: "Hindi"
}, {
  id: "con-003",
  name: "Priya Nair",
  phone: "+91-98111-50003",
  email: "priya.nair@example.com",
  avatarUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/10e4b7cb-323c-4c55-a3ad-42afc7d931cc.png",
  city: "Ludhiana",
  addressLabel: "Civil Lines, Ludhiana",
  preferredLanguage: "English"
}, {
  id: "con-004",
  name: "Vikram Das",
  phone: "+91-98111-50004",
  email: "vikram.das@example.com",
  avatarUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/060aec5d-1cf4-41d0-b60e-dfb8a2fbcccf.png",
  city: "Mysuru",
  addressLabel: "Vijayanagar, Mysuru",
  preferredLanguage: "Kannada"
}];
function getAll$1() {
  return consumerDataList;
}
function getById$1(id) {
  return consumerDataList.find((item) => item.id === id);
}
function query$1(params) {
  const keyword = params.keyword?.trim().toLowerCase() ?? "";
  const filter = params.filter ?? {};
  return consumerDataList.filter((item) => {
    const matchKeyword = keyword.length === 0 || item.name.toLowerCase().includes(keyword) || item.city.toLowerCase().includes(keyword) || item.email.toLowerCase().includes(keyword);
    const matchFilter = Object.entries(filter).every(([key, val]) => {
      if (val === void 0) return true;
      const itemVal = item[key];
      return Array.isArray(val) ? val.includes(itemVal) : itemVal === val;
    });
    return matchKeyword && matchFilter;
  }).sort((a, b) => {
    const direction = params.sortDirection === "desc" ? -1 : 1;
    const sortKey = params.sortKey;
    if (!sortKey) return a.name.localeCompare(b.name) * direction;
    const av = a[sortKey];
    const bv = b[sortKey];
    if (av === bv) return 0;
    return av > bv ? direction : -direction;
  });
}
function loadPersisted$1() {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem("consumerDataList");
  if (!raw) return null;
  return JSON.parse(raw);
}
function savePersisted$1(items) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem("consumerDataList", JSON.stringify(items));
}
const ConsumerService = {
  getAll: getAll$1,
  getById: getById$1,
  query: query$1,
  loadPersisted: loadPersisted$1,
  savePersisted: savePersisted$1
};
const orderDataList = [{
  id: "ord-1001",
  consumerId: "con-001",
  farmerId: "far-001",
  hubId: "hub-001",
  orderNumber: "FGC-2026-1001",
  status: "Dispatched",
  paymentStatus: "Paid",
  totalAmount: 238,
  subtotalAmount: 220,
  platformFee: 8,
  deliveryFee: 10,
  quantityTotal: 8,
  placedAt: "2026-09-05T09:15:00",
  paidAt: "2026-09-05T09:16:00",
  packedAt: "2026-09-05T12:10:00",
  dispatchedAt: "2026-09-05T13:00:00",
  receivedAt: "",
  completedAt: "",
  pickupCode: "PQ-4812",
  fulfillmentNote: "Packed in recyclable crates for morning hub dispatch."
}, {
  id: "ord-1002",
  consumerId: "con-002",
  farmerId: "far-002",
  hubId: "hub-002",
  orderNumber: "FGC-2026-1002",
  status: "Arrived at Hub",
  paymentStatus: "Paid",
  totalAmount: 456,
  subtotalAmount: 430,
  platformFee: 11,
  deliveryFee: 15,
  quantityTotal: 3,
  placedAt: "2026-09-04T11:20:00",
  paidAt: "2026-09-04T11:21:00",
  packedAt: "2026-09-04T15:05:00",
  dispatchedAt: "2026-09-04T16:40:00",
  receivedAt: "2026-09-04T18:10:00",
  completedAt: "",
  pickupCode: "PQ-9230",
  fulfillmentNote: "Awaiting consumer pickup verification at hub desk."
}, {
  id: "ord-1003",
  consumerId: "con-003",
  farmerId: "far-003",
  hubId: "hub-003",
  orderNumber: "FGC-2026-1003",
  status: "Packed",
  paymentStatus: "Paid",
  totalAmount: 1190,
  subtotalAmount: 1170,
  platformFee: 10,
  deliveryFee: 10,
  quantityTotal: 12,
  placedAt: "2026-09-05T08:40:00",
  paidAt: "2026-09-05T08:41:00",
  packedAt: "2026-09-05T14:25:00",
  dispatchedAt: "",
  receivedAt: "",
  completedAt: "",
  pickupCode: "PQ-1044",
  fulfillmentNote: "Bulk grain order staged for afternoon dispatch."
}, {
  id: "ord-1004",
  consumerId: "con-004",
  farmerId: "far-004",
  hubId: "hub-004",
  orderNumber: "FGC-2026-1004",
  status: "Completed",
  paymentStatus: "Paid",
  totalAmount: 274,
  subtotalAmount: 260,
  platformFee: 4,
  deliveryFee: 10,
  quantityTotal: 5,
  placedAt: "2026-09-03T10:00:00",
  paidAt: "2026-09-03T10:01:00",
  packedAt: "2026-09-03T13:20:00",
  dispatchedAt: "2026-09-03T15:00:00",
  receivedAt: "2026-09-03T17:15:00",
  completedAt: "2026-09-04T09:05:00",
  pickupCode: "PQ-7788",
  fulfillmentNote: "Pickup completed successfully after OTP verification."
}];
function getAll() {
  return orderDataList;
}
function getById(id) {
  return orderDataList.find((item) => item.id === id);
}
function getByConsumerId(consumerId) {
  return orderDataList.filter((item) => item.consumerId === consumerId);
}
function getByFarmerId(farmerId) {
  return orderDataList.filter((item) => item.farmerId === farmerId);
}
function getByHubId(hubId) {
  return orderDataList.filter((item) => item.hubId === hubId);
}
function getByIdVO(orderId) {
  const order = getById(orderId);
  if (!order) return void 0;
  return {
    ...order,
    farmer: getById$3(order.farmerId),
    hub: getById$2(order.hubId),
    consumer: getById$1(order.consumerId)
  };
}
function query(params) {
  const keyword = params.keyword?.trim().toLowerCase() ?? "";
  const filter = params.filter ?? {};
  return orderDataList.filter((item) => {
    const matchKeyword = keyword.length === 0 || item.orderNumber.toLowerCase().includes(keyword) || item.id.toLowerCase().includes(keyword) || item.fulfillmentNote.toLowerCase().includes(keyword);
    const matchFilter = Object.entries(filter).every(([key, val]) => {
      if (val === void 0) return true;
      const itemVal = item[key];
      return Array.isArray(val) ? val.includes(itemVal) : itemVal === val;
    });
    return matchKeyword && matchFilter;
  }).sort((a, b) => {
    const direction = params.sortDirection === "desc" ? -1 : 1;
    const sortKey = params.sortKey;
    if (!sortKey) return b.placedAt.localeCompare(a.placedAt) * direction;
    const av = a[sortKey];
    const bv = b[sortKey];
    if (av === bv) return 0;
    return av > bv ? direction : -direction;
  });
}
function loadPersisted() {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem("orderDataList");
  if (!raw) return null;
  return JSON.parse(raw);
}
function savePersisted(items) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem("orderDataList", JSON.stringify(items));
}
const OrderService = {
  getAll,
  getById,
  getByConsumerId,
  getByFarmerId,
  getByHubId,
  getByIdVO,
  query,
  loadPersisted,
  savePersisted
};
export {
  ConsumerService as C,
  OrderService as O,
  getById as a,
  getById$1 as b,
  getByIdVO as c,
  getAll as d,
  getByFarmerId as g,
  savePersisted as s
};
