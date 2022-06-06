const vouchers = async () => {
  try {
    let url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`;

    let res = await fetch(url);
    let data = await res.json();
    append(data[0].vouchers);
  } catch (err) {
    console.log(err);
  }
};

function makeobj(n, e, ad, wallet) {
  this.name = n;
  this.email = e;
  this.address = ad;
  this.wallet = wallet;
}
let obj = JSON.parse(localStorage.getItem("user")) || {};

let n = obj.name;
let e = obj.email;
let ad = obj.address;

const append = (data) => {
  //   console.log(data);

  // Amount
  let { wallet } = JSON.parse(localStorage.getItem("user")) || 0;
  const money = document.getElementById("wallet_balance");
  money.innerHTML = null;
  money.innerText = +wallet;

  document.getElementById("voucher_list").innerHTML = null;

  let vouchers = JSON.parse(localStorage.getItem("purchase")) || [];
  data.map((el) => {
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

    // button
    let btn = document.createElement("button");
    btn.innerText = "BUY";
    btn.setAttribute("class", "buy_voucher");

    // Appending
    card.append(imgs, nm, prc, btn);

    document.getElementById("voucher_list").append(card);

    btn.addEventListener("click", () => {
      //   console.log(typeof +wallet, +wallet, typeof price, price);
      if (+wallet > price) {
        money.innerHTML = null;
        let h3 = document.createElement("h3");

        wallet = wallet - price;
        h3.innerText = wallet;
        money.append(h3);
        // money.innerText = wallet;
        alert("Hurray! purchase successful");
        let nobj1 = new makeobj(n, e, ad, wallet);
        console.log(nobj1);
        localStorage.setItem("user", JSON.stringify(nobj1));
        vouchers.push(el);
        localStorage.setItem("purchase", JSON.stringify(vouchers));
      } else {
        alert("Sorry! insufficient balance");
      }
    });
  });
};

vouchers();
