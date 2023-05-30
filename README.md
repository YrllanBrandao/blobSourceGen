


###  Example
import the package:

```
const blobSourceGen = require('blobsourcegen'); 
```

### using

```
async function main() {
  const url = 'https://www.example.com/video.mp4';
  try {
    const result = await blobSourceGen.default(url);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

main();
```

### result example

```
blob:nodedata:9d33a2cb-fd38-4981-95a4-3ba6e6c7b786
```