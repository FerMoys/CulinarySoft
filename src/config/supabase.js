import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://elbtxwdanorhlysjrcia.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsYnR4d2Rhbm9yaGx5c2pyY2lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczMjMyNDQsImV4cCI6MjA5Mjg5OTI0NH0.fLvS4VgkTNyRB3An7FqMSk2dHzcWDJTT2DVlTylto_0'

export const supabase = createClient(supabaseUrl, supabaseKey)