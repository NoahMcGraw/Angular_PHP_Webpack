<?php

class Nav
{
    public function __construct() {
    }

    /**
     * This will provide an array of nav links
     *
     *
     * @return array of nav links
     */
    public function get() {
        $navLinks = array(
            array(
                "id" => 0,
                "label" => 'Home',
                "link" => '/home',
            ),
            array(
                "id" => 1,
                "label" => 'Store',
                "link" => '/store',
            ),
            array(
                "id" => 2,
                "label" => 'Account',
                "link" => '/account',
            )
        );

        return $navLinks;
    }
}
