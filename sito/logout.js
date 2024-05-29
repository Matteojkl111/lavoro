<!DOCTYPE html>
<html lang="en">
<head>
    <title>Logout</title>
    <script>
        // Funzione per reindirizzare l'utente alla pagina di login
        function redirectToLogin() {
            window.location.href = "http://localhost/CortiVerifica/login.php";
        }

        // Codice per reindirizzare automaticamente dopo un certo periodo di tempo (opzionale)
        setTimeout(function() {
            redirectToLogin();
        }, 3000); // 3000 millisecondi = 3 secondi
    </script>
</head>
<body>
    <p>Sessione scaduta. Verrai reindirizzato alla pagina di login tra qualche secondo.</p>
    <!-- Opzionale: fornire un link diretto alla pagina di login -->
    <p>Se non vuoi attendere, puoi fare clic qui per tornare alla <a href="http://localhost/CortiVerifica/login.php">pagina di login</a>.</p>
</body>
</html>
