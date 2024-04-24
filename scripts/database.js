// database.js

if (!window.firebase || !firebase.apps.length) {
    // Load Firebase App SDK using type="module"
    const firebaseScript = document.createElement('script');
    firebaseScript.src = 'https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js';
    firebaseScript.type = 'module';
    document.head.appendChild(firebaseScript);
  
    // When Firebase App SDK is loaded, load Firebase Firestore SDK
    firebaseScript.onload = () => {
      import('https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js')
        .then(() => {
          initializeFirebase();
        });
    };
  } else {
    initializeFirebase();
  }
  
  function initializeFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyBc9O62PeD2l14k-olHAqYszuWVd3WvQBA",
        authDomain: "onstart-74b64.firebaseapp.com",
        projectId: "onstart-74b64",
        storageBucket: "onstart-74b64.appspot.com",
        messagingSenderId: "505241029024",
        appId: "1:505241029024:web:2f5bf95bd6c2d1a9e47cc5",
        measurementId: "G-4NE1QMQQYX"
      };
  
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  
    fetchDataAndPopulateCards();
  }
  
  function fetchDataAndPopulateCards() {
    const db = firebase.firestore();
    const gridContainer = document.getElementById('gridContainer');
  
    db.collection("Url's").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // Get data from the document
        const data = doc.data();
        
        // Create card elements
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <a href="${data.url}">
            <img src="${data.img}" alt="Image" />
          </a>
        `;
        
        // Append card to the grid container
        gridContainer.appendChild(card);
      });
    }).catch((error) => {
      console.error("Error getting documents: ", error);
    });
  }
  