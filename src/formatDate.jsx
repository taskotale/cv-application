export default function formatDate(inputDate) {
    const dateParts = inputDate.split('-');
    const year = dateParts[0];
    const month = dateParts[1];
    
    // Array of month names
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
    // Get the month name from the array
    const monthName = monthNames[parseInt(month) - 1];
  
    // Format the date as 'Month Year'
    const formattedDate = `${monthName?monthName:''} ${year}`;
  
    return formattedDate;
  }
  

  