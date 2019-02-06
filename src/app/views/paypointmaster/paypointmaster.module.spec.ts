import { PaypointmasterModule } from './paypointmaster.module';

describe('PaypointmasterModule', () => {
  let paypointmasterModule: PaypointmasterModule;

  beforeEach(() => {
    paypointmasterModule = new PaypointmasterModule();
  });

  it('should create an instance', () => {
    expect(paypointmasterModule).toBeTruthy();
  });
});
