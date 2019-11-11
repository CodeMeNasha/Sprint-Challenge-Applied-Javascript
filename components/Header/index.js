// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(headerCreator) {

    const header = document.createElement('div');
    const date = document.createElement('span');
    const oneHeader = document.createElement('h1');
    const temp = document.createElement('span');

    date.textContent = "Smarch 28, 2019";
    oneHeader.textContent = "Lambda Times";
    temp.textContent = "98°";

    header.classList.add("header");
    date.classList.add("date");
    temp.classList.add("temp"); 

    const headerContainer = document.querySelector(".header-container")     
    headerContainer.appendChild(header);
    header.appendChild(date);
    header.appendChild(oneHeader);
    header.appendChild(temp);
}
    Header();
