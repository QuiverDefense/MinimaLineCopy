<h2><?= esc($store_name) ?></h2>

<?php if (! empty($store_info) && is_array($store_info)) : ?>

    <?php foreach ($store_info as $store_info_item): ?>

        <h3><?= esc($store_info_item['store_name']) ?></h3>

        <div class="main">
            <?= esc($store_info_item['manager_name']) ?>
        </div>

        <?= esc($store_info_item['location']) ?>
        
        <p><a href="/store/<?= esc($store_info_item['store_name'], 'url') ?>">View store</a></p>

    <?php endforeach; ?>

<?php else : ?>

    <h3>No Stores</h3>

    <p>Unable to find any stores for you.</p>

<?php endif ?>

<p><a href="/store/create">Register a store</a></p>