const path = require('path');
const alfy = require('alfy');

const results = await alfy.fetch(`${process.env.subdomain || "www.getoutline.com"}/api/documents.search`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.apiToken}`,
    "Content-Type": "application/json",
  },
  body: {
    query: alfy.input
  }
});

let items = results.data.map(result => ({
  title: result.document.title,
  subtitle: result.context.replace(/\<\/?b\>/g, ''),
  // arg: `https://${process.env.subdomain || "www"}.getoutline.com${result.document.url}`,
  arg: `https://${process.env.subdomain || "www.getoutline.com"}${result.document.url}`,
  icon: {
    path: path.join(__dirname, "document.png")
  }
}));

if (!items.length) {
  items = [{
    title: "No results - go to Outline homepage",
    // arg: `https://${process.env.subdomain || "www"}.getoutline.com/home`
    arg: `https://${process.env.subdomain || "www.getoutline.com"}`
  }];
}

alfy.output(items);
