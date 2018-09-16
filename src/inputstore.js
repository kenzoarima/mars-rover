module.exports = function InputStore() {

  const sanitiseNaturalNumber = function(inputNumber) {
    if (typeof inputNumber !== "number") {
      return 0;
    } else if (inputNumber < 0) {
      return 0;
    } else if (!Number.isInteger(inputNumber)) {
      return 0;
    } else {
      return inputNumber;
    }
  };

  this.getWidthHeight = function(width, height) {
    return [ sanitiseNaturalNumber(width), sanitiseNaturalNumber(height) ];
  };

  this.getInitialLocation = function(inputLocation) {
    const x = parseInt( inputLocation.split(" ")[0] , 10);
    const y = parseInt( inputLocation.split(" ")[1] , 10);

    return [ sanitiseNaturalNumber(x), sanitiseNaturalNumber(y) ];
  };

  this.getInitialDirection = function(inputDirection) {
    switch (inputDirection) {
      case "N":
      case "S":
      case "E":
      case "W":
        return inputDirection;
        break;
      default:
        return "N";
    }
  };

  
};