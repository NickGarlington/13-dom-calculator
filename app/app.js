document
  .querySelector("#addNumbers")
  .addEventListener("click", (e) => {
    let number1 = document.querySelector("#numberOne").value;
    let number2 = document.querySelector("#numberTwo").value;

    add(number1, number2);
  });

document
    .querySelector("#subtractNumbers")
    .addEventListener("click", (e) => {
      let number1 = document.querySelector("#numberOne").value;
      let number2 = document.querySelector("#numberTwo").value;

      substract(number1, number2);
    });

document
      .querySelector("#multiplyNumbers")
      .addEventListener("click", (e) => {
        let number1 = document.querySelector("#numberOne").value;
        let number2 = document.querySelector("#numberTwo").value;

        multiply(number1, number2);
      });

document
        .querySelector("#divideNumbers")
        .addEventListener("click", (e) => {
          let number1 = document.querySelector("#numberOne").value;
          let number2 = document.querySelector("#numberTwo").value;

          divide(number1, number2);
        });

        function add(number1, number2) {
          let total = Number(number1) + Number(number2);
          document.querySelector("#answer").innerHTML = total
        }

        function subtract(number1, number2) {
          let total = Number(number1) - Number(number2);
          document.querySelector("#answer").innerHTML = total
        }

        function multiply(number1, number2) {
          let total = Number(number1) * Number(number2);
          document.querySelector("#answer").innerHTML = total
        }

        function divide(number1, number2) {
          let total = Number(number1) / Number(number2);
          document.querySelector("#answer").innerHTML = total
        }
