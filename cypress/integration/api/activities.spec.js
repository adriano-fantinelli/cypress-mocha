/// <reference types="cypress" />

import activitySchema from '../../contracts/activity.contract'
import activitiesSchema from '../../contracts/activities.contract'

context('Activities', { tags: ['@regression', '@activities'] }, () => {
  beforeEach(() => {
    cy.fixture('createActivity').as('createActivity')
    cy.fixture('editActivity').as('editActivity')
    cy.fixture('findActivity').as('findActivity')
  })

  it('Search for all activities', { tags: ['@smoke'] }, function () {
    cy.getActivitiesApi().then((response) => {
      expect(response.status).to.eq(200)
      activitiesSchema.validateAsync(response.body)
    })
  })

  it('Search for an specific activity', function () {
    cy.getActivityApi(this.findActivity.id).then((response) => {
      expect(response.status).to.eq(200)
      activitySchema.validateAsync(response.body)
    })
  })

  it('Create an activity', function () {
    cy.postActivityApi(this.createActivity.id, this.createActivity.title, this.createActivity.dueDate, this.createActivity.completed).then((response) => {
      expect(response.status).to.eq(200)
      activitySchema.validateAsync(response.body)
    })
    cy.deleteActivityApi(this.createActivity.id)
  })

  it('Delete an activity', function () {
    cy.postActivityApi(this.createActivity.id, this.createActivity.title, this.createActivity.dueDate, this.createActivity.completed)
    cy.deleteActivityApi(this.createActivity.id).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('Edit an activity', function () {
    cy.postActivityApi(this.createActivity.id, this.createActivity.title, this.createActivity.dueDate, this.createActivity.completed)
    cy.putActivityApi(this.editActivity.id, this.editActivity.title, this.editActivity.dueDate, this.editActivity.completed).then((response) => {
      expect(response.status).to.eq(200)
      activitySchema.validateAsync(response.body)
    })
    cy.deleteActivityApi(this.createActivity.id)
  })
})
