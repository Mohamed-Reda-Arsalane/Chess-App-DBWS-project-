import React, { useState } from "react";
import { Tabs, Tab, Table, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
async function get1(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
async function post1(url, name1, seq, des) {
  const json = JSON.stringify({
    name: name1,
    sequence_of_moves: seq,
    Description: des,
  });
  const res = await axios.post(url, json, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

const Demo = () => {
  const [state, setstate] = useState(true);

  const [openings, setOpenings] = useState([]);
  async function reload() {
    if (state) {
      let data = await get1("https://azertyha78.pythonanywhere.com/opening");
      setOpenings(data);
      setstate(false);
    }
  }
  const [name, setName] = useState("");
  function onChangename1(e) {
    setName(e.target.value);
  }
  const [seq, setSeq] = useState("");
  function onChangeseq(e) {
    setSeq(e.target.value);
  }
  const [des, setDes] = useState("");
  function onChangedes(e) {
    setDes(e.target.value);
  }
  const [searched, setsearched] = useState("");
  function onChangesearch(e) {
    setsearched(e.target.value);
  }

  async function postit(name1, seq1, des1) {
    let data = await post1(
      "https://azertyha78.pythonanywhere.com/opening",
      name1,
      seq1,
      des1
    );
    setstate(true);
    setDes("");
    setSeq("");
    setName("");
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
            <div className="display_center" style={{ marginLeft: 80 }}>
              <form>
                <div
                  className="p-5 rounded "
                  style={{ backgroundColor: "rgba(32, 41, 69, 0.4)" }}
                >
                  <h3
                    className="m-3 d-flex justify-content-center"
                    style={{ color: "white" }}
                  >
                    Add Opening
                  </h3>
                  <h6 style={{ color: "white" }}>Opening Name :</h6>
                  <input
                    className="form-control"
                    id="exampleInputPassword1"
                    name="OpeningName"
                    required
                    value={name}
                    onChange={onChangename1}
                  />
                  <br />
                  <h6 style={{ color: "white" }}>Sequence Of Moves</h6>
                  <input
                    className="form-control"
                    id="exampleInputPassword1"
                    name="SequenceMoves"
                    value={seq}
                    required
                    onChange={onChangeseq}
                  />
                  <br />
                  <h6 style={{ color: "white" }}>Description</h6>
                  <input
                    className="form-control"
                    id="exampleInputPassword1"
                    name="Description"
                    value={des}
                    required
                    onChange={onChangedes}
                  />
                  <br />
                  <br /> <br />
                  <button
                    type="button"
                    className="btn btn-primary "
                    onClick={() => postit(name, seq, des)}
                  >
                    ADD
                  </button>
                </div>
              </form>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="display_center" style={{ marginLeft: 80 }}>
              <form>
                <div
                  className="p-5 rounded "
                  style={{ backgroundColor: "rgba(32, 41, 69, 0.4)" }}
                >
                  <h4 style={{ color: "white" }}> Search by Opening name:</h4>
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
                  <th>Opening Name</th>
                  <th>Sequence Of Moves</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {openings
                  .filter((op) =>
                    op.name.toLowerCase().startsWith(searched.toLowerCase())
                  )
                  .map((dep) => (
                    <tr key={dep.opening_ID}>
                      <td>{dep.name}</td>
                      <td>{dep.sequence_of_moves}</td>
                      <td>{dep.Description}</td>
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

export default Demo;
