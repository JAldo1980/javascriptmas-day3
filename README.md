# javascriptmas-day3

A javascript function that calculates numerical division

![candy-share](https://github.com/JAldo1980/javascriptmas-day3/assets/80925002/e17103dd-fa04-498d-a559-60650cde276e)

This project is a simple web application that calculates and displays the number of candies each child should receive when the total number of candies and children are provided.

## Technologies Used

- **HTML5:** The structure of the web page is created using HTML5.
- **CSS3:** Styling for the input fields, button, and result display is implemented using CSS3.
- **JavaScript:** The logic for calculating and displaying the result is powered by JavaScript.

## Code Details

### Calculating and Displaying Candy Share

```javascript
const shareBtn = document.getElementById("share-btn");

shareBtn.addEventListener("click", calcTotalCandies);

function calcTotalCandies() {
  let children = parseFloat(document.getElementById("children-input").value);
  let candy = parseFloat(document.getElementById("candy-input").value);

  if (isNaN(children) || isNaN(candy)) {
    alert("Please enter a number!");
  } else {
    let result = Math.floor(candy / children);

    document.querySelector(".output").innerHTML = `
      <div class="outer-result-el">
          <div class="inner-result-el">
              <h2>${result}</h2>
          </div>
          <div class="inner-text-el">
              <p>yummy candies, <span>EACH!</span></p>
          </div>
      </div>
    `;
    // Clear input values
    document.getElementById("children-input").value = "";
    document.getElementById("candy-input").value = "";
  }
}





