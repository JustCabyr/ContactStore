## ContactStore ##

**ContactStore** is a website that helps you save contacts.

### Installation ###

* type `git clone https://github.com/JustCabyr/ConrtactStore.git projectname` to clone the repository 
* type `cd projectname`
* type `composer install`
* type `composer update`
* copy *.env.example* to *.env*
* type `php artisan key:generate`to generate secure key in *.env* file
* type `touch database/database.sqlite` to create the SQL file
* if you want to use MySQL, in *.env* file :
   * set DB_CONNECTION
   * set DB_DATABASE
   * set DB_USERNAME
   * set DB_PASSWORD
* type `php artisan migrate` to create and populate tables
* edit *.env* for emails configuration

### Tests ###

When you want to launch the tests refresh and populate the database :

`php artisan migrate:fresh --seed`

### License ###

This example for Laravel is open-sourced software licensed under the MIT license
