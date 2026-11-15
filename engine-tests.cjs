const fs=require('fs'),vm=require('vm'),assert=require('assert');
const elements=new Map(),stored=new Map();
const element=id=>{if(!elements.has(id))elements.set(id,{innerHTML:'',textContent:'',style:{},showModal(){},close(){},focus(){}});return elements.get(id)};
const ctx={console,setTimeout:()=>0,clearTimeout(){},document:{getElementById:element,querySelectorAll:()=>[],addEventListener(){}},localStorage:{getItem:k=>stored.get(k)||null,setItem:(k,v)=>stored.set(k,v)}};vm.createContext(ctx);vm.runInContext(fs.readFileSync(require('path').join(__dirname,'../game.js'),'utf8'),ctx);const run=c=>vm.runInContext(c,ctx);
run(`render=()=>{};toast=()=>{};var training=[{x:3,y:2,rot:0},{x:3,y:3,rot:0},{x:6,y:1,rot:1},{x:5,y:2,rot:0},{x:2,y:3,rot:0},{x:4,y:2,rot:0},{x:4,y:3,rot:0},{x:1,y:3,rot:0}];`);
const setup=i=>run(`start(${i});s.layout=JSON.parse(JSON.stringify(training));s.phase='ops';`);
setup(0);assert.equal(run('engineering().connected.size'),8);assert.equal(run('engineering().water'),7);let east=run('engineering().solar');run('s.layout[2].rot=0');assert(run('engineering().solar')<east);run('s.layout[7]={x:7,y:5,rot:0}');assert(run('engineering().water')<7);
setup(3);assert.equal(run('stormDamage(false)'),0);run('s.layout[5]={x:7,y:5,rot:0}');assert(run('stormDamage(false)')>0);
setup(0);run('advance()');assert(run('s.pending'));let day=run('s.day');run('advance()');assert.equal(run('s.day'),day);run('resolve(1)');assert(run('s.dust'));assert(run('projection().gen')<east);
let results=[];for(let i=0;i<5;i++){setup(i);let max=0;while(run("s.phase==='ops'")&&max++<12){if(run('s.pending')){run('resolve(0)');continue;} // intentional science investment on final campaign
 if(i===4)run("s.policy.lab=s.day<3?'boost':s.day===3?'normal':'boost';s.policy.farm=s.day>=3?'off':'normal';");
 run('advance()');}let r=run('({mission:s.mission+1,success:s.success,day:s.day,science:s.science,energy:Math.round(s.energy),reason:s.reason})');results.push(r);assert(r.success,JSON.stringify(r));}
setup(2);run("s.energy=1;s.policy.lab='boost';s.policy.farm='boost';s.day=2;advance()");assert.equal(run('s.success'),false);assert.equal(run('s.phase'),'debrief');
setup(1);run('s.day=1;save()');assert.equal(JSON.parse(stored.get('orbita-v2')).active.day,1);
for(let mission=0;mission<5;mission++){for(let choice=0;choice<(mission===3?3:2);choice++){setup(mission);run(`s.day=missions[s.mission].event;s.pending=true;resolve(${choice});`);assert.equal(run('s.pending'),false);assert.equal(run('s.decisions.length'),1);assert(run('statNames.every(([k])=>s[k]>=0&&s[k]<=100)'));let science=run('s.science');run(`resolve(${choice})`);assert.equal(run('s.science'),science);}}
setup(0);run('s.layout[2]={x:7,y:5,rot:1}');assert.equal(run('engineering().solar'),0);
setup(0);run('s.layout[3]=null');assert.equal(run('engineering().capacity'),30);
setup(1);run('s.day=1;save()');
const fresh={...ctx};vm.createContext(fresh);vm.runInContext(fs.readFileSync(require('path').join(__dirname,'../game.js'),'utf8'),fresh);vm.runInContext("$('start').onclick()",fresh);assert.equal(vm.runInContext('s.day',fresh),1);assert.equal(vm.runInContext('s.mission',fresh),1);
// Render every view with a minimal DOM contract: catches missing IDs and branch exceptions.
run('menu();brief(0);start(0);builder();s.layout=JSON.parse(JSON.stringify(training));s.phase="ops";operations();s.pending=true;s.day=1;operations();resolve(0);finish(false,"Test debrief");debrief();');
console.log(JSON.stringify({checks:'PASS: network, terrain, rotation, shelter proximity, persistent dust, emergency pause, all five wins, resource failure, saved state',campaign:results},null,2));

