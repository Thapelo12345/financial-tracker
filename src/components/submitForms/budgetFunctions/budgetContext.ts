import { createContext } from "react";

interface budgetContext {
    amount:number,
    updateAmount: (newAmount: number) => void;
}

export const BudgetContext = createContext<budgetContext>({
    amount: 0,
    updateAmount: () => {}
});