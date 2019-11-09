import {contentView, TextInput, WebView} from 'tabris';

contentView.append(
  <$>
    <TextInput 
      text='http://skynetsoftware.ga' floatMessage={false} onAccept={loadUrl}/>
    <WebView stretchX />
  </$>
);

function loadUrl() {
  $(WebView).only().url = $(TextInput).only().text;
}

loadUrl();
