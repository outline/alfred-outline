# alfred-outline

An Alfred workflow to search your team Outline from the comfort of your desktop. 

Simply type your keyword into Alfred (default: ou) to see instant search results from your Outline knowledge base. Selecting a search result takes you directly to that Outline document in your default web browser.

## Installation

```
$ npm install --global alfred-npms
```

*Requires [Node.js](https://nodejs.org) 8+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/).*

## Workflow Variables

- `apiToken`: Grab a personal API token from the settings page in Outline: https://www.getoutline.com/settings/tokens
- `subdomain`: This should be your just your teams Outline subdomain, whatever is listed between the protocol and getoutline.com in your browsers address bar: https://<SUBDOMAIN>.getoutline.com

## Usage

In Alfred, type `ou`, <kbd>Enter</kbd>, and your query, to search for documents.

## License

MIT