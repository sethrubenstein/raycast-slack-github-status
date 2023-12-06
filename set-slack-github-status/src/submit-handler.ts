import fetch from 'node-fetch';
// import { Octokit } from '@octokit/rest';

export default async function handleSubmit(status: string, GITHUB_TOKEN: string, SLACK_TOKEN: string) {  
	// Update GitHub status
	await fetch('https://api.github.com/users/sethrubenstein/hovercard', {
		method: 'GET',
		headers: {
			'Authorization': `token ${GITHUB_TOKEN}`,
			'Content-Type': 'application/json',
		},
		// body: JSON.stringify({ status }),
	});

	// Update Slack status
	await fetch('https://slack.com/api/users.profile.set', {
		method: 'POST',
		headers: {
			'Authorization': `Bearer ${SLACK_TOKEN}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ profile: { status_text: status, status_emoji: ':memo:' } }),
	});

	console.log('Status updated successfully!');
};