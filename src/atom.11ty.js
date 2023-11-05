const header = `
  <title>Jano's bookshelf</title>
  <link href="https://bookshelf.janosilles.com"/>
  <updated>${new Date().toISOString()}</updated>
  <author>
    <name>János Illés</name>
  </author>
  <link href="https://bookshelf.janosilles.com/atom.xml" rel="self"/>
  <id>https://bookshelf.janosilles.com/</id>`;


class RssFeed {
  data() {
    return {
      permalink: data => 'atom.xml'
    };
  }

  render(data) {
    const entries = data.bookshelf.books.filter((book) => book.read != "").map((book) => `
  <entry>
    <title><![CDATA[ ${book.author} - ${book.title} ]]></title>
    <id>urn:x-book:${this.slug(book.title)}---${this.slug(book.author)}</id>
    <link href="https://bookshelf.janosilles.com#${this.slug(book.title)}"/>
    <updated>${book.read}</updated>
    <summary type="html"><![CDATA[ Janos finished reading <b>${book.title}</b> by <i>${book.author}</i> ]]></summary>
  </entry>`);

    return `
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    ${header}
    ${entries.join("")}
</feed>`.trim();
  }
}

module.exports = RssFeed;
