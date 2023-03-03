import './style.css';

export const SchemeColor = ({colorNumber}) => {
    return (
    <div className="scheme-color" style={{ backgroundColor: {colorNumber} }} >{colorNumber}
    </div> )
}