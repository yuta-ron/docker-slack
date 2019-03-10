const slack = require('./post.js');

(async ()=>{ 
    const postData = {
    channel: process.env.TARGET_CHANNEL,
    username: process.env.USER_NAME,
    blocks: [
      { 
        type: "section",
        text: {
            type: "mrkdwn",
            text: "西しね:white_flower:"
        },
      },    
    ],  
    icon_url: process.env.ICON_URL,
  };

  console.log(await slack.post(postData));
})();