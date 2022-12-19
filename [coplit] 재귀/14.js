// function unpackGiftbox(giftBox, wish) {
//     // TODO: 여기에 코드를 작성합니다.
//     // head === wish 논리합 리턴값을 주고
//     // head.isArray true 일때 unpack..(giftBox)
  
//     const [head, ...tail] = giftBox
//     let isWish = false
  
//     if (giftBox.length === 0 || wish.length === 0) return false
//     isWish = (head === wish)
//     //빈 배열 또는 빈 문자열을 입력받은 경우, false를 리턴해야 합니다.
//     if (Array.isArray(head)) {
//         isWish = unpackGiftbox(head,wish)
//     }

//     return isWish || unpackGiftbox(tail, wish)
//   }

const giftBox = ['macbook', 'mugcup', ['eyephone', 'postcard'], 'money']

//   function unpackGiftbox(giftBox, wish) {
//     // recursive case
//     for (let i = 0; i < giftBox.length; i++) {
//       if (giftBox[i] === wish) {
//         return true;
//       } else if (Array.isArray(giftBox[i])) {
//         const result = unpackGiftbox(giftBox[i], wish);
//         if (result === true) {
//           return true;
//         }
//       }
//     }
  
//     // base case
//     return false;
//   }

  다른 풀이 방법 2
function unpackGiftbox(giftBox, wish) {
  const result = giftBox.reduce((acc, curr) => {
    if (curr === wish) {
      return true;
    } else if (Array.isArray(curr)) {
      return unpackGiftbox(curr, wish) || acc;
    } else {
      return acc;
    }
  }, false);
  return result;
}

다른 풀이 방법 1
function unpackGiftbox(giftBox, wish) {
  // recursive case
  let anotherBoxes = [];
  for (let i = 0; i < giftBox.length; i++) {
    if (giftBox[i] === wish) {
      return true;
    } else if (Array.isArray(giftBox[i])) {
      anotherBoxes = anotherBoxes.concat(giftBox[i]);
    }
  }

  if (anotherBoxes.length > 0) {
    return unpackGiftbox(anotherBoxes, wish);
  }

  // base case
  return false;
}