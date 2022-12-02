function firstCharacter(str) {
    // TODO: 여기에 코드를 작성합니다.
    // 단어는 공백 한 칸으로 구분합니다.
    // 연속된 공백은 없다고 가정합니다.
    // 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
    // 만들어진게 배열이라면 문자열로 변환한다
  
    let result = '';
    let newArr = [];
  
    // 공백을 기준으로 단어로 쪼개어진 배열을 만들고
    newArr = str.split(' ');
    console.log(newArr)

    for(let i = 0; i < newArr.length; i++) {
        result += newArr[i][0];
        console.log(result)
    }
    return result;
  }

  firstCharacter('')