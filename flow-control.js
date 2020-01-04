function basicTeenager(age) {
  if (13 > age || age < 19){
  return "You are a teenager!";
  }
}

function teenager(age) {
  if (13 < age || age > 19) {
    return "You are not a teenager"
  }
  else {
    return "You are a teenager!";
  }
}

function ageChecker(age) {
  if (age <= 12) {
    return "You are a kid";
  }
  else if (age >= 20) {
    return "You are a grownup";
  }
  else {
    return "You are a teenager!";
  }
}

function ternaryTeenager(age) {
  return (13 >= age || age <= 19) ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {

}
