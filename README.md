A Next.js code components, generated off https://www.dga.org/

- dga_chatgpt is generated with ChatGPT 4o
- dga_claude is generatef with Claude Sonnet 3.5
-

## Notes

- Generated from saved inspect -> "save source code", since this is a logged in user experience and none of the services can log in to external sites (for ethical.security reasons).
- ChatGPT is able to navigate the web and retrieve related CSS files from the DGA website. As a result, only ChatGPT was able to retrieve (some) CSS styles; Claude simply hallycinated everything
- Claude Sonnet cannot browse the Internet, as of right now
- Github copilot mostly failed to generate good enough results for the HTML provided, so I gave up on it.

## How to run

- Download the git repo from `https://github.com/sergyatsenko/DGA_codegen`
- Navigate to dga_chatgpt or dga_claude, and run `npm run dev`

---

## Prompt engineering

### Header and Footer

```
Use the provided HTML source file, evaluate the HTML code and all referenced stylesheets and script files to generate the Next.js component and related SCSS modules from the referenced HTML element. Generate all the code for all links and all nested components—do not skip anything, and do not put any empty placeholders! Do not output the original HTML extracted.
## Component to generate from HTML element
  * "pick one..."
    * HeaderLinks (div with class="headerLinks"). Please make sure that it includes the flyout child menus (if any)
    * Subheader (div with class="headerSubHeader")
    * Footer (div with class="pageFooterContainer")
## Code generation guidelines:
	* Use Typescript and generate *.tsx files, rather than *.js
	* Evaluate ALL CSS styles, including from parent components, to maintain the resulting CSS, as it appears on the original page, including all colors, case, placement, etc.
	* Do not use <Link> with <a> child elements inside - use newer Next.js next/link components.
	* Use Tailwind CSS
	* Move all CSS markup into SCSS modules
	* Do not reference Tailwind CSS in HTML code; instead, in each SCSS module, use SASS nesting to target the elements and apply your Tailwind classes.
	* Follow the latest Next.js best practices and guidelines to generate all the code
```

### Search results (only worked with Claude)

```
Use the provided HTML source file, evaluate the HTML code and all referenced stylesheets and script files to generate the Next.js component and related SCSS modules from the referenced HTML element. Generate all the code for all links and all nested components—do not skip anything, and do not put any empty placeholders! Do not output the original HTML extracted.
## Component to generate from HTML element
* SearchResults from <div class="innerContentMain">
## Code generation guidelines:
	* Use Typescript and generate *.tsx files, rather than *.js
	* Do not skip child elements of <div class="tickerResults">, output all 10  div elements with class="coveo-result-frame gridItem"
	* Evaluate ALL CSS styles, including from parent components, to maintain the resulting CSS, as it appears on the original page, including all colors, case, placement, etc.
	* Do not use <Link> with <a> child elements inside - use newer Next.js next/link components.
	* Use Tailwind CSS
	* Move all CSS markup into SCSS modules
	* Do not reference Tailwind CSS in HTML code; instead, in each SCSS module, use SASS nesting to target the elements and apply your Tailwind classes.
	* Follow the latest Next.js best practices and guidelines to generate all the code
```

### Search sidebar

```
Use the provided HTML source file, evaluate the HTML code and all referenced stylesheets and script files to generate the Next.js component and related SCSS modules from the referenced HTML element. Generate all the code for all links and all nested components—do not skip anything, and do not put any empty placeholders! Do not output the original HTML extracted.
## Component to generate from HTML element
* SearchOptions from <div class="innerContentSide">
## Code generation guidelines:
	* Use Typescript and generate *.tsx files, rather than *.js
	* Do not skip child elements of <div class="tickerResults">, output all 10  div elements with class="coveo-result-frame gridItem"
	* Evaluate ALL CSS styles, including from parent components, to maintain the resulting CSS, as it appears on the original page, including all colors, case, placement, etc.
	* Do not use <Link> with <a> child elements inside - use newer Next.js next/link components.
	* Use Tailwind CSS
	* Move all CSS markup into SCSS modules
	* Do not reference Tailwind CSS in HTML code; instead, in each SCSS module, use SASS nesting to target the elements and apply your Tailwind classes.
	* Follow the latest Next.js best practices and guidelines to generate all the code
```

---

## Prompts to generate code from screenshots

```
Generate the next.js footer component from the provided screenshot. Name it FooterSS.
Follow the following guidelines:
* Use Tailwind CSS
* Make it responsive
* Use the latest version of Next.js
* Center align horizontally
* Make sure to reproduce all fonts, sizes, colors as closely as possible
* Embed placeholder images instead of an original ones, where needed
* Do not use <Link> with <a> child elements inside!!! use newer Next.js next/link components !!!
```

```
Generate the next.js footer component from the provided screenshot. Name it FooterSS.
Follow the following guidelines:
* Use Tailwind CSS
* Make it responsive
* Use the latest version of Next.js
* Center align horizontally
* Make sure to reproduce all fonts, sizes, colors as closely as possible
* Embed placeholder images instead of an original ones, where needed
* Do not use <Link> with <a> child elements inside!!! use newer Next.js next/link components !!!
```

```
Generate the next.js calendar component from the provided screenshot. Name it CalendarSS.
Follow the following guidelines:
* Use Tailwind CSS
* Make it responsive
* Use the latest version of Next.js
* Center align horizontally
* Make sure to reproduce all fonts, sizes, colors as closely as possible
* Embed placeholder images instead of an original ones, where needed
* Do not use <Link> with <a> child elements inside!!! use newer Next.js next/link components !!!
```

```
Generate the next.js header component from the provided screenshot, which should include the site log, top links and the menu below the links. Ignore the rest of the screenshot. Name the TopHeaderSS.
Follow the following guidelines:
* Make sure to include the flyout submenu, shown under the "The Guild" item. it should expand on mouse over on desktop and on click on a mobile layout.
* Use Tailwind CSS
* Use the latest version of Next.js
* Make it responsive
* Make sure to reproduce all fonts, sizes, colors as closely as possible
* Embed placeholder images instead of an original ones, where needed
* Do not use <Link> with <a> child elements inside!!! use newer Next.js next/link components!!!
```
