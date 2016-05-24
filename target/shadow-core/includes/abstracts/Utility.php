<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Utility extends Model {

    public $primaryKey = 'id';
    public $table = 'utility';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function u_type()
    {
        return $this->belongsTo('UtilityType');
    }

    /**
     * 
     */
    public function pu_utility()
    {
        return $this->hasMany('PropertyUtility');
    }

}

?>