import { Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { Bar, Doughnut } from "react-chartjs-2";
import DatePicker from "react-datepicker";
import { CardShimmerEffect } from "../Shimmer/CardShimmer";

const defaultVisitScaleOptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          display: false,
          min: 0,
          stepSize: 20,
          max: 80,
        },
        gridLines: {
          drawBorder: false,
          color: "rgba(235,237,242,1)",
          zeroLineColor: "rgba(235,237,242,1)",
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          display: false,
          drawBorder: false,
          color: "rgba(0,0,0,1)",
          zeroLineColor: "rgba(235,237,242,1)",
        },
        ticks: {
          padding: 20,
          fontColor: "#9c9fa6",
          autoSkip: true,
        },
        categoryPercentage: 0.5,
        barPercentage: 0.5,
      },
    ],
  },
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
};

const cardData = [
  {
    imgSrc: "../../assets/images/dashboard/circle.svg",
    cardTitle: "Orders",
    cardValue: "100",
    cardStats: "Increased by 60%",
    label: "Orders",
    graphData: [20, 40, 15, 35, 25, 50, 30, 20],
    additionalClass: "bg-gradient-danger",
    value: "50%",
  },
  {
    imgSrc: "../../assets/images/dashboard/circle.svg",
    cardTitle: "Payments",
    cardValue: "44",
    cardStats: "Increased by 20%",
    label: "Payments",
    graphData: [50, 20, 25, 35, 20, 40, 30, 20],
    additionalClass: "bg-gradient-info",
    value: "10%",
  },
  {
    imgSrc: "../../assets/images/dashboard/circle.svg",
    cardTitle: "Logistics",
    cardValue: "95",
    cardStats: "Decreased by 10%",
    label: "Logistics",
    graphData: [10, 10, 5, 25, 25, 50, 10, 20],
    additionalClass: "bg-gradient-success",
    value: "20%",
  },
  {
    imgSrc: "../../assets/images/dashboard/circle.svg",
    cardTitle: "Financial",
    cardValue: "190",
    cardStats: "Increased by 12%",
    label: "Financial",
    graphData: [80, 40, 15, 55, 25, 10, 30, 20],
    additionalClass: "bg-gradient-primary",
    value: "40%",
  },
];

