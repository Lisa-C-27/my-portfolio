import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      navActive: 'overview',
      overviewVisible: true,
      btVisible: Boolean,
      phVisible: Boolean,
      ihVisible: Boolean,
      joiiVisible: Boolean
    };
  },
  getters: {
    navActive(state) {
      return state.navActive;
    },
    overviewVisible(state) {
      return state.overviewVisible;
    },
    btVisible(state) {
      return state.btVisible;
    },
    phVisible(state) {
      return state.phVisible;
    },
    ihVisible(state) {
      return state.ihVisible;
    },
    joiiVisible(state) {
      return state.joiiVisible;
    }
  },
  mutations: {
    updateNavActive(state, payload) {
      state.navActive = payload;
    },
    isOverviewVisible(state, payload) {
      state.overviewVisible = payload;
    },
    isBtVisible(state, payload) {
      state.btVisible = payload;
    },
    isPhVisible(state, payload) {
      state.phVisible = payload;
    },
    isIhVisible(state, payload) {
      state.ihVisible = payload;
    },
    isJoiiVisible(state, payload) {
      state.joiiVisible = payload;
    },
    runUpdate(state) {
      const btVisible = state.btVisible;
      const overviewVisible = state.overviewVisible;
      const phVisible = state.phVisible;
      const ihVisible = state.ihVisible;
      const joiiVisible = state.joiiVisible;

      if((overviewVisible === true && btVisible === true) || overviewVisible === true ) {
        state.navActive = 'overview';
      }
      else if((btVisible === true && phVisible === true) || btVisible === true) {
        state.navActive = 'buildtoday';
      }
      else if((phVisible === true && ihVisible === true) || phVisible === true) {
        state.navActive = 'privium-homes';
      }
      else if((ihVisible === true && joiiVisible === true) || ihVisible === true) {
        state.navActive = 'impact-homes';
      }
      else if(joiiVisible === true) {
        state.navActive = 'joii';
      }
    }
  },
  actions: {
    updateNavVisible(context, payload) {
      context.commit('updateNavActive', payload);
    },
    updateBtVisible(context, payload) {
      context.commit('isBtVisible', payload);
      context.commit('runUpdate');
    },
    updateOverviewVisible(context, payload) {
      context.commit('isOverviewVisible', payload);
      context.commit('runUpdate');
    },
    updatePhVisible(context, payload) {
      context.commit('isPhVisible', payload);
      context.commit('runUpdate');
    },
    updateIhVisible(context, payload) {
      context.commit('isIhVisible', payload);
      context.commit('runUpdate');
    },
    updateJoiiVisible(context, payload) {
      context.commit('isJoiiVisible', payload);
      context.commit('runUpdate');
    },
  }
});

export default store;