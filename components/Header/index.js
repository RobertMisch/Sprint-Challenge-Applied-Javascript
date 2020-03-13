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

function Header() {
    //make em
    const head = document.createElement('div')
    const headDate = document.createElement('span')
    const headTitle = document.createElement('h1')
    const headTemp = document.createElement('span')

    //class them
    head.classList.add('header')
    headDate.classList.add('date')
    headTemp.classList.add('temp')

    //add content
    headDate.textContent = ('SMARCH 28, 2019')
    headTitle.textContent = ('Lambda Times')
    headTemp.textContent = ('98*')

    //join them up
    head.append(headDate, headTitle, headTemp)
    //ship them out

    return head
}

document.querySelector('.header-container').append(Header());
