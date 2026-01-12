// Generate Random ID: 3 Letters + 3 Numbers
function generateId() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  let id = "";

  for (let i = 0; i < 3; i++) {
    id += letters[Math.floor(Math.random() * letters.length)];
  }
  for (let i = 0; i < 3; i++) {
    id += numbers[Math.floor(Math.random() * numbers.length)];
  }
  return id;
}

// Create Purchase Order
function createPurchaseOrder(paymentType) {
  const po = {
    poNumber: generateId(),
    trainerName: "Sharath Kumar",
    training: "Java Full Stack",
    paymentType: paymentType
  };

  // Switch Case for Payment Type
  switch (paymentType) {
    case "Monthly":
      po.months = 5;
      po.rate = 100000;
      po.totalAmount = po.months * po.rate;
      break;

    case "Daily":
      po.days = 100;
      po.rate = 4000;
      po.totalAmount = po.days * po.rate;
      break;

    case "Hourly":
      po.hours = 500;
      po.rate = 800;
      po.totalAmount = po.hours * po.rate;
      break;

    default:
      console.log("❌ Invalid Payment Type");
      return;
  }

  return po;
}

// Create Invoice
function createInvoice(po) {
  const TDS_RATE = 0.10;

  const invoice = {
    invoiceNumber: generateId(),
    poNumber: po.poNumber,
    trainerName: po.trainerName,
    grossAmount: po.totalAmount,
    tdsAmount: po.totalAmount * TDS_RATE
  };

  invoice.netPayable = invoice.grossAmount - invoice.tdsAmount;

  // Payment after 30 days
  const invoiceDate = new Date();
  invoice.paymentDate = new Date(invoiceDate);
  invoice.paymentDate.setDate(invoiceDate.getDate() + 30);

  return invoice;
}

// -----------------------------
// EXECUTION
// -----------------------------
const paymentType = "Monthly"; // Change to "Daily" or "Hourly"

const purchaseOrder = createPurchaseOrder(paymentType);
const invoice = createInvoice(purchaseOrder);

console.log("📄 PURCHASE ORDER");
console.log(purchaseOrder);

console.log("\n🧾 INVOICE");
console.log(invoice);