export type Perspective = 'withheld' | 'qualities' | 'sources' | 'experience' | 'mediation';
export type Session = {
  id: string; title: string; type: 'recording' | 'live'; createdAt: string; editedAt: string;
  listeningDate: string; recordingDate: string; location: string; coordinates: string; weather: string;
  setting: string; recordist: string; recorder: string; microphones: string; configuration: string;
  windProtection: string; gain: string; format: string; fileSize: number; duration: number;
  sampleRate: string; channels: string; processing: string; playbackEquipment: string;
  generalNotes: string; tags: string[]; audioId?: string; demo?: boolean; description: string;
  qualities: string[]; qualityNotes: string; observedSource: string; suspectedSource: string;
  contextLater: string; unknownSource: string; sourceConfidence: string; sourceEvidence: string;
  sourceNotes: string; withheldNotes: string; experienceNotes: string; experienceTags: string[];
  mediationFact: string; mediationImpression: string; mediationExplanation: string;
  mediationNotes: string; observations: Observation[]; passes: Pass[];
};
export type Observation = { id: string; start: number | null; end: number | null; perspective: Perspective; label: string; note: string; terms: string[]; confidence: string; createdAt: string; updatedAt?: string };
export type Pass = { id: string; name: string; date: string; equipment: string; notes: Partial<Record<Perspective, string>> };
const key = 'listening-notebook-v1';
const demo: Session = {
 id:'demo-estuary', title:'First light at the estuary', type:'live', createdAt:'2025-04-18T06:14:00.000Z',editedAt:'2025-04-18T06:14:00.000Z',listeningDate:'2025-04-18',recordingDate:'',location:'North inlet, fictional coast',coordinates:'',weather:'Still, overcast',setting:'outdoor',recordist:'',recorder:'',microphones:'',configuration:'',windProtection:'',gain:'',format:'',fileSize:0,duration:0,sampleRate:'',channels:'',processing:'',playbackEquipment:'',generalNotes:'Demonstration content. A fictional live listening session; no audio is included.',tags:['water','dawn','demonstration'],audioId:undefined,demo:true,
 description:'A steady fine-grained wash sits behind intermittent, sharper calls. Attention moves between the near rustle and a low, broad swell that comes and goes without a clear edge.',
  qualities:['Layered','Intermittent','Diffuse','Distant'],qualityNotes:'',observedSource:'',suspectedSource:'Water movement and small birds are possibilities, inferred from listening.',contextLater:'',unknownSource:'The low swell remains unidentified.',sourceConfidence:'possible',sourceEvidence:'Short repeated contours suggested possible calls; no visual confirmation.',sourceNotes:'Possible water movement and distant birds; inferred from listening, not verified.',withheldNotes:'A fine, continuous rustle sits beneath sharper, intermittent sounds. A broad low swell grows and recedes without a clear edge.',experienceNotes:'The space seemed to widen when the low swell receded.',experienceTags:[],mediationFact:'Live listening; no recording chain to describe.',mediationImpression:'',mediationExplanation:'',mediationNotes:'Live listening; no recording chain to describe.',
 observations:[
 {id:'demo-o1',start:42,end:56,perspective:'qualities',label:'Fine texture opens',note:'A thin, continuous rustle becomes easier to hear beneath scattered sharper sounds.',terms:['Layered','Continuous'],confidence:'',createdAt:'2025-04-18T06:15:00.000Z'},
 {id:'demo-o2',start:94,end:111,perspective:'experience',label:'Attention shifts outward',note:'A broad low swell makes the distant edge of the scene feel farther away. The source remains uncertain.',terms:['Diffuse','Surging'],confidence:'',createdAt:'2025-04-18T06:16:00.000Z'},
 {id:'demo-o3',start:null,end:null,perspective:'sources',label:'Possible source',note:'Small bird calls are a possibility, based on their short, repeated contours; not visually confirmed.',terms:[],confidence:'possible',createdAt:'2025-04-18T06:18:00.000Z'}],
 passes:[{id:'demo-p1',name:'First impression',date:'2025-04-18T06:14:00.000Z',equipment:'Open-air listening',notes:{qualities:'Fine-grained wash; intermittent bright events.',experience:'Attention stayed close at first.'}},{id:'demo-p2',name:'Context withheld',date:'2025-04-18T06:22:00.000Z',equipment:'Return listen',notes:{withheld:'A near flutter repeats irregularly over a wider, low continuous bed.',qualities:'Low layer seemed to swell and recede.'}}]
};
let dbPromise: Promise<IDBDatabase> | undefined;
function db() {
 if (!('indexedDB' in window)) return Promise.reject(new Error('IndexedDB is not available in this browser.'));
 if (!dbPromise) dbPromise = new Promise((resolve,reject) => {
  const request=indexedDB.open(key,1);
  request.onupgradeneeded=()=>{ const d=request.result; if(!d.objectStoreNames.contains('sessions'))d.createObjectStore('sessions',{keyPath:'id'}); if(!d.objectStoreNames.contains('audio'))d.createObjectStore('audio',{keyPath:'id'}); };
  request.onsuccess=()=>resolve(request.result); request.onerror=()=>reject(request.error||new Error('Could not open local storage.'));
 });
 return dbPromise;
}
async function withStore<T>(store:string,mode:IDBTransactionMode,fn:(s:IDBObjectStore)=>IDBRequest<T>):Promise<T>{
 const d=await db(); return new Promise((resolve,reject)=>{const tx=d.transaction(store,mode); const req=fn(tx.objectStore(store)); req.onsuccess=()=>resolve(req.result); req.onerror=()=>reject(req.error); tx.onabort=()=>reject(tx.error);});
}
export async function listSessions():Promise<Session[]> {
 const rows=await withStore<Session[]>('sessions','readonly',s=>s.getAll());
  if(rows.length===0){
   let hasSeeded=false;
   try{hasSeeded=localStorage.getItem('listening-notebook-demo-seeded')==='yes';}catch{hasSeeded=false;}
   if(!hasSeeded){
    await saveSession(demo);
    try{localStorage.setItem('listening-notebook-demo-seeded','yes');}catch{}
    return [demo];
   }
  }
  return rows.map(session => ({
   ...session,
   withheldNotes: session.withheldNotes ?? '',
   observations: session.observations.map(observation => ({
    ...observation,
    updatedAt: observation.updatedAt ?? observation.createdAt,
   })),
  }));
}
export const saveSession=(s:Session)=>withStore<IDBValidKey>('sessions','readwrite',o=>o.put(s));
export const deleteSession=(id:string)=>withStore<undefined>('sessions','readwrite',o=>o.delete(id));
export const putAudio=(id:string,blob:Blob,name:string)=>withStore<IDBValidKey>('audio','readwrite',o=>o.put({id,blob,name}));
export const getAudio=async(id:string)=>{try{return await withStore<{id:string;blob:Blob;name:string}|undefined>('audio','readonly',o=>o.get(id));}catch{return undefined;}};
export async function deleteAudio(id:string){try{await withStore<undefined>('audio','readwrite',o=>o.delete(id));}catch{}}
export function makeSession(title:string,type:'recording'|'live'):Session{
  const now=new Date().toISOString();return {id:crypto.randomUUID(),title,type,createdAt:now,editedAt:now,listeningDate:now.slice(0,10),recordingDate:'',location:'',coordinates:'',weather:'',setting:'',recordist:'',recorder:'',microphones:'',configuration:'',windProtection:'',gain:'',format:'',fileSize:0,duration:0,sampleRate:'',channels:'',processing:'',playbackEquipment:'',generalNotes:'',tags:[],description:'',qualities:[],qualityNotes:'',observedSource:'',suspectedSource:'',contextLater:'',unknownSource:'',sourceConfidence:'unknown',sourceEvidence:'',sourceNotes:'',withheldNotes:'',experienceNotes:'',experienceTags:[],mediationFact:'',mediationImpression:'',mediationExplanation:'',mediationNotes:'',observations:[],passes:[]};
}
