// function letterCapitalize(str) {// 레퍼런스
//     let words = str.split(' ');
//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length > 0) {
//         words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//       }
//     }
  
//     str = words.join(' ');
//     return str;
//   }

  function letterCapitalize(str) {
    // TODO: 여기에 코드를 작성합니다.
    // 0번째 인덱스르는 무조건 대문자로 변경
    // 앞 요소가 공백이라면 뒷 글자를 대문자로 변경
  
    let result = ''
  
    for(let i = 0; i < str.length; i++) {
      if(i === 0 || str[i-1] === ' ') {
        result = result + str[i].toUpperCase()
      } else {
        result = result + str[i]
      }
    }
    return result
  }
  