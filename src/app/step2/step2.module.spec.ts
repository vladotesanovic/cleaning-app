import { Step2Module } from './step2.module';

describe('Step2Module', () => {
  let step2Module: Step2Module;

  beforeEach(() => {
    step2Module = new Step2Module();
  });

  it('should create an instance', () => {
    expect(step2Module).toBeTruthy();
  });
});
