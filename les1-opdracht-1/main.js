document.title = "My Magical Home Page";

const louisa = {
  naam: "Louisa",
  age: 30,  
  talk: function () {
    console.log(`Hallo ik ben ` + this.naam);
  },
  calcAge: function () {
    console.log(`Leeftijd: ` + this.age);
  },
  calcBirthyear: function () {
    console.log(`Geboortejaar: ` + (new Date().getFullYear() - this.age));
  }
};

louisa.talk();
louisa.calcAge();
louisa.calcBirthyear();

