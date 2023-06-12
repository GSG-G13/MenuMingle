# Menu Mingle <img src='./img/chef.png' style='height:30px'>
our app allows clients to track restaurant orders. It provides an intuitive interface for placing orders, tracking their status, and managing the restaurant's menu.
## Table of Contents
- [Introduction](#Menu)
- [Features](#features)
- [ UserStory ](#User)
- [Database Schema](#Database)
- [Technologies Used](#Technologies)
- [Demo](#Demo)
- [Figma Design](#Figma)
- [Contributing](#contributing)
- [Acknowledgements](#Acknowledgements)
# Features 
- User registration and authentication for the staff.
- Menu management for the restaurant.
- Order placement by customers.
- Real-time order tracking.
- Notification system for order updates.
- Admin dashboard for managing orders and menus.
- supports English and Arabic language.
# User Story
- We should include a complimentary tool in our software package for printing QR codes specifically designed for restaurants. The process begins with the user opening their camera program or QR scanner app to scan the QR code attached to each table. Upon scanning the QR code, the menu page will be displayed, featuring the name, ingredients, and price of each menu item. Each item should include a quantity counter, allowing the user to add or remove items as desired.

- Once the user clicks the order button, a confirmation popup will appear, showing the details of each selected item and its corresponding quantity. The user can then confirm the transaction. After submitting the orders, the cashier will receive the requests and approve them. Additionally, the system can include a feature for rejecting orders if needed.

- Upon approval, the requests will be forwarded to the kitchen page. In the kitchen, staff members can change the state of each request from "pending" to "being prepared" and finally "done." If the kitchen marks an order as "done," it will be returned to the cashier page. The cashier will then send a request to the customer, prompting them to come and pay for their order.

- Once the user submits the order, they will be directed to the waiting room. The order status will change dynamically based on updates from the cashier and kitchen. If the user wishes to do so, they can click on the "Review the Service" button to provide feedback on their experience.

- Furthermore, the owner will have the ability to add new items to the menu, edit existing menu items, and delete items from the menu. They will also have access to view the feedback collected from users, providing valuable insights about the restaurant's performance.

### Wishlist features <img src=./img/wishlist.png style='height:30px'>
- Payment integration.
- Reporting and analytics.

# Database Schema <img src=./img/ux.png style='height:30px'>
 <img src='./img/schema.png' >

# Technologies Used
#### Front-end: <img src=./img/ui.png style='height:30px'>
- HTML, CSS, JavaScript
- React.js 
- Material UI
- WebSockets (for real-time updates)
#### Back-end:  <img src=./img/backend.png style='height:30px'>
- Node.js
- Express.js 
- PostgresSQL with sequelize
- Socket.io (for real-time updates)
- JWT (JSON Web Tokens) for authentication
#### Deployment: <img src=./img/shuttle.png style='height:20px'>
- RDS
- EC2

# Demo 🔥
You can check out a live demo of the application <a href='#'>here</a>.

# Figma Design <img src=./img/figma.png style='height:20px'>
#### customer :

<img src=./img/SplashScreen.png style='height:100px'> <img src=./img/menu.png style='height:100px'> <img src=./img/emptycart.png style='height:100px'> <img src=./img/cart.png style='height:100px'> <img src=./img/pending.png style='height:100px'>
<img src=./img/done.png style='height:100px'> <img src=./img/done2.png style='height:100px'>

#### staff :
<img src=./img/signup1.png style='height:100px'>  <img src=./img/login.png style='height:100px'>

<img src=./img/dashboard.png style='height:100px'> <img src=./img/Kitchen.png style='height:100px'>

# Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

# coders 💻
#### team:
- Farah Alhalim
- Momen Algaga
- Momen Qudaih

#### team leader
- Mustafa Salem 
##### If you have any questions or need further assistance, please feel free to contact us.

# Acknowledgements
We would like to express our heartfelt appreciation to Gaza Sky Geeks for their unwavering commitment to building a brighter future for Gaza and its people. Thank you, GSG, for your dedicated efforts and tireless work in the Code Academy. It has been an absolute honor to be part of this remarkable community and collaborate with such talented individuals.





