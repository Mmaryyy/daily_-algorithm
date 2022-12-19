function ABCheck(str) {
    let re = str.toLowerCase()
    let result = /a...b/.test(re);
    let result2 = /b...a/.test(re);
    return result || result2;
  }

  ABCheck('lane Borrowed');
