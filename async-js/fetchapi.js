
//GET Request
function getData() {
    
    // const url = 'info.txt';
    const url = 'https://api.github.com/users';

    fetch(url).then((response) => {
        // return response.text();
        return response.json();
    }).then((data) => {
        console.log(data);
    })
}

// getData();

function postReq() {

    const url = 'https://jsonplaceholder.typicode.com/posts';

    const data = {
        title: 'michael',
        body: 'thats what she said',
        userId: 69,
      };

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch(url, params).then(response => response.json())
    .then(data => console.log(data))
}

// postReq();