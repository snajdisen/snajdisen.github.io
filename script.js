//Hårdkodade lösen och användarnamn

const usrName = "test";
const psWord = "1234";

//Kollar om localstorage loggedIn är sann eller falsk
let loggedIn = window.localStorage.getItem("loggedIn");

//Om true, skriv ut att man är inloggad, om falsk skriv ut att man kan logga in
if (loggedIn) {
  onLogin();
} else {
  renderLogin();
}

//Funktion för att skriva ut logga in fältet.
function renderLogin() {
  document.getElementById("root").innerHTML = `
  <h1>Var god att logga in!</h1>
  <input id="usern" placeholder="Användarnamn" type="text" /><br /><br />

  <input id="pass" placeholder="Lösenord" type="password" />

  <br /><br />
  <button onClick="login()" id="loginBtn">Logga in</button>
  `;
}

//Funktion för att skriva ut felhantering på sidan.
function login() {
  var userName = document.getElementById("usern").value;
  var passWord = document.getElementById("pass").value;
  console.log(userName);
  console.log(passWord);
  if (userName == usrName && passWord == psWord) {
    console.log("success");
    loggedIn = true;
    onLogin();
  } else {
    document.getElementById("root").innerHTML = `
      <h1>Fel användarnamn eller lösen</h1>
      <button onClick="renderLogin()">Försök igen</button>
      `;
  }
}

//Funktion för att skriva ut om man är inloggad samt en logga ut knapp
//Den här funktionen kallar även på setStorage som sätter en bool i localstorage.
//Om inloggningen lyckades så kommer true sättas i localstorage.
//Om inloggningen ej lyckades så kommer ingenting sättas i localstorage.
//Bool används för att kolla om man är inloggad eller inte på sidan.
function onLogin() {
  document.getElementById("root").innerHTML = "";
  document.getElementById("root").innerHTML = `
  <div>
  <h1>Du är nu inloggad!</h1>
  <button onClick="clearStorage()">Logga ut</button>
</div>

  <div id="lsOutput">



  </div>
  `;
  setStorage();
}
function setStorage() {
  window.localStorage.setItem("loggedIn", true);
}
function clearStorage() {
  window.localStorage.clear();
  renderLogin();
}
