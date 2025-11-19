function checkCashRegister(price, cash, cid) {
  // convert everything to cents

  const UNIT_AMOUNT = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    "ONE HUNDRED": 10000,
  };

  let changeDue = Math.round((cash - price) * 100);

  // total cash in drawer (in cents)

  let totalCid = cid.reduce((sum, [unit, amount]) => {
    return sum + Math.round(amount * 100);
  }, 0);

  // case 1 : not enough money in drawer at all

  if (totalCid < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // case 2 : Exact match (drawer empty)

  if (totalCid === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  // case 3 : CID > changeDue, give change using largest units first

  let changeArr = [];

  let reversedCid = cid.slice().reverse();

  for (let [unit, amount] of reversedCid) {
    let unitValue = UNIT_AMOUNT[unit]; // in cents
    let available = Math.round(amount * 100); // in cents
    let used = 0;

    // Greedy: use as much of this unit as possible without exceeding changeDue

    while (changeDue >= unitValue && available > 0) {
      changeDue -= unitValue;
      available -= unitValue;
      used += unitValue;
    }

    if (used > 0) {
      changeArr.push([unit, used / 100]); // convert back to dollars
    }
  }

  // If we still owe change, we couldn’t make exact change with given denominations

  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeArr };
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
