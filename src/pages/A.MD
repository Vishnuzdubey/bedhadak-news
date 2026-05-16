# Re'equil E-Commerce — Complete API Endpoints
# Base URL: https://api.yourapp.com/v1
# Auth: Bearer JWT token in Authorization header
# Admin routes: require Role = ADMIN or SUPER_ADMIN

========================================================
  AUTH
========================================================

POST   /auth/register                  # Register with email+password
POST   /auth/login                     # Login → returns access + refresh token
POST   /auth/login/otp/send            # Send OTP to phone
POST   /auth/login/otp/verify          # Verify OTP → returns tokens
POST   /auth/google                    # OAuth Google → returns tokens
POST   /auth/refresh                   # Refresh access token
POST   /auth/logout                    # Invalidate session
POST   /auth/forgot-password           # Send reset email
POST   /auth/reset-password            # Reset password with token
POST   /auth/verify-email              # Verify email with token
GET    /auth/me                        # Get current user profile [AUTH]

========================================================
  USER / PROFILE
========================================================

GET    /user/profile                   # Get profile [AUTH]
PUT    /user/profile                   # Update name, gender, DOB, avatar [AUTH]
PUT    /user/change-password           # Change password [AUTH]
PUT    /user/skin-profile              # Save/update skin type + concerns [AUTH]
GET    /user/skin-profile              # Get skin profile [AUTH]

## Addresses
GET    /user/addresses                 # List all saved addresses [AUTH]
POST   /user/addresses                 # Add new address [AUTH]
PUT    /user/addresses/:id             # Update address [AUTH]
DELETE /user/addresses/:id             # Delete address [AUTH]
PATCH  /user/addresses/:id/default    # Set as default address [AUTH]

## Notifications
GET    /user/notifications             # List notifications [AUTH]
PATCH  /user/notifications/read-all   # Mark all as read [AUTH]
PATCH  /user/notifications/:id/read   # Mark single as read [AUTH]

========================================================
  CATEGORIES
========================================================

GET    /categories                     # List all root categories
GET    /categories/tree                # Full nested category tree
GET    /categories/:slug               # Get single category + children
GET    /categories/:slug/products      # Products in category (paginated)

## Admin
POST   /admin/categories               # Create category [ADMIN]
PUT    /admin/categories/:id           # Update category [ADMIN]
DELETE /admin/categories/:id           # Delete category [ADMIN]
PATCH  /admin/categories/:id/toggle    # Toggle active [ADMIN]
PUT    /admin/categories/reorder       # Reorder sort positions [ADMIN]

========================================================
  CONCERNS (Skin / Hair concerns)
========================================================

GET    /concerns                       # List all concerns
GET    /concerns/:slug/products        # Products for a concern (paginated)

## Admin
POST   /admin/concerns                 # Create concern [ADMIN]
PUT    /admin/concerns/:id             # Update concern [ADMIN]
DELETE /admin/concerns/:id             # Delete concern [ADMIN]

========================================================
  PRODUCTS
========================================================

GET    /products                       # List products
  ?page=1&limit=20
  ?category=face-wash
  ?concern=acne
  ?skinType=oily,dry
  ?minPrice=100&maxPrice=1000
  ?sort=price_asc|price_desc|rating|newest|bestseller
  ?search=retinol
  ?featured=true
  ?inStock=true
  ?tags=summer,spf

GET    /products/:slug                 # Product detail (with variants, images, reviews)
GET    /products/:slug/related         # Related products
GET    /products/search                # Search (autocomplete) ?q=vitamin

## Admin
POST   /admin/products                 # Create product [ADMIN]
PUT    /admin/products/:id             # Update product [ADMIN]
DELETE /admin/products/:id             # Delete product [ADMIN]
PATCH  /admin/products/:id/toggle      # Toggle active [ADMIN]

## Variants
POST   /admin/products/:id/variants    # Add variant [ADMIN]
PUT    /admin/variants/:id             # Update variant [ADMIN]
DELETE /admin/variants/:id             # Delete variant [ADMIN]

## Images
POST   /admin/products/:id/images      # Upload image(s) [ADMIN]
DELETE /admin/product-images/:id       # Delete image [ADMIN]
PUT    /admin/products/:id/images/reorder # Reorder images [ADMIN]

## Bundles
POST   /admin/products/:id/bundle-items  # Add items to bundle [ADMIN]
DELETE /admin/bundle-items/:id           # Remove item from bundle [ADMIN]

========================================================
  INVENTORY
========================================================

GET    /admin/inventory                # List all variants with stock [ADMIN]
  ?lowStock=true
  ?outOfStock=true
PATCH  /admin/inventory/:variantId     # Adjust stock quantity [ADMIN]
GET    /admin/inventory/:variantId/logs # Inventory log for variant [ADMIN]

========================================================
  CART
========================================================

