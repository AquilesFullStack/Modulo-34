/// <reference types="cypress" />

describe('Testes para editar contato',() => {
    beforeEach (() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve deleter um contato', () => {
        cy.get('.delete').first().click();  
        cy.screenshot('tela-de-remoção')
    })
})