/// <reference types="cypress" />

import activitySchema from '../../contracts/activity.contract'
import activitiesSchema from '../../contracts/activities.contract'

context('Activities', () => {
    beforeEach(() => {
      cy.fixture('createActivity').as('createActivity')
      cy.fixture('editActivity').as('editActivity')
    })

    it('Search for all activities', function() {
        cy.getActivitiesApi().then((response) => {
          expect(response.status).to.eq(200)
          activitiesSchema.validateAsync(response.body)
        })
    })

    it('Create an activity', function() {
      cy.postActivityApi(this.createActivity.ID, this.createActivity.Title, this.createActivity.DueDate, this.createActivity.Completed).then((response) => {
        expect(response.status).to.eq(200)
        activitySchema.validateAsync(response.body)
      })
    })

    it('Delete an activity', function() {
        cy.deleteActivityApi(30).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Search for an specific activity', function() {
        cy.getActivityApi(30).then((response) => {
            expect(response.status).to.eq(200)
            activitySchema.validateAsync(response.body)
        })
    })

    it('Edit an activity', function() {
        cy.putActivityApi(this.editActivity.ID, this.editActivity.Title, this.editActivity.DueDate, this.editActivity.Completed).then((response) => {
            expect(response.status).to.eq(200)
            activitySchema.validateAsync(response.body)
        })     
    })
})
