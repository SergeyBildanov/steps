
export default function StepsForm({onSubmit}){
    const submitHandler = (e) => {
        onSubmit(e)
    }
    return(
        <form action="stepsForm" className="steps-form" onSubmit={submitHandler}>
            <div className="wrapper">
                <label htmlFor="date">Дата(ДД.ММ.ГГ)</label>
                <input type="text" className="date input" name="date" id="date" required/>
            </div>
            <div className="wrapper">
                <label htmlFor="steps">Пройдено, км</label>
                <input type="text" className="steps input" name="steps" id="steps" required/>
            </div>
            
            <button className="submit">ОК</button>
        </form>
    )
}