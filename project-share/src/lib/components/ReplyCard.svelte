<script>
	import { createEventDispatcher } from 'svelte';
	import { updateReply } from '$lib/api/discussionsApi';
	import { Card, Button, Input } from 'spaper';
	export let reply;
	export let user;
	let showReplyInput = false;
	let newReply = '';
	let editingReply = false;
	let editedReply = '';
	const dispatch = createEventDispatcher();
	function toggleReplyInput() {
		showReplyInput = !showReplyInput;
	}
	async function handleAddReply() {
		if (newReply.trim() !== '') {
			const newReplyObj = {
				id: Date.now().toString(),
				content: newReply,
				author: 'Current User',
				createdAt: new Date().toISOString(),
				replies: []
			};
			await updateReply(reply.id, { replies: [...reply.replies, newReplyObj] });
			dispatch('replyUpdated', {
				replyId: reply.id,
				updatedReply: { replies: [...reply.replies, newReplyObj] }
			});
			newReply = '';
			showReplyInput = false;
		}
	}
	function startEditingReply() {
		editingReply = true;
		editedReply = reply.content;
	}
	async function saveReplyChanges() {
		await updateReply(reply.id, { content: editedReply, edited: true });
		dispatch('replyUpdated', {
			replyId: reply.id,
			updatedReply: { content: editedReply, edited: true }
		});
		editingReply = false;
	}
</script>

<Card class="reply-card">
	<div class="reply-content">
		{#if editingReply}
			<Input type="textarea" bind:value={editedReply} placeholder="Edit reply" />
			<Button on:click={saveReplyChanges}>Save</Button>
		{:else}
			<p>{reply.content}</p>
			{#if reply.author === user?.displayName}
				<Button on:click={startEditingReply}>Edit</Button>
			{/if}
			{#if reply.edited}
				<p class="edited">(edited)</p>
			{/if}
		{/if}
		<p class="author">By: {reply.author}</p>
		<p class="date">{reply.createdAt}</p>
	</div>
	<div class="reply-actions"><Button on:click={toggleReplyInput}>Reply</Button></div>
	{#if showReplyInput}
		<div class="reply-input">
			<Input type="textarea" bind:value={newReply} placeholder="Add a reply..." />
			<Button on:click={handleAddReply}>Submit</Button>
		</div>
	{/if}
	{#if reply.replies && reply.replies.length > 0}
		<div class="nested-replies">
			{#each reply.replies as nestedReply}
				<svelte:self reply={nestedReply} {user} on:replyUpdated />
			{/each}
		</div>
	{/if}
</Card>

<style>
	.reply-card {
		margin-bottom: 20px;
		padding: 10px;
		background-color: #f0f0f0;
		border-radius: 4px;
	}
	.reply-content {
		margin-bottom: 10px;
	}
	.author {
		font-weight: bold;
	}
	.date {
		color: #888;
		font-size: 0.8em;
	}
	.reply-actions {
		display: flex;
		justify-content: flex-end;
	}
	.reply-input {
		margin-top: 10px;
	}
	.nested-replies {
		margin-left: 20px;
	}
	.edited {
		color: #888;
		font-size: 0.8em;
	}
</style>
