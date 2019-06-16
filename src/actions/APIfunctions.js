import axios from 'axios';

export const getGithubFollowers = () => {
    return axios.get("https://api.github.com/users/ayoz4");
}