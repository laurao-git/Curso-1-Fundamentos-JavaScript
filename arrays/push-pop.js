// Métodos que modifican el Array original. (Mutabilidad)
// Push: Añadir uno o más elementos al final del Array y devuelve esa longitud del Array.
// Mutabilidad.

// push().

const countries = ['USA', 'Canadá', 'UK']
const newCountries = countries.push('Germany', 'Australia')

console.log(countries)
console.log(newCountries)

// Pop().

const removedCountry = countries.pop()

console.log(countries)
console.log(removedCountry)