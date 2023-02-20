const powerSet = function (str) {
    // TODO: 여기에 코드를 작성합니다.
    // [] = split, +'' 요소 분리해서 담아두기
    
    let ele = [...str.split('')]
    let result = ['']
  
    for (let i = 0; i < ele.length; i++) {
      let def = ele[i]
      result.push(def)
      for (let j = 0; j < ele.length; j++) {
          if (i === j) continue
          let temp = [ def, ele[j] ].sort()
          if(result.indexOf(temp.join('')) === -1) {
              result.push(temp.join(''))
          }
          console.log(temp)
          
      }
    }
    
    return result.sort()
  };
  
  console.log(powerSet('abc'))