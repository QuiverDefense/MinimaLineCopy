<h2><?= esc($username) ?></h2>

<?= \Config\Services::validation()->listErrors() ?>

<form action="/account/signup" method="post">
    <?= csrf_field() ?>

    <label for="username">Username</label>
    <input type="input" name="username" /><br />

    <label for="manager_name">Email</label>
    <input type="input" name="email" /><br />

    <label for="manager_name">Password</label>
    <input type="input" name="password" /><br />

    <input type="submit" name="submit" value="Register" />
</form>