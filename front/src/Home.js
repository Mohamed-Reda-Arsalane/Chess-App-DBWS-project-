import React, { useState } from "react";
import { Tabs, Tab, Table, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";
import axios from "axios";
import PasswordChecklist from "react-password-checklist";
async function get1(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
async function post1(url, username1, password) {
  const json = JSON.stringify({
    Username: username1,
    Password: password,
    Wins: 0,
  });
  const res = await axios.post(url, json, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
async function setposition(url, user, pos) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      User_ID: user["User_ID"],
      Username: user["Username"],
      Password: user["Password"],
      Wins: user["Wins"],
      Is_online: true,
      Position: pos,
    }),
  };
  fetch(url, requestOptions);
}
async function setpositionofguest(url, pos) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      User_ID: 36,
      Username: "Guest_2",
      Password: "Default_Password1",
      Wins: 0,
      Is_online: true,
      Position: pos,
    }),
  };
  fetch(url, requestOptions);
}
const Home = () => {
  var CryptoJS = require("crypto-js");
  const [users, setUsers] = useState([]);
  async function reload() {
    let data = await get1("https://azertyha78.pythonanywhere.com/user");
    setUsers(data);
  }
  const [usernamelogin, setUsernamelogin] = useState("");
  function onChangeusername1(e) {
    setUsernamelogin(e.target.value);
    reload();
  }
  const [passwordlogin, setPasswordlogin] = useState("");
  function onChangeusername2(e) {
    setPasswordlogin(e.target.value);
    reload();
  }
  function setpos(url, user) {
    navigator.geolocation.getCurrentPosition(async function (position) {
      var obj =
        position.coords.latitude.toString() +
        " " +
        position.coords.longitude.toString();
      await setposition(url, user, obj);
    });
  }
  function setguestpos() {
    navigator.geolocation.getCurrentPosition(async function (position) {
      var obj =
        position.coords.latitude.toString() +
        " " +
        position.coords.longitude.toString();
      await setpositionofguest(
        "https://azertyha78.pythonanywhere.com/user",
        obj
      );
    });
  }
  function onlogin(usernamelogin1, passwordlogin1) {
    const rand = "randomizer";
    const encrypt = (content, randi) =>
      CryptoJS.AES.encrypt(JSON.stringify({ content }), randi).toString();

    const decrypt = (crypted, randi) =>
      JSON.parse(
        CryptoJS.AES.decrypt(crypted, randi).toString(CryptoJS.enc.Utf8)
      ).content;
    reload();
    var state = false;
    for (var i = 0; i < users.length; i++) {
      var obj = users[i];
      if (usernamelogin1 === obj["Username"]) {
        if (passwordlogin1 === obj["Password"]) {
          for (var i = 0; i < users.length; i++) {
            if (users[i]["Username"] == usernamelogin1) {
              var encri = encrypt(users[i]["User_ID"], rand);
              setpos("https://azertyha78.pythonanywhere.com/user", users[i]);
            }
          }
          var decrypted = decrypt(encri, rand);
          window.location = "/Dashboard/" + encri;
          state = true;
        }
      }
    }
    if (!state) {
      alert("Try again!");
    }
  }
  const [usernameregister, setUsernameregister] = useState("");
  function onChangeusername3(e) {
    setUsernameregister(e.target.value);
    reload();
  }
  const [passwordregister, setPasswordregister] = useState("");
  function onChangeusername4(e) {
    setPasswordregister(e.target.value);
    reload();
  }
  async function postit() {
    let data = await post1(
      "https://azertyha78.pythonanywhere.com/user",
      usernameregister,
      passwordregister
    );
  }
  async function onregister() {
    reload();
    if (!(usernameregister === "" || passwordregister === "")) {
      var state = true;
      for (var i = 0; i < users.length; i++) {
        var obj = users[i];
        if (usernameregister === obj["Username"]) {
          state = false;
        }
      }
      if (state) {
        if (passwordregister.length >= 7) {
          if (passwordregister.length < 19) {
            if (hasNumber(passwordregister)) {
              postit();
              setUsernameregister("");
              setPasswordregister("");
              reload();
            } else {
              alert("Password doesn't contain a number");
            }
          } else {
            alert("Password too long");
            setPasswordregister("");
          }
        } else {
          alert("Password too short");
          setPasswordregister("");
        }
      } else {
        alert("Username Already used");
        setUsernameregister("");
      }
    } else {
      alert("Enter the required fields");
    }
  }
  function hasNumber(myString) {
    return /\d/.test(myString);
  }
  async function enter_as_guest() {
    var d = await reload();
    const encrypt = (content, randi) =>
      CryptoJS.AES.encrypt(JSON.stringify({ content }), randi).toString();
    setguestpos();
    var encri = encrypt(36, "randomizer");
    window.location = "/Dashboard/" + encri;
  }

  return (
    <div
      id="r"
      style={{ display: "flex", justifyContent: "center", textalign: "center" }}
    >
      <div>
        <br />
        <br />
        <br />
        <br />
        <Row>
          <Col>
            <div className="display_center">
              <form>
                <div
                  className="p-5 rounded "
                  style={{ backgroundColor: "rgba(32, 41, 69, 0.4)" }}
                >
                  <h3
                    className="m-3 d-flex justify-content-center"
                    style={{ color: "white" }}
                  >
                    Login
                  </h3>
                  <h6 style={{ color: "white" }}>Username :</h6>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="usernamelogin"
                    required
                    onChange={onChangeusername1}
                  />
                  <br />
                  <h6 style={{ color: "white" }}>Password :</h6>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="passwordlogin"
                    required
                    onChange={onChangeusername2}
                  />
                  <br />
                  <PasswordChecklist
                    rules={["minLength", "maxLength", "number"]}
                    minLength={7}
                    maxLength={18}
                    value={passwordlogin}
                    onChange={(isValid) => {}}
                  />
                  <br />
                  <div>
                    <Row>
                      <Col>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => onlogin(usernamelogin, passwordlogin)}
                        >
                          login
                        </button>
                      </Col>
                      <Col>
                        <h6 style={{ color: "lightblue" }}>
                          Or{" "}
                          <Link onClick={() => enter_as_guest()}>
                            enter as a guest
                          </Link>{" "}
                        </h6>
                      </Col>
                    </Row>
                  </div>
                </div>
              </form>
            </div>
          </Col>
          <Col></Col>
          <Col>
            <div className="display_center">
              <form>
                <div
                  className="p-5 rounded "
                  style={{ backgroundColor: "rgba(32, 41, 69, 0.4)" }}
                >
                  <h3
                    className="m-3 d-flex justify-content-center"
                    style={{ color: "white" }}
                  >
                    Register
                  </h3>
                  <h6 style={{ color: "white" }}>Username :</h6>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="usernameregister"
                    value={usernameregister}
                    required
                    onChange={onChangeusername3}
                  />
                  <br />
                  <h6 style={{ color: "white" }}>Password :</h6>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="passwordregister"
                    value={passwordregister}
                    required
                    onChange={onChangeusername4}
                  />
                  <br />
                  <PasswordChecklist
                    rules={["minLength", "maxLength", "number"]}
                    minLength={7}
                    maxLength={18}
                    value={passwordregister}
                    onChange={(isValid) => {}}
                  />
                  <br />
                  <button
                    type="button"
                    className="btn btn-primary "
                    onClick={() => onregister()}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <br />
    </div>
  );
};

export default Home;
