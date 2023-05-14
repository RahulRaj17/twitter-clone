import "../styles/LeftPanelOptions.css"

function LeftPanelOptions({active, Icon, text}){
    return(
        <div className={`left-options ${active && 'left-options-active'}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default LeftPanelOptions;