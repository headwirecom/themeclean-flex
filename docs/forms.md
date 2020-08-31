# Forms Implementation

TODO: Add a quickstart guide to get a simple form and datalist up and running

### Form Component Configuration

#### Form Model
The Form Model takes a Vue Form Generator JSON configuration. For an example and a list of the configuration options for each type of field see the [Vue Form Generator fields documentation](https://vue-generators.gitbook.io/vue-generators/fields)

#### Form Submit Endpoint URL
The form will do an ajax POST with the form data to this URL. If the response is successful, it will forward the user to the configured Submit Success Page.

#### Javascript Function to Call on Submit
Instead of the default POST behaviour, the user can configure a custom function to be called instead. This function can be part of any object as long as it can be accessed through the javascript window object. It will be passed two parameters:
- model - the Vue object model with the component configuration
- formData - an object containing the form data

#### Submit Button Text

Configure the text for the submit button, defaults to "Submit"

#### Failure Message

If there is an error processing the form, this message will be shown in an error box above the form.

#### Submit Success Page

If not empty, on successful form submission it will forward the user to this page.

TODO: Add Datalist component configuration docs

TODO: Cleanup descriptions so its not quite so dry

TODO: Better formatting?