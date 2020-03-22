import config from '../config'

const ApiService = {
  getLogs() {
    return fetch(`${config.API_ENDPOINT}/logs`, {
      headers: {
      },
    })
    .then(logRes => 
      (!logRes.ok)
      ? logRes.json().then(e => Promise.reject(e))
      : logRes.json()
      )
  },

  getLog(logId) {
    return fetch(`${config.API_ENDPOINT}/logs/${logId}`, {
      headers: {
      },
    })
      .then(logRes =>
        (!logRes.ok)
          ? logRes.json().then(e => Promise.reject(e))
          : logRes.json()
      )     
  },

  postLog(latitude, longitude, title, description, image, rating, visited_day, publicc) {
    return fetch(`${config.API_ENDPOINT}/logs`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        latitude,
        longitude,
        title,
        description,
        image,
        rating,
        visited_day,
        public: publicc,
      }),
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
}

export default ApiService