import React, { useEffect, useState } from "react";

import { Breadcrumb, Spin, Timeline } from "antd";
import "./EventDetails.scss";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getEventList } from "./ApiCalls";
import { camelToSnakeCase, firstLetterCapital } from "../../utils";

const EventDetails = () => {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  const mountFunction = async () => {
    let response = [];
    try {
      const { data: { flowWithCounts = [] } = {} } = await getEventList();
      setApiData(flowWithCounts);
      response[0] = flowWithCounts;
    } catch (err) {
      response[1] = err;
    } finally {
      setIsLoading(false);
      return response;
    }
  };

  useEffect(() => {
    mountFunction();
  }, []);

  return (
    <div className="Orders-details">
      <div className="page-header back-icn-ctn ">
        <div className="header-left-part">
          <span
            className="mdi mdi-arrow-left back-arrow"
            onClick={() => {
              history.goBack();
            }}
          />
          <h4 className="back-div-header" style={{ color: "" }}>
            1P & 3P Orders Flow
          </h4>
        </div>
        <div className="header-right-part">
          <Breadcrumb separator=">" className="bread-crumb">
            <Breadcrumb.Item onClick={() => history.push("/")}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item>1P & 3P Order</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {!isLoading ? (
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="header-info">
                  <span>
                    <h4 className="card-title event-details">Event Details</h4>
                  </span>
                  <span>
                    <Button onClick={() => mountFunction()}>Refresh</Button>
                  </span>
                </div>
                <hr />
                <div className="template-demo">
                  <Timeline>
                    {apiData.map((e, idx) => {
                      const updatedText = camelToSnakeCase(
                        firstLetterCapital(e.stage)
                      );
                      return (
                        <React.Fragment key={idx}>
                          <Timeline.Item
                            color="green"
                            onClick={() => {
                              history.push(`/orderDetails/${updatedText}`);
                            }}
                          >
                            <button className="btn-inverse-primary button-list">
                              <span>{updatedText}</span>
                              <span className="badge badge-inverse-primary badge-pill numbers-id">
                                {e.count}
                              </span>
                            </button>
                          </Timeline.Item>
                        </React.Fragment>
                      );
                    })}
                  </Timeline>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spin />
      )}
    </div>
  );
};

export default EventDetails;
