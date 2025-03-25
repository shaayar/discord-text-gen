# Discord Colored Text Generator

## Overview
This project is a **Discord Colored Text Generator** built using **React** and **Mantine UI**. It allows users to input text, select a predefined color format, or define a custom color format compatible with Discord's syntax highlighting.

## Features
- **Live Preview**: Users can see how the text will look inside Discord.
- **Predefined Colors**: Options like `diff`, `css`, `ini`, `json`, `apache`, `arm`, `ml`, `yaml`, `xml`, `bash`, `cpp`, and `python`.
- **Custom Formatting**: Users can define their own Discord-compatible color format.
- **Copy to Clipboard**: Quickly copy the generated Discord-formatted text.
- **Dark/Light Mode Support**: Uses Mantine UI’s `Paper` component for theme switching.

## Installation & Setup
### Prerequisites
Ensure you have **Node.js** and **npm** or **yarn** installed.

### Clone the Repository
```sh
git clone https://github.com/shaayar/discord-text-gen.git
cd discord-text-generator
```

### Install Dependencies
```sh
npm install
# or
yarn install
```

### Run the Application
```sh
npm run dev
# or
yarn dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure
```
📂 discord-text-generator
 ├── 📂 src
 │   ├── 📂 components
 │   │   ├── ColorSelector.jsx
 │   │   ├── CopyButton.jsx
 │   │   ├── OutputDisplay.jsx
 │   │   ├── TextInput.jsx
 │   ├── 📂 utils
 │   │   ├── discordFormatter.js
 │   ├── App.jsx
 │   ├── main.jsx
 ├── package.json
 ├── README.md
```

## Usage
1. **Enter Text** in the input box.
2. **Select a predefined color** or enter a **custom color format**.
3. **View the formatted output** in real-time.
4. **Copy the formatted text** and paste it into Discord.

## Example Formatting
| Color Format | Output |
|-------------|--------|
| `diff` | ```diff\n- Hello World\n``` |
| `css` | ```css\n[Hello World]\n``` |
| `json` | ```json\n{ "text": "Hello World" }\n``` |
| `bash` | ```bash\nHello World\n``` |

## Contribution
Feel free to fork this repository and submit pull requests for improvements.

## License
This project is licensed under the **MIT License**.