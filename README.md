# MMM-DailyBibleVerse

MMM-DailyBibleVerse is a Magic Mirror widget that displays a daily Bible verse.

![MagicMirror² Module Screenshot](assets/MMM-DailyBibleVerse_Pic.png)

## Installation

1. Clone this repository into the `modules` folder of your Magic Mirror:

    ```
    git clone https://github.com/devdugz/MMM-DailyBibleVerse.git
    ```

2. Navigate to the `MMM-DailyBibleVerse` directory:

    ```
    cd MMM-DailyBibleVerse
    ```

3. Install the dependencies:

    ```
    npm install
    ```

## Configuration

To use this module, add it to the `config.js` file of your Magic Mirror. Here is an example configuration:

```js
{
    module: "MMM-DailyBibleVerse",
    position: "top_center", // Choose the position where you want to display the verse
    config: {
        updateInterval: 86400000 // Update interval in milliseconds (default is 24 hours)
    }
}
```

## Styling

The module uses the following CSS class for styling:

```css
.bibleVerse {
  font-size: 32px;
  color: white;
  text-align: center;
  padding: 30px;
  font-style: italic;
  font-weight: bold;
}
```

You can customize the styling by modifying the `MMM-DailyBibleVerse.css` file.

## How It Works

- The module sends a socket notification to fetch a Bible verse when it starts and at the specified update interval.
- The node helper fetches a random Bible verse from the API and sends it back to the module.
- The module displays the fetched Bible verse on the Magic Mirror.

## License

This project is licensed under the MIT License. See the [LICENSE.md] file for details.
