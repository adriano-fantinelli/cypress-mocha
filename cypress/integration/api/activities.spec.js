/// <reference types="cypress" />

import activitiesSchema from '../../contracts/activities.contract'

context('Activities', () => {

    let profile

    beforeEach(() => {
        cy.fixture('activity.json').then( p => {
            profile = p
        })

    })

    it('Search for all activities', () => {
        cy.getActivitiesApi().should((response) => {
            expect(response.status).to.eq(200)
            activitiesSchema.validateAsync(response.body)
        })
    })

    it('Create an activitie', () => {
        cy.postActivitiesApi(profile.ID, profile.Title, profile.DueDate, profile.Completed).should((response) => {
            expect(response.status).to.eq(200)
            activitiesSchema.validateAsync(response.body)
        })     
    })
})