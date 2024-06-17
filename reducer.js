import { ACTIONS } from "./App";
import { evaluate } from "./evaluate";

export function reducer(state, { type, payload }) {
    switch (type) {
        case ACTIONS.ADD_DIGIT:
            if (payload.digit === "0" && state.currentOperand === "0") {
                return state;

            }
            if (payload.digit === "." && state.currentOperand.includes(".")) {
                return state;

            }
            return {
                ...state,
                currentOperand: '${currentOperand || ""}${payload.digit}'
            };
        case ACTIONS.CHOOSE_OPERATION:
            if (state.currentOperand == null && state.previousOperand == null) (
            );
            return state;

            if (state.previousOperand == null) {
                return {
                    ...state,
                    operation: payload.operation,
                    previousOperand: state.currentOperand,
                    currentOperand: null,
                };
            }
            return {
                ...state,
                previousOperand: evaluate(state),
                operation: payload.operation,
                currentOperand: null
            };
        case ACTIONS.CLEAR:
            return {};
    }
}
