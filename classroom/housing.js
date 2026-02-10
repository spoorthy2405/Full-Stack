// Base values
const ratePerSft = 2500;
const carParkingCost = 100000;
const highRiseChargePerSft = 10;
const floorNumber = 7;

// Flat sizes (sample data)
const flat2BHK = 1000; // sft
const flat3BHK = 1400; // sft

// Function to calculate flat cost
function calculateFlatCost(flatSize) {
  let baseCost = flatSize * ratePerSft;
  
  let highRiseCost = 0;
  if (floorNumber > 5) {
    highRiseCost = flatSize * highRiseChargePerSft;
  }

  let totalCost = baseCost + highRiseCost + carParkingCost;

  return {
    baseCost,
    highRiseCost,
    carParkingCost,
    totalCost
  };
}

// Calculate costs
const cost2BHK = calculateFlatCost(flat2BHK);
const cost3BHK = calculateFlatCost(flat3BHK);

// Output
console.log("2BHK Flat Cost Details:");
console.log(cost2BHK);

console.log("3BHK Flat Cost Details:");
console.log(cost3BHK);
