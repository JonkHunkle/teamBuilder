const Intern = require('../lib/intern')
const david = new Intern("david", 6249, "david@interne.com", "hardknocks", "Intern");
describe('Intern', () => {
    // Test for adding a new Intern object
    describe('NewIntern', () => {
        it("Should create a new intern object including name, id, email, github, and role", () => {
            // Verify that the new object has the correct properties
            expect(david.name).toEqual("david")
            expect(david.id).toEqual(6249)
            expect(david.email).toEqual("david@interne.com")
            expect(david.school).toEqual("hardknocks"),
                expect(david.role).toEqual("Intern")
        })
        it("Interns's name, email, github, and role should be a strings", () => {
            expect(typeof david.name).toBe('string')
            expect(typeof david.email).toBe('string')
            expect(typeof david.school).toBe('string')
            expect(typeof david.role).toBe('string')
        })
        it("Intern's id should be a number", () => {
            expect(typeof david.id).toBe('number')
        })
        it("new Intern should be an object", () => {
            expect(typeof new Intern).toBe('object')
        })
        it('Intern should be a function', () => {
            expect(typeof Intern).toBe('function')
        })
    })
})