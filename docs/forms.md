# Forms Implementation

### Quickstart

Check out the Datalist documentation for a quickstart using a form that saves to your local browser storage and shows the results in a table.

This section will describe setting up a contact form that posts to an external URL.

Create a new page and add the Form - Contact sample component. This component has a form model configured with a first name, last name, email, and text area.

    {
    "fields": [
      {
        "type": "input",
        "inputType": "text",
        "label": "First Name",
        "model": "first_name",
        "id": "first_name",
        "placeholder": "First Name"
      },{
        "type": "input",
        "inputType": "text",
        "label": "Last Name",
        "model": "last_name",
        "id": "last_name",
        "placeholder": "Last Name"
      },{
        "type": "input",
        "inputType": "text",
        "label": "Email",
        "model": "email",
        "id": "email",
        "placeholder": "Email",
        "featured": true,
        "required": true
      },{
        "type": "textArea",
        "label": "Text",
        "model": "text",
        "id": "text",
        "rows": 4,
        "placeholder": "Enter text here",
        "featured": true,
        "required": true
      }
    ]}

Edit the component configuration and update the following:

-   Endpoint URL: _url you would like to post to_
-   Failure Message: "Error processing form"
-   Success Page: _path to page when form submits successfully_

Now the form will attempt to do an AJAX post to the endpoint URL. If you put an invalid URL, you can see that the failure message will show up when the form attempts to submit. If the submission is successful (the POST request gets a 200 OK HTTP status), then peregrine will forward the user to the configured success page.

### Form Javascript Events

#### form-clear

The form component has an event listener for the

### Form Component Configuration

#### Form Model

The Form Model takes a Vue Form Generator JSON configuration. For an example and a list of the configuration options for each type of field see the [Vue Form Generator fields documentation](https://vue-generators.gitbook.io/vue-generators/fields)

Here is an example form with a single field called name:

    {
    "fields": [
      {
      "type": "input",
        "inputType": "text",
        "label": "Name",
        "model": "name",
        "id": "user_name",
        "placeholder": "Your name",
        "featured": true,
        "required": true
      }
    ]}

#### Form Submit Endpoint URL

The form will do an ajax POST with the form data to this URL. If the response is successful, it will forward the user to the configured Submit Success Page.

#### Javascript Function to Call on Submit

Instead of the default POST behaviour, the user can configure a custom function to be called instead. This function can be part of any object as long as it can be accessed through the javascript window object.
It will be passed two parameters:

-   model - the Vue object model with the component configuration
-   formData - an object containing the form data

#### Submit Button Text

Configure the text for the submit button, defaults to "Submit"

#### Failure Message

If there is an error processing the form, this message will be shown in an error box above the form.

#### Submit Success Page

If not empty, on successful form submission it will forward the user to this page.
