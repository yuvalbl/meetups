const refreshButton = document.querySelector('.refresh');

const refreshClickStream = Rx.Observable.fromEvent(refreshButton, 'click');

const startupRequestStream = Rx.Observable.of('https://api.github.com/users');

const requestOnRefreshStream = refreshClickStream
    .map(ev => {
        const randomOffset = Math.floor(Math.random()*500);
        return 'https://api.github.com/users?since=' + randomOffset;
    });

//
// https://blog.angularindepth.com/rxjs-understanding-the-publish-and-share-operators-16ea2f446635
const responseStream = startupRequestStream.merge(requestOnRefreshStream)
    .flatMap(requestUrl =>
        Rx.Observable.fromPromise(jQuery.getJSON(requestUrl))
    );


function createSuggestionStream(responseStream) {
    return responseStream.map(listUser =>
        listUser[Math.floor(Math.random()*listUser.length)]
    )
}

const suggestion1Stream = createSuggestionStream(responseStream);
const suggestion2Stream = createSuggestionStream(responseStream);
const suggestion3Stream = createSuggestionStream(responseStream);

// Rendering ---------------------------------------------------
function renderSuggestion(suggestedUser, selector) {
    const suggestionEl = document.querySelector(selector);
    if (suggestedUser === null) {
        suggestionEl.style.visibility = 'hidden';
    } else {
        suggestionEl.style.visibility = 'visible';
        const usernameEl = suggestionEl.querySelector('.username');
        usernameEl.href = suggestedUser.html_url;
        usernameEl.textContent = suggestedUser.login;
        const imgEl = suggestionEl.querySelector('img');
        imgEl.src = "";
        imgEl.src = suggestedUser.avatar_url;
    }
}

suggestion1Stream.subscribe(user => {
    renderSuggestion(user, '.suggestion1');
});

suggestion2Stream.subscribe(user => {
    renderSuggestion(user, '.suggestion2');
});

suggestion3Stream.subscribe(user => {
    renderSuggestion(user, '.suggestion3');
});
