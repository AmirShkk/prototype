const hubDataList = [{
  id: "hub-001",
  name: "GreenLink Central Hub",
  code: "GLH-01",
  city: "Ahmedabad",
  region: "Gujarat",
  managerName: "Neha Shah",
  phone: "+91-98900-30001",
  address: "Sector 14, Near Market Yard, Ahmedabad",
  geoLabel: "Central Warehouse Zone",
  operatingHours: "07:00-20:00"
}, {
  id: "hub-002",
  name: "Harvest Gate Hub",
  code: "HGH-02",
  city: "Patna",
  region: "Bihar",
  managerName: "Imran Ali",
  phone: "+91-98900-30002",
  address: "Ring Road, Industrial Area, Patna",
  geoLabel: "North Distribution Dock",
  operatingHours: "08:00-19:00"
}, {
  id: "hub-003",
  name: "FreshRoute Exchange",
  code: "FRE-03",
  city: "Ludhiana",
  region: "Punjab",
  managerName: "Kavita Verma",
  phone: "+91-98900-30003",
  address: "Transport Nagar, Ludhiana",
  geoLabel: "Cold Storage Wing",
  operatingHours: "06:30-21:00"
}, {
  id: "hub-004",
  name: "FarmBridge Hub",
  code: "FBH-04",
  city: "Mysuru",
  region: "Karnataka",
  managerName: "Prakash Reddy",
  phone: "+91-98900-30004",
  address: "Outer Ring Road, Mysuru",
  geoLabel: "South Pickup Center",
  operatingHours: "07:30-20:30"
}];
function getAll() {
  return hubDataList;
}
function getById(id) {
  return hubDataList.find((item) => item.id === id);
}
function query(params) {
  const keyword = params.keyword?.trim().toLowerCase() ?? "";
  const filter = params.filter ?? {};
  return hubDataList.filter((item) => {
    const matchKeyword = keyword.length === 0 || item.name.toLowerCase().includes(keyword) || item.code.toLowerCase().includes(keyword) || item.city.toLowerCase().includes(keyword);
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
function loadPersisted() {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem("hubDataList");
  if (!raw) return null;
  return JSON.parse(raw);
}
function savePersisted(items) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem("hubDataList", JSON.stringify(items));
}
const HubService = {
  getAll,
  getById,
  query,
  loadPersisted,
  savePersisted
};
export {
  HubService as H,
  getById as a,
  getAll as g
};
