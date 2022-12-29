let dfs = function (node) {
    // TODO: 여기에 코드를 작성합니다.
    // 재귀 쓸 수 있지 않을까..
    // 1. node를 순회합니다
    // 2. node.value 값을 배열에 추가합니다.
    // 3. node.children에 길이가 0이 아닌 배열이 있으면
    // 4. 그 안에 배열을 먼저 탐색합니다.
    let result = []

    result.push(node.value)
    console.log(node.children)
    if (Array.isArray(node.children)) dfs(node.children)
    result
  };
  
  // 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
  let Node = function (value) {
    this.value = value;
    this.children = [];
  };
  
  // 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
  // membership check(중복 확인)를 따로 하지 않습니다.
  Node.prototype.addChild = function (child) {
    this.children.push(child);
    return child;
  };

let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));

console.log(root)

console.log(dfs(root))
// [1, 2, 4, 5, 3]