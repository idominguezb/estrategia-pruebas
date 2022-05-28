import Login from "../../../page-objects/login";
import {Page} from "../../../page-objects/page";

const pageDatos=require("./datos/page_datos.json")
const login= new Login()
const page=new Page()
describe("crear pagina con tag", function () {
    it("Crerar pagina con un tag asociado", function () {
       
      
      login.go()
      cy.wait(2000)
      let index=getRandomInt(0,pageDatos.length)
     page.navigateToNewPage()
     page.setTitle(pageDatos[index]["title"])
    page.setDescription(pageDatos[index]["description"])
    page.createTag(pageDatos[index]["tag"])
      cy.wait(2000)
      page.savePage()
      cy.wait(2000)
      page.checkTitle(pageDatos[index]["title"].toString())
    });
  });

  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }