import Service from '@ember/service';
import randomColor from 'randomcolor';

export default class RandomColorService extends Service {
  generate (options = {}) {
    return randomColor (options);
  }
}
