import { exercicio3 } from "../src/exercicio3"

describe("exercicio3", () => {
    test("", () => {
        const result = exercicio3("Astrodev")

        expect(result).toContain("Astrodev")
    })
})