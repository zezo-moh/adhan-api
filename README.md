# Adhan Prayer Times Website

Welcome to the Adhan Prayer Times Website! This web application allows users to view the prayer times for a selected city using the Adhan API. 

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Information](#api-information)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **City Selection**: Users can select a city from a dropdown to view prayer times.
- **Current Date Display**: Shows the current Gregorian and Hijri date.
- **Prayer Times Display**: Displays the timings for Fajr, Dhuhr, Asr, Maghrib, and Isha.
- **Error Handling**: Graceful error handling for network issues and API errors.

## Technologies Used

- **HTML**: Structure of the web pages.
- **CSS**: Styling of the web pages.
- **JavaScript**: Dynamic content updates and API calls.
- **Axios**: Handling API requests.
- **Adhan API**: Providing accurate prayer times.

## Installation

1. Clone the repository to your local machine:

   ```sh
   git clone https://github.com/zezo-moh/adhan-api.git

2. Navigate to your project directory:

   ```sh
   cd adhan-api

3. Open `*index.html*` in your preferred web browser.

## Usage 

1. Open the website in your browser.
2. Select a city from the dropdown menu.
3. View the current date and prayer times for the selected city.

## API Information

The application uses the Adhan API to fetch accurate prayer times. The API endpoint used is:

```js
https://api.aladhan.com/v1/calendarByCity?city=<CITY>&country=<COUNTRY>&method=<METHOD>
```

## Parameters:
- **city**: The city for which you want to fetch prayer times.
- **country**: The country of the specified city.
- **method**: The method for calculating prayer times.

## Contributing
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`*git checkout -b feature-branch*`)
3. Make your changes.
4. Commit your changes (`*git commit -m 'Add new feature*`).
5. Push to the branch (`*git push origin feature-branch*`).
6. Create a new Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements
- Thanks to [Adhan API](https://aladhan.com/prayer-times-api) for providing the prayer times data.
- Icons made by [Freepik](https://www.freepik.com) from [www.flaticon.com](

