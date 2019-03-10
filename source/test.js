var should = require('should');
const slack = require('./post.js');

describe('post2slack test', () => {
	it('post success test', async () => {
		const postData = {
			channel: process.env.TARGET_CHANNEL,
			username: process.env.TEST_USER_NAME,
			blocks: [
				{ 
					type: "section",
					text: {
							type: "mrkdwn",
							text: "slack post testing✌"
					},
				},
			],  
			icon_url: process.env.TEST_ICON_URL,
		};

		var result = await slack.post(postData);
		result.should.equal('ok');
	});

	it('post failure test', async () => {
		var result = await slack.post();
		should.equal(result, null);
	});
});