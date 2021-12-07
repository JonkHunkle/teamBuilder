
const Employee = require('../lib/employee')
const david = new Employee("david", 6942, "david@email.com");

describe('Employee', () => {
    // Test for adding a new Intern object
    describe('newEmployee', () => {
        it("Should create a new employee object including name, id, email", () => {
            // Verify that the new object has the correct properties
            expect(david.name).toEqual("david")
            expect(david.id).toEqual(6942)
            expect(david.email).toEqual("david@email.com")
        })
        it("Employee's name and email should be a strings", () => {
            expect(typeof david.name).toBe('string')
            expect(typeof david.email).toBe('string')
        })
        it("Employee's id should be a number", () => {
            expect(typeof david.id).toBe('number')
        })
        it("new Employee should be an object", () => {
            expect(typeof new Employee).toBe('object')
        })
        it('Employee should be a function', () => {
            expect(typeof Employee).toBe('function')
        })
    })
})