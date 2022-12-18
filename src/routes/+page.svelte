<script>
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
  console.log('svgString:', svgString) 
  /* container.innerHTML = svgString; */
</script>

<Button>click me</Button>

<h1>Welcome to Xorg</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<FileDropzone accept="image/*" max={3} />

<DatePicker format="%m/%d/%Y" closeOnSelection />

<Button filled>button</Button>
<Button outline>button</Button>
<Button>button</Button>

<Button disabled filled>button</Button>
<Button disabled outline>button</Button>
<Button disabled>button</Button>

<Button danger filled>button</Button>
<Button danger outline>button</Button>

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


