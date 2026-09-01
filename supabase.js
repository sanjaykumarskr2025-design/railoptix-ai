const SUPABASE_URL = "https://dxjgafmeavzsirkhvquu.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
"sb_publishable_iyVfjv3PjUeuSLksSczRhA_NnIUyI31";

const supabaseClient =
window.supabase.createClient(
SUPABASE_URL,
SUPABASE_PUBLISHABLE_KEY
);

async function getStationsFromDB() {

 
}

async function getTrainsFromDB() {

 
}

async function getMaintenanceFromDB() {

 
}

async function getRailOptixData() {

 
}

window.supabaseClient =
supabaseClient;

window.getStationsFromDB =
getStationsFromDB;

window.getTrainsFromDB =
getTrainsFromDB;

window.getMaintenanceFromDB =
getMaintenanceFromDB;

window.getRailOptixData =
getRailOptixData;

console.log(
"RailOptix AI: Supabase client initialized"
);

 
