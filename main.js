class Dog {
  /**
   *
   * @param {string} name
   * @param {int} age
   * @param {string} race
   * @param {int} quantite_nourriture
   */
  constructor(name, age, race) {
    this.name = name;
    this.age = age;
    this.race = race;
    this.quantite_nourriture = 0;
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
