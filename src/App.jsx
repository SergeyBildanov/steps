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
    if(JSON.stringify(date) === "null"){
      alert("Date input error, try again!")
    }
    else{
      const formData = {
      date: date,
      steps: parseInt(elements.steps.value),
      id: rowsArray.length + 1
    }
    for(let item of rowsArray){
      if((item.date - formData.date) === 0){
        item.steps += formData.steps;
        setRows([...rowsArray])
        e.target.reset();
        return;
      }
    }
    rowsArray.push(formData);
    rowsArray.sort((a,b)=>{
      return a.date - b.date;
    })
    setRows([...rowsArray])
    e.target.reset();
    }
  }
  const deleteHandler = (e) => {
    e.preventDefault();
    let newArray = [...rowsArray];
    const row = e.target.closest(".row");
    const newDate = new Date(row.querySelector(".rowDate").textContent)
    const formData = {
      date: newDate,
      steps: parseInt(row.querySelector(".rowSteps").textContent),
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