**Set Up the Project**:
   ```bash
  npm init -y

```
**Install Dependencies**:
 ```bash
npm install typescript jest ts-jest @types/jest --save-dev

```

**Create a tsconfig.json**:
 ```bash
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "strict": true,
    "outDir": "./dist",
    "esModuleInterop": true
  },
  "include": ["src/merge.ts", "test/merge.test.ts"]
}


```

**Create a jest.config.js**:
 ```bash
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};

```
**Add the test script in package.json**:
 ```bash
"scripts": {
  "test": "jest"
}


```

**Execute the tests**:
 ```bash
npm test

```


