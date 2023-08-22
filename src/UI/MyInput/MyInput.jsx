import './myInput.css'
function MyInput({inputValue, changeInputValue}) {
return (
    <div className='myInput-body'>
        <input 
        value={inputValue} 
        onChange={event => changeInputValue(event.target.value)} 
        type="text" 
        placeholder='Пошук...'
         />
    </div>
);
}
export default MyInput;