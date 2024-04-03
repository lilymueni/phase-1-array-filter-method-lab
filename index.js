// Code your solution here
// Function: findMatching
const findMatching = (drivers, name) => {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  };
  
  // Function: fuzzyMatch
  const fuzzyMatch = (drivers, letters) => {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  };
  
  // Function: matchName
  const matchName = (drivers, name) => {
    return drivers.filter(driver => driver.name === name);
  };
  
  // Tests
  const test = () => {
    // findMatching tests
    const findMatchingTests = () => {
      const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
      console.log(findMatching(drivers, 'Bobby')); // Expected: ['Bobby', 'Bobby']
      console.log(findMatching(drivers, 'Sammy')); // Expected: ['Sammy']
      console.log(findMatching(drivers, 'Susan')); // Expected: []
    };
  
    // fuzzyMatch tests
    const fuzzyMatchTests = () => {
      const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
      console.log(fuzzyMatch(drivers, 'Sa')); // Expected: ['Sammy', 'Sarah', 'Sally']
      console.log(fuzzyMatch(drivers, 'y')); // Expected: []
      console.log(fuzzyMatch(drivers, 'mm')); // Expected: []
    };
  
    // matchName tests
    const matchNameTests = () => {
      const drivers = [
        { name: 'Bobby', hometown: 'Pittsburgh' },
        { name: 'Sammy', hometown: 'New York' },
        { name: 'Sally', hometown: 'Cleveland' },
        { name: 'Annette', hometown: 'Los Angeles' },
        { name: 'Bobby', hometown: 'Tampa Bay' }
      ];
      console.log(matchName(drivers, 'Bobby')); // Expected: [{ name: 'Bobby', hometown: 'Pittsburgh' }, { name: 'Bobby', hometown: 'Tampa Bay' }]
    };
  
    // Run tests
    findMatchingTests();
    fuzzyMatchTests();
    matchNameTests();
  };
  
  // Run tests
  test();
  
  // Export functions
  module.exports = { findMatching, fuzzyMatch, matchName };
