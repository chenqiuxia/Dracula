test('test common matcher', () => {
    expect(2+3).toBe(5)
    expect(2+2).not.toBe(5)

})
test('to be true or flase', () => {
    expect(0).toBeFalsy()
    expect(1).toBeTruthy()
})

test('test number', () => {
    expect(4).toBeGreaterThan(3)
    expect(4).toBeLessThan(5)
})
test('OOBJ', () => {
    expect({name: 'sdsd'}).toEqual({name: 'sdsd'})
})