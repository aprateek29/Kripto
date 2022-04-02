# Kripto

Check the live version here.
https://kripto29.netlify.app/

Kripto is an app build with React JS. It checks every cryptocurrency for price
changes. With the real-time search options this app gives the user awesome UI feel.

* **ES modules** and **history api** support.
* **Styled Components** for styling.
* **Material UI** for ui components.
* **Axios** for fetch requests.

## About CoinGecko

CoinGecko was founded in 2014 by TM Lee (CEO) and Bobby Ong (COO) with the mission to democratize the access of crypto data and empower users with actionable insights. We also deep dive into the crypto space to deliver valuable insights to our users through our cryptocurrency reports, as well as our publications, newsletter and more.

## Usage

### JS Applications

This is a Create-React-App Project. You can install the dependencies and run the app.

<details><summary><b>Show instructions</b></summary>

1. Install the dependencies:

    ```sh
    $ npm install 
    ```

2. Run the app in the browser.

    ```diff
    $ npm start
    ```

3. Open localhost:3000 in the browser

</details>


## Dependencies

* `@emotion/react` : "^11.7.1"  Simple styling in React
* `@emotion/styled` : "^11.6.0"  The styled API for @emotion/react
* `@mui/icons-material` : "^5.3.1"  MUI icons
* `@mui/material` : "^5.3.1"  MUI provides a robust, customizable, and accessible library of foundational and advanced components,
* `@testing-library/jest-dom` : "^5.16.1" For unit testing
* `@testing-library/react` : "^12.1.2"
* `@testing-library/user-event` : "^13.5.0"
* `axios` : "^0.25.0"  Promise based HTTP client for the browser and node.js
* `react` : "^17.0.2",
* `react-dom` : "^17.0.2",
* `react-scripts` : "5.0.0",
* `web-vitals` : "^2.1.4"

[`dual-publish`]: https://github.com/aprateek29/Kripto/


## JS API

```js
axios
    .get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
    )
    .then(res => {
      setCoins(res.data);
      console.log(res.data);
    })
    .catch(error => console.log(error));
```
