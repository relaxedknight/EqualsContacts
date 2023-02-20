# Equals Contacts

## Tech
* Node (v19.6.1)
* NextJs
* Typescript
* React
* Vanilla Extract
* Jest
* Cypress

## Setup

You can setup the project following the steps below

1. Clone the repo - `git clone git@github.com:relaxedknight/EqualsContacts.git`
2. Install modules - `yarn` or `npm i`

The project is now setup locally & ready for development & production building

## Development

You can run the project in development mode by following the steps below

1. Execute `yarn dev` or `npm run dev`
2. The project can now be viewed at `http://localhost:3000/`

## Testing

### Unit

You can run the projects unit tests by executing `yarn test:unit` or `npm run test:unit`

### End-to-End

You can run the projects e2e tests by following the steps below

1. Execute the above `development` or `production` steps
2. In a seperate terminal execute within the project folder execute `yarn test:e2e` or `npm run test:e2e`

## Production

You can build the production version by executing `yarn build` or `npm run build`

You can then view it by executing `yarn start` or `npm run start`, it'll be available at `http://localhost:3000`

## Filter Analysis

### Quadratic time - O(N²)

The resulting filter has an overall time complexity of O(N²).

This is due to the 2 step process the contacts filter follows

1. Loops all of the contacts - O(N)
2. Loops each value of the current contact - O(N)

Multiplying the overall "amount of loops" ocurring by the number of values a contact has

* if we have 1 contact = 7 loops
* if we have 10 contacts = 70 loops
* if we have 100 contacts = 700 loops

### Data Structure

* Each **createdAt** is formatted as `{day}/{month}/{year} {hour}:{minute}`
  * 1 contact = 1 conversion
  * 10 contacts = 10 conversions
  * 100 contacts = 100 conversions

  #### Takeaway
    * Could have been actioned when setting a contact into the store (`ISO` > `formattedString`)
    * Reverted when sending the contact in the `POST` request (`formattedString` > `ISO`) removing the need to convert

* Each **Date of Birth** is formatted as `{day}/{month}/{year}`
  * 1 contact = 1 conversion
  * 10 contacts = 10 conversions
  * 100 contacts = 100 conversions

  #### Takeaway
    * This could have been actioned when setting a contact into the store (`ISO` > `formattedString`)
    * Reverted when sending the contact in the POST request (`formattedString` > `ISO`) removing the need to convert

* Each **Phone number** is formatted as `123-456-1234`
  * 1 contact = 1 conversion
  * 10 contacts = 10 conversions
  * 100 contacts = 100 conversions

  #### Takeaway
    * Better to validate the contact being created to fit a standard format instead of formatting the contact when required. Doing so would reduce the filter time complexity
