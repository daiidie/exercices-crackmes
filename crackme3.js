// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = '@21!4444444444'//le mot de passe se compose de 14 caractères, sa premiere lèttre est un @ et sa 4eme lettre est un !

const crackme3 = (password) => {
  if (password.length === 14 && password[0] === '@' && password[3] === '!') {
    console.log('OK')
  } else {
    console.log('BAD')
  }
}

crackme3(password)
