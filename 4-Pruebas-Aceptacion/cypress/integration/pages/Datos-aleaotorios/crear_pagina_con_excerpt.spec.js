

import Login from "../../../page-objects/login";
import {Page} from "../../../page-objects/page";
const {faker}= require('@faker-js/faker');
const login= new Login()
const page=new Page()
describe("Crear pagina con excerpt", function () {
  
    it("Crear pagina con excerpt", function () {
     login.go()
     cy.wait(2000)
     page.navigateToNewPage()
     let titulo=faker.random.words(2)
     page.setTitle(titulo)
     page.setDescription(faker.lorem.lines(3))
        page.createExcerpt(faker.lorem.lines(3))
   
     cy.wait(2000)

     page.savePage()
     
     cy.wait(2000)
       
     page.checkTitle(titulo)
    });
     


  });

 
