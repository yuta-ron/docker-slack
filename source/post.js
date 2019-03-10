const request = require('request');

const post = async(postData) => {
	var result;
	try {
	  result = await doRequest(process.env.SLACK_ENTRYPOINT, postData).catch(err => console.log(err.message));
	}catch(err){
		reslut = null;
	}finally{
		return result
	}
} 
module.exports.post = post;

const doRequest = (channelUrl, postData) => {
  const requestOptions = {
    url: channelUrl,
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },

    body: JSON.stringify(postData)
  };

  return new Promise(function (resolve, reject) {
    request(requestOptions, function (error, res, body) {
      if (!error && res.statusCode == 200) {
        resolve(body);
      } else {
        reject(error);
      }
    });
  });
}
