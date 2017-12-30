const pollsRouter = require('express').Router();

const polls = [{
    "id": 9,
    "question": {
        "id": 5,
        "poll_id": 1,
        "label": "What is your favorite framework?"
    },
    "answers": [
        {
            "id": 6,
            "question_id": 2,
            "label": "Angular"
        }
    ],
    "votes": [
        {
            "id": 7,
            "user_id": 3,
            "answer_id": 4,
            "poll_id": 5
        }
    ]
}];

pollsRouter.get('/', (request, response) => {
    response.json(polls);
});

pollsRouter.post('/', (request, response) => {
    const poll = request.body;

    console.log('Poll recibido: ', poll);

    polls.push(poll);

    response.json(polls);
});

module.exports = pollsRouter;
