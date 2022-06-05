const firebaseConfig = {
    apiKey: "AIzaSyApV-wS_TjQIF0yz4p_y0sEI0eow4WVgx4",
    authDomain: "e-wallet-loga.firebaseapp.com",
    databaseURL: "https://e-wallet-loga-default-rtdb.firebaseio.com",
    projectId: "e-wallet-loga",
    storageBucket: "e-wallet-loga.appspot.com",
    messagingSenderId: "470975209201",
    appId: "1:470975209201:web:5f1f092637a50b278d9350"
  };
  firebase.initializeApp(firebaseConfig);
var contactdb = firebase.database().ref("form");

document.getElementById("form").addEventListener("submit", submitform);

function submitform(e) {
    e.preventDefault();
    var name = getval("name");
    var mail = getval("email");
    var bank = getval("bank");
    var acno =getval("acnum")
    var password = getval("password");

    savemessage(name,mail,bank , acno, password);


}
const savemessage = (name,mail,bank , acno, password) => {
    var newcontactdb = contactdb.push();
    newcontactdb.set({
        name: name,
        mail: mail,
        bank:bank,
        acno:acno,
        password: password
    });
}

const getval = (id) => {
    return document.getElementById(id).value;


}
