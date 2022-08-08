describe("간단한 테스트들", () => {
  it("2 더하기 2는 ", () => {
    expect(2 + 2).toBe(4); // pass
  })

  it("클라이언트 테스트 실패시키기", () => {
    expect(2 - 1).toBe(10); // fail
  })
})
