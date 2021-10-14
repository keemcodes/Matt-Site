# Matt-Site
Website I built for my brother's marketing agency. Quite a lot of CSS was explored for this project. Probably the deepest I ever went into CSS, as I purposely tried to make alot of the moving UI out of PURE CSS and little to no Javascript for a challenge. =)

## features
* The site was built as a single page app.


## how it works
* A page is determined on the initial page load or when the uri hash changes.
* All pages exist and just need to be "unhidden" to visit it. This creates the SPA.

## what could I change?
* Could refactor the code but it was functional enough so it is what it is :)
* The main limitation is that all the pages and it's content is loaded on the initial page load. This means if you have alot of pages and content, the site will start loading slow.
* It's really easy and straight forward if your site is just a small promo / contact site. (no more then 10 pages)
* A more scalable version would be to render data asynchronously on the frontend. Frontend can get request the backend, backend serves data based on what you ask for on the frontend. 

### here is a screenshot
![Screenshot of Website](screenshot.png)
