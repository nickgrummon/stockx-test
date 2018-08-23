To run tests:
    Download and install node.js and npm
    Clone stockx-test repo
    navigate to stockx-test repo in a terminal and run 'npm install'
    run 'npm run test'

Test plan bid:
    End to end tests for UI testing:
    (A letter indicates a user flow fork. A number indicates the end goal of a test within the suite for testing bid functionality.)

        Given that a user has navigated to /buy/their-desired-item

        A. If the user is not signed in, show them the how it works page.

        B. if the user is signed in:

            When the user selects a size from the lowest ask grid

            Then the option to bid or buy should be displayed

            When the user inputs a bid and clicks the next button

                A. Then if the user is not signed in, display interface for auth.
                    1. When the user either signs up or logs in show payment options.


                B. Then if the user is signed in then payment options should be displayed.

                    A. If the user clicks credit card button, display credit card info form. 
                        When user inputs credit card and shipping information, and clicks next
                        2. Then a request is made to validate the credit card info and the user lands on a confirm bid screen (I'm assuming, I don't really want to buy shoes so this is as far as I go in the flow for this demo.)
                    B. If the user clicks paypal button, launch PayPal auth
                        When a user successfully auths with paypal
                        3. Then the user is lands on a confirm bid screen (again, I don't want shoes so this is as far as the test plan will go. I would normally look at a product spec to decide where the test should end.)
                    C. If the user clicks affirm button, dispay Affirm checkout as selected and initiate shipping details form.
                        When a user inputs their shipping info
                        4. Then the user should land on Affirm's website so they can get a loan. (Although it'd be better if they went to RocketLoans.com instead 8-) )

    Rest API testing for requests made for bid:
    1. Validate that user must be signed in to make a bid
    2. Validate that a user with full credit card and shipping info gets the correct response
    3. Validate that paypal auth can be used to place a bid (use token to make a request to stockx backend)
    4. Validate that affirm auth can be used to place a bid (use token to make a request to stockx backend)\
