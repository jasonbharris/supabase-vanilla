Thank you for viewing my file. I appreciate any suggestions.

There is no response when trying to insert a row. I copied exactly what was in the documentation of Supabase but to no avail.

```
let { data: posts, error } = await supabase
  .from('posts')
  .select('*')
```
