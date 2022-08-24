import React, { Component } from "react";
import { Table, Timeline } from "antd";
import { Data, getColumnforOrders } from "./getCoulmn";
import "./button.scss";
import { Button } from "react-bootstrap";

const Buttons = () => {
  return (
    <div className="Orders-details">
      <div className="page-header ">
        <h3 className="page-title">1P Orders</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="!#" onClick={(event) => event.preventDefault()}>
                Orders
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              1p and 3P Orders
            </li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4
                className="card-title"
                style={{ fontSize: "18px", paddingBottom: "15px" }}
              >
                Event Details
              </h4>
              <hr />
              <div className="template-demo">
                <Timeline>
                  {Data.map((e) => (
                    <>
                      <Timeline.Item color="green">
                        <button className="btn-inverse-primary button-list">
                          <span>{e.eventList}</span>
                          <span class="badge badge-inverse-primary badge-pill numbers-id">
                            {e.failedEvents}
                          </span>
                        </button>
                      </Timeline.Item>
                    </>
                  ))}
                </Timeline>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
