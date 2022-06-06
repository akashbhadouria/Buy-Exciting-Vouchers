function NewUser(name, email, address, wallet) {
  this.name = name;
  this.email = email;
  this.address = address;
  this.wallet = wallet;
}

// let userArr = JSON.parse(localStorage.getItem("user")) || {};

const getData = (event) => {
  event.preventDefault();

  const form = document.getElementById("form");

  let name = form.name.value;
  let email = form.email.value;
  let address = form.address.value;
  let wallet = form.amount.value;

  let nUser = new NewUser(name, email, address, wallet);
  // console.log(nUser);
  // userArr.push(nUser);

  localStorage.setItem("user", JSON.stringify(nUser));
  form.reset();
};