const ListItem = (props) => {
  return (
    <li className={props.isCompleted ? "completed" : null}>
      <div className="form-check">
        <label htmlFor="" className="form-check-label">
          <input
            className="checkbox"
            type="checkbox"
            checked={props.isCompleted}
            onChange={props.changed}
          />{" "}
          {props.children} <i className="input-helper"></i>
        </label>
      </div>
      <i
        className="remove mdi mdi-close-circle-outline"
        onClick={props.remove}
      ></i>
    </li>
  );
};

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [cardDetails, setCardDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visitSaleData, setVisitSaleData] = useState({});
  const visitSaleOptions = defaultVisitScaleOptions;
  const [trafficData, setTrafficData] = useState({});
  const trafficOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    legend: false,
  };
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Pick up kids from school",
      isCompleted: false,
    },
    {
      id: 2,
      task: "Prepare for presentation",
      isCompleted: true,
    },
    {
      id: 3,
      task: "Print Statements",
      isCompleted: false,
    },
    {
      id: 4,
      task: "Create invoice",
      isCompleted: false,
    },
    {
      id: 5,
      task: "Call John",
      isCompleted: true,
    },
    {
      id: 6,
      task: "Meeting with Alisa",
      isCompleted: false,
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const statusChangedHandler = (event, id) => {
    const todo = { ...todos[id] };
    todo.isCompleted = event.target.checked;

    const todosCloned = [...todos];
    todosCloned[id] = todo;

    setTodos(todosCloned);
  };

  const handleChange = (date) => {
    setStartDate(date);
  };

  const addTodo = (event) => {
    event.preventDefault();

    const todosCloned = [...todos];
    todosCloned.unshift({
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      task: inputValue,
      isCompleted: false,
    });
    setInputValue("");
    setTodos(todosCloned);
  };

  const removeTodo = (index) => {
    const todosCloned = [...todos];
    todosCloned.splice(index, 1);
    setTodos(todosCloned);
  };

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const apiCall = () =>
    new Promise((resolve) => setTimeout(resolve(cardData), 300));
  const getApiData = async () => {
    setIsLoading(true);
    let finalData = [];
    try {
      finalData = await apiCall();
      console.log(finalData, "finalData ----->>>");
      setCardDetails(finalData);
    } catch (err) {
    } finally {
      setIsLoading(false);
      return finalData;
    }
  };

  const mountHelperFunction = async () => {
    const data = await getApiData();
    let ctx = document.getElementById("visitSaleChart")?.getContext("2d");
    if (ctx) {
      let gradientBar1 = ctx.createLinearGradient(0, 0, 0, 280);
      gradientBar1.addColorStop(0, "rgba(254, 124, 150, 1)");
      gradientBar1.addColorStop(1, "rgba(255, 205, 150, 1)");

      let gradientBar2 = ctx.createLinearGradient(0, 0, 0, 360);
      gradientBar2.addColorStop(0, "rgba(54, 215, 232, 1)");
      gradientBar2.addColorStop(1, "rgba(177, 148, 250, 1)");

      let gradientBar3 = ctx.createLinearGradient(0, 0, 0, 300);
      gradientBar3.addColorStop(0, "rgba(6, 185, 157, 1)");
      gradientBar3.addColorStop(1, "rgba(132, 217, 210, 1)");

      let gradientBar4 = ctx.createLinearGradient(0, 0, 0, 260);
      gradientBar4.addColorStop(0, "rgba(218, 140, 255, 1)");
      gradientBar4.addColorStop(1, "rgba(154, 85, 255, 1)");

      let gradientdonut1 = ctx.createLinearGradient(0, 0, 0, 180);
      gradientdonut1.addColorStop(0, "rgba(254, 124, 150, 1)");
      gradientdonut1.addColorStop(1, "rgba(255, 205, 150, 1)");

      let gradientdonut2 = ctx.createLinearGradient(0, 0, 0, 400);
      gradientdonut2.addColorStop(0, "rgba(69, 202, 252, 1)");
      gradientdonut2.addColorStop(1, "rgba(48, 63, 159, 1)");

      let gradientdonut3 = ctx.createLinearGradient(0, 0, 0, 250);
      gradientdonut3.addColorStop(0, "rgba(6, 185, 157, 1)");
      gradientdonut3.addColorStop(1, "rgba(132, 217, 210, 1)");

      let gradientdonut4 = ctx.createLinearGradient(0, 0, 0, 180);
      gradientdonut4.addColorStop(0, "rgba(218, 140, 255, 1)");
      gradientdonut4.addColorStop(1, "rgba(154, 85, 255, 1)");

      const newVisitSaleData = {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG"],
        datasets: data.map((e, idx) => ({
          label: e.cardTitle,
          borderColor:
            idx === 0
              ? gradientBar1
              : idx === 1
              ? gradientBar2
              : idx === 2
              ? gradientBar3
              : gradientBar4,
          backgroundColor:
            idx === 0
              ? gradientBar1
              : idx === 1
              ? gradientBar2
              : idx === 2
              ? gradientBar3
              : gradientBar4,
          hoverBackgroundColor:
            idx === 0
              ? gradientBar1
              : idx === 1
              ? gradientBar2
              : idx === 2
              ? gradientBar3
              : gradientBar4,
          legendColor:
            idx === 0
              ? gradientBar1
              : idx === 1
              ? gradientBar2
              : idx === 2
              ? gradientBar3
              : gradientBar4,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          data: e.graphData,
        })),
      };

      const newTrafficData = {
        datasets: [
          {
            data: [40, 20, 10, 30],
            backgroundColor: [
              gradientdonut1,
              gradientdonut2,
              gradientdonut3,
              gradientdonut4,
            ],
            hoverBackgroundColor: [
              gradientdonut1,
              gradientdonut2,
              gradientdonut3,
              gradientdonut4,
            ],
            borderColor: [
              gradientdonut1,
              gradientdonut2,
              gradientdonut3,
              gradientdonut4,
            ],
            legendColor: [
              gradientdonut1,
              gradientdonut2,
              gradientdonut3,
              gradientdonut4,
            ],
          },
        ],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: data.map((e) => e.label),
      };
      setVisitSaleData(newVisitSaleData);
      setTrafficData(newTrafficData);
    }
  };

  useEffect(() => {
    mountHelperFunction();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white mr-2">
            <i className="mdi mdi-home"></i>
          </span>{" "}
          Dashboard{" "}
        </h3>
        <nav aria-label="breadcrumb">
          <ul className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <span></span>Overview{" "}
              <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
            </li>
          </ul>
        </nav>
      </div>

      {/* FIRST ROW  */}
      <div className="row">
        {cardData.map((e) => (
          <div className="col-md-3 stretch-card grid-margin">
            <div
              className={`card ${e.additionalClass} card-img-holder text-white`}
            >
              <div className="card-body">
                <img
                  src={require("../../assets/images/dashboard/circle.svg")}
                  className="card-img-absolute"
                  alt="circle"
                />
                <h4
                  className="font-weight-normal mb-3 text-light "
                  style={{ fontSize: "20px", fontWeight: "300" }}
                >
                  {e.cardTitle}{" "}
                  <i className="mdi mdi-chart-line mdi-24px float-right text-light"></i>
                </h4>
                <h2 className="mb-5 text-light">{e.cardValue}</h2>
                <h6 className="card-text text-light">{e.cardStats}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SECOND ROW  */}
      <div className="row">
        <div className="col-md-7 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="clearfix mb-4">
                <h4 className="card-title float-left">Graphics Stats</h4>
                <div
                  id="visit-sale-chart-legend"
                  className="rounded-legend legend-horizontal legend-top-right float-right"
                >
                  <ul>
                    {cardDetails.map((e) => (
                      <li>
                        <span
                          className={`legend-dots ${e.additionalClass}`}
                        ></span>
                        {e.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Bar
                className="chartLegendContainer"
                data={visitSaleData}
                options={visitSaleOptions}
                id="visitSaleChart"
              />
            </div>
          </div>
        </div>
  

        <div className="col-md-5 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Traffic Sources</h4>
              <Doughnut data={trafficData} options={trafficOptions} />
              <div
                id="traffic-chart-legend"
                className="rounded-legend legend-vertical legend-bottom-left pt-4"
              >
                <ul>
                  {cardDetails.map((e) => (
                    <li>
                      <span
                        className={`legend-dots ${e.additionalClass}`}
                      ></span>
                      {e.label}
                      <span className="float-right">{e.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Dashboard;
