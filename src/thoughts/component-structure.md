- ShopPage

  - ShopHeader
  - ProductList
    - ProductCard
      - ProductImage
      - ProductInfo
        - ProductTitle
        - ProductPrice
        - AddToCartButton

- ProductDetailsPage

  - ProductDetailsHeader
  - ProductDetailsContent
    - ProductImageGallery
    - ProductDescription
    - ProductPrice
    - SizeOptions
    - AddToCartButton

- CartPage
  - CartHeader
  - CartContent
    - CartItemList
      - CartItem
        - ProductImage
        - ProductInfo
          - ProductTitle
          - ProductPrice
          - QuantityAdjustment
          - RemoveButton
    - CartSummary
      - Subtotal
      - ShippingCost
      - Total
    - CheckoutButton

This structure represents the main components for each page:

- `ShopPage`: Displays a list of products available for sale.
- `ProductDetailsPage`: Displays detailed information about a specific product.
- `CartPage`: Displays the contents of the shopping cart.

Each page is divided into smaller components for better organization and reusability. For example:

- `ShopHeader`, `ProductDetailsHeader`, `CartHeader`: Headers for each page.
- `ProductList`: A list of products displayed on the shop page.
- `ProductCard`: A card component representing an individual product in the product list.
- `ProductImage`, `ProductInfo`: Components displaying specific information about a product.
- `CartItemList`: A list of items in the shopping cart.
- `CartItem`: A component representing an individual item in the shopping cart.
- `CartSummary`: Displays a summary of the items in the shopping cart, including subtotal, shipping cost, and total.
- `CheckoutButton`: A button component to proceed to checkout from the cart page.

This component structure provides a clear separation of concerns and makes it easier to manage and maintain the codebase as your application grows. Additionally, it allows for better reusability of components across different pages and sections of your webshop.
