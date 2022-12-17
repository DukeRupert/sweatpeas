<!-- ContactForm.svelte -->
<script>
	import { createForm } from 'felte';
	import { reporter, ValidationMessage } from '@felte/reporter-svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { First_Name, Last_Name } from '$lib/stores';

	// Placeholder data
	const crew = [
		{ first: 'Malcom', last: 'Reynolds', email: 'browncoat@gmail.com' },
		{ first: 'Zoe', last: 'Washburne', email: 'slinkydress@gmail.com' },
		{ first: 'River', last: 'Tam', email: 'nopowerintheverse@gmail.com' },
		{ first: 'Simon', last: 'Tam', email: 'traumadoc@gmail.com' },
		{ first: 'Kaylee', last: 'Frye', email: 'naturaltalent@gmail.com' },
		{ first: 'Inara', last: 'Sera', email: 'lonelycompanion@gmail.com' },
		{ first: 'Hoban', last: 'Washburne', email: 'aleafonthewind@gmail.com' },
		{ first: 'Jayne', last: 'Cobb', email: 'vera@gmail.com' }
	];

	// Select placeholder data
	let crewChoice = 0;
	const getRandomInt = (max) => {
		return Math.floor(Math.random() * max);
	};

	// To track form submit status
	let pending = false;

	// Create Felte form
	const { form, errors } = createForm({
		validate: (values) => {
			const errors = {};
			if (!values.time) {
				errors.time = 'Must pick a time';
			}
			if (!values.date) {
				errors.date = 'Must pick a date';
			}
			if (!values.address) {
				errors.address = 'Must not be empty';
			}
			if (!values.city) {
				errors.city = 'Must not be empty';
			}
			if (!values.zip) {
				errors.zip = 'Must not be empty';
			}
			if (!values.first) {
				errors.first = 'Must not be empty';
			}
			if (!values.last) {
				errors.last = 'Must not be empty';
			}
			if (!values.email || !/^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(values.email)) {
				errors.email = 'Must be a valid email';
			}
			if (
				!values.phone ||
				!/^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/gm.test(values.phone)
			) {
				errors.phone = 'Must be a valid phone number';
			}

			return errors;
		},
		onSubmit: async (values) => {
			console.log('Submitting');
			pending = true;
			const response = await fetch('/api/contact-us', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(values)
			});
			pending = false;

			if (!response.ok) {
				goto('/error');
			}

			goto('/success');
		},
		onError: (errors) => {
			window.alert(errors);
		},

		extend: reporter
	});

	// Fill in placeholder data on mount
	onMount(() => {
		crewChoice = getRandomInt(crew.length);
	});
</script>

