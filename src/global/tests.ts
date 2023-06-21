import chalk from 'chalk';

type TestSuiteTest = {
  name: string;
  run(): void;
};

type TestSuiteRun = {
  name: string;
  tests: TestSuiteTest[];
};

const registeredSuites: Map<unknown, TestSuiteRegistration> = new Map();

class TestSuiteRegistration {
  private _testNames: string[] = [];
  private _createFn: () => Record<string, () => void>;
  readonly name: string;

  constructor(target: unknown) {
    const Ctor = (target as any).constructor;
    if (Ctor == null) {
      throw new Error('Test suite constructor is missing');
    }
    this._createFn = () => new Ctor();
    this.name = Ctor.name;
  }

  addTest(name: string) {
    this._testNames.push(name);
  }

  run(): TestSuiteRun {
    const suite = this._createFn();
    return {
      name: this.name,
      tests: this._testNames.map((name) => ({
        name,
        run: () => suite[name](),
      })),
    };
  }
}

function registrationFor(target: unknown): TestSuiteRegistration {
  let reg = registeredSuites.get(target);
  if (reg == null) {
    reg = new TestSuiteRegistration(target);
    registeredSuites.set(target, reg);
  }
  return reg;
}

function Test(): MethodDecorator {
  return (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const reg = registrationFor(target);
    const { value } = descriptor;
    if (typeof value !== 'function') {
      throw new Error('Test decorator can only be applied to methods');
    }
    if (typeof propertyKey === 'symbol') {
      throw new Error('Test methods cannot be symbols');
    }
    if (value.length !== 0) {
      throw new Error('Test methods cannot have parameters');
    }
    reg.addTest(propertyKey);
  };
}

declare global {
  function Test(): MethodDecorator;
}

// Object.assign(global, { Test });
globalThis.Test = Test;

export function runTests() {
  const runs = Array.from(registeredSuites.values()).map((reg) => reg.run());
  let failures = 0;
  const suiteInd = chalk.bgGray('TESTS');
  const passInd = chalk.bgGreen('PASS');
  const failInd = chalk.bgRed('FAIL');
  for (const run of runs) {
    console.log(`${suiteInd} ${run.name}:`);
    for (const test of run.tests) {
      try {
        test.run();

        console.log(`    ${passInd} ${test.name}`);
      } catch (e) {
        failures++;
        const msg = (e as any).message ?? e?.toString() ?? '';
        const prefix = '       ' + chalk.bgRed(' ') + ' ';
        const out =
          `    ${failInd} ${test.name}\n` +
          `${prefix}${msg.split('\n').join('\n' + prefix)}`;
        console.log(out);
      }
    }
  }

  if (failures > 0) {
    process.exit(1);
  }
}
