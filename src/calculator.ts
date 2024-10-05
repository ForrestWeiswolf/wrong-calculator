const tokenize = (expression: string) => {
  const result = []
  let token = ''
  for (let i = 0; i < expression.length; i++) {
    if (/[\d,.]/.exec(expression[i])) {
      token += expression[i]
    } else {
      result.push(token, expression[i])
      token = ''
    }
  }
  result.push(token)

  return result
}

interface Expression {
  // add: (e: Expression) => Expression
  // subtract: (e: Expression) => Expression
  // multiply: (e: Expression) => Expression
  // divide: (e: Expression) => Expression
  evaluate: () => number
}

class NumericExpression implements Expression {
  value: number

  constructor(n: number) {
    this.value = n
  }

  evaluate() {
    return this.value
  }
}

class ComplexExpression implements Expression {
  operation: string
  children: Expression[]
  constructor(operation: string, children: Expression[]) {
    this.operation = operation
    this.children = children
  }

  evaluate() {
    switch (this.operation) {
      case '+':
        return this.children[0].evaluate() + this.children[1].evaluate();
      case '-':
        return this.children[0].evaluate() - this.children[1].evaluate();
      case '*':
        return this.children[0].evaluate() * this.children[1].evaluate();
      case '/':
        return this.children[0].evaluate() / this.children[1].evaluate();
      default:
        return NaN;
    }
  }
}

export const operations = ['*', '/', '+', '-']

export const evaluate = (expression: string): number => {
  const tokens = tokenize(expression)
  let expressionTree: Expression = new NumericExpression(parseFloat(tokens[0]))
  let workingLeaf = expressionTree

  for (let i = 1; i < tokens.length; i++) {
    if (expressionTree instanceof NumericExpression) {
      expressionTree = new ComplexExpression(tokens[i], [expressionTree])
      workingLeaf = expressionTree
    } else if (operations.includes(tokens[i])) {
      const leaf = (workingLeaf as ComplexExpression);
      if (operations.indexOf(leaf.operation) > operations.indexOf(tokens[i])) {
        const lastChild = leaf.children.pop()
        leaf.children.push(new ComplexExpression(tokens[i], [lastChild!]))
        workingLeaf = leaf.children[leaf.children.length - 1]
      } else {
        expressionTree = new ComplexExpression(tokens[i], [expressionTree])
      }
    } else if (expressionTree instanceof ComplexExpression && expressionTree.children.length === 1) {
      expressionTree.children.push(new NumericExpression(parseInt(tokens[i])))
    } else {
      const leaf = (workingLeaf as ComplexExpression);

      leaf.children.push(new NumericExpression(parseFloat(tokens[i])))
    }
  }

  return expressionTree.evaluate()
}
