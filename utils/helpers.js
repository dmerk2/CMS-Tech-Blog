module.exports = {
  format_date: (date) => {
    console.log("Input date:", date);
    let formattedDate = new Date(date);
    console.log("Formatted date:", formattedDate); 
    console.log("Month:", formattedDate.getMonth() + 1);
    console.log("Day:", formattedDate.getDate());
    console.log("Year:", formattedDate.getFullYear());

    return `${
      formattedDate.getMonth() + 1
    }/${formattedDate.getDate()}/${formattedDate.getFullYear()}`;
  },
};
