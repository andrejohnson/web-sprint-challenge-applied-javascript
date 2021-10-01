const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  


  const head = document.createElement('div')
    // gitHead.appendChild(head)
        head.classList.add('header')
   
  const hDate = document.createElement('span')
    head.appendChild(hDate)
        hDate.classList.add('date')
        hDate.textContent = date

 const hTitle = document.createElement('h1')
    head.appendChild(hTitle)
        hTitle.classList.add('title')
        hTitle.textContent = title       
  
 const hTemp = document.createElement('span')
    head.appendChild(hTemp)
        hTemp.classList.add('temp')
        hTemp.textContent = temp       
        return head
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  let gitfun = Header('dre', '911', '98')
  let gitHead = document.querySelector(selector)
  gitHead.appendChild(gitfun)

  

}

export { Header, headerAppender }
