describe('Course Management Navigation Tests', function () {
	beforeEach('Navigate to Google  Search', function () {
		cy.visit('http://localhost/CourseManagementSystem/', { timeout: 10000 })
		cy.url('include', 'CourseManagementSystem/')
	})

	it('Navigate to students page', () => {
		let studentTab = cy.get('div.container > ul.tabs > li').contains('Students')
		studentTab.click()
		cy.url('include', 'students')
	})

	it('Navigate to course page', () => {
		let courseTab = cy.get('div.container > ul.tabs > li').contains('Course')
		courseTab.click()
		cy.url('include', 'course')
	})

	it('Navigate to enrollment page', () => {
		let courseTab = cy
			.get('div.container > ul.tabs > li')
			.contains('Enrollment')
		courseTab.click()
		cy.url('include', 'enrollment')
	})

	it('Navigate to instructor page', () => {
		let courseTab = cy
			.get('div.container > ul.tabs > li')
			.contains('Instructor')
		courseTab.click()
		cy.url('include', 'instructor')
	})

	it('Navigate to  Department page', () => {
		let courseTab = cy
			.get('div.container > ul.tabs > li')
			.contains('Department')
		courseTab.click()
		cy.url('include', 'department')
	})

	it('Navigate to Teaching_Assign  page', () => {
		let courseTab = cy
			.get('div.container > ul.tabs > li')
			.contains('Teaching_Assign')
		courseTab.click()
		cy.url('include', 'courseinstructor')
	})

	it('Navigate to Task page', () => {
		let courseTab = cy.get('div.container > ul.tabs > li').contains('Task')
		courseTab.click()
		cy.url('include', 'task')
	})

	it('Navigate to Admin page', () => {
		let courseTab = cy.get('div.container > ul.tabs > li').contains('Admin')
		courseTab.click()
		cy.url('include', 'admin')
	})
})
