describe('Calculadora de Cadenas', ()=> {
        it('Devuelve 0 para una cadena vacia', ()=> {
            cy.visit("/");
            cy.get("#string").type(" ");
            cy.get("#calc-form").submit();
            cy.get("#resultado").should("contain","0");
        });

        it('Devuelve el numero ingresado',  ()=>{
            cy.visit("/");
            cy.get('#string').clear().type('3');
            cy.get("#calc-form").submit();
            cy.get("#resultado").should("contain","3");
        });

        it('Suma entre 2 numeros separados por comas', () =>{
            cy.visit("/");
            cy.get('#string').clear().type('1,4');
            cy.get("#calc-form").submit();
            cy.get("#resultado").should("contain","5");
        });

        it('Suma entre 3 numeros separados por comas', () =>{
            cy.visit("/");
            cy.get('#string').clear().type('1,4,5');
            cy.get("#calc-form").submit();
            cy.get("#resultado").should("contain","10");
        });

        it('Suma entre 2 numeros separados por guiones', () =>{
            cy.visit("/");
            cy.get('#string').clear().type('1-4');
            cy.get("#calc-form").submit();
            cy.get("#resultado").should("contain","5");
        });

        it('Suma entre 3 numeros separados por guiones', () =>{
            cy.visit("/");
            cy.get('#string').clear().type('1-4-5');
            cy.get("#calc-form").submit();
            cy.get("#resultado").should("contain","10");
        });

        it('Suma entre numeros separados por guiones y comas', () =>{
            cy.visit("/");
            cy.get('#string').clear().type('1,4-5');
            cy.get("#calc-form").submit();
            cy.get("#resultado").should("contain","10");
        });

        it('Suma entre numeros separados por delimitador personalizado', () =>{
            cy.visit("/");
            cy.get('#string').clear().type('//[*]1*4*5');
            cy.get("#calc-form").submit();
            cy.get("#resultado").should("contain","10");
        });

        it('Suma entre numeros separados por delimitador personalizado y tambien ignora a los numeros mayores a 1000', () =>{
            cy.visit("/");
            cy.get('#string').clear().type('//[*]1*4*5000');
            cy.get("#calc-form").submit();
            cy.get("#resultado").should("contain","5");
        });

        it('Suma entre numeros separados por delimitadores personalizados', () =>{
            cy.visit("/");
            cy.get('#string').clear().type('//[*][|]1|4*50');
            cy.get("#calc-form").submit();
            cy.get("#resultado").should("contain","55");
        });

        it('Suma entre numeros separados por delimitadores personalizados y tambien ignora a los numeros mayores a 1000', () =>{
            cy.visit("/");
            cy.get('#string').clear().type('//[*][+]1*4*5000+78');
            cy.get("#calc-form").submit();
            cy.get("#resultado").should("contain","83");
        });
});