module.exports = {
  elements : {
    'SearchTextbox': '#twotabsearchtextbox',
    'SearchButton': '#nav-search-submit-button',
    'SearchDropdown':'.a-dropdown-prompt',
    'SearchDropdown2':'#s-result-sort-select_1',
    //'SRPProductName':'[data-asin="B0DBQB8L1J"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > [data-cy="asin-faceout-container"] > :nth-child(1) > :nth-child(1) > .puisg-col-8-of-16 > :nth-child(1) > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-medium',
    'SRPProductName':'[data-cy="title-recipe"]>h2>a>span',
    //'SRPProductPrice':'[data-asin="B0DBQ88Y4Q"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > [data-cy="asin-faceout-container"] > :nth-child(1) > :nth-child(1) > .puisg-col-8-of-16 > :nth-child(1) > .a-spacing-small > :nth-child(2) > .puisg-col-4-of-20 > .puisg-col-inner > [data-cy="price-recipe"] > .a-color-base > :nth-child(1) > .a-link-normal > [data-a-size="xl"] > [aria-hidden="true"] > .a-price-whole',
    'SRPProductPrice':'[class="a-price-whole"]',
    'CartProductName':'.a-color-base > .a-truncate > .a-truncate-cut',
    'CartProductPrice':'.a-section > .a-size-medium',
    //'AddToCartBtn':'#a-autoid-23-announce',
    'AddToCartBtn':'[data-csa-c-action-name="addToCart"] button',
    'GoToCartBtn':'.a-spacing-base > .a-button > .a-button-inner > .a-button-text'
}
     
}
