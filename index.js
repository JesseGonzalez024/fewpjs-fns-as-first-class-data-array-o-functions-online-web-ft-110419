function wakeDog (a, b) {
  return `Wake ${a} the ${b}`
}
function leashDog (a, b) {
  return `Leash ${a} the ${b}`
}
<<<<<<< HEAD
function walkToPark (a, b) {
=======
function walkToParkDog (a, b) {
>>>>>>> 4d326d538ebb62a7ab703ab0812bc3cb768d8927
  return `Walk to the park with ${a} the ${b}`
}
function throwFrisbee (a, b) {
  return `Throw the frisbee for ${a} the ${b}`
}
function walkHome (a, b) {
  return `Walk home with ${a} the ${b}`
}
function unleashDog (a, b) {
  return `Unleash ${a} the ${b}`
}
<<<<<<< HEAD

let routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
]

function exerciseDog(a, b) {
  let array = []
  
  for (let i = 0; i < routine.length; i++) {
    array.push(routine[i](a, b))
  }
  return array
=======
function wakeDog (a, b) {
  return `Wake ${a} the ${b}i`
>>>>>>> 4d326d538ebb62a7ab703ab0812bc3cb768d8927
}










<<<<<<< HEAD
=======

//     })
//     it("has a function walkHome", () => {
//       const a = "Santa Paws"
//       const b = "Husky"
//       expect(walkHome(a, b)).to.equal(`Walk home with ${a} the ${b}`)
//     })
//     it("has a function unleashDog", () => {
//       const a = "Lauren"
//       const b = "Golden Retriever"
//       expect(unleashDog(a, b)).to.equal(`Unleash ${a} the ${b}`)
//     })
//     it("accepts 2 parameters for dogName and dogBreed", () => {
//       const a = "Skippy"
//       const b = "Welsh Corgi"
//       expect(wakeDog(a, b)).to.equal(`Wake Skippy the Welsh Corgi`)
//     })
//   })

//   describe("the array of functions", () => {
//     it("has variables for each activity", () => {
//       expect(wakeDog).to.exist
//       expect(leashDog).to.exist
//       expect(walkToPark).to.exist
//       expect(throwFrisbee).to.exist
//       expect(walkHome).to.exist
//       expect(unleashDog).to.exist
//     })
//     it("has an array called 'routine' that contains each activity", () => {
//       expect(routine).to.be.a('array');
//       expect(routine).to.include(wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog);
//     })
//   })

//   describe("the function that runs the array o' functions", () => {
//     it("calls into the independent functions", () => {
//       expect(routine).to.be.a('array');
//       expect(routine).to.include(wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog);
//       expect(throwFrisbee).to.exist

//       const executedMessages = exerciseDog("Esther", "Dalmation")

//       const successMessages = [ 'Wake Esther the Dalmation',
//         'Leash Esther the Dalmation',
//         'Walk to the park with Esther the Dalmation',
//         'Throw the frisbee for Esther the Dalmation',
//         'Walk home with Esther the Dalmation',
//         'Unleash Esther the Dalmation' ]

//       result = successMessages.every(msg => executedMessages.indexOf(msg) >= 0);
//       expect(result, "exerciseDog should run all the functions in the 'routine' array").true
//     })
//   })
// });
>>>>>>> 4d326d538ebb62a7ab703ab0812bc3cb768d8927
