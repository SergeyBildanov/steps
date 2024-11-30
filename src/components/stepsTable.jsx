import StepsRow from "./stepsRow"


export default function StepsTable({rows, onDelete}){
    let i=0;
    return(
        <div>
            {rows.map(
            (item) => {
                return <StepsRow date={item.date} steps={item.steps} key={item.id} onDelete={onDelete} id={item.id}/>
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