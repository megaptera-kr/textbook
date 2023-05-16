# 리액트 프로젝트 세팅하기

세팅 등 파일의 자세한 내용들은 업로드된 파일들 참고.

## 세팅 목록

- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [React](https://react.dev/)
- [Parcel](https://parceljs.org/)
- [React Router](https://github.com/remix-run/react-router)
- [styled-components](https://github.com/styled-components/styled-components)
- [styled-reset](https://github.com/zacanger/styled-reset)
- [usehooks-ts](https://github.com/juliencrn/usehooks-ts)
- [usestore-ts](https://github.com/seed2whale/usestore-ts)
    - [Axios](https://github.com/axios/axios)
    - [tsyringe](https://github.com/microsoft/tsyringe)
    - [reflect-metadata](https://github.com/rbuckton/reflect-metadata)
- [jest-dom](https://github.com/testing-library/jest-dom)
    - [MSW](https://github.com/mswjs/msw)
- [CodeceptJS](https://codecept.io/)

## 패키지 생성

```shell
npm init -y
```

## TypeScript

### 타입스크립트 설치

```shell
npm i -D typescript
```

### 설정 파일 생성

타입스크립트 설정 파일 `tsconfig.json` 생성

```shell
npx tsc --init
```

`tsconfig.json` 파일에서 `jsx` 관련 항목 주석제거하고 수정

```json
{
  "jsx": "react-jsx"
}
```

## ESLint

### ESLint 설치

```shell
npm i -D eslint
```

### ESLint 설정

```shell
npx eslint --init

$ > To check syntax, find problems, and enforce code style
$ > JavaScript modules (import/export)
$ > React
$ > Yes(TypeScript)
$ > Browser
$ > Use a popular style guide
$ > XO
```

### 린트 스타일 세팅

타입스크립트의 경우 ESLint 에서 에어비엔비 스타일을 지원하지 않아 XO 스타일을 제거하고 에어비엔비 스타일로 변경

```shell
npm uninstall eslint-config-xo \
eslint-config-xo-typescript

npm i -D eslint-config-airbnb \
eslint-plugin-import \
eslint-plugin-react \
eslint-plugin-react-hooks \
eslint-plugin-jsx-a11y
```

### 설정 파일 세팅

`.eslintrc.js` 파일 수정

```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    indent: ['error', 2],
    'no-trailing-spaces': 'error',
    curly: 'error',
    'brace-style': 'error',
    'no-multi-spaces': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'no-whitespace-before-property': 'error',
    'func-call-spacing': 'error',
    'space-before-blocks': 'error',
    'keyword-spacing': ['error', { before: true, after: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
    'space-in-parens': ['error', 'never'],
    'block-spacing': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', { mode: 'strict' }],
    'arrow-spacing': ['error', { before: true, after: true }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        '**/*.test.js',
        '**/*.test.jsx',
        '**/*.test.ts',
        '**/*.test.tsx',
      ],
    }],
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }],
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
  },
};
```

### ignore 세팅

`.eslintignore` 파일 생성

## Jest

### Jest 설치

```shell
npm i -D jest @types/jest @swc/core @swc/jest
```

### Jest 설정

`jest.config.js` 생성

## React

### React 설치

```shell
npm i react react-dom

npm i -D @types/react @types/react-dom
```

### React 기본 파일 생성

`index.html`, `src/main.tsx`, `src/App.tsx` 파일 생성

## Parcel

### Parcel 설치

```shell
npm i -D parcel
```

## React Testing Library

### React Testing Library 설치

```shell
npm i -D @testing-library/react jest-environment-jsdom
```

### Jest 설정 변경

`jest.config.js` 에 관련 설정 추가

### 테스트 파일 생성

`src/App.test.tsx` 파일 생성

## MSW

### MSW 설치

```shell
npm i -D msw
```

### MSW 관련 파일 생성

`src/setupTest.ts`, `src/mocks/server.ts`, `src/mocks/handler.ts` 파일 추가

### Jest 설정 변경

`jest.config.js` 에 `setupFilesAfterEnv` 의 속성에 `setupTest.ts` 파일 추가

## React Router

### 리액트 라우터 설치

```shell
npm install react-router-dom
```

### 라우터 객체 생성

React Router 6.4버전부터 라우터 객체를 지원함.
`routes.tsx` 파일 생성

### 브라우저 라우터 내려주기

`App.tsx` 파일 참조

## styled-components

### styled-components 설치

```shell
  npm i styled-components@5.3.10
  
  npm i -D @types/styled-components @swc/plugin-styled-components
   
  npm i styled-reset
```

### swc 세팅

`.swcrc` 파일 생성

### Theme 세팅

`styles` 폴더 참조

### 테스트 helper 만들어주기

테스트할 때 Theme 을 이용하면 render 할 때 문제가 발생하기 때문에 별도로 테스트용 헬퍼 함수 생성

## Axios

### Axios 설치

```shell
npm i axios
```

## usestore-ts

### 의존성 설치

```shell
npm i tsyringe reflect-metadata usestore-ts
```

### 의존성 세팅

`src/main.tsx` 와 `src/setupTest.ts` 에 `reflect-metadata` import 해주기

`tsconfig.json` 에 `experimentalDecorators` 와 `emitDecoratorMetadata` 속성 true 로
변경

`jest.config.js` 세팅 수정

## CodeceptJS

### CodeceptJS 설치

```shell
npx codeceptjs init

# > Where are your tests located? ./tests/**/*_test.js
# > What helpers do you want to use? Playwright
# > where should logs, screenshots, and reports to be stored? (./output) 
# > Do you want localization for tests? English (no localization)
# > [Playwright] Base url of site to be tested (http://localhost)
# > [Playwright] Show browser window n
# > [Playwright] Browser in which testing will be performed. Possible options: chromium, firefox or webkit (chromium)
# > Feature which is being tested (ex: account, login, etc)
# > Filename of a test (_test.js)
```

### 부가적인 세팅

2023년 5월 기준 CodeceptJS 문제로 에러가 발생할 수 있음. 그래서 부가적인 세팅이 필요함.

1. 의존성 설치 `npm i -D eslint-plugin-codeceptjs playwright @codeceptjs/configure`

1. `codecept.conf.ts` 에서 `config`의 타입 제거 및 수정.

1. `tests/steps.d.ts` 파일 생성

1. `steps_files.js` 파일 `tests` 폴더로 이동

1. CodeceptJS가 내부적으로 `ts-node`를 쓰기 때문에 `tsconfig.json` 파일에 `ts-node` 설정을 추가

1. `/tests/.eslintrc.js` 파일 생성

1. `.gitignore` 에 `output/` 추가

## 기타

### `package.json` 명령어 추가

`package.json` 파일 참조
