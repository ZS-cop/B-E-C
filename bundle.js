(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
  // // Importing database
  // let couchdb = require('node-couchdb');
  // const couch = new couchdb({
  //   host: 'couchdb.external.service',
  //   protocol: 'http',
  //   port: 5984
  // });
  // couch.createDatabase("user_accounts").then(() => (res , err) => {
  //   if(err){
  //     console.log(err)
  //   }
  //   else{
  //     window.alert("h")
  //   }
  // });
  
  // Encryption
  let encryption = (password) => {
    let passworde = CryptoJS.AES.encrypt(password, "");
    return passworde.toString();
  };
  
  console.log(encryption("Hello world"));
  // Adding the account
  // document.getElementById("btn_join").addEventListener("click", () => {
  //   if (document.getElementById("password_join").value == document.getElementById("password_joinr").value) {
  //     if (document.getElementById("btn_join").style.opacity == 1) {
  //       // db.put({
  //       //   _id: encryption(document.getElementById("username_join").value),
  //       //   password: encryption(document.getElementById("password_join").value),
  //       //   email: encryption(document.getElementById("email_join").value),
  //       //   name: encryption(document.getElementById("name_join").value)
  //       // }).then(function (response) {
  //       //   console.log("Done")
  //       //   window.alert("Done")
  //       // }).catch(function (err) {
  //       //   console.log(err);
  //       //   window.alert("Error email us the error on devyanshnarayanthegreat@gmail.com")
  //       // });
  //       // db.changes().on('change', function() {
  //       //   console.log('Ch-Ch-Changes');
  //       // });
  
  //       // db.replicate.to('http://127.0.0.1:5984/_utils/#database/accounts_user/_all_docs');
  //       db.saveDoc({
  //         _id: encryption(document.getElementById("username_join").value),
  //         password: encryption(document.getElementById("password_join").value),
  //         email: encryption(document.getElementById("email_join").value),
  //         name: encryption(document.getElementById("name_join").value)
  //       }).then(function () {
  //         console.log('document saved!');
  
  //         db.openDoc('helloCouch').then(function (doc) {
  //           console.log('retrieved document!');
  //           console.log(JSON.stringify(doc));
  //         });
  //       });
  //     }
  //     else { window.alert("Fill the information") }
  //   }
  //   else { window.alert("Please check your retyped password/information not filled") }
  // });
  
  let input_list = [
    document.getElementById("username_login"),
    document.getElementById("password_login"),
  ];
  
  input_list.forEach((elements) => {
    elements.addEventListener("input", () => {
      if (
        document.getElementById("username_login").value != "" &&
        document.getElementById("password_login").value != ""
      ) {
        document.getElementById("btn_login").style.opacity = "1";
      } else {
        document.getElementById("btn_login").style.opacity = "0.5";
      }
    });
  });
  
  document.addEventListener("keypress", (e) => {
    if (e.shiftKey && e.key === 'D') {
      document.querySelector("html").classList.toggle("dark");
    }
  });
  
  document.getElementById("join_log").addEventListener("click", () => {
    document.querySelector("title").innerHTML = "BO E COMMERCE - JOIN US";
    document.getElementById("login_box").setAttribute("class", "none");
    document.getElementById("join_box").setAttribute("class", "flex center cols white md-radius shadow");
  });
  
  document.getElementById("log_join").addEventListener("click", () => {
    document.querySelector("title").innerHTML = "BO E COMMERCE - LOGIN";
    document.getElementById("join_box").setAttribute("class", "none");
    document.getElementById("login_box").setAttribute("class", "flex center cols white md-radius shadow");
  });
  
  let input_list_join = [
    document.getElementById("username_join"),
    document.getElementById("name_join"),
    document.getElementById("email_join"),
    document.getElementById("password_join"),
    document.getElementById("password_joinr"),
  ];
  
  input_list_join.forEach((elements) => {
    elements.addEventListener("input", () => {
      let r = -3;
      input_list_join.forEach((elements) => {
        if (elements.value != "") {
          r += 1;
        } else {
          r -= 1;
        }
      });
      if (r > 0) {
        document.getElementById("btn_join").style.opacity = "1";
      } else {
        document.getElementById("btn_join").style.opacity = "0.5";
      }
    });
  });
  
  let join_btn = (info) => {
    if (info.value != "") {
      document.getElementById("btn_join").style.opacity = "1";
    } else {
      document.getElementById("btn_join").style.opacity = "0.5";
    }
  };
  
  let psj = false;
  
  document.getElementById("password_see_join").addEventListener("click", () => {
    if (psj == false) {
      document.getElementById("password_join").setAttribute("type", "text");
      document.getElementById("password_joinr").setAttribute("type", "text");
      document.getElementById("password_see_join").innerHTML =
        "Hide the password";
      psj = true;
    } else {
      document.getElementById("password_join").setAttribute("type", "password");
      document.getElementById("password_joinr").setAttribute("type", "password");
      document.getElementById("password_see_join").innerHTML =
        "Show the password";
      psj = false;
    }
  });
  
  let psl = false;
  
  document.getElementById("password_see_login").addEventListener("click", () => {
    if (psl == false) {
      document.getElementById("password_login").setAttribute("type", "text");
      document.getElementById("password_see_login").innerHTML =
        "Hide the password";
      psl = true;
    } else {
      document.getElementById("password_login").setAttribute("type", "password");
      document.getElementById("password_see_login").innerHTML =
        "Show the password";
      psl = false;
    }
  });
  
  },{}]},{},[1]);
  