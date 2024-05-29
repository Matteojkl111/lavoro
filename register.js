<!DOCTYPE html>
<html lang="en">
<head>
    <title>Register</title>
    <script>
        function validateForm() {
            var username = document.forms["registerForm"]["username"].value;
            var password = document.forms["registerForm"]["password"].value;
            
            if (username == "" || password == "") {
                alert("Inserisci sia l'username che la password");
                return false;
            }
        }
    </script>
</head>
<body>
    <form name="registerForm" action="register.php" method="post" onsubmit="return validateForm()">
        <label for="username">Username:</label><br>
        <input type="text" name="username" required><br>
        <label for="password">Password:</label><br>
        <input type="password" name="password" required><br><br>
        <input type="submit" value="Register">
    </form>
</body>
</html>
