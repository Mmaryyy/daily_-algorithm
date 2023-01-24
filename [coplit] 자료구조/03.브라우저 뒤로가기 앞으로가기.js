function browserStack(actions, start) {
    // TODO: 여기에 코드를 작성합니다.
    // 현재 페이지에서
    // 1. 다른 페이지로 이동하면 현재 페이지 -> prev 스택으로,
    //    다른 페이지 -> 현재 페이지로
    // 2. 뒤로 가기하면 현재 페이지를 -> next 스택으로
    //    prev 스택에서 꺼내온 top -> 현재 페이지로
    // 3. 앞으로 가기 하면 현재 페이지를 -> prev 스택으로
    //    next 스택에서 꺼내온 top -> 현재 페이지로
    
    class Stack {
      constructor() {
          this.storage = []
          this.top = -1
      }
      size() {
          return this.top + 1
      }
      push(element) {
          this.top += 1
          this.storage[this.top] = element
      }
      pop() {
          if (this.size() === 0) return
  
          const result = this.storage[this.top]
          this.storage.splice([this.top], 1)
          this.top -= 1
          return result
      }
      init() {
        this.storage = []
        this.top = -1
      }
    }

    const Prev = new Stack
    const Next = new Stack
    let current = start

    if (typeof start !== 'string') return false
    for (let action of actions) {
        if (action === -1 && Prev.size() !== 0) {
            Next.push(current)
            current = Prev.pop()
        } else if (action === 1 && Next.size() !== 0) {
            Prev.push(current)
            current = Next.pop()
        } else if (typeof action === 'string') {
            Prev.push(current)
            current = action
            Next.init()
        }
    }
    return [Prev.storage, current, Next.storage]
  }
  
console.log(browserStack(["B", "C", -1, "D", "A", -1, 1, -1, -1], 'A'))

