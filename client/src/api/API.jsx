import axios from "axios";

export default {
    getAllCurrencies: function () {
        return axios.get("https://api.exchangeratesapi.io/latest");
    }
};