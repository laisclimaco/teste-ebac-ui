/// <reference types="cypress"/>

describe('Funcinalidade: Login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('julia.teste@teste.com.br')
        cy.get('#password').type('juli7878')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain' , 'Olá, julia.teste (não é julia.teste? Sair)')
    })
})
