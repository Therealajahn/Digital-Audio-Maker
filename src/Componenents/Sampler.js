import { useEffect } from 'react';
// import axios from 'axios';





function Sampler() {
  useEffect(()=>{  
  const audioContext = new (AudioContext || window.webkitAudioContext)();
    let sample;

    import('./Samples/cuckoo.ogg')
    .then(url => { 
      //to get response from audiofile
      fetch(url.default)                                         
      .then(response =>{
         //to get array data of audio file 
        return response.arrayBuffer();
      })
      .then(buffer => {
         //resamples array buffer data to AC's sampling rate
        return audioContext.decodeAudioData(buffer);
      })
      .then(decoded => {
        //to create an audio node for the audio
        sample = audioContext.createBufferSource();
        sample.buffer = decoded;
        //to connect to speakers
        // sample.connect(audioContext.destination);
        //to start audio 
        // sample.start();
      })
    })
  },[]);   

    return(
        <div className="Sampler"></div>
    )
}
      

export default Sampler;