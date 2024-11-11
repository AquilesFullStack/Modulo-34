/// <reference types="cypress" />

describe('Testes para a página de candidatura',() => {
    beforeEach (() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it('Deve levar o usuário até o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscricao')
    })

    it('Deve preencher o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('jose Aquiles')
        cy.get('input[name="email"]').type('jose.aquiles@ebaconline.com.br')
        cy.get('input[name="telefone"]').type('1112345678')
        cy.get('input[name="endereco"]').type('Rua da vovozinha que se foi')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"').select('outros')
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('windows:alert', (conteudo) => {
            expect (conteudo).contain('Obrigado pela candidatura!')
        })

        cy.screenshot('tela-inscicao-preenchido')

    })

})  