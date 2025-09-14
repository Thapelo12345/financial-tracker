
export function getNextPaymentDate(startDate: string, dueDate: string, frequency: string): string {
        return "2025-12-09";
    }


export function DaysLeft(dueDate: string):number{
    const due = new Date(dueDate);
    const now = new Date();
    
    due.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);
    
    const timeDiff = due.getTime() - now.getTime();
    
    // Convert milliseconds to days
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    
    return daysDiff < 0 ? 0 : daysDiff;

}
