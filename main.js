let currentHours = new Date().getHours();
switch (true) {
    case (currentHours <= 20) : 
    case (currentHours >= 8) : 
    document.write("we are open if it is 08:00 to 20:00");
    break;
    default: 
    document.write("we are closed now if it is outside of the schedule");
  }
