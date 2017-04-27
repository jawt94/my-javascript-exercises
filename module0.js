function transformFirstAndLast(array) {
  var object = {};
  object[array[0]] = array[array.length - 1];
  return object;
}

function getAllKeys(obj) {
  var keys = [];
  for (var key in obj)  {
    keys.push(key);
  };
  return keys;
}

function fromListToObject(array) {
  var object = {}
  for (var i = 0; i < array.length; i++) {
    object[array[i][0]] = array[i][1];
  }
  return object;
}

function listAllValues(obj) {
  var values = [];
  for (var keys in obj) {
    var value = obj[keys];
    values.push(value);
  };
  return values;
}

function transformEmployeeData(arr) {
  var array = [];
  for (var i = 0; i < arr.length; i++) {
    var person = {};
    for (var j = 0; j < arr[i].length; j++) {
      var key = arr[i][j][0];
      var val = arr[i][j][1];
      person[key] = val;
    };
    array[i] = person;
  };
  return array;
}

function convertObjectToList(obj) {
  var result = [];
  for (var keys in obj) {
    var pair = [];
    var value = obj[keys];
    pair.push(keys, value);
    result.push(pair);
  };
  return result;
}

function greetCustomer(firstName) {
  var greeting = '';

  if (!customerData[firstName]) {
    greeting = 'Welcome! Is this your first time?';
  } else if (customerData[firstName].visits === 1) {
    greeting = 'Welcome back, ' + firstName + "! We're glad you liked us the first time!";
  } else if (customerData[firstName].visits > 1) {
    greeting = 'Welcome back, ' + firstName + '! So glad to see you again!';
  }
  return greeting;
}
