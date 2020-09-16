/// <reference types="cypress" />

import activitiesSchema from '../../contracts/activities.contract'

context('Activities', () => {

    let createActivity
    let editActivity
    let ID = 30;

    beforeEach(() => {
        cy.fixture('createActivity.json').then( c => {
            createActivity = c
        })

        cy.fixture('createActivity.json').then( e => {
            editActivity = e
        })
    })

    it('Search for all activities', () => {
        cy.getActivitiesApi().should((response) => {
            expect(response.status).to.eq(200)
            activitiesSchema.validateAsync(response.body)
        })
    })

    it('Create an activity', () => {
        cy.postActivityApi(createActivity.ID, createActivity.Title, createActivity.DueDate, createActivity.Completed).should((response) => {
            expect(response.status).to.eq(200)
            activitiesSchema.validateAsync(response.body)
        })     
    })

    it('Delete an activity', () => {
        cy.deleteActivityApi(ID).should((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Search for an specific activity', () => {
        cy.getActivityApi(ID).should((response) => {
            expect(response.status).to.eq(200)
            activitiesSchema.validateAsync(response.body)
        })
    })

    it('Edit an activity', () => {
        cy.putActivityApi(editActivity.ID, editActivity.Title, editActivity.DueDate, editActivity.Completed).should((response) => {
            expect(response.status).to.eq(200)
            activitiesSchema.validateAsync(response.body)
        })     
    })
})
