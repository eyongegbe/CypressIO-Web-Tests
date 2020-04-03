describe('Course Management Navigation Steps', function () {
	beforeEach('Navigate to Students Page', function () {
		cy.visit('http://localhost/CourseManagementSystem/students', {
			timeout: 10000,
		})
		cy.url('include', '/students/')
	})

	it('should create a student record', () => {
		let firstName = getRandomString(10)
		let lastName = getRandomString(10)
		createStudentRecord(firstName, lastName)
		let name = cy.get('div.container.body-content > table > tbody > tr').last()
		expect(name.contains(lastName))
	})

	it('should edit a student record', () => {
		let firstName = getRandomString(5)
		let lastName = getRandomString(5)
		createStudentRecord(firstName, lastName)
		let name = cy.get('div.container.body-content > table > tbody > tr').last()
		expect(name.contains(lastName))

		let newLastName = getRandomString(10)
		let newFirstName = getRandomString(10)
		editStudentNames(newFirstName, newLastName)
		let newName = cy
			.get('div.container.body-content > table > tbody > tr > td')
			.first()
		expect(newName.contains(newLastName))
	})

	function editStudentNames(newFirstName, newLastName) {
		let row = cy.get('div.container.body-content > table > tbody > tr').last()
		row.scrollIntoView()
		let edit = row
			.get('div.container.body-content > table > tbody > tr > td > a')
			.contains('Edit')
		edit.click()

		cy.get('#LastName').clear()
		cy.get('#LastName').type(newLastName)
		cy.get('#FirstName').clear()
		cy.get('#FirstName').type(newFirstName)

		const todaysDate = Cypress.moment().format('YYYY-MM-DDThh:mm')
		cy.get('#EnrollmentDate').clear()
		cy.get('#EnrollmentDate').type(todaysDate)

		let saveButton = cy.get('input.btn.btn-default').contains('Save')
		saveButton.scrollIntoView()
		saveButton.click()
	}

	function createStudentRecord(firstName, lastName) {
		let createStudent = cy
			.get('div.container.body-content > p > a')
			.contains('Create New')
		createStudent.click()
		cy.get('#LastName').type(lastName)
		cy.get('#FirstName').type(firstName)
		const todaysDate = Cypress.moment().format('YYYY-MM-DDThh:mm')
		cy.get('#EnrollmentDate').type(todaysDate)
		let createButton = cy.get('input.btn.btn-default').contains('Create')
		createButton.click()
	}

	function getRandomString(length) {
		var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
		var result = ''
		for (var i = 0; i < length; i++) {
			result += randomChars.charAt(
				Math.floor(Math.random() * randomChars.length)
			)
		}
		return result
	}
})
