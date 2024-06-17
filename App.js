import { useReducer } from "react";
import DigitButton from "./DigitButton";
import "./styles.css";
import { preview } from "vite";
import { reducer } from "./reducer";
export const ACTIONS ={
    ADD_DIGIT:"add-digit",
    CHOOSE_OPERATION:"choose-operation",
    CLEAR:"clear",
    DELETE_DIGIT:"delet-digit",
    EVALUATE:"evaluate"
}

function App() {
    const [{currentOperand, previousOperand, operation} , dispatch] = useReducer(reducer ,{})
    
    return (
        <div className="calculator-grid">
            <div className="output">
                <div className="previous-operand">{previousOperand} {operation}</div>
                <div className="current-operand">{currentOperand}</div>

            </div>
            <button className="span-two" onClick={()=> dispatch({type:ACTIONS.CLEAR})}>Ac</button>
            <button>DEL</button>
            <OperationDigitButton operation="/" dispatch={dispatch}/>
            <DigitButton digit="1" dispatch={dispatch}/>
            <DigitButton digit="2" dispatch={dispatch}/>
            <DigitButton digit="3" dispatch={dispatch}/>
            <OperationDigitButton operation="*" dispatch={dispatch}/>
            
            <DigitButton digit="4" dispatch={dispatch}/>
            <DigitButton digit="5" dispatch={dispatch}/>
            <DigitButton digit="6" dispatch={dispatch}/>
            <OperationDigitButton operation="+" dispatch={dispatch}/>
            
            <DigitButton digit="7" dispatch={dispatch}/>
            <DigitButton digit="8" dispatch={dispatch}/>
            <DigitButton digit="9" dispatch={dispatch}/>
            <OperationDigitButton operation="-" dispatch={dispatch}/>
            
            <DigitButton digit="." dispatch={dispatch}/>
            <DigitButton digit="0" dispatch={dispatch}/>
            
            <button className="span-two">=</button>
        </div>

    );
}
