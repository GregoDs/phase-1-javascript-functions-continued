// code your solution here
function saturdayFun(activity = "roller-skate") {
    // Use a conditional statement to check if activity is provided
    if (activity === "roller-skate") {
      return `This Saturday, I want to ${activity}!`;
    } else {
      return `This Saturday, I want to ${activity}!`;
    }
  }

  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  

 
  function wrapAdjective(wrapper) {
    return function(adjective) {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  }
  
