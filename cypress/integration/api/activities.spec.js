/// <reference types="cypress" />

import activitySchema from '../../contracts/activity.contract'
import activitiesSchema from '../../contracts/activities.contract'

context('Activities', { tags: ['@regression', '@activities'] }, () => {
  beforeEach(() => {
    cy.fixture('createActivity').as('createActivity')
    cy.fixture('editActivity').as('editActivity')
  })

  it('Search for all activities', { tags: ['@smoke'] }, function () {
    cy.getActivitiesApi().then((response) => {
      expect(response.status).to.eq(200)
      activitiesSchema.valIdateAsync(response.body)
    })
  })

  it('Search for an specific activity', function () {
    cy.getActivityApi(this.createActivity.Id).then((response) => {
      expect(response.status).to.eq(200)
      activitySchema.valIdateAsync(response.body)
    })
  })

  it('Create an activity', function () {
    cy.postActivityApi(this.createActivity.Id, this.createActivity.Title, this.createActivity.DueDate, this.createActivity.Completed).then((response) => {
      expect(response.status).to.eq(200)
      activitySchema.valIdateAsync(response.body)
    })
    cy.deleteActivityApi(this.createActivity.Id)
  })

  it('Delete an activity', function () {
    cy.postActivityApi(this.createActivity.Id, this.createActivity.Title, this.createActivity.DueDate, this.createActivity.Completed)
    cy.deleteActivityApi(this.createActivity.Id).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('Edit an activity', function () {
    cy.postActivityApi(this.createActivity.Id, this.createActivity.Title, this.createActivity.DueDate, this.createActivity.Completed)
    cy.putActivityApi(this.editActivity.Id, this.editActivity.Title, this.editActivity.DueDate, this.editActivity.Completed).then((response) => {
      expect(response.status).to.eq(200)
      activitySchema.valIdateAsync(response.body)
    })
    cy.deleteActivityApi(this.createActivity.Id)
  })
})
