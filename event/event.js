let event=require('events')
let eventEmitter= new event.EventEmitter()
//creating event
//on -add the specific listiner
eventEmitter.on('logout1',()=>{
    console.log('hello logout is done')
})
eventEmitter.on('logout2',()=>{
    console.log('hello logout is done')
})
eventEmitter.on('logout3',()=>{
    console.log('hello logout is done')
})
eventEmitter.on('logout4',()=>{
    console.log('hello logout is done')
})
eventEmitter.on('logout5',()=>{
    console.log('hello logout is done')
})
eventEmitter.on('logout6',()=>{
    console.log('hello logout is done')
})
eventEmitter.on('logout7',()=>{
    console.log('hello logout is done')
})
eventEmitter.on('logout8',()=>{
    console.log('hello logout is done')
})
eventEmitter.on('logout9',()=>{
    console.log('hello logout is done')
})
eventEmitter.on('logout10',()=>{
    console.log('hello logout is done')
})
//onces
eventEmitter.once('logout',()=>{
    console.log('hello logout is done')
})
//addListner
eventEmitter.addListener('login',(arg1,arg2)=>{
    console.log(`hello ${arg1} you are login successfull and you are from ${arg2}`)
})
eventEmitter.addListener('login1',(arg1,arg2)=>{
    console.log(`hello ${arg1} you are login successfull and you are from ${arg2}`)
})
eventEmitter.addListener('login2',(arg1,arg2)=>{
    console.log(`hello ${arg1} you are login successfull and you are from ${arg2}`)
})
//fire
//eventEmitter.emit('logout')
 //eventEmitter.emit('login',"utsav",'delhi')
 //removeAllEvent
 //eventEmitter.removeAllListeners()
 console.log(eventEmitter.eventNames())
 eventEmitter.setMaxListeners(50)
 let z=eventEmitter.getMaxListeners()
 console.log(z)