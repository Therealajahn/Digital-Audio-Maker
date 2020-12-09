import { useEffect,useState } from 'react';
// import axios from 'axios';





function Sampler() {
  
  async function importFetchAndDecodeSample(audioContext){
    
      const sampleURL = await import('./Samples/cuckoo.ogg'); 
      const response = await fetch(sampleURL.default);
      const arrayBuffer = await response.arrayBuffer();
      console.log('arrayBuffer', arrayBuffer)
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer); 
      console.log('audioBuffer', audioBuffer)
      return audioBuffer;   
    }

  function playSample(sample,audioContext){ 
      const source = audioContext.createBufferSource();
      source.connect(audioContext.destination);
      source.buffer = sample;
      source.start();
  }
  
  useEffect(()=>{  
    const audioContext = new (AudioContext || window.webkitAudioContext)(); 
    importFetchAndDecodeSample(audioContext)
    .then(sample=>{
      // playSample(sample,audioContext)
    })
  },[]); 
  

    return(
        <div className="Sampler"></div>
    )
}
      

export default Sampler;