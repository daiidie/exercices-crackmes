// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = 'ddddddddddddd%'// la somme des charactères doit etre égale a 1337 en unicode
const crackme4 = (password) => {
  let tmp1 = 0
  for (let i = 0; i < password.length; ++i) {
    tmp1 += password.charCodeAt(i)
  }
  if (tmp1 === 1337) {
    console.log('OK')
  } else {
    console.log('BAD')
  }
}

crackme4(password)