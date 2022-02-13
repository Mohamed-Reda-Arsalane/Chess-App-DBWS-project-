import React, { useState } from "react";
import { Tabs, Tab, Table, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
async function get1(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
async function post1(url, p1, p2) {
  const json = JSON.stringify({
    Player_one: p1,
    Player_two: p2,
  });
  const res = await axios.post(url, json, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

const Game = () => {
  const [searched, setsearched] = useState("");
  function onChangesearch(e) {
    setsearched(e.target.value);
  }

  const [state, setstate] = useState(true);
  const [Games, setGames] = useState([]);
  async function reload() {
    if (state) {
      let data = await get1("https://azertyha78.pythonanywhere.com/game");
      setGames(data);
      setstate(false);
    }
  }

  const [Player_one, setPlayer_one] = useState("");
  function onChangep1(e) {
    setPlayer_one(e.target.value);
  }
  const [Player_two, setPlayer_two] = useState("");
  function onChangep2(e) {
    setPlayer_two(e.target.value);
  }

  async function postit(p1, p2) {
    let data = await post1(
      "https://azertyha78.pythonanywhere.com/game",
      p1,
      p2
    );
    setstate(true);
    setPlayer_one("");
    setPlayer_two("");
  }
  reload();
  return (
    <div
      style={{ display: "flex", justifyContent: "center", textalign: "center" }}
    >
      <div>
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
                    Create Game
                  </h3>
                  <h6 style={{ color: "white" }}>Player 1:</h6>
                  <input
                    className="form-control"
                    id="exampleInputPassword1"
                    name="OpeningName"
                    required
                    value={Player_one}
                    onChange={onChangep1}
                  />
                  <br />
                  <h6 style={{ color: "white" }}>Player 2:</h6>
                  <input
                    className="form-control"
                    id="exampleInputPassword1"
                    name="SequenceMoves"
                    value={Player_two}
                    required
                    onChange={onChangep2}
                  />
                  <br /> <br />
                  <button
                    type="button"
                    className="btn btn-primary "
                    onClick={() => postit(Player_one, Player_two)}
                  >
                    ADD
                  </button>
                </div>
              </form>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <div className="display_center">
              <form>
                <div
                  className="p-5 rounded "
                  style={{ backgroundColor: "rgba(32, 41, 69, 0.4)" }}
                >
                  <h4 style={{ color: "white" }}> Search by Game ID:</h4>
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
          </Col>
          <Col>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Game ID</th>
                  <th>Player 1'ID</th>
                  <th>Player 2'ID</th>
                </tr>
              </thead>
              <tbody>
                {Games.filter(
                  (dep) =>
                    (searched !== "") &
                    dep.Game_ID.toString().startsWith(searched)
                ).map((dep) => (
                  <tr key={dep.Game_ID}>
                    <td>{dep.Game_ID}</td>
                    <td>{dep.Player_one}</td>
                    <td>{dep.Player_two}</td>
                  </tr>
                ))}
                {Games.filter((dep) => searched === "").map((dep) => (
                  <tr key={dep.Game_ID}>
                    <td>{dep.Game_ID}</td>
                    <td>{dep.Player_one}</td>
                    <td>{dep.Player_two}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
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
      </div>
    </div>
  );
};

export default Game;
