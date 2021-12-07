
const Manager = require('../lib/manager')
const david = new Manager("david", 4269, "david@internet.com", "23546", "Manager");

describe('Manager', () => {
    // Test for adding a new manager object
    describe('newManager', () => {
        it("Should create a new manager object with name, id, email, office, and role", () => {
            // Verify that the new object has the correct properties
            expect(david.name).toEqual("david")
            expect(david.id).toEqual(4269)
            expect(david.email).toEqual("david@internet.com")
            expect(david.office).toEqual("23546"),
                expect(david.role).toEqual("Manager")
        })
        it("manager name, email, github, and role should be a strings", () => {
            expect(typeof david.name).toBe('string')
            expect(typeof david.email).toBe('string')
            expect(typeof david.office).toBe('string')
            expect(typeof david.role).toBe('string')
        })
        it("manager id should be a number", () => {
            expect(typeof david.id).toBe('number')
        })
        it("new Manager should be an object", () => {
            expect(typeof new Manager).toBe('object')
        })
        it('Manager should be a function', () => {
            expect(typeof Manager).toBe('function')
        })
    })
})