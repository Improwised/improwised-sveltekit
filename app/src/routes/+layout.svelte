<script>
	import Navigation from '$lib/components/Navigation.svelte';

	import Footer from '$lib/components/Footer.svelte';

	// import 'bootstrap/dist/css/bootstrap.min.css';

</script>

<svelte:head>


	<link href="/theme/css/bootstrap.css" rel="stylesheet" type="text/css" />
      <link href="/theme/css/theme.css" rel="stylesheet" type="text/css" />

      <link href="/css/custom.css" rel="stylesheet" type="text/css" />
      <link href="/css/pages.css" rel="stylesheet" type="text/css" />
      <link
        href="/theme/css/font-rubiklato.css"
        rel="stylesheet"
        type="text/css"
      />


	<script src="/theme/js/jquery-3.1.1.min.js"></script>
	<script src="/theme/js/scripts.js"></script>
</svelte:head>

<div class="app">
	<Navigation />

	<main>
		<slot />
	</main>

	<Footer />
</div>
