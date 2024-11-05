import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import InputBox from './Components/InputBox';
import Buttons from './Components/Buttons';
import { useState } from 'react';

function App() {
    const ButtonsArray = [
        { label: 'C', className: 'btn-clear' },
        { label: '( )', className: 'btn-special-charac' },
        { label: '%', className: 'btn-special-charac' },
        { label: '÷', className: 'btn-special-charac' },
        { label: '7', className: 'btn-number' },
        { label: '8', className: 'btn-number' },
        { label: '9', className: 'btn-number' },
        { label: '×', className: 'btn-special-charac' },
        { label: '4', className: 'btn-number' },
        { label: '5', className: 'btn-number' },
        { label: '6', className: 'btn-number' },
        { label: '-', className: 'btn-special-charac' },
        { label: '1', className: 'btn-number' },
        { label: '2', className: 'btn-number' },
        { label: '3', className: 'btn-number' },
        { label: '+', className: 'btn-special-charac' },
        { label: '+/-', className: 'btn-plus-minus' },
        { label: '0', className: 'btn-number' },
        { label: '.', className: 'btn-decimal' },
        { label: '=', className: 'btn-equal' },
    ];

    const [inputValue, setInputValue] = useState('');
    const [lastWasResult, setLastWasResult] = useState(false);

    const operators = ['+', '-', '×', '÷', '%'];

    const handleButtonClick = (value) => {
      // Clear the input if "C" is clicked
      if (value === 'C') {
          setInputValue('');
          setLastWasResult(false);
          return;
      }
  
      // Handle calculation when "=" is clicked
      if (value === '=') {
          try {
              const evaluatedValue = eval(inputValue.replace('×', '*').replace('÷', '/'));
              setInputValue(evaluatedValue.toString());
              setLastWasResult(true); // Mark that the last action was a result
          } catch (e) {
              setInputValue('Error');
              setLastWasResult(false);
          }
          return;
      }
  
      // Prevent consecutive operator inputs
      if (operators.includes(value)) {
          const lastChar = inputValue.slice(-1);
          if (operators.includes(lastChar)) {
              return; // Ignore the operator if the last character is also an operator
          }
  
          // Ensure the first character is a number before an operator
          if (inputValue.length === 0) {
              return; // Don't allow operator as the first character
          }
      }
  
      // Clear input only if a number is clicked after the last result
      if (lastWasResult && !operators.includes(value)) {
          setInputValue(''); // Clear the input only for numbers
          setLastWasResult(false); // Reset the flag after clearing
      }
  
      // Update the inputValue by appending the clicked button's value
      setInputValue((prev) => prev + value);
  };
  

    return (
        <>
            <div className="calculatorContainer">
                <div className="row">
                    <div className="col-12">
                        <InputBox value={inputValue} />
                    </div>
                </div>
                <div className="row px-4 pb-4">
                    <Buttons buttonsArray={ButtonsArray} onButtonClick={handleButtonClick} />
                </div>
            </div>
        </>
    );
}

export default App;
