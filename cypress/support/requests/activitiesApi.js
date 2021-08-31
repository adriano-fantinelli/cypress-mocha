Cypress.Commands.add("getActivitiesApi", () => {
    cy.request({
        method: "GET",
        url: `${Cypress.env("activitiesUrl")}`,
        headers: {
            accept: "application/json",
            "content-type": "application/json"
        }
    })
})

Cypress.Commands.add("getActivityApi", (id) => {
    cy.request({
        method: "GET",
        url: `${Cypress.env("activitiesUrl")}` + "/" + id,
        headers: {
            accept: "application/json",
            "content-type": "application/json"
        }
    })
})

Cypress.Commands.add("postActivityApi", (id, title, dueDate, completed) => {
    cy.request({
        method: "POST",
        url: `${Cypress.env("activitiesUrl")}`,
        headers: {
            accept: "text/plain",
            "content-type": "application/json"
        },
        body: {
            "id": id,
            "title": title,
            "dueDate": dueDate,
            "completed": completed
        }
    })
})

Cypress.Commands.add("deleteActivityApi", (id) => {
    cy.request({
        method: "DELETE",
        url: `${Cypress.env("activitiesUrl")}` + "/" + id,
        headers: {
            accept: "application/json",
            "content-type": "application/json"
        }
    })
})

Cypress.Commands.add("putActivityApi", (id, title, dueDate, completed) => {
    cy.request({
        method: "PUT",
        url: `${Cypress.env("activitiesUrl")}` + "/" + id,
        headers: {
            accept: "application/json",
            "content-type": "application/json"
        },
        body: {
            "ID": id,
            "Title": title,
            "DueDate": dueDate,
            "Completed": completed
        }
    })
})
