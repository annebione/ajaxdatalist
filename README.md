# ajaxDatalist
A minimalist and simple library aimed to make ajax datalists easy.

## Usage

### ajaxDatalist(inputId, datalistId, jsonPath, errorText);

#### inputId (String)
<input> element ID. 

#### datalistId (String)
<datalist> element ID.

#### jsonPath (String)
Path to the file to be loaded. for example: 'scripts/list.json'.

#### errorText (String)
Error text to be displayed as a placeholder on <input> if the file cannot be loaded.

##### Required HTML

```html
<input type="text" id="inputId">
<datalist id="datalistId">
```

