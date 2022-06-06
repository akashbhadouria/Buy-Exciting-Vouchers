let arr = JSON.parse(localStorage.getItem("purchase")) || [];

const div = document.getElementById("purchased_vouchers");

console.log(arr);
const append = (data) => {
  //   console.log(data);

  // Amount
  let { wallet } = JSON.parse(localStorage.getItem("user")) || 0;
  console.log(wallet);
  const money = document.getElementById("wallet_balance");
  let h3 = document.createElement("h3");
  money.innerHTML = null;
  h3.innerText = +wallet;
  h3.setAttribute("id", "balance");
  money.append(h3);

  document.getElementById("purchased_vouchers").innerHTML = null;

  let vouchers = JSON.parse(localStorage.getItem("purchase")) || [];

  //   Append
  arr.map((el) => {
    let { name, image, price } = el;

    //   Card
    let card = document.createElement("div");
    card.setAttribute("class", "voucher");

    // Image
    let imgs = document.createElement("img");
    imgs.src = image;

    // Name
    let nm = document.createElement("h3");
    nm.textContent = name;

    // Price
    let prc = document.createElement("p");
    prc.textContent = price;

    // appending
    card.append(imgs, nm, prc);
    div.append(card);
  });
};

append();
