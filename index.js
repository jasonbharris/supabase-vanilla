import 'dotenv/config';
import { createClient } from '@supabase/supabase-js'

const supabaseURL = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY

const supabase = createClient(supabaseURL, supabaseKey)


let { data: posts, error } = await supabase
  .from('posts')
  .select('*')

console.log(posts)
