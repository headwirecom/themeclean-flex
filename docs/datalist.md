# Datalist Implementation

TODO: Add a quickstart guide to get a simple form and datalist up and running

### Datalist Component Configuration

#### Datalist Data Retrieval 
If a endpoint URL is indicated, then the datalist will do an axios GET request with the table data to this URL. 

The endpoint should return a list of objects.
ex.

    [{
        "firstName": "Kyle",
        "lastName": "Watson"
    },{
        "firstName": "Shane",
        "lastName": "Mcgrath"
    },{
        "firstName": "Ben",
        "lastName": "Kahn"
    }]

#### Javascript Function to Get Data
Instead of the default GET endpoint behaviour, the user can configure a custom function to be called instead. This function can be part of any object as long as it can be accessed through the javascript window object.

#### Table Configuration
Add columns with any header value with the data value being a property in the objects returned by the endpoint/local storage.
ex. Column Header: First Name, data value: firstName

#### Striped Rows

Adjusts colors of every other row in the table.

#### Dense Table

Lowers the spacing of the table cells.

#### Scrollable Table

Allows user to scroll through table results. Can adjust the height of the container and make the headers stick to the top of table when scrolling or not.

#### Selectable Table

Allows user to select table rows and perform actions on the rows selected.
