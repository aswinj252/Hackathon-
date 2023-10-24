const ScheduledDates = async (id,repository) =>{
 
    const dates = await repository.dates(id)
    console.log(dates,"dates");
    const formattedDates = dates.map(dateObject => {
        const isoDate = new Date(dateObject.date);
        // Format the date as "YYYY-MM-DD" or any other desired format
        const formattedDate = isoDate.toLocaleDateString(); // Change the format as needed
        dateObject.date = formattedDate;
        return dateObject;
      });
    
      console.log(formattedDates);
    
      return { dates: formattedDates };
   

}
export default ScheduledDates