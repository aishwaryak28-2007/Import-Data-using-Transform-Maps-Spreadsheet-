# Import Data using Transform Maps (Spreadsheet)

## Project Description

This project demonstrates how to import spreadsheet data into ServiceNow
using Import Sets and Transform Maps.

## Objective

The objective of this project is to import user data from a CSV spreadsheet
and transform the data into the required ServiceNow target table.

## Technologies Used

- ServiceNow
- Import Sets
- Transform Maps
- CSV Spreadsheet
- JavaScript

## Source Spreadsheet

The CSV file contains the following fields:

- User Name
- Email
- Department
- Phone

## Sample Data

| User Name | Email | Department | Phone |
|---|---|---|---|
| Aishwarya | aishwarya@gmail.com | IT | 9876543210 |
| Priya | priya@gmail.com | HR | 9876543211 |
| Rahul | rahul@gmail.com | Finance | 9876543212 |
| Kavin | kavin@gmail.com | IT | 9876543213 |
| Divya | divya@gmail.com | Sales | 9876543214 |

## Import Process

1. Prepare the CSV spreadsheet.
2. Open ServiceNow.
3. Navigate to Import Sets.
4. Upload the CSV file.
5. Create an Import Set.
6. Create a Transform Map.
7. Select the source and target tables.
8. Map the source fields with target fields.
9. Run the Transform.
10. Verify the imported records.

## Field Mapping

| Source Field | Target Field |
|---|---|
| User Name | Name |
| Email | Email |
| Department | Department |
| Phone | Phone |

## Transform Script

```javascript
(function runTransformScript(source, map, log, target) {

    if (!source.email) {
        ignore = true;
        log.info("Record skipped because Email is empty");
    }

})(source, map, log, target);
