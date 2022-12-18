<script>
  import { onMount } from 'svelte';
  import { Button, FileDropzone, DatePicker } from 'attractions';
  import * as blobs2 from "blobs/v2";
  import * as blobs2Animate from "blobs/v2/animate";
  console.log('blobs2:', blobs2)
  console.log('blobs2Animate:', blobs2Animate)

  const svgString = blobs2.svg(
    {
        seed: Math.random(),
        extraPoints: 8,
        randomness: 4,
        size: 256,
    },
    {
        fill: "white", // 🚨 NOT SANITIZED
        stroke: "black", // 🚨 NOT SANITIZED
        strokeWidth: 4,
    },
  );
  	onMount(() => {
		console.log('the component has mounted');
        console.log('>>', document.querySelector('.placeholder'))
        document.querySelector('.placeholder').innerHTML = svgString;
	});

  console.log('svgString:', svgString) 
</script>

<svelte:head>
	<title>CloudMap</title>
	<meta name="description" content="MX Cloud Map" />
</svelte:head>

<div class="placeholder"></div>

<FileDropzone accept="image/*" max={3} />

<style lang="scss">
  /* because the directory of `theme.scss` is in `includePaths` */
  @use 'theme.scss';

  $main: red;
  p {
    color: theme.$main;
  }
  a {
    color: theme.$foo;
  }
</style>


