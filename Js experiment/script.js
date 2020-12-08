const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

const getSampleFile = (audioContext,url) => {
 fetch(url)
 .then(response =>{
    return response.arrayBuffer()
 })
 .then(arrayBuffer =>{
  console.log("ab",arrayBuffer) 
  return audioContext.decodeAudioData(arrayBuffer)
 })
}

getSampleFile(audioCtx,'cuckoo.ogg');