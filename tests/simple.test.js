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
}

describe("My Stack", () => {
  beforeEach(() => {
    const stack = new Stack();
    stack.push("1");
  });
  it("is created empty", () => {
    const stack = new Stack();
    expect(stack.top).toBe(-1);
  });
  it.todo("can push items to top");
  it.todo("can pop off");
});
