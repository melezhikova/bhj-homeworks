const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        let poll = JSON.parse(xhr.response).data;
        let idPoll = JSON.parse(xhr.response).id;
        pollTitle.innerHTML = poll.title;
        
        let variants = poll.answers;
        variants.forEach ((item) => {
            pollAnswers.innerHTML += `
                <button class="poll__answer">
                    ${item}
                </button>
            `;
        })

        const buttons = document.querySelectorAll('.poll__answer');
        for (let i = 0; i < buttons.length; i++) {
            let button = buttons[i];
            let number = i;
            button.onclick = function () {
                alert('Спасибо, ваш голос засчитан!');

                const xhr2 = new XMLHttpRequest();
                xhr2.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
                xhr2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                xhr2.send(`vote=${idPoll}&answer=${number}`);
                
                xhr2.addEventListener('readystatechange', function () {
                    if (xhr2.readyState === xhr.DONE && xhr2.status === 200) {
                        let pollResults = JSON.parse(xhr2.response).stat;
                        let count = 0;
                        pollResults.forEach ((item) => {
                            count += item.votes;
                        });
                        console.log(pollResults, count);
                        pollAnswers.innerHTML = '';
                        pollResults.forEach ((item) => {
                            pollAnswers.innerHTML += `
                                <div class="item">
                                    <div class="item__answer">
                                        ${item.answer}:
                                    </div>
                                    <div class="item__votes">
                                        ${(item.votes/count*100).toFixed(2)}%
                                    </div>
                                </div>
                            `;
                        })
                    }
                })
            }
        }
    }
})