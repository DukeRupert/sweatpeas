<script>
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../theme.postcss';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Navbar from '$lib/components/Navbar/index.svelte';
	import { navigating } from '$app/stores';
	import { mobileMenu } from '$lib/stores';
	import Footer from '$lib/components/Footer.svelte';

	// Close mobile menu when navigating to a  new page
	$: if ($navigating) {
		$mobileMenu = false;
	}
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<Navbar />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
