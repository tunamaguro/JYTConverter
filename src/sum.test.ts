import { describe, expect, test } from 'vitest'

const sum = (...args: number[]) => args.reduce((pre, cur) => pre + cur)

describe('Simple Test', () => {
  test('1+1=2', () => {
    expect(sum(1, 1)).toBe(2)
  })
  test('1+2+3=6', () => {
    expect(sum(1, 2, 3)).toBe(6)
  })
  test('0=0', () => {
    expect(sum(0)).toBe(0)
  })
  test('-1+-1=-2', () => {
    expect(sum(-1, -1)).toBe(-2)
  })
  test('-1+-2+-3=-6', () => {
    expect(sum(-1, -2, -3)).toBe(-6)
  })
})
