# Documents
A web component plugin for the [geocamxyz/geocam-viewer](https://github.com/geocamxyz/geocam-viewer) to add a documents button for creating/editing documents via the manager
### NPM Installation:
```
npm install 'https://gitpkg.now.sh/geocamxyz/plugin-documents/src?v2.0.3'
```
or for a particual commit version:
```
npm install 'https://gitpkg.now.sh/geocamxyz/plugin-compass-needlesrc?29be18f'
```
### Import Map (External Loading):
```
https://cdn.jsdelivr.net/gh/geocamxyz/plugin-documents@v2.0.3/dist/documents.js
```
or for a particual commit version:
```
https://cdn.jsdelivr.net/gh/geocamxyz/plugin-documents@29be18f/dist/documents.js
```
### Usage:
The .js file can be imported into your .html file using the below code (This can be ignored if your using the NPM package).
```
 <script type="module" src="https://cdn.jsdelivr.net/gh/geocamxyz/plugin-documents@v2.0.3/dist/documents.js"></script>
 ```

 Or with an importmap
 ```
<script type="importmap">
  {
    "imports": {
      "documents": "https://cdn.jsdelivr.net/gh/geocamxyz/plugin-documents@v2.0.3/dist/documents.js"
    }
  }
</script>
```
The plugin can then be imported via a module script or using the npm package and using the below import statement.
```
import "documents"
```
### Setup:
The plugin can then be added to the viewer by making the custom element a child of the viewer parent element.  

```
<geocam-viewer>
  <geocam-viewer-documents></geocam-viewer-documents>
</geocam-viewer>
```

There are no attribute settings.