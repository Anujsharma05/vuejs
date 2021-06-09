export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'Maximilian',
          lastName: 'Schwarzmüller',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'Jones',
          areas: ['frontend', 'career'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30
        }
      ]
    }
  },
  mutations: {
    registerCoach(state, payLoad) {
      state.coaches.push(payLoad);
    },
    setCoaches(state, payLoad) {
      state.coaches = payLoad;
    },
    updateLastFetch(state) {
      state.lastFetch = new Date().getTime();
    }
  },
  actions: {
    async registerCoach(context, data) {

      const userId = context.rootGetters.userId;
      const coachData = {
        firstName: data.firstName,
        lastName: data.lastName,
        areas: data.areas,
        description: data.desc,
        hourlyRate: data.rate
      }

      const response = await fetch(`https://find-coach-cf434-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
        method: 'PUT',
        'content-type': 'application/json',
        body: JSON.stringify(coachData)
      })

      // const responseData = await response.json();

      if(!response.ok) {
        //error
      }

      context.commit('registerCoach', {
        ...coachData,
        id: userId
      });
    },

    async loadCoaches(context, forcedRefresh) {
      const shouldUpdate = context.getters.shouldUpdate;
      if(!shouldUpdate && !forcedRefresh) {
        return;
      }

      const response = await fetch('https://find-coach-cf434-default-rtdb.firebaseio.com/coaches.json');

      const responseData = await response.json();

      if(!response.ok) {
        const error = new Error(responseData.message || 'failed to fetch data');
        throw error;
      }

      const coaches = [];

      for(const key in responseData) {
        const coach = {
          id: key,
          firstName: responseData[key].firstName,
          lastName: responseData[key].lastName,
          areas: responseData[key].areas,
          description: responseData[key].desc,
          hourlyRate: responseData[key].hourlyRate
        }

        coaches.push(coach);
      }

      context.commit('setCoaches', coaches);
      context.commit('updateLastFetch');
    }
  },
  getters: {
    coaches(state) {
      return state.coaches;
    },
    hasCoaches(state) {
      return state.coaches && state.coaches.length > 0;
    },
    isCoach(_, getters, _2, rootGetters) {
      const coaches = getters.coaches;
      const userId = rootGetters.userId;

      return coaches.some(coach => coach.id === userId);
    },
    shouldUpdate(state) {
      const lastFetch = state.lastFetch;

      if(!lastFetch) {
        return true;
      }

      const currentTime = new Date().getTime();

      return (currentTime - lastFetch)/1000 > 60;
    }
  }
}