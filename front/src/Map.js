import React, { useState } from "react";
import { Tabs, Tab, Table, Row, Col, Form, Button } from "react-bootstrap";
import "./App.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./App.css";
import { Icon, popup } from "leaflet";
async function get1(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
const Map = () => {
  const [users, setUsers] = useState([]);
  async function reload() {
    let data = await get1("https://azertyha78.pythonanywhere.com/user");
    setUsers(data);
  }
  const [state, setstate] = useState(true);
  if (state) {
    reload();
    setstate(false);
  }
  const [defaultposition, setdef] = useState([]);
  const [clicked, setclicked] = useState(true);
  function showmap() {
    reload();
    var defaultpos = [];
    for (var i = 0; i < users.length; i++) {
      if (users[i]["Position"] !== "") {
        defaultpos = [
          parseFloat(users[i]["Position"].split(" ")[0]),
          parseFloat(users[i]["Position"].split(" ")[1]),
        ];
      }
    }
    setdef(defaultpos);
    setclicked(false);
  }
  function setter(val) {
    setdef(val);
  }
  return (
    <div
      id="r"
      style={{ display: "flex", justifyContent: "center", textalign: "center" }}
    >
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossorigin=""
      />
      {clicked ? (
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <button type="button" className="btn btn-primary" onClick={showmap}>
            Click to show the map
          </button>
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
          <br />
          <br />
          <br />
          <br /> <br />
          <br />
        </div>
      ) : (
        <MapContainer
          center={defaultposition}
          zoom={12}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {users
            .filter((user) => user["Position"] !== "")
            .map((user) => (
              <div
                onClick={() =>
                  setter([
                    parseFloat(user["Position"].split(" ")[0]),
                    parseFloat(user["Position"].split(" ")[1]),
                  ])
                }
              >
                <Marker
                  key={user.User_ID}
                  position={[
                    parseFloat(user["Position"].split(" ")[0]),
                    parseFloat(user["Position"].split(" ")[1]),
                  ]}
                >
                  <Popup>{user["Username"]}</Popup>
                </Marker>
              </div>
            ))}
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
