<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class UserInviteStatus extends Model {

    public $primaryKey = 'id';
    public $table = 'userinvitestatus';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function status()
    {
        return $this->hasMany('UserInvite');
    }

}

?>