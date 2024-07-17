class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop() {
    delete this.items[this.top];
    this.top -= 1;
  }
}

describe("My Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.top).toBe(-1);
  });

  it("can push items to top", () => {
    stack.push(100);
    expect(stack.peek).toBe(100);
  });

  it("can pop off", () => {
    stack.push(12);
    stack.push(13);
    stack.pop();
    expect(stack.peek).toBe(12);
  });
});
