# TypeScript: Modules and Module Systems

Organize code into modules and utilize import/export syntax to encapsulate and share functionality.

## Importing and exporting

### Import

```typescript
import { fn } from './module-file';
import { fn as fnAlias } from './module-file';
import * as moduleAlias from './module-file';
import './module-file';
```

### Export

```typescript
export const someVariable = 'value';
export function someFunction() {}
export class SomeClass {}
```

### Default Export

```typescript
export default function () {}
// OR
export default class {}
```

### Importing default export

```typescript
import someFunction from './module-file-with-default-export';
import SomeClass from './module-file-with-default-export';
```

## Exporting and importing multiple modules

```typescript
// module1.ts
export const value1 = 'value1';
export const value2 = 'value2';

// module2.ts
export * from './module1';
export const value3 = 'value3';

// main.ts
import { value1, value2, value3 } from './module2';
```

## Dynamic imports (code splitting)

```typescript
import('./module-file').then((module) => {
  // Use the imported module
});
```