<form use:form class="space-y-8 divide-y divide-gray-200">
	<div class="space-y-8 divide-y divide-gray-200">
		<div>
			<!-- Service -->
			<div>
				<h2 class="leading-6 font-medium text-primary-800">Service</h2>
				<p class="mt-1 text-sm text-gray-500">What would you like us to do?</p>
			</div>
			<div class="mt-6 pb-5 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
				<div class="sm:col-span-3">
					<label for="job" class="block text-sm font-medium text-gray-700"> Type </label>
					<div class="mt-1">
						<select
							type="text"
							name="job"
							id="job"
							class="shadow-sm focus:ring-accent-500 focus:border-accent-500 block w-full sm:text-sm border-gray-300 rounded-md"
						>
							<option selected>Routine Clean</option>
							<option>Deep Clean</option>
							<option>Move In/Out Clean</option>
						</select>
					</div>
				</div>

				<div class="sm:col-span-3">
					<label for="frequency" class="block text-sm font-medium text-gray-700"> Frequency </label>
					<div class="mt-1">
						<select
							type="text"
							name="frequency"
							id="frequency"
							class="shadow-sm focus:ring-accent-500 focus:border-accent-500 block w-full sm:text-sm border-gray-300 rounded-md"
						>
							<option selected>Once</option>
							<option>Weekly</option>
							<option>Bi-Weekly</option>
							<option>Monthly</option>
						</select>
					</div>
				</div>
			</div>
			<!-- Time -->
			<div class="pt-8">
				<h2 class="leading-6 font-medium text-primary-800">Time</h2>
				<p class="mt-1 text-sm text-gray-500">When would you like us to do a walkthrough?</p>
			</div>
			<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
				<div class="sm:col-span-3">
					<label for="first" class="block text-sm font-medium text-gray-700"> Time </label>
					<div class="mt-1">
						<input
							type="time"
							name="time"
							id="time"
							class="shadow-sm focus:ring-accent-500 focus:border-accent-500 block w-full sm:text-sm border-gray-300 rounded-md"
						/>
						<ValidationMessage for="time" let:messages={message}>
							<span class="text-red-600 text-sm font-normal ml-4"> {message || ''}</span>
						</ValidationMessage>
					</div>
				</div>

				<div class="sm:col-span-3">
					<label for="last" class="block text-sm font-medium text-gray-700"> Date </label>
					<div class="mt-1">
						<input
							type="date"
							name="date"
							id="date"
							class="shadow-sm focus:ring-accent-500 focus:border-accent-500 block w-full sm:text-sm border-gray-300 rounded-md"
						/>
						<ValidationMessage for="last" let:messages={message}>
							<span class="text-red-600 text-sm font-normal ml-4"> {message || ''}</span>
						</ValidationMessage>
					</div>
				</div>

				<div class="sm:col-span-3 hidden">
					<label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
					<div class="mt-1">
						<input
							type="text"
							name="password"
							id="password"
							autocomplete="password"
							class="shadow-sm focus:ring-accent-500 focus:border-accent-500 block w-full sm:text-sm border-gray-300 rounded-md"
						/>
					</div>
				</div>
			</div>
			<!-- Location -->
			<div class="pt-8">
				<h2 class="leading-6 font-medium text-primary-800">Location</h2>
				<p class="mt-1 text-sm text-gray-500">Where is the property located?</p>
			</div>
			<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
				<div class="sm:col-span-3">
					<label for="address" class="block text-sm font-medium text-gray-700"> Address </label>
					<div class="mt-1">
						<input
							type="text"
							name="address"
							id="address"
							autocomplete="street-address"
							class="shadow-sm focus:ring-accent-500 focus:border-accent-500 block w-full sm:text-sm border-gray-300 rounded-md"
						/>
						<ValidationMessage for="address" let:messages={message}>
							<span class="text-red-600 text-sm font-normal ml-4"> {message || ''}</span>
						</ValidationMessage>
					</div>
				</div>

				<div class="sm:col-span-2">
					<label for="city" class="block text-sm font-medium text-gray-700"> City </label>
					<div class="mt-1">
						<input
							type="text"
							name="city"
							id="city"
							autocomplete="address-level2"
							class="shadow-sm focus:ring-accent-500 focus:border-accent-500 block w-full sm:text-sm border-gray-300 rounded-md"
						/>
						<ValidationMessage for="city" let:messages={message}>
							<span class="text-red-600 text-sm font-normal ml-4"> {message || ''}</span>
						</ValidationMessage>
					</div>
				</div>

				<div class="sm:col-span-1">
					<label for="zip" class="block text-sm font-medium text-gray-700"> Zip </label>
					<div class="mt-1">
						<input
							id="zip"
							name="zip"
							type="text"
							autocomplete="postal-code"
							class="shadow-sm focus:ring-accent-500 focus:border-accent-500 block w-full sm:text-sm border-gray-300 rounded-md"
						/>
						<ValidationMessage for="zip" let:messages={message}>
							<span class="text-red-600 text-sm font-normal ml-4"> {message || ''}</span>
						</ValidationMessage>
					</div>
				</div>
			</div>
			<!-- Contact -->
			<div class="pt-8">
				<h2 class="leading-6 font-medium text-primary-800">Contact Information</h2>
				<p class="mt-1 text-sm text-gray-500">How would you like us to follow up with you?</p>
			</div>
			<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
				<div class="sm:col-span-3">
					<label for="first" class="block text-sm font-medium text-gray-700"> First name </label>
					<div class="mt-1">
						<input
							bind:value={$First_Name}
							type="text"
							name="first"
							id="first"
							autocomplete="given-name"
							placeholder={crew[crewChoice].first}
							class="shadow-sm focus:ring-accent-500 focus:border-accent-500 block w-full sm:text-sm border-gray-300 rounded-md"
						/>
						<ValidationMessage for="first" let:messages={message}>
							<span class="text-red-600 text-sm font-normal ml-4"> {message || ''}</span>
						</ValidationMessage>
					</div>
				</div>

				<div class="sm:col-span-3">
					<label for="last" class="block text-sm font-medium text-gray-700"> Last name </label>
					<div class="mt-1">
						<input
							bind:value={$Last_Name}
							type="text"
							name="last"
							id="last"
							autocomplete="family-name"
							placeholder={crew[crewChoice].last}
							class="shadow-sm focus:ring-accent-500 focus:border-accent-500 block w-full sm:text-sm border-gray-300 rounded-md"
						/>
						<ValidationMessage for="last" let:messages={message}>
							<span class="text-red-600 text-sm font-normal ml-4"> {message || ''}</span>
						</ValidationMessage>
					</div>
				</div>

				<div class="sm:col-span-3">
					<label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
					<div class="mt-1">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							placeholder={crew[crewChoice].email}
							class="shadow-sm focus:ring-accent-500 focus:border-accent-500 block w-full sm:text-sm border-gray-300 rounded-md"
						/>
						<ValidationMessage for="email" let:messages={message}>
							<span class="text-red-600 text-sm font-normal ml-4"> {message || ''}</span>
						</ValidationMessage>
					</div>
				</div>

				<div class="sm:col-span-3">
					<label for="phone" class="block text-sm font-medium text-gray-700"> Phone </label>
					<div class="mt-1">
						<input
							type="text"
							name="phone"
							id="phone"
							autocomplete="tel"
							placeholder="253-123-4567"
							class="shadow-sm focus:ring-accent-500 focus:border-accent-500 block w-full sm:text-sm border-gray-300 rounded-md"
						/>
						<ValidationMessage for="phone" let:messages={message}>
							<span class="text-red-600 text-sm font-normal ml-4"> {message || ''}</span>
						</ValidationMessage>
					</div>
				</div>

				<div class="sm:col-span-3 hidden">
					<label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
					<div class="mt-1">
						<input
							type="text"
							name="password"
							id="password"
							autocomplete="password"
							class="shadow-sm focus:ring-accent-500 focus:border-accent-500 block w-full sm:text-sm border-gray-300 rounded-md"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="pt-5">
		<div class="flex justify-end">
			<button
				type="submit"
				class="ml-3 inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-accent-500 hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
			>
				{#if pending}
					<span class="sr-only">Loading...</span>
					<svg
						aria-hidden="true"
						class="mr-2 w-6 h-6 text-white animate-spin dark:text-gray-600 fill-actionorange-200"
						viewBox="0 0 100 101"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
							fill="currentColor"
						/>
						<path
							d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
							fill="currentFill"
						/>
					</svg>
				{:else}
					<svg
						class="h-6 w-6 mr-2"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" /> <line x1="10" y1="14" x2="21" y2="3" />
						<path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" /></svg
					>Send
				{/if}
			</button>
		</div>
	</div>
</form>
