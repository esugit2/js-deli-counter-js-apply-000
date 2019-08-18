function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`; 
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
  } else {
    var serving = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    return serving;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 1) {
    return `The line is currently empty.`;
  } else {
    var array = []
    for(var i = 0; i < katzDeliLine.length; i++) {
      array.push(` ${i+1}. ${katzDeliLine[i]}`);
    }
    return `The line is currently:` + array;
  }
  
  
  
  
}