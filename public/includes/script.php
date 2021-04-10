<script src="<?php echo BASE_URL . '/static/script/script.js'?>"></script>
<script src="bootstrap/js/bootstrap.min.js"></script>

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
   https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-analytics.js"></script>

<script src="https://www.gstatic.com/firebasejs/8.2.10/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.10/firebase-database.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAw7Xo6r-cl7F7941n9ATu_lY3mZKb96gM",
    authDomain: "web-design-project-2d49c.firebaseapp.com",
    projectId: "web-design-project-2d49c",
    storageBucket: "web-design-project-2d49c.appspot.com",
    messagingSenderId: "991843929971",
    appId: "1:991843929971:web:d6788f2f38d52046eebf06",
    measurementId: "G-Q4JYLLX992"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>