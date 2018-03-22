import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl:
          'https://cdn.images.express.co.uk/img/dynamic/136/590x/travel-activity-Madrid-Spain-nightlife-museums-bars-UploadExpress-Rob-Crossan-658625.jpg',
        id: '3asd342342342',
        title: 'Meetup in Madrid',
        date: '2018-05-05',
        location: 'Madrid',
        description: 'Madrid is good!'
      },
      {
        imageUrl:
          'https://travel.usnews.com/static-travel/images/destinations/44/empire_state_building_getty_zsolt_hlinka.jpg',
        id: '32314ff4sdsff',
        title: 'Meetup in New York',
        date: '2018-05-04',
        location: 'New York',
        description: 'New York is good as well!'
      }
    ],
    user: {
      id: '3424242424',
      registeredMeetups: ['3asd342342342']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: '34dw634rr664'
      }
      commit('createMeetup', meetup)
      // reach out to firebase and store it
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return meetupId => {
        return state.loadedMeetups.find(meetup => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
