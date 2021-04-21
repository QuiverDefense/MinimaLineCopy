<h2><?= esc($store_name) ?></h2>

<?= \Config\Services::validation()->listErrors() ?>

<form action="/store/create" method="post">
    <?= csrf_field() ?>

    <label for="store_name">Store Name</label>
    <input type="input" name="store_name" /><br />

    <label for="manager_name">Manager Name</label>
    <input type="input" name="manager_name" /><br />

    <label for="location">Store Location</label>
    <textarea name="location"></textarea><br />

    <input type="submit" name="submit" value="Register" />
</form>