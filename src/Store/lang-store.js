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
    howTo1: ['The goal of the game is to solve all clues.',
      'First player sets the clues, second player solves them.',
      'When a clue is solved, next clue becomes available.'
      ],
    howTo2: 'How to set the game?',
    howTo3: ['1. Choose the number of clues, each clue needs to describe a place',
      '2. Write the clue, then "Add this clue"',
      '3. Write down the "Answer" (number) on a card',
      '4 Hide the card at the place decribed by the clue',
      '5. Repeat for all clues'
    ],
    howTo4: 'How to solve the game?',
    howTo5: ['1. Read the clue',
      '2. Find the place described by the clue, it needs to have a card',
      '3. Input the number, if correct next clue is revealed',
      '4. Repeat for all clues'
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
    howTo1: ['Cilj igre je rješiti sve zagonetke.',
      'Prvi igrač postavlja zagonetke, drugi igrač ih treba rješiti.',
      'Kad se rješi jedna zagonetka, otvara se sljedeća.'
    ],
    howTo2:  'Kako postaviti igru?',
    howTo3: ['1. Odaberi broj zagonetki, svaka zagonetka treba ukazati na neko mjesto',
      '2. Upiši zagonetku, pritisni "Dodaj zagonetku"',
      '3. Zapiši "Odgovor" (broj) na karticu',
      '4. Sakrij karticu na mjesto na koje ukazuje zagonetka',
      '5. Ponovi za sve zagonetke'
    ],
    howTo4:  'Kako rješiti igru?',
    howTo5: ['1. Pročitaj zagonetku',
      '2. Nađi mjesto koje opisiva zagonetka, tu treba biti kartica s brojem',
      '3. Upiši broj, ako je točan dobija se pristup sljedećoj zagonetci',
      '4. Ponovi za sve zagonetke'
    ]
  }
]);

const customLangsStore = {
  subscribe: langs.subscribe
};

export default customLangsStore;