GET    /cart                           # Get cart with items + pricing [AUTH]
POST   /cart/items                     # Add item { variantId, qty } [AUTH]
PUT    /cart/items/:cartItemId         # Update quantity [AUTH]
DELETE /cart/items/:cartItemId         # Remove item [AUTH]
DELETE /cart/clear                     # Clear all cart items [AUTH]
POST   /cart/coupon                    # Apply coupon { code } [AUTH]
DELETE /cart/coupon                    # Remove coupon [AUTH]
GET    /cart/summary                   # Price breakdown (subtotal, discount, shipping, total) [AUTH]

========================================================
  WISHLIST
========================================================

GET    /wishlist                       # Get wishlist items [AUTH]
POST   /wishlist                       # Add product { productId } [AUTH]
DELETE /wishlist/:productId            # Remove from wishlist [AUTH]
POST   /wishlist/move-to-cart          # Move item to cart { productId, variantId } [AUTH]

========================================================
  CHECKOUT
========================================================

POST   /checkout/validate              # Validate cart before payment [AUTH]
  # Returns: stock status, price verification, coupon validity, address check

POST   /checkout/initiate              # Create order + init payment [AUTH]
  Body: {
    addressId, paymentMethod,
    couponCode?, rewardPointsToUse?,
    notes?
  }
  Returns: { orderId, paymentGatewayData }

POST   /checkout/verify-payment        # Verify gateway callback [AUTH]
  Body: { orderId, gatewayOrderId, gatewayPaymentId, gatewaySignature }

POST   /checkout/cod                   # Place COD order [AUTH]

========================================================
  ORDERS
========================================================

GET    /orders                         # List user orders (paginated) [AUTH]
  ?status=DELIVERED
  ?page=1&limit=10
GET    /orders/:id                     # Order detail [AUTH]
GET    /orders/:id/track               # Tracking info + timeline [AUTH]
POST   /orders/:id/cancel              # Cancel order [AUTH]
POST   /orders/:id/return              # Raise return request [AUTH]
  Body: { reason, description, imageUrls[] }

## Admin
GET    /admin/orders                   # List all orders [ADMIN]
  ?status=PENDING
  ?search=orderNumber|email|phone
  ?dateFrom=2026-01-01&dateTo=2026-12-31
GET    /admin/orders/:id               # Order detail [ADMIN]
PUT    /admin/orders/:id/status        # Update status [ADMIN]
PUT    /admin/orders/:id/shipping      # Add tracking info [ADMIN]
GET    /admin/orders/:id/return        # Return request detail [ADMIN]
PATCH  /admin/orders/:id/return        # Approve/reject return [ADMIN]

========================================================
  PAYMENTS
========================================================

POST   /payments/razorpay/webhook      # Razorpay webhook handler
POST   /payments/refund/:orderId       # Initiate refund [ADMIN]
GET    /admin/payments                 # List all payments [ADMIN]
GET    /admin/payments/:orderId        # Payment detail [ADMIN]

========================================================
  COUPONS & OFFERS
========================================================

POST   /coupons/validate               # Validate a coupon code [AUTH]
  Body: { code, cartAmount }

## Admin
GET    /admin/coupons                  # List all coupons [ADMIN]
POST   /admin/coupons                  # Create coupon [ADMIN]
PUT    /admin/coupons/:id              # Update coupon [ADMIN]
DELETE /admin/coupons/:id              # Delete coupon [ADMIN]
PATCH  /admin/coupons/:id/toggle       # Enable/disable [ADMIN]
GET    /admin/coupons/:id/usages       # Usage history [ADMIN]

GET    /admin/offers                   # List all offers [ADMIN]
POST   /admin/offers                   # Create offer [ADMIN]
PUT    /admin/offers/:id               # Update offer [ADMIN]
DELETE /admin/offers/:id               # Delete offer [ADMIN]
PATCH  /admin/offers/:id/toggle        # Enable/disable [ADMIN]

GET    /offers/active                  # Active offers for storefront

========================================================
  REWARDS
========================================================

GET    /rewards                        # Get reward account + balance + tier [AUTH]
GET    /rewards/transactions           # Reward transaction history [AUTH]
  ?page=1&limit=20
  ?type=EARNED|REDEEMED

## Admin
GET    /admin/rewards/rules            # Reward earning rules [ADMIN]
POST   /admin/rewards/rules            # Create rule [ADMIN]
PUT    /admin/rewards/rules/:id        # Update rule [ADMIN]
DELETE /admin/rewards/rules/:id        # Delete rule [ADMIN]
GET    /admin/rewards/config           # Redemption config [ADMIN]
PUT    /admin/rewards/config           # Update redemption config [ADMIN]
POST   /admin/rewards/manual-credit    # Manually credit points to user [ADMIN]

========================================================
  REVIEWS
========================================================

GET    /products/:slug/reviews         # Paginated reviews for a product
  ?rating=5
  ?sort=recent|helpful
  ?verified=true
  ?page=1&limit=10
GET    /products/:slug/reviews/summary # Rating breakdown (1★-5★ counts)

POST   /reviews                        # Submit review [AUTH]
  Body: { productId, orderId, rating, title, body, imageUrls[] }
PUT    /reviews/:id                    # Edit own review [AUTH]
DELETE /reviews/:id                    # Delete own review [AUTH]
POST   /reviews/:id/helpful            # Mark review helpful [AUTH]

