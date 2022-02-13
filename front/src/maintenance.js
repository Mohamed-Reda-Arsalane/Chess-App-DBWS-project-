import React, { Component } from "react";
import { Tabs, Tab, Table, Row, Col, Form, Button } from "react-bootstrap";
import "./App.css";

const Maintenance = () => {
  return (
    <div>
      <br />
      <br />
      <h1
        style={{
          fontSize: 60,
          color: "white",
          display: "flex",
          justifyContent: "center",
          textalign: "center",
        }}
      >
        Maintenance:
      </h1>
      <br />
      <br />
      <br />
      <div
        style={{
          justifyContent: "center",
        }}
      >
        <Row>
          <Col>
            <br />
          </Col>
          <Col>
            <Table
              style={{
                color: "white",
              }}
              striped
              bordered
              hover
              variant="dark"
            >
              <thead>
                <tr>
                  <th>Input Page</th>
                  <th>Links</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Openings</td>
                  <td>
                    <a href="/openings">Openings input page</a>
                  </td>
                </tr>
                <tr>
                  <td>Games:</td>
                  <td>
                    <a href="/Game">Game input page</a>
                  </td>
                </tr>
                <tr>
                  <td>Pieces</td>
                  <td>
                    <a href="/Pieces">Pieces input page</a>
                  </td>
                </tr>
                <tr>
                  <td>User</td>
                  <td>
                    <a href="/inuser">Users input page</a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col>
            <br />
          </Col>
        </Row>
      </div>
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
  );
};

export default Maintenance;
