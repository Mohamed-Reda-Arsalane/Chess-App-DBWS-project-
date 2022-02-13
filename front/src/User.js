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

const Home2 = () => {
  const [users, setUsers] = useState([]);
  const [state1, setState1] = useState(true);
  async function reload() {
    if (state1) {
      let data = await get1("https://azertyha78.pythonanywhere.com/user");
      setUsers(data);
      setState1(false);
    }
  }
  const [searched, setsearched] = useState("");
  function onChangesearch(e) {
    setsearched(e.target.value);
  }

  const [usernameregister, setUsernameregister] = useState("");
  function onChangeusername3(e) {
    setUsernameregister(e.target.value);
    setState1(true);
    reload();
  }
  const [passwordregister, setPasswordregister] = useState("");
  function onChangeusername4(e) {
    setPasswordregister(e.target.value);
    setState1(true);
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
    setState1(true);
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
  reload();
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

        <br />
        <br />
        <br />
        <form>
          <div
            className="p-5 rounded "
            style={{ backgroundColor: "rgba(32, 41, 69, 0.4)" }}
          >
            <h4 style={{ color: "white" }}> Search by Username:</h4>
            <input
              className="form-control"
              name="passwordregister"
              value={searched}
              required
              onChange={onChangesearch}
            />
          </div>
        </form>
      </div>
      <div>
        <br></br>
        <br></br>
      </div>
      <div>
        <div style={{ marginLeft: 80, paddingTop: 80 }}>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Username</th>
                <th>Password</th>
                <th>Wins</th>
                <th>is online? (not implemented yet)</th>
              </tr>
            </thead>
            <tbody>
              {users
                .filter((user) =>
                  user.Username.toLowerCase().startsWith(searched.toLowerCase())
                )
                .map((user) => (
                  <tr key={user.User_ID}>
                    <td>{user.User_ID}</td>
                    <td>{user.Username}</td>
                    <td>{"*".repeat(user.Password.length)}</td>
                    <td>{user.Wins}</td>
                    <td>{user.Is_online}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Home2;
