<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PartyRole extends Model {

    public $primaryKey = 'id';
    public $table = 'partyrole';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function party_role_party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function party_role_type()
    {
        return $this->belongsTo('RoleType');
    }


}

?>