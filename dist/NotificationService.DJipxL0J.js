const notificationDataList = [{
  id: "not-001",
  recipientRole: "Farmer",
  recipientId: "far-001",
  type: "Order",
  title: "New order received",
  message: "Consumer Ananya Roy placed an order for Fresh Spinach Bundle.",
  relatedEntityType: "Order",
  relatedEntityId: "ord-1001",
  isRead: false,
  createdAt: "2026-09-05T09:16:30",
  priority: "High",
  iconName: "ShoppingCart"
}, {
  id: "not-002",
  recipientRole: "Hub",
  recipientId: "hub-002",
  type: "Delivery",
  title: "Delivery arrived at hub",
  message: "Harvest Gate Hub received a parcel from farmer Sushila Devi.",
  relatedEntityType: "Delivery",
  relatedEntityId: "del-002",
  isRead: false,
  createdAt: "2026-09-04T18:10:30",
  priority: "High",
  iconName: "Truck"
}, {
  id: "not-003",
  recipientRole: "Consumer",
  recipientId: "con-003",
  type: "Payment",
  title: "Payment confirmed",
  message: "Your payment for order FGC-2026-1003 has been confirmed successfully.",
  relatedEntityType: "Payment",
  relatedEntityId: "pay-003",
  isRead: true,
  createdAt: "2026-09-05T08:41:10",
  priority: "Medium",
  iconName: "BadgeCheck"
}, {
  id: "not-004",
  recipientRole: "Farmer",
  recipientId: "far-004",
  type: "Alert",
  title: "Low stock warning",
  message: "Black Pepper Pack is moving quickly. Consider restocking soon.",
  relatedEntityType: "Product",
  relatedEntityId: "prd-007",
  isRead: false,
  createdAt: "2026-09-05T11:15:00",
  priority: "Medium",
  iconName: "Bell"
}];
function getByRecipient(role, recipientId) {
  return notificationDataList.filter((item) => item.recipientRole === role && item.recipientId === recipientId);
}
export {
  getByRecipient as g
};
