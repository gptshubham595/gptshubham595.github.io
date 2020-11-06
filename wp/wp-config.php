<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'shubh40_wp504' );

/** MySQL database username */
define( 'DB_USER', 'shubh40_wp504' );

/** MySQL database password */
define( 'DB_PASSWORD', 'f7p67.SPz)' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '9bxah00zqtolrxulfzdipoih0fxuicyaspkxm8l6tmwig9reik8nziov6miosvws' );
define( 'SECURE_AUTH_KEY',  'puxtiucav37e09yuj73m5etml32fjhkyqafdfdc0gokav9bjh1ndt8pnsgpk24rb' );
define( 'LOGGED_IN_KEY',    'nudnlsvhwfl9idivuphbjnqbqlftjniepkdym1ec9gzqarttcvkhgza2rtbs0vx6' );
define( 'NONCE_KEY',        'ep0x1rpddyjqmn1tut1ycribbq8ieeplyudusop1cprg7mnkqauhb5ccokuxvkdl' );
define( 'AUTH_SALT',        'psxz3tpro6yirwqblebgtwyvkwc3gbf6jzd2kmddc0pxewyxaacfmjhmygkg0uuv' );
define( 'SECURE_AUTH_SALT', 'h2yurbezlvrk3k4yuiwrw9dhbnmi8zwemzfl2k1mhlygswlvmbd2zyanln67wi3p' );
define( 'LOGGED_IN_SALT',   'ditse9bev7zwrwpnxvdhweszlboiqzgqyrpfgvmuxsjgemavt4grw01pxhjhlx6g' );
define( 'NONCE_SALT',       'ddzvyakx3dyijeut34uznjgetmhytooum6zlyaaaidq6rtlgde9ehnwdjmkjowsk' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp3d_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
