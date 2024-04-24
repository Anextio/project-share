<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import {
		getDiscussionById,
		addReply,
		updateReply,
		updateDiscussion
	} from '$lib/api/discussionsApi';
	import { Row, Col, Card, Button, Input } from 'spaper';
	import ReplyCard from '$lib/components/ReplyCard.svelte';
	import { authStore } from '$lib/stores/authStore';

	let discussion = null;
	let newReply = '';
	let user = null;
	let editingDiscussion = false;
	let editedTitle = '';
	let editedDescription = '';

	onMount(async () => {
		const discussionId = $page.params.id;
		console.log($page.params.id);
		discussion = await getDiscussionById(discussionId);
		console.log(discussion);

		// Get the user's display name from the authStore
		const authUser = await authStore.getCurrentUser();
		if (authUser) {
			user = {
				displayName: authUser.displayName
			};
		} else {
			user = localStorage.getItem("user");
		}
	});

	async function handleAddReply(parentReplyId = null) {
		if (newReply.trim() !== '') {
			const reply = {
				id: Date.now().toString(),
				content: newReply,
				author: user ? user.displayName : 'Anonymous',
				createdAt: new Date().toISOString(),
				replies: []
			};
			await addReply($page.params.id, reply, parentReplyId);
			if (parentReplyId) {
				updateReplyInDiscussion(parentReplyId, reply);
			} else {
				discussion.replies = [...discussion.replies, reply];
			}
			newReply = '';
		}
	}

	function updateReplyInDiscussion(replyId, updatedReply) {
		function traverse(replies) {
			for (let i = 0; i < replies.length; i++) {
				if (replies[i].id === replyId) {
					replies[i] = { ...replies[i], ...updatedReply };
					return;
				}
				if (replies[i].replies) {
					traverse(replies[i].replies);
				}
			}
		}
		traverse(discussion.replies);
		discussion = { ...discussion };
	}

	function handleReplyUpdated(event) {
		const { replyId, updatedReply } = event.detail;
		updateReplyInDiscussion(replyId, updatedReply);
	}

	function startEditingDiscussion() {
		editingDiscussion = true;
		editedTitle = discussion.title;
		editedDescription = discussion.description;
	}

	async function saveDiscussionChanges() {
		await updateDiscussion($page.params.id, {
			title: editedTitle,
			description: editedDescription,
			edited: true
		});
		discussion.title = editedTitle;
		discussion.description = editedDescription;
		discussion.edited = true;
		editingDiscussion = false;
	}
</script>

<div>
	{#if discussion}
		<Row>
			<Col fill>
				<Card>
					{#if editingDiscussion}
						<Input bind:value={editedTitle} placeholder="Title" />
						<Input type="textarea" bind:value={editedDescription} placeholder="Description" />
						<Button on:click={saveDiscussionChanges}>Save</Button>
					{:else}
						<h4>{discussion.title}</h4>
						<p>{discussion.description}</p>
						{#if discussion.startedBy === user?.displayName}
							<Button on:click={startEditingDiscussion}>Edit</Button>
						{/if}
						{#if discussion.edited}
							<p class="edited">(edited)</p>
						{/if}
					{/if}
					<div>
						<h3>Started by</h3>
						<p class="author">{discussion.startedBy}</p>
						<h3>Created on</h3>
						<p class="date">{discussion.dateTime}</p>
					</div>
				</Card>
			</Col>
		</Row>
		{#if discussion.replies}
			<Row>
				<Col fill>
					<h2>Replies</h2>
					<div class="replies">
						{#each discussion.replies as reply}
							<ReplyCard {reply} {user} on:replyUpdated={handleReplyUpdated} />
						{/each}
					</div>
				</Col>
			</Row>
		{/if}
		<Row>
			<Col fill>
				<Card>
					<div class="add-reply">
						<Input
							class="mb-2"
							type="textarea"
							bind:value={newReply}
							placeholder="Add a reply..."
						/>
						<Button on:click={() => handleAddReply()}>Reply</Button>
					</div>
				</Card>
			</Col>
		</Row>
	{:else}
		<p>Loading discussion...</p>
	{/if}
</div>

<style>
	.author {
		font-weight: bold;
	}
	.date {
		color: #888;
		font-size: 0.8em;
	}
	.replies {
		margin-bottom: 20px;
	}
	.add-reply {
		display: flex;
		flex-direction: column;
	}
	.edited {
		color: #888;
		font-size: 0.8em;
	}
</style>
