export function validatePaymentIntervalStrict(
  startDate: Date | string,
  dueDate: Date | string
): string {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const due = typeof dueDate === 'string' ? new Date(dueDate) : dueDate;
  
  if (isNaN(start.getTime()) || isNaN(due.getTime()) || due <= start) {
    return 'invalid';
  }
  
  const timeDiff = due.getTime() - start.getTime();
  const dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
  
  // Very strict tolerance (exact or 1 day difference only)
  if (dayDiff === 7 || dayDiff === 6 || dayDiff === 8) {
    return 'weekly';
  }
  
  // Monthly: 28-31 days (covers most month variations)
  if (dayDiff >= 28 && dayDiff <= 31) {
    return 'monthly';
  }
  
  // Yearly: 365 days ± 1 day (accounts for leap years)
  if (dayDiff === 365 || dayDiff === 364 || dayDiff === 366) {
    return 'yearly';
  }
  
  return 'custom';
}

export function getNextPaymentDate(startDate: string, dueDate: string, frequency: string): string {
    const currentDate = new Date();
    const start = new Date(startDate);
    
    // If start date has passed, calculate the adjusted start date
    if (start <= currentDate) {
        let cyclesPassed = 0;
        const tempDate = new Date(start);
        
        switch(frequency) {
            case "weekly":
                while (tempDate <= currentDate) {
                    tempDate.setDate(tempDate.getDate() + 7);
                    cyclesPassed++;
                }
                break;
            case "monthly":
                while (tempDate <= currentDate) {
                    tempDate.setMonth(tempDate.getMonth() + 1);
                    cyclesPassed++;
                }
                break;
            case "yearly":
                while (tempDate <= currentDate) {
                    tempDate.setFullYear(tempDate.getFullYear() + 1);
                    cyclesPassed++;
                }
                break;
            default:{
                // For invalid frequency, just return the due date
                const due = new Date(dueDate);
                const dueYear = due.getFullYear();
                const dueMonth = String(due.getMonth() + 1).padStart(2, '0');
                const dueDay = String(due.getDate()).padStart(2, '0');
                return `${dueYear}-${dueMonth}-${dueDay}`;
            }
        }
        
        // Calculate the new start date (the most recent payment date that has passed)
        const newStartDate = new Date(start);
        
        switch(frequency) {
            case "weekly":
                newStartDate.setDate(start.getDate() + (7 * (cyclesPassed - 1)));
                break;
            case "monthly":
                newStartDate.setMonth(start.getMonth() + (cyclesPassed - 1));
                break;
            case "yearly":
                newStartDate.setFullYear(start.getFullYear() + (cyclesPassed - 1));
                break;
        }
        
        // Update the start date to the adjusted date
        start.setTime(newStartDate.getTime());
    }
    
    // Calculate the next payment date from the (possibly adjusted) start date
    const nextDate = new Date(start);

    switch(frequency){
        case "weekly":
            nextDate.setDate(start.getDate() + 7);
            break;
        case "monthly":
            nextDate.setMonth(start.getMonth() + 1);
            break;
        case "yearly":
            nextDate.setFullYear(start.getFullYear() + 1);
            break;
        default:{
            console.error("Invalid frequency provided");
            // Format dueDate to ensure consistent return format
            const due = new Date(dueDate);
            const dueYear = due.getFullYear();
            const dueMonth = String(due.getMonth() + 1).padStart(2, '0');
            const dueDay = String(due.getDate()).padStart(2, '0');
            return `${dueYear}-${dueMonth}-${dueDay}`;
        }
    }

    const due = new Date(dueDate);
    
    // Determine which date to return and format it
    const resultDate = nextDate > due ? due : nextDate;
    
    // Format as YYYY-MM-DD
    const year = resultDate.getFullYear();
    const month = String(resultDate.getMonth() + 1).padStart(2, '0');
    const day = String(resultDate.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
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
