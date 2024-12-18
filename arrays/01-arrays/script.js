const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE
// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers.splice(4, 1, 'Patrick')
console.log(teachers)
// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push('Vanessa')

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift('Sarah')

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isFabioPresent
for(i = 0; i < teachers.length; i++){
  const currentTeacher = teachers[i]
  if(teachers[i] == 'Fabio'){
    isFabioPresent = currentTeacher
  }
}

// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
let lewisIndex
for(i = 0; i < teachers.length; i++){

  if(teachers[i] == 'Lewis'){
    lewisIndex = i
  }
}



// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
let teachersString = ''

for(i = 0; i < teachers.length; i++){
   teachersString += teachers[i]

  if (i < teachers.length -1 ){
    teachersString += ', '
  }
}

// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
let isTeachersEmpty = true
for(i = 0; i < teachers.length; i++){
  if (teachers[i]){
    isTeachersEmpty = false
    break
  }
}

//Oppure

let isTeachersEmpty = true

if (!teachers.length == 0){
    isTeachersEmpty = false
}

console.log(isTeachersEmpty)