let expression ="";  //val&expresiion 
let outputList = []; //history store
//let serialNumber = 1;
let dateTimeInterval;

function displayOperator(value){
    expression += value; // operator 
    updateDisplay();
}

function display(value){
    expression += value; // values 
    updateDisplay();   
}

function equate(){  
    if (expression === "") {
        alert("Please enter a valid expression.");
        return;
    }  
    try{
        const result = eval(expression); //evaluate
       // outputList.push(`${expression} = ${result}`); // store
       outputList.push({ input: expression, output: result });
        expression = ""; 
        updateDisplay(); 
        updateOutput(); 
    }catch (error) {
        console.error("Invalid expression");
      }
}

function clroutput(){ // clear the o/p
    expression = "";
    updateDisplay();
}

function deleteOutput(index){ //delete button   
    outputList.splice(index, 1);
    updateOutput();
}

function updateDisplay(){ //updating calculator display
    const display = document.getElementById("result");
    display.value = expression;
}

function updateOutput(){ //updating the history list
    const output = document.getElementById("history");
    output.innerHTML = "";
  
    outputList.forEach((item, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = `S.No: ${index +1}  Input: ${item.input}   Output: ${item.output}`;
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete"); // list & delete button  create
      deleteButton.onclick = () => deleteOutput(index);
  
      listItem.appendChild(deleteButton);
      output.appendChild(listItem);
    });
}
function deleteAllHistory() {  //deleteall
    let historyList = document.getElementById("history");
    historyList.innerHTML = "";
    outputList = [];
    updateOutput();
}

function swapItems() {
    const index1Input = document.getElementById("index1-input");
    const index2Input = document.getElementById("index2-input");
    const index1 = parseInt(index1Input.value);//getting
    const index2 = parseInt(index2Input.value);

    if (
        Number.isInteger(index1) &&
        Number.isInteger(index2) &&
        index1 >= 1 &&
        index1 <= outputList.length &&
        index2 >= 1 &&
        index2 <= outputList.length
    ) {
        const temp = outputList[index1 - 1];
        outputList[index1 - 1] = outputList[index2 - 1];
        outputList[index2 - 1] = temp;
        updateOutput();
        index1Input.value = "";
        index2Input.value = "";
    } else {
        alert("Please enter valid indices to swap.");
    }
}

function calculateSum() {
    const sumResult = document.getElementById("sumResult");
    const sum = outputList.reduce((acc, item) => acc + item.output, 0);
    sumResult.textContent = `Answer: ${sum}`;
  }

//   date

  function updateDateTimeFormat() {
    const formatSelect = document.getElementById("format");
    const selectedFormat = formatSelect.value;
    const dateTimeDisplay = document.getElementById("datetime-display");
  
    // Clear previous interval if any
    clearInterval(dateTimeInterval);
  
    // Set interval to update date and time based on selected format
    dateTimeInterval = setInterval(() => {
      const currentDate = new Date();
  
      if (selectedFormat === "date") {
        dateTimeDisplay.textContent = currentDate.toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" });
      } else if (selectedFormat === "time") {
        dateTimeDisplay.textContent = currentDate.toLocaleTimeString("en-US", { hour12: true, hour: "numeric", minute: "numeric", second: "numeric" });
      } else if (selectedFormat === "datetime") {
        dateTimeDisplay.textContent = currentDate.toLocaleString("en-US", { month: "2-digit", day: "2-digit", year: "numeric", hour12: true, hour: "numeric", minute: "numeric", second: "numeric" });
      } else if (selectedFormat === "shortdate") {
        dateTimeDisplay.textContent = currentDate.toLocaleDateString("en-US", { month: "numeric", day: "numeric", year: "2-digit" });
      } else if (selectedFormat === "shorttime") {
        dateTimeDisplay.textContent = currentDate.toLocaleTimeString("en-US", { hour12: true, hour: "numeric", minute: "numeric" });
      } else if (selectedFormat === "longdate") {
        dateTimeDisplay.textContent = currentDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
      } else if (selectedFormat === "weekday") {
        dateTimeDisplay.textContent = currentDate.toLocaleDateString("en-US", { weekday: "long" });
      } else if (selectedFormat === "iso") {
        dateTimeDisplay.textContent = currentDate.toISOString();
      } else if (selectedFormat === "custom") {
        dateTimeDisplay.textContent = customFormatFunction(currentDate);
      }
    }, 1000);
  }
  
