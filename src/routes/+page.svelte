<script>
/* export const prerender = true; */
  import Svelvet from "svelvet";
  import { onMount } from 'svelte';
  import { Button, FileDropzone, DatePicker } from 'attractions';
  import Counter from './Counter.svelte';
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
  let message = 'Hello, World!';
		const initialNodes = [
		  {
		    id: 1,
		    position: { x: 100, y: 20 },
		    data: { label: "Input Node" },
		    width: 175,
		    height: 40,
		    bgColor: "white"
		  },
		  {
		    id: 2,
		    position: { x: 10, y: 150 },
		    data: { label: "bezier" },
		    width: 70,
		    height: 40,
		    bgColor: "white"
		  },
		  {
		    id: 3,
		    position: { x: 152, y: 150 },
		    data: { label: "straight" },
		    width: 70,
		    height: 40,
		    bgColor: "white"
		  },
		  {
		    id: 4,
		    position: { x: 294, y: 150 },
		    data: { label: "animated/labeled" },
		    width: 140,
		    height: 40,
		    bgColor: "white"
		  },
		  {
		    id: 5,
		    position: { x: 80, y: 225 },
		    data: { label: "no handle" },
		    width: 80,
		    height: 40,
		    bgColor: "white"
		  },
		  {
		    id: 6,
		    position: { x: 250, y: 225 },
		    data: { label: "arrow handle" },
		    width: 100,
		    height: 40,
		    bgColor: "white"
		  }
		];

		const initialEdges = [
		  { id: "e1-2", source: 1, target: 2, type: "bezier" },
		  { id: "e1-3", source: 1, target: 3, type: "straight" },
		  {
		    id: "e1-4",
		    source: 1,
		    target: 4,
		    type: "bezier",
		    animate: true,
		    label: "labeled"
		  },
		  {
		    id: "e1-5",
		    source: 1,
		    target: 5,
		    type: "bezier",
		    noHandle: true
		  },
		  {
		    id: "e1-6",
		    source: 1,
		    target: 6,
		    type: "bezier",
		    arrow: true
		  }
		];

  /* on:create={() => { */
  /*   console.log('Component created'); */
  /*   message = 'Hello, Svelte!'; */
  /* }} */
  /* on:create={() => console.log('Component created')} */

  /* onMount(() => { */
  /* console.log('the component has mounted'); */
  /*       console.log('>>', document.querySelector('.placeholder')) */
  /*       document.querySelector('.placeholder').innerHTML = svgString; */
  /* }); */

  console.log('svgString:', svgString)
</script>

<svelte:head>
	<title>CloudMap</title>
	<meta name="description" content="MX Cloud Map" />
</svelte:head>

<h1>{message}</h1>

<Counter />

<div class="placeholder"></div>

<Svelvet nodes={initialNodes} edges={initialEdges} background />

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


