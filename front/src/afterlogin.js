import React, { useState } from "react";
import img from "./media/image.png";
import axios from "axios";
import {
  Tabs,
  Tab,
  Table,
  Row,
  Col,
  Form,
  Button,
  FormLabel,
} from "react-bootstrap";
import "./App.css";
import { useLocation } from "react-router-dom";
import WP from "./media/WPawn.png";
import WR from "./media/WRook.png";
import WN from "./media/WKnight.png";
import WB from "./media/WBishop.png";
import WQ from "./media/WQueen.png";
import WK from "./media/WKing.png";
import BP from "./media/BP.png";
import BR from "./media/BR.png";
import BN from "./media/BN.png";
import BB from "./media/BB.png";
import BQ from "./media/BQ.png";
import BK from "./media/BK.png";
import song from "./20211102-041321-1_izRJwlzx.mp3";
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
const About = () => {
  var son = new Audio(song);
  var temp = 0;
  if (window.innerWidth > 1900) {
    temp = 50;
  } else {
    temp = 0;
  }
  var xPoffset = 4 + 958 * 0.158 + temp;
  var yPoffset1 = 170;
  var yPoffset = 612;
  var deltaxP = 74;
  var deltayP = 80;

  const startgame = () => {
    var lst = [];
    for (var i = 0; i < 32; i++) {
      var newValue = [[0, 0]];
      lst = lst.concat(newValue);
    }
    lst[0][0] = xPoffset + deltaxP;
    lst[0][1] = yPoffset;

    return lst;
  };
  const rand = "randomizer";
  var CryptoJS = require("crypto-js");
  const decrypt = (crypted, randi) =>
    JSON.parse(CryptoJS.AES.decrypt(crypted, randi).toString(CryptoJS.enc.Utf8))
      .content;
  var encri = useLocation().pathname.replace("/Dashboard/", "");
  var decrypted = decrypt(encri, rand);
  const [user, setUser] = useState([]);
  const [entered, setEntered] = useState(false);
  const [openings, setOpenings] = useState([]);
  async function reload() {
    if (!entered) {
      let data1 = await get1("https://azertyha78.pythonanywhere.com/opening");
      setOpenings(data1);
      let data = await get1("https://azertyha78.pythonanywhere.com/user");
      for (var i = 0; i < data.length; i++) {
        if (decrypted === data[i]["User_ID"]) {
          setUser(data[i]);
          break;
        }
      }
      setEntered(true);
    }
  }
  reload();
  var cooardinates = [];
  var state = true;
  if (state) {
    cooardinates = startgame();
    state = false;
  }
  function ongame() {
    cooardinates = startgame();
  }

  const [onchangeselect, setOnchangeselect] = useState("");
  function onChangeselect(e) {
    setOnchangeselect(e.target.value);
  }

  async function postit(decrypted1, onchangeselect1) {
    const rand = "randomizer11";
    const encrypt = (content, randi) =>
      CryptoJS.AES.encrypt(JSON.stringify({ content }), randi).toString();

    let data = await post1(
      "https://azertyha78.pythonanywhere.com/game",
      decrypted1,
      onchangeselect1
    );
    var encri1 = encrypt(decrypted1, rand);
    var encri2 = encrypt(onchangeselect1, rand);
    window.location = "/ingame/" + encri1 + "/d5/" + encri2;
  }

  const [a, setA] = useState([xPoffset, yPoffset]);
  const [b, setB] = useState([xPoffset + deltaxP, yPoffset]);
  const [c, setC] = useState([xPoffset + deltaxP * 2, yPoffset]);
  const [d, setD] = useState([xPoffset + deltaxP * 3, yPoffset]);
  const [e, setE] = useState([xPoffset + deltaxP * 4, yPoffset]);
  const [f, setF] = useState([xPoffset + deltaxP * 5, yPoffset]);
  const [g, setG] = useState([xPoffset + deltaxP * 6, yPoffset]);
  const [h, setH] = useState([xPoffset + deltaxP * 7, yPoffset]);

  const [i, setI] = useState([xPoffset, yPoffset + deltayP]);
  const [j, setJ] = useState([xPoffset + deltaxP, yPoffset + deltayP]);
  const [k, setK] = useState([xPoffset + deltaxP * 2, yPoffset + deltayP]);
  const [l, setL] = useState([xPoffset + deltaxP * 3, yPoffset + deltayP]);
  const [m, setM] = useState([xPoffset + deltaxP * 4, yPoffset + deltayP]);
  const [n, setN] = useState([xPoffset + deltaxP * 5, yPoffset + deltayP]);
  const [o, setO] = useState([xPoffset + deltaxP * 6, yPoffset + deltayP]);
  const [p, setP] = useState([xPoffset + deltaxP * 7, yPoffset + deltayP]);

  const [q, setQ] = useState([xPoffset, yPoffset1 + deltaxP]);
  const [r, setR] = useState([xPoffset + 1 * deltaxP, yPoffset1 + deltaxP]);
  const [s, setS] = useState([xPoffset + 2 * deltaxP, yPoffset1 + deltaxP]);
  const [t, setT] = useState([xPoffset + 3 * deltaxP, yPoffset1 + deltaxP]);
  const [u, setU] = useState([xPoffset + 4 * deltaxP, yPoffset1 + deltaxP]);
  const [v, setV] = useState([xPoffset + 5 * deltaxP, yPoffset1 + deltaxP]);
  const [w, setW] = useState([xPoffset + 6 * deltaxP, yPoffset1 + deltaxP]);
  const [x, setX] = useState([xPoffset + 7 * deltaxP, yPoffset1 + deltaxP]);

  const [y, setY] = useState([xPoffset, yPoffset1]);
  const [z, setZ] = useState([xPoffset + deltaxP, yPoffset1]);
  const [aa, setAa] = useState([xPoffset + deltaxP * 2, yPoffset1]);
  const [ab, setAb] = useState([xPoffset + deltaxP * 3, yPoffset1]);
  const [ac, setAc] = useState([xPoffset + deltaxP * 4, yPoffset1]);
  const [ad, setAd] = useState([xPoffset + deltaxP * 5, yPoffset1]);
  const [ae, setAe] = useState([xPoffset + deltaxP * 6, yPoffset1]);
  const [af, setAf] = useState([xPoffset + deltaxP * 7, yPoffset1]);

  function reformatinput(from, to) {
    return [
      from.charCodeAt(0) - to.charCodeAt(0),
      Number(from.charAt(1)) - Number(to.charAt(1)),
    ];
  }
  var pos = [];
  pos = [
    ["a2", a, setA],
    ["b2", b, setB],
    ["c2", c, setC],
    ["d2", d, setD],
    ["e2", e, setE],
    ["f2", f, setF],
    ["g2", g, setG],
    ["h2", h, setH],
    ["a1", i, setI],
    ["b1", j, setJ],
    ["c1", k, setK],
    ["d1", l, setL],
    ["e1", m, setM],
    ["f1", n, setN],
    ["g1", o, setO],
    ["h1", p, setP],
    ["a7", q, setQ],
    ["b7", r, setR],
    ["c7", s, setS],
    ["d7", t, setT],
    ["e7", u, setU],
    ["f7", v, setV],
    ["g7", w, setW],
    ["h7", x, setX],
    ["a8", y, setY],
    ["b8", z, setZ],
    ["c8", aa, setAa],
    ["d8", ab, setAb],
    ["e8", ac, setAc],
    ["f8", ad, setAd],
    ["g8", ae, setAe],
    ["h8", af, setAf],
  ];

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  function doit(e, setter, res) {
    setter([e[0] - res[0] * 74, e[1] + res[1] * 74]);
  }

  function remove_piece(setter, num) {
    setter([30, yPoffset1 + num * deltayP]);
  }

  function play() {
    setA([xPoffset, yPoffset]);
    setB([xPoffset + deltaxP, yPoffset]);
    setC([xPoffset + deltaxP * 2, yPoffset]);
    setD([xPoffset + deltaxP * 3, yPoffset]);
    setE([xPoffset + deltaxP * 4, yPoffset]);
    setF([xPoffset + deltaxP * 5, yPoffset]);
    setG([xPoffset + deltaxP * 6, yPoffset]);
    setH([xPoffset + deltaxP * 7, yPoffset]);
    setI([xPoffset + deltaxP * 0, yPoffset + deltayP]);
    setJ([xPoffset + deltaxP * 1, yPoffset + deltayP]);
    setK([xPoffset + deltaxP * 2, yPoffset + deltayP]);
    setL([xPoffset + deltaxP * 3, yPoffset + deltayP]);
    setM([xPoffset + deltaxP * 4, yPoffset + deltayP]);
    setN([xPoffset + deltaxP * 5, yPoffset + deltayP]);
    setO([xPoffset + deltaxP * 6, yPoffset + deltayP]);
    setP([xPoffset + deltaxP * 7, yPoffset + deltayP]);
    setQ([xPoffset + 0 * deltaxP, yPoffset1 + deltaxP]);
    setR([xPoffset + 1 * deltaxP, yPoffset1 + deltaxP]);
    setS([xPoffset + 2 * deltaxP, yPoffset1 + deltaxP]);
    setT([xPoffset + 3 * deltaxP, yPoffset1 + deltaxP]);
    setU([xPoffset + 4 * deltaxP, yPoffset1 + deltaxP]);
    setV([xPoffset + 5 * deltaxP, yPoffset1 + deltaxP]);
    setW([xPoffset + 6 * deltaxP, yPoffset1 + deltaxP]);
    setX([xPoffset + 7 * deltaxP, yPoffset1 + deltaxP]);
    setY([xPoffset + deltaxP * 0, yPoffset1]);
    setZ([xPoffset + deltaxP * 1, yPoffset1]);
    setAa([xPoffset + deltaxP * 2, yPoffset1]);
    setAb([xPoffset + deltaxP * 3, yPoffset1]);
    setAc([xPoffset + deltaxP * 4, yPoffset1]);
    setAd([xPoffset + deltaxP * 5, yPoffset1]);
    setAe([xPoffset + deltaxP * 6, yPoffset1]);
    setAf([xPoffset + deltaxP * 7, yPoffset1]);
  }

  const [stato, setstato] = useState(true);

  async function onclick1(stri) {
    if (stato) {
      setstato(false);
      window.scrollTo(0, 0);
      await sleep(500);
      var obj = stri.split(" ");
      var deleted = 1;
      for (var ele = 0; ele < obj.length; ele++) {
        var from = obj[ele];
        var to = obj[ele + 1];
        for (var i = 0; i < pos.length; i++) {
          if (pos[i][0] === from) {
            for (var j = 0; j < pos.length; j++) {
              if (pos[j][0] === to) {
                remove_piece(pos[j][2], deleted);
                deleted = deleted + 1;
                pos[j][0] = "del";
              }
            }
            var res = reformatinput(from, to);
            son = new Audio(song);
            son.play();
            doit(pos[i][1], pos[i][2], res);
            await sleep(1000);
            pos[i][0] = to;
          }
        }
        ele = ele + 1;
        setstato(true);
      }
      await sleep(2000);
      pos = [
        ["a2", a, setA],
        ["b2", b, setB],
        ["c2", c, setC],
        ["d2", d, setD],
        ["e2", e, setE],
        ["f2", f, setF],
        ["g2", g, setG],
        ["h2", h, setH],
        ["a1", i, setI],
        ["b1", j, setJ],
        ["c1", k, setK],
        ["d1", l, setL],
        ["e1", m, setM],
        ["f1", n, setN],
        ["g1", o, setO],
        ["h1", p, setP],
        ["a7", q, setQ],
        ["b7", r, setR],
        ["c7", s, setS],
        ["d7", t, setT],
        ["e7", u, setU],
        ["f7", v, setV],
        ["g7", w, setW],
        ["h7", x, setX],
        ["a8", y, setY],
        ["b8", z, setZ],
        ["c8", aa, setAa],
        ["d8", ab, setAb],
        ["e8", ac, setAc],
        ["f8", ad, setAd],
        ["g8", ae, setAe],
        ["h8", af, setAf],
      ];
      play();
    }
  }

  return (
    <div tab-content>
      <Tabs
        defaultActiveKey="Openings"
        id="uncontrolled-tab-example"
        className="justify-content-xl-center"
        style={{ backgroundColor: "#202945", fontSize: 17 }}
      >
        <Tab eventKey="Openings" title="Openings" tabClassName="color-red">
          <Row>
            <Col>
              <h4
                className="m-3 d-flex justify-content-center"
                style={{ color: "white" }}
              >
                Welcome back, {user["Username"]}
              </h4>
            </Col>
            <Col></Col>
            <Col>
              <h4 className="m-3 d-flex" style={{ color: "white" }}>
                Wins: {user["Wins"]}
              </h4>
            </Col>
          </Row>
          <div style={{ marginLeft: 100 }}>
            <Row>
              <Col>
                <div>
                  <img
                    height="600"
                    style={{
                      marginLeft: window.innerWidth * 0.05,
                      marginRight: window.innerWidth * 0.5,
                      top: window.innerWidth * 0.25,
                    }}
                    src={img}
                  />

                  <img
                    style={{
                      position: "absolute",
                      left: `${a[0]}px`,
                      top: `${a[1]}px`,
                    }}
                    height="65"
                    src={WP}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${b[0]}px`,
                      top: `${b[1]}px`,
                    }}
                    height="65"
                    src={WP}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${c[0]}px`,
                      top: `${c[1]}px`,
                    }}
                    height="65"
                    src={WP}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${d[0]}px`,
                      top: `${d[1]}px`,
                    }}
                    height="65"
                    src={WP}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${e[0]}px`,
                      top: `${e[1]}px`,
                    }}
                    height="65"
                    src={WP}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${f[0]}px`,
                      top: `${f[1]}px`,
                    }}
                    height="65"
                    src={WP}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${g[0]}px`,
                      top: `${g[1]}px`,
                    }}
                    height="65"
                    src={WP}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${h[0]}px`,
                      top: `${h[1]}px`,
                    }}
                    height="65"
                    src={WP}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${i[0]}px`,
                      top: `${i[1]}px`,
                    }}
                    height="62"
                    src={WR}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${j[0]}px`,
                      top: `${j[1]}px`,
                    }}
                    height="62"
                    src={WN}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${k[0]}px`,
                      top: `${k[1]}px`,
                    }}
                    height="62"
                    src={WB}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${l[0]}px`,
                      top: `${l[1]}px`,
                    }}
                    height="65"
                    src={WQ}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${m[0]}px`,
                      top: `${m[1]}px`,
                    }}
                    height="65"
                    src={WK}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${n[0]}px`,
                      top: `${n[1]}px`,
                    }}
                    height="62"
                    src={WB}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${o[0]}px`,
                      top: `${o[1]}px`,
                    }}
                    height="62"
                    src={WN}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${p[0]}px`,
                      top: `${p[1]}px`,
                    }}
                    height="62"
                    src={WR}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${q[0]}px`,
                      top: `${q[1]}px`,
                    }}
                    height="65"
                    src={BP}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${r[0]}px`,
                      top: `${r[1]}px`,
                    }}
                    height="65"
                    src={BP}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${s[0]}px`,
                      top: `${s[1]}px`,
                    }}
                    height="65"
                    src={BP}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${t[0]}px`,
                      top: `${t[1]}px`,
                    }}
                    height="65"
                    src={BP}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${u[0]}px`,
                      top: `${u[1]}px`,
                    }}
                    height="65"
                    src={BP}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${v[0]}px`,
                      top: `${v[1]}px`,
                    }}
                    height="65"
                    src={BP}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${w[0]}px`,
                      top: `${w[1]}px`,
                    }}
                    height="65"
                    src={BP}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${x[0]}px`,
                      top: `${x[1]}px`,
                    }}
                    height="65"
                    src={BP}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${y[0]}px`,
                      top: `${y[1]}px`,
                    }}
                    height="62"
                    src={BR}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${z[0]}px`,
                      top: `${z[1]}px`,
                    }}
                    height="62"
                    src={BN}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${aa[0]}px`,
                      top: `${aa[1]}px`,
                    }}
                    height="62"
                    src={BB}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${ab[0]}px`,
                      top: `${ab[1]}px`,
                    }}
                    height="65"
                    src={BQ}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${ac[0]}px`,
                      top: `${ac[1]}px`,
                    }}
                    height="65"
                    src={BK}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${ad[0]}px`,
                      top: `${ad[1]}px`,
                    }}
                    height="62"
                    src={BB}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${ae[0]}px`,
                      top: `${ae[1]}px`,
                    }}
                    height="62"
                    src={BN}
                  />
                  <img
                    style={{
                      position: "absolute",
                      left: `${af[0]}px`,
                      top: `${af[1]}px`,
                    }}
                    height="62"
                    src={BR}
                  />
                </div>
              </Col>
              <Col></Col>
            </Row>
            <br />
            <h4 className="m-3 d-flex" style={{ color: "white" }}>
              Openings:
            </h4>
            {openings.map((op) => (
              <form>
                <div
                  className="p-1 rounded "
                  style={{
                    backgroundColor: "rgba(32, 41, 69, 0.4)",
                    marginRight: 90,
                  }}
                >
                  <h3 className="m-3 d-flex" style={{ color: "white" }}>
                    {op.name}: {op.sequence_of_moves}
                  </h3>
                  <h6 className="m-3 d-flex" style={{ color: "white" }}>
                    Description: {op.Description}
                  </h6>
                  <button
                    type="button"
                    style={{ marginLeft: 15 }}
                    className="btn btn-primary "
                    name={op.sequence_of_moves}
                    onClick={() => onclick1(op.sequence_of_moves)}
                  >
                    RUN
                  </button>
                  <br></br>
                  <br></br>
                </div>
                <br></br>
              </form>
            ))}
          </div>
        </Tab>
        <Tab
          eventKey="co"
          title="Play"
          ClassName="justify-content-xl-between"
          tabClassName="color-red"
        >
          <Row>
            <Col>
              <h4
                className="m-3 d-flex justify-content-center"
                style={{ color: "white" }}
              >
                Welcome back, {user["Username"]}
              </h4>
            </Col>
            <Col></Col>
            <Col>
              <h4 className="m-3 d-flex" style={{ color: "white" }}>
                Wins: {user["Wins"]}
              </h4>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br></br>
          <form>
            <div
              className="p-3 rounded "
              style={{
                backgroundColor: "rgba(32, 41, 69, 0.4)",
                width: 450,
                marginLeft: 250,
              }}
            >
              <h3
                className="m-3 d-flex justify-content-center"
                style={{ color: "white" }}
              >
                Start Game
              </h3>
              <h6 style={{ color: "white" }}>Play against: </h6>
              <select
                class="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
                onChange={onChangeselect}
                value={onchangeselect}
              >
                <option selected value={decrypted}>
                  Human
                </option>
                <option value="54">Easy bot</option>
                <option value="55">Medium bot</option>
                <option value="56">Hard bot</option>
              </select>
              <br /> <br />
              <button
                type="button"
                className="btn btn-primary "
                onClick={() => postit(decrypted, onchangeselect)}
              >
                Start
              </button>
            </div>
          </form>
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
        </Tab>
      </Tabs>
    </div>
  );
};

export default About;
