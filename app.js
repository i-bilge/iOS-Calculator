let calculation = document.getElementById("calculation");
let output = document.getElementById("output");
let buttonArea = document.getElementById("buttonArea");

let answer;
let operation ="";
let firstNumber;
let secondNumber;

//here we are defining the calculation
function calculateIt(Num1, Num2, Op, a, b, c) {
    if (Op == "+") {
        b += a + c;
        a = Num1 + Num2;
      }
    if (operation == "-") {
        b += a + c;
        a = Num1 -  Num2;
      }
    if (operation == "*") {
        b += a + c;
        a = Num1 * Num2;
      }
    if (operation == "/") {
        b += a + c;
        a = Num1 / Num2;
      }
}

//NOW WE RE STARTING THE EVENTLISTENER
//if there is no input just take number
buttonArea.addEventListener("click", (e) => {
    let x = e.target.textContent;
    if (!output.textContent) {
        if (e.target.className == "butons numbers") {
            output.textContent = e.target.textContent;
            secondNumber = Number(output.textContent);

            console.log("When Tehere is no input=> Num1: ", firstNumber, "Num2: ",secondNumber, "OP: ",operation, "click: ",e.target.textContent, "a: ",output.textContent, "b: ",calculation.textContent);
        }
    }
//if there is input:...
    else {
        //when user click on numbers
        if (e.target.className == "butons numbers") {
            output.textContent += e.target.textContent;
            secondNumber = Number(output.textContent);

            console.log("Click on num=> Num1: ", firstNumber, "Num2: ",secondNumber, "OP: ",operation, "click: ",e.target.textContent, "a: ",output.textContent, "b: ",calculation.textContent);
        }
        //when user click on operations
        else if(e.target.className == "butons operations") {
            if (operation != "") {
                // calculateIt(firstNumber, secondNumber, operation, output.textContent, calculation.textContent, e.target.textContent);
                if (operation == "+") {
                    calculation.textContent = firstNumber + secondNumber;
                    firstNumber = Number(e.target.textContent);
                  }
                if (operation == "-") {
                    calculation.textContent = firstNumber - secondNumber;
                    output.textContent = e.target.textContent;
                  }
                if (operation == "*") {
                    calculation.textContent = firstNumber * secondNumber;
                    output.textContent = e.target.textContent;
                  }
                if (operation == "/") {
                    calculation.textContent = firstNumber / secondNumber;
                    output.textContent = e.target.textContent;
                  }
                  console.log("Click nonFirst operation=> Num1: ", firstNumber, "Num2: ",secondNumber, "OP: ",operation, "click: ",e.target.textContent, "a: ",output.textContent, "b: ",calculation.textContent);
            }
            else {
                calculation.textContent += output.textContent + e.target.textContent;
                firstNumber = secondNumber;

                console.log("Click to First operation=> Num1: ", firstNumber, "Num2: ",secondNumber, "OP: ",operation, "click: ",e.target.textContent, "a: ",output.textContent, "b: ",calculation.textContent);
            }
            
            operation = e.target.textContent;
            output.textContent = "";    
            
            console.log("After clicking operation=> Num1: ", firstNumber, "Num2: ",secondNumber, "OP: ",operation, "click: ",e.target.textContent, "a: ",output.textContent, "b: ",calculation.textContent);
        }
        //when user click on equal button
        else if(e.target.className == "butons equal") {   
            // calculateIt(firstNumber, secondNumber, operation, output.textContent, calculation.textContent, e.target.textContent);
            if (operation == "+") {
                calculation.textContent = "";
                output.textContent = firstNumber + secondNumber;
              }
            if (operation == "-") {
                calculation.textContent += output.textContent + e.target.textContent;
                output.textContent = firstNumber -  secondNumber;
              }
            if (operation == "*") {
                calculation.textContent += output.textContent + e.target.textContent;
                output.textContent = firstNumber * secondNumber;
              }
            if (operation == "/") {
                calculation.textContent += output.textContent + e.target.textContent;
                output.textContent = firstNumber / secondNumber;
              }

              console.log("Click on equal => Num1: ", firstNumber, "Num2: ",secondNumber, "OP: ",operation, "click: ",e.target.textContent, "a: ",output.textContent, "b: ",calculation.textContent);
        }
        //when user click on additional operators
        else if(e.target.className == "butons additionalOperations") {
            if (e.target.textContent == "AC") {
                output.textContent = "";
                calculation.textContent = "";

                console.log("Click on AC=> Num1: ", firstNumber, "Num2: ",secondNumber, "OP: ",operation, "click: ",e.target.textContent, "a: ",output.textContent, "b: ",calculation.textContent);
            }
            else if(e.target.textContent == "+-") {
                
                console.log("Click on +- => Num1: ", firstNumber, "Num2: ",secondNumber, "OP: ",operation, "click: ",e.target.textContent, "a: ",output.textContent, "b: ",calculation.textContent);
            }
            else if (e.target.textContent == "%") {
                calculation.textContent += output.textContent + e.target.textContent;
                output.textContent = Number(output.textContent)/100;

                console.log("Click on % => Num1: ", firstNumber, "Num2: ",secondNumber, "OP: ",operation, "click: ",e.target.textContent, "a: ",output.textContent, "b: ",calculation.textContent);
            }

            console.log("After additionalOperations=> Num1: ", firstNumber, "Num2: ",secondNumber, "OP: ",operation, "click: ",e.target.textContent, "a: ",output.textContent, "b: ",calculation.textContent);
        }
    }
});



// if (operation == "+") {
//     calculation.textContent += output.textContent + e.target.textContent;
//     output.textContent = firstNumber + secondNumber;
//   }
// if (operation == "-") {
//     calculation.textContent += output.textContent + e.target.textContent;
//     output.textContent = firstNumber -  secondNumber;
//   }
// if (operation == "*") {
//     calculation.textContent += output.textContent + e.target.textContent;
//     output.textContent = firstNumber * secondNumber;
//   }
// if (operation == "/") {
//     calculation.textContent += output.textContent + e.target.textContent;
//     output.textContent = firstNumber / secondNumber;
//   }

