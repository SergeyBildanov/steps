import './App.css'
import { useState } from 'react'
import StepsForm from './components/stepsForn'
import StepsTable from './components/stepsTable'



function App() {
  const [rowsArray, setRows] = useState([]);
  const dateFormat = (str) => {
    let parts = str.split(".");
    return [parts[1], parts[0], parts[2]].join(".");
  }
  const submitHandler = e => {
    e.preventDefault();
    const elements = e.target.elements;
    const date = new Date(dateFormat(elements.date.value));
    console.log(date)
    const formData = {
      date: date,
      steps: elements.steps.value,
      id: rowsArray.length + 1
    }
    rowsArray.push(formData);
    rowsArray.sort((a,b)=>{
      return a.date - b.date;
    })
    setRows([...rowsArray])
  }
  const deleteHandler = (e) => {
    e.preventDefault();
    let newArray = [...rowsArray];
    const row = e.target.closest(".row");
    const newDate = new Date(row.querySelector(".rowDate").textContent)
    const formData = {
      date: newDate,
      steps: row.querySelector(".rowSteps").textContent,
      id: parseInt(row.dataset.id),
    }
    let array = newArray.filter(item=>{
      return((item.id !== formData.id))});
    setRows([...array]) 
  }
  return (
    <>
    <StepsForm onSubmit={submitHandler}/>
    <div className="row">
            <div className="dateTitle">Дата(ДД.ММ.ГГ)</div>
            <div className="dateTitle">Пройдено км.</div>
            <div className="buttonTitle">Действия</div>
    </div>
    <StepsTable rows={rowsArray} onDelete={deleteHandler}/>
    </>
  )
}

export default App

/*
{
      rowsArray?rowsArray.map(
        (item, index) => {
            return <StepsRow date={item.date} steps={item.steps} key={index}/>
        }
    ):null 
    } */