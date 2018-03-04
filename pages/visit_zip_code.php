<!DOCTYPE html>
    <header>
        <title>First and Last Name</title>
    </header>
    <body>
        <div class="zip_code">
            <p>Enter first and last name. There will be two buttons on this 
            page, one to go back to the welcome page and another to move to the
            next question. There will also be a page counter at the bottom of the
            screen.
            </p>
            <form>
                <input type="text" name="zip_code" placeholder="28658">
                <br>
            </form>
            <form>
            </form>
            <form action="visit_name.php">
                <input type="submit" value="Back">
            </form>
            <form action="../includes/button_next.php">
                <input type="submit" value="Next">
            </form>
        </div>
    </body>
</html>