import { a as getById$1, b as getById$3 } from "./OrderService.DlXVTjI7.js";
import { a as getById$2 } from "./HubService.B31WKdJX.js";
const pickupVerificationDataList = [{
  id: "pup-001",
  orderId: "ord-1002",
  hubId: "hub-002",
  consumerId: "con-002",
  status: "Pending",
  verificationMode: "OTP",
  otpMasked: "•••• 9230",
  qrTokenMasked: "QR-••••-1002",
  verifiedAt: "",
  verifiedBy: ""
}, {
  id: "pup-002",
  orderId: "ord-1004",
  hubId: "hub-004",
  consumerId: "con-004",
  status: "Completed",
  verificationMode: "QR",
  otpMasked: "•••• 7788",
  qrTokenMasked: "QR-••••-1004",
  verifiedAt: "2026-09-04T09:05:00",
  verifiedBy: "Meena"
}];
function getAll() {
  return pickupVerificationDataList;
}
function getById(id) {
  return pickupVerificationDataList.find((item) => item.id === id);
}
function getByOrderId(orderId) {
  return pickupVerificationDataList.find((item) => item.orderId === orderId);
}
function getByOrderIdVO(orderId) {
  const item = getByOrderId(orderId);
  if (!item) return void 0;
  return {
    ...item,
    consumer: getById$3(item.consumerId),
    hub: getById$2(item.hubId),
    order: getById$1(item.orderId)
  };
}
function query(params) {
  const keyword = params.keyword?.trim().toLowerCase() ?? "";
  const filter = params.filter ?? {};
  return pickupVerificationDataList.filter((item) => {
    const matchKeyword = keyword.length === 0 || item.id.toLowerCase().includes(keyword) || item.otpMasked.toLowerCase().includes(keyword) || item.qrTokenMasked.toLowerCase().includes(keyword);
    const matchFilter = Object.entries(filter).every(([key, val]) => {
      if (val === void 0) return true;
      const itemVal = item[key];
      return Array.isArray(val) ? val.includes(itemVal) : itemVal === val;
    });
    return matchKeyword && matchFilter;
  }).sort((a, b) => {
    const direction = params.sortDirection === "desc" ? -1 : 1;
    const sortKey = params.sortKey;
    if (!sortKey) return a.id.localeCompare(b.id) * direction;
    const av = a[sortKey];
    const bv = b[sortKey];
    if (av === bv) return 0;
    return av > bv ? direction : -direction;
  });
}
function loadPersisted() {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem("pickupVerificationDataList");
  if (!raw) return null;
  return JSON.parse(raw);
}
function savePersisted(items) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem("pickupVerificationDataList", JSON.stringify(items));
}
const PickupVerificationService = {
  getAll,
  getById,
  getByOrderId,
  getByOrderIdVO,
  query,
  loadPersisted,
  savePersisted
};
export {
  PickupVerificationService as P
};
