export const  formatDate=(dateString)=> {
    const date = new Date(dateString);
    return `${date.toLocaleString("en-US", {
      month: "short",
    })} ${date.getDate()} ${date.getFullYear().toString().slice(-2)}`;
  }