import Galactic from './../src/galactic.js';

describe('Galactic', () => {
    
  test('should return a string asking for a number, given any other type of input is entered', () => {
    const userAge = new Galactic("Marni");
    userAge.isNumber();
    const result = userAge.dialogue;
    expect(result).toEqual("please enter a valid number for age");
  });

  test('should return user age in Mercury years', () => {
    const userAge = new Galactic(28);
    expect(userAge.onMercury()).toEqual("116")
  });

  test('should return user age in Venus years', () => {
    const userAge = new Galactic(28)
    expect(userAge.onVenus()).toEqual("45")
  })

  test('should return user age in Mars years', () => {
    const userAge = new Galactic(28)
    expect(userAge.onMars()).toEqual("15")
  })

  test('should return user age in Jupiter years', () => {
    const userAge = new Galactic(28)
    expect(userAge.onJupiter()).toEqual("2")
  })

  test('should return years left on earth', () => {
    const userAge = new Galactic(28)
    expect(userAge.yearsLeftonEarth()).toEqual(72);
  })

  test('should return years left on Mercury', () => {
    const userAge = new Galactic(28)
    expect(userAge.yearsLeftonMercury()).toEqual("299");
  })

  test('should return years left on Venus', () => {
    const userAge = new Galactic(28)
    expect(userAge.yearsLeftonVenus()).toEqual("117");
  })

  test('should return years left on Mars', () => {
    const userAge = new Galactic(28)
    expect(userAge.yearsLeftonMars()).toEqual("38");
  })

  test('should return years left on Jupiter ', () => {
    const userAge = new Galactic(28)
    expect(userAge.yearsLeftonJupiter()).toEqual("6")
  })

  test('should return years exceeded on earth if user surpasses life expectancy', () => {
    const userAge = new Galactic(104)
    expect(userAge.yearsLeftonEarth()).toEqual("You surpassed the Earth life expectancy by 4 years")
  })

  test('should return years exceeded on Mercury if user surpasses life expectancy', () => {
    const userAge = new Galactic(104)
    expect(userAge.yearsLeftonMercury()).toEqual("You surpassed the Mercury life expectancy by 17 years")
  })

  test('should return years exceeded on Venus if user surpasses life expectancy', () => {
    const userAge = new Galactic(104)
    expect(userAge.yearsLeftonVenus()).toEqual("You surpassed the Venus life expectancy by 6.5 years")
  })

});