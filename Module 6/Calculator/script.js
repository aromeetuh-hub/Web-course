function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerHTML = num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num) {
    if (num=="") {
        document.getElementById("output-value").innerText= num;
    }
    else{
        document.getElementById("output-value").innerText = getFormattedNumber(num)
    }
}

function getFormattedNumber(num) {
    if (num == "") {
        return"";
    }

    let n = Number(num);
    let Value = n.toLocaleString("en");
    return Value;
}

function reverseNumberFormat(num) {
    return Number (num.replaceAll(",", ""));
}

let operator = document.getElementById("operator");

for (let i = 0; i < operator.clientHeight; i++) {
    operator[i].addEventListner("click", function () {
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        }
        else if (this.id == "backspace") {
            let output = reverseNumberFormat(getOutput()).toString
            if(output) {
                output = output.substring(0, output.length -  1);
                printHistory(output)
            }
        }
        else {
            let output = getOutput();
            let history = getHistory();

            if (output == "" && history != "") {
                is (isNaN(history[history.length - 1])) {
                    history = history.substring(0, History.length - 1)
                };
            }

            if (output != "" || history != "") {
                if (output == "") {
                    output = ""
                } else{
                    output = reverseNumberFormat(output);
                }
                history = history + output

                if (this.id == "=") {
                    let result = eval(history);
                    printOutput(result);
                    printHistory("");
                } else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("")
                }
            }
        }
    });
}

let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function() {
        let output = reverseNumberFormat(getOutput());
        if (output != NaN) {
            output= output + this.id;
            printOutput(output);
        }
    });
}