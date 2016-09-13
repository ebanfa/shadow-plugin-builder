<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class SocialMediaAccountType extends Model {

    public $primaryKey = 'id';
    public $table = 'socialmediaaccounttype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function soc_account_type()
    {
        return $this->hasMany('SocialMediaAccount');
    }

}

?>