import React, { useState } from "react";
import { Tabs, Tab, Table, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
async function get1(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
async function post1(url, type1, color1) {
  const json = JSON.stringify({
    type: type1,
    color: color1,
  });
  const res = await axios.post(url, json, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
const Piece = () => {
  const [searched, setsearched] = useState("");
  function onChangesearch(e) {
    setsearched(e.target.value);
  }
  const [state, setstate] = useState(true);
  const [pieces, setPieces] = useState([]);
  async function reload() {
    if (state) {
      let data = await get1("https://azertyha78.pythonanywhere.com/piece");
      setPieces(data);
      setstate(false);
    }
  }
  const [type, setType] = useState("");
  function onChangename1(e) {
    setType(e.target.value);
  }
  const [color, setcolor] = useState("");
  function onChangeseq(e) {
    setcolor(e.target.value);
  }

  async function postit(name1, seq1) {
    let data = await post1(
      "https://azertyha78.pythonanywhere.com/piece",
      name1,
      seq1
    );
    setstate(true);
    setcolor("");
    setType("");
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
                    Add Piece
                  </h3>
                  <h6 style={{ color: "white" }}>Type:</h6>
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    onChange={onChangename1}
                  >
                    <option selected value="Pawn">
                      Pawn
                    </option>
                    <option value="Bishop">Bishop</option>
                    <option value="Knight">Knight</option>
                    <option value="Rook">Rook</option>
                    <option value="Quenn">Quenn</option>
                    <option value="King">King</option>
                  </select>
                  <br />
                  <h6 style={{ color: "white" }}>Color</h6>
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    onChange={onChangeseq}
                  >
                    <option selected value="White">
                      White
                    </option>
                    <option value="Black">Black</option>
                  </select>
                  <br />
                  <br /> <br />
                  <button
                    type="button"
                    className="btn btn-primary "
                    onClick={() => postit(type, color)}
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
                  <h4 style={{ color: "white" }}> Search by piece ID:</h4>
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
                  <th>Piece ID</th>
                  <th>Type</th>
                  <th>Color</th>
                </tr>
              </thead>
              <tbody>
                {pieces
                  .filter(
                    (dep) =>
                      (searched !== "") &
                      dep.piece_ID.toString().startsWith(searched)
                  )
                  .map((dep) => (
                    <tr key={dep.piece_ID}>
                      <td>{dep.piece_ID}</td>
                      <td>{dep.type}</td>
                      <td>{dep.color}</td>
                    </tr>
                  ))}
                {pieces
                  .filter((dep) => searched === "")
                  .map((dep) => (
                    <tr key={dep.piece_ID}>
                      <td>{dep.piece_ID}</td>
                      <td>{dep.type}</td>
                      <td>{dep.color}</td>
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
        <br />
        <br />
      </div>
    </div>
  );
};

export default Piece;
