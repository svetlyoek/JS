function solve() {

  const generateBtn = document.querySelector('#exercise button');
  const textArea = document.querySelector('#exercise textArea');
  const resultArea = document.querySelectorAll('textarea')[1];
  const buyBtn = document.querySelectorAll('button')[1];
  const tableBody = document.querySelector('tbody');

  let counter = 0;

  generateBtn.addEventListener('click', function (e) {
    e.preventDefault();

    let arr = JSON.parse(textArea.value);

    for (let obj of arr) {
      counter++;

      let [image, name, price, decoration] = [obj['img'], obj['name'], obj['price'], obj['decFactor']];

      let currentRow = tableBody.insertRow(counter);

      let imageTd = currentRow.insertCell(0);
      let nameTd = currentRow.insertCell(1);
      let priceTd = currentRow.insertCell(2);
      let decorationTd = currentRow.insertCell(3);
      let radioBtn = currentRow.insertCell(4);

      imageTd.innerHTML = "<img src=" + image + ">";
      nameTd.textContent = name;
      priceTd.textContent = price;
      decorationTd.textContent = decoration;
      let radio = document.createElement('INPUT');
      radio.setAttribute("type", "checkbox");
      radioBtn.append(radio);
    }
    counter = 0;

  });

  buyBtn.addEventListener('click', function (e) {
    e.preventDefault();

    let totalPrice = 0;
    let averageFactor = 0;
    let decorationSum = 0;
    let btnCounter = 0;
    let names = [];

    const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    const tableRows = Array.from(document.querySelectorAll('tbody tr'));

    for (let i = 0; i < checkboxes.length; i++) {
      let currentCheckBox = checkboxes[i];
      if (currentCheckBox.checked) {
        btnCounter++;
        let currentRow = tableRows[i];

        let rowTd = Array.from(currentRow.querySelectorAll('td'));

        let [name, price, decoration] = [rowTd[1].textContent, rowTd[2].textContent, rowTd[3].textContent];
        totalPrice += Number(price);
        decorationSum += Number(decoration);
        names.push(name);
      }
      averageFactor = decorationSum / btnCounter;
      resultArea.textContent = `Bought furniture: ${names.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageFactor}`;
    }
    btnCounter = 0;
  });

}

