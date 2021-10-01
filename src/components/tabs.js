import { topics } from "../mocks/data"

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  const topDiv = document.createElement('div')
  // gitHead.appendChild(head)
      topDiv.classList.add('topics')
 
const tab1 = document.createElement('div')
  topDiv.appendChild(tab1)
      tab1.classList.add('tab')
      tab1.textContent = topics[0]
      
      const tab2 = document.createElement('div')
        topDiv.appendChild(tab2)
            tab2.classList.add('tab')
            tab2.textContent = topics[2]

            const tab3 = document.createElement('div')
              topDiv.appendChild(tab3)
              tab3.classList.add('tab')
              tab3.textContent = topics[1]
      
      
      
      return topDiv
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  
  
  let results = axios.get(`https://lambda-times-api.herokuapp.com/topics`)

  // results.then((value)=>{

  //   let tabsContainer = document.querySelector(selector)
  //   let topicsList = value.topics
  //   let tabsFunc = Tabs(topicsList)
  //   tabsContainer.appendChild(tabsFunc)
  // })

  axios.get(`https://lambda-times-api.herokuapp.com/topics`).then(res =>{
    const newTabs = Tabs(res.data)
    document.querySelector(selector).appendChild(newTabs)
  })
}

axios.get(`http://localhost:5000/api/topics`)
.then(response => {
  const tabs = response.data.topics;
  console.log(tabs);

  const tabsTwo = document.querySelector(selector);
  tabsTwo.appendChild(Tabs(tabs));
});


 


export { Tabs, tabsAppender }
