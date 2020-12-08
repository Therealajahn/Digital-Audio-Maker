import { useEffect } from 'react';
import axios from 'axios';
import cuckoo from './Samples/cuckoo.ogg';




function Sampler() {
    
           
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            const audioCtx = new AudioContext();
           
            const file = import('./Samples/cuckoo.ogg')
            
            fetch(file)
            .then(fetch =>{
             fetch.arrayBuffer()
           })
            
            function getSampleFile(audioContext,url){
              console.log('import(url)', import(url))
             
             fetch(url)
             .then(response =>{
                return response.arrayBuffer()
             })
             .then(arrayBuffer =>{
              console.log("ab",arrayBuffer) 
              return audioContext.decodeAudioData(arrayBuffer)
              })
            
          }
          // getSampleFile(audioCtx,file);
          
          //   const setupSampleFile = async() => {
          //     const filePath = './Samples/cuckoo.ogg';
          //     const sample = await getSampleFile(audioCtx, filePath);
          //     return sample;
          // }//
          // setupSampleFile()
            
            
        //       let playbackRate = 1;
              
              
          
      
        //     const playSample = (audioContext, audioBuffer) => {
        //       const sampleSource = audioContext.createBufferSource();
        //       sampleSource.buffer = audioBuffer;
        //       sampleSource.playBackRate.setValueAtTime(playbackRate, audioCtx.currentTime);
        //       sampleSource.connect(audioContext.destination)
        //       sampleSource.start();
        //       return sampleSource;
        //   }
        //   let cuckoo;
          
          
        //   .then((sample) => {
        //     cuckoo = sample;
        //   });
          
        //   playSample(AudioContext, cuckoo);
      
    
    return(
        <div className="Sampler"></div>
    )
}

export default Sampler;