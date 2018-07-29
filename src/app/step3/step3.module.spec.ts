import { Step3Module } from './step3.module';

describe('Step3Module', () => {
  let step3Module: Step3Module;

  beforeEach(() => {
    step3Module = new Step3Module();
  });

  it('should create an instance', () => {
    expect(step3Module).toBeTruthy();
  });
});
