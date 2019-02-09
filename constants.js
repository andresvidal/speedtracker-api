module.exports = {
  metrics: {
    breakdown: {
      html: {
        bytes: {
          name: 'HTML',
          transform: (value) => (value / 1000).toFixed(1),
          unit: 'KB'
        },
        requests: {
          name: 'HTML'
        }
      },
      js: {
        bytes: {
          name: 'JS',
          transform: (value) => (value / 1000).toFixed(1),
          unit: 'KB'
        },
        requests: {
          name: 'JS'
        }
      },
      css: {
        bytes: {
          name: 'CSS',
          transform: (value) => (value / 1000).toFixed(1),
          unit: 'KB'
        },
        requests: {
          name: 'CSS'
        }
      },
      image: {
        bytes: {
          name: 'Images',
          transform: (value) => (value / 1000).toFixed(1),
          unit: 'KB'
        },
        requests: {
          name: 'Images'
        }
      },
      flash: {
        bytes: {
          name: 'Flash',
          transform: (value) => (value / 1000).toFixed(1),
          unit: 'KB'
        },
        requests: {
          name: 'Flash'
        }
      },
      font: {
        bytes: {
          name: 'Fonts',
          transform: (value) => (value / 1000).toFixed(1),
          unit: 'KB'
        },
        requests: {
          name: 'Fonts'
        }
      },
      other: {
        bytes: {
          name: 'Other',
          transform: (value) => (value / 1000).toFixed(1),
          unit: 'KB'
        },
        requests: {
          name: 'Other'
        }
      }
    },
    loadTime: {
      name: 'Load time',
      transform: (value) => (value / 1000).toFixed(2),
      unit: 's',
      description: 'The time between the initial request and the browser load event'
    },
    firstPaint: {
      name: 'Start render',
      transform: (value) => (value / 1000).toFixed(2),
      unit: 's',
      description: 'The time until the browser starts painting content to the screen'
    },
    fullyLoaded: {
      name: 'Fully loaded',
      transform: (value) => (value / 1000).toFixed(2),
      unit: 's',
      description: 'The time at which the page has fully finished loading content'
    },
    SpeedIndex: {
      name: 'SpeedIndex',
      transform: (value) => (value / 1000).toFixed(2),
      unit: 's',
      description: 'A custom metric introduced by WebPageTest to rate pages based on how quickly they are visually populated'
    },
    TTFB: {
      name: 'Back-end',
      transform: (value) => (value / 1000).toFixed(2),
      unit: 's',
      description: 'The time it takes for the server to respond with the first byte of the response'
    },
    TTFI: {
      name: 'First Interactive',
      transform: (value) => (value / 1000).toFixed(2),
      unit: 's',
      description: 'This is a newer metric and reports when the page is first expected to be usable and will respond to input quickly (with the possibility of slow responses as more content loads).'
    },
    TimeToInteractive: {
      name: 'Time to Interactive',
      transform: (value) => (value / 1000).toFixed(2),
      unit: 's',
      description: 'TTI measures the time until the page being loaded is considered usable and will respond to user input.'
    },
    firstContentfulPaint: {
      name: 'First Contentful Paint',
      transform: (value) => (value / 1000).toFixed(2),
      unit: 's',
      description: 'The point in time when the first image or text is rendered to the screen (something other than background colors).'
    },
    firstMeaningfulPaint: {
      name: 'First Contentful Paint',
      transform: (value) => (value / 1000).toFixed(2),
      unit: 's',
      description: 'First Meaningful Paint is essentially the paint after which the biggest above-the-fold layout change has happened, and web fonts have loaded.'
    },
    visualComplete: {
      name: 'Visually complete',
      transform: (value) => (value / 1000).toFixed(2),
      unit: 's',
      description: 'The time it takes for the page to be fully visually populated'
    }
  }
}