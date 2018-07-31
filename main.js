  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;	// Chrome supports speech recognition with prefixed properties. Firefox and other non-prefix browsers

  const recognition = new SpeechRecognition();	// create Speech Recognition
  recognition.interimResults = true;	// whether interim results should be returned
  recognition.lang = 'en-US';	// set the language of the current SpeechRecognition
  
  let p = document.createElement('p');	// in an HTML document, create an element named tagName
  const words = document.querySelector('.words');	// returns the first Element within the document that matches the specified selector
  words.appendChild(p);	// adds a node to the end of the list of children of a specified parent node. 

  recognition.addEventListener('result', e => {	// use  callback to process the results
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');

      p.textContent = transcript;

      if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
      }
  });

  recognition.addEventListener('end', recognition.start);

  recognition.start(); // launches speech recognition
