const { App } = require('@slack/bolt');

require('dotenv').config()
console.log(process.env)

// Initializes your app with your bot token and app token
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN
});

// Listens to incoming messages that contain "hello"
app.message('hello', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  console.log('message');
  await say({
    blocks: [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `Hey there <@${message.user}>!`
        },
        "accessory": {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "Click Me"
          },
          "action_id": "button_click"
        }
      }
    ],
    text: `Hey there <@${message.user}>!`
  });
});

// app.action('button_click', async ({ body, ack, say }) => {
//   // Acknowledge the action
//   await ack();
//   await say(`<@${body.user.id}> clicked the button`);
// });


// app.event("app_home_opened", async ({ event, client, context }) => {
//   try {
//     const result = await client.views.publish({
//       user_id: event.user,
//       view: {
// 	"type": "home",
// 	"blocks": [
// 		{
// 			"type": "header",
// 			"text": {
// 				"type": "plain_text",
// 				"text": `Hi, <@${event.user}> welcome to Scayler`
// 			}
// 		},
// 		{
// 			"type": "actions",
// 			"elements": [
// 				{
// 					"type": "button",
// 					"text": {
// 						"type": "plain_text",
// 						"text": "Create New Task",
// 						"emoji": true
// 					},
// 					"style": "primary",
// 					"value": "create_task"
// 				},
// 				{
// 					"type": "button",
// 					"text": {
// 						"type": "plain_text",
// 						"text": "Create New Project",
// 						"emoji": true
// 					},
// 					"value": "create_project"
// 				},
// 				{
// 					"type": "button",
// 					"text": {
// 						"type": "plain_text",
// 						"text": "Help",
// 						"emoji": true
// 					},
// 					"value": "help"
// 				}
// 			]
// 		},
// 		{
// 			"type": "context",
// 			"elements": [
// 				{
// 					"type": "image",
// 					"image_url": "https://api.slack.com/img/blocks/bkb_template_images/placeholder.png",
// 					"alt_text": "placeholder"
// 				}
// 			]
// 		},
// 		{
// 			"type": "section",
// 			"text": {
// 				"type": "mrkdwn",
// 				"text": "*Your Configurations*"
// 			}
// 		},
// 		{
// 			"type": "divider"
// 		},
// 		{
// 			"type": "section",
// 			"text": {
// 				"type": "mrkdwn",
// 				"text": "*#public-relations*\n<fakelink.toUrl.com|PR Strategy 2019> posts new tasks, comments, and project updates to <fakelink.toChannel.com|#public-relations>"
// 			},
// 			"accessory": {
// 				"type": "button",
// 				"text": {
// 					"type": "plain_text",
// 					"text": "Edit",
// 					"emoji": true
// 				},
// 				"value": "public-relations"
// 			}
// 		},
// 		{
// 			"type": "divider"
// 		},
// 		{
// 			"type": "section",
// 			"text": {
// 				"type": "mrkdwn",
// 				"text": "*#team-updates*\n<fakelink.toUrl.com|Q4 Team Projects> posts projecto testando updates evenet.user.id updates to <fakelink.toChannel.com|#team-updates>"
// 			},
// 			"accessory": {
// 				"type": "button",
// 				"text": {
// 					"type": "plain_text",
// 					"text": "Edit",
// 					"emoji": true
// 				},
// 				"value": "public-relations"
// 			}
// 		},
// 		{
// 			"type": "divider"
// 		},
// 		{
// 			"type": "actions",
// 			"elements": [
// 				{
// 					"type": "button",
// 					"text": {
// 						"type": "plain_text",
// 						"text": "New Configuration",
// 						"emoji": true
// 					},
// 					"value": "new_configuration"
// 				}
// 			]
// 		}
// 	]
// }});
//   } catch (error) {
//     console.error(error);
//   }
// });

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();