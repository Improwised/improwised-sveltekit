<script>
	export let text;
	export let redirect;
</script>

<a class="btn btn--primary type--uppercase" href={`${redirect}/`}>
	<span class="btn__text">{text}</span>
</a>
