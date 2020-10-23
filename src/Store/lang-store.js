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
    key: ' - Key:',
    number: 'What is the number for this clue?',
    next: 'Next',
    well: 'Well done!',
    lng: 'Language',
    inst: 'How to play',
    howTo: 'Instructions on how to play the game.'
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
    key: ' - Broj:',
    number: 'Upiši broj zagonetke!',
    next: 'Sljedeće',
    well: 'Bravo, pravi si istraživač!',
    lng: 'Jezik',
    inst: 'Kako igrati',
    howTo: 'Upute kako igrati ovu igru.'
  }
]);

const customLangsStore = {
  subscribe: langs.subscribe
};

export default customLangsStore;
