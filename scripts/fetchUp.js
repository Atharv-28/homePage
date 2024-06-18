  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);


  // Handle modal open and close
  const modal = document.getElementById("myModal");
  const btn = document.getElementById("openModalBtn");
  const span = document.getElementsByClassName("close")[0];

  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Handle form submission
  document.getElementById('addCardForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const imgUrl = document.getElementById('imgUrl').value;
    const name = document.getElementById('name').value;
    const url = document.getElementById('url').value;

    try {
      await addDoc(collection(db, "Urls"), {
        img: imgUrl,
        name: name,
        url: url
      });
      alert('Document successfully written!');
      modal.style.display = "none";
      fetchDataAndPopulateCards(); // Refresh the cards
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  });