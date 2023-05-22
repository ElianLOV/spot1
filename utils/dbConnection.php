<?php
// Database connection 
$conn = mysqli_connect('34.31.132.220', 'root', '', 'myspotify');

mysqli_set_charset($conn, "utf8");

if (!$conn) {
    echo mysqli_connect_error();
}