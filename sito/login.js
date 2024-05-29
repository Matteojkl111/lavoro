<!DOCTYPE html>
<html lang="en">
<head>
    <title>Login</title>
    <script>
        function validateForm() {
            var username = document.forms["loginForm"]["username"].value;
            var password = document.forms["loginForm"]["password"].value;
            
            if (username == "" || password == "") {
                alert("Inserisci sia l'username che la password");
                return false;
            }
        }
    </script>
</head>
<body>
    <form name="loginForm" action="login.php" method="post" onsubmit="return validateForm()">
        <label for="username">Username:</label><br>
        <input type="text" name="username" required><br>
        <label for="password">Password:</label><br>
        <input type="password" name="password" required><br><br>
        <input type="submit" value="Login">
    </form>
    Non sei ancora registrato? &nbsp; <a href="http://localhost/CortiVerifica/register.php">Registrati</a>
</body>
</html>
