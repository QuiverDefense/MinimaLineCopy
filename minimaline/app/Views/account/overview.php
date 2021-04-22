<h2><?= esc($username) ?></h2>

<?php if (! empty($account_info) && is_array($account_info)) : ?>

    <?php foreach ($account_info as $account_info_item): ?>

        <h3><?= esc($account_info_item['username']) ?></h3>

        <div class="main">
            <?= esc($account_info_item['email']) ?>
        </div>
        
        <p><a href="/account/<?= esc($account_info_item['username'], 'url') ?>">View account</a></p>

    <?php endforeach; ?>

<?php else : ?>

    <h3>No Accounts</h3>
    
    <p>Unable to find any accounts for you</p>

<?php endif ?>

<p><a href="/account/signup">Sign up</a></p>