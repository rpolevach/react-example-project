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
};

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
};

export const getRickandMorty = () => {
    let characters = [];

    const req = axios.get('https://rickandmortyapi.com/api/character');

    req.then(
        value => {
            value.data.results.forEach(element => {
                characters.push(element);
            });
        }
    );

    return characters;
}

export const getBreakignBad = () => {
    let quote = [];

    axios.get("https://breaking-bad-quotes.herokuapp.com/v1/quotes").then(
        value => {
            console.log(value.data[0].quote);
            quote.push(value.data[0].quote)
        }
    )

    return quote;
}   
