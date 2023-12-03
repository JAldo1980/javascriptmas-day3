const shareBtn = document.getElementById("share-btn");

shareBtn.addEventListener("click", calcTotalCandies);

function calcTotalCandies() {
  let children = parseFloat(document.getElementById("children-input").value);
  let candy = parseFloat(document.getElementById("candy-input").value);

  if (isNaN(children) || isNaN(candy)) {
    alert("Please enter a number!");
  } else {
    let result = Math.floor(candy / children);
    console.log("Share result:", result);

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
    let childrenValue = parseFloat(
      (document.getElementById("children-input").value = "")
    );
    let candyValue = parseFloat(
      (document.getElementById("candy-input").value = " ")
    );
  }
}
