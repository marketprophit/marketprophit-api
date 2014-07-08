# Response Formats

<aside class="notice">By default, the Market Prophit API uses the HTTP request header `Accepts` to determine response formats.  However, you can also affix `.json`, `.csv`, or `.xml` to any endpoint to return those respective response formats (this overrides the `Accepts` header).</aside>

Accepts | Affixed | Response
-------------- | ------------------- | ---------------
none | none | JSON response
text/html | none | Pretty JSON (indented 2 spaces) and wrapped with `<pre><code>`
application/json | .json | JSON response
application/xml | .xml | XML response with results as `<row>` attributes wrapped in `<rows>` attribute
text/csv | .csv | CSV file delimited by ";" with first line of underscored column names
