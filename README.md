# code-201-project

[Wire Frame homepage](img/Home Page.png)
[Wire Frame signup](img/Sign Up.png)
[Wire Frame aboutus](img/About Us.png)
[Wire Frame home](img/Home Page.png)
[Wire Frame creator](img/Create Pet.png)
[Wire Frame park](img/Interaction Page.png)

[Domain Modeling](img/domain model.png)

Pets (IRL)
Social platform for pets to interact with other pets.
People like pet pictures and want to interact with them more. Pets increase happiness and emotional wellbeing.
Login page, upload info/details: name, playfulness, fluffiness, snugability, vegetarian/carnivore, etc.
Interaction page to view other puppies.
Stretch goals:
Add other animals,
Rating system
Interact with games

[Software Requirements](img/Software Requirements.pdf)

1-->Login page
2-->User can login to account
3-->Create login form
3-->Create event to validate from local storage (authentication)
3-->Load profile info
4-->Ensure one profile loggedin at a time
4-->Ensure authentication is saved (and attempts limited) and accessible thru local storage
4-->Ensure (all) profile info loads correctly and not mulitple times
1-->Sign up with new account
2-->New users create account with username, email, password, double password confirmation
3-->Create form for inputs
3-->Write new account details into local storage
4-->Ensure no duplicates by way of email/username
4-->Ensure details are saved to local storage
1-->Create pet
2-->New and existing users can create new pet card
3-->Create form with submission button for uploading picture, filling in stats and choosing slider rank
4-->Ensure valid values and image exists
4-->Ensure details saved into local storage
4-->Ensure global Constructor of new card with form details' properties
1-->Interaction
2-->User follows link to interact with other pets at "park". After scripted playtime you will have a new pet in your collection.
3-->Create a button to select a random pet for "playtime" .
3-->Create a randomizer to display dialog between pets.
3-->Store object "pet card" into local storage and display on collection page.
4-->Ensure dialog makes sense between both pets
4-->Ensure after "play time" that new pet card is stored in local storage and under profile as a collected item.
1-->Profile
2-->User views collection of other pets and their own status
3-->Status and data from constructors, images from localstorage, hover on image for other pet status
4-->Ensure new card directed form interaction to the profile
4-->Clicking on pet card allows your own pet to interact with them again
4-->A button to let you play with nearby pet(randomize)
