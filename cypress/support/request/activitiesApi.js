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

Cypress.Commands.add("postActivitiesApi", (id, title, dueDate, completed) => {
    cy.request({
        method: "POST",
        url: `${Cypress.env("activitiesUrl")}`,
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