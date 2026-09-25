const farmerDataList = [{
  id: "far-001",
  name: "Ramesh Patel",
  village: "Nandipur",
  region: "Gujarat",
  language: "Hindi",
  phone: "+91-98765-12001",
  avatarUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/f9e7fe03-9319-49e5-ac2f-98f3fb2b9b98.png",
  bio: "Grows seasonal vegetables using low-water farming methods and direct-harvest scheduling.",
  rating: 4.8,
  verificationStatus: "Verified"
}, {
  id: "far-002",
  name: "Sushila Devi",
  village: "Bela",
  region: "Bihar",
  language: "Hindi",
  phone: "+91-98765-12002",
  avatarUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/cbab3368-4eb0-4683-b061-0313fc1e4cba.png",
  bio: "Supplies orchard produce and leafy greens with careful same-day packing.",
  rating: 4.7,
  verificationStatus: "Verified"
}, {
  id: "far-003",
  name: "Arjun Singh",
  village: "Kheda",
  region: "Punjab",
  language: "Punjabi",
  phone: "+91-98765-12003",
  avatarUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/e3d1ebcd-dd28-4d8c-9559-5f499d0f6d36.png",
  bio: "Focuses on grains, pulses, and bulk inventory planning for hub-based distribution.",
  rating: 4.6,
  verificationStatus: "Verified"
}, {
  id: "far-004",
  name: "Lakshmi Naik",
  village: "Puttur",
  region: "Karnataka",
  language: "Kannada",
  phone: "+91-98765-12004",
  avatarUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2026/9/6/19a14d18-2b6f-4a85-b28f-1c300187831a.png",
  bio: "Manages mixed farming with spices, dairy, and steady small-batch supply.",
  rating: 4.9,
  verificationStatus: "Verified"
}];
function getAll() {
  return farmerDataList;
}
function getById(id) {
  return farmerDataList.find((item) => item.id === id);
}
function query(params) {
  const keyword = params.keyword?.trim().toLowerCase() ?? "";
  const filter = params.filter ?? {};
  return farmerDataList.filter((item) => {
    const matchKeyword = keyword.length === 0 || item.name.toLowerCase().includes(keyword) || item.village.toLowerCase().includes(keyword) || item.region.toLowerCase().includes(keyword);
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
  const raw = window.localStorage.getItem("farmerDataList");
  if (!raw) return null;
  return JSON.parse(raw);
}
function savePersisted(items) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem("farmerDataList", JSON.stringify(items));
}
const FarmerService = {
  getAll,
  getById,
  query,
  loadPersisted,
  savePersisted
};
export {
  FarmerService as F,
  getAll as a,
  getById as g
};
