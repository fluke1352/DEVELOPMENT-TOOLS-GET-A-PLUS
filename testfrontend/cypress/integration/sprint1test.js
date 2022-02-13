describe('type name to login', () => {
    it('Input username', () => {
        cy.visit('http://localhost:3000/')
            .get('#input_username')
            .type('test username')
            cy.get('#done')
            .click()
    });
});

describe('Find game', () => {
    it('search game', () => {
        cy.visit('http://localhost:3000/')
            .get('#input_username')
            .type('test username')
            cy.get('#done')
            .click()
            .get('#game_name').type('Valorant')
            .should('be.visible')
    });
});
describe('Click into Game', () => {
    it('click card ', () => {
        cy.visit('http://localhost:3000/')
            .get('#input_username')
            .type('test username')
            cy.get('#done')
            .click()
            cy.get('#__next')
            .find('Button')
            .last()
            .click()
    });
});

describe('Click to chat page', ()=>{
    it('Click chat', ()=>{
        cy.visit('http://localhost:3000/')
        .get('#input_username')
        .type('test username')
        cy.get('#done')
        .click()
        cy.get('#__next')
        .find('button')
        .eq(1)
        .click()
        cy.url().should('include', '/chats')
    })
});

describe('Sent message', ()=>{
    it('Sent', ()=>{
        cy.visit('http://localhost:3000/')
        .get('#input_username')
        .type('test username')
        cy.get('#done')
        .click()
        cy.get('#__next')
        .find('button')
        .eq(1)
        .click()
        cy.get('[placeholder="Message"]').type('Test sent message by Enter key').type('{enter}')
        cy.get('[placeholder="Message"]').type('Test sent message by Click sent button')
        cy.get('#__next').find('svg').last().click()
    })
})
