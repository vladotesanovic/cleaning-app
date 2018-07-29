import { FinalModule } from './final.module';

describe('FinalModule', () => {
  let finalModule: FinalModule;

  beforeEach(() => {
    finalModule = new FinalModule();
  });

  it('should create an instance', () => {
    expect(finalModule).toBeTruthy();
  });
});
