import Map from "can/map/";
import route from "can/route/";
import 'can/map/define/';
import 'can/route/pushstate/';

const AppViewModel = Map.extend({
  define: {
    message: {
      value: 'Hello James',
      serialize: false
    },
    title: {
      value: 'place-my-order',
      serialize: false
    },
    message1: {
      value: 'MESSAGE',
      serialize: false
    }
  }
});

export default AppViewModel;
