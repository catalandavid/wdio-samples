
describe('Basic AEM Tests', () => {

    describe('Login Page', () => {

        before(() => {
            browser.url("/")
        })

        it('should display username text field', () => {
            $('//input[@id="username"]').waitForExist();
            $('//input[@id="username"]').isDisplayed().should.be.true
        })

        it('should display password text field', () => {
            $('//input[@id="password"]').waitForExist()
            $('//input[@id="password"]').isDisplayed().should.be.true
        })

    })

})
