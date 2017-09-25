# modal-app-production

***Front End Engineering Assignment - Modal A/B Test***

This application is a sample implementation of a modal styled with the Software Advice color palette and typography. The following are requirements and how they were implemented.

***1. Build a page with a button***

* The 'Open Modal' Button will open a modal and log an object {session_id: [current_timestamp]} to the browser console
* On app initialization, the modal variation (variation_a || variation_b) will be stored in localStorage using a random number generator to determine which variation to show
* This variation will persist unless the 'Reset' button is clicked, which will clear localStorage and refresh the page

***2. Please style page with Software Advice typography and color palette***

* Styling is based on styles computed on softwareadvice.com page source

***3. Both modal dialogs will need to contain a form that captures information about the user***

* Form will contain user inputs as specified in the requirements
* Forms differ only in presentation of form image, based on variation determined at initialization

***4. Add event listener on any one input field***

* The 'Select a state' input field is a dropdown that will log the value of the selected US state on change

***5. Add form validation to any one input field***

* The 'Name' textfield is a required field and will show a red box-shadow if the user tries to submit the form and the field is still empty.
* If form validation fails, show error message

***6. When the ‘Submit’ button is clicked, please prevent the form from submitting and create a json object that contains the form input fields as well as the layout variation, and log the json object to the browser console***

* If form validation succeeds, log disable default browser form submit event and log desired object to browser console
