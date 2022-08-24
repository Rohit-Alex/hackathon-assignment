import { Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import {Bar, Doughnut} from 'react-chartjs-2';
import DatePicker from "react-datepicker";
import { CardShimmerEffect } from '../Shimmer/CardShimmer';



const defaultVisitScaleOptions = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        display: false,
        min: 0,
        stepSize: 20,
        max: 80
      },
      gridLines: {
        drawBorder: false,
        color: 'rgba(235,237,242,1)',
        zeroLineColor: 'rgba(235,237,242,1)'
      }
    }],
    xAxes: [{
      gridLines: {
        display: false,
        drawBorder: false,
        color: 'rgba(0,0,0,1)',
        zeroLineColor: 'rgba(235,237,242,1)'
      },
      ticks: {
        padding: 20,
        fontColor: "#9c9fa6",
        autoSkip: true,
      },
      categoryPercentage: 0.5,
      barPercentage: 0.5
    }]
  },
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0
    }
  }
}

const cardData = [
  {
    imgSrc: "../../assets/images/dashboard/circle.svg",
    cardTitle: 'Weekly Sales',
    cardValue: '$ 15,0000',
    cardStats: 'Increased by 60%',
    label: 'Sales',
    graphData: [20, 40, 15, 35, 25, 50, 30, 20],
    additionalClass: 'bg-primary'
  },
  {
    imgSrc: "../../assets/images/dashboard/circle.svg",
    cardTitle: 'Weekly Orders',
    cardValue: '45,6334',
    cardStats: 'Increased by 20%',
    label: 'Order',
    graphData: [50, 40, 15, 35, 25, 50, 30, 20],
    additionalClass: 'bg-success'
  },
  {
    imgSrc: "../../assets/images/dashboard/circle.svg",
    cardTitle: 'Visitors Online',
    cardValue: '95,5741',
    cardStats: 'Decreased by 10%',
    label: 'Visitors',
    graphData: [10, 40, 15, 35, 25, 50, 30, 20],
    additionalClass: 'bg-danger'
  },
  {
    imgSrc: "../../assets/images/dashboard/circle.svg",
    cardTitle: 'Raat gyi baat gyi',
    cardValue: '35,0000',
    cardStats: 'Increased by 12%',
    label: 'Raat',
    graphData: [80, 40, 15, 55, 25, 50, 30, 20],
    additionalClass: 'bg-info'
  },
]

