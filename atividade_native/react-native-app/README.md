# React Native App

This is a basic React Native application that demonstrates the use of components such as View, Text, TextInput, and Button. The application is structured to promote reusability and maintainability through the use of separate component files.

## Project Structure

```
react-native-app
├── app
│   ├── components
│   │   ├── ButtonComponent.tsx
│   │   ├── InputComponent.tsx
│   │   └── TextComponent.tsx
│   ├── index.tsx
│   └── styles
│       └── AppStyles.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Components

- **ButtonComponent**: A reusable button component that accepts `title` and `onPress` props to handle button clicks.
- **InputComponent**: A reusable text input component that accepts `placeholder` and `onChangeText` props to manage input changes.
- **TextComponent**: A reusable text component that accepts `content` prop to display text.

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
npm install
```

## Running the Application

To run the application, use the following command:

```bash
npm start
```

This will start the Metro bundler and you can then run the app on your preferred simulator or device.

## License

This project is licensed under the MIT License.