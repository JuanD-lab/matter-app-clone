import Request from './Request.js'
import UI from './UI.js'


Request.viewReceivedFeedback()
    .then((response) =>response.json())
    .then((feedback) => {
        UI.printReceivedFeedback('feed',feedback);
    })
