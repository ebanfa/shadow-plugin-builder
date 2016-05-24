<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class UserInvite extends Model {

    public $primaryKey = 'id';
    public $table = 'userinvite';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function status()
    {
        return $this->belongsTo('UserInviteStatus');
    }
    /**
     * 
     */
    public function business_unit()
    {
        return $this->belongsTo('BusinessUnit');
    }


}

?>