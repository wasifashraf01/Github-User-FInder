let userProfileUrl = '';

async function button(event) {
    event.preventDefault();

    const input = document.getElementById('inputt').value;
    const api = "https://api.github.com/users/";
    const ss = api + input;
    console.log(ss);

    try {
        const response = await fetch(ss);
        const data = await response.json();
        console.log(data);

        document.getElementById('imgg').src = data.avatar_url;
        document.getElementById('name').innerHTML = data.name || 'No name provided';
        document.getElementById('bio').innerHTML = data.bio || 'No bio available';
        document.getElementById('location').innerHTML = data.location || 'No location provided';
        document.getElementById('followers').innerHTML = `Followers: ${data.followers}`;
        document.getElementById('following').innerHTML = `Following: ${data.following}`;
        document.getElementById('repo').innerHTML = `Repos: ${data.public_repos}`;

        userProfileUrl = data.html_url; 
    } catch (error) {
        console.error('Error:', error);
    }

    event.preventDefault();
}

function view() {
    const viewPage = document.getElementById('view_page');
}
