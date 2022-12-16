import { sgn } from "./../../../src/index"

describe("Sign function", () => {
  test("Sign function - 1", () => {
    expect(sgn(1)).toBe(1)
  })

  test("Sign function - 2", () => {
    expect(sgn(-1)).toBe(-1)
  })

  test("Sign function - 3", () => {
    expect(sgn(45361)).toBe(1)
  })

  test("Sign function - 4", () => {
    expect(sgn(0)).toBe(0)
  })

  test("Sign function - 5", () => {
    expect(sgn(-0.54254)).toBe(-1)
  })
})
