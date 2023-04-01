const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];




const titleCased = () => {
  return tutorials.map((value) => {
    const newArraySplitted = value.split(" ")
    //return newArraySplitted
    const newMapToCap = newArraySplitted.map((index) => {
      return index.charAt(0).toUpperCase() + index.slice(1)
      
    })
     return newMapToCap.join(" ")
  })
  
}



// const titleCased = () => {
//   return tutorials
// }



// const copyTutorials = [...tutorials]

// const titleCased = () => {
//   return tutorials.map((value) => {
//     const newArraySplitted = value.split(" ")
//     //return newArraySplitted
//     const newMapToCap = newArraySplitted.map((index) => {
//       return index.charAt(0).toUpperCase() + index.slice(1)
      
//     })
//      return newMapToCap.join(" ")
//   })
  
// }

// console.log(titleCased())




