import { exercicio2 } from "../src/exercicio2"

describe("exercicio2", () => {
    test("", () => {
        const result = exercicio2("2022/09/26")

        expect(result).toBe("26/09/2022")
    })
})