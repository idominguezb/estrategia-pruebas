
import Login from "../../../page-objects/login";
import {Page} from "../../../page-objects/page";

const login= new Login()
const page=new Page()
describe("Crear pagina con mimso titulo", function () {
    let  pageDatos=[]
    before(function(){
        cy.request("https://api.mockaroo.com/api/c98be0f0?count=1000&key=a8a44f40").then((response)=>pageDatos=response.body)
    })
    it("Crear paginas y verificar que se crearon con el mimso titulo", function () {
     login.go()
     cy.wait(2000)
      let index=getRandomInt(0,pageDatos.length)
      let index2=getRandomInt(0,pageDatos.length)
     page.navigateToNewPage()
     page.setTitle(pageDatos[index]["title"])
     page.setDescription(pageDatos[index]["description"])
      cy.wait(1000)
      page.savePage()
      cy.wait(2000)
      page.navigateToNewPage()
      page.setTitle(pageDatos[index]["title"])
      page.setDescription(pageDatos[index2]["description"])
       cy.wait(1000)
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