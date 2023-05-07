# ai_summarizer

## \***\*Article 요약 프로그램\*\***

### vite로 시작하기

```bash
npm create vite@latest
```

- React + Typescript

### tailwind css 사용하기 with vite

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- tailwind.config.js

```jsx
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- in App.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### eslint, prettier 설정

1. vscode extension 설치
   1. eslint
   2. prettier
2. npm i -D 를 통해 다음의 패키지들 설치

```bash
eslint
eslint-config-airbnb
eslint-config-prettier
eslint-plugin-import
eslint-plugin-jsx-a11y
eslint-plugin-prettier
eslint-plugin-react
eslint-plugin-react-hooks

@typescript-eslint/eslint-plugin
@typescript-eslint/parser

vite-tsconfig-paths
```

3. vite.config.ts 에서 다음과 같이 설정

```tsx
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
});
```

4. eslintrc.js 파일 설정

```jsx
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    es2021: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'on',
    '@typescript-eslint/explicit-function-return-type': 'on',
    '@typescript-eslint/explicit-module-boundary-types': 'on',
    '@typescript-eslint/no-explicit-any': 'on',
  },
};
```

5. prettierrc 파일설정

```jsx
{
  "singleQuote": true,
  "trailingComma": "all",
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "arrowParens": "always"
}
```

6. vscode - default formatter ⇒ prettier Code Formatter 설정
7. vscode - format on Save 설정
8. vscode - tabsize : 2 설정

### 사용한 api

[https://rapidapi.com/restyler/api/article-extractor-and-summarizer](https://rapidapi.com/restyler/api/article-extractor-and-summarizer)
