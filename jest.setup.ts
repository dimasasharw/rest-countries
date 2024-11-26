// jest.setup.ts
import '@testing-library/jest-dom';

import { cleanup } from '@testing-library/react';


afterEach(() => {
  console.log("Unit test OK");
  cleanup();
})