
function checkCashRegister(price, cash, cid) {
    const getCidTotal = () => {
      return cid.reduce((a, b) => a + b[1], 0).toFixed(2);
    };
  const lowFunds = { status: "INSUFFICIENT_FUNDS", change: [] };
  const closed = { status: "CLOSED", change: cid };
  const openStatus = { status: "OPEN", change: [] };
  let totalCid = parseFloat(getCidTotal());
  let balanceDue = parseFloat((cash - price).toFixed(2));

  if (totalCid < balanceDue) {
    return lowFunds;
  }

  if (totalCid === balanceDue) {
    return closed;
  }

  let cashInDrawer = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01],
  ];

  for (let i = 0; i < cashInDrawer.length; i++) {
    let currencyUnit = cashInDrawer[i][0];
    let amount = cashInDrawer[i][1];
    let totalCash = cid.find((item) => item[0] === currencyUnit)[1];

    if (balanceDue > amount && balanceDue > totalCash) {
      balanceDue -= totalCash;
      openStatus.change.push([currencyUnit, totalCash]);
    } else if (balanceDue > amount && totalCash > balanceDue) {
      let payment = Math.floor(balanceDue / amount) * amount;
      balanceDue -= payment;
      balanceDue = parseFloat(balanceDue.toFixed(2));
      openStatus.change.push([currencyUnit, payment]);
    }
  }

  if (balanceDue > 0) {
    return lowFunds;
  }

  return openStatus;

//   const getCidTotal = () => {
//     return cid.reduce((a, b) => a + b[1], 0).toFixed(2);
//   };
}

console.log(checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]));
