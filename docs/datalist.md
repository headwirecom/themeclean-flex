# Datalist Implementation

### Quickstart
The easiest way to get started with the Datalist is to use the <code>$formsapp</code> javascript connected to a form. This will store data into your local browser storage that will then be displayed in the datalist.

Create a new page and add a Form component. Edit the form to use the following form model:

    {
    "fields": [
      {
      "type": "input",
        "inputType": "text",
        "label": "First Name",
        "model": "firstName",
        "id": "first_name",
        "placeholder": "Your name",
        "featured": true,
        "required": true
      },{
      "type": "input",
        "inputType": "text",
        "label": "Last Name",
        "model": "lastName",
        "id": "last_name",
        "placeholder": "Your name",
        "featured": true,
        "required": true
      }
    ]}

- Endpoint URL: <code>list</code>
- Submit Function: <code>$formsapp.save</code>

Add a Datalist component. You can leave the *endpoint URL*, *load function*, and *delete function* blank. Add two columns
in the *Table Configuration* with the following values:
- Header: **First Name**
- Data Value: **firstName**
- Header: **Last Name**
- Data Value: **lastName**

Now, if you submit a first and last name through the form and refresh the page, your values should show up in the table.
If you edit the Datalist component and turn on *Selectable Table* you will get the option to delete rows from the table.

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
This function will be passed one parameter
- Path - the endpoint URL specified in the configuration

#### Javascript Function to Delete Data
If the table is selectable, the user can configure a custom function to delete data. If the load function is defined, this function must also be defined for table delete action to work correctly. 
The function will be passed three parameters:
- Table Data - the data array currently backing the table
- Active - a boolean array denoting which rows of the table data array are currently selected
- Path - the endpoint URL specified in the configuration

This function is expected to return a new data array with the selected rows removed.

#### Table Configuration
Add columns with any header value with the data value being a property in the objects returned by the endpoint/local storage.
Each column takes three configuration options:
- Header - The name to be displayed in the column header
- Data Value - The data in the backing model to display in this column
- Column Alignment - The horizontal alignment to render text in the cell.

#### Row Alignment
Defines the default row vertical alignment for the table.

#### Striped Rows

Adjusts colors of every other row in the table.

#### Dense Table

Lowers the spacing of the table cells.

#### Scrollable Table

Allows user to scroll through table results. Can adjust the height of the container and make the headers stick to the top of table when scrolling or not.

#### Selectable Table

Allows user to select table rows and perform actions on the rows selected.
