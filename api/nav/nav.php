<?php
require_once __DIR__ . '/nav.class.php';

/**
 * This will provide an array of nav links
 *
 *
 * @return array of nav links
 */
if ($method === 'get') {
        // anonymous endpoint access allowed
        $nav = new Nav();
        $response = $nav->get();

        echo json_encode($response);
}
else {
    throw new Exception('No valid method given.');
}
