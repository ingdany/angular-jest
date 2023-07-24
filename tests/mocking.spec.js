const randomNumberExpected = 0.123456789

const getRandomNumber = () => Math.random()

beforeEach(() => {
    // modificamos el comportamiento del método random
    // para que retorne randomNumberExpected
    jest.spyOn(global.Math, 'random').mockReturnValue(randomNumberExpected)
})

afterEach(() => {
    // eliminamos el comportamiento asignado anteriormente
    jest.spyOn(global.Math, 'random').mockRestore()
})

test('it should return a random value', () => {
    // pasa porque estamos controlando el comportamiento de Math.random
    expect(getRandomNumber()).toBe(randomNumberExpected)
    // otra posible asersión:
    expect(Math.random).toHaveBeenCalled()
})