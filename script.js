// Importing database
let PouchDB = require('pouchdb');
let db = new PouchDB('Accounts_Database');

// Encryption
let encryption = password => {
  let passworde = CryptoJS.AES.encrypt(password, "");
  return passworde.toString();
};

console.log(encryption("Hello world"));
// Adding the account
document.getElementById("btn_join").addEventListener("click", () => {
  if (document.getElementById("password_join").value == document.getElementById("password_joinr").value) {
    if (document.getElementById("btn_join").style.opacity == 1) {
      db.put({
        _id: encryption(document.getElementById("username_join").value),
        password: encryption(document.getElementById("password_join").value),
        email: encryption(document.getElementById("email_join").value),
        name: encryption(document.getElementById("name_join").value)
      }).then(function (response) {
        console.log("Done")
        window.alert("Done")
      }).catch(function (err) {
        console.log(err);
        window.alert("Error email us the error on devyanshnarayanthegreat@gmail.com")
      });
    }
    else{window.alert("Fill the information")}
  }
  else{window.alert("Please check your retyped password/information not filled")}
});

let input_list = [document.getElementById("username_login"), document.getElementById("password_login")];

input_list.forEach(elements => {
  elements.addEventListener("input", () => {
    if (document.getElementById("username_login").value != "" && document.getElementById("password_login").value != "") {
      document.getElementById("btn_login").style.opacity = "1";
    }
    else {
      document.getElementById("btn_login").style.opacity = "0.5";
    }
  })
});

document.getElementById("join_log").addEventListener("click", () => {
  document.querySelector("title").innerHTML = "BO E COMMERCE - JOIN US";
  document.getElementById("login_box").setAttribute("class", "none");
  document.getElementById("join_box").setAttribute("class", "flex center cols white md-radius shadow");
})

document.getElementById("log_join").addEventListener("click", () => {
  document.querySelector("title").innerHTML = "BO E COMMERCE - LOGIN";
  document.getElementById("join_box").setAttribute("class", "none");
  document.getElementById("login_box").setAttribute("class", "flex center cols white md-radius shadow");
});

let input_list_join = [document.getElementById("username_join"), document.getElementById("name_join"), document.getElementById("email_join"), document.getElementById("password_join"), document.getElementById("password_joinr")]

input_list_join.forEach(elements => {
  elements.addEventListener("input", () => {
    let r = -3;
    input_list_join.forEach(elements => {
      if (elements.value != "") {
        r += 1;
      }
      else {
        r -= 1;
      }
    });
    if (r > 0) {
      document.getElementById("btn_join").style.opacity = "1";
    }
    else {
      document.getElementById("btn_join").style.opacity = "0.5";
    }
  })
});

let join_btn = (info) => {
  if (info.value != "") {
    document.getElementById("btn_join").style.opacity = "1";
  }
  else {
    document.getElementById("btn_join").style.opacity = "0.5";
  }
}

let psj = false;

document.getElementById("password_see_join").addEventListener("click", () => {
  if (psj == false) {
    document.getElementById("password_join").setAttribute("type", "text");
    document.getElementById("password_joinr").setAttribute("type", "text");
    document.getElementById("password_see_join").innerHTML = "Hide the password"
    psj = true
  }
  else {
    document.getElementById("password_join").setAttribute("type", "password");
    document.getElementById("password_joinr").setAttribute("type", "password");
    document.getElementById("password_see_join").innerHTML = "Show the password"
    psj = false
  }
})

let psl = false;

document.getElementById("password_see_login").addEventListener("click", () => {
  if (psl == false) {
    document.getElementById("password_login").setAttribute("type", "text");
    document.getElementById("password_see_login").innerHTML = "Hide the password"
    psl = true
  }
  else {
    document.getElementById("password_login").setAttribute("type", "password");
    document.getElementById("password_see_login").innerHTML = "Show the password"
    psl = false
  }
})
