import axios from 'axios';
import { showToast } from '../components/General';
import { getItem } from './async_storage';

const urlParent = "https://api.antiflox.com/";
// const urlParent = "http://192.168.100.39:8080/"
const mainUrl = urlParent + "api/";
export const socketUrl = urlParent;

export async function postObject({ objectName, body, token }) {
  return await axios
    .post(config.url + objectName, body, {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
    })
    .then(response => {
      return response.data;
    });
}

export async function dataGet({ body, endPoint }) {

  return await axios
    .post(mainUrl + endPoint, body,

      {
        headers: {
          'Authorization': `Bearer ${global.accessToken}`,
          'Content-Type': 'multipart/form-data'
        },
      }
    )
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log("Error", err);
      // showToast('Please check your internet connection');
      return err
    });
}





export async function dataGetFileUpload(endPoint, body) {
  const token = await getItem('token');

  return axios({
    method: 'post',
    url: mainUrl + endPoint,
    headers: {
      // 'x-auth-token': `${token}`,
      'Content-Type': 'multipart/form-data'
    },
    data: body
  })
    .then(res => {
      if (res?.data?.message) {
        showToast(res?.data?.message)
      }
      return res.data
    })
    .catch(err => {
      console.log("Error", err);
      // showToast('Please check your internet connection');
      return err
    });
}

export async function dataPost(endPoint, body) {
  const token = await getItem('token');
  console.log("Toe", token);
  return axios({
    method: 'post',
    url: mainUrl + endPoint,
    headers: {
      'x-auth-token': `${token}`,
      'Content-Type': 'application/json'
    },
    data: body
  })
    .then(res => {
      if (res?.data?.message) {
        showToast(res?.data?.message)
      }
      return res?.data
    })
    .catch(err => {
      showToast(err.response.data.message);
      console.log("ER", err);


      return err
    });
}

export async function dataPost2(endPoint, body) {
  const token = await getItem('token');
  console.log("Toe", token);
  return axios({
    method: 'post',
    url: mainUrl + endPoint,
    headers: {
      'x-auth-token': `${token}`,
      'Content-Type': 'application/json'
    },
    data: body
  })
    .then(res => {
      if (res?.data?.message) {
        showToast(res?.data?.message)
      }
      return res?.data
    })
    .catch(err => {
      showToast(err.response.data.message);
      // console.log("ERR",  err.response.data.message);
      return err
    });
}

export async function dataPostUrl(endPoint, body) {
  const token = await getItem('token');
  console.log("Toe", token);
  return axios({
    method: 'post',
    url: endPoint,
    headers: {
      'x-auth-token': `${token}`,
      'Content-Type': 'application/json'
    },
    data: body
  })
    .then(res => {
      if (res?.data?.message) {
        showToast(res?.data?.message)
      }
      return res?.data
    })
    .catch(err => {
      // showToast(err.response.data.message);

      return err
    });
}

export async function dataPut(endPoint, body) {
  const token = await getItem('token');
  console.log("Toe", token);
  return axios({
    method: 'put',
    url: mainUrl + endPoint,
    headers: {
      'x-auth-token': `${token}`,
      'Content-Type': 'application/json'
    },
    data: body
  })
    .then(res => {
      if (res?.data?.message) {
        showToast(res?.data?.message)
      }
      return res?.data
    })
    .catch(err => {
      showToast(err.response.data.message);
      return err
    });
}

export async function dataDelete(endPoint, body) {
  const token = await getItem('token');
  console.log("Toe", token);
  return axios({
    method: 'delete',
    url: mainUrl + endPoint,
    headers: {
      'x-auth-token': `${token}`,
      'Content-Type': 'application/json'
    },
    data: body
  })
    .then(res => {
      return res?.data
    })
    .catch(err => {
      // showToast(err.response.data.message);
      console.log("ERR", err);
      return err
    });
}

export async function dataGet_(endPoint, body) {
  const token = await getItem('token');
  console.log("Toe", token);
  return axios({
    method: 'get',
    url: mainUrl + endPoint,
    headers: {
      'x-auth-token': `${token}`,
      'Content-Type': 'application/json'
    },
    // data: body
  })
    .then(res => {
      return res?.data
    })
    .catch(err => {
      // showToast(err.response.data.message);
      console.log("ERR", err);
      return err
    });
}


export async function dataGet2_(endPoint, body) {
  console.log("Url", mainUrl + endPoint);

  return axios({
    method: 'get',
    url: mainUrl + endPoint,
    headers: {
      'Content-Type': 'application/json'
    },
    // data: body
  })
    .then(res => {
      return res?.data
    })
    .catch(err => {
      // showToast(err.response.data.message);
      console.log("ERR", err);
      return err
    });
}

export async function getTimeZone() {
  return await axios
    .get(`https://api.geotimezone.com/public/timezone?latitude=${global.currentLat}&longitude=${global.currentLng}`)
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log("Error", err);
      // showToast('Please check your internet connection');
      return err
    });
}
