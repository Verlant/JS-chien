class Dog {
  /**
   *
   * @param {string} name
   * @param {int} age
   * @param {string} race
   * @param {int} quantite_nourriture
   */
  constructor(name, age, race, quantite_nourriture) {
    this.name = name;
    this.age = age;
    this.race = race;
    this.quantite_nourriture = quantite_nourriture;
  }
  aboie() {
    console.log(this.name + " aboie\nRex : - Waf Waf !");
  }
  mange(nbr) {
    this.quantite_nourriture += nbr;
    console.log(
      this.name +
        " a mangé une quantité de nourriture égale à " +
        this.quantite_nourriture
    );
  }
}
const REX = new Dog("rex", 1, "berger allemand", 0);
REX.aboie();
REX.mange(10);
console.log(REX);

function ajouter(nbr) {}
const today = new Date();

console.log(today.getDate());
