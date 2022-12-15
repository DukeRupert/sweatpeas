<!-- AlternatingFeatures.svelte -->
<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	// Intersection oberver variables
	const threshold = 0.2;
	let elementOne: HTMLElement;
	let intersectingOne: boolean;
	let elementTwo: HTMLElement;
	let intersectingTwo: boolean;

	// Reactive assignments for transitions
	$: show1 = intersectingOne;
	$: show2 = intersectingTwo;
</script>

<div class="relative pt-16 md:pt-32 pb-32 overflow-hidden">
	<div class="relative">
		<IntersectionObserver once element={elementOne} bind:intersecting={intersectingOne} {threshold}>
			<div
				bind:this={elementTwo}
				class="transition-all transform duration-500 delay-150 ease-quart-out {show1
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-12'} lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
			>
				<div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
					<div bind:this={elementOne}>
						<div>
							<span
								class="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-evergreen-500 to-evergreen-500"
							>
								<!-- Icon: Heart -->
								<svg
									class="h-8 w-8 text-tertiary-400"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path
										d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
									/></svg
								>
							</span>
						</div>
						<div class="mt-6">
							<h2 class="text-4xl font-extrabold tracking-tight text-gray-900">
								Don’t stress, we’ll take care of your mess
							</h2>
							<p class="mt-4 text-lg text-gray-500">
								Whether it is a weekly clean which is tailored to your needs or a one-off, intense
								cleaning of your home we can can make your dirty problems go away.
							</p>
							<div class="mt-6">
								<a
									href="/#services"
									class="inline-flex bg-accent-500 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm !text-white hover:bg-accent-600"
								>
									Learn More
								</a>
							</div>
						</div>
					</div>
					<div class="mt-8 border-t border-gray-200 pt-6">
						<blockquote>
							<div>
								<p class="text-base text-gray-500">
									&ldquo;We have had a great experience when working with Sweat Pea's. Patricia is
									always professional, fast and leaves our home feeling fantastic!&rdquo;
								</p>
							</div>
							<footer class="mt-3">
								<div class="flex items-center space-x-3">
									<div class="text-base font-medium text-gray-700">Chante W. - Helena, MT</div>
								</div>
							</footer>
						</blockquote>
					</div>
				</div>
				<div class="mt-12 sm:mt-16 lg:mt-0">
					<div
						class="pl-4 -mr-16 sm:pl-6 sm:flex sm:justify-center lg:px-0 lg:m-0 lg:relative lg:h-full"
					>
						<img
							class="w-full sm:max-w-md rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
							src="pink_woman_cleaning_crying.webp"
							alt="A woman wearing rubber gloves and holding a sponge is dirty and crying."
							height="600"
							width="900"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</IntersectionObserver>
	</div>
	<div class="mt-24">
		<IntersectionObserver once element={elementTwo} bind:intersecting={intersectingTwo} {threshold}>
			<div
				bind:this={elementTwo}
				class="transition-all transform duration-500 delay-150 ease-quart-out {show2
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-12'} lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
			>
				<div
					class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2"
				>
					<div>
						<div>
							<span
								class="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-evergreen-500 to-evergreen-500"
							>
								<!-- Icon: Happy Face -->
								<svg
									class="h-8 w-8 text-primary-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</span>
						</div>

						<div class="mt-6">
							<h2 class="text-4xl font-bold tracking-tight text-gray-900">
								Professional cleaning with a personal touch
							</h2>
							<p class="mt-4 text-lg text-gray-500">
								The ironing basket is overflowing, the living room looks like a bomb has hit it, the
								kitchen is a disaster area and the bathroom, and well best not say anything about
								it. But that's where our professional team of experienced cleaners come in to
								transform your home back.
							</p>
							<div class="mt-6">
								<a
									href="#contact-us"
									class="inline-flex bg-white px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-primary-600 hover:bg-gray-50"
								>
									Contact Us
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
					<div
						class="pr-4 -ml-16 sm:pr-6 sm:flex sm:justify-center lg:px-0 lg:m-0 lg:relative lg:h-full"
					>
						<img
							class="w-full sm:max-w-md rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
							src="teal_woman_cleaning_bucket.webp"
							alt="Excavation and leveling using a compact excavator on a residential property"
							height="600"
							width="900"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</IntersectionObserver>
	</div>
</div>