## Admin
GET    /admin/reviews                  # All reviews [ADMIN]
  ?status=PENDING|APPROVED|REJECTED
PATCH  /admin/reviews/:id/approve      # Approve review [ADMIN]
PATCH  /admin/reviews/:id/reject       # Reject review [ADMIN]

========================================================
  BANNERS / CMS
========================================================

GET    /banners                        # All active banners for storefront
  ?placement=home_hero

## Admin
POST   /admin/banners                  # Create banner [ADMIN]
PUT    /admin/banners/:id              # Update banner [ADMIN]
DELETE /admin/banners/:id              # Delete banner [ADMIN]
PUT    /admin/banners/reorder          # Reorder banners [ADMIN]

========================================================
  NEWSLETTER
========================================================

POST   /newsletter/subscribe           # Subscribe { email }
POST   /newsletter/unsubscribe         # Unsubscribe { email }

## Admin
GET    /admin/newsletter               # List subscribers [ADMIN]
POST   /admin/newsletter/export        # Export CSV [ADMIN]

========================================================
  SHIPPING & TAX CONFIG
========================================================

GET    /shipping/config                # Get current shipping config
GET    /shipping/check                 # Check if free shipping applies { amount }

## Admin
PUT    /admin/shipping/config          # Update shipping config [ADMIN]
GET    /admin/tax                      # List tax configs [ADMIN]
POST   /admin/tax                      # Create tax config [ADMIN]
PUT    /admin/tax/:id                  # Update [ADMIN]

========================================================
  ANALYTICS / DASHBOARD
========================================================

GET    /admin/dashboard/stats          # Total orders, revenue, users today [ADMIN]
GET    /admin/dashboard/revenue        # Revenue chart { period: day|week|month } [ADMIN]
GET    /admin/dashboard/top-products   # Top selling products [ADMIN]
GET    /admin/dashboard/top-categories # Top categories by revenue [ADMIN]
GET    /admin/dashboard/low-stock      # Low stock alerts [ADMIN]
GET    /admin/users                    # All users [ADMIN]
GET    /admin/users/:id                # User detail + orders + rewards [ADMIN]
PATCH  /admin/users/:id/toggle         # Block/unblock user [ADMIN]

========================================================
  SEARCH
========================================================

GET    /search?q=retinol               # Global search (products, categories, concerns)
GET    /search/suggestions?q=ret       # Autocomplete suggestions

========================================================
  MISC / UTILITY
========================================================

GET    /pincode/:pin                   # Check deliverability for a pincode
GET    /health                         # Health check

========================================================
  PAYLOAD EXAMPLES
========================================================

--- POST /auth/register ---
{
  "firstName": "Priya",
  "lastName": "Sharma",
  "email": "priya@example.com",
  "phone": "9876543210",
  "password": "Secret@123",
  "referralCode": "FRIEND123"   // optional
}

--- POST /cart/items ---
{
  "variantId": "clv_abc123",
  "quantity": 2
}

--- POST /checkout/initiate ---
{
  "addressId": "addr_xyz",
  "paymentMethod": "UPI",
  "couponCode": "SUMMER25",
  "rewardPointsToUse": 500,
  "notes": "Please pack carefully"
}

--- POST /reviews ---
{
  "productId": "prod_abc",
  "orderId": "ord_xyz",
  "rating": 5,
  "title": "Best sunscreen ever!",
  "body": "No white cast, absorbs fast.",
  "imageUrls": ["https://..."]
}

--- POST /admin/coupons ---
{
  "code": "WELCOME10",
  "description": "10% off for new users",
  "discountType": "PERCENTAGE",
  "discountValue": 10,
  "minOrderAmount": 299,
  "maxDiscountAmount": 100,
  "usageLimitPerUser": 1,
  "isFirstOrder": true,
  "endDate": "2026-12-31T23:59:59Z"
}

--- POST /admin/rewards/rules ---
{
  "name": "Purchase Reward",
  "trigger": "purchase",
  "pointsPerUnit": 1,
  "unitAmount": 1,
  "minOrderAmount": 199
}

========================================================
  HTTP STATUS CODE CONVENTIONS
========================================================

200  OK                  - Successful GET / PUT / PATCH
201  Created             - Successful POST (resource created)
204  No Content          - Successful DELETE
400  Bad Request         - Validation error
401  Unauthorized        - Missing or invalid token
403  Forbidden           - Insufficient role
404  Not Found           - Resource not found
409  Conflict            - Duplicate (email, coupon code, etc.)
422  Unprocessable       - Business logic error (out of stock, coupon expired)
429  Too Many Requests   - Rate limited
500  Internal Error      - Server error

Error response shape:
{
  "success": false,
  "message": "Human readable error",
  "code": "COUPON_EXPIRED",
  "errors": [ ... ]   // validation errors array
}

Success response shape:
{
  "success": true,
  "data": { ... },
  "meta": {            // for paginated lists
    "page": 1,
    "limit": 20,
    "total": 245,
    "totalPages": 13
  }
}