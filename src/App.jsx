import './App.css'
import { useState } from 'react'
import StepsForm from './components/stepsForn'
import StepsTable from './components/stepsTable'



function App() {
  const [rowsArray, setRows] = useState([]);
  const submitHandler = e => {
    e.preventDefault();
    const elements = e.target.elements;
    const date = new Date(elements.date.value);
    const formData = {
      date: date,
      steps: elements.steps.value
    }
    rowsArray.push(formData);
    rowsArray.sort((a,b)=>{
      return a.date - b.date;
    })
    setRows([...rowsArray])
  }
  const deleteHandler = (e) => {
    e.preventDefault();
    const row = e.target.closest(".row");
    const newDate = new Date(row.querySelector(".rowDate").textContent)
    const formData = {
      date: newDate,
      steps: row.querySelector(".rowSteps").textContent
    }
    const array = rowsArray.filter((item)=>{(item.date !== formData.date && item.steps !== formData.steps)})
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