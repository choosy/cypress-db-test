// learned about cypress tasks here
// https://gitter.im/cypress-io/cypress?at=5e569eba6aefb130be9486f2
// see the answer Jorrit @jorrit-wehelp Feb 26 12:32
// then here: https://docs.cypress.io/api/commands/task.html#Event



describe('e2e', () => {
    beforeEach(() => {

    })

    it('displays database values', () => {
        cy.task('query:db').then( (results) => {
            console.log(results)
            for (let result in results) {
                cy.visit('http://127.0.0.1:8080/')

                let row = results[result]

                cy.get('[name="first_name"]').type(row.name)
            }

        }) /// cy.task end then
    })
})

