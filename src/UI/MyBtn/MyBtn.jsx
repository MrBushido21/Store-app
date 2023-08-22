import "./mybtn.css"
function MyBtn({uppCartCounter, value, cleanCart}) {
return (
    <button onClick={uppCartCounter} className="mybtn">{value}</button>
);
}
export default MyBtn;