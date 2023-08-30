# DOCKER IMPLEMENTATION EXAMPLE

# 1 Clone the Repository:

# 2 Navigate to the Project Directory

# 3 Build and Run with Docker Compose:
docker-compose up --build

Wait for below messages
backend_1   | Server is running on port 5000
frontend_1  |  INFO  Accepting connections at http://localhost:3000

# 4 Access the Application:
After the containers are up and running, the frontend should be accessible at http://localhost:3000 in a web browser, and the backend should be accessible at http://localhost:5000.

# What has been implemented
1. When you go to the home page you would see a list of products predicided based on if it is featured or not
    - You should see a lost of catrgories at the top of the page
    -You should see a search bar on the top right of the page

2. On click of any product you should be able to see the product details along with an Enquiry button

3. On click of any of the catrgories at the top of the page you would see the associated products sorted by the rating (high to low)

4. You can enter a search text in the search bar and you should be able to see if any products matching the search criteria are returned

5. On click of Enquire button on product details page you should see a popup asking for contact information which you can submit
