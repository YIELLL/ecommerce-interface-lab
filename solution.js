function checkVariable(input) {
  switch (typeof input) {
    case "string":
      return "This Input is a String";
    case "number":
      return "This Input is a Number";
    case "boolean":
      return "This Input is a Boolean";
    case "bigint":
      return "This Input is a Bigint";
    case "undefined":
      return "This Input is a Undefined";
    case "object":
      return "object";
    default:
      return "object";
  }
}