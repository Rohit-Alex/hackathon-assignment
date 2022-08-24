import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { Bar, Doughnut } from "react-chartjs-2";
import DatePicker from "react-datepicker";

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

const cardData = [
  {
    imgSrc: "../../assets/images/dashboard/circle.svg",
    cardTitle: "Orders",
    cardValue: "1000",
    cardStats: "Increased by 20%",
    color: "bg-gradient-danger",
    graphData: [12, 10, 9, 30, 60, 80, 20, 30],
  },
  {
    imgSrc: "../../assets/images/dashboard/circle.svg",
    cardTitle: "Payments",
    cardValue: "334",
    cardStats: "Increased by 10%",
    color: "bg-gradient-info",
    graphData: [12, 10, 9, 30, 60, 80, 20, 30],
  },
  {
    imgSrc: "../../assets/images/dashboard/circle.svg",
    cardTitle: "Logistics",
    cardValue: "41",
    cardStats: "Decreased by 7%",
    color: "bg-gradient-success",
    graphData: [12, 10, 9, 30, 60, 80, 20, 30],
  },
  {
    imgSrc: "../../assets/images/dashboard/circle.svg",
    cardTitle: "Financial",
    cardValue: "35",
    cardStats: "Increased by 12%",
    color: "bg-gradient-info",
    graphData: [12, 10, 9, 30, 60, 80, 20, 30],
  },
];

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [visitSaleData, setVisitSaleData] = useState({});
  const [visitSaleOptions, setVisitSaleOptions] = useState(
    defaultVisitScaleOptions
  );
  const [trafficData, setTrafficData] = useState({});
  const [trafficOptions, setTrafficOptions] = useState({
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    legend: false,
  });
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
  const [isLoading, setIsLoading] = useState(true);
  const [cardDetails, setCardDetails] = useState([]);

  const statusChangedHandler = (event, id) => {
    const todo = { ...todos[id] };
    todo.isCompleted = event.target.checked;

    const todos = [...todos];
    todos[id] = todo;

    setTodos(todos);
  };

  const handleChange = (date) => {
    setStartDate(date);
  };

  const addTodo = (event) => {
    event.preventDefault();

    const todos = [...todos];
    todos.unshift({
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      task: inputValue,
      isCompleted: false,
    });
    setInputValue("");
    setTodos(todos);
  };

  const removeTodo = (index) => {
    const todos = [...todos];
    todos.splice(index, 1);
    setTodos(todos);
  };

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    let ctx = document.getElementById("visitSaleChart")?.getContext("2d");
    if (ctx) {
      let gradientBar1 = ctx.createLinearGradient(0, 0, 0, 181);
      gradientBar1.addColorStop(0, "rgba(218, 140, 255, 1)");
      gradientBar1.addColorStop(1, "rgba(154, 85, 255, 1)");

      let gradientBar2 = ctx.createLinearGradient(0, 0, 0, 360);
      gradientBar2.addColorStop(0, "rgba(54, 215, 232, 1)");
      gradientBar2.addColorStop(1, "rgba(177, 148, 250, 1)");

      let gradientBar3 = ctx.createLinearGradient(0, 0, 0, 300);
      gradientBar3.addColorStop(0, "rgba(255, 191, 150, 1)");
      gradientBar3.addColorStop(1, "rgba(254, 112, 150, 1)");

      let gradientdonut1 = ctx.createLinearGradient(0, 0, 0, 181);
      gradientdonut1.addColorStop(0, "rgba(54, 215, 232, 1)");
      gradientdonut1.addColorStop(1, "rgba(177, 148, 250, 1)");

      let gradientdonut2 = ctx.createLinearGradient(0, 0, 0, 50);
      gradientdonut2.addColorStop(0, "rgba(6, 185, 157, 1)");
      gradientdonut2.addColorStop(1, "rgba(132, 217, 210, 1)");

      let gradientdonut3 = ctx.createLinearGradient(0, 0, 0, 300);
      gradientdonut3.addColorStop(0, "rgba(254, 124, 150, 1)");
      gradientdonut3.addColorStop(1, "rgba(255, 205, 150, 1)");

      const newVisitSaleData = {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG"],
        datasets: [
          cardData.map((e, idx) => ({
            label: e.cardTitle,
            borderColor:
              idx === 0
                ? gradientBar1
                : idx === 1
                ? gradientBar2
                : gradientBar3,
            backgroundColor:
              idx === 0
                ? gradientBar1
                : idx === 1
                ? gradientBar2
                : gradientBar3,
            hoverBackgroundColor:
              idx === 0
                ? gradientBar1
                : idx === 1
                ? gradientBar2
                : gradientBar3,
            legendColor:
              idx === 0
                ? gradientBar1
                : idx === 1
                ? gradientBar2
                : gradientBar3,
            pointRadius: 0,
            fill: false,
            borderWidth: 1,
            data: e.graphData,
          })),
        ],
      };

      console.log(newVisitSaleData, "console");
      const newTrafficData = {
        datasets: [
          {
            data: [30, 30, 40],
            backgroundColor: [gradientdonut1, gradientdonut2, gradientdonut3],
            hoverBackgroundColor: [
              gradientdonut1,
              gradientdonut2,
              gradientdonut3,
            ],
            borderColor: [gradientdonut1, gradientdonut2, gradientdonut3],
            legendColor: [gradientdonut1, gradientdonut2, gradientdonut3],
          },
        ],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: ["Search Engines", "Direct Click", "Bookmarks Click"],
      };
      setVisitSaleData(newVisitSaleData);
      setTrafficData(newTrafficData);
    }
    apiCall();
  }, []);

  const apiCall = () =>
    new Promise((resolve) => setTimeout(resolve(cardData), 300));
  const getApiData = async () => {
    setIsLoading(true);
    let finalData = [];
    try {
      finalData = await apiCall();
    } catch (err) {
    } finally {
      setIsLoading(false);
    }

    setCardDetails(finalData);
  };

  const graphStats = [];

  return (
    <div>
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
      <div className="row">
        {cardData.map((e) => (
          <div className="col-md-3 stretch-card grid-margin">
            <div className={`card ${e.color} card-img-holder text-white`}>
              <div className="card-body">
                <img
                  src={require("../../assets/images/dashboard/circle.svg")}
                  className="card-img-absolute"
                  alt="circle"
                />
                <h4 className="font-weight-normal mb-3">
                  {e.cardTitle}{" "}
                  <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                </h4>
                <h2 className="mb-5">{e.cardValue}</h2>
                <h6 className="card-text">{e.cardStats}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        <div className="col-md-7 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="clearfix mb-4">
                <h4 className="card-title float-left">Graphical Stats</h4>
                <div
                  id="visit-sale-chart-legend"
                  className="rounded-legend legend-horizontal legend-top-right float-right"
                >
                  <ul>
                    <li>
                      <span className="legend-dots bg-primary"></span>Orders
                    </li>
                    <li>
                      <span className="legend-dots bg-danger"></span>Payments
                    </li>
                    <li>
                      <span className="legend-dots bg-info"></span>Logistics
                    </li>
                    <li>
                      <span className="legend-dots bg-success"></span>Financial
                    </li>
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
                  <li>
                    <span className="legend-dots bg-info"></span>Search Engines
                    <span className="float-right">30%</span>
                  </li>
                  <li>
                    <span className="legend-dots bg-success"></span>Direct Click
                    <span className="float-right">30%</span>
                  </li>
                  <li>
                    <span className="legend-dots bg-danger"></span>Bookmarks
                    Click
                    <span className="float-right">40%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* THIRD ROW STARTS  */}
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Recent Tickets</h4>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th> Assignee </th>
                      <th> Subject </th>
                      <th> Status </th>
                      <th> Last Update </th>
                      <th> Tracking ID </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={require("../../assets/images/faces/face1.jpg")}
                          className="mr-2"
                          alt="face"
                        />{" "}
                        David Grey{" "}
                      </td>
                      <td> Fund is not recieved </td>
                      <td>
                        <label className="badge badge-gradient-success">
                          DONE
                        </label>
                      </td>
                      <td> Dec 5, 2017 </td>
                      <td> WD-12345 </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={require("../../assets/images/faces/face2.jpg")}
                          className="mr-2"
                          alt="face"
                        />{" "}
                        Stella Johnson{" "}
                      </td>
                      <td> High loading time </td>
                      <td>
                        <label className="badge badge-gradient-warning">
                          PROGRESS
                        </label>
                      </td>
                      <td> Dec 12, 2017 </td>
                      <td> WD-12346 </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={require("../../assets/images/faces/face3.jpg")}
                          className="mr-2"
                          alt="face"
                        />{" "}
                        Marina Michel{" "}
                      </td>
                      <td> Website down for one week </td>
                      <td>
                        <label className="badge badge-gradient-info">
                          ON HOLD
                        </label>
                      </td>
                      <td> Dec 16, 2017 </td>
                      <td> WD-12347 </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={require("../../assets/images/faces/face4.jpg")}
                          className="mr-2"
                          alt="face"
                        />{" "}
                        John Doe{" "}
                      </td>
                      <td> Loosing control on server </td>
                      <td>
                        <label className="badge badge-gradient-danger">
                          REJECTED
                        </label>
                      </td>
                      <td> Dec 3, 2017 </td>
                      <td> WD-12348 </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* FOURTH ROW  STARTS WITH DATEPICKER*/}
        <div className="col-lg-5 grid-margin stretch-card">
          <div className="card">
            <div className="card-body p-0 d-flex">
              <div className="dashboard-custom-date-picker">
                <DatePicker
                  inline
                  selected={startDate}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* RECENT UPDATES*/}
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Recent Updates</h4>
              <div className="d-flex">
                <div className="d-flex align-items-center mr-4 text-muted font-weight-light">
                  <i className="mdi mdi-account-outline icon-sm mr-2"></i>
                  <span>jack Menqu</span>
                </div>
                <div className="d-flex align-items-center text-muted font-weight-light">
                  <i className="mdi mdi-clock icon-sm mr-2"></i>
                  <span>October 3rd, 2018</span>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6 pr-1">
                  <img
                    src={require("../../assets/images/dashboard/img_1.jpg")}
                    className="mb-2 mw-100 w-100 rounded"
                    alt="face"
                  />
                  <img
                    src={require("../../assets/images/dashboard/img_4.jpg")}
                    className="mw-100 w-100 rounded"
                    alt="face"
                  />
                </div>
                <div className="col-6 pl-1">
                  <img
                    src={require("../../assets/images/dashboard/img_2.jpg")}
                    className="mb-2 mw-100 w-100 rounded"
                    alt="face"
                  />
                  <img
                    src={require("../../assets/images/dashboard/img_3.jpg")}
                    className="mw-100 w-100 rounded"
                    alt="face "
                  />
                </div>
              </div>
              <div className="d-flex mt-5 align-items-start">
                <img
                  src={require("../../assets/images/faces/face3.jpg")}
                  className="img-sm rounded-circle mr-3"
                  alt="face"
                />
                <div className="mb-0 flex-grow">
                  <h5 className="mr-2 mb-2">
                    School Website - Authentication Module.
                  </h5>
                  <p className="mb-0 font-weight-light">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page.
                  </p>
                </div>
                <div className="ml-auto">
                  <i className="mdi mdi-heart-outline text-muted"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* LAST ROW STARTS WITH BASIC TABLE */}
        <div className="col-xl-7 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Project Status</h4>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th> # </th>
                      <th> Name </th>
                      <th> Due Date </th>
                      <th> Progress </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> 1 </td>
                      <td> Herman Beck </td>
                      <td> May 15, 2015 </td>
                      <td>
                        <ProgressBar variant="gradient-success" now={25} />
                      </td>
                    </tr>
                    <tr>
                      <td> 2 </td>
                      <td> Messsy Adam </td>
                      <td> Jul 01, 2015 </td>
                      <td>
                        <ProgressBar variant="gradient-danger" now={75} />
                      </td>
                    </tr>
                    <tr>
                      <td> 3 </td>
                      <td> John Richards </td>
                      <td> Apr 12, 2015 </td>
                      <td>
                        <ProgressBar variant="gradient-warning" now={90} />
                      </td>
                    </tr>
                    <tr>
                      <td> 4 </td>
                      <td> Peter Meggik </td>
                      <td> May 15, 2015 </td>
                      <td>
                        <ProgressBar variant="gradient-primary" now={50} />
                      </td>
                    </tr>
                    <tr>
                      <td> 5 </td>
                      <td> Edward </td>
                      <td> May 03, 2015 </td>
                      <td>
                        <ProgressBar variant="gradient-danger" now={50} />
                      </td>
                    </tr>
                    <tr>
                      <td> 5 </td>
                      <td> Ronald </td>
                      <td> Jun 05, 2015 </td>
                      <td>
                        <ProgressBar variant="gradient-info" now={65} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* TODOS */}
        <div className="col-xl-5 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-white">Todo</h4>
              <form className="add-items d-flex" onSubmit={addTodo}>
                <input
                  type="text"
                  className="form-control h-auto"
                  placeholder="What do you need to do today?"
                  value={inputValue}
                  onChange={inputChangeHandler}
                  required
                />
                <button
                  type="submit"
                  className="btn btn-gradient-primary font-weight-bold px-lg-4 px-3"
                >
                  Add
                </button>
              </form>
              <div className="list-wrapper">
                <ul className="d-flex flex-column todo-list">
                  {todos.map((todo, index) => {
                    return (
                      <ListItem
                        isCompleted={todo.isCompleted}
                        changed={(event) => statusChangedHandler(event, index)}
                        key={todo.id}
                        remove={() => removeTodo(index)}
                      >
                        {todo.task}
                      </ListItem>
                    );
                  })}
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
