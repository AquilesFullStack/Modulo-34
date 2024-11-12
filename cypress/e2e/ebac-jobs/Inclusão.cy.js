/// <reference types="cypress" />

describe('Testes para Inclusão',() => {
    beforeEach (() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve preencher os campos', () => {
        cy.get('input[type="text"]').type('Aquiles')
        cy.get('input[type="email"]').type('Aquiles@test.com')
        cy.get('input[type="tel"]').type('1112345678')
        cy.get('button[type="submit"]').click()
    })

    // it('Deve filtrar por Fullstack', () => {
    //     cy.get('.FormVagas_campo__E1ppF').type('fullstack')
    //     cy.get('button[type="submit"]').click()
    //     cy.get('.ListaVagas_vagas__gmNZn > li').should('have.length', 1)
    // })
})