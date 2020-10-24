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
    key: ' | Answer | ',
    number: 'What is the number for this clue?',
    next: 'Next',
    well: 'Well done!',
    lng: 'LANG',
    inst: 'How to play',
    howTo: ['Instructions on how to play the game.',
      'More instructions',
      'And some more'
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
    key: ' | Odgovor | ',
    number: 'Upiši broj zagonetke!',
    next: 'Sljedeće',
    well: 'Bravo, pravi si istraživač!',
    lng: 'JEZIK',
    inst: 'Kako igrati',
    howTo: ['Upute kako igrati ovu igru.',
      'Još uputa kako igrat',
      'I još malo uputa kak igrat'
    ]
  }
]);

const customLangsStore = {
  subscribe: langs.subscribe
};

export default customLangsStore;
