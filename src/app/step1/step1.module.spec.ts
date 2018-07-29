import { Step1Module } from './step1.module';

describe('Step1Module', () => {
  let step1Module: Step1Module;

  beforeEach(() => {
    step1Module = new Step1Module();
  });

  it('should create an instance', () => {
    expect(step1Module).toBeTruthy();
  });
});
