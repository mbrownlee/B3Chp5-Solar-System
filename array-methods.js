const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]


const planetEl = document.getElementById("planets")

planets.forEach((planet) => {
    planetEl.innerHTML += `<p>${planet}</p>`
    console.log(planet)
    
})


  const capitalPlanets = planets.map((planet) => {
      
      return planet.charAt(0).toUpperCase() + planet.slice(1);
      
  })
  console.log(capitalPlanets)
     


const ePlanets = planets.filter(planet => planet.includes("e"))
console.log(ePlanets)