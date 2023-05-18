import { Action, Store } from 'usestore-ts';

@Store()
class SampleStore {
  count = 0;

  @Action()
  increase() {
    this.count += 1;
  }

  @Action()
  reset() {
    this.count = 0;
  }
}
