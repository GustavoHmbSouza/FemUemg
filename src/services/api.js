import axios from 'axios';

const key = "3451a24d144eb8b0ed35c644663b38bd";
const tokken = "23dbd8cd19adab2760472a5304038b8ff08ada772b1c67ce2f7407441b63b81d";
const quadro = "jnIv5QAR";
const api = axios.create({
    baseURL: "https://api.trello.com/1/boards/" + quadro + "/cards/?fields=desc,idMembers,name,id,due,dueComplete,badges,url&key=" + key + "&token=" + tokken,
});

export default api;
