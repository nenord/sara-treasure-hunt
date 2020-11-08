import { writable } from 'svelte/store';

const langs = writable([
  {
    title: "Treasure hunt",
    howmany: 'How many clues do you want?',
    submit: 'Submit',
    reset: 'Reset game',
    start: 'Start the hunt',
    clues: 'Clue number ',
    clueDesc: 'What is your clue?',
    add: 'Add this clue',
    cannotBe: 'Cannot be empty!',
    key: ' | Answer | ',
    number: 'What is the number for this clue?',
    next: 'Next',
    well: 'Well done!',
    inst: 'How to play',
    howTo1: ['First player (we will call him Bob) sets the clues.',
      'Second player (we will call her Alice) solves them.',
      'When a clue is solved, next clue becomes available.',
      'The goal of the game is to solve all clues.',
      "If you forget to write down the numbers, just click 'Reset game'.",
      "You can always start again by resetting the game."
    ],
    howTo2: 'Example - Bob sets the game',
    howTo3: ['Bob starts by selecting the number of clues. For example he selects two clues.',
      "Bob writes 'Where do you sleep at night' as the first clue, and clicks 'Add this clue'.",
      "The app gives back a number or 'Answer'. Bob writes the first 'Answer' on a piece of paper.",
      "Bob hides the paper on Alice's bed.",
      "Bob writes 'Here we play with water' as the second clue, and clicks 'Add this clue'.",
      "Bob writes the second 'Answer' on a piece of paper.",
      "Bob hides the paper in the kitchen sink. When all the clues are set Bob can 'Start the hunt'."
    ],
    howTo4: 'Example – Alice solves the game',
    howTo5: ['Alice reads the first clue. She realizes that it must be a bed.',
      'Alice looks in her bed and finds the paper.',
      "Alice inputs the 'Answer' from the paper into the number box. It is correct so second clue is revealed.",
      'Alice reads the second clue and goes to the kitchen sink.',
      "She finds the second paper with the 'Answer'.",
      "Alice inputs the 'Answer' to solve the clue.",
      "The game is over when Alice solves all the clues. Alice can now click 'Reset game' and start a new game."
    ]
  },
  {
    title: "Lov na blago",
    howmany: 'Koliko zagonetki želiš?',
    submit: 'Potvrdi',
    reset: 'Kreni ponovo',
    start: 'Počni lov',
    clues: 'Zagonetka broj ',
    clueDesc: 'Upiši zagonetku',
    add: 'Dodaj zagonetku',
    cannotBe: 'Ne može biti prazno!',
    key: ' | Odgovor | ',
    number: 'Upiši broj zagonetke!',
    next: 'Sljedeće',
    well: 'Bravo, pravi si istraživač!',
    inst: 'Kako igrati',
    howTo1: ['Prvi igrač je Marko. On postavlja zagonetke.',
      'Drugi igrač je Ana. Ona ih treba rješiti.',
      'Kad se rješi jedna zagonetka, otvara se sljedeća.',
      'Cilj igre je rješiti sve zagonetke.',
      "Ukoliko zaboraviš zapisati brojeve jednostavno pritisni 'Kreni ponovo'.",
      "Uvijek možeš početi ispočetka pomoću tipke 'Kreni ponovo'."
    ],
    howTo2:  'Primjer - Marko postavlja igru',
    howTo3: ["Na početku igre Marko odabire broj zagonetki. Naprimjer, on odabere dvije zagonetke.",
      "Marko u aplikaciju napise 'Tamo gdje spavaš' kao prvu zagonetku i pritisne 'Dodaj zagonetku'.",
      "Nakon što aplikacija predloži broj, Marko ga napiše na papir.",
      "Marko sakrije papir na Anin krevet.",
      "Marko nastavlja igru. U aplikaciju napiše drugu zgonetku, npr. 'Tamo gdje pijemo vodu' i pritisne 'Dodaj zagonetku'.",
      "Marko napiše broj zagonetke na papir.",
      "Marko sakrije papir s brojem zagonetke u sudoper. Nakon zadnje postavljenje zagonetke Marko stisne dugme 'Počni lov'."
    ],
    howTo4:  'Primjer - Ana rješava zagonetke',
    howTo5: ["Ana pročita prvu zagonetku 'Tamo gdje spavaš' i pretpostavi da je odgovor krevet.",
      "Ana pogleda oko svog kreveta i pronađe papir s brojem.",
      "U aplikaciju napiše broj zagonetke. Ako je odgovor točan Ana ce dobiti novu zagonetku.",
      "Ana pročita novu zagonetku i pretpostavi da je odgovor sudoper.",
      "Ana potraži papir s brojem oko sudopera.",
      "Nakon što ga pronađe, Ana upiše broj s papira u aplikaciju.",
      "Igra je gotova kada Ana riješi sve zagonetke. Nakon toga ona stisne dugme 'Kreni ponovo'. Sada je Anin red za postavljanje zagonetki Marku. "
    ]
  }
]);

const customLangsStore = {
  subscribe: langs.subscribe
};

export default customLangsStore;
