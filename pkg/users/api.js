import axios from "axios";

const IAM_BASE_URL = "/iam";

const instance = axios.create({
    baseURL: IAM_BASE_URL,
});

window.instance = instance;
console.log(" ");
console.log(instance);
