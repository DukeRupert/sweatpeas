<script lang="ts">
	import Form from './Form.svelte';
</script>

<div id="contact-us" class="relative bg-white py-20 sm:py-24 lg:py-32">
	<div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
		<div class="text-center">
			<p class="text-gray-900 tracking-wide uppercase">Contact Us</p>
			<h2
				class="mt-1 text-4xl font-extrabold text-accent-500 sm:text-5xl sm:tracking-tight lg:text-6xl"
			>
				Let's Get Started
			</h2>
			<p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
				We only quote a rate after an in-person walkthrough.
			</p>
		</div>
		<div
			class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8"
		>
			<Form />
		</div>
	</div>
</div>
