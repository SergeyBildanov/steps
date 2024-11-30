import StepsRow from "./stepsRow"


export default function StepsTable({rows, onDelete}){
    let i=0;
    return(
        <div>
            {rows.map(
            (item) => {
                return <StepsRow date={item.date} steps={item.steps} key={i++} onDelete={onDelete}/>
            }
        )}
        </div>
    );
}

/*
 rows?rows.map(
            (item, index) => {
                return <StepsRow date={item.date} steps={item.steps} key={index}/>
            }
        ):null
*/