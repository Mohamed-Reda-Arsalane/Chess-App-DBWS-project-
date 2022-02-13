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
  Alert,
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
import destination from "./media/destination.png";
import song from "./20211102-041321-1_izRJwlzx.mp3";

const NewGame = () => {
  const [from, setFrom] = useState();
  var son = new Audio(song);
  var temp = 0;
  if (window.innerWidth > 1900) {
    temp = 50;
  } else {
    temp = 0;
  }
  var xPoffset = 4 + 958 * 0.158 + temp;
  var yPoffset1 = 165;
  var yPoffset = 612;
  var deltaxP = 74;
  var deltayP = 80;

  const [sep1, setSep1] = useState([0, 0, false, ""]);
  const [sep2, setSep2] = useState([0, 0, false, ""]);
  const [sep3, setSep3] = useState([0, 0, false, ""]);
  const [sep4, setSep4] = useState([0, 0, false, ""]);
  const [sep5, setSep5] = useState([0, 0, false, ""]);
  const [sep6, setSep6] = useState([0, 0, false, ""]);
  const [sep7, setSep7] = useState([0, 0, false, ""]);
  const [sep8, setSep8] = useState([0, 0, false, ""]);
  const [sep9, setSep9] = useState([0, 0, false, ""]);
  const [sep10, setSep10] = useState([0, 0, false, ""]);
  const [sep11, setSep11] = useState([0, 0, false, ""]);
  const [sep12, setSep12] = useState([0, 0, false, ""]);
  const [sep13, setSep13] = useState([0, 0, false, ""]);
  const [sep14, setSep14] = useState([0, 0, false, ""]);
  const [sep15, setSep15] = useState([0, 0, false, ""]);
  const [sep16, setSep16] = useState([0, 0, false, ""]);
  const [sep17, setSep17] = useState([0, 0, false, ""]);
  const [sep18, setSep18] = useState([0, 0, false, ""]);
  const [sep19, setSep19] = useState([0, 0, false, ""]);
  const [sep20, setSep20] = useState([0, 0, false, ""]);
  const [sep21, setSep21] = useState([0, 0, false, ""]);
  const [sep22, setSep22] = useState([0, 0, false, ""]);
  const [sep23, setSep23] = useState([0, 0, false, ""]);
  const [sep24, setSep24] = useState([0, 0, false, ""]);
  const [sep25, setSep25] = useState([0, 0, false, ""]);
  const [sep26, setSep26] = useState([0, 0, false, ""]);
  const [sep27, setSep27] = useState([0, 0, false, ""]);
  const [sep28, setSep28] = useState([0, 0, false, ""]);

  function reset() {
    setSep1([0, 0, false, ""]);
    setSep2([0, 0, false, ""]);
    setSep3([0, 0, false, ""]);
    setSep4([0, 0, false, ""]);
    setSep5([0, 0, false, ""]);
    setSep6([0, 0, false, ""]);
    setSep7([0, 0, false, ""]);
    setSep8([0, 0, false, ""]);
    setSep9([0, 0, false, ""]);
    setSep10([0, 0, false, ""]);
    setSep11([0, 0, false, ""]);
    setSep12([0, 0, false, ""]);
    setSep13([0, 0, false, ""]);
    setSep14([0, 0, false, ""]);
    setSep15([0, 0, false, ""]);
    setSep16([0, 0, false, ""]);
    setSep17([0, 0, false, ""]);
    setSep18([0, 0, false, ""]);
    setSep19([0, 0, false, ""]);
    setSep20([0, 0, false, ""]);
    setSep21([0, 0, false, ""]);
    setSep22([0, 0, false, ""]);
    setSep23([0, 0, false, ""]);
    setSep24([0, 0, false, ""]);
    setSep25([0, 0, false, ""]);
    setSep26([0, 0, false, ""]);
    setSep27([0, 0, false, ""]);
    setSep28([0, 0, false, ""]);
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

  var pos = [];
  pos = [
    ["a2", a, setA, false],
    ["b2", b, setB, false],
    ["c2", c, setC, false],
    ["d2", d, setD, false],
    ["e2", e, setE, false],
    ["f2", f, setF, false],
    ["g2", g, setG, false],
    ["h2", h, setH, false],
    ["a1", i, setI],
    ["b1", j, setJ],
    ["c1", k, setK],
    ["d1", l, setL],
    ["e1", m, setM],
    ["f1", n, setN],
    ["g1", o, setO],
    ["h1", p, setP],
    ["a7", q, setQ, false],
    ["b7", r, setR, false],
    ["c7", s, setS, false],
    ["d7", t, setT, false],
    ["e7", u, setU, false],
    ["f7", v, setV, false],
    ["g7", w, setW, false],
    ["h7", x, setX, false],
    ["a8", y, setY],
    ["b8", z, setZ],
    ["c8", aa, setAa],
    ["d8", ab, setAb],
    ["e8", ac, setAc],
    ["f8", ad, setAd],
    ["g8", ae, setAe],
    ["h8", af, setAf],
  ];

  const [turn, setTurn] = useState("w");
  function click(idx, setter) {
    if (from === pos[idx][0]) {
      setter("");
      reset();
      return;
    }
    setter(pos[idx][0]);
    if (idx <= 7) {
      if (turn === "w") {
        if (!pos[idx][3]) {
          var state = true;
          for (var i = 0; i < pos.length; i++) {
            if (pos[idx][0].charAt(0) + "3" === pos[i][0]) {
              state = false;
            }
          }
          if (state) {
            setSep1([
              pos[idx][1][0],
              pos[idx][1][1] - 75,
              true,
              pos[idx][0].charAt(0) + "3",
            ]);
          } else {
            return;
          }
          state = true;
          for (var i = 0; i < pos.length; i++) {
            if (pos[idx][0].charAt(0) + "4" === pos[i][0]) {
              state = false;
            }
          }
          if (state) {
            setSep2([
              pos[idx][1][0],
              pos[idx][1][1] - 2 * 75,
              true,
              pos[idx][0].charAt(0) + "4",
            ]);
          }
        } else {
          var state = true;
          for (var i = 0; i < pos.length; i++) {
            if (
              pos[idx][0].charAt(0) +
                (Number(pos[idx][0].charAt(1)) + 1).toString() ===
              pos[i][0]
            ) {
              state = false;
            }
          }
          if (state) {
            setSep1([
              pos[idx][1][0],
              pos[idx][1][1] - 75,
              true,
              pos[idx][0].charAt(0) +
                (Number(pos[idx][0].charAt(1)) + 1).toString(),
            ]);
          }
        }
      }
    } else if (idx > 15 && idx < 24) {
      if (turn === "b") {
        if (!pos[idx][3]) {
          var state = true;
          for (var i = 0; i < pos.length; i++) {
            if (pos[idx][0].charAt(0) + "6" === pos[i][0]) {
              state = false;
            }
          }
          if (state) {
            setSep1([
              pos[idx][1][0],
              pos[idx][1][1] + 75,
              true,
              pos[idx][0].charAt(0) + "6",
            ]);
          } else {
            return;
          }
          state = true;
          for (var i = 0; i < pos.length; i++) {
            if (pos[idx][0].charAt(0) + "5" === pos[i][0]) {
              state = false;
            }
          }
          if (state) {
            setSep2([
              pos[idx][1][0],
              pos[idx][1][1] + 2 * 75,
              true,
              pos[idx][0].charAt(0) + "5",
            ]);
          }
        } else {
          var state = true;
          for (var i = 0; i < pos.length; i++) {
            if (
              pos[idx][0].charAt(0) +
                (Number(pos[idx][0].charAt(1)) - 1).toString() ===
              pos[i][0]
            ) {
              state = false;
            }
          }
          if (state) {
            setSep1([
              pos[idx][1][0],
              pos[idx][1][1] + 75,
              true,
              pos[idx][0].charAt(0) +
                (Number(pos[idx][0].charAt(1)) - 1).toString(),
            ]);
          }
        }
      }
    } else if (idx < 15 && idx > 7) {
      if (turn === "w") {
      } else {
      }
    }
  }
  function set(val, setter) {
    setter(val);
  }
  function confirm_click(position) {
    for (var i = 0; i < pos.length; i++) {
      if (pos[i][0] === from) {
        set([position[0], position[1]], pos[i][2]);
        if (pos[i].length === 4) {
          pos[i] = [position[3], pos[i][1], pos[i][2], true];
        } else {
          pos[i] = [position[3], pos[i][1], pos[i][2]];
        }
        if (turn === "w") {
          setTurn("b");
        } else {
          setTurn("w");
        }
        reset();
        setFrom("");
        return;
      }
    }
  }

  return (
    <div style={{ marginLeft: 100 }}>
      <br />
      <br />
      <br />
      <br />
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
            display: sep1[2] ? "block" : "none",
            position: "absolute",
            left: `${sep1[0]}px`,
            top: `${sep1[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
          onClick={() => confirm_click(sep1)}
        />
        <img
          style={{
            display: sep2[2] ? "block" : "none",
            position: "absolute",
            left: `${sep2[0]}px`,
            top: `${sep2[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
          onClick={() => confirm_click(sep2)}
        />
        <img
          style={{
            display: sep3[2] ? "block" : "none",
            position: "absolute",
            left: `${sep3[0]}px`,
            top: `${sep3[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
        />
        <img
          style={{
            display: sep4[2] ? "block" : "none",
            position: "absolute",
            left: `${sep4[0]}px`,
            top: `${sep4[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
        />
        <img
          style={{
            display: sep5[2] ? "block" : "none",
            position: "absolute",
            left: `${sep5[0]}px`,
            top: `${sep5[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
        />
        <img
          style={{
            display: sep6[2] ? "block" : "none",
            position: "absolute",
            left: `${sep6[0]}px`,
            top: `${sep6[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
        />
        <img
          style={{
            display: sep7[2] ? "block" : "none",
            position: "absolute",
            left: `${sep7[0]}px`,
            top: `${sep7[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
        />
        <img
          style={{
            display: sep8[2] ? "block" : "none",
            position: "absolute",
            left: `${sep8[0]}px`,
            top: `${sep8[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
        />
        <img
          style={{
            display: sep9[2] ? "block" : "none",
            position: "absolute",
            left: `${sep9[0]}px`,
            top: `${sep9[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
        />
        <img
          style={{
            display: sep10[2] ? "block" : "none",
            position: "absolute",
            left: `${sep10[0]}px`,
            top: `${sep10[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
        />
        <img
          style={{
            display: sep11[2] ? "block" : "none",
            position: "absolute",
            left: `${sep11[0]}px`,
            top: `${sep11[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
        />
        <img
          style={{
            display: sep12[2] ? "block" : "none",
            position: "absolute",
            left: `${sep12[0]}px`,
            top: `${sep12[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
        />
        <img
          style={{
            display: sep13[2] ? "block" : "none",
            position: "absolute",
            left: `${sep13[0]}px`,
            top: `${sep13[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
        />
        <img
          style={{
            display: sep14[2] ? "block" : "none",
            position: "absolute",
            left: `${sep14[0]}px`,
            top: `${sep14[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
        />
        <img
          style={{
            display: sep15[2] ? "block" : "none",
            position: "absolute",
            left: `${sep15[0]}px`,
            top: `${sep15[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
        />
        <img
          style={{
            display: sep16[2] ? "block" : "none",
            position: "absolute",
            left: `${sep16[0]}px`,
            top: `${sep16[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
        />
        <img
          style={{
            display: sep17[2] ? "block" : "none",
            position: "absolute",
            left: `${sep17[0]}px`,
            top: `${sep17[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
        />
        <img
          style={{
            display: sep18[2] ? "block" : "none",
            position: "absolute",
            left: `${sep18[0]}px`,
            top: `${sep18[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
        />
        <img
          style={{
            display: sep19[2] ? "block" : "none",
            position: "absolute",
            left: `${sep19[0]}px`,
            top: `${sep19[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
        />
        <img
          style={{
            display: sep20[2] ? "block" : "none",
            position: "absolute",
            left: `${sep20[0]}px`,
            top: `${sep20[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
        />
        <img
          style={{
            display: sep21[2] ? "block" : "none",
            position: "absolute",
            left: `${sep21[0]}px`,
            top: `${sep21[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
        />
        <img
          style={{
            display: sep22[2] ? "block" : "none",
            position: "absolute",
            left: `${sep22[0]}px`,
            top: `${sep22[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
        />
        <img
          style={{
            display: sep23[2] ? "block" : "none",
            position: "absolute",
            left: `${sep23[0]}px`,
            top: `${sep23[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
        />
        <img
          style={{
            display: sep24[2] ? "block" : "none",
            position: "absolute",
            left: `${sep24[0]}px`,
            top: `${sep24[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
        />
        <img
          style={{
            display: sep25[2] ? "block" : "none",
            position: "absolute",
            left: `${sep25[0]}px`,
            top: `${sep25[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
        />
        <img
          style={{
            display: sep26[2] ? "block" : "none",
            position: "absolute",
            left: `${sep26[0]}px`,
            top: `${sep26[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
        />
        <img
          style={{
            display: sep27[2] ? "block" : "none",
            position: "absolute",
            left: `${sep27[0]}px`,
            top: `${sep27[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
        />
        <img
          style={{
            display: sep28[2] ? "block" : "none",
            position: "absolute",
            left: `${sep28[0]}px`,
            top: `${sep28[1]}px`,
            opacity: "0.45",
          }}
          height="55"
          src={destination}
        />

        <img
          style={{
            position: "absolute",
            left: `${a[0]}px`,
            top: `${a[1]}px`,
          }}
          height="65"
          src={WP}
          onClick={() => click(0, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${b[0]}px`,
            top: `${b[1]}px`,
          }}
          height="65"
          src={WP}
          onClick={() => click(1, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${c[0]}px`,
            top: `${c[1]}px`,
          }}
          height="65"
          src={WP}
          onClick={() => click(2, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${d[0]}px`,
            top: `${d[1]}px`,
          }}
          height="65"
          src={WP}
          onClick={() => click(3, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${e[0]}px`,
            top: `${e[1]}px`,
          }}
          height="65"
          src={WP}
          onClick={() => click(4, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${f[0]}px`,
            top: `${f[1]}px`,
          }}
          height="65"
          src={WP}
          onClick={() => click(5, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${g[0]}px`,
            top: `${g[1]}px`,
          }}
          height="65"
          src={WP}
          onClick={() => click(6, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${h[0]}px`,
            top: `${h[1]}px`,
          }}
          height="65"
          src={WP}
          onClick={() => click(7, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${i[0]}px`,
            top: `${i[1]}px`,
          }}
          height="62"
          src={WR}
          onClick={() => click(8, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${j[0]}px`,
            top: `${j[1]}px`,
          }}
          height="62"
          src={WN}
          onClick={() => click(9, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${k[0]}px`,
            top: `${k[1]}px`,
          }}
          height="62"
          src={WB}
          onClick={() => click(10, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${l[0]}px`,
            top: `${l[1]}px`,
          }}
          height="65"
          src={WQ}
          onClick={() => click(11, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${m[0]}px`,
            top: `${m[1]}px`,
          }}
          height="65"
          src={WK}
          onClick={() => click(12, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${n[0]}px`,
            top: `${n[1]}px`,
          }}
          height="62"
          src={WB}
          onClick={() => click(13, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${o[0]}px`,
            top: `${o[1]}px`,
          }}
          height="62"
          src={WN}
          onClick={() => click(14, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${p[0]}px`,
            top: `${p[1]}px`,
          }}
          height="62"
          src={WR}
          onClick={() => click(15, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${q[0]}px`,
            top: `${q[1]}px`,
          }}
          height="65"
          src={BP}
          onClick={() => click(16, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${r[0]}px`,
            top: `${r[1]}px`,
          }}
          height="65"
          src={BP}
          onClick={() => click(17, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${s[0]}px`,
            top: `${s[1]}px`,
          }}
          height="65"
          src={BP}
          onClick={() => click(18, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${t[0]}px`,
            top: `${t[1]}px`,
          }}
          height="65"
          src={BP}
          onClick={() => click(19, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${u[0]}px`,
            top: `${u[1]}px`,
          }}
          height="65"
          src={BP}
          onClick={() => click(20, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${v[0]}px`,
            top: `${v[1]}px`,
          }}
          height="65"
          src={BP}
          onClick={() => click(21, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${w[0]}px`,
            top: `${w[1]}px`,
          }}
          height="65"
          src={BP}
          onClick={() => click(22, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${x[0]}px`,
            top: `${x[1]}px`,
          }}
          height="65"
          src={BP}
          onClick={() => click(23, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${y[0]}px`,
            top: `${y[1]}px`,
          }}
          height="62"
          src={BR}
          onClick={() => click(24, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${z[0]}px`,
            top: `${z[1]}px`,
          }}
          height="62"
          src={BN}
          onClick={() => click(25, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${aa[0]}px`,
            top: `${aa[1]}px`,
          }}
          height="62"
          src={BB}
          onClick={() => click(26, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${ab[0]}px`,
            top: `${ab[1]}px`,
          }}
          height="65"
          src={BQ}
          onClick={() => click(27, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${ac[0]}px`,
            top: `${ac[1]}px`,
          }}
          height="65"
          src={BK}
          onClick={() => click(28, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${ad[0]}px`,
            top: `${ad[1]}px`,
          }}
          height="62"
          src={BB}
          onClick={() => click(29, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${ae[0]}px`,
            top: `${ae[1]}px`,
          }}
          height="62"
          src={BN}
          onClick={() => click(30, setFrom)}
        />
        <img
          style={{
            position: "absolute",
            left: `${af[0]}px`,
            top: `${af[1]}px`,
          }}
          height="62"
          src={BR}
          onClick={() => click(31, setFrom)}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default NewGame;
