let people = [
    {
      name: "bobur",
      age: 43,
      isMarried: false,
      wifes: ['kamila']
    },
    {
      name: "ismail",
      age: 12,
      isMarried: true,
      wifes: ['nikita', 'malika'] 
    },
    {
      name: "allayor",
      age: 15,
      isMarried: true,
      wifes: ['deniska', 'dima', 'dimon', 'damir']
    },
    {
      name: "sardor ml",
      age: 19,
      isMarried: false,
      wifes: ['safiya']
    },
    {
      name: "sardor st",
      age: 54,
      isMarried: true,
      wifes: ['jenna', 'jennifer', 'jodie']
    },
    {
      name: "jake",
      age: 18,
      isMarried: false,
      wifes: ['emma','mia','eleanor']
    },
    {
      name: "kenny",
      age: 20,
      isMarried: false,
      wifes: ['emma','mia','eleanor']
    },
    {
      name: "Johnny Sins",
      age: 35,
      isMarried: true,
      wifes: ['mia','eva','lana','abella']
    },
    {
      name: "Dena",
      age: 17,
      isMarried: false,
      wifes: ['mia','eva','lana','abella']
    }
]

let guilties = []


// Это люди у которых больше 1 жены
for (let i = 0; i < people.length; i++) {
    if (people[i].wifes.length > 1) {
      guilties.push(people[i].name);
    }
  }

  console.log(guilties);

  // Это люди который женились но у которым нету 18 
  for (let i = 0; i < people.length; i++) {
    if (people[i].isMarried === true && people[i].age < 18) {
      guilties.push(people[i].name);
    }
  }
  
  console.log(guilties);