import { multiply, subtract } from "./operations"

interface Expression {
  add: (e: Expression) => Expression
  subtract: (e: Expression) => Expression
  multiply: (e: Expression) => Expression
  divide: (e: Expression) => Expression
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

  add(e: Expression) { return new NumericExpression(this.evaluate() + e.evaluate()) }
  subtract(e: Expression) { return new NumericExpression(subtract(this.evaluate(), e.evaluate())) }
  multiply(e: Expression) {
    return new NumericExpression(multiply(this.evaluate(), e.evaluate()))
  }
  divide(e: Expression) { return new NumericExpression(this.evaluate() / e.evaluate()) }
}

class OperatorExpression implements Expression {
  operation: string
  children: Expression[]
  constructor(operation: string, children: Expression[]) {
    this.operation = operation
    this.children = children
  }

  add(e: Expression) { return new NumericExpression(this.evaluate() + e.evaluate()) }
  subtract(e: Expression) { return new NumericExpression(this.evaluate() - e.evaluate()) }
  multiply(e: Expression) { return new NumericExpression(this.evaluate() * e.evaluate()) }
  divide(e: Expression) { return new NumericExpression(this.evaluate() / e.evaluate()) }

  evaluate(): number {
    switch (this.operation) {
      case '+':
        return this.children[0].add(this.children[1]).evaluate();
      case '-':
        return this.children[0].subtract(this.children[1]).evaluate();
      case '*':
        return this.children[0].multiply(this.children[1]).evaluate();
      case '/':
        return this.children[0].divide(this.children[1]).evaluate();
      default:
        return NaN;
    }
  }
}

export const operations = ['*', '/', '+', '-']

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

export const evaluate = (expression: string): number => {
  const tokens = tokenize(expression)
  let expressionTree: Expression = new NumericExpression(parseFloat(tokens[0]))
  let workingLeaf = expressionTree

  for (let i = 1; i < tokens.length; i++) {
    if (expressionTree instanceof NumericExpression) {
      expressionTree = new OperatorExpression(tokens[i], [expressionTree])
      workingLeaf = expressionTree
    } else if (operations.includes(tokens[i])) {
      const leaf = (workingLeaf as OperatorExpression);
      if (operations.indexOf(leaf.operation) > operations.indexOf(tokens[i])) {
        const lastChild = leaf.children.pop()
        leaf.children.push(new OperatorExpression(tokens[i], [lastChild!]))
        workingLeaf = leaf.children[leaf.children.length - 1]
      } else {
        expressionTree = new OperatorExpression(tokens[i], [expressionTree])
      }
    } else if (expressionTree instanceof OperatorExpression && expressionTree.children.length === 1) {
      expressionTree.children.push(new NumericExpression(parseInt(tokens[i])))
    } else {
      const leaf = (workingLeaf as OperatorExpression);

      leaf.children.push(new NumericExpression(parseFloat(tokens[i])))
    }
  }

  return expressionTree.evaluate()
}
