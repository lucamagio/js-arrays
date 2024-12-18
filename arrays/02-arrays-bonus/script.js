const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
let reversedTeachers = [];
for(i = teachers.length -1; i >= 0; i--){
    let teach = teachers[i]
    reversedTeachers.push(teach)
}
// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
let longNames = []
for(i = 0; i < teachers.length; i++){
  let teach = teachers[i]
  if (teach.length >= 5){
    longNames.push(teach)
  }
}

// 3. Rimuovi 'Ed' dall'array teachers

teachers.splice(1, 1)
console.log(teachers)