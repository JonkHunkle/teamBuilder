const Engineer = require('../lib/engineer')
const david = new Engineer("david", 4962, "david@email.com", "githobble", "Engineer");

describe('Engineer', () => {
    // Test for adding a new engineer object
    describe('NewEngineer', () => {
        it("Should create a new engineer object including name, id, email, github, and role", () => {

            // Verify that the new object has the correct properties
            expect(david.name).toEqual("david")
            expect(david.id).toEqual(4962)
            expect(david.email).toEqual("david@email.com")
            expect(david.github).toEqual("githobble"),
                expect(david.role).toEqual("Engineer")
        })
        it("engineer's name, email, github, and role should be a strings", () => {
            expect(typeof david.name).toBe('string')
            expect(typeof david.email).toBe('string')
            expect(typeof david.github).toBe('string')
            expect(typeof david.role).toBe('string')
        })
        it("engineer's id should be a number", () => {
            expect(typeof david.id).toBe('number')
        })
        it("new Engineer should be an object", () => {
            expect(typeof new Engineer).toBe('object')
        })
        it('Engineer should be a function', () => {
            expect(typeof Engineer).toBe('function')
        })

    })
})