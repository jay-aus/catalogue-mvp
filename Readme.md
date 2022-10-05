# Code Challenge
## Scenario

An entrepreneur has big plans for their idea and have determined that something custom needs to be built. The MVP however, is rather straightforward - a catalogue site.

Customers will search and browse the catalogue and submit an enquiry for products they want. The entrepreneur has done the market research
to validate the opportunity and they are in the process of getting creative work to nail the look and feel but really want to get started on the build. 
They have provided some acceptance criteria for the basic features

The entrepreneur is looking to you to give them a proof of concept that they can interact with to start firming up the vision for their idea. They are not too fussed with the specific product meta data
at this point so using [this DummyAPI](https://fakestoreapi.com/) is acceptable. But they have been down this road before with other developers and have specified 
they don't want a Proof of Concept that needs to be thrown away, they want something they know can grow and evolve with the vision.

## Expectations

1. Make decisions to showcase your strengths
2. Time-box the effort to no more than 2-3 hours
3. Focus on producing the critical path
4. Implement using NodeJS, ReactJS and AWS
5. Do not access the dummyapi directly from the frontend

## Selection Criteria

* Solution Design
* Standard and Quality of the implementation

## Acceptance Criteria
### Home page
```
GIVEN I have chosen 5 products to be "top rated"
 WHEN I am viewing the home page
 THEN I see those 5 featured products
```

### Category Page
```
GIVEN my products are organised into categories
 WHEN I click on a category link
 THEN I see top rated products for that category
  AND I see additional products in that category 
```

### Search
```
GIVEN I am looking for a specific product
  AND I have entered a search term in the search bar
 WHEN I click the search button
 THEN I only see products that have text matching that search term
```

### Product Page
```
GIVEN I am browsing the products
  AND I want to see more details about a specific product
 WHEN I click on a product tile
 THEN I see the product details page
```

### Enquiry
```
GIVEN I am viewing a product
  AND I am interested in a product 
  AND I click on the Enquire button
  AND I complete the subsequent form with my contact details
 WHEN I submit the form
 THEN the sales inbox will receive an email
  AND the customer will see a "Thank you" message
```