const { elements } = require("../../fixtures/pageobject/amazon");

describe('Amazon', function () {
  let productN;
  let productP;
  let formattedPrice;

  function formatNumberToTwoDecimals(priceStr) {
    // Remove any commas from the string
    const priceWithoutComma = priceStr.replace(/,/g, '');
    
    // Parse it to a number and format it to two decimal places
    const formattedPrice = parseFloat(priceWithoutComma).toFixed(2);
    
    // Insert comma back if needed (this step is optional depending on your needs)
    const parts = formattedPrice.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }
  before(function () {
    // Load fixture data
    cy.fixture('example').then((data) => {
      this.data = data;
    });
  });
  it('My Cart', function () {
    cy.viewport("macbook-15");
    cy.visit('/');

    cy.get(elements.SearchTextbox).type(this.data.searchQuery);
    cy.get(elements.SearchButton).click();

    cy.get(elements.SearchDropdown).click();
    cy.get(elements.SearchDropdown2).click();

    // Extract the product name and store it in a variable
    cy.get(elements.SRPProductName)
      .eq(2)
      .invoke('text')
      .then((productName) => {
        productN = productName.trim();
        // Print the extracted product name to the console
        cy.log('Extracted Product Name:', productN);
        expect(productN).to.not.be.empty; // Sample assertion
      });

    // Extract the product price and store it in a variable
    cy.get(elements.SRPProductPrice)
      .eq(2)
      .invoke('text')
      .then((productPrice) => {
        productP = productPrice.trim();
        formattedPrice = formatNumberToTwoDecimals(productP);
        // Print the extracted product price to the console
        cy.log('Extracted Product Price:', formattedPrice);
        expect(productP).to.not.be.empty; // Sample assertion
      });

    cy.wait(1000);
    cy.get(elements.AddToCartBtn).eq(2).click()
    cy.get(elements.GoToCartBtn).click();

    // Compare product name in SRP and Cart
    cy.get(elements.CartProductName)
      .invoke('text')
      .then((productName1) => {
        // Print the extracted product name in cart
        cy.log('Extracted Product Name in Cart:', productName1);
        expect(productName1.trim()).to.equal(productN); // Compare with PLP product name
      });

    // Compare product price in SRP and Cart
    cy.get(elements.CartProductPrice)
      .invoke('text')
      .then((productPrice1) => {
        // Print the extracted product price in cart
        cy.log('Extracted Product Price in Cart:', productPrice1);
        expect(productPrice1.trim()).to.equal(formattedPrice); // Compare with PLP product price
      });
  });
});