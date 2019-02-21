import {FlipperPlugin} from 'flipper';

export default class extends FlipperPlugin {
  static title = 'Normal Example';
  static id = 'normalexample';
  static icon = 'internet';

  render() {
    return 'hello world';
  }
}