
describe("Delete all conent", function () {
    it("Delete content", function () {
   
      
     
      cy.visit( "http://localhost:2368/ghost/#/signin");
        cy.get('[name=password]').type("prueba@example.com123456789");
        cy.get('[name=identification]').type( "prueba@example.com");
        cy.wait(2000)
        cy.get('.js-login-button').click();
        cy.wait(2000)
        cy.visit("http://localhost:2368/ghost/#/settings/labs")
        cy.get(":nth-child(3) > .gh-expandable-header > .gh-btn >").click()
        cy.wait(3000)
        cy.xpath("/html/body/div[5]/div/div/div/div/div[2]/section/div[2]/button[2]/span").click()
        cy.wait(2000)
     
    });
  });

  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }