export default function StepsRow({date, steps, onDelete, id}){
    const options = { 
        year: '2-digit', 
        month: '2-digit', 
        day: '2-digit' };
    const dateFormat = (str) => {
            let parts = str.split(".");
            return [parts[1], parts[0], parts[2]].join(".");
    }
    const dateString = dateFormat(date.toLocaleDateString("en-US", options).replace(/\//g, "."));
    return(
        <div className="row" data-id={id}>
            <div className="rowDate">{dateString}</div>
            <div className="rowSteps">{steps}</div>
            <div className="buttons">
                <a href="#0" className="edit-svg link">
                <svg viewBox="0 0 512 512">
                    <path d="M387.182,0L0,387.181V512h124.818L512,124.819L387.182,0z M104.879,463.858H48.142v-56.735l282.303-282.303l56.735,56.735 L104.879,463.858z M364.486,90.78l22.694-22.694l56.737,56.734l-22.696,22.696L364.486,90.78z" fill="#000"/>
                </svg>
                </a>
                <a href="#0" className="delete-svg link" onClick={onDelete}>
                <svg viewBox="0 0 32 32">
                    <path d="m6.8076 28.0205 9.1924-9.1924 9.1924 9.1924 2.8281-2.8281-9.1924-9.1924 9.1924-9.1924-2.8281-2.8281-9.1924 9.1924-9.1924-9.1924-2.8281 2.8281 9.1924 9.1924-9.1924 9.1924z"/>
                </svg>
                </a>
            </div>
        </div>
    )
}