class Dog {
  quantite_nourriture = 0;
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
  }
  /**
   * renvoie un string faisant aboyer le chien
   */
  aboie() {
    console.log(this.name + " aboie\nRex : - Waf Waf !");
  }
  /**
   * fonction qui donne a manger au chien et stock cette quentite dans un attribut
   * @param {int} nbr
   */
  mange(nbr) {
    this.quantite_nourriture += nbr;
    console.log(
      this.name + " a mangé " + this.quantite_nourriture + " de nourriture."
    );
  }
  /**
   * fonction qui renvoie la quantite de nourriture totale
   * @returns valeur attribut quantite_nourriture
   */
  total_quantite_nourriture() {
    return this.quantite_nourriture;
  }
}
const REX = new Dog("rex", 1, "berger allemand", 0);
console.log(REX);
REX.aboie();
REX.mange(10);
REX.mange(5);
REX.mange(2);
REX.total_quantite_nourriture();