const ListItem = (props) => {
  return (
    <li className={(props.isCompleted ? 'completed' : null)}>
      <div className="form-check">
        <label htmlFor="" className="form-check-label">
          <input className="checkbox" type="checkbox"
            checked={props.isCompleted}
            onChange={props.changed}
          /> {props.children} <i className="input-helper"></i>
        </label>
      </div>
      <i className="remove mdi mdi-close-circle-outline" onClick={props.remove}></i>
    </li>
  )
};

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [cardDetails, setCardDetails] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [visitSaleData, setVisitSaleData] = useState({})
  const visitSaleOptions = defaultVisitScaleOptions
  const [trafficData, setTrafficData] = useState({})
  const trafficOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    legend: false,
  }
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: 'Pick up kids from school',
      isCompleted: false
    },
    {
      id: 2,
      task: 'Prepare for presentation',
      isCompleted: true
    },
    {
      id: 3,
      task: 'Print Statements',
      isCompleted: false
    },
    {
      id: 4,
      task: 'Create invoice',
      isCompleted: false
    },
    {
      id: 5,
      task: 'Call John',
      isCompleted: true
    },
    {
      id: 6,
      task: 'Meeting with Alisa',
      isCompleted: false
    }
  ])
  const [inputValue, setInputValue] = useState('')

  const statusChangedHandler = (event, id) => {

    const todo = {...todos[id]};
    todo.isCompleted = event.target.checked;

    const todosCloned = [...todos];
    todosCloned[id] = todo;

    setTodos(todosCloned)
  }

  const handleChange = date => {
    setStartDate(date)
  };

  const addTodo =  (event) => {
      event.preventDefault();

      const todosCloned = [...todos];
    todosCloned.unshift({
          id: todos.length ? todos[todos.length - 1].id + 1 : 1,
          task: inputValue,
          isCompleted: false
          
      })
      setInputValue('')
    setTodos(todosCloned)
  }

  const removeTodo = (index) => {
      const todosCloned = [...todos];
      todosCloned.splice(index, 1);
      setTodos(todosCloned)
  }

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value)
  }
  
  const apiCall = () => new Promise(resolve => setTimeout(resolve(cardData), 300))
  const getApiData = async () => {
    setIsLoading(true)
    let finalData = []
    try {
      finalData = await apiCall()
      console.log(finalData, 'finalData ----->>>')
    } catch (err) {

    } finally {
      setIsLoading(false)
      return finalData
    }
    
  }

  const mountHelperFunction = async () => {
    const data = await getApiData()
    let ctx = document.getElementById('visitSaleChart')?.getContext("2d")
    if (ctx) {
      let gradientBar1 = ctx.createLinearGradient(0, 0, 0, 181)
      gradientBar1.addColorStop(0, 'rgba(218, 140, 255, 1)')
      gradientBar1.addColorStop(1, 'rgba(154, 85, 255, 1)')

      let gradientBar2 = ctx.createLinearGradient(0, 0, 0, 360)
      gradientBar2.addColorStop(0, 'rgba(54, 215, 232, 1)')
      gradientBar2.addColorStop(1, 'rgba(177, 148, 250, 1)')

      let gradientBar3 = ctx.createLinearGradient(0, 0, 0, 300)
      gradientBar3.addColorStop(0, 'rgba(255, 191, 150, 1)')
      gradientBar3.addColorStop(1, 'rgba(254, 112, 150, 1)')

      let gradientdonut1 = ctx.createLinearGradient(0, 0, 0, 181)
      gradientdonut1.addColorStop(0, 'rgba(54, 215, 232, 1)')
      gradientdonut1.addColorStop(1, 'rgba(177, 148, 250, 1)')

      let gradientdonut2 = ctx.createLinearGradient(0, 0, 0, 50)
      gradientdonut2.addColorStop(0, 'rgba(6, 185, 157, 1)')
      gradientdonut2.addColorStop(1, 'rgba(132, 217, 210, 1)')

      let gradientdonut3 = ctx.createLinearGradient(0, 0, 0, 300)
      gradientdonut3.addColorStop(0, 'rgba(254, 124, 150, 1)')
      gradientdonut3.addColorStop(1, 'rgba(255, 205, 150, 1)')


      const newVisitSaleData = {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'],
        datasets: data.map((e, idx) => ({
          label: e.cardTitle,
          borderColor: idx === 0 ? gradientBar1 : idx === 1 ? gradientBar2 : gradientBar3,
          backgroundColor: idx === 0 ? gradientBar1 : idx === 1 ? gradientBar2 : gradientBar3,
          hoverBackgroundColor: idx === 0 ? gradientBar1 : idx === 1 ? gradientBar2 : gradientBar3,
          legendColor: idx === 0 ? gradientBar1 : idx === 1 ? gradientBar2 : gradientBar3,
          pointRadius: 0,
          fill: false,
          borderWidth: 1,
          data: e.graphData
        }))
      }

      const newTrafficData = {
        datasets: [{
          data: [30, 30, 40],
          backgroundColor: [
            gradientdonut1,
            gradientdonut2,
            gradientdonut3
          ],
          hoverBackgroundColor: [
            gradientdonut1,
            gradientdonut2,
            gradientdonut3
          ],
          borderColor: [
            gradientdonut1,
            gradientdonut2,
            gradientdonut3
          ],
          legendColor: [
            gradientdonut1,
            gradientdonut2,
            gradientdonut3
          ]
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
          'Search Engines',
          'Direct Click',
          'Bookmarks Click',
        ]
      };
      setVisitSaleData(newVisitSaleData)
      setTrafficData(newTrafficData)
    }
  }

  useEffect(()=>{
    mountHelperFunction()
  }, [])

    return (
      <div className='dashboard-container'>
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-home"></i>
            </span> Dashboard </h3>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                <span></span>Overview <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
              </li>
            </ul>
          </nav>
        </div>
        
        {/* FIRST ROW  */}
        <div className="row">
          {cardData.map(e => (
            <div className="col-md-3 stretch-card grid-margin">
              
              <div className={`card ${e.additionalClass} card-img-holder text-white`}>
                <div className="card-body">
                  <img src={require("../../assets/images/dashboard/circle.svg")} className="card-img-absolute" alt="circle" />
                  <h4 className="font-weight-normal mb-3">{e.cardTitle} <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                  </h4>
                  <h2 className="mb-5">{e.cardValue}</h2>
                  <h6 className="card-text">{e.cardStats}</h6>
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
                  <h4 className="card-title float-left">Visit And Sales Statistics</h4>
                  <div id="visit-sale-chart-legend" className="rounded-legend legend-horizontal legend-top-right float-right">
                    <ul>
                      {cardDetails.map(e => (
                        <li>
                          <span className={`legend-dots ${e.additionalClass}`}>
                          </span>{e.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Bar className="chartLegendContainer" data={visitSaleData} options={visitSaleOptions} id="visitSaleChart"/>
              </div>
            </div>
          </div>
          <div className="col-md-5 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Traffic Sources</h4>
                <Doughnut data={trafficData} options={trafficOptions} />
                <div id="traffic-chart-legend" className="rounded-legend legend-vertical legend-bottom-left pt-4">
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
                      <span className="legend-dots bg-danger"></span>Bookmarks Click
                      <span className="float-right">40%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div> 
    );
  
}

export default Dashboard;