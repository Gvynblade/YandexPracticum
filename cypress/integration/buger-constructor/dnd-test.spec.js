describe('Dragging ingredient and dropping it to constructor working successfully', function() {

    before(function() {
        cy.visit('http://localhost:3000');
    });

    it('should open burger page by default', function() {
        cy.contains('Соберите бургер');
        cy.contains('Пожалуйста, перетащите сюда тип предпочитаемой булки');
    });

    it('ingrredient should grag and drop and ingredient counter should increase', function() {
        cy.get('[class^=ingredients-box_ingredientsBox__]').first().as('ingredientsBox');
        cy.get('[class^=burger-constructor_dropbox__]').first().as('dropBox');
        cy.get('@ingredientsBox').find('[class^=ingredient_ingredient__]').first().as('bun');
        cy.get('@ingredientsBox').find('[class^=ingredient_]').last().as('ingredient');


        cy.get('@bun').drag('@dropBox')
        cy.get('@dropBox').should('contain', 'Краторная булка N-200i (верх)');
        cy.get('@dropBox').should('contain', 'Краторная булка N-200i (низ)');
        cy.get('@bun').find('[class^=ingredient_ingredient__counter__]').first().as('bunCounter');
        cy.get('@bunCounter').should('contain', '2');
        cy.get('@ingredient').drag('@dropBox')
        cy.get('@dropBox').should('contain', 'Сыр с астероидной плесенью');
        cy.get('@ingredientsBox').find('[class^=ingredient_ingredient__counter__]').last().as('ingredientCounter');
        cy.get('@ingredientCounter').should('contain', '1');
        cy.get('@ingredient').drag('@dropBox')
        cy.get('@ingredientCounter').should('contain', '2');
        cy.get('@ingredient').drag('@dropBox')
        cy.get('@ingredientCounter').should('contain', '3');
        cy.get('@ingredient').drag('@dropBox')
        cy.get('@ingredientCounter').should('contain', '4');
    });

});
