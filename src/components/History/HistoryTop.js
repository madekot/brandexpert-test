
const HistoryTop = (props) => {
  return (
    <div className="history__container">
      <div className="history__header">
        <h2 className="history__title">{props.info.title}</h2>
        <p className="history__desc">{props.info.desc}</p>
      </div> 
    </div>    
  )
}

export {HistoryTop}