const elements = document.querySelectorAll('.electron');

// Function to add a new class with a delay
function addNewClassWithDelay() {
    const degs = [405, 345, 285,225,165,105]
  // Loop through each element and add the new class after a 2-second delay
  elements.forEach((element, index) => {
    setTimeout(() => {
        
      element.animate(
        [
        { opacity: 0,  },
        { opacity: 0, offset: 0.12 },
        { opacity: 1, offset: 0.75 },
        { transform: "rotate(-"+degs[index]+"deg)", offset: 1 }
      ]
      ,
      {
        duration: 2500, // Set the desired duration in milliseconds
        iterations: 1, // Set the number of iterations (use Infinity for infinite loop)
        easing: 'ease-in-out',
        fill: 'forwards' 
      })
      element.children[0].style.opacity = 1
      element.children[0].animate(
        [
        { opacity: 0 },
        { opacity: 0, offset: 0.12 },
        { opacity: 1, offset: 0.75 },
        { transform: "rotate("+degs[index]+"deg)", offset: 1 }
      ]
      ,
      {
        duration: 2500, // Set the desired duration in milliseconds
        iterations: 1, // Set the number of iterations (use Infinity for infinite loop)
        easing: 'ease-in-out',
        fill: 'forwards' 
      })
      
    }, index * 300);
     // 2000 milliseconds (2 seconds) delay for each element
  });

}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


const parentDiv = document.querySelector('.parent');
for (let i = 0; i<50; i++){
  let childDiv = document.createElement('div')
  let colNumber =  getRandomInt(2, 4)
  let fontSize = getRandomInt(10, 72)
  sentenceIndex = getRandomInt(0, sentences.length)
  let sentence = sentences[sentenceIndex]
  
  childDiv.textContent = sentence
  childDiv.classList.add("col-"+ colNumber)
  childDiv.classList.add("sent")

  childDiv.style.fontSize  = fontSize +"px"

  
  parentDiv.appendChild(childDiv)
}
var elementsWithClass = document.querySelectorAll('.tes');
var sent = document.querySelectorAll('.sent');
var english = []
sent.forEach(function(e) {
  english.push(e.textContent)

})
// Add event listener to each element
elementsWithClass.forEach(function(element) {
  element.addEventListener('mouseover', function() {
    sent.forEach(function(e) {
      e.style.color = "#000"
      setTimeout(() => {
          console.log(element.textContent)
          if ( element.textContent.includes("Deutsch")){
              e.textContent = german[e.textContent] || e.textContent;
          }
          else if (element.textContent.includes("Español")){
              e.textContent = spanish[e.textContent] || e.textContent;
          }
          else if (element.textContent.includes("Français")){
              e.textContent = french[e.textContent] || e.textContent;
          }
          else if (element.textContent.includes("Pусский")){
              e.textContent = russian[e.textContent] || e.textContent;
          }
          else if (element.textContent.includes("Hrvatski")){
              e.textContent = hrvatski[e.textContent] || e.textContent;
          }
           // Change the text to the German translation or keep it the same if not found
      }, 500);
      
      // Use another setTimeout to schedule the color change after changing the text
      setTimeout(() => {
          e.style.color = "#727272";
      }, 600);
    
  })});
  element.addEventListener('mouseout', function() {
      sent.forEach(function(e,index) {
          e.style.color = "#000"
          setTimeout(() => {
              
              e.textContent = english[index]
          }, 500);
          
          // Use another setTimeout to schedule the color change after changing the text
          setTimeout(() => {
              e.style.color = "#101010"
                      }, 600);
          
      })
    });
});

// Call the function after some event (e.g., page load, button click, etc.)
// For example, add this to the window.onload or a button click event
window.onload = addNewClassWithDelay;