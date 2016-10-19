<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class SocialMediaAccount extends Model {

    public $primaryKey = 'id';
    public $table = 'socialmediaaccount';
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
        return $this->belongsTo('SocialMediaAccountType');
    }
    /**
     * 
     */
    public function soc_party()
    {
        return $this->belongsTo('Party');
    }


}

?>