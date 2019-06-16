import axios from 'axios';

export const getGithubFollowers = () => {
    let followers = [];

    const req = axios.get("https://api.github.com/users/ayoz4/followers");

    req.then(
        value => {
            value.data.forEach(element => {
                followers.push(element.login);
            })
        }
    )

    return followers;
}

export const getGithubRepos = () => {
    let repos = [];

    const req = axios.get('https://api.github.com/users/ayoz4/repos');

    req.then(
        value => {
            value.data.forEach(element => {
                repos.push(element);
            });
        }
    )

    return repos;
}