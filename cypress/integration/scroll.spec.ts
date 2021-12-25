describe('scroll', function () {
  it('[Route] /examples/use-scroll-position', function () {
    cy.visit('/examples/use-scroll-position')
    // ページ遷移時に一定時間空ける
    cy.wait(100)

    cy.scrollTo(0, 500)
    cy.get('div.center').contains('500')
  })

  it('[Route] /examples/use-scroll-direction', function () {
    cy.visit('/examples/use-scroll-direction')
    // ページ遷移時に一定時間空ける
    cy.wait(100)

    cy.get('div.center').contains('📜')
    cy.scrollTo(0, 200)
    cy.get('div.center').contains('⬇')
    cy.scrollTo(0, 100)
    cy.get('div.center').contains('⬆')
  })

  it('[Route] /examples/use-scroll-over', function () {
    cy.visit('/examples/use-scroll-over')
    // ページ遷移時に一定時間空ける
    cy.wait(100)

    cy.scrollTo(0, 100)
    cy.get('div.center').contains('not over')
    cy.scrollTo(0, 500)
    cy.get('div.center').contains('over')
  })
})
