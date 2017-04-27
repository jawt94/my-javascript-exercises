'use strict';

describe('objectAndArrays', function(){

  it('transfroms first and last into an object', function(){
    var result = transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']);
    expect(result).toEqual({
        Queen: 'Beyonce'
        });
    var result2 = transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']);
    expect(result2).toEqual({
      Kevin: 'Spacey'
    });
  });

  it('gets all keys without the Object.keys() method', function(){
    var result = getAllKeys({
      name: 'Sam',
      age: 25,
      hasPets: true
    });
    expect(result).toEqual(['name', 'age', 'hasPets']);
    var result2 = getAllKeys({
      a: 'a',
      number: 11,
      hungry: true,
      grammyWins: 1
    })
    expect(result2).toEqual(['a', 'number', 'hungry', 'grammyWins']);
  });

  it('converts from list to object', function(){
    var result = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]);
    expect(result).toEqual({
      make: 'Ford',
      model: 'Mustang',
      year: 1964
    });
  });

  it('list all values',
  function(){
    var result = listAllValues({
      name : 'Krysten',
      age : 33,
      hasPets : false
    });
    expect(result).toEqual(['Krysten', 33, false]);
    var result2 = listAllValues({
      a: 'a',
      number: 11,
      hungry: true,
      grammyWins: 1
    })
    expect(result2).toEqual(['a', 11, true, 1]);
  });

  it('transforms employee data',
  function(){
    var result = transformEmployeeData(
      [ [ [ 'firstName', 'Joe' ],
      [ 'lastName', 'Blow' ],
      [ 'age', 42 ],
      [ 'role', 'clerk' ] ],
    [ [ 'firstName', 'Mary' ],
      [ 'lastName', 'Jenkins' ],
      [ 'age', 36 ],
      [ 'role', 'manager' ] ] ]
    );
    expect(result).toEqual([
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
    ]);
  });

  it('converts object to lists', function(){
    var result = convertObjectToList({
      name: 'Holly',
      age: 35,
      role: 'producer'
    });
    expect(result).toEqual([['name', 'Holly'], ['age', 35], ['role', 'producer']]);
    var result2 = convertObjectToList({
      species: 'canine',
      name: 'Bowser',
      weight: 45
    })
    expect(result2).toEqual([['species', 'canine'], ['name', 'Bowser'], ['weight', 45]]);
  });

});
