function calculate() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;

    let Weight1 = 0.6;
    let Weight2 = 0.2;
    let bias = -2;

    let weightedSum = (input1 * Weight1) + (input2 * Weight2) + bias;
    // console.log(weightedSum);

    let activationOutput = 1 / (1 + Math.exp(-weightedSum));
    console.log(activationOutput);

}